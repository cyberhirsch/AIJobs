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
        domain: '',   // 'code', 'art', 'both'
        tech: 0,      // Code technicality
        art: 0,       // Artistic/Traditional skill
        vibe: 0,      // Reliability on AI
        sentiment: 0, // Optimism vs Pessimism
        efficiency: 0
    };

    let activeQuestions = [];

    // --- QUESTION BANK ---

    const domainSelectionQuestion = {
        text: "What is your primary creative domain?",
        options: [
            { text: "Writing Code & Engineering.", delta: { domain: 'code' } },
            { text: "Visual Arts, Design & Media.", delta: { domain: 'art' } },
            { text: "I do everything (Generalist/Polymath).", delta: { domain: 'both' } }
        ]
    };

    const codeQuestions = [
        {
            text: "If all AI tools vanished tomorrow, could you still build software?",
            options: [
                { text: "No. I rely 100% on the AI generation.", delta: { tech: 0, vibe: 5 } },
                { text: "I could struggle through, but I need Google.", delta: { tech: 3, vibe: 2 } },
                { text: "Yes, but it would be tedious and slow.", delta: { tech: 7, vibe: 0 } },
                { text: "Yes. I know the stack inside out.", delta: { tech: 10, vibe: -2 } }
            ]
        },
        {
            text: "How do you interact with the code the AI generates?",
            options: [
                { text: "I copy-paste it. If it works, it works.", delta: { tech: 0, vibe: 5, sentiment: 2 } },
                { text: "I read it to understand, then paste.", delta: { tech: 4, vibe: 2, sentiment: 1 } },
                { text: "I treat it as a draft and heavily refactor it.", delta: { tech: 8, vibe: -2, sentiment: 0 } },
                { text: "I rarely accept it without changes. It's usually buggy.", delta: { tech: 9, vibe: -4, sentiment: -2 } }
            ]
        },
        {
            text: "What is your stance on 'Vibe Coding'?",
            options: [
                { text: "It's the future. Syntax is for computers.", delta: { vibe: 5, sentiment: 5, tech: -1 } },
                { text: "Great for prototypes, bad for production.", delta: { vibe: 2, sentiment: 1, tech: 5 } },
                { text: "It creates dangerous spaghetti code.", delta: { vibe: -5, sentiment: -5, tech: 8 } }
            ]
        },
        {
            text: "When you see a developer writing code manually...",
            options: [
                { text: "I admire their craftsmanship.", delta: { sentiment: -1, tech: 2 } },
                { text: "I think they are wasting their time.", delta: { sentiment: 3, vibe: 3 } },
                { text: "I feel sorry for them. They are obsolete.", delta: { sentiment: 5, vibe: 5 } }
            ]
        }
    ];

    const artQuestions = [
        {
            text: "Can you draw, paint, or design without a computer?",
            options: [
                { text: "No, I can't draw a stick figure.", delta: { art: 0, vibe: 5 } },
                { text: "I have basic composition skills.", delta: { art: 3, vibe: 2 } },
                { text: "Yes, I am a trained traditional artist.", delta: { art: 10, vibe: -2 } }
            ]
        },
        {
            text: "How do you feel about AI art models (Midjourney, Flux)?",
            options: [
                { text: "It is theft. Pure and simple.", delta: { sentiment: -5, vibe: -5, art: 5 } },
                { text: "It's a useful tool for moodboarding.", delta: { sentiment: 0, vibe: 2, art: 3 } },
                { text: "It allows me to visualize things I never could before.", delta: { sentiment: 5, vibe: 8, art: -2 } },
                { text: "It IS art. I am a prompt artist.", delta: { sentiment: 5, vibe: 10, art: 0 } }
            ]
        },
        {
            text: "When you see a 'Prompt Artist' claiming to be a Creator...",
            options: [
                { text: "It insults the years I spent learning anatomy.", delta: { art: 8, sentiment: -5, vibe: -5 } },
                { text: "If the output is beautiful, they are an artist.", delta: { art: 0, sentiment: 5, vibe: 5 } },
                { text: "Curating is a form of creation.", delta: { art: 2, sentiment: 2, vibe: 3 } }
            ]
        },
        {
            text: "Does an AI generated image have a 'soul'?",
            options: [
                { text: "Never. It is just math.", delta: { sentiment: -3, vibe: -2 } },
                { text: "If it makes me feel something, yes.", delta: { sentiment: 3, vibe: 5 } },
                { text: "The soul comes from the prompter's intent.", delta: { sentiment: 5, vibe: 8 } }
            ]
        }
    ];

    startBtn.addEventListener('click', () => {
        introCard.style.opacity = '0';
        introCard.style.transform = 'translateY(20px)';

        setTimeout(() => {
            introCard.classList.add('hidden');
            questionContainer.classList.remove('hidden');
            // Start with setting the domain
            renderQuestion(domainSelectionQuestion);
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
        // Only show number if we are in the main flow
        if (state.domain) {
            number.innerText = `Question ${currentQuestionIndex + 1} / ${activeQuestions.length}`;
        } else {
            number.innerText = "Setup";
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
        // Handle Domain Selection Special Case
        if (delta.domain) {
            state.domain = delta.domain;
            if (state.domain === 'code') activeQuestions = codeQuestions;
            else if (state.domain === 'art') activeQuestions = artQuestions;
            else activeQuestions = [...codeQuestions, ...artQuestions]; // Both

            // Reset index and start main loop
            currentQuestionIndex = 0;
            renderQuestion(activeQuestions[0]);
            return;
        }

        // Normal Update
        if (delta.tech) state.tech += delta.tech;
        if (delta.art) state.art += delta.art;
        if (delta.vibe) state.vibe += delta.vibe;
        if (delta.sentiment) state.sentiment += delta.sentiment;
        if (delta.efficiency) state.efficiency += delta.efficiency;

        currentQuestionIndex++;
        renderQuestion(activeQuestions[currentQuestionIndex]);
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

        const card = document.createElement('div');
        card.className = 'glass-card result-card';

        const title = document.createElement('h1');
        title.innerHTML = `Archetype: <span class="highlight">${archetype}</span>`;

        const desc = document.createElement('p');
        desc.innerText = subtext;
        desc.style.fontSize = '1.2rem';

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
        restartBtn.innerText = 'Restart Archetype Discovery';
        restartBtn.addEventListener('click', () => location.reload());

        card.appendChild(title);
        card.appendChild(desc);
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
            sentiment_score: state.sentiment
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
