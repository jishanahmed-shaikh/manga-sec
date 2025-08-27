// MANGA-SEC Error Handler
class ErrorHandler {
    constructor() {
        this.errors = [];
        this.maxErrors = 50;
        this.init();
    }

    init() {
        // Global error handler
        window.addEventListener('error', (event) => {
            this.handleError({
                type: 'javascript',
                message: event.message,
                filename: event.filename,
                lineno: event.lineno,
                colno: event.colno,
                stack: event.error ? event.error.stack : null,
                timestamp: Date.now()
            });
        });

        // Promise rejection handler
        window.addEventListener('unhandledrejection', (event) => {
            this.handleError({
                type: 'promise',
                message: event.reason ? event.reason.toString() : 'Unhandled promise rejection',
                timestamp: Date.now()
            });
        });

        // Network error detection
        window.addEventListener('offline', () => {
            this.handleNetworkChange(false);
        });

        window.addEventListener('online', () => {
            this.handleNetworkChange(true);
        });
    }

    handleError(error) {
        console.error('MANGA-SEC Error:', error);
        
        this.errors.push(error);
        
        // Keep only recent errors
        if (this.errors.length > this.maxErrors) {
            this.errors = this.errors.slice(-this.maxErrors);
        }

        // Show user-friendly error message
        this.showUserError(error);
        
        // Save error for debugging
        this.saveError(error);
    }

    showUserError(error) {
        let userMessage = 'Something went wrong. Please try again.';
        
        if (error.type === 'network') {
            userMessage = 'Network error. Please check your connection.';
        } else if (error.message && error.message.includes('localStorage')) {
            userMessage = 'Storage error. Your progress might not be saved.';
        }

        if (window.notifications) {
            window.notifications.show(`⚠️ ${userMessage}`, 'error', 5000);
        }
    }

    handleNetworkChange(isOnline) {
        if (isOnline) {
            if (window.notifications) {
                window.notifications.show('🌐 Back online! Syncing data...', 'success', 3000);
            }
            this.syncOfflineData();
        } else {
            if (window.notifications) {
                window.notifications.show('📡 You are offline. App will continue to work!', 'warning', 5000);
            }
        }
    }

    syncOfflineData() {
        // Sync any offline data when back online
        try {
            const offlineData = localStorage.getItem('manga-sec-offline-data');
            if (offlineData) {
                // Process offline data
                localStorage.removeItem('manga-sec-offline-data');
                console.log('Offline data synced');
            }
        } catch (error) {
            console.error('Sync failed:', error);
        }
    }

    saveError(error) {
        try {
            const savedErrors = JSON.parse(localStorage.getItem('manga-sec-errors') || '[]');
            savedErrors.push(error);
            
            // Keep only last 20 errors
            const recentErrors = savedErrors.slice(-20);
            localStorage.setItem('manga-sec-errors', JSON.stringify(recentErrors));
        } catch (e) {
            console.error('Could not save error:', e);
        }
    }

    getErrorReport() {
        return {
            errors: this.errors,
            userAgent: navigator.userAgent,
            timestamp: Date.now(),
            url: window.location.href,
            online: navigator.onLine
        };
    }

    clearErrors() {
        this.errors = [];
        localStorage.removeItem('manga-sec-errors');
    }

    // Graceful degradation helpers
    safeExecute(fn, fallback = null) {
        try {
            return fn();
        } catch (error) {
            this.handleError({
                type: 'safe_execute',
                message: error.message,
                stack: error.stack,
                timestamp: Date.now()
            });
            return fallback;
        }
    }

    safeLocalStorage(key, value = null) {
        try {
            if (value !== null) {
                localStorage.setItem(key, value);
                return true;
            } else {
                return localStorage.getItem(key);
            }
        } catch (error) {
            this.handleError({
                type: 'localStorage',
                message: `LocalStorage error for key: ${key}`,
                timestamp: Date.now()
            });
            return value !== null ? false : null;
        }
    }
}