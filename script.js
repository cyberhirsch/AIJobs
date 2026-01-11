document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const introCard = document.getElementById('intro-card');
    const questionContainer = document.getElementById('question-container');

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

    // --- QUESTION BANK ---

    const demographicQuestions = [
        {
            text: "How many years have you been working in your field?",
            options: [
                { text: "Junior (0-2 years)", delta: { years_experience: 1 } },
                { text: "Intermediate (3-5 years)", delta: { years_experience: 4 } },
                { text: "Senior (6-10 years)", delta: { years_experience: 8 } },
                { text: "Veteran (10+ years)", delta: { years_experience: 15 } }
            ]
        },
        {
            text: "What is your primary industry?",
            options: [
                { text: "Software / Engineering", delta: { industry: 'Software' } },
                { text: "Visual Arts / Design", delta: { industry: 'Creative' } },
                { text: "Academic / Research / Education", delta: { industry: 'Academic' } },
                { text: "Marketing / Professional Services", delta: { industry: 'Professional' } }
            ]
        }
    ];

    const domainSelectionQuestion = {
        text: "What is your primary creative domain?",
        options: [
            { text: "Writing Code & Engineering.", delta: { domain: 'code' } },
            { text: "Visual Arts, Design & Media.", delta: { domain: 'art' } },
            { text: "I do everything (Generalist/Polymath).", delta: { domain: 'both' } },
            { text: "None of the above / Other.", delta: { domain: 'none' } }
        ]
    };

    const codeQuestions = [
        {
            text: "If all AI tools vanished tomorrow, could you still build software?",
            options: [
                { text: "No. I rely 100% on the AI generation.", delta: { tech: 0, vibe: 5 } },
                { text: "I could struggle through, but I need Google.", delta: { tech: 3, vibe: 2 } },
                { text: "Yes, but it would be tedious and slow.", delta: { tech: 7, vibe: 0 } },
                { text: "I don't know / Not applicable to my work.", delta: { tech: 0 } }
            ]
        },
        {
            text: "How do you interact with the code the AI generates?",
            options: [
                { text: "I copy-paste it. If it works, it works.", delta: { tech: 0, vibe: 5, sentiment: 2 } },
                { text: "I read it to understand, then paste.", delta: { tech: 4, vibe: 2, sentiment: 1 } },
                { text: "I treat it as a draft and heavily refactor it.", delta: { tech: 8, vibe: -2, sentiment: 0 } },
                { text: "I don't know / I don't use AI for code.", delta: { tech: 0 } }
            ]
        },
        {
            text: "What is your stance on 'Vibe Coding'?",
            options: [
                { text: "It's the future. Syntax is for computers.", delta: { vibe: 5, sentiment: 5, tech: -1 } },
                { text: "Great for prototypes, bad for production.", delta: { vibe: 2, sentiment: 1, tech: 5 } },
                { text: "It creates dangerous spaghetti code.", delta: { vibe: -5, sentiment: -5, tech: 8 } },
                { text: "I don't know what Vibe Coding is.", delta: { vibe: 0, sentiment: 0 } }
            ]
        },
        {
            text: "When you see a developer writing code manually...",
            options: [
                { text: "I admire their craftsmanship.", delta: { sentiment: -1, tech: 2 } },
                { text: "I think they are wasting their time.", delta: { sentiment: 3, vibe: 3 } },
                { text: "I feel sorry for them. They are obsolete.", delta: { sentiment: 5, vibe: 5 } },
                { text: "I don't know / No strong opinion.", delta: { sentiment: 0 } }
            ]
        }
    ];

    const artQuestions = [
        {
            text: "Can you draw, paint, or design without a computer?",
            options: [
                { text: "No, I can't draw a stick figure.", delta: { art: 0, vibe: 5 } },
                { text: "I have basic composition skills.", delta: { art: 3, vibe: 2 } },
                { text: "Yes, I am a trained traditional artist.", delta: { art: 10, vibe: -2 } },
                { text: "I don't know / Unsure of my skill level.", delta: { art: 0 } }
            ]
        },
        {
            text: "How do you feel about AI art models (Midjourney, Flux)?",
            options: [
                { text: "It is theft. Pure and simple.", delta: { sentiment: -5, vibe: -5, art: 5 } },
                { text: "It's a useful tool for moodboarding.", delta: { sentiment: 0, vibe: 2, art: 3 } },
                { text: "It allows me to visualize things I never could before.", delta: { sentiment: 5, vibe: 8, art: -2 } },
                { text: "I don't know what these models are.", delta: { sentiment: 0 } }
            ]
        },
        {
            text: "When you see a 'Prompt Artist' claiming to be a Creator...",
            options: [
                { text: "It insults the years I spent learning anatomy.", delta: { art: 8, sentiment: -5, vibe: -5 } },
                { text: "If the output is beautiful, they are an artist.", delta: { art: 0, sentiment: 5, vibe: 5 } },
                { text: "Curating is a form of creation.", delta: { art: 2, sentiment: 2, vibe: 3 } },
                { text: "I don't know / I don't care about the label.", delta: { art: 0 } }
            ]
        },
        {
            text: "Does an AI generated image have a 'soul'?",
            options: [
                { text: "Never. It is just math.", delta: { sentiment: -3, vibe: -2 } },
                { text: "If it makes me feel something, yes.", delta: { sentiment: 3, vibe: 5 } },
                { text: "The soul comes from the prompter's intent.", delta: { sentiment: 5, vibe: 8 } },
                { text: "It depends entirely on the viewer's bias.", delta: { sentiment: 0, vibe: 0 } }
            ]
        }
    ];

    const researchQuestions = [
        {
            text: "Average hours per week you interact with AI tools?",
            options: [
                { text: "0 hours (Pure Manual)", delta: { usage_hours: 0 } },
                { text: "1-5 hours (Occasional)", delta: { usage_hours: 3 } },
                { text: "5-20 hours (Heavy)", delta: { usage_hours: 12 } },
                { text: "20+ hours (Infinite Loop)", delta: { usage_hours: 30 } }
            ]
        },
        {
            text: "Could you complete your most recent project without AI tools?",
            options: [
                { text: "Yes, I don't need them.", delta: { atrophy: 0, tech: 2, art: 2 } },
                { text: "Yes, but it would take 3x longer.", delta: { atrophy: 3, efficiency: -5 } },
                { text: "No, I'd get stuck on technical/creative hurdles.", delta: { atrophy: 7, vibe: 3 } },
                { text: "I don't know / I haven't tried working without it lately.", delta: { atrophy: 0 } }
            ]
        },
        {
            text: "How do you feel about your role's future in 3 years?",
            options: [
                { text: "Excited & Empowered", delta: { anxiety: -5, sentiment: 5 } },
                { text: "Cautious / Neutral", delta: { anxiety: 0, sentiment: 1 } },
                { text: "Anxious / Threatened", delta: { anxiety: 5, sentiment: -3 } },
                { text: "I don't know / I cannot predict 3 years ahead.", delta: { anxiety: 0 } }
            ]
        },
        {
            text: "Does it matter to you if the AI model is Open Source/Weights (e.g., Llama, Flux) vs. Proprietary (e.g., OpenAI, Midjourney)?",
            options: [
                { text: "Extremely. I only trust open systems.", delta: { oss_preference: 'Critical', sentiment: 1 } },
                { text: "It's a preference, but I use what works.", delta: { oss_preference: 'Preference', sentiment: 0 } },
                { text: "No. I just want the best output.", delta: { oss_preference: 'Irrelevant', sentiment: 0 } },
                { text: "I don't know what these terms mean.", delta: { oss_preference: 'Unaware', sentiment: 0 } }
            ]
        }
    ];

    const politicalQuestions = [
        {
            text: "Who should own the rights to AI-generated content trained on public data?",
            options: [
                { text: "The individual creators (Strict Copyright)", delta: { ethics: 10, resilience: 3, sentiment: -2 } },
                { text: "Shared between AI owners and creators.", delta: { ethics: 5, sentiment: 1 } },
                { text: "Public domain / Open progress.", delta: { ethics: -5, sentiment: 3 } },
                { text: "I don't know / I don't have an opinion on copyright.", delta: { ethics: 0 } }
            ]
        },
        {
            text: "How much of your professional identity resides in your 'Manual Craft'?",
            options: [
                { text: "It's 100% of who I am. AI is a hollow threat.", delta: { resilience: 10, tech: 2, art: 2 } },
                { text: "It's important, but I'm an efficient hybrid.", delta: { resilience: 5, efficiency: 2 } },
                { text: "I am a curator now. The craft is in the vision.", delta: { resilience: -5, vibe: 5 } },
                { text: "I don't know / I don't associate my identity with craft.", delta: { resilience: 0 } }
            ]
        },
        {
            text: "What is the biggest risk of the AI 'Gold Rush'?",
            options: [
                { text: "Loss of human sovereignty and autonomy.", delta: { ethics: 8, resilience: 5, anxiety: 5 } },
                { text: "Mass unemployment and economic collapse.", delta: { ethics: 2, anxiety: 8 } },
                { text: "The acceleration of bias and misinformation.", delta: { ethics: 5, anxiety: 3 } },
                { text: "I don't know / I haven't thought about the risks.", delta: { ethics: 0, anxiety: 0 } }
            ]
        }
    ];


    const contentQuestions = [
        {
            text: "When you discover a beautiful image or helpful code was AI-generated, how does your perception of its 'Value' change?",
            options: [
                { text: "It becomes worthless; a mere commodity.", delta: { content_sentiment: -10, sentiment: -2 } },
                { text: "I feel slightly disappointed, but it's still useful.", delta: { content_sentiment: -3, sentiment: -1 } },
                { text: "Its value is the same. The result is what matters.", delta: { content_sentiment: 5, sentiment: 2 } },
                { text: "It's more impressive that a machine did it.", delta: { content_sentiment: 10, sentiment: 5 } }
            ]
        },
        {
            text: "Do you believe AI-generated content can ever have a 'Soul'?",
            options: [
                { text: "No. Soul requires human struggle.", delta: { content_sentiment: -10, ethics: 5 } },
                { text: "Maybe, if the prompter's intent is deep.", delta: { content_sentiment: 3, vibe: 2 } },
                { text: "Yes. Aesthetics are independent of the creator.", delta: { content_sentiment: 8, sentiment: 3 } },
                { text: "I don't know what 'Soul' means in this context.", delta: { content_sentiment: 0 } }
            ]
        }
    ];

    const psychologyQuestions = [
        {
            text: "Which type of mastery do you believe will remain valuable in 50 years?",
            options: [
                { text: "Lindy Skills (Logic, Composition, Theory)", delta: { lindy: 10, resilience: 5 } },
                { text: "Transient Skills (Software, Syntax, Tooling)", delta: { lindy: -5, tech: 5, art: 5 } },
                { text: "AI Orchestration (Prompting, Curation)", delta: { lindy: -2, vibe: 5 } },
                { text: "I don't know what these skill types mean.", delta: { lindy: 0 } }
            ]
        },
        {
            text: "How has your 'Satisfaction' changed since using AI for work?",
            options: [
                { text: "The 'Macro-Wins' of fast output are rewarding.", delta: { flow: -5, efficiency: 5 } },
                { text: "I miss the 'Micro-Wins' of manual problem-solving.", delta: { flow: 10, resilience: 3 } },
                { text: "I feel less connected to my work's 'Process'.", delta: { flow: 5, sentiment: -2 } },
                { text: "I don't know / My satisfaction isn't tied to AI usage.", delta: { flow: 0 } }
            ]
        },
        {
            text: "What is your primary reason for either using or avoiding AI?",
            options: [
                { text: "Intentional Holdout: I want to keep my skills sharp.", delta: { lindy: 10, resilience: 10, domain: 'holdout' } },
                { text: "Efficiency: I need to output at scale.", delta: { efficiency: 10, vibe: 5 } },
                { text: "Curiosity: I love seeing what's possible.", delta: { sentiment: 5, vibe: 3 } },
                { text: "I don't know / No specific reason.", delta: { sentiment: 0 } }
            ]
        }
    ];

    startBtn.addEventListener('click', () => {
        introCard.style.opacity = '0';
        introCard.style.transform = 'translateY(20px)';

        setTimeout(() => {
            introCard.classList.add('hidden');
            questionContainer.classList.remove('hidden');
            // Start with demographics
            flowStep = 'demographics';
            currentFlowIndex = 0;
            renderQuestion(demographicQuestions[0]);
        }, 500);
    });

    function renderQuestion(questionData) {
        if (!questionData) {
            // If called without data, use the index from active map
            questionData = activeQuestions[currentQuestionIndex];
        }

        if (!questionData) {
            showResult();
            return;
        }

        questionContainer.innerHTML = '';

        const card = document.createElement('div');
        card.className = 'glass-card question-card';

        const number = document.createElement('div');
        number.className = 'question-number';
        // Improved progress tracking
        if (flowStep === 'demographics') {
            number.innerText = `Setup ${currentFlowIndex + 1} / ${demographicQuestions.length}`;
        } else if (flowStep === 'domain') {
            number.innerText = `Selection`;
        } else if (flowStep === 'main') {
            number.innerText = `Core ${currentFlowIndex + 1} / ${activeQuestions.length}`;
        } else if (flowStep === 'research') {
            number.innerText = `Deep Dive ${currentFlowIndex + 1} / ${researchQuestions.length}`;
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

        // Flow Management
        if (flowStep === 'demographics') {
            currentFlowIndex++;
            if (currentFlowIndex >= demographicQuestions.length) {
                flowStep = 'domain';
                renderQuestion(domainSelectionQuestion);
            } else {
                renderQuestion(demographicQuestions[currentFlowIndex]);
            }
        } else if (flowStep === 'domain') {
            // Domain selection triggers main questions
            if (state.domain === 'code') {
                activeQuestions = codeQuestions;
                flowStep = 'main';
                currentFlowIndex = 0;
                renderQuestion(activeQuestions[0]);
            } else if (state.domain === 'art') {
                activeQuestions = artQuestions;
                flowStep = 'main';
                currentFlowIndex = 0;
                renderQuestion(activeQuestions[0]);
            } else if (state.domain === 'both') {
                activeQuestions = [...codeQuestions, ...artQuestions];
                flowStep = 'main';
                currentFlowIndex = 0;
                renderQuestion(activeQuestions[0]);
            } else {
                // 'none' selected: skip main flow and go to research
                flowStep = 'research';
                currentFlowIndex = 0;
                renderQuestion(researchQuestions[0]);
            }
        } else if (flowStep === 'main') {
            currentFlowIndex++;
            if (currentFlowIndex >= activeQuestions.length) {
                flowStep = 'research';
                currentFlowIndex = 0;
                renderQuestion(researchQuestions[0]);
            } else {
                renderQuestion(activeQuestions[currentFlowIndex]);
            }
        } else if (flowStep === 'research') {
            currentFlowIndex++;
            if (currentFlowIndex >= researchQuestions.length) {
                flowStep = 'political';
                currentFlowIndex = 0;
                renderQuestion(politicalQuestions[0]);
            } else {
                renderQuestion(researchQuestions[currentFlowIndex]);
            }
        } else if (flowStep === 'political') {
            currentFlowIndex++;
            if (currentFlowIndex >= politicalQuestions.length) {
                flowStep = 'content';
                currentFlowIndex = 0;
                renderQuestion(contentQuestions[0]);
            } else {
                renderQuestion(politicalQuestions[currentFlowIndex]);
            }
        } else if (flowStep === 'content') {
            currentFlowIndex++;
            if (currentFlowIndex >= contentQuestions.length) {
                flowStep = 'psychology';
                currentFlowIndex = 0;
                renderQuestion(psychologyQuestions[0]);
            } else {
                renderQuestion(contentQuestions[currentFlowIndex]);
            }
        } else if (flowStep === 'psychology') {
            currentFlowIndex++;
            if (currentFlowIndex >= psychologyQuestions.length) {
                showResult();
            } else {
                renderQuestion(psychologyQuestions[currentFlowIndex]);
            }
        }
    }

    function showResult() {
        questionContainer.innerHTML = '';

        let archetype = "";
        let subtext = "";
        const isCoder = state.domain === 'code' || state.domain === 'both';
        const isArtist = state.domain === 'art' || state.domain === 'both';

        // --- CLASSIFICATION LOGIC ---

        // 1. The Skeptical Traditionalist (High Skill, Low Vibe, Negative Sentiment)
        if ((state.tech > 8 || state.art > 8) && state.sentiment < -2) {
            archetype = isCoder ? "The Code Artisan (Purist)" : "The Ink-Stained Rebel";
            if (state.domain === 'both') archetype = "The Renaissance Traditionalist";
            subtext = "You are the resistance. You believe that effort, pain, and human intention are what give work value. You view AI not just as a cheat, but as a theft of the human spirit.";
        }
        // 2. The 10x Cyborg (High Skill, High Vibe)
        else if ((state.tech > 5 || state.art > 5) && state.vibe > 5) {
            archetype = isCoder ? "The Augmented Engineer (10x)" : "The Synth-Grapher";
            if (state.domain === 'both') archetype = "The Omni-Creator";
            subtext = "You are the evolution. You have the foundational skills to judge quality, but you use the machine to skip the toil. You move faster than should be possible, conducting the AI like an orchestra.";
        }
        // 3. The Pure Prompter (Low Skill, High Vibe)
        else if ((state.tech < 5 && state.art < 5) && state.vibe > 5) {
            archetype = isCoder ? "The Pure Vibe Coder" : "The Dreamweaver";
            if (state.domain === 'both') archetype = "The Idea Generator";
            subtext = "You are the vision without the hands. You don't care how the sausage is made, as long as it tastes good. You have democratized creation for yourself, breaking down barriers that stood for decades.";
        }
        // 4. The Pragmatist (Mid Skill, Mid Sentiment)
        else {
            archetype = "The Cautious Adapter";
            subtext = "You are taking it one day at a time. You see the utility, but you aren't drinking the Kool-Aid. You use it when it makes sense, but you aren't letting your skills atrophy just yet.";
        }

        // --- SUBMIT DATA SAFELY ---
        submitData(archetype);

        // --- GAMIFICATION: CALIBRATED SCORE ---
        // We weigh "Foundational Mastery", "AI Augmentation", and "Manual Resilience".
        const baseSkill = Math.max(state.tech, state.art);
        const augmentation = (state.vibe * 1.0) + (state.sentiment * 0.2);
        const resilience = (state.resilience * 1.2) + (state.lindy * 0.5);

        // Score logic: 
        // 1. Foundation is 40%
        // 2. Augmentation (Speed/Leverage) is 30%
        // 3. Resilience (Sovereignty) is 30%
        let futureProofScore = Math.round(((baseSkill * 4) + (augmentation * 3) + (resilience * 3) + 15) / 1.2);

        // The "Sovereign Cap": If you have high skill but ZERO augmentation, 
        // you are resilient but potentially too slow for the future market.
        if (augmentation < 2 && futureProofScore > 88) {
            futureProofScore = 88; // Cap for the purely manual path
        }

        futureProofScore = Math.max(5, Math.min(97, futureProofScore));

        let rank = "B-CLASS ADAPTER";
        // New Ranks that reward cautious traditionalists
        if (state.resilience > 15 && state.vibe < 5) rank = "S-CLASS SOVEREIGN (Sentinel)";
        else if (futureProofScore > 85) rank = "S-CLASS ORCHESTRATOR";
        else if (futureProofScore > 70) rank = "A-CLASS AUGMENTED";
        else if (state.ethics > 15) rank = "A-CLASS ETHICIST (Guardian)";

        const card = document.createElement('div');
        card.className = 'glass-card result-card';

        const badge = document.createElement('div');
        badge.className = 'result-badge';
        badge.innerHTML = `
            <div class="rank-text">${rank}</div>
            <div class="score-circle">
                <span class="score-value">${futureProofScore}%</span>
                <span class="score-label">Future Proof</span>
            </div>
            <h1>Archetype: <span class="highlight">${archetype}</span></h1>
            <p>${subtext}</p>
        `;

        const shareSection = document.createElement('div');
        shareSection.className = 'share-section';

        const shareText = `🔍 I just completed the 'Human-AI Synergy' research assessment.
🚀 My Archetype: ${archetype} (${futureProofScore}% Future-Proof).

This study explores how Generative AI is redefining professional identity and craftsmanship. Discover your archetype and join the empirical research here:`;
        const shareUrl = 'https://cyberhirsch.github.io/AIJobs/';

        const copyBtn = document.createElement('button');
        copyBtn.className = 'share-btn primary';
        copyBtn.innerHTML = '🔗 Copy Challenge Link';
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(shareUrl);
            copyBtn.innerText = '✅ Link Copied!';
            setTimeout(() => copyBtn.innerHTML = '🔗 Copy Challenge Link', 2000);
        };

        const tweetBtn = document.createElement('button');
        tweetBtn.className = 'share-btn';
        tweetBtn.innerHTML = '🐦 X';
        tweetBtn.onclick = () => {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`);
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
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`);
        };

        shareSection.appendChild(copyBtn);
        shareSection.appendChild(tweetBtn);
        shareSection.appendChild(linkedInBtn);
        shareSection.appendChild(waBtn);

        const stats = document.createElement('div');
        stats.style.marginTop = "20px";
        stats.style.color = "#aaa";
        // Show relevant stats based on domain
        let statText = `Vibe: ${state.vibe} | Sentiment: ${state.sentiment}`;
        if (state.domain !== 'art') statText = `Tech: ${state.tech} | ` + statText;
        if (state.domain !== 'code') statText = `Art: ${state.art} | ` + statText;

        stats.innerHTML = `<small>${statText}</small>`;

        const restartBtn = document.createElement('button');
        restartBtn.className = 'primary-btn';
        restartBtn.style.marginTop = '20px';
        restartBtn.innerText = 'Restart Discovery';
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
            flow_score: state.flow
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
