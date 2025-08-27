// MANGA-SEC Analytics and Performance Monitoring
class Analytics {
    constructor() {
        this.sessionStart = Date.now();
        this.interactions = [];
        this.performance = {
            pageLoads: 0,
            quizCompletions: 0,
            averageQuizTime: 0,
            totalTimeSpent: 0
        };
        this.loadAnalytics();
        this.startSession();
    }

    startSession() {
        this.sessionId = this.generateSessionId();
        this.trackEvent('session_start', {
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            screenResolution: `${screen.width}x${screen.height}`,
            theme: window.themeManager ? window.themeManager.getCurrentTheme() : 'light'
        });
    }

    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    trackEvent(eventName, data = {}) {
        const event = {
            id: this.generateEventId(),
            name: eventName,
            timestamp: Date.now(),
            sessionId: this.sessionId,
            data: data
        };
        
        this.interactions.push(event);
        this.saveAnalytics();
        
        // Keep only last 1000 events to prevent storage bloat
        if (this.interactions.length > 1000) {
            this.interactions = this.interactions.slice(-1000);
        }
    }

    generateEventId() {
        return 'event_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
    }

    trackQuizStart(topic) {
        this.trackEvent('quiz_start', {
            topic: topic,
            userLevel: this.getUserLevel()
        });
    }

    trackQuizComplete(topic, score, time) {
        this.performance.quizCompletions++;
        this.updateAverageQuizTime(time);
        
        this.trackEvent('quiz_complete', {
            topic: topic,
            score: score,
            time: time,
            perfect: score === 3,
            userLevel: this.getUserLevel()
        });
    }

    trackBadgeEarned(badgeId) {
        this.trackEvent('badge_earned', {
            badgeId: badgeId,
            totalBadges: userProgress.badges.length
        });
    }

    trackPageView(pageName) {
        this.performance.pageLoads++;
        this.trackEvent('page_view', {
            page: pageName,
            loadTime: performance.now()
        });
    }

    trackThemeChange(newTheme) {
        this.trackEvent('theme_change', {
            newTheme: newTheme
        });
    }

    trackSettingsChange(setting, value) {
        this.trackEvent('settings_change', {
            setting: setting,
            value: value
        });
    }

    updateAverageQuizTime(newTime) {
        const totalQuizzes = this.performance.quizCompletions;
        const currentAverage = this.performance.averageQuizTime;
        this.performance.averageQuizTime = ((currentAverage * (totalQuizzes - 1)) + newTime) / totalQuizzes;
    }

    getUserLevel() {
        const totalQuizzes = userProgress.totalQuizzes;
        if (totalQuizzes === 0) return 'beginner';
        if (totalQuizzes < 5) return 'novice';
        if (totalQuizzes < 15) return 'intermediate';
        if (totalQuizzes < 30) return 'advanced';
        return 'expert';
    }

    getSessionDuration() {
        return Date.now() - this.sessionStart;
    }

    generateReport() {
        const sessionDuration = this.getSessionDuration();
        const recentEvents = this.interactions.slice(-50);
        
        return {
            session: {
                id: this.sessionId,
                duration: sessionDuration,
                startTime: new Date(this.sessionStart).toISOString()
            },
            performance: {
                ...this.performance,
                sessionDuration: sessionDuration,
                eventsCount: this.interactions.length
            },
            userProgress: {
                level: this.getUserLevel(),
                totalQuizzes: userProgress.totalQuizzes,
                perfectScores: userProgress.perfectScores,
                currentStreak: userProgress.currentStreak,
                badgesEarned: userProgress.badges.length
            },
            recentActivity: recentEvents.map(event => ({
                name: event.name,
                timestamp: new Date(event.timestamp).toISOString(),
                data: event.data
            }))
        };
    }

    exportReport() {
        const report = this.generateReport();
        const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `manga-sec-analytics-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    saveAnalytics() {
        try {
            localStorage.setItem('manga-sec-analytics', JSON.stringify({
                interactions: this.interactions.slice(-500), // Keep last 500 events
                performance: this.performance
            }));
        } catch (error) {
            console.log('Analytics storage failed:', error);
        }
    }

    loadAnalytics() {
        try {
            const saved = localStorage.getItem('manga-sec-analytics');
            if (saved) {
                const data = JSON.parse(saved);
                this.interactions = data.interactions || [];
                this.performance = { ...this.performance, ...data.performance };
            }
        } catch (error) {
            console.log('Analytics loading failed:', error);
        }
    }

    // Privacy-friendly analytics - no personal data collected
    getInsights() {
        const totalEvents = this.interactions.length;
        const quizEvents = this.interactions.filter(e => e.name.includes('quiz'));
        const sessionDuration = this.getSessionDuration();
        
        return {
            engagement: {
                totalInteractions: totalEvents,
                quizInteractions: quizEvents.length,
                sessionDuration: Math.round(sessionDuration / 1000), // in seconds
                averageQuizTime: Math.round(this.performance.averageQuizTime)
            },
            learning: {
                userLevel: this.getUserLevel(),
                completionRate: userProgress.totalQuizzes > 0 ? 
                    Math.round((userProgress.perfectScores / userProgress.totalQuizzes) * 100) : 0,
                streakRecord: userProgress.bestStreak
            }
        };
    }
}