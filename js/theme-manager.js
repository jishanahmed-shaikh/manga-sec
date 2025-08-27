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
            },
            neon: {
                '--comic-black': '#00ff41',
                '--comic-white': '#0a0a0a',
                '--comic-gray': '#00cc33',
                '--comic-light-gray': '#1a1a1a',
                '--comic-dark-gray': '#00ff41',
                '--comic-bg': '#000000',
                '--comic-panel-bg': '#0f0f0f',
                '--comic-text': '#00ff41'
            },
            cyberpunk: {
                '--comic-black': '#ff0080',
                '--comic-white': '#0a0015',
                '--comic-gray': '#cc0066',
                '--comic-light-gray': '#1a0010',
                '--comic-dark-gray': '#ff0080',
                '--comic-bg': '#000000',
                '--comic-panel-bg': '#0f0008',
                '--comic-text': '#ff0080'
            },
            hacker: {
                '--comic-black': '#00ffff',
                '--comic-white': '#001a1a',
                '--comic-gray': '#00cccc',
                '--comic-light-gray': '#002020',
                '--comic-dark-gray': '#00ffff',
                '--comic-bg': '#000000',
                '--comic-panel-bg': '#001010',
                '--comic-text': '#00ffff'
            },
            retro: {
                '--comic-black': '#ffaa00',
                '--comic-white': '#1a1100',
                '--comic-gray': '#cc8800',
                '--comic-light-gray': '#2a1f00',
                '--comic-dark-gray': '#ffaa00',
                '--comic-bg': '#000000',
                '--comic-panel-bg': '#0f0800',
                '--comic-text': '#ffaa00'
            },
            vampire: {
                '--comic-black': '#cc0000',
                '--comic-white': '#1a0000',
                '--comic-gray': '#990000',
                '--comic-light-gray': '#200000',
                '--comic-dark-gray': '#cc0000',
                '--comic-bg': '#000000',
                '--comic-panel-bg': '#0a0000',
                '--comic-text': '#cc0000'
            },
            ocean: {
                '--comic-black': '#0099cc',
                '--comic-white': '#001a2a',
                '--comic-gray': '#0077aa',
                '--comic-light-gray': '#002030',
                '--comic-dark-gray': '#0099cc',
                '--comic-bg': '#000a15',
                '--comic-panel-bg': '#001020',
                '--comic-text': '#0099cc'
            },
            forest: {
                '--comic-black': '#00cc44',
                '--comic-white': '#001a08',
                '--comic-gray': '#009933',
                '--comic-light-gray': '#002010',
                '--comic-dark-gray': '#00cc44',
                '--comic-bg': '#000a03',
                '--comic-panel-bg': '#001008',
                '--comic-text': '#00cc44'
            },
            sunset: {
                '--comic-black': '#ff6b35',
                '--comic-white': '#1a0f08',
                '--comic-gray': '#cc5529',
                '--comic-light-gray': '#2a1810',
                '--comic-dark-gray': '#ff6b35',
                '--comic-bg': '#0f0503',
                '--comic-panel-bg': '#1a0a05',
                '--comic-text': '#ff6b35'
            },
            royal: {
                '--comic-black': '#6a0dad',
                '--comic-white': '#0f0215',
                '--comic-gray': '#550a8a',
                '--comic-light-gray': '#1f051a',
                '--comic-dark-gray': '#6a0dad',
                '--comic-bg': '#050008',
                '--comic-panel-bg': '#0a0010',
                '--comic-text': '#6a0dad'
            },
            gold: {
                '--comic-black': '#ffd700',
                '--comic-white': '#1a1500',
                '--comic-gray': '#ccac00',
                '--comic-light-gray': '#2a2200',
                '--comic-dark-gray': '#ffd700',
                '--comic-bg': '#0a0800',
                '--comic-panel-bg': '#151000',
                '--comic-text': '#ffd700'
            },
            ice: {
                '--comic-black': '#87ceeb',
                '--comic-white': '#0a1518',
                '--comic-gray': '#6ca5bc',
                '--comic-light-gray': '#152025',
                '--comic-dark-gray': '#87ceeb',
                '--comic-bg': '#050a0c',
                '--comic-panel-bg': '#0a1215',
                '--comic-text': '#87ceeb'
            },
            fire: {
                '--comic-black': '#ff4500',
                '--comic-white': '#1a0800',
                '--comic-gray': '#cc3700',
                '--comic-light-gray': '#2a1000',
                '--comic-dark-gray': '#ff4500',
                '--comic-bg': '#0a0300',
                '--comic-panel-bg': '#150500',
                '--comic-text': '#ff4500'
            },
            toxic: {
                '--comic-black': '#adff2f',
                '--comic-white': '#151a08',
                '--comic-gray': '#8acc26',
                '--comic-light-gray': '#252a10',
                '--comic-dark-gray': '#adff2f',
                '--comic-bg': '#080a03',
                '--comic-panel-bg': '#101505',
                '--comic-text': '#adff2f'
            },
            galaxy: {
                '--comic-black': '#9370db',
                '--comic-white': '#120a1a',
                '--comic-gray': '#7659b0',
                '--comic-light-gray': '#1f1525',
                '--comic-dark-gray': '#9370db',
                '--comic-bg': '#080508',
                '--comic-panel-bg': '#100a15',
                '--comic-text': '#9370db'
            },
            cherry: {
                '--comic-black': '#ff69b4',
                '--comic-white': '#1a0a15',
                '--comic-gray': '#cc5490',
                '--comic-light-gray': '#2a1520',
                '--comic-dark-gray': '#ff69b4',
                '--comic-bg': '#0a0508',
                '--comic-panel-bg': '#150a10',
                '--comic-text': '#ff69b4'
            },
            steel: {
                '--comic-black': '#708090',
                '--comic-white': '#0f1012',
                '--comic-gray': '#5a6673',
                '--comic-light-gray': '#1a1d20',
                '--comic-dark-gray': '#708090',
                '--comic-bg': '#050608',
                '--comic-panel-bg': '#0a0c0f',
                '--comic-text': '#708090'
            },
            emerald: {
                '--comic-black': '#50c878',
                '--comic-white': '#081a10',
                '--comic-gray': '#40a060',
                '--comic-light-gray': '#102a18',
                '--comic-dark-gray': '#50c878',
                '--comic-bg': '#030a05',
                '--comic-panel-bg': '#051508',
                '--comic-text': '#50c878'
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
            window.notifications.show(`🎨 Theme: ${this.getThemeDisplayName(this.currentTheme)}`, 'info', 2000);
        }
    }

    getThemeDisplayName(themeName) {
        const names = {
            light: 'Classic Light',
            dark: 'Dark Mode',
            sepia: 'Vintage Sepia',
            neon: 'Matrix Green',
            cyberpunk: 'Cyberpunk Pink',
            hacker: 'Hacker Cyan',
            retro: 'Retro Orange',
            vampire: 'Vampire Red',
            ocean: 'Ocean Blue',
            forest: 'Forest Green',
            sunset: 'Sunset Blaze',
            royal: 'Royal Purple',
            gold: 'Golden Hour',
            ice: 'Arctic Ice',
            fire: 'Phoenix Fire',
            toxic: 'Toxic Waste',
            galaxy: 'Galaxy Purple',
            cherry: 'Cherry Blossom',
            steel: 'Steel Gray',
            emerald: 'Emerald Dream'
        };
        return names[themeName] || themeName;
    }

    updateThemeButton() {
        const themeButton = document.getElementById('theme-toggle');
        if (themeButton) {
            const icons = {
                light: '🌞',
                dark: '🌙',
                sepia: '📜',
                neon: '💚',
                cyberpunk: '💖',
                hacker: '💎',
                retro: '🧡',
                vampire: '❤️',
                ocean: '💙',
                forest: '💚',
                sunset: '🌅',
                royal: '👑',
                gold: '✨',
                ice: '❄️',
                fire: '🔥',
                toxic: '☢️',
                galaxy: '🌌',
                cherry: '🌸',
                steel: '⚙️',
                emerald: '💎'
            };
            themeButton.innerHTML = `${icons[this.currentTheme] || '🎨'} ${this.getThemeDisplayName(this.currentTheme)}`;
        }
    }

    getCurrentTheme() {
        return this.currentTheme;
    }

    getAllThemes() {
        return Object.keys(this.themes).map(key => ({
            id: key,
            name: this.getThemeDisplayName(key),
            icon: {
                light: '🌞',
                dark: '🌙',
                sepia: '📜',
                neon: '💚',
                cyberpunk: '💖',
                hacker: '💎',
                retro: '🧡',
                vampire: '❤️',
                ocean: '💙',
                forest: '💚',
                sunset: '🌅',
                royal: '👑',
                gold: '✨',
                ice: '❄️',
                fire: '🔥',
                toxic: '☢️',
                galaxy: '🌌',
                cherry: '🌸',
                steel: '⚙️',
                emerald: '💎'
            }[key] || '🎨'
        }));
    }
}