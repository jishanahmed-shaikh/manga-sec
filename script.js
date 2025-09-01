const quotes = [
    "In the digital realm, security is not a choice – it's survival.",
    "Hack the planet, but hack it ethically.",
    "Your data is your digital soul – protect it fiercely.",
    "The best firewall is between your ears.",
    "Cybersecurity is the art of digital warfare.",
    "AI without ethics is like a weapon without a safety.",
    "Trust no one, verify everything in cyberspace.",
    "Encryption is the guardian of digital freedom.",
    "Bias in AI reflects bias in humanity – fix both.",
    "A secure system starts with an aware user.",
    "Ethical AI respects privacy and diversity.",
    "Hackers exploit ignorance – knowledge is power.",
    "The human factor is always the weakest link.",
    "AI without ethics is digital chaos unleashed.",
    "Security through obscurity is no security at all.",
    "Transparent AI builds trust in the digital age.",
    "Phishing works because trust can be weaponized.",
    "Without cybersecurity, AI becomes a liability.",
    "Good security feels invisible until it fails.",
    "Critical thinking is the first line of defense.",
    "Every click is a potential breach – choose wisely.",
    "Ethical hackers break to protect and secure.",
    "AI should be explainable, not mysterious.",
    "Prevention is cheaper than digital disaster recovery.",
    "AI power must be balanced by accountability.",
    "Human curiosity cannot be patched.",
    "Digital footprints are forever.",
    "Digital freedom depends on digital security.",
    "AI bias is a bug in the human dataset.",
    "Every password is a lock – make it unbreakable.",
    "AI should not decide without human context.",
    "Layered defense is the only defense.",
    "Transparency builds trust in AI systems.",
    "Security updates are the armor of the digital age.",
    "Without ethics, AI is dangerous by default.",
    "Every breach starts with a single vulnerability.",
    "AI must enhance human values, not erode them.",
    "Trust in AI comes from accountability.",
    "Your privacy is worth protecting fiercely.",
    "An open port is an open invitation to hackers.",
    "AI learns from us – teach it well.",
    "Cybersecurity is a constantly evolving battlefield.",
    "Ethics is the compass of AI development.",
    "No system is completely unbreakable.",
    "Bias unchecked is injustice automated.",
    "Security should be proactive, not reactive.",
    "AI must be fair, accountable, and transparent.",
    "A chain is only as strong as its weakest link.",
    "To secure AI, you must secure the data.",
    "Privacy is a human right, not a privilege."
];

const topics = [
    {
        title: "Man-in-the-Middle Attack", desc: "Intercepting communication between two parties.", questions: [
            { q: "MITM stands for?", options: ["Man in the Middle", "Machine in the Main"], answer: 0 },
            { q: "A common MITM tool is?", options: ["Wireshark", "Photoshop"], answer: 0 },
            { q: "MITM targets?", options: ["Network traffic", "Hard drives"], answer: 0 }
        ]
    },
    {
        title: "Phishing", desc: "Deceptive emails to steal credentials.", questions: [
            { q: "Phishing often uses?", options: ["Emails", "USB sticks"], answer: 0 },
            { q: "Phishing goal is?", options: ["Steal info", "Play music"], answer: 0 },
            { q: "Avoid phishing by?", options: ["Clicking links", "Checking sender"], answer: 1 }
        ]
    },
    {
        title: "SQL Injection", desc: "Malicious SQL queries to access databases.", questions: [
            { q: "SQLi exploits?", options: ["Database queries", "Image pixels"], answer: 0 },
            { q: "Prevent SQLi by?", options: ["Parameterized queries", "Raw input"], answer: 0 },
            { q: "SQL stands for?", options: ["Structured Query Language", "Secure Query Logic"], answer: 0 }
        ]
    },
    {
        title: "DDoS Attack", desc: "Overwhelming a service with traffic.", questions: [
            { q: "DDoS stands for?", options: ["Distributed Denial of Service", "Data Delay of Server"], answer: 0 },
            { q: "DDoS goal is?", options: ["Crash service", "Clean code"], answer: 0 },
            { q: "Prevent DDoS with?", options: ["Firewalls", "Music players"], answer: 0 }
        ]
    },
    {
        title: "Brute Force Attack", desc: "Trying all possible passwords.", questions: [
            { q: "Brute force targets?", options: ["Passwords", "Emails"], answer: 0 },
            { q: "Prevent brute force with?", options: ["Strong passwords", "Weak passwords"], answer: 0 },
            { q: "Brute force is?", options: ["Guessing passwords", "Phishing"], answer: 0 }
        ]
    },
    {
        title: "Zero-Day Exploit", desc: "Attack before a fix is released.", questions: [
            { q: "Zero-day targets?", options: ["Unpatched flaws", "Old movies"], answer: 0 },
            { q: "Prevent zero-day by?", options: ["Updating software", "Ignoring patches"], answer: 0 },
            { q: "Hackers love zero-days?", options: ["Yes", "No"], answer: 0 }
        ]
    },
    {
        title: "Social Engineering", desc: "Manipulating people to give information.", questions: [
            { q: "Social engineering uses?", options: ["Psychology", "Math"], answer: 0 },
            { q: "Prevent it by?", options: ["Awareness", "Trusting strangers"], answer: 0 },
            { q: "Common example?", options: ["Phishing", "Programming"], answer: 0 }
        ]
    },
    {
        title: "Ransomware", desc: "Encrypts data for ransom.", questions: [
            { q: "Ransomware demands?", options: ["Money", "Free hugs"], answer: 0 },
            { q: "Prevent ransomware by?", options: ["Backups", "Ignoring updates"], answer: 0 },
            { q: "Ransomware encrypts?", options: ["Files", "Screens"], answer: 0 }
        ]
    },
    {
        title: "Trojan Horse", desc: "Malware disguised as legitimate software.", questions: [
            { q: "Named after?", options: ["Greek myth", "Virus"], answer: 0 },
            { q: "Trojan hides?", options: ["Malware", "Music"], answer: 0 },
            { q: "Prevent trojans by?", options: ["Trusted downloads", "Random links"], answer: 0 }
        ]
    },
    {
        title: "Spyware", desc: "Secretly monitors user activity.", questions: [
            { q: "Spyware collects?", options: ["Data", "Cookies"], answer: 0 },
            { q: "Prevent spyware with?", options: ["Antivirus", "Random installs"], answer: 0 },
            { q: "Spyware is legal?", options: ["No", "Yes"], answer: 0 }
        ]
    },
    {
        title: "Keylogger", desc: "Records keystrokes to steal data.", questions: [
            { q: "Keylogger steals?", options: ["Passwords", "Weather"], answer: 0 },
            { q: "Prevent it by?", options: ["Antivirus", "Ignore"], answer: 0 },
            { q: "Keylogger type?", options: ["Hardware & Software", "Music & Video"], answer: 0 }
        ]
    },
    {
        title: "Session Hijacking", desc: "Stealing a user session token.", questions: [
            { q: "Session hijacking steals?", options: ["Session token", "Shoes"], answer: 0 },
            { q: "Prevent by?", options: ["HTTPS", "HTTP"], answer: 0 },
            { q: "Cookies store?", options: ["Session data", "Bread"], answer: 0 }
        ]
    },
    {
        title: "Cryptojacking", desc: "Using your computer to mine crypto.", questions: [
            { q: "Cryptojacking mines?", options: ["Cryptocurrency", "Gold"], answer: 0 },
            { q: "Prevent by?", options: ["Anti-mining tools", "Ignoring"], answer: 0 },
            { q: "Cryptojacking slows?", options: ["Computer", "Internet only"], answer: 0 }
        ]
    },
    {
        title: "AI Bias", desc: "Unfair outcomes in AI models.", questions: [
            { q: "Bias in AI is?", options: ["Systematic error", "Random"], answer: 0 },
            { q: "Prevent by?", options: ["Diverse data", "Ignoring diversity"], answer: 0 },
            { q: "AI ethics important?", options: ["Yes", "No"], answer: 0 }
        ]
    }
];

