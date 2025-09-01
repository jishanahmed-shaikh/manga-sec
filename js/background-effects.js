// MANGA-SEC Dynamic Background Effects System
class BackgroundEffects {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.effects = [];
        this.animationId = null;
        this.isActive = true;
        
        this.effectTypes = {
            floatingIcons: {
                enabled: true,
                icons: ['🔒', '💻', '🛡️', '⚔️', '🎭', '🌐', '🔐', '⚡', '🤖', '🔥'],
                count: 15,
                speed: 0.5
            },
            matrixRain: {
                enabled: false,
                characters: '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
                columns: 0,
                drops: []
            },
            particles: {
                enabled: true,
                count: 30,
                colors: ['#00ff41', '#ff0080', '#00ffff', '#ffd700', '#ff4500']
            }
        };
        
        this.init();
    }

    init() {
        this.createCanvas();
        this.setupEffects();
        this.startAnimation();
        this.setupEventListeners();
    }

    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'background-effects-canvas';
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.1;
        `;
        
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.setupEffects(); // Reinitialize effects on resize
    }

    setupEffects() {
        this.effects = [];
        
        // Floating Icons Effect
        if (this.effectTypes.floatingIcons.enabled) {
            for (let i = 0; i < this.effectTypes.floatingIcons.count; i++) {
                this.effects.push({
                    type: 'floatingIcon',
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    icon: this.effectTypes.floatingIcons.icons[Math.floor(Math.random() * this.effectTypes.floatingIcons.icons.length)],
                    speed: Math.random() * this.effectTypes.floatingIcons.speed + 0.2,
                    rotation: Math.random() * Math.PI * 2,
                    rotationSpeed: (Math.random() - 0.5) * 0.02,
                    size: Math.random() * 20 + 15,
                    opacity: Math.random() * 0.3 + 0.1
                });
            }
        }

        // Matrix Rain Effect
        if (this.effectTypes.matrixRain.enabled) {
            this.effectTypes.matrixRain.columns = Math.floor(this.canvas.width / 20);
            this.effectTypes.matrixRain.drops = [];
            
            for (let i = 0; i < this.effectTypes.matrixRain.columns; i++) {
                this.effectTypes.matrixRain.drops[i] = 1;
            }
        }

        // Floating Particles Effect
        if (this.effectTypes.particles.enabled) {
            for (let i = 0; i < this.effectTypes.particles.count; i++) {
                this.effects.push({
                    type: 'particle',
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    size: Math.random() * 3 + 1,
                    color: this.effectTypes.particles.colors[Math.floor(Math.random() * this.effectTypes.particles.colors.length)],
                    opacity: Math.random() * 0.5 + 0.2,
                    life: Math.random() * 100 + 50
                });
            }
        }
    }

    startAnimation() {
        if (!this.isActive) return;
        
        this.animationId = requestAnimationFrame(() => {
            this.update();
            this.draw();
            this.startAnimation();
        });
    }

    update() {
        this.effects.forEach((effect, index) => {
            switch (effect.type) {
                case 'floatingIcon':
                    this.updateFloatingIcon(effect);
                    break;
                case 'particle':
                    this.updateParticle(effect, index);
                    break;
            }
        });

        if (this.effectTypes.matrixRain.enabled) {
            this.updateMatrixRain();
        }
    }

    updateFloatingIcon(effect) {
        effect.y -= effect.speed;
        effect.rotation += effect.rotationSpeed;
        
        // Reset position when icon goes off screen
        if (effect.y < -50) {
            effect.y = this.canvas.height + 50;
            effect.x = Math.random() * this.canvas.width;
        }
    }

    updateParticle(effect, index) {
        effect.x += effect.vx;
        effect.y += effect.vy;
        effect.life--;
        
        // Bounce off edges
        if (effect.x <= 0 || effect.x >= this.canvas.width) effect.vx *= -1;
        if (effect.y <= 0 || effect.y >= this.canvas.height) effect.vy *= -1;
        
        // Remove dead particles and create new ones
        if (effect.life <= 0) {
            this.effects[index] = {
                type: 'particle',
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 3 + 1,
                color: this.effectTypes.particles.colors[Math.floor(Math.random() * this.effectTypes.particles.colors.length)],
                opacity: Math.random() * 0.5 + 0.2,
                life: Math.random() * 100 + 50
            };
        }
    }

    updateMatrixRain() {
        for (let i = 0; i < this.effectTypes.matrixRain.drops.length; i++) {
            const text = this.effectTypes.matrixRain.characters.charAt(
                Math.floor(Math.random() * this.effectTypes.matrixRain.characters.length)
            );
            
            this.ctx.fillStyle = '#00ff41';
            this.ctx.font = '15px monospace';
            this.ctx.fillText(text, i * 20, this.effectTypes.matrixRain.drops[i] * 20);
            
            if (this.effectTypes.matrixRain.drops[i] * 20 > this.canvas.height && Math.random() > 0.975) {
                this.effectTypes.matrixRain.drops[i] = 0;
            }
            
            this.effectTypes.matrixRain.drops[i]++;
        }
    }

    draw() {
        // Clear canvas with slight fade effect
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.effects.forEach(effect => {
            switch (effect.type) {
                case 'floatingIcon':
                    this.drawFloatingIcon(effect);
                    break;
                case 'particle':
                    this.drawParticle(effect);
                    break;
            }
        });
    }

    drawFloatingIcon(effect) {
        this.ctx.save();
        this.ctx.globalAlpha = effect.opacity;
        this.ctx.translate(effect.x, effect.y);
        this.ctx.rotate(effect.rotation);
        this.ctx.font = `${effect.size}px Arial`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(effect.icon, 0, 0);
        this.ctx.restore();
    }

    drawParticle(effect) {
        this.ctx.save();
        this.ctx.globalAlpha = effect.opacity;
        this.ctx.fillStyle = effect.color;
        this.ctx.beginPath();
        this.ctx.arc(effect.x, effect.y, effect.size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });

        // Theme change listener
        document.addEventListener('themeChanged', (e) => {
            this.adaptToTheme(e.detail.theme);
        });
    }

    adaptToTheme(theme) {
        switch (theme) {
            case 'neon':
                this.canvas.style.opacity = '0.15';
                this.effectTypes.matrixRain.enabled = true;
                this.effectTypes.floatingIcons.enabled = false;
                break;
            case 'cyberpunk':
                this.canvas.style.opacity = '0.12';
                this.effectTypes.particles.colors = ['#ff0080', '#ff00ff', '#8000ff'];
                break;
            case 'dark':
                this.canvas.style.opacity = '0.08';
                break;
            case 'light':
                this.canvas.style.opacity = '0.05';
                break;
            default:
                this.canvas.style.opacity = '0.1';
        }
        
        this.setupEffects(); // Reinitialize with new settings
    }

    toggle() {
        this.isActive = !this.isActive;
        
        if (this.isActive) {
            this.startAnimation();
            this.canvas.style.display = 'block';
        } else {
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
            }
            this.canvas.style.display = 'none';
        }
        
        return this.isActive;
    }

    setIntensity(level) {
        // level: 0 (off), 1 (low), 2 (medium), 3 (high)
        const intensities = [
            { opacity: '0', count: 0 },
            { opacity: '0.05', count: 10 },
            { opacity: '0.1', count: 20 },
            { opacity: '0.15', count: 30 }
        ];
        
        const intensity = intensities[level] || intensities[2];
        this.canvas.style.opacity = intensity.opacity;
        this.effectTypes.floatingIcons.count = intensity.count;
        this.effectTypes.particles.count = intensity.count;
        
        if (level === 0) {
            this.toggle();
        } else if (!this.isActive) {
            this.toggle();
        }
        
        this.setupEffects();
    }

    destroy() {
        this.isActive = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas && this.canvas.parentElement) {
            this.canvas.remove();
        }
    }
}