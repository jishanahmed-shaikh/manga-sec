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
            'Escape': () => this.goHome(),
            'F1': (e) => { e.preventDefault(); this.showHelp(); }
        };
        
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
                        <kbd>F1</kbd>
                        <span>Show This Help</span>
                    </div>
                </div>
                <button class="button" onclick="loadLanding()">🏠 BACK TO MAINFRAME</button>
            </div>
        `;
        
        if (typeof showPanel === 'function') {
            showPanel(helpContent);
        }
    }

    showShortcutsHint() {
        if (window.notifications) {
            window.notifications.show('💡 Press F1 for keyboard shortcuts!', 'info', 5000);
        }
    }
}