// Badge system for achievements
const badges = [
    { id: 'first_quiz', name: '🌱 NOVICE HACKER', desc: 'Completed your first quiz', icon: '🔓' },
    { id: 'perfect_score', name: '🏆 ELITE HACKER', desc: 'Got 100% on a quiz', icon: '💎' },
    { id: 'streak_3', name: '🔥 FIREWALL MASTER', desc: '3 perfect scores in a row', icon: '🔥' },
    { id: 'streak_7', name: '⚡ CYBER NINJA', desc: '7 perfect scores in a row', icon: '⚡' },
    { id: 'all_topics', name: '👑 CYBERSECURITY KING', desc: 'Completed all topic areas', icon: '👑' },
    { id: 'speed_demon', name: '🚀 SPEED HACKER', desc: 'Completed quiz under 30 seconds', icon: '🚀' },
    { id: 'night_owl', name: '🦉 NIGHT HACKER', desc: 'Completed quiz between 10 PM - 6 AM', icon: '🦉' },
    { id: 'weekend_warrior', name: '🎯 WEEKEND HACKER', desc: 'Completed quiz on weekend', icon: '🎯' }
];

// Manga artwork for background decoration
const mangaArtwork = [
    { icon: '🔒', style: 'top: 15%; left: 8%; transform: rotate(-25deg); font-size: 3em;' },
    { icon: '💻', style: 'top: 25%; right: 12%; transform: rotate(15deg); font-size: 2.5em;' },
    { icon: '🛡️', style: 'top: 45%; left: 85%; transform: rotate(45deg); font-size: 3.2em;' },
    { icon: '⚔️', style: 'top: 65%; left: 5%; transform: rotate(-10deg); font-size: 2.8em;' },
    { icon: '🎭', style: 'top: 75%; right: 8%; transform: rotate(20deg); font-size: 2.3em;' },
    { icon: '🌐', style: 'top: 35%; left: 15%; transform: rotate(-35deg); font-size: 2.6em;' },
    { icon: '🔐', style: 'top: 55%; right: 20%; transform: rotate(30deg); font-size: 2.4em;' },
    { icon: '⚡', style: 'top: 85%; left: 80%; transform: rotate(-15deg); font-size: 2.7em;' }
];

// Side panel image configuration for different pages/sections
const embeddedImages = {
    home: {
        left: { src: 'Assets/4Grid-1.png', caption: 'CYBER WARRIOR', position: 'left' },
        right: { src: 'Assets/ActionPush.png', caption: 'ACTION HERO', position: 'right' }
    },
    intro: {
        left: { src: 'Assets/Pose1-Stop.png', caption: 'STOP & THINK', position: 'left' },
        right: { src: 'Assets/Pose2-Laptop.png', caption: 'DIGITAL DEFENDER', position: 'right' }
    },
    quiz: {
        left: { src: 'Assets/ActionPush.png', caption: 'PUSH FORWARD', position: 'left' },
        right: { src: 'Assets/4Grid-1.png', caption: 'GRID MASTER', position: 'right' }
    },
    results: {
        left: { src: 'Assets/Pose2-Laptop.png', caption: 'VICTORY POSE', position: 'left' },
        right: { src: 'Assets/Pose1-Stop.png', caption: 'MISSION COMPLETE', position: 'right' }
    }
};

// Function to create embedded image HTML
function createEmbeddedImage(imageConfig) {
    return `
        <div class="image-container" style="display: block !important; visibility: visible !important;">
            <img src="${imageConfig.src}" 
                 alt="${imageConfig.caption}" 
                 class="embedded-image ${imageConfig.position}"
                 style="display: block !important; opacity: 1 !important; visibility: visible !important; width: 200px !important; height: auto !important;"
                 onerror="console.log('Image failed to load: ${imageConfig.src}'); this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';"
                 onload="console.log('Image loaded successfully: ${imageConfig.src}');">
            <div class="image-caption" style="display: block !important; visibility: visible !important;">${imageConfig.caption}</div>
        </div>
    `;
}

// Function to get embedded images for a page type
function getEmbeddedImages(pageType) {
    const config = embeddedImages[pageType] || embeddedImages.home;
    return {
        left: createEmbeddedImage(config.left),
        right: createEmbeddedImage(config.right)
    };
}

// Quiz rotation system - changes every 12 hours
const QUIZ_ROTATION_HOURS = 12;
let currentQuizIndex = 0;
let lastQuizChange = 0;

// Timer system
let timerInterval;
let quizStartTime;
let countdownInterval;

// User progress tracking
let userProgress = {
    badges: [],
    quizHistory: [],
    currentStreak: 0,
    bestStreak: 0,
    totalQuizzes: 0,
    perfectScores: 0
};

// Randomize quiz answers for variety
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Create randomized topics with shuffled answers
const randomizedTopics = topics.map(topic => ({
    ...topic,
    questions: topic.questions.map(q => {
        const shuffledOptions = [...q.options];
        const correctAnswer = shuffledOptions[q.answer];
        shuffleArray(shuffledOptions);
        const newAnswerIndex = shuffledOptions.indexOf(correctAnswer);
        return {
            ...q,
            options: shuffledOptions,
            answer: newAnswerIndex
        };
    })
}));

// Sound effects for comic experience
const sounds = {
    click: () => {
        const audio = new Audio();
        audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT';
        audio.play().catch(() => { }); // Ignore errors if audio fails
    },
    success: () => {
        const audio = new Audio();
        audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT';
        audio.play().catch(() => { });
    }
};

let currentPanel = 0;
let currentPage = 1;

// DOM elements
const app = document.getElementById('app');

// Error handling for missing elements
if (!app) {
    console.error('Required DOM elements not found');
}

// Quiz rotation system
function getCurrentQuizIndex() {
    const now = Date.now();
    const hoursSinceEpoch = Math.floor(now / (1000 * 60 * 60));
    return Math.floor(hoursSinceEpoch / QUIZ_ROTATION_HOURS) % randomizedTopics.length;
}

function canUserTakeQuiz() {
    const quizIndex = getCurrentQuizIndex();
    const lastAttempt = localStorage.getItem(`quiz-attempt-${quizIndex}`);
    if (!lastAttempt) return true;

    const lastAttemptTime = parseInt(lastAttempt);
    const now = Date.now();
    const hoursSinceAttempt = (now - lastAttemptTime) / (1000 * 60 * 60);

    return hoursSinceAttempt >= QUIZ_ROTATION_HOURS;
}

function markQuizAttempt() {
    const quizIndex = getCurrentQuizIndex();
    localStorage.setItem(`quiz-attempt-${quizIndex}`, Date.now().toString());
}

