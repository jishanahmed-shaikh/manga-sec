// MANGA-SEC Keyboard Shortcuts System
class KeyboardShortcuts {
    constructor() {
        this.shortcuts = {
            'KeyH': () => this.goHome(),
            'KeyS': () => this.openSettings(),
            'KeyB': () => this.openBadges(),
            'KeyQ': () => this.openQuizStatus(),
            'KeyT': () => this.toggleTheme(),
            'KeyM': () => this.toggleSound(),
            'KeyP': () => this.toggleParticles(),
            'KeyR': () => this.randomQuote(),
            'KeyI': () => this.showStats(),
            'KeyC': () => this.celebrateMode(),
            'Space': (e) => { e.preventDefault(); this.quickAction(); },
            'Escape': () => this.goHome(),
            'F1': (e) => { e.preventDefault(); this.showHelp(); },
            'ArrowUp': () => this.konami('up'),
            'ArrowDown': () => this.konami('down'),
            'ArrowLeft': () => this.konami('left'),
            'ArrowRight': () => this.konami('right')
        };
        
        this.konamiCode = [];
        this.konamiSequence = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right'];
        
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            // Don't trigger shortcuts when typing in inputs
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }
            
            const key = e.code || e.key;
            if (this.shortcuts[key]) {
                e.preventDefault();
                this.shortcuts[key](e);
                
                // Play sound effect
                if (window.soundEffects) {
                    window.soundEffects.play('click');
                }
            }
        });
        
        // Show shortcuts hint on first visit
        if (!localStorage.getItem('manga-sec-shortcuts-shown')) {
            setTimeout(() => {
                this.showShortcutsHint();
                localStorage.setItem('manga-sec-shortcuts-shown', 'true');
            }, 3000);
        }
    }

    goHome() {
        if (typeof loadLanding === 'function') {
            loadLanding();
        }
    }

    openSettings() {
        if (typeof showSettings === 'function') {
            showSettings();
        }
    }

    openBadges() {
        if (typeof showBadgeGallery === 'function') {
            showBadgeGallery();
        }
    }

    openQuizStatus() {
        if (typeof showQuizStatus === 'function') {
            showQuizStatus();
        }
    }

    toggleTheme() {
        if (window.themeManager) {
            window.themeManager.toggleTheme();
        }
    }

    toggleSound() {
        if (window.soundEffects) {
            const enabled = window.soundEffects.toggle();
            if (window.notifications) {
                window.notifications.show(`Sound ${enabled ? 'ON' : 'OFF'}`, 'info', 1500);
            }
        }
    }

    toggleParticles() {
        if (window.particleSystem) {
            const enabled = window.particleSystem.toggle();
            if (window.notifications) {
                window.notifications.show(`Particles ${enabled ? 'ON' : 'OFF'}`, 'info', 1500);
            }
        }
    }

    showHelp() {
        const helpContent = `
            <div class="manga-panel">
                <h2 class="comic-title">⌨️ KEYBOARD SHORTCUTS</h2>
                <div class="shortcuts-grid">
                    <div class="shortcut-item">
                        <kbd>H</kbd>
                        <span>Home / Mainframe</span>
                    </div>
                    <div class="shortcut-item">
                        <kbd>S</kbd>
                        <span>Settings Panel</span>
                    </div>
                    <div class="shortcut-item">
                        <kbd>B</kbd>
                        <span>Badge Gallery</span>
                    </div>
                    <div class="shortcut-item">
                        <kbd>Q</kbd>
                        <span>Quiz Status</span>
                    </div>
                    <div class="shortcut-item">
                        <kbd>T</kbd>
                        <span>Toggle Theme</span>
                    </div>
                    <div class="shortcut-item">
                        <kbd>M</kbd>
                        <span>Toggle Sound</span>
                    </div>
                    <div class="shortcut-item">
                        <kbd>P</kbd>
                        <span>Toggle Particles</span>
                    </div>
                    <div class="shortcut-item">
                        <kbd>ESC</kbd>
                        <span>Go Back / Home</span>
                    </div>
                    <div class="shortcut-item">
                        <kbd>R</kbd>
                        <span>Random Quote</span>
                    </div>
                    <div class="shortcut-item">
                        <kbd>I</kbd>
                        <span>Show Stats</span>
                    </div>
                    <div class="shortcut-item">
                        <kbd>C</kbd>
                        <span>Celebrate Mode</span>
                    </div>
                    <div class="shortcut-item">
                        <kbd>SPACE</kbd>
                        <span>Quick Action</span>
                    </div>
                    <div class="shortcut-item">
                        <kbd>F1</kbd>
                        <span>Show This Help</span>
                    </div>
                    <div class="shortcut-item">
                        <kbd>↑↑↓↓←→←→</kbd>
                        <span>Secret Code 🎮</span>
                    </div>
                </div>
                <button class="button" onclick="loadLanding()">🏠 BACK TO MAINFRAME</button>
            </div>
        `;
        
        if (typeof showPanel === 'function') {
            showPanel(helpContent);
        }
    }

    randomQuote() {
        const quotes = [
            "🔐 Security is not a product, but a process!",
            "🤖 AI without ethics is chaos unleashed!",
            "⚡ Hack the planet, but hack it ethically!",
            "🛡️ Your data is your digital soul - protect it!",
            "🎯 The best firewall is between your ears!"
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        if (window.notifications) {
            window.notifications.show(randomQuote, 'info', 4000);
        }
    }

    showStats() {
        const stats = JSON.parse(localStorage.getItem('manga-sec-progress') || '{}');
        const message = `📊 Quizzes: ${stats.totalQuizzes || 0} | 🏆 Badges: ${(stats.badges || []).length} | 🔥 Streak: ${stats.bestStreak || 0}`;
        if (window.notifications) {
            window.notifications.show(message, 'info', 3000);
        }
    }

    celebrateMode() {
        if (window.particleSystem) {
            window.particleSystem.burst(50);
        }
        if (window.notifications) {
            window.notifications.show('🎉 CELEBRATION MODE ACTIVATED!', 'success', 2000);
        }
    }

    quickAction() {
        // Space bar performs context-sensitive action
        const currentPage = document.querySelector('.comic-panel, .manga-panel');
        if (currentPage) {
            const buttons = currentPage.querySelectorAll('.button');
            if (buttons.length > 0) {
                buttons[0].click(); // Click first button
            }
        }
    }

    konami(direction) {
        this.konamiCode.push(direction);
        if (this.konamiCode.length > this.konamiSequence.length) {
            this.konamiCode.shift();
        }
        
        if (JSON.stringify(this.konamiCode) === JSON.stringify(this.konamiSequence)) {
            this.activateKonamiCode();
            this.konamiCode = [];
        }
    }

    activateKonamiCode() {
        // Secret Konami Code activation
        if (window.notifications) {
            window.notifications.show('🎮 KONAMI CODE ACTIVATED! Secret mode unlocked!', 'success', 5000);
        }
        if (window.particleSystem) {
            window.particleSystem.burst(100);
        }
        // Add secret theme
        if (window.themeManager) {
            window.themeManager.applyTheme('neon');
        }
        // Play celebration sound
        if (window.soundEffects) {
            window.soundEffects.play('success');
        }
    }

    showShortcutsHint() {
        if (window.notifications) {
            window.notifications.show('💡 Press F1 for keyboard shortcuts!', 'info', 5000);
        }
    }
}