/* ==========================================================================
   "our first chapter." — JavaScript Logic & Data Engine
   Created by Ayan for Yildiz • October 8, 2026
   ========================================================================== */

/**
 * EDITABLE CONFIGURATION OBJECT
 * All text content, questions, songs, timeline entries, and cards can be easily edited here.
 */
const anniversaryData = {
    herName: "Yildiz",
    myName: "Ayan",
    anniversaryDate: "8 October 2026",

    // Chapter 2: 12 Little Things
    littleThings: [
        { id: "01", front: "something i secretly love about you", back: "i love the way you care for musa, your little borhter and me ofcourse." },
        { id: "02", front: "one of your little habits", back: "when you randomly say i love you during calls or texts." },
        { id: "03", front: "something you always say", back: "hugs you tightly." },
        { id: "04", front: "an inside joke", back: "the way batool is jealous of me." },
        { id: "05", front: "when you're embarrassed", back: "after knowing that i secretly clicked a picture of you during video call." },
        { id: "06", front: "something i admire about you", back: "your existence.  everything about you." },
        { id: "07", front: "something that makes me smile", back: "when you randomly blink your eyes while talking to me" },
        { id: "08", front: "something i find cute", back: "\"hawwww, don't do it ayan\", when i secretly click a picture of you." },
        { id: "09", front: "something i want to remember", back: "the way you were with me when i was at my lowest" },
        { id: "10", front: "one random Yildiz fact", back: "she loves musa more than me (sad emoji)" }
    ],

    // Chapter 3: Our Timeline (7 Milestones)
    timeline: [
        { date: "before us", title: "The Prelude" },
        { date: "first conversation", title: "The First Message" },
        { date: "first moment", title: "The Shift" },
        { date: "realization", title: "When You Mattered" },
        { date: "becoming us", title: "The Beginning" },
        { date: "our first week", title: "Seven Days In" },
        { date: "today — 1 month", title: "One Month of Us" }
    ],

    // Chapter 4: Future Gallery (7 Future Memories)
    futureGallery: [
        { title: "our first late-night walk", subtitle: "haven't happened yet.\nbut i'd like them to.", image: "assets/future1.jpg" },
        { title: "our first rainy day", subtitle: "haven't happened yet.\nbut i'd like them to.", image: "assets/future2.jpg" },
        { title: "our first trip", subtitle: "haven't happened yet.\nbut i'd like them to.", image: "assets/future3.jpg" },
        { title: "our first random road trip", subtitle: "haven't happened yet.\nbut i'd like them to.", image: "assets/future4.jpg" },
        { title: "our first lazy sunday", subtitle: "haven't happened yet.\nbut i'd like them to.", image: "assets/future5.jpg" },
        { title: "our first proper celebration", subtitle: "haven't happened yet.\nbut i'd like them to.", image: "assets/future6.jpg" },
    ],

    // Chapter 5: Our Soundtrack (8 Track Entries)
    songs: [
        { title: "Sahiba", artist: "Aditya Rikhari", reason: "because this one feels like the beginning of something i didn't know i'd end up caring about this much..." },
        { title: "Apna Bana Le", artist: "Arijit Singh", reason: "because somewhere between all our conversations, you started feeling a little like home..." },
        { title: "Dhun", artist: "Arijit Singh", reason: "because this one sounds exactly like the kind of feeling i can't properly put into words..." },
        { title: "O Maahi", artist: "Arijit Singh", reason: "because this one feels like those late nights when it's just you, me and a conversation we don't want to end..." },
        { title: "Tum Kya Mile", artist: "Arijit Singh, Shreya Ghoshal", reason: "because this feels like the soundtrack to a quiet drive where neither of us really needs to say anything..." },
        { title: "Jashn-E-Bahaaraa", artist: "A.R. Rahman, Javed Ali", reason: "because it has that calm, warm energy of yours..." },
        { title: "Sajni", artist: "Arijit Singh", reason: "because i secretly saved it to a playlist for you..." },
        { title: "Tum Ho Toh", artist: "Vishal Mishra", reason: "because it feels like our story..." }
    ],

    // Chapter 6: Quiz Questions (10 Multiple Choice)
    quizQuestions: [
        {
            question: "What is my comfort movie?",
            options: ["The Dark Knight", "Interstellar", "About Time", "La La Land"],
            correctIndex: 0
        },
        {
            question: "What instantly makes me happy?",
            options: ["A good cup of tea", "A notification from you", "Late night music", "All of the above"],
            correctIndex: 1
        },
        {
            question: "What is something I pretend not to care about?",
            options: ["Losing a game", "Being cheesy", "Getting sleepy early", "My hair"],
            correctIndex: 1
        },
        {
            question: "What would I choose: a night out or a night in?",
            options: ["Night out in the city", "Quiet night in together", "Random late night drive", "Camping under stars"],
            correctIndex: 1
        },
        {
            question: "What is one thing I really want to achieve?",
            options: ["Travel the world", "Build something meaningful", "Learn 5 languages", "Master cooking"],
            correctIndex: 1
        },
        {
            question: "What is my favorite time of day?",
            options: ["Early morning", "Late afternoon sunset", "Late night quiet hours", "Midday sun"],
            correctIndex: 2
        },
        {
            question: "How do I react when I'm really excited about something?",
            options: ["I talk super fast", "I get quiet and smile", "I send 10 texts in a row", "I start pacing"],
            correctIndex: 2
        },
        {
            question: "What kind of weather do I love most?",
            options: ["Sunny and breezy", "Rainy and overcast", "Cold and snowy", "Warm summer night"],
            correctIndex: 2
        },
        {
            question: "What was the very first thing I noticed about you?",
            options: ["Your smile", "Your voice", "The way you talk", "Your sense of humor"],
            correctIndex: 0
        },
        {
            question: "How happy am I that it's you?",
            options: ["10/10 happy", "100/10 happy", "More than words can say", "A million percent"],
            correctIndex: 2
        }
    ],

    // Chapter 7: Emotional Letter Placeholder
    letter: [
        "yildiz,",
        "i don't really know how to explain this perfectly, but i really wanted to write this for you.",
        "it's kinda crazy to think that it's already been a month. one month doesn't sound like a lot, but somehow you've managed to become such an important part of my everyday life. you're someone i look forward to talking to, someone i want to tell random things to, and someone whose little messages can genuinely change my mood.",
        "and i don't think it's just the big moments that i love about us. it's the small things. the way you talk, the random things you say, our stupid conversations, the little jokes, and all those tiny moments that probably don't mean much to anyone else but somehow mean a lot to me.",
        "i love getting to know you. every little thing i learn about you makes me feel like i'm slowly getting to know someone i'll never completely stop discovering, and honestly, i really like that.",
        "i want us to grow together, learn each other better, become more comfortable with each other, make more memories, laugh at things nobody else would understand, and slowly build something that feels like ours.",
        "i don't know what the next months are going to look like.",
        "but i know i'd like to find out with you.",
        "so here's to our first month, to everything we've already had, and to all the things we haven't experienced yet.",
    ],

    // Secret Interaction Message
    secretMessage: [
        "there are probably a million things i could've put on this website.",
        "but honestly...",
        "i just wanted you to know that i'm really, really happy it's you."
    ]
};