// Timer system
function startTimer() {
    quizStartTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimer() {
    const timerElement = document.getElementById('quiz-timer');
    if (!timerElement) return;

    const elapsed = Date.now() - quizStartTime;
    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    timerElement.textContent = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function getQuizTime() {
    if (!quizStartTime) return 0;
    return Math.floor((Date.now() - quizStartTime) / 1000);
}

// Countdown timer for next quiz
function startCountdownTimer() {
    countdownInterval = setInterval(updateCountdown, 1000);
}

function stopCountdownTimer() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
}

function updateCountdown() {
    const countdownElement = document.getElementById('next-quiz-countdown');
    if (!countdownElement) return;

    const quizIndex = getCurrentQuizIndex();
    const lastAttempt = localStorage.getItem(`quiz-attempt-${quizIndex}`);

    if (lastAttempt) {
        const lastAttemptTime = parseInt(lastAttempt);
        const nextQuizTime = lastAttemptTime + (QUIZ_ROTATION_HOURS * 60 * 60 * 1000);
        const timeUntilNext = nextQuizTime - Date.now();

        if (timeUntilNext > 0) {
            const hours = Math.floor(timeUntilNext / (1000 * 60 * 60));
            const minutes = Math.floor((timeUntilNext % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeUntilNext % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `
                <div class="countdown-timer">
                    <div class="countdown-label">⏰ NEXT QUIZ IN:</div>
                    <div class="countdown-time">${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}</div>
                </div>
            `;
        } else {
            countdownElement.innerHTML = `
                <div class="countdown-timer">
                    <div class="countdown-label">🎯 QUIZ AVAILABLE NOW!</div>
                </div>
            `;
        }
    } else {
        countdownElement.innerHTML = `
            <div class="countdown-timer">
                <div class="countdown-label">🎯 QUIZ AVAILABLE NOW!</div>
            </div>
        `;
    }
}

// Get IST Mumbai time
function getISTTime() {
    const now = new Date();
    const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000)); // UTC+5:30
    return istTime.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

// Badge system
function checkAndAwardBadges(score, time) {
    const newBadges = [];

    // First quiz badge
    if (userProgress.totalQuizzes === 1 && !userProgress.badges.includes('first_quiz')) {
        newBadges.push('first_quiz');
    }

    // Perfect score badge
    if (score === 3 && !userProgress.badges.includes('perfect_score')) {
        newBadges.push('perfect_score');
        userProgress.perfectScores++;
    }

    // Speed demon badge
    if (time < 30 && !userProgress.badges.includes('speed_demon')) {
        newBadges.push('speed_demon');
    }

    // Night owl badge
    const hour = new Date().getHours();
    if ((hour >= 22 || hour <= 6) && !userProgress.badges.includes('night_owl')) {
        newBadges.push('night_owl');
    }

    // Weekend warrior badge
    const day = new Date().getDay();
    if ((day === 0 || day === 6) && !userProgress.badges.includes('weekend_warrior')) {
        newBadges.push('weekend_warrior');
    }

    // Streak badges
    if (score === 3) {
        userProgress.currentStreak++;
        if (userProgress.currentStreak === 3 && !userProgress.badges.includes('streak_3')) {
            newBadges.push('streak_3');
        }
        if (userProgress.currentStreak === 7 && !userProgress.badges.includes('streak_7')) {
            newBadges.push('streak_7');
        }
        if (userProgress.currentStreak > userProgress.bestStreak) {
            userProgress.bestStreak = userProgress.currentStreak;
        }
    } else {
        userProgress.currentStreak = 0;
    }

    // Add new badges
    userProgress.badges.push(...newBadges);
    saveUserProgress();

    return newBadges;
}

function saveUserProgress() {
    localStorage.setItem('manga-sec-progress', JSON.stringify(userProgress));
}

function loadUserProgress() {
    const saved = localStorage.getItem('manga-sec-progress');
    if (saved) {
        userProgress = JSON.parse(saved);
    }
}

// Panel Transition with comic animations
function showPanel(html, panelType = 'comic-panel') {
    if (!app) return;

    // Stop countdown timer if it's running
    stopCountdownTimer();

    sounds.click();
    app.innerHTML = html;

    // Add manga-style impact effect
    const panel = app.querySelector('.comic-panel, .manga-panel, .speech-bubble');
    if (panel) {
        panel.style.animation = 'panelAppear 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    }
}

// 3-Panel Comic Intro with Manga Theme
function showComicIntro() {
    const images = getEmbeddedImages('intro');

    const panels = [
        {
            title: "🌐 THE DIGITAL FRONTIER",
            content: "In a world where data flows like digital rivers and AI thinks like humans, cybersecurity becomes the shield that protects our digital future. Welcome to the manga era of cyber defense.",
            sound: "💥",
            panelClass: "manga-panel",
            image: images.left
        },
        {
            title: "⚔️ THE BATTLE BEGINS",
            content: "Hackers lurk in the shadows of the digital realm, exploiting vulnerabilities. But you have the power to become a cyber defender! The choice is yours, brave warrior.",
            sound: "⚡",
            panelClass: "speech-bubble",
            image: images.right
        },
        {
            title: "🚀 YOUR MISSION",
            content: "Learn the secrets of cybersecurity and AI ethics. Every correct answer brings us closer to a safer digital world. Are you ready to hack the system ethically?",
            sound: "🎯",
            panelClass: "manga-panel",
            image: images.left
        }
    ];

    if (currentPanel < panels.length) {
        const panel = panels[currentPanel];
        showPanel(`
            <div class="${panel.panelClass}">
                <div class="comic-sound">${panel.sound}</div>
                <h2 class="comic-title">${panel.title}</h2>
                ${panel.image}
                <p class="comic-text">${panel.content}</p>
                <button class="button" onclick="nextComicPanel()">${currentPanel === panels.length - 1 ? 'INITIALIZE QUIZ!' : 'NEXT →'}</button>
            </div>
        `);
    }
}

function nextComicPanel() {
    currentPanel++;
    if (currentPanel >= 3) {
        currentPanel = 0;
        startTopic();
    } else {
        showComicIntro();
    }
}

// Landing Page with Manga Theme
function loadLanding() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const istTime = getISTTime();
    const images = getEmbeddedImages('home');

    showPanel(`
        <div class="comic-panel">
            <h1 class="title">MANGA-SEC</h1>
            
            ${images.left}
            
            <p class="intro">
                Welcome to <strong>MANGA-SEC</strong> – a black & white manga comic quiz blending 
                <strong>cybersecurity</strong> skills with <strong>AI ethics</strong>. 
                Learn, hack, and sharpen your digital defenses in a comic-style interactive experience.
            </p>
            
            ${images.right}
            
            <div class="time-info">
                <div class="ist-time">🌍 IST Mumbai Time: ${istTime}</div>
                <div id="next-quiz-countdown"></div>
            </div>
            
            <div class="speech-bubble" style="margin: 30px auto; max-width: 500px;">
                <p style="font-style: italic; margin: 0;">"${randomQuote}"</p>
            </div>
            
            <div class="badge-section">
                <h3 class="comic-title">🏆 YOUR ACHIEVEMENTS</h3>
                <div class="badge-grid">
                    ${userProgress.badges.map(badgeId => {
        const badge = badges.find(b => b.id === badgeId);
        return badge ? `<div class="badge-item">${badge.icon} ${badge.name}</div>` : '';
    }).join('')}
                </div>
                <div class="stats">
                    <p>📊 Total Quizzes: ${userProgress.totalQuizzes}</p>
                    <p>🔥 Best Streak: ${userProgress.bestStreak}</p>
                    <p>💎 Perfect Scores: ${userProgress.perfectScores}</p>
                </div>
            </div>
            
            <button class="button" onclick="window.router.navigate('quiz')">🚀 INITIALIZE</button>
            <button class="button" onclick="window.router.navigate('badges')">🏅 BADGE GALLERY</button>
            <button class="button" onclick="window.router.navigate('status')">📊 QUIZ STATUS</button>
            <button class="button" onclick="window.router.navigate('settings')">⚙️ SETTINGS</button>
            <button class="button" onclick="installPWA()" id="install-btn" style="display: none;">📱 INSTALL APP</button>
        </div>
    `);

    // Start countdown timer
    startCountdownTimer();
}

// Badge Gallery
function showBadgeGallery() {
    // Update side panels for home-like display
    // updateSidePanels('home'); // This function is no longer needed

    const allBadges = badges.map(badge => {
        const earned = userProgress.badges.includes(badge.id);
        return `
            <div class="badge-item ${earned ? 'earned' : 'locked'}">
                <div class="badge-icon">${badge.icon}</div>
                <div class="badge-name">${badge.name}</div>
                <div class="badge-desc">${badge.desc}</div>
                <div class="badge-status">${earned ? '✅ EARNED' : '🔒 LOCKED'}</div>
            </div>
        `;
    }).join('');

    showPanel(`
        <div class="manga-panel">
            <h2 class="comic-title">🏅 BADGE GALLERY</h2>
            <div class="badge-gallery">
                ${allBadges}
            </div>
            <button class="button" onclick="loadLanding()">🏠 MAINFRAME</button>
        </div>
    `);
}

// Topic Screen with Manga Style
function startTopic() {
    const quizIndex = getCurrentQuizIndex();
    const topic = randomizedTopics[quizIndex];

    if (!canUserTakeQuiz()) {
        const nextQuizTime = new Date(parseInt(localStorage.getItem(`quiz-attempt-${quizIndex}`)) + (QUIZ_ROTATION_HOURS * 60 * 60 * 1000));
        const timeUntilNext = nextQuizTime - Date.now();
        const hours = Math.floor(timeUntilNext / (1000 * 60 * 60));
        const minutes = Math.floor((timeUntilNext % (1000 * 60 * 60)) / (1000 * 60));

        showPanel(`
            <div class="manga-panel">
                <h2>⏰ QUIZ COOLDOWN ACTIVE</h2>
                <p>You've already completed today's cybersecurity challenge!</p>
                <div class="timer-info">
                    <p>⏳ Next quiz available in: <strong>${hours}h ${minutes}m</strong></p>
                    <p>🔄 Quiz changes every 12 hours</p>
                </div>
                <button class="button" onclick="loadLanding()">🏠 MAINFRAME</button>
            </div>
        `);
        return;
    }

    showPanel(`
        <div class="speech-bubble">
            <h2>MISSION BRIEF: ${topic.title}</h2>
            <p>${topic.desc}</p>
            <div class="quiz-info">
                <p>🕐 Quiz changes every 12 hours</p>
                <p>🌍 Based on IST Mumbai time</p>
                <p>🎯 You can attempt this quiz once per rotation</p>
            </div>
            <button class="button" onclick="confirmStart(${quizIndex})">READY TO HACK</button>
            <button class="button" onclick="loadLanding()">ABORT MISSION</button>
        </div>
    `);
}

// Confirmation with Manga Language
function confirmStart(quizIndex) {
    showPanel(`
        <div class="manga-panel">
            <h2>MISSION PREPARATION COMPLETE?</h2>
            <p>Are you ready to face the cybersecurity challenge?</p>
            <button class="button" onclick="startQuiz(${quizIndex},0,0)">AFFIRMATIVE</button>
            <button class="button" onclick="loadLanding()">NEGATIVE</button>
        </div>
    `);
}

// Quiz Logic with Manga Elements
function startQuiz(quizIndex, index, score) {
    const q = randomizedTopics[quizIndex].questions[index];

    if (index === 0) {
        startTimer();
        // Get images for quiz mode
        const images = getEmbeddedImages('quiz');
    }

    const images = getEmbeddedImages('quiz');

    showPanel(`
        <div class="comic-panel">
            <div class="quiz-header">
                <div class="quiz-progress">MISSION PHASE ${index + 1} OF 3</div>
                <div id="quiz-timer" class="quiz-timer">0:00</div>
            </div>
            
            ${images.left}
            
            <h3 class="question">${q.q}</h3>
            
            ${images.right}
            
            <div class="options">
                ${q.options.map((opt, i) => `
                    <button class="button option-btn" onclick="checkAnswer(${quizIndex},${index},${score},${i === q.answer})">${opt}</button>
                `).join('')}
            </div>
        </div>
    `);
}

// Duplicate function removed - using enhanced version below

// End Quiz with Manga Rewards
function endQuiz(quizIndex, score) {
    stopTimer();
    const quizTime = getQuizTime();

    // Mark quiz as completed
    markQuizAttempt();

    // Update user progress
    userProgress.totalQuizzes++;

    // Check for new badges
    const newBadges = checkAndAwardBadges(score, quizTime);

    // Add to quiz history
    userProgress.quizHistory.push({
        topic: randomizedTopics[quizIndex].title,
        score: score,
        time: quizTime,
        date: new Date().toISOString()
    });

    // Get images for results
    const images = getEmbeddedImages('results');

    if (score === 3) {
        showPanel(`
            <div class="manga-panel">
                <div class="badge">🏆 ELITE HACKER - ${randomizedTopics[quizIndex].title}</div>
                
                ${images.left}
                
                <p class="success-text">MISSION ACCOMPLISHED! You've mastered today's cybersecurity challenge!</p>
                
                ${images.right}
                
                <div class="quiz-stats">
                    <p>⏱️ Time: ${Math.floor(quizTime / 60)}:${(quizTime % 60).toString().padStart(2, '0')}</p>
                    <p>🎯 Score: ${score}/3</p>
                </div>
                ${newBadges.length > 0 ? `
                    <div class="new-badges">
                        <h4>🎉 NEW BADGES EARNED!</h4>
                        ${newBadges.map(badgeId => {
            const badge = badges.find(b => b.id === badgeId);
            return badge ? `<div class="new-badge">${badge.icon} ${badge.name}</div>` : '';
        }).join('')}
                    </div>
                ` : ''}
                <button class="button" onclick="loadLanding()">🏠 MAINFRAME</button>
            </div>
        `);
    } else {
        showPanel(`
            <div class="comic-panel">
                <h2>MISSION STATUS: ${score}/3</h2>
                
                ${images.left}
                
                <p>Keep learning, cyber warrior! You're getting closer to elite status!</p>
                
                ${images.right}
                
                <div class="quiz-stats">
                    <p>⏱️ Time: ${Math.floor(quizTime / 60)}:${(quizTime % 60).toString().padStart(2, '0')}</p>
                    <p>🎯 Score: ${score}/3</p>
                </div>
                ${newBadges.length > 0 ? `
                    <div class="new-badges">
                        <h4>🎉 NEW BADGES EARNED!</h4>
                        ${newBadges.map(badgeId => {
            const badge = badges.find(b => b.id === badgeId);
            return badge ? `<div class="new-badge">${badge.icon} ${badge.name}</div>` : '';
        }).join('')}
                    </div>
                ` : ''}
                <button class="button" onclick="loadLanding()">🏠 MAINFRAME</button>
            </div>
        `);
    }
}

// Add CSS animation for panel appearance
function addPanelAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes panelAppear {
            0% { 
                opacity: 0; 
                transform: scale(0.8) rotate(-5deg); 
            }
            100% { 
                opacity: 1; 
                transform: scale(1) rotate(0deg); 
            }
        }
        
        .comic-sound {
            font-size: 2em;
            text-align: center;
            margin-bottom: 20px;
            opacity: 0.8;
        }
        
        .quiz-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        
        .quiz-timer {
            background: var(--comic-black);
            color: var(--comic-white);
            padding: 10px 15px;
            border-radius: 0;
            font-family: 'Press Start 2P', monospace;
            font-size: 0.9em;
            border: 2px solid var(--comic-black);
            box-shadow: 3px 3px 0px var(--comic-gray);
        }
        
        .badge-section {
            margin: 30px 0;
            padding: 25px;
            border: 3px solid var(--comic-black);
            background: var(--comic-white);
            box-shadow: 4px 4px 0px var(--comic-black);
        }
        
        .badge-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        
        .badge-item {
            background: var(--comic-light-gray);
            border: 2px solid var(--comic-black);
            padding: 15px;
            text-align: center;
            font-size: 0.9em;
            box-shadow: 2px 2px 0px var(--comic-black);
        }
        
        .badge-item.earned {
            background: var(--comic-white);
            border-color: var(--comic-black);
        }
        
        .badge-item.locked {
            background: var(--comic-gray);
            color: var(--comic-white);
            opacity: 0.7;
        }
        
        .badge-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 25px 0;
        }
        
        .stats {
            text-align: center;
            margin: 20px 0;
        }
        
        .stats p {
            margin: 10px 0;
            font-size: 1.1em;
        }
        
        .quiz-stats {
            background: var(--comic-light-gray);
            padding: 20px;
            margin: 20px 0;
            border: 2px solid var(--comic-black);
            text-align: center;
        }
        
        .new-badges {
            background: var(--comic-white);
            padding: 20px;
            margin: 20px 0;
            border: 3px solid var(--comic-black);
            text-align: center;
        }
        
        .new-badge {
            background: var(--comic-highlight);
            padding: 10px;
            margin: 10px;
            border: 2px solid var(--comic-black);
            font-weight: bold;
        }
        
        .timer-info {
            background: var(--comic-light-gray);
            padding: 20px;
            margin: 20px 0;
            border: 2px solid var(--comic-black);
            text-align: center;
        }
        
        .quiz-info {
            background: var(--comic-light-gray);
            padding: 15px;
            margin: 15px 0;
            border: 2px solid var(--comic-black);
            font-size: 0.9em;
        }

        .countdown-timer {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5em;
            font-weight: bold;
            color: var(--comic-black);
            background: var(--comic-white);
            padding: 10px 20px;
            border-radius: 10px;
            box-shadow: 3px 3px 0px var(--comic-gray);
        }

        .countdown-label {
            margin-right: 10px;
            font-size: 0.8em;
            color: var(--comic-dark-gray);
        }

        .countdown-time {
            font-family: 'Press Start 2P', monospace;
            font-size: 1.2em;
            color: var(--comic-red);
        }

        .time-info {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 20px 0;
            padding: 15px;
            background: var(--comic-light-gray);
            border: 2px solid var(--comic-black);
            border-radius: 10px;
            box-shadow: 3px 3px 0px var(--comic-gray);
        }

        .ist-time {
            font-size: 1.1em;
            font-weight: bold;
            color: var(--comic-blue);
        }

        /* New styles for embedded images */
        .image-container {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        .embedded-image {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            transform: scale(1);
            transition: transform 0.3s ease-in-out;
        }

        .embedded-image:hover {
            transform: scale(1.05);
        }

        .image-caption {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.7);
            color: var(--comic-white);
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 0.8em;
            white-space: nowrap;
            z-index: 10;
        }
    `;
    document.head.appendChild(style);
}

// Get current quiz rotation info
function getQuizRotationInfo() {
    const quizIndex = getCurrentQuizIndex();
    const topic = randomizedTopics[quizIndex];
    const now = Date.now();
    const hoursSinceEpoch = Math.floor(now / (1000 * 60 * 60));
    const nextRotation = (Math.floor(hoursSinceEpoch / QUIZ_ROTATION_HOURS) + 1) * QUIZ_ROTATION_HOURS;
    const timeUntilNextRotation = (nextRotation - hoursSinceEpoch) * 60 * 60 * 1000;

    const hours = Math.floor(timeUntilNextRotation / (1000 * 60 * 60));
    const minutes = Math.floor((timeUntilNextRotation % (1000 * 60 * 60)) / (1000 * 60));

    return {
        currentTopic: topic.title,
        currentIndex: quizIndex,
        nextRotationHours: hours,
        nextRotationMinutes: minutes,
        canTake: canUserTakeQuiz()
    };
}

// Duplicate function removed - using enhanced version below

// Initialization handled by window.addEventListener('load') below

// Settings Panel
function showSettings() {
    const currentTheme = window.themeManager ? window.themeManager.getCurrentTheme() : 'light';
    const soundEnabled = window.soundEffects ? window.soundEffects.enabled : true;

    showPanel(`
        <div class="manga-panel">
            <h2 class="comic-title">⚙️ SETTINGS PANEL</h2>
            
            <div class="settings-grid">
                <div class="setting-item">
                    <h3>🎨 Theme Selection</h3>
                    <div class="theme-grid">
                        <button class="button theme-btn ${currentTheme === 'light' ? 'active' : ''}" onclick="changeTheme('light')">🌞 Classic Light</button>
                        <button class="button theme-btn ${currentTheme === 'dark' ? 'active' : ''}" onclick="changeTheme('dark')">🌙 Dark Mode</button>
                        <button class="button theme-btn ${currentTheme === 'sepia' ? 'active' : ''}" onclick="changeTheme('sepia')">📜 Vintage Sepia</button>
                        <button class="button theme-btn ${currentTheme === 'neon' ? 'active' : ''}" onclick="changeTheme('neon')">💚 Matrix Green</button>
                        <button class="button theme-btn ${currentTheme === 'cyberpunk' ? 'active' : ''}" onclick="changeTheme('cyberpunk')">💖 Cyberpunk Pink</button>
                        <button class="button theme-btn ${currentTheme === 'hacker' ? 'active' : ''}" onclick="changeTheme('hacker')">💎 Hacker Cyan</button>
                        <button class="button theme-btn ${currentTheme === 'retro' ? 'active' : ''}" onclick="changeTheme('retro')">🧡 Retro Orange</button>
                        <button class="button theme-btn ${currentTheme === 'vampire' ? 'active' : ''}" onclick="changeTheme('vampire')">❤️ Vampire Red</button>
                        <button class="button theme-btn ${currentTheme === 'ocean' ? 'active' : ''}" onclick="changeTheme('ocean')">💙 Ocean Blue</button>
                        <button class="button theme-btn ${currentTheme === 'forest' ? 'active' : ''}" onclick="changeTheme('forest')">💚 Forest Green</button>
                        <button class="button theme-btn ${currentTheme === 'sunset' ? 'active' : ''}" onclick="changeTheme('sunset')">🌅 Sunset Blaze</button>
                        <button class="button theme-btn ${currentTheme === 'royal' ? 'active' : ''}" onclick="changeTheme('royal')">👑 Royal Purple</button>
                        <button class="button theme-btn ${currentTheme === 'gold' ? 'active' : ''}" onclick="changeTheme('gold')">✨ Golden Hour</button>
                        <button class="button theme-btn ${currentTheme === 'ice' ? 'active' : ''}" onclick="changeTheme('ice')">❄️ Arctic Ice</button>
                        <button class="button theme-btn ${currentTheme === 'fire' ? 'active' : ''}" onclick="changeTheme('fire')">🔥 Phoenix Fire</button>
                        <button class="button theme-btn ${currentTheme === 'toxic' ? 'active' : ''}" onclick="changeTheme('toxic')">☢️ Toxic Waste</button>
                        <button class="button theme-btn ${currentTheme === 'galaxy' ? 'active' : ''}" onclick="changeTheme('galaxy')">🌌 Galaxy Purple</button>
                        <button class="button theme-btn ${currentTheme === 'cherry' ? 'active' : ''}" onclick="changeTheme('cherry')">🌸 Cherry Blossom</button>
                        <button class="button theme-btn ${currentTheme === 'steel' ? 'active' : ''}" onclick="changeTheme('steel')">⚙️ Steel Gray</button>
                        <button class="button theme-btn ${currentTheme === 'emerald' ? 'active' : ''}" onclick="changeTheme('emerald')">💎 Emerald Dream</button>
                    </div>
                </div>
                
                <div class="setting-item">
                    <h3>🔊 Sound Effects</h3>
                    <button class="button" onclick="toggleSound()" id="sound-toggle">
                        ${soundEnabled ? '🔊 ON' : '🔇 OFF'}
                    </button>
                </div>
                
                <div class="setting-item">
                    <h3>♿ Accessibility</h3>
                    <div class="accessibility-options">
                        <button class="button" onclick="toggleHighContrast()" id="contrast-toggle">
                            ${window.accessibility && window.accessibility.getSettings().highContrast ? '🔆 High Contrast ON' : '🔅 High Contrast OFF'}
                        </button>
                        <button class="button" onclick="toggleLargeText()" id="text-toggle">
                            ${window.accessibility && window.accessibility.getSettings().largeText ? '🔤 Large Text ON' : '🔡 Large Text OFF'}
                        </button>
                        <button class="button" onclick="toggleReducedMotion()" id="motion-toggle">
                            ${window.accessibility && window.accessibility.getSettings().reducedMotion ? '🚫 Reduced Motion ON' : '✨ Reduced Motion OFF'}
                        </button>
                        <button class="button" onclick="toggleParticles()" id="particles-toggle">
                            ${window.particleSystem && window.particleSystem.enabled ? '✨ Particles ON' : '🚫 Particles OFF'}
                        </button>
                    </div>
                </div>
                
                <div class="setting-item">
                    <h3>📊 Statistics</h3>
                    <div class="stats-display">
                        <p>Total Quizzes: ${userProgress.totalQuizzes}</p>
                        <p>Perfect Scores: ${userProgress.perfectScores}</p>
                        <p>Current Streak: ${userProgress.currentStreak}</p>
                        <p>Best Streak: ${userProgress.bestStreak}</p>
                        <p>Badges Earned: ${userProgress.badges.length}</p>
                    </div>
                </div>
                
                <div class="setting-item">
                    <h3>💾 Data Management</h3>
                    <button class="button" onclick="exportData()">📤 Export Data</button>
                    <button class="button" onclick="importData()">📥 Import Data</button>
                    <button class="button" onclick="resetData()" style="background: var(--comic-red); color: var(--comic-white);">🗑️ Reset All</button>
                </div>
            </div>
            
            <button class="button" onclick="loadLanding()">🏠 BACK TO MAINFRAME</button>
        </div>
    `);
}

function changeTheme(theme) {
    if (window.themeManager) {
        window.themeManager.applyTheme(theme);
        showSettings(); // Refresh settings panel
    }
}

function toggleSound() {
    if (window.soundEffects) {
        const enabled = window.soundEffects.toggle();
        document.getElementById('sound-toggle').innerHTML = enabled ? '🔊 ON' : '🔇 OFF';
        if (window.notifications) {
            window.notifications.show(`Sound ${enabled ? 'enabled' : 'disabled'}`, 'info', 2000);
        }
    }
}

function exportData() {
    const data = {
        progress: userProgress,
        settings: {
            theme: window.themeManager ? window.themeManager.getCurrentTheme() : 'light',
            sound: window.soundEffects ? window.soundEffects.enabled : true
        },
        timestamp: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `manga-sec-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    if (window.notifications) {
        window.notifications.show('Data exported successfully!', 'success');
    }
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    if (data.progress) {
                        userProgress = data.progress;
                        saveUserProgress();
                        if (window.notifications) {
                            window.notifications.show('Data imported successfully!', 'success');
                        }
                        showSettings(); // Refresh settings
                    }
                } catch (error) {
                    if (window.notifications) {
                        window.notifications.show('Invalid backup file!', 'error');
                    }
                }
            };
            reader.readAsText(file);
        }
    };
    input.click();
}

