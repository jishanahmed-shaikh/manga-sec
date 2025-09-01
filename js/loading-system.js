// MANGA-SEC Interactive Loading System
class LoadingSystem {
    constructor() {
        this.loadingMessages = [
            "🔐 Initializing security protocols...",
            "🤖 Loading AI ethics modules...",
            "⚡ Charging cyber defenses...",
            "🛡️ Activating firewall systems...",
            "🎯 Calibrating hack detection...",
            "💻 Booting manga interface...",
            "🌐 Connecting to the matrix...",
            "🔥 Warming up particle effects...",
            "🎨 Loading epic themes...",
            "🚀 Preparing for launch..."
        ];
        
        this.currentMessageIndex = 0;
        this.loadingInterval = null;
    }

    show(duration = 3000, callback = null) {
        this.createLoadingOverlay();
        this.startMessageRotation();
        
        setTimeout(() => {
            this.hide();
            if (callback) callback();
        }, duration);
    }

    createLoadingOverlay() {
        // Remove existing overlay if present
        this.hide();
        
        const overlay = document.createElement('div');
        overlay.id = 'loading-overlay';
        overlay.innerHTML = `
            <div class="loading-container">
                <div class="loading-logo">
                    <div class="manga-loader">
                        <div class="loader-ring"></div>
                        <div class="loader-ring"></div>
                        <div class="loader-ring"></div>
                        <div class="loader-text">MANGA-SEC</div>
                    </div>
                </div>
                <div class="loading-message" id="loading-message">
                    ${this.loadingMessages[0]}
                </div>
                <div class="loading-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" id="progress-fill"></div>
                    </div>
                    <div class="progress-text">
                        <span id="progress-percent">0%</span>
                        <span class="progress-dots">
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </span>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        this.animateProgress();
    }

    startMessageRotation() {
        this.loadingInterval = setInterval(() => {
            this.currentMessageIndex = (this.currentMessageIndex + 1) % this.loadingMessages.length;
            const messageElement = document.getElementById('loading-message');
            if (messageElement) {
                messageElement.style.opacity = '0';
                setTimeout(() => {
                    messageElement.textContent = this.loadingMessages[this.currentMessageIndex];
                    messageElement.style.opacity = '1';
                }, 200);
            }
        }, 800);
    }

    animateProgress() {
        const progressFill = document.getElementById('progress-fill');
        const progressPercent = document.getElementById('progress-percent');
        
        if (!progressFill || !progressPercent) return;
        
        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += Math.random() * 15 + 5; // Random progress increments
            if (progress > 100) progress = 100;
            
            progressFill.style.width = progress + '%';
            progressPercent.textContent = Math.floor(progress) + '%';
            
            if (progress >= 100) {
                clearInterval(progressInterval);
            }
        }, 200);
    }

    hide() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.remove();
            }, 300);
        }
        
        if (this.loadingInterval) {
            clearInterval(this.loadingInterval);
            this.loadingInterval = null;
        }
    }

    showQuickLoader(message = "Loading...", duration = 1500) {
        const quickLoader = document.createElement('div');
        quickLoader.className = 'quick-loader';
        quickLoader.innerHTML = `
            <div class="quick-loader-content">
                <div class="spinner"></div>
                <div class="quick-message">${message}</div>
            </div>
        `;
        
        document.body.appendChild(quickLoader);
        
        setTimeout(() => {
            quickLoader.style.opacity = '0';
            setTimeout(() => quickLoader.remove(), 300);
        }, duration);
    }

    showPageTransition(fromPage, toPage, callback) {
        const transition = document.createElement('div');
        transition.className = 'page-transition';
        transition.innerHTML = `
            <div class="transition-content">
                <div class="transition-text">
                    <div class="from-page">${fromPage}</div>
                    <div class="transition-arrow">→</div>
                    <div class="to-page">${toPage}</div>
                </div>
                <div class="transition-loader">
                    <div class="loader-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(transition);
        
        setTimeout(() => {
            transition.style.opacity = '0';
            setTimeout(() => {
                transition.remove();
                if (callback) callback();
            }, 300);
        }, 1200);
    }
}