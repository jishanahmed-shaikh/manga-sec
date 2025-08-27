// MANGA-SEC Accessibility Features
class AccessibilityManager {
    constructor() {
        this.settings = {
            highContrast: localStorage.getItem('manga-sec-high-contrast') === 'true',
            largeText: localStorage.getItem('manga-sec-large-text') === 'true',
            reducedMotion: localStorage.getItem('manga-sec-reduced-motion') === 'true',
            screenReader: localStorage.getItem('manga-sec-screen-reader') === 'true'
        };
        
        this.init();
    }

    init() {
        this.applySettings();
        this.setupKeyboardNavigation();
        this.setupScreenReaderSupport();
        this.detectPreferences();
    }

    detectPreferences() {
        // Detect system preferences
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.settings.reducedMotion = true;
            this.applyReducedMotion();
        }

        if (window.matchMedia('(prefers-contrast: high)').matches) {
            this.settings.highContrast = true;
            this.applyHighContrast();
        }
    }

    applySettings() {
        if (this.settings.highContrast) {
            this.applyHighContrast();
        }
        if (this.settings.largeText) {
            this.applyLargeText();
        }
        if (this.settings.reducedMotion) {
            this.applyReducedMotion();
        }
        if (this.settings.screenReader) {
            this.applyScreenReaderMode();
        }
    }

    applyHighContrast() {
        document.documentElement.style.setProperty('--comic-black', '#000000');
        document.documentElement.style.setProperty('--comic-white', '#ffffff');
        document.documentElement.style.setProperty('--comic-gray', '#808080');
        document.documentElement.style.setProperty('--comic-light-gray', '#f0f0f0');
        document.documentElement.classList.add('high-contrast');
    }

    applyLargeText() {
        document.documentElement.classList.add('large-text');
    }

    applyReducedMotion() {
        document.documentElement.classList.add('reduced-motion');
        
        // Disable particle effects if enabled
        if (window.particleSystem) {
            window.particleSystem.stop();
        }
    }

    applyScreenReaderMode() {
        document.documentElement.classList.add('screen-reader-mode');
        this.addAriaLabels();
        this.addSkipLinks();
    }

    setupKeyboardNavigation() {
        // Focus management
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });

        // Add focus indicators
        const style = document.createElement('style');
        style.textContent = `
            .keyboard-navigation *:focus {
                outline: 3px solid #0066cc !important;
                outline-offset: 2px !important;
            }
        `;
        document.head.appendChild(style);
    }

    setupScreenReaderSupport() {
        // Add live region for announcements
        const liveRegion = document.createElement('div');
        liveRegion.id = 'live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.style.cssText = `
            position: absolute;
            left: -10000px;
            width: 1px;
            height: 1px;
            overflow: hidden;
        `;
        document.body.appendChild(liveRegion);
    }

    announce(message) {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
            liveRegion.textContent = message;
            setTimeout(() => {
                liveRegion.textContent = '';
            }, 1000);
        }
    }

    addAriaLabels() {
        // Add ARIA labels to interactive elements
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if (!button.getAttribute('aria-label') && button.textContent) {
                button.setAttribute('aria-label', button.textContent.trim());
            }
        });

        // Add role attributes
        const panels = document.querySelectorAll('.comic-panel, .manga-panel');
        panels.forEach(panel => {
            panel.setAttribute('role', 'main');
            panel.setAttribute('aria-label', 'Content panel');
        });
    }

    addSkipLinks() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--comic-black);
            color: var(--comic-white);
            padding: 8px;
            text-decoration: none;
            z-index: 10000;
            border: 2px solid var(--comic-white);
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add main content ID
        const app = document.getElementById('app');
        if (app) {
            app.id = 'main-content';
            app.setAttribute('tabindex', '-1');
        }
    }

    toggleHighContrast() {
        this.settings.highContrast = !this.settings.highContrast;
        localStorage.setItem('manga-sec-high-contrast', this.settings.highContrast);
        
        if (this.settings.highContrast) {
            this.applyHighContrast();
        } else {
            document.documentElement.classList.remove('high-contrast');
            // Reset to theme colors
            if (window.themeManager) {
                window.themeManager.applyTheme(window.themeManager.getCurrentTheme());
            }
        }
        
        this.announce(`High contrast ${this.settings.highContrast ? 'enabled' : 'disabled'}`);
        return this.settings.highContrast;
    }

    toggleLargeText() {
        this.settings.largeText = !this.settings.largeText;
        localStorage.setItem('manga-sec-large-text', this.settings.largeText);
        
        if (this.settings.largeText) {
            this.applyLargeText();
        } else {
            document.documentElement.classList.remove('large-text');
        }
        
        this.announce(`Large text ${this.settings.largeText ? 'enabled' : 'disabled'}`);
        return this.settings.largeText;
    }

    toggleReducedMotion() {
        this.settings.reducedMotion = !this.settings.reducedMotion;
        localStorage.setItem('manga-sec-reduced-motion', this.settings.reducedMotion);
        
        if (this.settings.reducedMotion) {
            this.applyReducedMotion();
        } else {
            document.documentElement.classList.remove('reduced-motion');
        }
        
        this.announce(`Reduced motion ${this.settings.reducedMotion ? 'enabled' : 'disabled'}`);
        return this.settings.reducedMotion;
    }

    getSettings() {
        return { ...this.settings };
    }
}