function resetData() {
    if (confirm('Are you sure you want to reset all data? This cannot be undone!')) {
        localStorage.clear();
        userProgress = {
            badges: [],
            quizHistory: [],
            currentStreak: 0,
            bestStreak: 0,
            totalQuizzes: 0,
            perfectScores: 0
        };
        if (window.notifications) {
            window.notifications.show('All data has been reset!', 'warning');
        }
        loadLanding();
    }
}

// Enhanced Quiz Status Dashboard
function showQuizStatus() {
    const quizIndex = getCurrentQuizIndex();
    const canTake = canUserTakeQuiz();
    const nextQuizTime = getNextQuizTime();
    const currentTopic = randomizedTopics[quizIndex];

    showPanel(`
        <div class="manga-panel">
            <h2 class="comic-title">📊 QUIZ STATUS DASHBOARD</h2>
            
            <div class="quiz-status-grid">
                <div class="status-card">
                    <span class="status-icon">🎯</span>
                    <div class="status-title">Current Quiz</div>
                    <div class="status-value">${currentTopic.title}</div>
                </div>
                
                <div class="status-card">
                    <span class="status-icon">${canTake ? '✅' : '🔒'}</span>
                    <div class="status-title">Availability</div>
                    <div class="status-value ${canTake ? 'available' : 'locked'}">
                        ${canTake ? 'AVAILABLE' : 'LOCKED'}
                    </div>
                </div>
                
                <div class="status-card">
                    <span class="status-icon">⏰</span>
                    <div class="status-title">Next Quiz</div>
                    <div class="status-value warning">${nextQuizTime}</div>
                </div>
                
                <div class="status-card">
                    <span class="status-icon">🔄</span>
                    <div class="status-title">Rotation</div>
                    <div class="status-value">Every 12H</div>
                </div>
                
                <div class="status-card">
                    <span class="status-icon">📈</span>
                    <div class="status-title">Total Completed</div>
                    <div class="status-value">${userProgress.totalQuizzes}</div>
                </div>
                
                <div class="status-card">
                    <span class="status-icon">🏆</span>
                    <div class="status-title">Perfect Scores</div>
                    <div class="status-value">${userProgress.perfectScores}</div>
                </div>
                
                <div class="status-card">
                    <span class="status-icon">🔥</span>
                    <div class="status-title">Current Streak</div>
                    <div class="status-value">${userProgress.currentStreak}</div>
                </div>
                
                <div class="status-card">
                    <span class="status-icon">⭐</span>
                    <div class="status-title">Best Streak</div>
                    <div class="status-value">${userProgress.bestStreak}</div>
                </div>
            </div>
            
            <div class="quiz-history-section">
                <h3 class="comic-title">📚 Recent Quiz History</h3>
                <div class="history-list">
                    ${getRecentHistory()}
                </div>
            </div>
            
            <div class="button-group">
                ${canTake ? '<button class="button" onclick="startTopic()">🚀 TAKE QUIZ</button>' : ''}
                <button class="button" onclick="loadLanding()">🏠 MAINFRAME</button>
            </div>
        </div>
    `);

    // Start countdown if quiz is locked
    if (!canTake) {
        startCountdownTimer();
    }
}