/* ==========================================================================
   APP INITIALIZATION & INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initParticleCanvas();
    renderDataComponents();
    initChapterObserver();
    initChapter0Animations();
    initFlipCards();
    initQuizEngine();
    initEnvelopeAnimation();
    initAudioSystem();
    initSecretEasterEgg();
    initScrollButtons();
});

/* ==========================================================================
   1. Particle Canvas System
   ========================================================================== */
function initParticleCanvas() {
    const canvas = document.getElementById("particle-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const count = Math.min(Math.floor(width / 18), 75);

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random() * 0.7 + 0.2,
            speedY: Math.random() * 0.3 + 0.1,
            pulseSpeed: Math.random() * 0.02 + 0.005
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.y -= p.speedY;
            p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.005;

            if (p.y < 0) {
                p.y = height;
                p.x = Math.random() * width;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(226, 192, 141, ${Math.max(0.1, Math.min(0.8, p.alpha))})`;
            ctx.shadowBlur = p.radius > 1 ? 6 : 0;
            ctx.shadowColor = "rgba(216, 167, 177, 0.5)";
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}

/* ==========================================================================
   2. Render Data Components from Config
   ========================================================================== */
function renderDataComponents() {
    // 1. Render Chapter 2 (Little Things)
    const grid = document.getElementById("little-things-grid");
    if (grid) {
        grid.innerHTML = anniversaryData.littleThings.map(card => `
            <div class="flip-card" tabindex="0" role="button" aria-label="${card.front}">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <span class="card-num">${card.id}</span>
                        <p class="card-front-title">${card.front}</p>
                        <span class="card-hint">tap to reveal</span>
                    </div>
                    <div class="flip-card-back">
                        <span class="card-back-tag">detail ${card.id}</span>
                        <p class="card-back-text">${card.back}</p>
                    </div>
                </div>
            </div>
        `).join("");
    }

    // 2. Render Chapter 3 (Timeline)
    const timeline = document.getElementById("timeline-container");
    if (timeline) {
        timeline.innerHTML = anniversaryData.timeline.map(item => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-card glass-card">
                    <div class="timeline-meta">
                        <span class="timeline-date">${item.date}</span>
                    </div>
                    <h3 class="timeline-title">${item.title}</h3>
                </div>
            </div>
        `).join("");
    }

    // 3. Render Chapter 4 (Future Gallery)
    const gallery = document.getElementById("future-gallery-grid");
    if (gallery) {
        gallery.innerHTML = anniversaryData.futureGallery.map(item => `
            <div class="gallery-card glass-card">
                <div class="gallery-media">
                    <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'600\' viewBox=\'0 0 800 600\'><rect width=\'800\' height=\'600\' fill=\'%23141926\'/><text x=\'400\' y=\'300\' fill=\'%23d8a7b1\' font-family=\'serif\' font-size=\'24\' text-anchor=\'middle\'>${encodeURIComponent(item.title)}</text></svg>'">
                </div>
                <div class="gallery-body">
                    <h3 class="gallery-card-title">${item.title}</h3>
                    <p class="gallery-quote">${item.subtitle.replace('\n', '<br>')}</p>
                </div>
            </div>
        `).join("");
    }

    // 4. Render Chapter 5 (Soundtrack Tracks)
    const trackList = document.getElementById("track-list-container");
    if (trackList) {
        trackList.innerHTML = anniversaryData.songs.map((song, idx) => `
            <div class="track-item">
                <div class="track-left">
                    <span class="track-num">${String(idx + 1).padStart(2, '0')}</span>
                    <div class="track-meta">
                        <span class="track-name">${song.title}</span>
                        <span class="track-artist">${song.artist}</span>
                    </div>
                </div>
                <span class="track-reason">${song.reason}</span>
            </div>
        `).join("");
    }

    // 5. Render Chapter 7 (Letter Content)
    const letterBox = document.getElementById("letter-text-container");
    if (letterBox) {
        letterBox.innerHTML = anniversaryData.letter.map(para => `
            <p>${para}</p>
        `).join("");
    }
}

