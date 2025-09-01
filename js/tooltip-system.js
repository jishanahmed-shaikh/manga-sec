// MANGA-SEC Interactive Tooltip System
class TooltipSystem {
    constructor() {
        this.tooltip = null;
        this.tooltipData = {
            // Button tooltips
            'INITIALIZE': 'Start your cybersecurity journey! 🚀',
            'BADGE GALLERY': 'View all your earned achievements 🏅',
            'QUIZ STATUS': 'Check current quiz availability ⏰',
            'SETTINGS': 'Customize themes and preferences ⚙️',
            'MAINFRAME': 'Return to the main dashboard 🏠',
            
            // Theme tooltips
            'Classic Light': 'Clean and professional light theme ☀️',
            'Dark Mode': 'Easy on the eyes dark interface 🌙',
            'Matrix Green': 'Hacker-style green terminal look 💚',
            'Cyberpunk Pink': 'Futuristic neon pink vibes 💖',
            'Vampire Red': 'Dark and mysterious red theme ❤️',
            
            // Quiz tooltips
            'READY TO HACK': 'Begin the cybersecurity challenge! 💻',
            'AFFIRMATIVE': 'Confirm and start the mission ✅',
            'NEGATIVE': 'Cancel and return to safety ❌',
            
            // General tooltips
            'sound-toggle': 'Toggle sound effects on/off 🔊',
            'theme-toggle': 'Cycle through available themes 🎨',
            'particle-toggle': 'Enable/disable particle effects ✨'
        };
        
        this.init();
    }

    init() {
        this.createTooltipElement();
        this.setupEventListeners();
        this.addTooltipAttributes();
    }

    createTooltipElement() {
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'manga-tooltip';
        this.tooltip.style.display = 'none';
        document.body.appendChild(this.tooltip);
    }

    setupEventListeners() {
        document.addEventListener('mouseover', (e) => {
            const target = e.target;
            const tooltipText = this.getTooltipText(target);
            
            if (tooltipText) {
                this.showTooltip(e, tooltipText, target);
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (this.shouldHideTooltip(e)) {
                this.hideTooltip();
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (this.tooltip.style.display === 'block') {
                this.updateTooltipPosition(e);
            }
        });
    }

    getTooltipText(element) {
        // Check for custom tooltip attribute
        if (element.hasAttribute('data-tooltip')) {
            return element.getAttribute('data-tooltip');
        }

        // Check for button text
        if (element.classList.contains('button')) {
            const buttonText = element.textContent.trim();
            return this.tooltipData[buttonText] || null;
        }

        // Check for ID-based tooltips
        if (element.id && this.tooltipData[element.id]) {
            return this.tooltipData[element.id];
        }

        // Check for theme buttons
        if (element.classList.contains('theme-btn')) {
            const themeText = element.textContent.replace(/[🌞🌙📜💚💖💎🧡❤️💙💚🌅👑✨❄️🔥☢️🌌🌸⚙️💎]\s*/, '');
            return this.tooltipData[themeText] || 'Switch to this amazing theme! 🎨';
        }

        return null;
    }

    showTooltip(event, text, element) {
        this.tooltip.innerHTML = `
            <div class="tooltip-content">
                <div class="tooltip-text">${text}</div>
                <div class="tooltip-arrow"></div>
            </div>
        `;
        
        this.tooltip.style.display = 'block';
        this.updateTooltipPosition(event);
        
        // Add entrance animation
        this.tooltip.style.opacity = '0';
        this.tooltip.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            this.tooltip.style.opacity = '1';
            this.tooltip.style.transform = 'translateY(0)';
        }, 10);

        // Add special effects for certain elements
        this.addSpecialEffects(element);
    }

    updateTooltipPosition(event) {
        const tooltipRect = this.tooltip.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        let x = event.clientX + 15;
        let y = event.clientY - tooltipRect.height - 10;
        
        // Adjust if tooltip goes off-screen
        if (x + tooltipRect.width > viewportWidth) {
            x = event.clientX - tooltipRect.width - 15;
        }
        
        if (y < 0) {
            y = event.clientY + 15;
        }
        
        this.tooltip.style.left = x + 'px';
        this.tooltip.style.top = y + 'px';
    }

    hideTooltip() {
        this.tooltip.style.opacity = '0';
        this.tooltip.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            this.tooltip.style.display = 'none';
        }, 200);
    }

    shouldHideTooltip(event) {
        const target = event.target;
        const relatedTarget = event.relatedTarget;
        
        // Don't hide if moving to tooltip itself
        if (relatedTarget && (relatedTarget === this.tooltip || this.tooltip.contains(relatedTarget))) {
            return false;
        }
        
        return true;
    }

    addSpecialEffects(element) {
        // Add particle effect for special buttons
        if (element.textContent.includes('INITIALIZE') || 
            element.textContent.includes('READY TO HACK')) {
            if (window.particleSystem) {
                const rect = element.getBoundingClientRect();
                window.particleSystem.createParticles(
                    rect.left + rect.width / 2,
                    rect.top + rect.height / 2,
                    5
                );
            }
        }
    }

    addTooltipAttributes() {
        // Add tooltips to specific elements that might not have them
        setTimeout(() => {
            // Add tooltips to manga artwork
            const artworkElements = document.querySelectorAll('.manga-artwork');
            artworkElements.forEach((element, index) => {
                const messages = [
                    'Cybersecurity guardian watching over you! 🛡️',
                    'Digital warrior protecting the data realm! ⚔️',
                    'Manga hero fighting cyber threats! 🦸',
                    'AI ethics defender in action! 🤖',
                    'Hacker hunter on patrol! 🕵️'
                ];
                element.setAttribute('data-tooltip', messages[index % messages.length]);
            });

            // Add tooltips to embedded images
            const images = document.querySelectorAll('.embedded-image');
            images.forEach(img => {
                const caption = img.nextElementSibling?.textContent || 'Manga character';
                img.setAttribute('data-tooltip', `${caption} - Click to see more details! 🎨`);
            });
        }, 1000);
    }

    // Method to add custom tooltip to any element
    addCustomTooltip(selector, text) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.setAttribute('data-tooltip', text);
        });
    }

    // Method to create contextual help tooltips
    showHelpTooltip(x, y, title, description) {
        const helpTooltip = document.createElement('div');
        helpTooltip.className = 'help-tooltip';
        helpTooltip.innerHTML = `
            <div class="help-tooltip-content">
                <div class="help-title">${title}</div>
                <div class="help-description">${description}</div>
                <button class="help-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
        
        helpTooltip.style.left = x + 'px';
        helpTooltip.style.top = y + 'px';
        
        document.body.appendChild(helpTooltip);
        
        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (helpTooltip.parentElement) {
                helpTooltip.remove();
            }
        }, 10000);
    }
}