function getNextQuizTime() {
    const quizIndex = getCurrentQuizIndex();
    const lastAttempt = localStorage.getItem(`quiz-attempt-${quizIndex}`);

    if (!lastAttempt) return 'NOW';

    const lastAttemptTime = parseInt(lastAttempt);
    const nextQuizTime = lastAttemptTime + (QUIZ_ROTATION_HOURS * 60 * 60 * 1000);
    const timeUntilNext = nextQuizTime - Date.now();

    if (timeUntilNext <= 0) return 'NOW';

    const hours = Math.floor(timeUntilNext / (1000 * 60 * 60));
    const minutes = Math.floor((timeUntilNext % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours}h ${minutes}m`;
}

function getRecentHistory() {
    if (!userProgress.quizHistory || userProgress.quizHistory.length === 0) {
        return '<p class="no-history">No quiz history yet. Take your first quiz!</p>';
    }

    const recent = userProgress.quizHistory.slice(-5).reverse();
    return recent.map(quiz => `
        <div class="history-item">
            <div class="history-topic">${quiz.topic}</div>
            <div class="history-score ${quiz.score === 3 ? 'perfect' : quiz.score >= 2 ? 'good' : 'needs-improvement'}">
                ${quiz.score}/3
            </div>
            <div class="history-time">${Math.floor(quiz.time / 60)}:${(quiz.time % 60).toString().padStart(2, '0')}</div>
            <div class="history-date">${new Date(quiz.date).toLocaleDateString()}</div>
        </div>
    `).join('');
}

// Enhanced progress tracking
function trackQuizCompletion(score, time, topic) {
    // Update basic stats
    userProgress.totalQuizzes++;

    // Track perfect scores
    if (score === 3) {
        userProgress.perfectScores++;
        userProgress.currentStreak++;

        // Create particle effect for perfect score
        if (window.particleSystem) {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            window.particleSystem.createBurst(centerX, centerY, 15, 'success');
        }
    } else {
        userProgress.currentStreak = 0;
    }

    // Update best streak
    if (userProgress.currentStreak > userProgress.bestStreak) {
        userProgress.bestStreak = userProgress.currentStreak;
    }

    // Add to history
    userProgress.quizHistory.push({
        topic: topic,
        score: score,
        time: time,
        date: new Date().toISOString(),
        perfect: score === 3
    });

    // Keep only last 50 entries
    if (userProgress.quizHistory.length > 50) {
        userProgress.quizHistory = userProgress.quizHistory.slice(-50);
    }

    // Check for new badges
    const newBadges = checkAndAwardBadges(score, time);

    // Show badge notifications
    if (newBadges.length > 0) {
        newBadges.forEach((badgeId, index) => {
            const badge = badges.find(b => b.id === badgeId);
            if (badge) {
                setTimeout(() => {
                    if (window.notifications) {
                        window.notifications.show(`🏆 Badge Earned: ${badge.name}`, 'badge', 5000);
                    }
                    if (window.particleSystem) {
                        const x = Math.random() * window.innerWidth;
                        const y = Math.random() * window.innerHeight * 0.5;
                        window.particleSystem.createBurst(x, y, 8, 'badge');
                    }
                }, index * 1000);
            }
        });
    }

    saveUserProgress();
    return newBadges;
}

// Enhanced quiz completion with better feedback
function completeQuiz(quizIndex, score) {
    const quizTime = getQuizTime();
    const topic = randomizedTopics[quizIndex].title;

    // Track completion
    const newBadges = trackQuizCompletion(score, quizTime, topic);

    // Mark quiz as attempted
    markQuizAttempt();

    // Show results with enhanced feedback
    showQuizResults(score, quizTime, topic, newBadges);
}

function showQuizResults(score, time, topic, newBadges) {
    const percentage = Math.round((score / 3) * 100);
    const timeFormatted = `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`;

    let resultMessage = '';
    let resultClass = '';

    if (score === 3) {
        resultMessage = 'PERFECT! ELITE HACKER STATUS ACHIEVED!';
        resultClass = 'perfect';
    } else if (score === 2) {
        resultMessage = 'EXCELLENT! CYBER DEFENDER LEVEL!';
        resultClass = 'good';
    } else if (score === 1) {
        resultMessage = 'GOOD START! KEEP LEARNING!';
        resultClass = 'okay';
    } else {
        resultMessage = 'STUDY MORE! KNOWLEDGE IS POWER!';
        resultClass = 'needs-work';
    }

    showPanel(`
        <div class="manga-panel">
            <div class="result-header ${resultClass}">
                <h2 class="comic-title">${resultMessage}</h2>
                <div class="result-topic">${topic}</div>
            </div>
            
            <div class="result-stats">
                <div class="stat-item">
                    <div class="stat-icon">🎯</div>
                    <div class="stat-label">Score</div>
                    <div class="stat-value">${score}/3 (${percentage}%)</div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon">⏱️</div>
                    <div class="stat-label">Time</div>
                    <div class="stat-value">${timeFormatted}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon">🔥</div>
                    <div class="stat-label">Streak</div>
                    <div class="stat-value">${userProgress.currentStreak}</div>
                </div>
            </div>
            
            ${newBadges.length > 0 ? `
                <div class="new-badges-section">
                    <h3 class="comic-title">🎉 NEW BADGES EARNED!</h3>
                    <div class="new-badges-grid">
                        ${newBadges.map(badgeId => {
        const badge = badges.find(b => b.id === badgeId);
        return badge ? `
                                <div class="new-badge-item">
                                    <div class="badge-icon">${badge.icon}</div>
                                    <div class="badge-name">${badge.name}</div>
                                </div>
                            ` : '';
    }).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="result-actions">
                <button class="button" onclick="showQuizStatus()">📊 VIEW PROGRESS</button>
                <button class="button" onclick="showBadgeGallery()">🏅 VIEW BADGES</button>
                <button class="button" onclick="loadLanding()">🏠 MAINFRAME</button>
            </div>
        </div>
    `);
}

// Update existing functions to use new systems
function checkAnswer(quizIndex, index, score, correct) {
    if (correct) {
        score++;
        if (window.soundEffects) {
            window.soundEffects.play('success');
        }
        if (window.particleSystem) {
            const button = event.target;
            const rect = button.getBoundingClientRect();
            window.particleSystem.createBurst(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2,
                5,
                'success'
            );
        }
    } else {
        if (window.soundEffects) {
            window.soundEffects.play('error');
        }
    }

    if (index + 1 < randomizedTopics[quizIndex].questions.length) {
        startQuiz(quizIndex, index + 1, score);
    } else {
        completeQuiz(quizIndex, score);
    }
}

// Simple initialization that works even if modules fail
window.addEventListener('load', function () {
    console.log('MANGA-SEC: Starting initialization...');

    // Initialize systems with error handling
    try {
        if (typeof SoundEffects !== 'undefined') {
            window.soundEffects = new SoundEffects();
        }
    } catch (e) { console.log('Sound effects failed:', e); }

    try {
        if (typeof NotificationSystem !== 'undefined') {
            window.notifications = new NotificationSystem();
        }
    } catch (e) { console.log('Notifications failed:', e); }

    try {
        if (typeof ThemeManager !== 'undefined') {
            window.themeManager = new ThemeManager();
        }
    } catch (e) { console.log('Theme manager failed:', e); }

    try {
        if (typeof ProgressTracker !== 'undefined') {
            window.progressTracker = new ProgressTracker();
        }
    } catch (e) { console.log('Progress tracker failed:', e); }

    try {
        if (typeof LoadingSystem !== 'undefined') {
            window.loadingSystem = new LoadingSystem();
            // Show initial loading animation
            window.loadingSystem.show(2500, () => {
                console.log('MANGA-SEC fully loaded!');
            });
        }
    } catch (e) { console.log('Loading system failed:', e); }

    try {
        if (typeof ParticleSystem !== 'undefined') {
            window.particleSystem = new ParticleSystem();
        }
    } catch (e) { console.log('Particle system failed:', e); }

    try {
        if (typeof KeyboardShortcuts !== 'undefined') {
            window.keyboardShortcuts = new KeyboardShortcuts();
        }
    } catch (e) { console.log('Keyboard shortcuts failed:', e); }

    try {
        if (typeof Analytics !== 'undefined') {
            window.analytics = new Analytics();
        }
    } catch (e) { console.log('Analytics failed:', e); }

    try {
        if (typeof AccessibilityManager !== 'undefined') {
            window.accessibility = new AccessibilityManager();
        }
    } catch (e) { console.log('Accessibility failed:', e); }

    try {
        if (typeof Router !== 'undefined') {
            window.router = new Router();
        }
    } catch (e) { console.log('Router failed:', e); }

    // Load user progress
    try {
        loadUserProgress();
        console.log('MANGA-SEC: User progress loaded');
    } catch (e) {
        console.log('User progress failed:', e);
        // Initialize default progress if loading fails
        window.userProgress = {
            totalQuizzes: 0,
            perfectScores: 0,
            currentStreak: 0,
            bestStreak: 0,
            badges: [],
            quizHistory: [],
            lastQuizDate: null,
            settings: {
                theme: 'light',
                sound: true,
                notifications: true
            }
        };
    }

    // Add panel animations
    try {
        addPanelAnimation();
        console.log('MANGA-SEC: Panel animations added');
    } catch (e) { console.log('Panel animations failed:', e); }

    // Force hide loading screen and start app
    console.log('MANGA-SEC: Starting app in 1 second...');
    setTimeout(() => {
        try {
            const loading = document.querySelector('.loading-panel');
            if (loading) {
                loading.style.display = 'none';
                console.log('MANGA-SEC: Loading screen hidden');
            }

            loadLanding();
            console.log('MANGA-SEC: Landing page loaded');

            // Show welcome for new users
            if (window.userProgress && window.userProgress.totalQuizzes === 0) {
                setTimeout(() => {
                    if (window.notifications) {
                        window.notifications.show('🎉 Welcome to MANGA-SEC!', 'success', 4000);
                    }
                }, 1000);
            }
        } catch (e) {
            console.error('MANGA-SEC: Critical error during startup:', e);
            // Emergency fallback - show basic interface
            const app = document.getElementById('app');
            if (app) {
                app.innerHTML = `
                    <div class="manga-panel">
                        <h2>MANGA-SEC</h2>
                        <p>Emergency mode - Basic functionality only</p>
                        <button onclick="location.reload()">🔄 RELOAD</button>
                    </div>
                `;
            }
        }
    }, 1000);
});

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('MANGA-SEC: SW registered', registration);

                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            if (window.notifications) {
                                window.notifications.show('🔄 App updated! Refresh to get new features.', 'info', 8000);
                            }
                        }
                    });
                });
            })
            .catch((error) => {
                console.log('MANGA-SEC: SW registration failed', error);
            });
    });
}

