// MANGA-SEC Theme Manager
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('manga-sec-theme') || 'light';
        this.themes = {
            light: {
                '--comic-black': '#000000',
                '--comic-white': '#ffffff',
                '--comic-gray': '#666666',
                '--comic-light-gray': '#f0f0f0',
                '--comic-dark-gray': '#333333',
                '--comic-bg': '#ffffff',
                '--comic-panel-bg': '#f8f8f8',
                '--comic-text': '#000000'
            },
            dark: {
                '--comic-black': '#ffffff',
                '--comic-white': '#1a1a1a',
                '--comic-gray': '#999999',
                '--comic-light-gray': '#2a2a2a',
                '--comic-dark-gray': '#cccccc',
                '--comic-bg': '#0f0f0f',
                '--comic-panel-bg': '#1a1a1a',
                '--comic-text': '#ffffff'
            },
            sepia: {
                '--comic-black': '#3c2e26',
                '--comic-white': '#f4f1ea',
                '--comic-gray': '#8b7355',
                '--comic-light-gray': '#e8e2d5',
                '--comic-dark-gray': '#5d4e37',
                '--comic-bg': '#f4f1ea',
                '--comic-panel-bg': '#ede6d3',
                '--comic-text': '#3c2e26'
            }
        };
        this.applyTheme(this.currentTheme);
    }

    applyTheme(themeName) {
        if (!this.themes[themeName]) return;
        
        const theme = this.themes[themeName];
        const root = document.documentElement;
        
        Object.entries(theme).forEach(([property, value]) => {
            root.style.setProperty(property, value);
        });
        
        this.currentTheme = themeName;
        localStorage.setItem('manga-sec-theme', themeName);
        
        // Update theme toggle button if exists
        this.updateThemeButton();
    }

    toggleTheme() {
        const themes = Object.keys(this.themes);
        const currentIndex = themes.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        this.applyTheme(themes[nextIndex]);
        
        if (window.notifications) {
            window.notifications.show(`Theme changed to ${this.currentTheme}`, 'info', 2000);
        }
    }

    updateThemeButton() {
        const themeButton = document.getElementById('theme-toggle');
        if (themeButton) {
            const icons = {
                light: '🌞',
                dark: '🌙',
                sepia: '📜'
            };
            themeButton.innerHTML = icons[this.currentTheme] || '🎨';
        }
    }

    getCurrentTheme() {
        return this.currentTheme;
    }
}