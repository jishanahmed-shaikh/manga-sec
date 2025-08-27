// MANGA-SEC Sound Effects System
class SoundEffects {
    constructor() {
        this.enabled = localStorage.getItem('manga-sec-sound') !== 'false';
        this.volume = parseFloat(localStorage.getItem('manga-sec-volume')) || 0.5;
        this.sounds = {};
        this.initializeSounds();
    }

    initializeSounds() {
        this.sounds = {
            click: this.createBeep(800, 0.1),
            success: this.createBeep(1000, 0.2),
            error: this.createBeep(300, 0.3),
            notification: this.createBeep(600, 0.15),
            badge: this.createBeep(1200, 0.25),
            quiz_start: this.createBeep(500, 0.2),
            quiz_end: this.createBeep(700, 0.3),
            hover: this.createBeep(400, 0.05)
        };
    }

    createBeep(frequency, duration) {
        return () => {
            if (!this.enabled) return;
            
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = frequency;
                oscillator.type = 'square';
                
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume * 0.3, audioContext.currentTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + duration);
            } catch (error) {
                console.log('Audio not supported');
            }
        };
    }

    play(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    }

    toggle() {
        this.enabled = !this.enabled;
        localStorage.setItem('manga-sec-sound', this.enabled);
        return this.enabled;
    }
}