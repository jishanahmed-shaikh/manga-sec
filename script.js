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
    { title: "Man-in-the-Middle Attack", desc: "Intercepting communication between two parties.", questions: [
        { q: "MITM stands for?", options: ["Man in the Middle", "Machine in the Main"], answer: 0 },
        { q: "A common MITM tool is?", options: ["Wireshark", "Photoshop"], answer: 0 },
        { q: "MITM targets?", options: ["Network traffic", "Hard drives"], answer: 0 }
    ]},
    { title: "Phishing", desc: "Deceptive emails to steal credentials.", questions: [
        { q: "Phishing often uses?", options: ["Emails", "USB sticks"], answer: 0 },
        { q: "Phishing goal is?", options: ["Steal info", "Play music"], answer: 0 },
        { q: "Avoid phishing by?", options: ["Clicking links", "Checking sender"], answer: 1 }
    ]},
    { title: "SQL Injection", desc: "Malicious SQL queries to access databases.", questions: [
        { q: "SQLi exploits?", options: ["Database queries", "Image pixels"], answer: 0 },
        { q: "Prevent SQLi by?", options: ["Parameterized queries", "Raw input"], answer: 0 },
        { q: "SQL stands for?", options: ["Structured Query Language", "Secure Query Logic"], answer: 0 }
    ]},
    { title: "DDoS Attack", desc: "Overwhelming a service with traffic.", questions: [
        { q: "DDoS stands for?", options: ["Distributed Denial of Service", "Data Delay of Server"], answer: 0 },
        { q: "DDoS goal is?", options: ["Crash service", "Clean code"], answer: 0 },
        { q: "Prevent DDoS with?", options: ["Firewalls", "Music players"], answer: 0 }
    ]},
    { title: "Brute Force Attack", desc: "Trying all possible passwords.", questions: [
        { q: "Brute force targets?", options: ["Passwords", "Emails"], answer: 0 },
        { q: "Prevent brute force with?", options: ["Strong passwords", "Weak passwords"], answer: 0 },
        { q: "Brute force is?", options: ["Guessing passwords", "Phishing"], answer: 0 }
    ]},
    { title: "Zero-Day Exploit", desc: "Attack before a fix is released.", questions: [
        { q: "Zero-day targets?", options: ["Unpatched flaws", "Old movies"], answer: 0 },
        { q: "Prevent zero-day by?", options: ["Updating software", "Ignoring patches"], answer: 0 },
        { q: "Hackers love zero-days?", options: ["Yes", "No"], answer: 0 }
    ]},
    { title: "Social Engineering", desc: "Manipulating people to give information.", questions: [
        { q: "Social engineering uses?", options: ["Psychology", "Math"], answer: 0 },
        { q: "Prevent it by?", options: ["Awareness", "Trusting strangers"], answer: 0 },
        { q: "Common example?", options: ["Phishing", "Programming"], answer: 0 }
    ]},
    { title: "Ransomware", desc: "Encrypts data for ransom.", questions: [
        { q: "Ransomware demands?", options: ["Money", "Free hugs"], answer: 0 },
        { q: "Prevent ransomware by?", options: ["Backups", "Ignoring updates"], answer: 0 },
        { q: "Ransomware encrypts?", options: ["Files", "Screens"], answer: 0 }
    ]},
    { title: "Trojan Horse", desc: "Malware disguised as legitimate software.", questions: [
        { q: "Named after?", options: ["Greek myth", "Virus"], answer: 0 },
        { q: "Trojan hides?", options: ["Malware", "Music"], answer: 0 },
        { q: "Prevent trojans by?", options: ["Trusted downloads", "Random links"], answer: 0 }
    ]},
    { title: "Spyware", desc: "Secretly monitors user activity.", questions: [
        { q: "Spyware collects?", options: ["Data", "Cookies"], answer: 0 },
        { q: "Prevent spyware with?", options: ["Antivirus", "Random installs"], answer: 0 },
        { q: "Spyware is legal?", options: ["No", "Yes"], answer: 0 }
    ]},
    { title: "Keylogger", desc: "Records keystrokes to steal data.", questions: [
        { q: "Keylogger steals?", options: ["Passwords", "Weather"], answer: 0 },
        { q: "Prevent it by?", options: ["Antivirus", "Ignore"], answer: 0 },
        { q: "Keylogger type?", options: ["Hardware & Software", "Music & Video"], answer: 0 }
    ]},
    { title: "Session Hijacking", desc: "Stealing a user session token.", questions: [
        { q: "Session hijacking steals?", options: ["Session token", "Shoes"], answer: 0 },
        { q: "Prevent by?", options: ["HTTPS", "HTTP"], answer: 0 },
        { q: "Cookies store?", options: ["Session data", "Bread"], answer: 0 }
    ]},
    { title: "Cryptojacking", desc: "Using your computer to mine crypto.", questions: [
        { q: "Cryptojacking mines?", options: ["Cryptocurrency", "Gold"], answer: 0 },
        { q: "Prevent by?", options: ["Anti-mining tools", "Ignoring"], answer: 0 },
        { q: "Cryptojacking slows?", options: ["Computer", "Internet only"], answer: 0 }
    ]},
    { title: "AI Bias", desc: "Unfair outcomes in AI models.", questions: [
        { q: "Bias in AI is?", options: ["Systematic error", "Random"], answer: 0 },
        { q: "Prevent by?", options: ["Diverse data", "Ignoring diversity"], answer: 0 },
        { q: "AI ethics important?", options: ["Yes", "No"], answer: 0 }
    ]}
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
        audio.play().catch(() => {}); // Ignore errors if audio fails
    },
    success: () => {
        const audio = new Audio();
        audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT';
        audio.play().catch(() => {});
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
    const panels = [
        {
            title: "🌐 THE DIGITAL FRONTIER",
            content: "In a world where data flows like digital rivers and AI thinks like humans, cybersecurity becomes the shield that protects our digital future. Welcome to the manga era of cyber defense.",
            sound: "💥",
            panelClass: "manga-panel"
        },
        {
            title: "⚔️ THE BATTLE BEGINS",
            content: "Hackers lurk in the shadows of the digital realm, exploiting vulnerabilities. But you have the power to become a cyber defender! The choice is yours, brave warrior.",
            sound: "⚡",
            panelClass: "speech-bubble"
        },
        {
            title: "🚀 YOUR MISSION",
            content: "Learn the secrets of cybersecurity and AI ethics. Every correct answer brings us closer to a safer digital world. Are you ready to hack the system ethically?",
            sound: "🎯",
            panelClass: "manga-panel"
        }
    ];
    
    if (currentPanel < panels.length) {
        const panel = panels[currentPanel];
        showPanel(`
            <div class="${panel.panelClass}">
                <div class="comic-sound">${panel.sound}</div>
                <h2 class="comic-title">${panel.title}</h2>
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
    
    showPanel(`
        <div class="comic-panel">
            <h1 class="title">MANGA-SEC</h1>
            <p class="intro">
                Welcome to <strong>MANGA-SEC</strong> – a black & white manga comic quiz blending 
                <strong>cybersecurity</strong> skills with <strong>AI ethics</strong>. 
                Learn, hack, and sharpen your digital defenses in a comic-style interactive experience.
            </p>
            
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
            
            <button class="button" onclick="showComicIntro()">🚀 INITIALIZE</button>
            <button class="button" onclick="showBadgeGallery()">🏅 BADGE GALLERY</button>
            <button class="button" onclick="showQuizStatus()">📊 QUIZ STATUS</button>
        </div>
    `);
    
    // Start countdown timer
    startCountdownTimer();
}

// Badge Gallery
function showBadgeGallery() {
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
    }
    
    showPanel(`
        <div class="comic-panel">
            <div class="quiz-header">
                <div class="quiz-progress">MISSION PHASE ${index + 1} OF 3</div>
                <div id="quiz-timer" class="quiz-timer">0:00</div>
            </div>
            <h3 class="question">${q.q}</h3>
            <div class="options">
                ${q.options.map((opt,i)=>`
                    <button class="button option-btn" onclick="checkAnswer(${quizIndex},${index},${score},${i===q.answer})">${opt}</button>
                `).join('')}
            </div>
        </div>
    `);
}

function checkAnswer(quizIndex, index, score, correct) {
    if (correct) {
        score++;
        sounds.success();
    }
    if (index+1 < randomizedTopics[quizIndex].questions.length) {
        startQuiz(quizIndex, index+1, score);
    } else {
        endQuiz(quizIndex, score);
    }
}

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
    
    if (score === 3) {
        showPanel(`
            <div class="manga-panel">
                <div class="badge">🏆 ELITE HACKER - ${randomizedTopics[quizIndex].title}</div>
                <p class="success-text">MISSION ACCOMPLISHED! You've mastered today's cybersecurity challenge!</p>
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
                <p>Keep learning, cyber warrior! You're getting closer to elite status!</p>
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

// Show quiz rotation status
function showQuizStatus() {
    const info = getQuizRotationInfo();
    const istTime = getISTTime();
    
    showPanel(`
        <div class="manga-panel">
            <h2 class="comic-title">📊 QUIZ ROTATION STATUS</h2>
            
            <div class="status-grid">
                <div class="status-item">
                    <div class="status-label">🌍 Current Time (IST)</div>
                    <div class="status-value">${istTime}</div>
                </div>
                
                <div class="status-item">
                    <div class="status-label">🎯 Current Quiz Topic</div>
                    <div class="status-value">${info.currentTopic}</div>
                </div>
                
                <div class="status-item">
                    <div class="status-label">⏰ Next Rotation In</div>
                    <div class="status-value">${info.nextRotationHours}h ${info.nextRotationMinutes}m</div>
                </div>
                
                <div class="status-item">
                    <div class="status-label">🔓 Quiz Status</div>
                    <div class="status-value ${info.canTake ? 'available' : 'locked'}">
                        ${info.canTake ? '✅ AVAILABLE' : '🔒 LOCKED'}
                    </div>
                </div>
            </div>
            
            <div class="quiz-info">
                <p>🔄 Quizzes change every 12 hours based on IST Mumbai time</p>
                <p>🎯 Each user can attempt a quiz once per rotation</p>
                <p>⏰ Rotation times: 12:00 AM, 12:00 PM IST</p>
            </div>
            
            <button class="button" onclick="loadLanding()">🏠 MAINFRAME</button>
        </div>
    `);
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    addPanelAnimation();
    loadUserProgress();
    
    setTimeout(() => {
        const loading = document.querySelector('.loading-panel');
        if (loading) {
            loading.style.display = 'none';
            loadLanding();
        }
    }, 2000);
});