// MANGA-SEC Progress Tracking System
class ProgressTracker {
    constructor() {
        this.sessionData = {
            startTime: Date.now(),
            actionsPerformed: 0,
            pagesVisited: [],
            timeSpent: {},
            streakData: {
                current: 0,
                best: 0,
                lastActivity: null
            }
        };
        
        this.init();
    }

    init() {
        this.loadSessionData();
        this.startTracking();
        this.setupVisibilityTracking();
    }

    loadSessionData() {
        const saved = localStorage.getItem('manga-sec-session');
        if (saved) {
            const data = JSON.parse(saved);
            // Merge with current session
            this.sessionData = { ...this.sessionData, ...data };
        }
    }

    saveSessionData() {
        localStorage.setItem('manga-sec-session', JSON.stringify(this.sessionData));
    }

    startTracking() {
        // Track page visits
        this.trackPageVisit('home');
        
        // Track user interactions
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('button')) {
                this.trackAction('button_click', e.target.textContent);
            }
        });

        // Track time spent
        setInterval(() => {
            this.updateTimeSpent();
        }, 10000); // Update every 10 seconds
    }

    setupVisibilityTracking() {
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.saveSessionData();
            } else {
                this.sessionData.startTime = Date.now();
            }
        });
    }

    trackPageVisit(pageName) {
        this.sessionData.pagesVisited.push({
            page: pageName,
            timestamp: Date.now(),
            timeSpent: 0
        });
        
        if (this.sessionData.pagesVisited.length > 50) {
            this.sessionData.pagesVisited.shift(); // Keep only last 50 visits
        }
        
        this.saveSessionData();
    }

    trackAction(actionType, details = '') {
        this.sessionData.actionsPerformed++;
        
        // Track specific actions
        if (!this.sessionData.actions) {
            this.sessionData.actions = {};
        }
        
        if (!this.sessionData.actions[actionType]) {
            this.sessionData.actions[actionType] = 0;
        }
        
        this.sessionData.actions[actionType]++;
        this.saveSessionData();
        
        // Show milestone notifications
        this.checkMilestones();
    }

    updateTimeSpent() {
        const currentPage = this.getCurrentPage();
        if (!this.sessionData.timeSpent[currentPage]) {
            this.sessionData.timeSpent[currentPage] = 0;
        }
        
        this.sessionData.timeSpent[currentPage] += 10; // 10 seconds
        this.saveSessionData();
    }

    getCurrentPage() {
        // Determine current page based on DOM content
        if (document.querySelector('.quiz-header')) return 'quiz';
        if (document.querySelector('.badge-gallery')) return 'badges';
        if (document.querySelector('.settings-grid')) return 'settings';
        return 'home';
    }

    checkMilestones() {
        const actions = this.sessionData.actionsPerformed;
        
        if (actions === 10 && window.notifications) {
            window.notifications.show('🎯 10 Actions Completed! You\'re getting the hang of it!', 'success', 3000);
        }
        
        if (actions === 50 && window.notifications) {
            window.notifications.show('🚀 50 Actions! You\'re a power user!', 'success', 3000);
            if (window.particleSystem) {
                window.particleSystem.burst(25);
            }
        }
        
        if (actions === 100 && window.notifications) {
            window.notifications.show('👑 100 Actions! Cybersecurity Master!', 'success', 4000);
            if (window.particleSystem) {
                window.particleSystem.burst(50);
            }
        }
    }

    getSessionStats() {
        const totalTime = Date.now() - this.sessionData.startTime;
        const minutes = Math.floor(totalTime / 60000);
        
        return {
            sessionTime: minutes,
            actionsPerformed: this.sessionData.actionsPerformed,
            pagesVisited: this.sessionData.pagesVisited.length,
            mostVisitedPage: this.getMostVisitedPage(),
            efficiency: this.calculateEfficiency()
        };
    }

    getMostVisitedPage() {
        const pageCount = {};
        this.sessionData.pagesVisited.forEach(visit => {
            pageCount[visit.page] = (pageCount[visit.page] || 0) + 1;
        });
        
        return Object.keys(pageCount).reduce((a, b) => 
            pageCount[a] > pageCount[b] ? a : b, 'home'
        );
    }

    calculateEfficiency() {
        const totalTime = Date.now() - this.sessionData.startTime;
        const minutes = totalTime / 60000;
        return minutes > 0 ? Math.round(this.sessionData.actionsPerformed / minutes) : 0;
    }

    showProgressReport() {
        const stats = this.getSessionStats();
        const report = `
            <div class="manga-panel">
                <h2 class="comic-title">📊 SESSION PROGRESS</h2>
                <div class="progress-stats">
                    <div class="stat-item">
                        <div class="stat-icon">⏱️</div>
                        <div class="stat-label">Session Time</div>
                        <div class="stat-value">${stats.sessionTime} min</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">🎯</div>
                        <div class="stat-label">Actions</div>
                        <div class="stat-value">${stats.actionsPerformed}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">📄</div>
                        <div class="stat-label">Pages Visited</div>
                        <div class="stat-value">${stats.pagesVisited}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">⚡</div>
                        <div class="stat-label">Efficiency</div>
                        <div class="stat-value">${stats.efficiency}/min</div>
                    </div>
                </div>
                <div class="progress-message">
                    <p>Most visited: <strong>${stats.mostVisitedPage.toUpperCase()}</strong></p>
                    <p>Keep exploring to unlock more achievements! 🚀</p>
                </div>
                <button class="button" onclick="loadLanding()">🏠 BACK TO MAINFRAME</button>
            </div>
        `;
        
        if (typeof showPanel === 'function') {
            showPanel(report);
        }
    }

    reset() {
        this.sessionData = {
            startTime: Date.now(),
            actionsPerformed: 0,
            pagesVisited: [],
            timeSpent: {},
            actions: {}
        };
        this.saveSessionData();
        
        if (window.notifications) {
            window.notifications.show('🔄 Progress tracking reset!', 'info', 2000);
        }
    }
}