/* ==========================================================================
   3. Chapter Intersection Observer (Progress Indicator & Visibility)
   ========================================================================== */
function initChapterObserver() {
    const chapters = document.querySelectorAll(".chapter");
    const label = document.getElementById("chapter-label");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                const chapterNum = entry.target.getAttribute("data-chapter");
                const chapterTitle = entry.target.getAttribute("data-title");

                if (label) {
                    label.textContent = `Chapter ${chapterNum} of 8 — ${chapterTitle}`;
                }
            }
        });
    }, { threshold: 0.25 });

    chapters.forEach(ch => observer.observe(ch));
}

/* ==========================================================================
   4. Chapter 0 Hero Sequential Reveal
   ========================================================================== */
function initChapter0Animations() {
    const steps = document.querySelectorAll(".hero-chapter .fade-step");
    steps.forEach(step => step.classList.add("in"));
}

/* ==========================================================================
   5. Flip Cards Interaction (Click & Keyboard)
   ========================================================================== */
function initFlipCards() {
    document.addEventListener("click", (e) => {
        const card = e.target.closest(".flip-card");
        if (card) {
            card.classList.toggle("flipped");
        }
    });

    document.addEventListener("keydown", (e) => {
        if ((e.key === "Enter" || e.key === " ") && document.activeElement.classList.contains("flip-card")) {
            e.preventDefault();
            document.activeElement.classList.toggle("flipped");
        }
    });
}