// PWA Install Prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Show install button
    const installBtn = document.getElementById('install-btn');
    if (installBtn) {
        installBtn.style.display = 'inline-block';
    }

    setTimeout(() => {
        if (window.notifications) {
            window.notifications.show('📱 Install MANGA-SEC as an app for better experience!', 'info', 6000);
        }
    }, 10000);
});

function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted PWA install');
            }
            deferredPrompt = null;
        });
    }
}

// Enhanced accessibility functions
function toggleHighContrast() {
    if (window.accessibility) {
        const enabled = window.accessibility.toggleHighContrast();
        document.getElementById('contrast-toggle').innerHTML = enabled ? '🔆 High Contrast ON' : '🔅 High Contrast OFF';
    }
}

function toggleLargeText() {
    if (window.accessibility) {
        const enabled = window.accessibility.toggleLargeText();
        document.getElementById('text-toggle').innerHTML = enabled ? '🔤 Large Text ON' : '🔡 Large Text OFF';
    }
}

function toggleReducedMotion() {
    if (window.accessibility) {
        const enabled = window.accessibility.toggleReducedMotion();
        document.getElementById('motion-toggle').innerHTML = enabled ? '🚫 Reduced Motion ON' : '✨ Reduced Motion OFF';
    }
}

function toggleParticles() {
    if (window.particleSystem) {
        const enabled = window.particleSystem.toggle();
        document.getElementById('particles-toggle').innerHTML = enabled ? '✨ Particles ON' : '🚫 Particles OFF';
        if (window.notifications) {
            window.notifications.show(`Particles ${enabled ? 'enabled' : 'disabled'}`, 'info', 2000);
        }
    }
}

