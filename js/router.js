// MANGA-SEC URL Router
class Router {
    constructor() {
        this.routes = {
            '': () => this.loadHome(),
            'home': () => this.loadHome(),
            'quiz': () => this.loadQuiz(),
            'badges': () => this.loadBadges(),
            'status': () => this.loadStatus(),
            'settings': () => this.loadSettings(),
            'help': () => this.loadHelp()
        };
        
        this.init();
    }

    init() {
        // Handle initial load
        window.addEventListener('load', () => {
            this.handleRoute();
        });

        // Handle back/forward buttons
        window.addEventListener('popstate', () => {
            this.handleRoute();
        });

        // Handle hash changes
        window.addEventListener('hashchange', () => {
            this.handleRoute();
        });
    }

    handleRoute() {
        const hash = window.location.hash.slice(1) || '';
        const params = new URLSearchParams(window.location.search);
        const action = params.get('action') || hash;
        
        if (this.routes[action]) {
            this.routes[action]();
        } else {
            this.routes['']();
        }
        
        // Track page view
        if (window.analytics) {
            window.analytics.trackPageView(action || 'home');
        }
    }

    navigate(route, updateHistory = true) {
        if (updateHistory) {
            if (route) {
                window.history.pushState({}, '', `#${route}`);
            } else {
                window.history.pushState({}, '', window.location.pathname);
            }
        }
        
        if (this.routes[route]) {
            this.routes[route]();
        }
    }

    loadHome() {
        if (typeof loadLanding === 'function') {
            loadLanding();
        }
    }

    loadQuiz() {
        if (typeof startTopic === 'function') {
            startTopic();
        } else if (typeof showComicIntro === 'function') {
            showComicIntro();
        }
    }

    loadBadges() {
        if (typeof showBadgeGallery === 'function') {
            showBadgeGallery();
        }
    }

    loadStatus() {
        if (typeof showQuizStatus === 'function') {
            showQuizStatus();
        }
    }

    loadSettings() {
        if (typeof showSettings === 'function') {
            showSettings();
        }
    }

    loadHelp() {
        if (window.keyboardShortcuts && typeof window.keyboardShortcuts.showHelp === 'function') {
            window.keyboardShortcuts.showHelp();
        }
    }
}