/* ==========================================================================
   6. Quiz Mini-Game Engine
   ========================================================================== */
let currentQuestionIndex = 0;
let userScore = 0;

function initQuizEngine() {
    loadQuestion(0);

    const retryBtn = document.getElementById("quiz-retry-btn");
    if (retryBtn) {
        retryBtn.addEventListener("click", () => {
            currentQuestionIndex = 0;
            userScore = 0;
            document.getElementById("quiz-body").classList.remove("hidden");
            document.getElementById("quiz-result").classList.add("hidden");
            loadQuestion(0);
        });
    }
}

function loadQuestion(index) {
    const questions = anniversaryData.quizQuestions;
    if (index >= questions.length) {
        showQuizResults();
        return;
    }

    const q = questions[index];
    const qText = document.getElementById("quiz-question-text");
    const progressText = document.getElementById("quiz-progress");
    const progressFill = document.getElementById("quiz-fill");
    const optionsContainer = document.getElementById("quiz-options-container");

    if (qText) qText.textContent = q.question;
    if (progressText) progressText.textContent = `Question ${index + 1} of ${questions.length}`;
    if (progressFill) progressFill.style.width = `${((index + 1) / questions.length) * 100}%`;

    if (optionsContainer) {
        optionsContainer.innerHTML = q.options.map((opt, i) => `
            <button class="quiz-opt-btn" data-index="${i}">
                <span>${opt}</span>
                <span class="opt-bullet">✨</span>
            </button>
        `).join("");

        optionsContainer.querySelectorAll(".quiz-opt-btn").forEach(btn => {
            btn.addEventListener("click", function () {
                const selected = parseInt(this.getAttribute("data-index"));
                handleAnswer(selected, q.correctIndex, this);
            });
        });
    }
}

function handleAnswer(selected, correct, clickedBtn) {
    const allBtns = document.querySelectorAll(".quiz-opt-btn");
    allBtns.forEach(b => b.disabled = true);

    if (selected === correct) {
        clickedBtn.classList.add("correct");
        userScore++;
    } else {
        clickedBtn.classList.add("wrong");
        allBtns[correct]?.classList.add("correct");
    }

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }, 1100);
}

function showQuizResults() {
    document.getElementById("quiz-body").classList.add("hidden");
    const resultBox = document.getElementById("quiz-result");
    resultBox.classList.remove("hidden");

    const scoreText = document.getElementById("result-score-text");
    const titleText = document.getElementById("result-title");
    const msgText = document.getElementById("result-message-text");

    if (scoreText) scoreText.textContent = `${userScore} / 10`;

    let title = "";
    let message = "";

    if (userScore <= 3) {
        title = "okayyyy we need to talk 😭";
        message = "You got a few, but don't worry—we have plenty of time to learn every detail about each other!";
    } else if (userScore <= 6) {
        title = "not bad, yildiz.";
        message = "You know me pretty well! A couple sneaky ones got past you, but I'm impressed.";
    } else if (userScore <= 9) {
        title = "okay you actually know me.";
        message = "Look at you! You've really been paying attention to all the little things.";
    } else {
        title = "HOW DO YOU KNOW ME THIS WELL 😭❤️";
        message = "A perfect score! You know me better than anyone. I love you so much!";
    }

    if (titleText) titleText.textContent = title;
    if (msgText) msgText.textContent = message;
}

/* ==========================================================================
   7. Chapter 7: Envelope Animation Engine
   ========================================================================== */
function initEnvelopeAnimation() {
    const openBtn = document.getElementById("open-envelope-btn");
    const teaser = document.getElementById("envelope-teaser");
    const card = document.getElementById("envelope-card");

    if (openBtn && teaser && card) {
        openBtn.addEventListener("click", () => {
            teaser.classList.add("hidden");
            card.classList.remove("hidden");
            setTimeout(() => {
                card.classList.add("open");
            }, 100);
        });
    }
}

/* ==========================================================================
   8. Audio Control System (HTML5 Audio + Web Audio API Ambient Synth Fallback)
   ========================================================================== */