// Enhanced theme changing function
function changeTheme(themeName) {
    if (window.themeManager) {
        window.themeManager.applyTheme(themeName);
        
        // Add theme attribute to body for CSS targeting
        document.body.setAttribute('data-theme', themeName);
        
        // Show notification with theme name
        if (window.notifications) {
            const themeNames = {
                light: 'Classic Light',
                dark: 'Dark Mode',
                sepia: 'Vintage Sepia',
                neon: 'Matrix Green',
                cyberpunk: 'Cyberpunk Pink',
                hacker: 'Hacker Cyan',
                retro: 'Retro Orange',
                vampire: 'Vampire Red',
                ocean: 'Ocean Blue',
                forest: 'Forest Green'
            };
            window.notifications.show(`🎨 Theme: ${themeNames[themeName]}`, 'success', 2000);
        }
        
        // Create particle effect for theme change
        if (window.particleSystem) {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            window.particleSystem.createBurst(centerX, centerY, 20, 'success');
        }
        
        // Refresh settings panel to show active theme
        setTimeout(() => showSettings(), 100);
    }
}

// Enhanced particle burst for celebrations
function createCelebrationBurst() {
    if (window.particleSystem) {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight * 0.6;
                window.particleSystem.createBurst(x, y, 15, 'badge');
            }, i * 200);
        }
    }
}

// Add theme cycling with keyboard shortcut
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 't') {
        e.preventDefault();
        if (window.themeManager) {
            window.themeManager.toggleTheme();
            createCelebrationBurst();
        }
    }
});