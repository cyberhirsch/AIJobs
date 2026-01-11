document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const introCard = document.getElementById('intro-card');
    const questionContainer = document.getElementById('question-container');

    // --- I18N SETUP ---
    let currentLang = document.getElementById('lang-select').value;
    const langSelect = document.getElementById('lang-select');

    function updateStaticContent() {
        const t = translations[currentLang];
        document.getElementById('hero-title').innerHTML = t.hero_title;
        document.getElementById('hero-subtitle').innerText = t.hero_subtitle;
        document.getElementById('intro-title').innerText = t.intro_title;
        document.getElementById('intro-text').innerText = t.intro_text;
        document.getElementById('start-btn').innerText = t.start_btn;
        document.getElementById('footer-text').innerText = t.footer_copyright;
        document.getElementById('consent-label').innerText = t.consent_text;
        document.getElementById('privacy-btn').innerText = t.privacy_link;
        document.getElementById('imprint-btn').innerText = t.imprint_link;

        // Update RTL
        if (currentLang === 'ar') {
            document.body.classList.add('rtl');
        } else {
            document.body.classList.remove('rtl');
        }
    }

    // --- MODAL LOGIC ---
    const modal = document.getElementById('legal-modal');
    const modalBody = document.getElementById('modal-body');
    const privacyBtn = document.getElementById('privacy-btn');
    const imprintBtn = document.getElementById('imprint-btn');
    const closeModal = document.getElementById('close-modal');

    function openModal(type) {
        const t = translations[currentLang];
        if (type === 'privacy') {
            modalBody.innerHTML = t.privacy_content || (t.privacy_link + ' content...');
        } else {
            modalBody.innerHTML = t.imprint_content || (t.imprint_link + ' content...');
        }
        modal.classList.remove('hidden');
    }

    privacyBtn.addEventListener('click', () => openModal('privacy'));
    imprintBtn.addEventListener('click', () => openModal('imprint'));
    closeModal.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });

    langSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        updateStaticContent();
        // If the survey is running, we might want to re-render the current question
        if (!questionContainer.classList.contains('hidden')) {
            renderCurrentQuestion();
        }
    });

    const consentCheck = document.getElementById('consent-check');
    consentCheck.addEventListener('change', () => {
        startBtn.disabled = !consentCheck.checked;
    });

    // Initialize static text
    updateStaticContent();

    // --- POCKETBASE SETUP ---
    const PB_URL = 'https://api.sebhirsch.com';
    const PB_COLLECTION = 'survey_responses';

    let currentQuestionIndex = 0;

    // Complex State to track distinct user dimensions
    let state = {
        domain: '',
        tech: 0,
        art: 0,
        vibe: 0,
        sentiment: 0,
        efficiency: 0,
        years_experience: 0,
        usage_hours: 0,
        atrophy: 0,
        anxiety: 0,
        industry: '',
        oss_preference: '',
        ethics: 0,
        resilience: 0,
        content_sentiment: 0,
        lindy: 0,
        flow: 0
    };

    let flowStep = 'demographics'; // 'demographics' -> 'domain' -> 'main' -> 'research' -> 'result'
    let currentFlowIndex = 0;

    let activeQuestions = [];

    // --- QUESTION LOOKUP ---
    function getQuestion(step, index) {
        const qBank = translations[currentLang].questions;
        if (step === 'demographics') return qBank.demographics[index];
        if (step === 'domain') return qBank.domainSelection;
        if (step === 'main') return activeQuestions[index];
        if (step === 'research') return qBank.research[index];
        if (step === 'political') return qBank.political[index];
        if (step === 'content') return qBank.content[index];
        if (step === 'psychology') return qBank.psychology[index];
        return null;
    }

    startBtn.addEventListener('click', () => {
        introCard.style.opacity = '0';
        introCard.style.transform = 'translateY(20px)';

        setTimeout(() => {
            introCard.classList.add('hidden');
            questionContainer.classList.remove('hidden');
            // Start with demographics
            flowStep = 'demographics';
            currentFlowIndex = 0;
            renderCurrentQuestion();
        }, 500);
    });

    function renderCurrentQuestion() {
        let questionData = null;
        if (flowStep === 'demographics') {
            questionData = translations[currentLang].questions.demographics[currentFlowIndex];
        } else if (flowStep === 'domain') {
            questionData = translations[currentLang].questions.domainSelection;
        } else if (flowStep === 'main') {
            questionData = activeQuestions[currentFlowIndex];
        } else if (flowStep === 'research') {
            questionData = translations[currentLang].questions.research[currentFlowIndex];
        } else if (flowStep === 'political') {
            questionData = translations[currentLang].questions.political[currentFlowIndex];
        } else if (flowStep === 'content') {
            questionData = translations[currentLang].questions.content[currentFlowIndex];
        } else if (flowStep === 'psychology') {
            questionData = translations[currentLang].questions.psychology[currentFlowIndex];
        }

        if (questionData) {
            renderQuestion(questionData);
        } else {
            showResult();
        }
    }

    function renderQuestion(questionData) {
        questionContainer.innerHTML = '';

        const card = document.createElement('div');
        card.className = 'glass-card question-card';

        const number = document.createElement('div');
        number.className = 'question-number';

        const t = translations[currentLang];
        const qBank = t.questions;

        if (flowStep === 'demographics') {
            number.innerText = `${t.setup_step} ${currentFlowIndex + 1} / ${qBank.demographics.length}`;
        } else if (flowStep === 'domain') {
            number.innerText = `${t.selection_step}`;
        } else if (flowStep === 'main') {
            number.innerText = `${t.core_step} ${currentFlowIndex + 1} / ${activeQuestions.length}`;
        } else if (flowStep === 'research') {
            number.innerText = `${t.research_step} ${currentFlowIndex + 1} / ${qBank.research.length}`;
        } else if (flowStep === 'political') {
            number.innerText = `${t.political_step} ${currentFlowIndex + 1} / ${qBank.political.length}`;
        } else if (flowStep === 'content') {
            number.innerText = `${t.content_step} ${currentFlowIndex + 1} / ${qBank.content.length}`;
        } else if (flowStep === 'psychology') {
            number.innerText = `${t.deep_dive_step} ${currentFlowIndex + 1} / ${qBank.psychology.length}`;
        } else {
            number.innerText = `${currentFlowIndex + 1}`;
        }

        const text = document.createElement('h2');
        text.innerText = questionData.text;

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options-grid';

        questionData.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt.text;
            btn.addEventListener('click', () => handleAnswer(opt.delta));
            optionsDiv.appendChild(btn);
        });

        card.appendChild(number);
        card.appendChild(text);
        card.appendChild(optionsDiv);
        questionContainer.appendChild(card);
    }

    function handleAnswer(delta) {
        // Apply deltas to state
        Object.entries(delta).forEach(([key, value]) => {
            if (typeof state[key] === 'number') {
                state[key] += value;
            } else {
                state[key] = value;
            }
        });

        const qBank = translations[currentLang].questions;

        // Flow Management
        if (flowStep === 'demographics') {
            currentFlowIndex++;
            if (currentFlowIndex >= qBank.demographics.length) {
                flowStep = 'domain';
                currentFlowIndex = 0;
            }
        } else if (flowStep === 'domain') {
            // Domain selection triggers main questions
            if (state.domain === 'code') {
                // We need to pick the themed questions from the current language
                activeQuestions = translations[currentLang].questions.codeQuestions;
                flowStep = 'main';
                currentFlowIndex = 0;
            } else if (state.domain === 'art') {
                activeQuestions = translations[currentLang].questions.artQuestions;
                flowStep = 'main';
                currentFlowIndex = 0;
            } else if (state.domain === 'both') {
                activeQuestions = [...translations[currentLang].questions.codeQuestions, ...translations[currentLang].questions.artQuestions];
                flowStep = 'main';
                currentFlowIndex = 0;
            } else {
                flowStep = 'research';
                currentFlowIndex = 0;
            }
        } else if (flowStep === 'main') {
            currentFlowIndex++;
            if (currentFlowIndex >= activeQuestions.length) {
                flowStep = 'research';
                currentFlowIndex = 0;
            }
        } else if (flowStep === 'research') {
            currentFlowIndex++;
            if (currentFlowIndex >= qBank.research.length) {
                flowStep = 'political';
                currentFlowIndex = 0;
            }
        } else if (flowStep === 'political') {
            currentFlowIndex++;
            if (currentFlowIndex >= qBank.political.length) {
                flowStep = 'content';
                currentFlowIndex = 0;
            }
        } else if (flowStep === 'content') {
            currentFlowIndex++;
            if (currentFlowIndex >= qBank.content.length) {
                flowStep = 'psychology';
                currentFlowIndex = 0;
            }
        } else if (flowStep === 'psychology') {
            currentFlowIndex++;
            if (currentFlowIndex >= qBank.psychology.length) {
                showResult();
                return;
            }
        }

        renderCurrentQuestion();
    }

    function showResult() {
        questionContainer.innerHTML = '';
        const t = translations[currentLang];

        let archetypeKey = "";
        let subtextKey = "";
        const isCoder = state.domain === 'code' || state.domain === 'both';
        // const isArtist = state.domain === 'art' || state.domain === 'both';

        // --- CLASSIFICATION LOGIC ---
        let archName = "";
        let subText = "";

        if ((state.tech > 8 || state.art > 8) && state.sentiment < -2) {
            archName = isCoder ? "The Code Artisan (Purist)" : "The Ink-Stained Rebel";
            if (state.domain === 'both') archName = "The Renaissance Traditionalist";
            subText = t.subtexts.purist;
        } else if ((state.tech > 5 || state.art > 5) && state.vibe > 5) {
            archName = isCoder ? "The Augmented Engineer (10x)" : "The Synth-Grapher";
            if (state.domain === 'both') archName = "The Omni-Creator";
            subText = t.subtexts.augmented;
        } else if ((state.tech < 5 && state.art < 5) && state.vibe > 5) {
            archName = isCoder ? "The Pure Vibe Coder" : "The Dreamweaver";
            if (state.domain === 'both') archName = "The Idea Generator";
            subText = t.subtexts.prompter;
        } else {
            archName = "The Cautious Adapter";
            subText = t.subtexts.cautious;
        }

        const translatedArchetype = t.archetypes[archName] || archName;

        // --- SUBMIT DATA SAFELY ---
        submitData(archName);

        // --- GAMIFICATION: CALIBRATED SCORE ---
        const baseSkill = Math.max(state.tech, state.art);
        const augmentation = (state.vibe * 1.0) + (state.sentiment * 0.2);
        const resilience = (state.resilience * 1.2) + (state.lindy * 0.5);

        let futureProofScore = Math.round(((baseSkill * 4) + (augmentation * 3) + (resilience * 3) + 15) / 1.2);
        if (augmentation < 2 && futureProofScore > 88) {
            futureProofScore = 88;
        }
        futureProofScore = Math.max(5, Math.min(97, futureProofScore));

        let rankKey = "B-CLASS ADAPTER";
        if (state.resilience > 15 && state.vibe < 5) rankKey = "S-CLASS SOVEREIGN";
        else if (futureProofScore > 85) rankKey = "S-CLASS ORCHESTRATOR";
        else if (futureProofScore > 70) rankKey = "A-CLASS AUGMENTED";
        else if (state.ethics > 15) rankKey = "A-CLASS ETHICIST";

        const translatedRank = t.ranks[rankKey] || rankKey;

        const card = document.createElement('div');
        card.className = 'glass-card result-card';

        const badge = document.createElement('div');
        badge.className = 'result-badge';
        badge.innerHTML = `
            <div class="rank-text">${t.rank_label}: ${translatedRank}</div>
            <div class="score-circle">
                <span class="score-value">${futureProofScore}%</span>
                <span class="score-label">${t.future_proof_label}</span>
            </div>
            <h1>${t.archetype_header}: <span class="highlight">${translatedArchetype}</span></h1>
            <p>${subText}</p>
        `;

        const shareSection = document.createElement('div');
        shareSection.className = 'share-section';

        const shareTextRaw = t.share_text;
        const shareTextFormatted = shareTextRaw.replace('{archetype}', translatedArchetype).replace('{score}', futureProofScore);
        const shareUrl = 'https://cyberhirsch.github.io/AIJobs/';

        const copyBtn = document.createElement('button');
        copyBtn.className = 'share-btn primary';
        copyBtn.innerHTML = t.share_challenge;
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(shareUrl);
            copyBtn.innerText = t.link_copied;
            setTimeout(() => copyBtn.innerHTML = t.share_challenge, 2000);
        };

        const tweetBtn = document.createElement('button');
        tweetBtn.className = 'share-btn';
        tweetBtn.innerHTML = '🐦 X';
        tweetBtn.onclick = () => {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTextFormatted)}&url=${encodeURIComponent(shareUrl)}`);
        };

        const linkedInBtn = document.createElement('button');
        linkedInBtn.className = 'share-btn';
        linkedInBtn.innerHTML = '💼 LinkedIn';
        linkedInBtn.onclick = () => {
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`);
        };

        const waBtn = document.createElement('button');
        waBtn.className = 'share-btn';
        waBtn.innerHTML = '💬 WhatsApp';
        waBtn.onclick = () => {
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTextFormatted + ' ' + shareUrl)}`);
        };

        shareSection.appendChild(copyBtn);
        shareSection.appendChild(tweetBtn);
        shareSection.appendChild(linkedInBtn);
        shareSection.appendChild(waBtn);

        const stats = document.createElement('div');
        stats.style.marginTop = "20px";
        stats.style.color = "#aaa";
        let statParts = [];
        if (state.domain !== 'art') statParts.push(`${t.stat_tech}: ${state.tech}`);
        if (state.domain !== 'code') statParts.push(`${t.stat_art}: ${state.art}`);
        statParts.push(`${t.stat_vibe}: ${state.vibe}`);
        statParts.push(`${t.stat_sentiment}: ${state.sentiment}`);

        stats.innerHTML = `<small>${statParts.join(' | ')}</small>`;

        const restartBtn = document.createElement('button');
        restartBtn.className = 'primary-btn';
        restartBtn.style.marginTop = '20px';
        restartBtn.innerText = t.restart_btn;
        restartBtn.addEventListener('click', () => location.reload());

        card.appendChild(badge);
        card.appendChild(shareSection);
        card.appendChild(stats);
        card.appendChild(restartBtn);
        questionContainer.appendChild(card);
    }

    async function submitData(archetype) {
        const payload = {
            archetype: archetype,
            domain: state.domain,
            tech_score: state.tech,
            art_score: state.art,
            vibe_score: state.vibe,
            sentiment_score: state.sentiment,
            years_experience: state.years_experience,
            usage_hours_weekly: state.usage_hours,
            atrophy_score: state.atrophy,
            anxiety_score: state.anxiety,
            industry: state.industry,
            oss_preference: state.oss_preference,
            ethics_score: state.ethics,
            resilience_score: state.resilience,
            content_value_score: state.content_sentiment,
            lindy_score: state.lindy,
            flow_score: state.flow,
            language: currentLang
        };

        try {
            const response = await fetch(`${PB_URL}/api/collections/${PB_COLLECTION}/records`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Submission failed');
            }

            console.log("Survey submitted safely to PocketBase.");
        } catch (err) {
            console.error("Error submitting survey:", err.message);
        }
    }
});