function initAudioSystem() {
    const toggleBtn = document.getElementById("music-toggle");
    const audio = document.getElementById("ambient-audio");
    const statusText = toggleBtn?.querySelector(".music-status");

    let isPlaying = false;
    let synthAudioContext = null;
    let synthOscillators = [];

    if (!toggleBtn) return;

    toggleBtn.addEventListener("click", () => {
        if (!isPlaying) {
            // Attempt standard HTML5 Audio play
            if (audio) {
                audio.play().then(() => {
                    setPlayingState(true);
                }).catch(() => {
                    // Fallback to synthesized ambient chord generator using Web Audio API
                    startAmbientSynth();
                    setPlayingState(true);
                });
            } else {
                startAmbientSynth();
                setPlayingState(true);
            }
        } else {
            if (audio && !audio.paused) {
                audio.pause();
            }
            stopAmbientSynth();
            setPlayingState(false);
        }
    });

    function setPlayingState(playing) {
        isPlaying = playing;
        if (playing) {
            toggleBtn.classList.add("playing");
            if (statusText) statusText.textContent = "playing music";
        } else {
            toggleBtn.classList.remove("playing");
            if (statusText) statusText.textContent = "play music";
        }
    }

    // Soft Romantic Ambient Chord Generator (Web Audio API Fallback)
    function startAmbientSynth() {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!synthAudioContext) {
                synthAudioContext = new AudioCtx();
            }
            if (synthAudioContext.state === "suspended") {
                synthAudioContext.resume();
            }

            stopAmbientSynth();

            // Soft warm romantic pentatonic frequencies (A major / C# minor feel)
            const freqs = [220.00, 277.18, 329.63, 440.00, 554.37];
            const masterGain = synthAudioContext.createGain();
            masterGain.gain.setValueAtTime(0.08, synthAudioContext.currentTime);
            masterGain.connect(synthAudioContext.destination);

            freqs.forEach((f, i) => {
                const osc = synthAudioContext.createOscillator();
                const gain = synthAudioContext.createGain();

                osc.type = "sine";
                osc.frequency.setValueAtTime(f, synthAudioContext.currentTime);

                // Subtle LFO modulation for dreamy swell
                const lfo = synthAudioContext.createOscillator();
                lfo.frequency.setValueAtTime(0.1 + i * 0.05, synthAudioContext.currentTime);
                const lfoGain = synthAudioContext.createGain();
                lfoGain.gain.setValueAtTime(0.02, synthAudioContext.currentTime);
                lfo.connect(lfoGain);
                lfoGain.connect(osc.frequency);
                lfo.start();

                gain.gain.setValueAtTime(0.05, synthAudioContext.currentTime);
                osc.connect(gain);
                gain.connect(masterGain);
                osc.start();

                synthOscillators.push(osc, lfo);
            });
        } catch (err) {
            console.log("Ambient synth note:", err);
        }
    }

    function stopAmbientSynth() {
        synthOscillators.forEach(osc => {
            try { osc.stop(); } catch (e) { }
        });
        synthOscillators = [];
    }
}

/* ==========================================================================
   9. Secret Easter Egg Modal
   ========================================================================== */
function initSecretEasterEgg() {
    const starBtn = document.getElementById("secret-star");
    const modal = document.getElementById("secret-modal");
    const closeBtn = document.getElementById("secret-close");
    const confirmBtn = document.getElementById("secret-confirm");

    if (starBtn && modal) {
        starBtn.addEventListener("click", () => {
            modal.classList.add("active");
            modal.setAttribute("aria-hidden", "false");
        });

        const closeModal = () => {
            modal.classList.remove("active");
            modal.setAttribute("aria-hidden", "true");
        };

        if (closeBtn) closeBtn.addEventListener("click", closeModal);
        if (confirmBtn) confirmBtn.addEventListener("click", closeModal);

        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
    }
}

/* ==========================================================================
   10. Scroll Buttons (Enter Story & Next Chapter Smooth Scroll)
   ========================================================================== */
function initScrollButtons() {
    const enterBtn = document.getElementById("enter-btn");
    if (enterBtn) {
        enterBtn.addEventListener("click", () => {
            const ch1 = document.getElementById("chapter-1");
            if (ch1) {
                ch1.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    document.querySelectorAll(".scroll-to-next").forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-next");
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    const restartBtn = document.getElementById("restart-btn");
    if (restartBtn) {
        restartBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}
