// MANGA-SEC Particle Effects System
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.animationId = null;
        this.enabled = localStorage.getItem('manga-sec-particles') !== 'false';
        this.init();
    }

    init() {
        if (!this.enabled) return;
        
        this.canvas = document.createElement('canvas');
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1000;
        `;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        
        // Resize handler
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
        
        this.startAnimation();
    }

    createParticle(x, y, type = 'success') {
        const particle = {
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4 - 2,
            life: 1.0,
            decay: 0.02,
            size: Math.random() * 15 + 8,
            type: type,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.2
        };
        
        this.particles.push(particle);
    }

    createBurst(x, y, count = 10, type = 'success') {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                this.createParticle(
                    x + (Math.random() - 0.5) * 20,
                    y + (Math.random() - 0.5) * 20,
                    type
                );
            }, i * 50);
        }
    }

    update() {
        this.particles = this.particles.filter(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.1; // gravity
            particle.life -= particle.decay;
            particle.rotation += particle.rotationSpeed;
            
            return particle.life > 0;
        });
    }

    draw() {
        if (!this.ctx) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            this.ctx.save();
            this.ctx.globalAlpha = particle.life;
            this.ctx.translate(particle.x, particle.y);
            this.ctx.rotate(particle.rotation);
            
            const color = this.getParticleColor(particle.type);
            this.ctx.fillStyle = color;
            
            // Draw different shapes based on type
            switch (particle.type) {
                case 'success':
                    this.drawStar(particle.size);
                    break;
                case 'badge':
                    this.drawDiamond(particle.size);
                    break;
                case 'error':
                    this.drawX(particle.size);
                    break;
                default:
                    this.drawCircle(particle.size);
            }
            
            this.ctx.restore();
        });
    }

    drawStar(size) {
        const spikes = 5;
        const outerRadius = size;
        const innerRadius = size * 0.5;
        
        this.ctx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (i * Math.PI) / spikes;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            if (i === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
        }
        this.ctx.closePath();
        this.ctx.fill();
    }

    drawDiamond(size) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, -size);
        this.ctx.lineTo(size, 0);
        this.ctx.lineTo(0, size);
        this.ctx.lineTo(-size, 0);
        this.ctx.closePath();
        this.ctx.fill();
    }

    drawX(size) {
        this.ctx.strokeStyle = this.ctx.fillStyle;
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(-size, -size);
        this.ctx.lineTo(size, size);
        this.ctx.moveTo(size, -size);
        this.ctx.lineTo(-size, size);
        this.ctx.stroke();
    }

    drawCircle(size) {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, size, 0, Math.PI * 2);
        this.ctx.fill();
    }

    getParticleColor(type) {
        const colors = {
            success: '#00cc00',
            badge: '#ffd700',
            error: '#cc0000',
            info: '#0066cc',
            default: '#000000'
        };
        return colors[type] || colors.default;
    }

    startAnimation() {
        const animate = () => {
            this.update();
            this.draw();
            this.animationId = requestAnimationFrame(animate);
        };
        animate();
    }

    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }

    toggle() {
        this.enabled = !this.enabled;
        localStorage.setItem('manga-sec-particles', this.enabled);
        
        if (this.enabled) {
            this.init();
        } else {
            this.stop();
        }
        
        return this.enabled;
    }
}