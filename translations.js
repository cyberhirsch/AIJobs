const translations = {
    en: {
        hero_title: 'Defining the <span class="highlight">Human Element</span>',
        hero_subtitle: 'In the age of Artificial Intelligence, where do you stand?',
        intro_title: 'The Survey',
        intro_text: 'We are creating boxes. Not to confine you, but to understand the shape of our new reality. Tell us about your work, and we\'ll tell you who you are.',
        start_btn: 'Discover Your Archetype',
        setup_step: 'Setup',
        selection_step: 'Selection',
        core_step: 'Core',
        research_step: 'Research',
        political_step: 'Ethics',
        content_step: 'Content',
        deep_dive_step: 'Psychology',
        future_proof_label: 'Future Proof',
        rank_label: 'RANK',
        archetype_header: 'Archetype',
        share_challenge: '🔗 Copy Challenge Link',
        link_copied: '✅ Link Copied!',
        restart_btn: 'Restart Discovery',
        footer_copyright: '© 2026 S.Hirsch Media University',
        consent_text: 'I agree that my anonymized responses may be used for research purposes.',
        privacy_link: 'Privacy Policy',
        imprint_link: 'Imprint',
        privacy_content: '<h2>Privacy Policy</h2><p>This research project acts on a strictly anonymous basis. We do NOT collect names, email addresses, or IP addresses that could identify you.</p><p>We collect your survey responses, industry experience, and professional domain for empirical research purposes only.</p><p>The data is securely stored on a private server (PocketBase). By participating, you support academic research on AI and professional identity.</p>',
        imprint_content: '<h2>Imprint</h2><p><strong>Media University of Applied Sciences</strong><br>Staatlich anerkannt durch die Senatsverwaltung Berlin.</p><p><strong>Hochschulträgerin:</strong><br>Media University GmbH<br>Ackerstraße 76, 13355 Berlin</p><p><strong>Represented by:</strong> Alice Blezinger</p><p><strong>Registration:</strong> HRB 116949 B (Amtsgericht Charlottenburg)</p><p><strong>Contact:</strong> info@media-university.de<br>Tel: +49 (0)30/4677 693 – 00</p><p><strong>Responsible for content:</strong> Sebastian Hirsch</p>',
        stat_vibe: 'Vibe',
        stat_sentiment: 'Sentiment',
        stat_tech: 'Tech',
        stat_art: 'Art',
        ranks: {
            "S-CLASS SOVEREIGN": "S-CLASS SOVEREIGN (Sentinel)",
            "S-CLASS ORCHESTRATOR": "S-CLASS ORCHESTRATOR",
            "A-CLASS AUGMENTED": "A-CLASS AUGMENTED",
            "A-CLASS ETHICIST": "A-CLASS ETHICIST",
            "B-CLASS ADAPTER": "B-CLASS ADAPTER"
        },
        share_text: "🔍 I just completed the 'Human-AI Synergy' research assessment.\n🚀 My Archetype: {archetype} ({score}% Future-Proof).\n\nThis study explores how Generative AI is redefining professional identity and craftsmanship. Discover your archetype and join the empirical research here:",
        archetypes: {
            "The Code Artisan (Purist)": "The Code Artisan (Purist)",
            "The Ink-Stained Rebel": "The Ink-Stained Rebel",
            "The Renaissance Traditionalist": "The Renaissance Traditionalist",
            "The Augmented Engineer (10x)": "The Augmented Engineer (10x)",
            "The Synth-Grapher": "The Synth-Grapher",
            "The Omni-Creator": "The Omni-Creator",
            "The Pure Vibe Coder": "The Pure Vibe Coder",
            "The Dreamweaver": "The Dreamweaver",
            "The Idea Generator": "The Idea Generator",
            "The Cautious Adapter": "The Cautious Adapter"
        },
        subtexts: {
            purist: "You are the resistance. You believe that effort, pain, and human intention are what give work value. You view AI not just as a cheat, but as a theft of the human spirit.",
            augmented: "You are the evolution. You have the foundational skills to judge quality, but you use the machine to skip the toil. You move faster than should be possible, conducting the AI like an orchestra.",
            prompter: "You are the vision without the hands. You don't care how the sausage is made, as long as it tastes good. You have democratized creation for yourself, breaking down barriers that stood for decades.",
            cautious: "You are taking it one day at a time. You see the utility, but you aren't drinking the Kool-Aid. You use it when it makes sense, but you aren't letting your skills atrophy just yet."
        },
        questions: {
            demographics: [
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
            ],
            domainSelection: {
                text: "What is your primary creative domain?",
                options: [
                    { text: "Writing Code & Engineering.", delta: { domain: 'code' } },
                    { text: "Visual Arts, Design & Media.", delta: { domain: 'art' } },
                    { text: "I do everything (Generalist/Polymath).", delta: { domain: 'both' } },
                    { text: "None of the above / Other.", delta: { domain: 'none' } }
                ]
            },
            codeQuestions: [
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
            ],
            artQuestions: [
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
            ],
            research: [
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
            ],
            political: [
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
                },
                {
                    text: "How should governments approach the regulation of AI development?",
                    options: [
                        { text: "Minimal regulation: Let innovation thrive at all costs.", delta: { efficiency: 5, sentiment: 2 } },
                        { text: "Moderate regulation: Protect workers but encourage progress.", delta: { ethics: 5, resilience: 2 } },
                        { text: "Strict regulation: Slow down development until ethics are solved.", delta: { ethics: 10, anxiety: 5, sentiment: -5 } },
                        { text: "I don't know / Regulation is not the answer.", delta: { sentiment: 0 } }
                    ]
                }
            ],
            content: [
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
            ],
            psychology: [
                {
                    text: "Which type of mastery do you believe will remain most valuable in 50 years?",
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
            ]
        }
    },
    de: {
        hero_title: 'Das <span class="highlight">menschliche Element</span> definieren',
        hero_subtitle: 'Wo stehen Sie im Zeitalter der künstlichen Intelligenz?',
        intro_title: 'Die Umfrage',
        intro_text: 'Wir erschaffen Kategorien. Nicht um Sie einzuschränken, sondern um die Form unserer neuen Realität zu verstehen. Erzählen Sie uns von Ihrer Arbeit, und wir sagen Ihnen, wer Sie sind.',
        start_btn: 'Entdecken Sie Ihren Archetyp',
        setup_step: 'Einrichtung',
        selection_step: 'Auswahl',
        core_step: 'Kern',
        research_step: 'Forschung',
        political_step: 'Ethik',
        content_step: 'Inhalte',
        deep_dive_step: 'Psychologie',
        future_proof_label: 'Zukunftssicher',
        rank_label: 'RANG',
        archetype_header: 'Archetyp',
        share_challenge: '🔗 Link kopieren',
        link_copied: '✅ Link kopiert!',
        restart_btn: 'Entdeckung neu starten',
        footer_copyright: '© 2026 S.Hirsch Media University',
        consent_text: 'Ich stimme zu, dass meine anonymisierten Antworten für Forschungszwecke verwendet werden dürfen.',
        privacy_link: 'Datenschutz',
        imprint_link: 'Impressum',
        privacy_content: '<h2>Datenschutzerklärung</h2><p>Dieses Forschungsprojekt arbeitet auf streng anonymer Basis. Wir erheben KEINE Namen, E-Mail-Adressen oder IP-Adressen, die Sie identifizieren könnten.</p><p>Wir erfassen Ihre Antworten, Branchenerfahrung und Ihren Fachbereich ausschließlich zu empirischen Forschungszwecken.</p><p>Die Daten werden sicher auf einem privaten Server (PocketBase) gespeichert. Mit Ihrer Teilnahme unterstützen Sie die akademische Forschung zu KI und beruflicher Identität.</p>',
        imprint_content: '<h2>Impressum</h2><p><strong>Media University of Applied Sciences</strong><br>Staatlich anerkannt durch die Senatsverwaltung Berlin.</p><p><strong>Hochschulträgerin:</strong><br>Media University GmbH<br>Ackerstraße 76, 13355 Berlin</p><p><strong>Vertreten durch:</strong> Alice Blezinger</p><p><strong>Handelsregister:</strong> HRB 116949 B (Amtsgericht Charlottenburg)</p><p><strong>Kontakt:</strong> info@media-university.de<br>Tel: +49 (0)30/4677 693 – 00</p><p><strong>Verantwortlich für den Inhalt:</strong> Sebastian Hirsch</p>',
        stat_vibe: 'Vibe',
        stat_sentiment: 'Sentiment',
        stat_tech: 'Tech',
        stat_art: 'Kunst',
        ranks: {
            "S-CLASS SOVEREIGN": "S-KLASSE SOUVERÄN",
            "S-CLASS ORCHESTRATOR": "S-KLASSE ORCHESTRATOR",
            "A-CLASS AUGMENTED": "A-KLASSE AUGMENTIERT",
            "A-CLASS ETHICIST": "A-KLASSE ETHIKER",
            "B-CLASS ADAPTER": "B-KLASSE ADAPTER"
        },
        share_text: "🔍 Ich habe gerade das 'Human-AI Synergy' Forschungs-Assessment abgeschlossen.\n🚀 Mein Archetyp: {archetype} ({score}% zukunftssicher).\n\nDiese Studie untersucht, wie generative KI die berufliche Identität und das Handwerk neu definiert. Entdecke deinen Archetyp und nimm hier an der Forschung teil:",
        archetypes: {
            "The Code Artisan (Purist)": "Der Code-Handwerker (Purist)",
            "The Ink-Stained Rebel": "Der tintenverschmierte Rebell",
            "The Renaissance Traditionalist": "Der Renaissance-Traditionalist",
            "The Augmented Engineer (10x)": "Der augmentierte Ingenieur (10x)",
            "The Synth-Grapher": "Der Synth-Grapher",
            "The Omni-Creator": "Der Omni-Schöpfer",
            "The Pure Vibe Coder": "Der pure Vibe-Coder",
            "The Dreamweaver": "Der Traumweber",
            "The Idea Generator": "Der Ideengenerator",
            "The Cautious Adapter": "Der vorsichtige Adapter"
        },
        subtexts: {
            purist: "Sie sind der Widerstand. Sie glauben, dass Anstrengung, Schmerz und menschliche Intention das sind, what Arbeit wertvoll macht. Sie betrachten KI nicht nur als Betrug, sondern als Diebstahl des menschlichen Geistes.",
            augmented: "Sie sind die Evolution. Sie verfügen über die grundlegenden Fähigkeiten, um Qualität zu beurteilen, nutzen aber die Maschine, um sich die Mühe zu ersparen. Sie bewegen sich schneller, als es möglich sein sollte, und dirigieren die KI wie ein Orchester.",
            prompter: "Sie sind die Vision ohne Hände. Es ist Ihnen egal, wie die Wurst gemacht wird, solange sie gut schmeckt. Sie haben die Schöpfung für sich demokratisiert und Barrieren abgebaut, die Jahrzehnte lang bestanden.",
            cautious: "Sie gehen einen Schritt nach dem anderen. Sie sehen den Nutzen, trinken aber nicht das Kool-Aid. Sie nutzen es, wenn es Sinn macht, lassen aber Ihre Fähigkeiten noch nicht verkümmern."
        },
        questions: {
            demographics: [
                {
                    text: "Wie viele Jahre arbeiten Sie schon in Ihrem Bereich?",
                    options: [
                        { text: "Junior (0-2 Jahre)", delta: { years_experience: 1 } },
                        { text: "Intermediate (3-5 Jahre)", delta: { years_experience: 4 } },
                        { text: "Senior (6-10 Jahre)", delta: { years_experience: 8 } },
                        { text: "Veteran (10+ Jahre)", delta: { years_experience: 15 } }
                    ]
                },
                {
                    text: "Was ist Ihre primäre Branche?",
                    options: [
                        { text: "Software / Engineering", delta: { industry: 'Software' } },
                        { text: "Bildende Kunst / Design", delta: { industry: 'Creative' } },
                        { text: "Akademiker / Forschung / Bildung", delta: { industry: 'Academic' } },
                        { text: "Marketing / Professionelle Dienstleistungen", delta: { industry: 'Professional' } }
                    ]
                }
            ],
            domainSelection: {
                text: "Was ist Ihr primärer kreativer Bereich?",
                options: [
                    { text: "Programmierung & Engineering.", delta: { domain: 'code' } },
                    { text: "Bildende Kunst, Design & Medien.", delta: { domain: 'art' } },
                    { text: "Ich mache alles (Generalist/Polymath).", delta: { domain: 'both' } },
                    { text: "Nichts davon / Sonstiges.", delta: { domain: 'none' } }
                ]
            },
            codeQuestions: [
                {
                    text: "Wenn morgen alle KI-Tools verschwinden würden, könnten Sie immer noch Software bauen?",
                    options: [
                        { text: "Nein. Ich verlasse mich zu 100% auf die KI-Generierung.", delta: { tech: 0, vibe: 5 } },
                        { text: "Ich würde mich durchkämpfen, aber ich brauche Google.", delta: { tech: 3, vibe: 2 } },
                        { text: "Ja, aber es wäre mühsam und langsam.", delta: { tech: 7, vibe: 0 } },
                        { text: "Weiß nicht / Nicht anwendbar.", delta: { tech: 0 } }
                    ]
                },
                {
                    text: "Wie interagieren Sie mit dem Code, den die KI generiert?",
                    options: [
                        { text: "Ich kopiere ihn einfach. Wenn es funktioniert, funktioniert es.", delta: { tech: 0, vibe: 5, sentiment: 2 } },
                        { text: "Ich lese ihn, um ihn zu verstehen, und füge ihn dann ein.", delta: { tech: 4, vibe: 2, sentiment: 1 } },
                        { text: "Ich behandle ihn als Entwurf und überarbeite ihn stark.", delta: { tech: 8, vibe: -2, sentiment: 0 } },
                        { text: "Weiß nicht / Ich benutze keine KI für Code.", delta: { tech: 0 } }
                    ]
                },
                {
                    text: "Was ist Ihre Haltung zu 'Vibe Coding'?",
                    options: [
                        { text: "Es ist die Zukunft. Syntax ist für Computer.", delta: { vibe: 5, sentiment: 5, tech: -1 } },
                        { text: "Gut für Prototypen, schlecht für die Produktion.", delta: { vibe: 2, sentiment: 1, tech: 5 } },
                        { text: "Es erzeugt gefährlichen Spaghetti-Code.", delta: { vibe: -5, sentiment: -5, tech: 8 } },
                        { text: "Ich weiß nicht, was Vibe Coding ist.", delta: { vibe: 0, sentiment: 0 } }
                    ]
                },
                {
                    text: "Wenn Sie einen Entwickler sehen, der Code manuell schreibt...",
                    options: [
                        { text: "Ich bewundere sein handwerkliches Können.", delta: { sentiment: -1, tech: 2 } },
                        { text: "Ich denke, er verschwendet seine Zeit.", delta: { sentiment: 3, vibe: 3 } },
                        { text: "Ich bemitleide ihn. Er ist obsolet.", delta: { sentiment: 5, vibe: 5 } },
                        { text: "Weiß nicht / Keine starke Meinung.", delta: { sentiment: 0 } }
                    ]
                }
            ],
            artQuestions: [
                {
                    text: "Können Sie ohne Computer zeichnen, malen oder designen?",
                    options: [
                        { text: "Nein, ich kann nicht mal ein Strichmännchen zeichnen.", delta: { art: 0, vibe: 5 } },
                        { text: "Ich habe grundlegende Kompositionsfähigkeiten.", delta: { art: 3, vibe: 2 } },
                        { text: "Ja, ich bin ein ausgebildeter traditioneller Künstler.", delta: { art: 10, vibe: -2 } },
                        { text: "Weiß nicht / Unsicher über mein Können.", delta: { art: 0 } }
                    ]
                },
                {
                    text: "Wie denken Sie über KI-Kunstmodelle (Midjourney, Flux)?",
                    options: [
                        { text: "Es ist Diebstahl. Ganz einfach.", delta: { sentiment: -5, vibe: -5, art: 5 } },
                        { text: "Es ist ein nützliches Werkzeug für Moodboards.", delta: { sentiment: 0, vibe: 2, art: 3 } },
                        { text: "Es ermöglicht mir, Dinge zu visualisieren, die ich nie zuvor konnte.", delta: { sentiment: 5, vibe: 8, art: -2 } },
                        { text: "Ich weiß nicht, was diese Modelle sind.", delta: { sentiment: 0 } }
                    ]
                },
                {
                    text: "Wenn Sie einen 'Prompt-Künstler' sehen, der behauptet, ein Schöpfer zu sein...",
                    options: [
                        { text: "Es beleidigt die Jahre, die ich mit dem Lernen von Anatomie verbracht habe.", delta: { art: 8, sentiment: -5, vibe: -5 } },
                        { text: "Wenn das Ergebnis schön ist, sind sie Künstler.", delta: { art: 0, sentiment: 5, vibe: 5 } },
                        { text: "Kuratieren ist eine Form der Schöpfung.", delta: { art: 2, sentiment: 2, vibe: 3 } },
                        { text: "Weiß nicht / Das Label ist mir egal.", delta: { art: 0 } }
                    ]
                },
                {
                    text: "Hat ein KI-generiertes Bild eine 'Seele'?",
                    options: [
                        { text: "Niemals. Es ist nur Mathematik.", delta: { sentiment: -3, vibe: -2 } },
                        { text: "Wenn es mich etwas fühlen lässt, ja.", delta: { sentiment: 3, vibe: 5 } },
                        { text: "Die Seele kommt von der Absicht des Prompters.", delta: { sentiment: 5, vibe: 8 } },
                        { text: "Es hängt ganz von den Vorurteilen des Betrachters ab.", delta: { sentiment: 0, vibe: 0 } }
                    ]
                }
            ],
            research: [
                {
                    text: "Wie viele Stunden pro Woche interagieren Sie durchschnittlich mit KI-Tools?",
                    options: [
                        { text: "0 Stunden (Rein manuell)", delta: { usage_hours: 0 } },
                        { text: "1-5 Stunden (Gelegentlich)", delta: { usage_hours: 3 } },
                        { text: "5-20 Stunden (Stark)", delta: { usage_hours: 12 } },
                        { text: "20+ Stunden (Endlosschleife)", delta: { usage_hours: 30 } }
                    ]
                },
                {
                    text: "Könnten Sie Ihr letztes Projekt ohne KI-Werkzeuge abschließen?",
                    options: [
                        { text: "Ja, ich brauche sie nicht.", delta: { atrophy: 0, tech: 2, art: 2 } },
                        { text: "Ja, aber es würde dreimal so lange dauern.", delta: { atrophy: 3, efficiency: -5 } },
                        { text: "Nein, ich würde an technischen/kreativen Hürden hängen bleiben.", delta: { atrophy: 7, vibe: 3 } },
                        { text: "Weiß nicht / Ich habe es in letzter Zeit nicht ohne versucht.", delta: { atrophy: 0 } }
                    ]
                },
                {
                    text: "Wie fühlen Sie sich bezüglich der Zukunft Ihrer Rolle in 3 Jahren?",
                    options: [
                        { text: "Begeistert & Ermächtigt", delta: { anxiety: -5, sentiment: 5 } },
                        { text: "Vorsichtig / Neutral", delta: { anxiety: 0, sentiment: 1 } },
                        { text: "Besorgt / Bedroht", delta: { anxiety: 5, sentiment: -3 } },
                        { text: "Weiß nicht / Ich kann nicht 3 Jahre in die Zukunft blicken.", delta: { anxiety: 0 } }
                    ]
                },
                {
                    text: "Ist es Ihnen wichtig, ob das KI-Modell Open Source ist (z. B. Llama, Flux) vs. proprietär (z. B. OpenAI, Midjourney)?",
                    options: [
                        { text: "Extrem. Ich vertraue nur offenen Systemen.", delta: { oss_preference: 'Critical', sentiment: 1 } },
                        { text: "Es ist eine Vorliebe, aber ich nutze, was funktioniert.", delta: { oss_preference: 'Preference', sentiment: 0 } },
                        { text: "Nein. Ich will nur das beste Ergebnis.", delta: { oss_preference: 'Irrelevant', sentiment: 0 } },
                        { text: "Ich weiß nicht, was diese Begriffe bedeuten.", delta: { oss_preference: 'Unaware', sentiment: 0 } }
                    ]
                }
            ],
            political: [
                {
                    text: "Wer sollte die Rechte an KI-generierten Inhalten besitzen, die auf öffentlichen Daten trainiert wurden?",
                    options: [
                        { text: "Die individuellen Schöpfer (Starkes Urheberrecht)", delta: { ethics: 10, resilience: 3, sentiment: -2 } },
                        { text: "Geteilt zwischen KI-Besitzern und Schöpfern.", delta: { ethics: 5, sentiment: 1 } },
                        { text: "Gemeinfrei / Offener Fortschritt.", delta: { ethics: -5, sentiment: 3 } },
                        { text: "Weiß nicht / Ich habe keine Meinung zum Urheberrecht.", delta: { ethics: 0 } }
                    ]
                },
                {
                    text: "Wie viel Ihrer beruflichen Identität liegt in Ihrem 'manuellen Handwerk'?",
                    options: [
                        { text: "Es ist 100% dessen, was ich bin. KI ist eine hohle Bedrohung.", delta: { resilience: 10, tech: 2, art: 2 } },
                        { text: "Es ist wichtig, aber ich bin ein effizienter Hybrid.", delta: { resilience: 5, efficiency: 2 } },
                        { text: "Ich bin jetzt ein Kurator. Das Handwerk liegt in der Vision.", delta: { resilience: -5, vibe: 5 } },
                        { text: "Weiß nicht / Ich verbinde meine Identität nicht mit Handwerk.", delta: { resilience: 0 } }
                    ]
                },
                {
                    text: "Was ist das größte Risiko des KI-'Goldrausches'?",
                    options: [
                        { text: "Verlust der menschlichen Souveränität und Autonomie.", delta: { ethics: 8, resilience: 5, anxiety: 5 } },
                        { text: "Massenarbeitslosigkeit und wirtschaftlicher Zusammenbruch.", delta: { ethics: 2, anxiety: 8 } },
                        { text: "Die Beschleunigung von Voreingenommenheit und Fehlinformationen.", delta: { ethics: 5, anxiety: 3 } },
                        { text: "Weiß nicht / Ich habe nicht über die Risiken nachgedacht.", delta: { ethics: 0, anxiety: 0 } }
                    ]
                },
                {
                    text: "Wie sollten Regierungen die Regulierung der KI-Entwicklung angehen?",
                    options: [
                        { text: "Minimale Regulierung: Innovation um jeden Preis ermöglichen.", delta: { efficiency: 5, sentiment: 2 } },
                        { text: "Moderate Regulierung: Arbeitnehmer schützen, aber Fortschritt fördern.", delta: { ethics: 5, resilience: 2 } },
                        { text: "Strikte Regulierung: Entwicklung verlangsamen, bis ethische Fragen geklärt sind.", delta: { ethics: 10, anxiety: 5, sentiment: -5 } },
                        { text: "Weiß nicht / Regulierung ist nicht die Lösung.", delta: { sentiment: 0 } }
                    ]
                }
            ],
            content: [
                {
                    text: "Wenn Sie entdecken, dass ein schönes Bild oder hilfreicher Code KI-generiert war, wie ändert sich Ihre Wahrnehmung des 'Werts'?",
                    options: [
                        { text: "Es wird wertlos; eine bloße Ware.", delta: { content_sentiment: -10, sentiment: -2 } },
                        { text: "Ich bin leicht enttäuscht, aber es ist immer noch nützlich.", delta: { content_sentiment: -3, sentiment: -1 } },
                        { text: "Der Wert ist der gleiche. Das Ergebnis zählt.", delta: { content_sentiment: 5, sentiment: 2 } },
                        { text: "Es ist beeindruckender, dass eine Maschine das gemacht hat.", delta: { content_sentiment: 10, sentiment: 5 } }
                    ]
                },
                {
                    text: "Glauben Sie, dass KI-generierte Inhalte jemals eine 'Seele' haben können?",
                    options: [
                        { text: "Nein. Seele erfordert menschlichen Kampf.", delta: { content_sentiment: -10, ethics: 5 } },
                        { text: "Vielleicht, wenn die Absicht des Prompters tief ist.", delta: { content_sentiment: 3, vibe: 2 } },
                        { text: "Ja. Ästhetik ist unabhängig vom Schöpfer.", delta: { content_sentiment: 8, sentiment: 3 } },
                        { text: "Weiß nicht, was 'Seele' in diesem Kontext bedeutet.", delta: { content_sentiment: 0 } }
                    ]
                }
            ],
            psychology: [
                {
                    text: "Welche Art von Meisterschaft wird Ihrer Meinung nach in 50 Jahren am wertvollsten sein?",
                    options: [
                        { text: "Lindy-Fähigkeiten (Logik, Komposition, Theorie)", delta: { lindy: 10, resilience: 5 } },
                        { text: "Vergängliche Fähigkeiten (Software, Syntax, Werkzeuge)", delta: { lindy: -5, tech: 5, art: 5 } },
                        { text: "KI-Orchestrierung (Prompting, Kuratierung)", delta: { lindy: -2, vibe: 5 } },
                        { text: "Weiß nicht, was diese Fähigkeitstypen bedeuten.", delta: { lindy: 0 } }
                    ]
                },
                {
                    text: "Wie hat sich Ihre 'Zufriedenheit' seit der Nutzung von KI für die Arbeit verändert?",
                    options: [
                        { text: "Die 'Makro-Siege' durch schnellen Output sind belohnend.", delta: { flow: -5, efficiency: 5 } },
                        { text: "Ich vermisse die 'Mikro-Siege' des manuellen Problemlösens.", delta: { flow: 10, resilience: 3 } },
                        { text: "Ich fühle mich weniger mit dem 'Prozess' meiner Arbeit verbunden.", delta: { flow: 5, sentiment: -2 } },
                        { text: "Weiß nicht / Meine Zufriedenheit hängt nicht von der KI-Nutzung ab.", delta: { flow: 0 } }
                    ]
                },
                {
                    text: "Was ist Ihr Hauptgrund dafür, KI entweder zu nutzen oder zu meiden?",
                    options: [
                        { text: "Bewusste Verweigerung: Ich will meine Fähigkeiten scharf halten.", delta: { lindy: 10, resilience: 10, domain: 'holdout' } },
                        { text: "Effizienz: Ich muss in großem Maßstab produzieren.", delta: { efficiency: 10, vibe: 5 } },
                        { text: "Neugier: Ich liebe es zu sehen, was möglich ist.", delta: { sentiment: 5, vibe: 3 } },
                        { text: "Weiß nicht / Kein spezifischer Grund.", delta: { sentiment: 0 } }
                    ]
                }
            ]
        }
    },
    es: {
        hero_title: 'Definiendo el <span class="highlight">Elemento Humano</span>',
        hero_subtitle: 'En la era de la Inteligencia Artificial, ¿dónde te sitúas?',
        intro_title: 'La Encuesta',
        intro_text: 'Estamos creando categorías. No para limitarte, sino para entender la forma de nuestra nueva realidad. Cuéntanos sobre tu trabajo y te diremos quién eres.',
        start_btn: 'Descubre tu Arquetipo',
        setup_step: 'Configuración',
        selection_step: 'Selección',
        core_step: 'Núcleo',
        research_step: 'Investigación',
        political_step: 'Ética',
        content_step: 'Contenido',
        deep_dive_step: 'Psicología',
        future_proof_label: 'A prueba de futuro',
        rank_label: 'RANGO',
        archetype_header: 'Arquetipo',
        share_challenge: '🔗 Copiar enlace',
        link_copied: '✅ ¡Enlace copiado!',
        restart_btn: 'Reiniciar descubrimiento',
        footer_copyright: '© 2026 S.Hirsch Media University',
        consent_text: 'Acepto que mis respuestas anónimas se utilicen con fines de investigación.',
        privacy_link: 'Política de Privacidad',
        imprint_link: 'Aviso Legal',
        stat_vibe: 'Vibe',
        stat_sentiment: 'Sentimiento',
        stat_tech: 'Tech',
        stat_art: 'Arte',
        ranks: {
            "S-CLASS SOVEREIGN": "CLASE-S SOBERANO",
            "S-CLASS ORCHESTRATOR": "CLASE-S ORQUESTADOR",
            "A-CLASS AUGMENTED": "CLASE-A AUMENTADO",
            "A-CLASS ETHICIST": "CLASE-A ETICISTA",
            "B-CLASS ADAPTER": "CLASE-B ADAPTADOR"
        },
        share_text: "🔍 Acabo de completar la evaluación de investigación 'Human-AI Synergy'.\n🚀 Mi Arquetipo: {archetype} ({score}% a prueba de futuro).\n\nEste estudio explora cómo la IA generativa está redefiniendo la identidad profesional y la artesanía. Descubre tu arquetipo y únete a la investigación aquí:",
        archetypes: {
            "The Code Artisan (Purist)": "El Artesano del Código (Purista)",
            "The Ink-Stained Rebel": "El Rebelde Manchado de Tinta",
            "The Renaissance Traditionalist": "El Tradicionalista del Renacimiento",
            "The Augmented Engineer (10x)": "El Ingeniero Aumentado (10x)",
            "The Synth-Grapher": "El Sinto-Grafista",
            "The Omni-Creator": "El Omni-Creador",
            "The Pure Vibe Coder": "El Codificador de Pura Vibra",
            "The Dreamweaver": "El Tejedor de Sueños",
            "The Idea Generator": "El Generador de Ideas",
            "The Cautious Adapter": "El Adaptador Cauteloso"
        },
        subtexts: {
            purist: "Eres la resistencia. Crees que el esfuerzo, el dolor y la intención humana son lo que da valor al trabajo. Consideras la IA no solo como una trampa, sino como un robo al espíritu humano.",
            augmented: "Eres la evolución. Tienes las habilidades fundamentales para juzgar la calidad, pero usas la máquina para saltarte el trabajo pesado. Te mueves más rápido de lo que debería ser posible, dirigiendo la IA como una orquesta.",
            prompter: "Eres la visión sin las manos. No te importa cómo se hace la salchicha mientras sepa bien. Has democratizado la creación para ti mismo, derribando barreras que se mantuvieron durante décadas.",
            cautious: "Te lo tomas día a día. Ves la utilidad, pero no te has tragado el discurso completo. La usas cuando tiene sentido, pero no dejas que tus habilidades se atrofien todavía."
        },
        questions: {
            demographics: [
                {
                    text: "¿Cuántos años llevas trabajando en tu campo?",
                    options: [
                        { text: "Junior (0-2 años)", delta: { years_experience: 1 } },
                        { text: "Intermedio (3-5 años)", delta: { years_experience: 4 } },
                        { text: "Sénior (6-10 años)", delta: { years_experience: 8 } },
                        { text: "Veterano (10+ años)", delta: { years_experience: 15 } }
                    ]
                },
                {
                    text: "¿Cuál es tu industria principal?",
                    options: [
                        { text: "Software / Ingeniería", delta: { industry: 'Software' } },
                        { text: "Artes Visuales / Diseño", delta: { industry: 'Creative' } },
                        { text: "Academia / Investigación / Educación", delta: { industry: 'Academic' } },
                        { text: "Marketing / Servicios Profesionales", delta: { industry: 'Professional' } }
                    ]
                }
            ],
            domainSelection: {
                text: "¿Cuál es tu dominio creativo principal?",
                options: [
                    { text: "Programación e Ingeniería.", delta: { domain: 'code' } },
                    { text: "Artes Visuales, Diseño y Medios.", delta: { domain: 'art' } },
                    { text: "Hago de todo (Generalista/Polímata).", delta: { domain: 'both' } },
                    { text: "Ninguno de los anteriores / Otro.", delta: { domain: 'none' } }
                ]
            },
            codeQuestions: [
                {
                    text: "Si todas las herramientas de IA desaparecieran mañana, ¿podrías seguir creando software?",
                    options: [
                        { text: "No. Dependo al 100% de la generación de IA.", delta: { tech: 0, vibe: 5 } },
                        { text: "Me costaría, pero necesito Google.", delta: { tech: 3, vibe: 2 } },
                        { text: "Sí, pero sería tedioso y lento.", delta: { tech: 7, vibe: 0 } },
                        { text: "No lo sé / No aplica a mi trabajo.", delta: { tech: 0 } }
                    ]
                },
                {
                    text: "¿Cómo interactúas con el código que genera la IA?",
                    options: [
                        { text: "Copio y pego. Si funciona, funciona.", delta: { tech: 0, vibe: 5, sentiment: 2 } },
                        { text: "Lo leo para entenderlo y luego lo pego.", delta: { tech: 4, vibe: 2, sentiment: 1 } },
                        { text: "Lo trato como un borrador y lo refactorizo mucho.", delta: { tech: 8, vibe: -2, sentiment: 0 } },
                        { text: "No lo sé / No uso IA para código.", delta: { tech: 0 } }
                    ]
                },
                {
                    text: "¿Cuál es tu postura sobre el 'Vibe Coding'?",
                    options: [
                        { text: "Es el futuro. La sintaxis es para las máquinas.", delta: { vibe: 5, sentiment: 5, tech: -1 } },
                        { text: "Ideal para prototipos, malo para producción.", delta: { vibe: 2, sentiment: 1, tech: 5 } },
                        { text: "Crea un código espagueti peligroso.", delta: { vibe: -5, sentiment: -5, tech: 8 } },
                        { text: "No sé qué es el Vibe Coding.", delta: { vibe: 0, sentiment: 0 } }
                    ]
                },
                {
                    text: "Cuando ves a un desarrollador escribiendo código manualmente...",
                    options: [
                        { text: "Admiro su artesanía.", delta: { sentiment: -1, tech: 2 } },
                        { text: "Pienso que están perdiendo el tiempo.", delta: { sentiment: 3, vibe: 3 } },
                        { text: "Siento lástima por ellos. Están obsoletos.", delta: { sentiment: 5, vibe: 5 } },
                        { text: "No lo sé / No tengo una opinión formada.", delta: { sentiment: 0 } }
                    ]
                }
            ],
            artQuestions: [
                {
                    text: "¿Puedes dibujar, pintar o diseñar sin un ordenador?",
                    options: [
                        { text: "No, no sé ni dibujar un monigote.", delta: { art: 0, vibe: 5 } },
                        { text: "Tengo habilidades básicas de composición.", delta: { art: 3, vibe: 2 } },
                        { text: "Sí, soy un artista tradicional formado.", delta: { art: 10, vibe: -2 } },
                        { text: "No lo sé / No estoy seguro de mi nivel.", delta: { art: 0 } }
                    ]
                },
                {
                    text: "¿Qué opinas de los modelos de arte de IA (Midjourney, Flux)?",
                    options: [
                        { text: "Es un robo. Así de simple.", delta: { sentiment: -5, vibe: -5, art: 5 } },
                        { text: "Es una herramienta útil para hacer moodboards.", delta: { sentiment: 0, vibe: 2, art: 3 } },
                        { text: "Me permite visualizar cosas que nunca antes pude.", delta: { sentiment: 5, vibe: 8, art: -2 } },
                        { text: "No sé qué son estos modelos.", delta: { sentiment: 0 } }
                    ]
                },
                {
                    text: "Cuando ves a un 'Prompt Artist' decir que es un Creador...",
                    options: [
                        { text: "Insulta los años que pasé aprendiendo anatomía.", delta: { art: 8, sentiment: -5, vibe: -5 } },
                        { text: "Si el resultado es hermoso, son artistas.", delta: { art: 0, sentiment: 5, vibe: 5 } },
                        { text: "Curar es una forma de creación.", delta: { art: 2, sentiment: 2, vibe: 3 } },
                        { text: "No lo sé / No me importa la etiqueta.", delta: { art: 0 } }
                    ]
                },
                {
                    text: "¿Tiene 'alma' una imagen generada por IA?",
                    options: [
                        { text: "Nunca. Es solo matemáticas.", delta: { sentiment: -3, vibe: -2 } },
                        { text: "Si me hace sentir algo, sí.", delta: { sentiment: 3, vibe: 5 } },
                        { text: "El alma viene de la intención del prompter.", delta: { sentiment: 5, vibe: 8 } },
                        { text: "Depende totalmente del prejuicio del espectador.", delta: { sentiment: 0, vibe: 0 } }
                    ]
                }
            ],
            research: [
                {
                    text: "¿Cuántas horas a la semana interactúas con herramientas de IA?",
                    options: [
                        { text: "0 horas (Puro Manual)", delta: { usage_hours: 0 } },
                        { text: "1-5 horas (Ocasional)", delta: { usage_hours: 3 } },
                        { text: "5-20 horas (Intenso)", delta: { usage_hours: 12 } },
                        { text: "20+ horas (Bucle Infinito)", delta: { usage_hours: 30 } }
                    ]
                },
                {
                    text: "¿Podrías completar tu proyecto más reciente sin herramientas de IA?",
                    options: [
                        { text: "Sí, no las necesito.", delta: { atrophy: 0, tech: 2, art: 2 } },
                        { text: "Sí, pero tardaría 3 veces más.", delta: { atrophy: 3, efficiency: -5 } },
                        { text: "No, me atascaría en obstáculos técnicos/creativos.", delta: { atrophy: 7, vibe: 3 } },
                        { text: "No lo sé / No he intentado trabajar sin ellas últimamente.", delta: { atrophy: 0 } }
                    ]
                },
                {
                    text: "¿Cómo te sientes sobre el futuro de tu rol en 3 años?",
                    options: [
                        { text: "Emocionado y Empoderado", delta: { anxiety: -5, sentiment: 5 } },
                        { text: "Cauteloso / Neutral", delta: { anxiety: 0, sentiment: 1 } },
                        { text: "Ansioso / Amenazado", delta: { anxiety: 5, sentiment: -3 } },
                        { text: "No lo sé / No puedo predecir a 3 años vista.", delta: { anxiety: 0 } }
                    ]
                },
                {
                    text: "¿Te importa si el modelo de IA es de código abierto (ej. Llama, Flux) o propietario (ej. OpenAI, Midjourney)?",
                    options: [
                        { text: "Muchísimo. Solo confío en sistemas abiertos.", delta: { oss_preference: 'Critical', sentiment: 1 } },
                        { text: "Es una preferencia, pero uso lo que funciona.", delta: { oss_preference: 'Preference', sentiment: 0 } },
                        { text: "No. Solo quiero el mejor resultado.", delta: { oss_preference: 'Irrelevant', sentiment: 0 } },
                        { text: "No sé qué significan estos términos.", delta: { oss_preference: 'Unaware', sentiment: 0 } }
                    ]
                }
            ],
            political: [
                {
                    text: "¿Quién debería tener los derechos del contenido generado por IA entrenado con datos públicos?",
                    options: [
                        { text: "Los creadores individuales (Copyright estricto)", delta: { ethics: 10, resilience: 3, sentiment: -2 } },
                        { text: "Compartido entre los dueños de la IA y los creadores.", delta: { ethics: 5, sentiment: 1 } },
                        { text: "Dominio público / Progreso abierto.", delta: { ethics: -5, sentiment: 3 } },
                        { text: "No lo sé / No tengo una opinión sobre el copyright.", delta: { ethics: 0 } }
                    ]
                },
                {
                    text: "¿Qué parte de tu identidad profesional reside en tu 'Artesanía Manual'?",
                    options: [
                        { text: "Es el 100% de lo que soy. La IA es una amenaza vacía.", delta: { resilience: 10, tech: 2, art: 2 } },
                        { text: "Es importante, pero soy un híbrido eficiente.", delta: { resilience: 5, efficiency: 2 } },
                        { text: "Ahora soy un curador. La artesanía está en la visión.", delta: { resilience: -5, vibe: 5 } },
                        { text: "No lo sé / No asocio mi identidad con la artesanía.", delta: { resilience: 0 } }
                    ]
                },
                {
                    text: "¿Cuál es el mayor riesgo de la 'fiebre del oro' de la IA?",
                    options: [
                        { text: "Pérdida de la soberanía y autonomía humana.", delta: { ethics: 8, resilience: 5, anxiety: 5 } },
                        { text: "Desempleo masivo y colapso económico.", delta: { ethics: 2, anxiety: 8 } },
                        { text: "La aceleración del sesgo y la desinformación.", delta: { ethics: 5, anxiety: 3 } },
                        { text: "No lo sé / No he pensado en los riesgos.", delta: { ethics: 0, anxiety: 0 } }
                    ]
                },
                {
                    text: "¿Cómo deberían abordar los gobiernos la regulación del desarrollo de la IA?",
                    options: [
                        { text: "Regulación mínima: Dejar que la innovación prospere a toda costa.", delta: { efficiency: 5, sentiment: 2 } },
                        { text: "Regulación moderada: Proteger a los trabajadores pero fomentar el progreso.", delta: { ethics: 5, resilience: 2 } },
                        { text: "Regulación estricta: Ralentizar el desarrollo hasta que se resuelva la ética.", delta: { ethics: 10, anxiety: 5, sentiment: -5 } },
                        { text: "No lo sé / La regulación no es la respuesta.", delta: { sentiment: 0 } }
                    ]
                }
            ],
            content: [
                {
                    text: "Cuando descubres que una imagen hermosa o un código útil fue generado por IA, ¿cómo cambia tu percepción de su 'Valor'?",
                    options: [
                        { text: "No vale nada; una mera mercancía.", delta: { content_sentiment: -10, sentiment: -2 } },
                        { text: "Me siento un poco decepcionado, pero sigue siendo útil.", delta: { content_sentiment: -3, sentiment: -1 } },
                        { text: "Su valor es el mismo. Lo que importa es el resultado.", delta: { content_sentiment: 5, sentiment: 2 } },
                        { text: "Es más impresionante que lo haya hecho una máquina.", delta: { content_sentiment: 10, sentiment: 5 } }
                    ]
                },
                {
                    text: "¿Crees que el contenido generado por IA puede tener 'alma'?",
                    options: [
                        { text: "No. El alma requiere lucha humana.", delta: { content_sentiment: -10, ethics: 5 } },
                        { text: "Quizás, si la intención del prompter es profunda.", delta: { content_sentiment: 3, vibe: 2 } },
                        { text: "Sí. La estética es independiente del creador.", delta: { content_sentiment: 8, sentiment: 3 } },
                        { text: "No sé qué significa 'alma' en este contexto.", delta: { content_sentiment: 0 } }
                    ]
                }
            ],
            psychology: [
                {
                    text: "¿Qué tipo de maestría crees que será la más valiosa en 50 años?",
                    options: [
                        { text: "Habilidades Lindy (Lógica, Composición, Teoría)", delta: { lindy: 10, resilience: 5 } },
                        { text: "Habilidades transitorias (Software, Sintaxis, Herramientas)", delta: { lindy: -5, tech: 5, art: 5 } },
                        { text: "Orquestación de IA (Prompting, Curación)", delta: { lindy: -2, vibe: 5 } },
                        { text: "No sé qué significan estos tipos de habilidades.", delta: { lindy: 0 } }
                    ]
                },
                {
                    text: "¿Cómo ha cambiado tu 'satisfacción' desde que usas la IA para trabajar?",
                    options: [
                        { text: "Los 'macro-logros' de la rapidez son gratificantes.", delta: { flow: -5, efficiency: 5 } },
                        { text: "Echo de menos los 'micro-logros' de resolver problemas manualmente.", delta: { flow: 10, resilience: 3 } },
                        { text: "Me siento menos conectado con el 'proceso' de mi trabajo.", delta: { flow: 5, sentiment: -2 } },
                        { text: "No lo sé / Mi satisfacción no depende de usar IA.", delta: { flow: 0 } }
                    ]
                },
                {
                    text: "¿Cuál es tu razón principal para usar o evitar la IA?",
                    options: [
                        { text: "Resistencia intencionada: Quiero mantener mis habilidades afiladas.", delta: { lindy: 10, resilience: 10, domain: 'holdout' } },
                        { text: "Eficiencia: Necesito producir a gran escala.", delta: { efficiency: 10, vibe: 5 } },
                        { text: "Curiosidad: Me encanta ver qué es posible.", delta: { sentiment: 5, vibe: 3 } },
                        { text: "No lo sé / Sin razón específica.", delta: { sentiment: 0 } }
                    ]
                }
            ]
        }
    },
    fr: {
        hero_title: 'Définir l\'<span class="highlight">Élément Humain</span>',
        hero_subtitle: 'À l\'ère de l\'Intelligence Artificielle, où vous situez-vous ?',
        intro_title: 'L\'Enquête',
        intro_text: 'Nous créons des cases. Non pas pour vous enfermer, mais pour comprendre la forme de notre nouvelle réalité. Parlez-nous de votre travail, et nous vous dirons qui vous êtes.',
        start_btn: 'Découvrez votre Archétype',
        setup_step: 'Configuration',
        selection_step: 'Sélection',
        core_step: 'Cœur',
        research_step: 'Recherche',
        political_step: 'Éthique',
        content_step: 'Contenu',
        deep_dive_step: 'Psychologie',
        future_proof_label: 'Prêt pour le futur',
        rank_label: 'RANG',
        archetype_header: 'Archétype',
        share_challenge: '🔗 Copier le lien',
        link_copied: '✅ Lien copié !',
        restart_btn: 'Recommencer la découverte',
        footer_copyright: '© 2026 S.Hirsch Media University',
        consent_text: 'J\'accepte que mes réponses anonymisées soient utilisées à des fins de recherche.',
        privacy_link: 'Politique de Confidentialité',
        imprint_link: 'Mentions Légales',
        stat_vibe: 'Vibe',
        stat_sentiment: 'Sentiment',
        stat_tech: 'Tech',
        stat_art: 'Art',
        ranks: {
            "S-CLASS SOVEREIGN": "S-CLASSE SOUVERAIN",
            "S-CLASS ORCHESTRATOR": "S-CLASSE ORCHESTRATEUR",
            "A-CLASS AUGMENTED": "A-CLASSE AUGMENTÉ",
            "A-CLASS ETHICIST": "A-CLASSE ÉTHICIEN",
            "B-CLASS ADAPTER": "B-CLASSE ADAPTATEUR"
        },
        share_text: "🔍 Je viens de terminer l'évaluation de recherche 'Human-AI Synergy'.\n🚀 Mon archétype : {archetype} ({score}% prêt pour le futur).\n\nCette étude explore comment l'IA générative redéfinit l'identité professionnelle et l'artisanat. Découvrez votre archétype et rejoignez la recherche ici :",
        archetypes: {
            "The Code Artisan (Purist)": "L'Artisan du Code (Puriste)",
            "The Ink-Stained Rebel": "Le Rebelle à l'encre",
            "The Renaissance Traditionalist": "Le Traditionaliste de la Renaissance",
            "The Augmented Engineer (10x)": "L'Ingénieur Augmenté (10x)",
            "The Synth-Grapher": "Le Synth-Graphe",
            "The Omni-Creator": "L'Omni-Créateur",
            "The Pure Vibe Coder": "Le Codeur de pure vibration",
            "The Dreamweaver": "Le Tisseur de rêves",
            "The Idea Generator": "Le Générateur d'idées",
            "The Cautious Adapter": "L'Adaptateur prudent"
        },
        subtexts: {
            purist: "Vous êtes la résistance. Vous croyez que l'effort, la douleur et l'intention humaine sont ce qui donne de la valeur au travail. Vous considérez l'IA non seulement comme une triche, mais comme un vol de l'esprit humain.",
            augmented: "Vous êtes l'évolution. Vous avez les compétences de base pour juger de la qualité, mais vous utilisez la machine pour éviter le labeur. Vous allez plus vite qu'il ne devrait être possible, dirigeant l'IA comme un orchestre.",
            prompter: "Vous êtes la vision sans les mains. Vous ne vous souciez pas de la façon dont la saucisse est faite, tant qu'elle est bonne. Vous avez démocratisé la création pour vous-même, en abattant des barrières qui existaient depuis des décennies.",
            cautious: "Vous avancez un jour après l'autre. Vous voyez l'utilité, mais vous ne gobez pas tout. Vous l'utilisez quand c'est pertinent, mais vous ne laissez pas encore vos compétences s'atrophier."
        },
        questions: {
            demographics: [
                {
                    text: "Depuis combien d'années travaillez-vous dans votre domaine ?",
                    options: [
                        { text: "Junior (0-2 ans)", delta: { years_experience: 1 } },
                        { text: "Intermédiaire (3-5 ans)", delta: { years_experience: 4 } },
                        { text: "Senior (6-10 ans)", delta: { years_experience: 8 } },
                        { text: "Vétéran (10+ ans)", delta: { years_experience: 15 } }
                    ]
                },
                {
                    text: "Quel est votre secteur d'activité principal ?",
                    options: [
                        { text: "Logiciel / Ingénierie", delta: { industry: 'Software' } },
                        { text: "Arts visuels / Design", delta: { industry: 'Creative' } },
                        { text: "Académique / Recherche / Éducation", delta: { industry: 'Academic' } },
                        { text: "Marketing / Services professionnels", delta: { industry: 'Professional' } }
                    ]
                }
            ],
            domainSelection: {
                text: "Quel est votre domaine de création principal ?",
                options: [
                    { text: "Code & Ingénierie.", delta: { domain: 'code' } },
                    { text: "Arts visuels, Design & Médias.", delta: { domain: 'art' } },
                    { text: "Je fais tout (Généraliste/Polymathe).", delta: { domain: 'both' } },
                    { text: "Aucun de ces choix / Autre.", delta: { domain: 'none' } }
                ]
            },
            codeQuestions: [
                {
                    text: "Si tous les outils d'IA disparaissaient demain, pourriez-vous encore créer des logiciels ?",
                    options: [
                        { text: "Non. Je dépends à 100 % de la génération par l'IA.", delta: { tech: 0, vibe: 5 } },
                        { text: "Je pourrais m'en sortir difficilement, mais j'ai besoin de Google.", delta: { tech: 3, vibe: 2 } },
                        { text: "Oui, mais ce serait fastidieux et lent.", delta: { tech: 7, vibe: 0 } },
                        { text: "Je ne sais pas / Non applicable à mon travail.", delta: { tech: 0 } }
                    ]
                },
                {
                    text: "Comment interagissez-vous avec le code généré par l'IA ?",
                    options: [
                        { text: "Je le copie-colle. Si ça marche, ça marche.", delta: { tech: 0, vibe: 5, sentiment: 2 } },
                        { text: "Je le lis pour comprendre, puis je le colle.", delta: { tech: 4, vibe: 2, sentiment: 1 } },
                        { text: "Je le traite comme un brouillon et je le retravaille beaucoup.", delta: { tech: 8, vibe: -2, sentiment: 0 } },
                        { text: "Je ne sais pas / Je n'utilise pas l'IA pour le code.", delta: { tech: 0 } }
                    ]
                },
                {
                    text: "Quelle est votre position sur le 'Vibe Coding' ?",
                    options: [
                        { text: "C'est l'avenir. La syntaxe est pour les ordinateurs.", delta: { vibe: 5, sentiment: 5, tech: -1 } },
                        { text: "Génial pour les prototypes, mauvais pour la production.", delta: { vibe: 2, sentiment: 1, tech: 5 } },
                        { text: "Cela crée du code spaghetti dangereux.", delta: { vibe: -5, sentiment: -5, tech: 8 } },
                        { text: "Je ne sais pas ce qu'est le Vibe Coding.", delta: { vibe: 0, sentiment: 0 } }
                    ]
                },
                {
                    text: "Quand vous voyez un développeur écrire du code manuellement...",
                    options: [
                        { text: "J'admire son savoir-faire.", delta: { sentiment: -1, tech: 2 } },
                        { text: "Je pense qu'il perd son temps.", delta: { sentiment: 3, vibe: 3 } },
                        { text: "J'ai de la peine pour lui. Il est obsolète.", delta: { sentiment: 5, vibe: 5 } },
                        { text: "Je ne sais pas / Pas d'avis tranché.", delta: { sentiment: 0 } }
                    ]
                }
            ],
            artQuestions: [
                {
                    text: "Pouvez-vous dessiner, peindre ou concevoir sans ordinateur ?",
                    options: [
                        { text: "Non, je ne sais pas dessiner un bonhomme allumette.", delta: { art: 0, vibe: 5 } },
                        { text: "J'ai des bases en composition.", delta: { art: 3, vibe: 2 } },
                        { text: "Oui, je suis un artiste traditionnel formé.", delta: { art: 10, vibe: -2 } },
                        { text: "Je ne sais pas / Je ne connais pas mon niveau.", delta: { art: 0 } }
                    ]
                },
                {
                    text: "Que pensez-vous des modèles d'IA artistique (Midjourney, Flux) ?",
                    options: [
                        { text: "C'est du vol. Pur et simple.", delta: { sentiment: -5, vibe: -5, art: 5 } },
                        { text: "C'est un outil utile pour le moodboard.", delta: { sentiment: 0, vibe: 2, art: 3 } },
                        { text: "Cela me permet de visualiser des choses impossibles auparavant.", delta: { sentiment: 5, vibe: 8, art: -2 } },
                        { text: "Je ne sais pas ce que sont ces modèles.", delta: { sentiment: 0 } }
                    ]
                },
                {
                    text: "Quand vous voyez un 'Prompt Artist' prétendre être un Créateur...",
                    options: [
                        { text: "Cela insulte les années passées à apprendre l'anatomie.", delta: { art: 8, sentiment: -5, vibe: -5 } },
                        { text: "Si le résultat est beau, ce sont des artistes.", delta: { art: 0, sentiment: 5, vibe: 5 } },
                        { text: "Le commissariat est une forme de création.", delta: { art: 2, sentiment: 2, vibe: 3 } },
                        { text: "Je ne sais pas / L'étiquette m'importe peu.", delta: { art: 0 } }
                    ]
                },
                {
                    text: "Une image générée par IA a-t-elle une 'âme' ?",
                    options: [
                        { text: "Jamais. C'est juste des mathématiques.", delta: { sentiment: -3, vibe: -2 } },
                        { text: "Si elle me fait ressentir quelque chose, oui.", delta: { sentiment: 3, vibe: 5 } },
                        { text: "L'âme vient de l'intention de celui qui a posé le prompt.", delta: { sentiment: 5, vibe: 8 } },
                        { text: "Cela dépend entièrement des préjugés du spectateur.", delta: { sentiment: 0, vibe: 0 } }
                    ]
                }
            ],
            research: [
                {
                    text: "Combien d'heures par semaine interagissez-vous avec des outils d'IA ?",
                    options: [
                        { text: "0 heure (Pur manuel)", delta: { usage_hours: 0 } },
                        { text: "1-5 heures (Occasionnel)", delta: { usage_hours: 3 } },
                        { text: "5-20 heures (Intensif)", delta: { usage_hours: 12 } },
                        { text: "20+ heures (Boucle infinie)", delta: { usage_hours: 30 } }
                    ]
                },
                {
                    text: "Pourriez-vous terminer votre projet le plus récent sans outils d'IA ?",
                    options: [
                        { text: "Oui, je n'en ai pas besoin.", delta: { atrophy: 0, tech: 2, art: 2 } },
                        { text: "Oui, mais cela prendrait 3 fois plus de temps.", delta: { atrophy: 3, efficiency: -5 } },
                        { text: "Non, je serais bloqué sur des obstacles techniques/créatifs.", delta: { atrophy: 7, vibe: 3 } },
                        { text: "Je ne sais pas / Je n'ai pas essayé sans récemment.", delta: { atrophy: 0 } }
                    ]
                },
                {
                    text: "Comment voyez-vous l'avenir de votre rôle dans 3 ans ?",
                    options: [
                        { text: "Excité & Stimulé", delta: { anxiety: -5, sentiment: 5 } },
                        { text: "Prudent / Neutre", delta: { anxiety: 0, sentiment: 1 } },
                        { text: "Anxieux / Menacé", delta: { anxiety: 5, sentiment: -3 } },
                        { text: "Je ne sais pas / Je ne peux pas prédire à 3 ans.", delta: { anxiety: 0 } }
                    ]
                },
                {
                    text: "L'IA est-elle Open Source (ex: Llama) ou Propriétaire (ex: OpenAI) ? Est-ce important pour vous ?",
                    options: [
                        { text: "Extrêmement. Je n'ai confiance qu'aux systèmes ouverts.", delta: { oss_preference: 'Critical', sentiment: 1 } },
                        { text: "C'est une préférence, mais j'utilise ce qui marche.", delta: { oss_preference: 'Preference', sentiment: 0 } },
                        { text: "Non. Je veux juste le meilleur résultat.", delta: { oss_preference: 'Irrelevant', sentiment: 0 } },
                        { text: "Je ne sais pas ce que ces termes veulent dire.", delta: { oss_preference: 'Unaware', sentiment: 0 } }
                    ]
                }
            ],
            political: [
                {
                    text: "Qui devrait posséder les droits du contenu généré par IA entraîné sur des données publiques ?",
                    options: [
                        { text: "Les créateurs individuels (Copyright strict)", delta: { ethics: 10, resilience: 3, sentiment: -2 } },
                        { text: "Partagé entre les propriétaires d'IA et les créateurs.", delta: { ethics: 5, sentiment: 1 } },
                        { text: "Domaine public / Progrès ouvert.", delta: { ethics: -5, sentiment: 3 } },
                        { text: "Je ne sais pas / Pas d'avis sur le copyright.", delta: { ethics: 0 } }
                    ]
                },
                {
                    text: "Quelle part de votre identité réside dans votre 'Artisanat Manuel' ?",
                    options: [
                        { text: "100 % de ce que je suis. L'IA est une menace vaine.", delta: { resilience: 10, tech: 2, art: 2 } },
                        { text: "C'est important, mais je suis un hybride efficace.", delta: { resilience: 5, efficiency: 2 } },
                        { text: "Je suis un curateur maintenant. L'art est dans la vision.", delta: { resilience: -5, vibe: 5 } },
                        { text: "Je ne sais pas / Je n'associe pas mon identité à l'artisanat.", delta: { resilience: 0 } }
                    ]
                },
                {
                    text: "Quel est le plus gros risque de la 'Ruée vers l'or' de l'IA ?",
                    options: [
                        { text: "La perte de souveraineté et d'autonomie humaine.", delta: { ethics: 8, resilience: 5, anxiety: 5 } },
                        { text: "Le chômage de masse et l'effondrement économique.", delta: { ethics: 2, anxiety: 8 } },
                        { text: "L'accélération des biais et de la désinformation.", delta: { ethics: 5, anxiety: 3 } },
                        { text: "Je ne sais pas / Je n'ai pas réfléchi aux risques.", delta: { ethics: 0, anxiety: 0 } }
                    ]
                },
                {
                    text: "Comment les gouvernements devraient-ils aborder la régulation du développement de l'IA ?",
                    options: [
                        { text: "Régulation minimale : Laisser l'innovation prospérer à tout prix.", delta: { efficiency: 5, sentiment: 2 } },
                        { text: "Régulation modérée : Protéger les travailleurs tout en encourageant le progrès.", delta: { ethics: 5, resilience: 2 } },
                        { text: "Régulation stricte : Ralentir le développement jusqu'à ce que l'éthique soit résolue.", delta: { ethics: 10, anxiety: 5, sentiment: -5 } },
                        { text: "Je ne sais pas / La régulation n'est pas la réponse.", delta: { sentiment: 0 } }
                    ]
                }
            ],
            content: [
                {
                    text: "Quand vous découvrez qu'une image ou un code utile a été généré par IA, comment votre perception change-t-elle ?",
                    options: [
                        { text: "Cela perd toute valeur ; une simple marchandise.", delta: { content_sentiment: -10, sentiment: -2 } },
                        { text: "Je suis un peu déçu, mais ça reste utile.", delta: { content_sentiment: -3, sentiment: -1 } },
                        { text: "Sa valeur est la même. Seul le résultat compte.", delta: { content_sentiment: 5, sentiment: 2 } },
                        { text: "C'est plus impressionnant qu'une machine l'ait fait.", delta: { content_sentiment: 10, sentiment: 5 } }
                    ]
                },
                {
                    text: "Pensez-vous que le contenu généré par IA peut avoir une 'Âme' ?",
                    options: [
                        { text: "Non. L'âme nécessite une lutte humaine.", delta: { content_sentiment: -10, ethics: 5 } },
                        { text: "Peut-être, si l'intention du prompt est profonde.", delta: { content_sentiment: 3, vibe: 2 } },
                        { text: "Oui. L'esthétique est indépendante du créateur.", delta: { content_sentiment: 8, sentiment: 3 } },
                        { text: "Je ne sais pas ce que 'Âme' signifie ici.", delta: { content_sentiment: 0 } }
                    ]
                }
            ],
            psychology: [
                {
                    text: "Quel type de maîtrise sera le plus précieux dans 50 ans ?",
                    options: [
                        { text: "Compétences Lindy (Logique, Composition, Théorie)", delta: { lindy: 10, resilience: 5 } },
                        { text: "Compétences éphémères (Logiciel, Syntaxe, Outils)", delta: { lindy: -5, tech: 5, art: 5 } },
                        { text: "Orchestration d'IA (Prompting, Curation)", delta: { lindy: -2, vibe: 5 } },
                        { text: "Je ne sais pas ce que ces termes signifient.", delta: { lindy: 0 } }
                    ]
                },
                {
                    text: "Comment votre 'satisfaction' a-t-elle changé avec l'IA au travail ?",
                    options: [
                        { text: "Les 'macro-victoires' de la rapidité sont gratifiantes.", delta: { flow: -5, efficiency: 5 } },
                        { text: "Les 'micro-victoires' de la résolution manuelle me manquent.", delta: { flow: 10, resilience: 3 } },
                        { text: "Je me sens moins connecté au 'processus' de mon travail.", delta: { flow: 5, sentiment: -2 } },
                        { text: "Je ne sais pas / Ma satisfaction ne dépend pas de l'IA.", delta: { flow: 0 } }
                    ]
                },
                {
                    text: "Quelle est votre raison principale d'utiliser ou d'éviter l'IA ?",
                    options: [
                        { text: "Résistant intentionnel : je veux garder l'esprit vif.", delta: { lindy: 10, resilience: 10, domain: 'holdout' } },
                        { text: "Efficacité : j'ai besoin de produire à grande échelle.", delta: { efficiency: 10, vibe: 5 } },
                        { text: "Curiosité : j'aime voir ce qui est possible.", delta: { sentiment: 5, vibe: 3 } },
                        { text: "Je ne sais pas / Pas de raison spécifique.", delta: { sentiment: 0 } }
                    ]
                }
            ]
        }
    },
    zh: {
        hero_title: '定义<span class="highlight">人的元素</span>',
        hero_subtitle: '在人工智能时代，你站在哪里？',
        intro_title: '调查',
        intro_text: '我们正在设定标签。不是为了限制你，而是为了理解我们新现实的形态。告诉我们你的工作，我们将告诉你你是谁。',
        start_btn: '发现你的原型',
        setup_step: '设置',
        selection_step: '选择',
        core_step: '核心',
        research_step: '研究',
        political_step: '伦理',
        content_step: '内容',
        deep_dive_step: '心理学',
        future_proof_label: '面向未来',
        rank_label: '等级',
        archetype_header: '原型',
        share_challenge: '🔗 复制挑战链接',
        link_copied: '✅ 链接已复制！',
        restart_btn: '重新开始发现',
        footer_copyright: '© 2026 S.Hirsch Media University',
        consent_text: '我同意将我的匿名回答用于研究目的。',
        privacy_link: '隐私政策',
        imprint_link: '法律声明',
        stat_vibe: '氛围 (Vibe)',
        stat_sentiment: '情感',
        stat_tech: '技术',
        stat_art: '艺术',
        ranks: {
            "S-CLASS SOVEREIGN": "S级 主权者",
            "S-CLASS ORCHESTRATOR": "S级 编排者",
            "A-CLASS AUGMENTED": "A级 增强者",
            "A-CLASS ETHICIST": "A级 伦理学家",
            "B-CLASS ADAPTER": "B级 适配者"
        },
        share_text: "🔍 我刚刚完成了 '人机协同 (Human-AI Synergy)' 研究评估。\n🚀 我的原型：{archetype} ({score}% 面向未来)。\n\n这项研究探讨了生成式人工智能如何重新定义职业身份和手艺。发现你的原型并在这里加入实证研究：",
        archetypes: {
            "The Code Artisan (Purist)": "代码工匠 (纯粹主义者)",
            "The Ink-Stained Rebel": "墨迹斑斑的反叛者",
            "The Renaissance Traditionalist": "文艺复兴传统主义者",
            "The Augmented Engineer (10x)": "增强型工程师 (10x)",
            "The Synth-Grapher": "合成影像师",
            "The Omni-Creator": "全能创作者",
            "The Pure Vibe Coder": "纯氛围程序员",
            "The Dreamweaver": "圆梦师",
            "The Idea Generator": "创意生成器",
            "The Cautious Adapter": "谨慎的适配者"
        },
        subtexts: {
            purist: "你是反抗者。你相信努力、痛苦和人的意图才是赋予工作价值的原因。你认为人工智能不仅是一种作弊，更是对人类精神的偷窃。",
            augmented: "你是进化者。你拥有判断质量的基础技能，但你使用机器来跳过繁琐的工作。你的移动速度超乎想象，像指挥交响乐团一样指挥人工智能。",
            prompter: "你是没有双手的愿景。你不在乎香肠是怎么做的，只要它好吃。你为自己实现了创作的民主化，打破了屹立数十年的障碍。",
            cautious: "你每天都在进步。你看到了效用，但你并没有盲目跟风。你在有意义的时候使用它，但你还没有让你的技能萎缩。"
        },
        questions: {
            demographics: [
                {
                    text: "你在你的领域工作了多少年？",
                    options: [
                        { text: "初级 (0-2年)", delta: { years_experience: 1 } },
                        { text: "中级 (3-5年)", delta: { years_experience: 4 } },
                        { text: "高级 (6-10年)", delta: { years_experience: 8 } },
                        { text: "资深 (10年以上)", delta: { years_experience: 15 } }
                    ]
                },
                {
                    text: "你的主要行业是什么？",
                    options: [
                        { text: "软件 / 工程", delta: { industry: 'Software' } },
                        { text: "视觉艺术 / 设计", delta: { industry: 'Creative' } },
                        { text: "学术 / 研究 / 教育", delta: { industry: 'Academic' } },
                        { text: "营销 / 专业服务", delta: { industry: 'Professional' } }
                    ]
                }
            ],
            domainSelection: {
                text: "你的主要创作领域是什么？",
                options: [
                    { text: "编写代码和工程。", delta: { domain: 'code' } },
                    { text: "视觉艺术、设计和媒体。", delta: { domain: 'art' } },
                    { text: "我什么都做 (通才/博学家)。", delta: { domain: 'both' } },
                    { text: "以上都不是 / 其他。", delta: { domain: 'none' } }
                ]
            },
            codeQuestions: [
                {
                    text: "如果明天所有人工智能工具都消失了，你还能开发软件吗？",
                    options: [
                        { text: "不能。我100%依赖人工智能生成。", delta: { tech: 0, vibe: 5 } },
                        { text: "我可能会很挣扎，但我需要谷歌。", delta: { tech: 3, vibe: 2 } },
                        { text: "能，但会非常乏味且缓慢。", delta: { tech: 7, vibe: 0 } },
                        { text: "不知道 / 不适用于我的工作。", delta: { tech: 0 } }
                    ]
                },
                {
                    text: "你如何与人工智能生成的代码互动？",
                    options: [
                        { text: "我直接复制粘贴。只要能运行就行。", delta: { tech: 0, vibe: 5, sentiment: 2 } },
                        { text: "我会阅读以理解，然后粘贴。", delta: { tech: 4, vibe: 2, sentiment: 1 } },
                        { text: "我将其视为草案并进行大量重构。", delta: { tech: 8, vibe: -2, sentiment: 0 } },
                        { text: "不知道 / 我不使用人工智能写代码。", delta: { tech: 0 } }
                    ]
                },
                {
                    text: "你对 '氛围编程 (Vibe Coding)' 的立场是什么？",
                    options: [
                        { text: "这是未来。语法是给计算机看的。", delta: { vibe: 5, sentiment: 5, tech: -1 } },
                        { text: "对于原型很棒，对于生产环境很差。", delta: { vibe: 2, sentiment: 1, tech: 5 } },
                        { text: "它会产生危险的面条式代码。", delta: { vibe: -5, sentiment: -5, tech: 8 } },
                        { text: "我不知道什么是 Vibe Coding。", delta: { vibe: 0, sentiment: 0 } }
                    ]
                },
                {
                    text: "当你看到一个开发者手动编写代码时...",
                    options: [
                        { text: "我钦佩他们的匠心。", delta: { sentiment: -1, tech: 2 } },
                        { text: "我觉得他们在浪费时间。", delta: { sentiment: 3, vibe: 3 } },
                        { text: "我为他们感到遗憾。他们过时了。", delta: { sentiment: 5, vibe: 5 } },
                        { text: "不知道 / 没有明确看法。", delta: { sentiment: 0 } }
                    ]
                }
            ],
            artQuestions: [
                {
                    text: "如果不使用电脑，你能绘画、绘图或设计吗？",
                    options: [
                        { text: "不能，我连火柴人都画不好。", delta: { art: 0, vibe: 5 } },
                        { text: "我有基础的构图能力。", delta: { art: 3, vibe: 2 } },
                        { text: "能，我是一名受过训练的传统艺术家。", delta: { art: 10, vibe: -2 } },
                        { text: "不知道 / 不确定自己的水平。", delta: { art: 0 } }
                    ]
                },
                {
                    text: "你对人工智能艺术模型 (Midjourney, Flux) 有何感想？",
                    options: [
                        { text: "这是偷窃。纯粹且简单。", delta: { sentiment: -5, vibe: -5, art: 5 } },
                        { text: "它是用于制作情绪板 (moodboarding) 的有用工具。", delta: { sentiment: 0, vibe: 2, art: 3 } },
                        { text: "它让我能够可视化以前从未想象过的东西。", delta: { sentiment: 5, vibe: 8, art: -2 } },
                        { text: "我不知道这些模型是什么。", delta: { sentiment: 0 } }
                    ]
                },
                {
                    text: "当你看到一个 '提示词艺术家' 声称自己是创作者时...",
                    options: [
                        { text: "这侮辱了我学习解剖学所花费的多年时间。", delta: { art: 8, sentiment: -5, vibe: -5 } },
                        { text: "如果产出很美，他们就是艺术家。", delta: { art: 0, sentiment: 5, vibe: 5 } },
                        { text: "策展也是一种创作形式。", delta: { art: 2, sentiment: 2, vibe: 3 } },
                        { text: "不知道 / 我不在乎这个标签。", delta: { art: 0 } }
                    ]
                },
                {
                    text: "人工智能生成的图像有 '灵魂' 吗？",
                    options: [
                        { text: "绝对没有。它只是数学。", delta: { sentiment: -3, vibe: -2 } },
                        { text: "如果它让我有所感悟，那么有。", delta: { sentiment: 3, vibe: 5 } },
                        { text: "灵魂来自于提示词录入者的意图。", delta: { sentiment: 5, vibe: 8 } },
                        { text: "这完全取决于观众的偏见。", delta: { sentiment: 0, vibe: 0 } }
                    ]
                }
            ],
            research: [
                {
                    text: "你平均每周与人工智能工具互动多少小时？",
                    options: [
                        { text: "0 小时 (纯手动)", delta: { usage_hours: 0 } },
                        { text: "1-5 小时 (偶尔)", delta: { usage_hours: 3 } },
                        { text: "5-20 小时 (重度)", delta: { usage_hours: 12 } },
                        { text: "20 小时以上 (无限循环)", delta: { usage_hours: 30 } }
                    ]
                },
                {
                    text: "如果没有人工智能工具，你能完成你最近的项目吗？",
                    options: [
                        { text: "能，我不需要它们。", delta: { atrophy: 0, tech: 2, art: 2 } },
                        { text: "能，但会花费3倍长的时间。", delta: { atrophy: 3, efficiency: -5 } },
                        { text: "不能，我会卡在技术/创作瓶颈上。", delta: { atrophy: 7, vibe: 3 } },
                        { text: "不知道 / 最近没试过在没有它的情况下工作。", delta: { atrophy: 0 } }
                    ]
                },
                {
                    text: "你对3年后你的职业未来有何感想？",
                    options: [
                        { text: "兴奋并充满力量", delta: { anxiety: -5, sentiment: 5 } },
                        { text: "谨慎 / 中立", delta: { anxiety: 0, sentiment: 1 } },
                        { text: "焦虑 / 受到威胁", delta: { anxiety: 5, sentiment: -3 } },
                        { text: "不知道 / 我无法预测3年后的情况。", delta: { anxiety: 0 } }
                    ]
                },
                {
                    text: "人工智能模型是开源 (例如 Llama, Flux) 还是专有 (例如 OpenAI, Midjourney)，这对你重要吗？",
                    options: [
                        { text: "非常重要。我只信任开放系统。", delta: { oss_preference: 'Critical', sentiment: 1 } },
                        { text: "这是一种偏好，但我会使用有效的工具。", delta: { oss_preference: 'Preference', sentiment: 0 } },
                        { text: "不。我只想要最好的产出。", delta: { oss_preference: 'Irrelevant', sentiment: 0 } },
                        { text: "我不知道这些词是什么意思。", delta: { oss_preference: 'Unaware', sentiment: 0 } }
                    ]
                }
            ],
            political: [
                {
                    text: "谁应该拥有基于公共数据训练的人工智能生成内容的权利？",
                    options: [
                        { text: "个人创作者 (严格的版权)", delta: { ethics: 10, resilience: 3, sentiment: -2 } },
                        { text: "人工智能所有者和创作者共享。", delta: { ethics: 5, sentiment: 1 } },
                        { text: "公共领域 / 开放进步。", delta: { ethics: -5, sentiment: 3 } },
                        { text: "不知道 / 对版权没有看法。", delta: { ethics: 0 } }
                    ]
                },
                {
                    text: "你的职业身份中有多少源于你的 '手动工艺'？",
                    options: [
                        { text: "100%是我。人工智能是一个空洞的威胁。", delta: { resilience: 10, tech: 2, art: 2 } },
                        { text: "它很重要，但我是一个高效的混合体。", delta: { resilience: 5, efficiency: 2 } },
                        { text: "我现在是一个策展人。工艺在于愿景。", delta: { resilience: -5, vibe: 5 } },
                        { text: "不知道 / 我不认为我的身份与工艺有关。", delta: { resilience: 0 } }
                    ]
                },
                {
                    text: "人工智能 '淘金热' 的最大风险是什么？",
                    options: [
                        { text: "丧失人类的主权和自主权。", delta: { ethics: 8, resilience: 5, anxiety: 5 } },
                        { text: "大规模失业和经济崩溃。", delta: { ethics: 2, anxiety: 8 } },
                        { text: "加速偏见和错误信息的传播。", delta: { ethics: 5, anxiety: 3 } },
                        { text: "不知道 / 我还没想过这些风险。", delta: { ethics: 0, anxiety: 0 } }
                    ]
                },
                {
                    text: "政府应该如何处理人工智能开发的监管？",
                    options: [
                        { text: "最低限度监管：不惜一切代价让创新繁荣。", delta: { efficiency: 5, sentiment: 2 } },
                        { text: "适度监管：保护工人，但鼓励进步。", delta: { ethics: 5, resilience: 2 } },
                        { text: "严格监管：在伦理问题解决之前放慢开发速度。", delta: { ethics: 10, anxiety: 5, sentiment: -5 } },
                        { text: "不知道 / 监管不是答案。", delta: { sentiment: 0 } }
                    ]
                }
            ],
            content: [
                {
                    text: "当你发现一张美丽的图像或有用的代码是人工智能生成的，你对其 '价值' 的认知会如何改变？",
                    options: [
                        { text: "它变得毫无价值；仅仅是一件商品。", delta: { content_sentiment: -10, sentiment: -2 } },
                        { text: "我感到略微失望，但它仍然有用。", delta: { content_sentiment: -3, sentiment: -1 } },
                        { text: "它的价值是一样的。结果才是最重要的。", delta: { content_sentiment: 5, sentiment: 2 } },
                        { text: "机器能做到这一点更令人印象深刻。", delta: { content_sentiment: 10, sentiment: 5 } }
                    ]
                },
                {
                    text: "你相信人工智能生成的内容会有 '灵魂' 吗？",
                    options: [
                        { text: "不。灵魂需要人类的挣扎。", delta: { content_sentiment: -10, ethics: 5 } },
                        { text: "也许有，如果提示词录入者的意图很深。", delta: { content_sentiment: 3, vibe: 2 } },
                        { text: "有。美学独立于创作者。", delta: { content_sentiment: 8, sentiment: 3 } },
                        { text: "我不知道在这种情况下 '灵魂' 意味着什么。", delta: { content_sentiment: 0 } }
                    ]
                }
            ],
            psychology: [
                {
                    text: "你认为哪种类型的精通在50年后最有价值？",
                    options: [
                        { text: "林迪技能 (逻辑、构图、理论)", delta: { lindy: 10, resilience: 5 } },
                        { text: "瞬态技能 (软件、语法、工具)", delta: { lindy: -5, tech: 5, art: 5 } },
                        { text: "人工智能编排 (提示、策展)", delta: { lindy: -2, vibe: 5 } },
                        { text: "我不知道这些技能类型是什么意思。", delta: { lindy: 0 } }
                    ]
                },
                {
                    text: "自从在工作中使用人工智能后，你的 '满意度' 有何变化？",
                    options: [
                        { text: "快速产出的 '宏观胜利' 令人欣慰。", delta: { flow: -5, efficiency: 5 } },
                        { text: "我怀念手动解决问题的 '微观胜利'。", delta: { flow: 10, resilience: 3 } },
                        { text: "我觉得与工作的 '过程' 联系减少了。", delta: { flow: 5, sentiment: -2 } },
                        { text: "不知道 / 我的满意度与人工智能使用无关。", delta: { flow: 0 } }
                    ]
                },
                {
                    text: "你使用或避免使用人工智能的主要原因是什么？",
                    options: [
                        { text: "刻意坚持：我想保持我的技能敏锐。", delta: { lindy: 10, resilience: 10, domain: 'holdout' } },
                        { text: "效率：我需要大规模产出。", delta: { efficiency: 10, vibe: 5 } },
                        { text: "好奇心：我喜欢看什么是可能的。", delta: { sentiment: 5, vibe: 3 } },
                        { text: "不知道 / 没有具体原因。", delta: { sentiment: 0 } }
                    ]
                }
            ]
        }
    },
    ar: {
        hero_title: 'تحديد <span class="highlight">العنصر البشري</span>',
        hero_subtitle: 'في عصر الذكاء الاصطناعي، أين تقف؟',
        intro_title: 'الاستبيان',
        intro_text: 'نحن ننشئ تصنيفات. ليس لحصرك، بل لفهم شكل واقعنا الجديد. أخبرنا عن عملك، وسنخبرك من أنت.',
        start_btn: 'اكتشف نمطك المهني',
        setup_step: 'الإعداد',
        selection_step: 'الاختيار',
        core_step: 'الأساس',
        research_step: 'البحث',
        political_step: 'الأخلاقيات',
        content_step: 'المحتوى',
        deep_dive_step: 'علم النفس',
        future_proof_label: 'جاهزية المستقبل',
        rank_label: 'الرتبة',
        archetype_header: 'النمط المهني',
        share_challenge: '🔗 نسخ رابط التحدي',
        link_copied: '✅ تم نسخ الرابط!',
        restart_btn: 'إعادة الاكتشاف',
        footer_copyright: '© 2026 S.Hirsch Media University',
        consent_text: 'أوافق على استخدام إجاباتي المجهولة لأغراض البحث العلمي.',
        privacy_link: 'سياسة الخصوصية',
        imprint_link: 'إشعار قانوني',
        stat_vibe: 'الحس الفني (Vibe)',
        stat_sentiment: 'التوجه',
        stat_tech: 'التقنية',
        stat_art: 'الفن',
        ranks: {
            "S-CLASS SOVEREIGN": "رتبة S: السيادي",
            "S-CLASS ORCHESTRATOR": "رتبة S: المنسق",
            "A-CLASS AUGMENTED": "رتبة A: المعزز",
            "A-CLASS ETHICIST": "رتبة A: الأخلاقي",
            "B-CLASS ADAPTER": "رتبة B: المتأقلم"
        },
        share_text: "🔍 لقد أكملت للتو تقييم بحث 'Human-AI Synergy'.\n🚀 نمطي المهني: {archetype} ({score}% جاهزية للمستقبل).\n\nتستكشف هذه الدراسة كيف يعيد الذكاء الاصطناعي التوليدي تعريف الهوية المهنية والحرفة. اكتشف نمطك وانضم إلى البحث التجريبي هنا:",
        archetypes: {
            "The Code Artisan (Purist)": "حرفي الكود (التقليدي)",
            "The Ink-Stained Rebel": "المتمرد الملطخ بالحبر",
            "The Renaissance Traditionalist": "تقليدي عصر النهضة",
            "The Augmented Engineer (10x)": "المهندس المعزز (10x)",
            "The Synth-Grapher": "المصور الاصطناعي",
            "The Omni-Creator": "المبدع الشامل",
            "The Pure Vibe Coder": "مبرمج الإحساس الخالص",
            "The Dreamweaver": "ناسج الأحلام",
            "The Idea Generator": "مولد الأفكار",
            "The Cautious Adapter": "المتأقلم الحذر"
        },
        subtexts: {
            purist: "أنت المقاومة. تؤمن بأن الجهد والألم والنية البشرية هي ما يعطي العمل قيمته. ترى أن الذكاء الاصطناعي ليس مجرد غش، بل هو سرقة للروح البشرية.",
            augmented: "أنت التطور. لديك المهارات الأساسية للحكم على الجودة، لكنك تستخدم الآلة لتخطي العناء. تتحرك بسرعة أكبر مما ينبغي، وتقود الذكاء الاصطناعي كأوركسترا.",
            prompter: "أنت الرؤية بدون اليدين. لا يهتم بكيفية صنع المنتج طالما أن النتيجة جيدة. لقد جعلت الإبداع ديمقراطياً لنفسك، محطماً الحواجز التي صمدت لعقود.",
            cautious: "أنت تأخذ الأمور يوماً بيوم. ترى الفائدة، لكنك لا تنساق تماماً للموجة. تستخدمه عندما يكون منطقياً، لكنك لا تسمح لمهاراتك بالضمور بعد."
        },
        questions: {
            demographics: [
                {
                    text: "كم عدد سنوات خبرتك في مجال عملك؟",
                    options: [
                        { text: "مبتدئ (0-2 سنة)", delta: { years_experience: 1 } },
                        { text: "متوسط (3-5 سنوات)", delta: { years_experience: 4 } },
                        { text: "خبير (6-10 سنوات)", delta: { years_experience: 8 } },
                        { text: "مخضرم (10+ سنوات)", delta: { years_experience: 15 } }
                    ]
                },
                {
                    text: "ما هو مجالك الصناعي الأساسي؟",
                    options: [
                        { text: "البرمجيات / الهندسة", delta: { industry: 'Software' } },
                        { text: "الفنون البصرية / التصميم", delta: { industry: 'Creative' } },
                        { text: "أكاديمي / بحث / تعليم", delta: { industry: 'Academic' } },
                        { text: "تنسيق / خدمات احترافية", delta: { industry: 'Professional' } }
                    ]
                }
            ],
            domainSelection: {
                text: "ما هو مجالك الإبداعي الأساسي؟",
                options: [
                    { text: "كتابة الكود والهندسة.", delta: { domain: 'code' } },
                    { text: "الفنون البصرية، التصميم والإعلام.", delta: { domain: 'art' } },
                    { text: "أقوم بكل شيء (شامل / متعدد المهارات).", delta: { domain: 'both' } },
                    { text: "لا شيء مما سبق / آخر.", delta: { domain: 'none' } }
                ]
            },
            codeQuestions: [
                {
                    text: "إذا اختفت جميع أدوات الذكاء الاصطناعي غداً، هل ستتمكن من بناء البرمجيات؟",
                    options: [
                        { text: "لا. أعتمد 100% على توليد الذكاء الاصطناعي.", delta: { tech: 0, vibe: 5 } },
                        { text: "قد أواجه صعوبة، لكنني سأحتاج إلى جوجل.", delta: { tech: 3, vibe: 2 } },
                        { text: "نعم، لكن سيكون الأمر مملاً وبطيئاً.", delta: { tech: 7, vibe: 0 } },
                        { text: "لا أعلم / لا ينطبق على عملي.", delta: { tech: 0 } }
                    ]
                },
                {
                    text: "كيف تتعامل مع الكود الذي يولده الذكاء الاصطناعي؟",
                    options: [
                        { text: "أقوم بنسخه ولصقه. إذا عمل، فهذا جيد.", delta: { tech: 0, vibe: 5, sentiment: 2 } },
                        { text: "أقرأه لأفهمه، ثم أقوم بلصقه.", delta: { tech: 4, vibe: 2, sentiment: 1 } },
                        { text: "أعامله كمسودة وأقوم بإعادة هيكلته بشكل مكثف.", delta: { tech: 8, vibe: -2, sentiment: 0 } },
                        { text: "لا أعلم / لا أستخدم الذكاء الاصطناعي للكود.", delta: { tech: 0 } }
                    ]
                },
                {
                    text: "ما هو موقفك من 'برمجة الإحساس' (Vibe Coding)؟",
                    options: [
                        { text: "إنها المستقبل. القواعد البرمجية للكمبيوتر فقط.", delta: { vibe: 5, sentiment: 5, tech: -1 } },
                        { text: "رائعة للنماذج الأولية، سيئة للإنتاج.", delta: { vibe: 2, sentiment: 1, tech: 5 } },
                        { text: "تخلق كوداً معقداً وفوضوياً وخطيراً.", delta: { vibe: -5, sentiment: -5, tech: 8 } },
                        { text: "لا أعرف ما هي برمجة الإحساس.", delta: { vibe: 0, sentiment: 0 } }
                    ]
                },
                {
                    text: "عندما ترى مطوراً يكتب الكود يدوياً...",
                    options: [
                        { text: "أعجب بمهارته وحرفته.", delta: { sentiment: -1, tech: 2 } },
                        { text: "أعتقد أنه يضيع وقته.", delta: { sentiment: 3, vibe: 3 } },
                        { text: "أشعر بالأسف تجاهه. لقد عفا عليه الزمن.", delta: { sentiment: 5, vibe: 5 } },
                        { text: "لا أعلم / لا أملك رأياً قوياً.", delta: { sentiment: 0 } }
                    ]
                }
            ],
            artQuestions: [
                {
                    text: "هل يمكنك الرسم أو التلوين أو التصميم بدون جهاز كمبيوتر؟",
                    options: [
                        { text: "لا، لا يمكنني حتى رسم أشكال بسيطة.", delta: { art: 0, vibe: 5 } },
                        { text: "لدي مهارات تكوين أساسية.", delta: { art: 3, vibe: 2 } },
                        { text: "نعم، أنا فنان تقليدي متعلم.", delta: { art: 10, vibe: -2 } },
                        { text: "لا أعلم / غير متأكد من مستوى مهارتي.", delta: { art: 0 } }
                    ]
                },
                {
                    text: "كيف تشعر تجاه نماذج الفن بالذكاء الاصطناعي (Midjourney, Flux)؟",
                    options: [
                        { text: "إنها سرقة. بكل بساطة.", delta: { sentiment: -5, vibe: -5, art: 5 } },
                        { text: "إنها أداة مفيدة للتصور المبدئي.", delta: { sentiment: 0, vibe: 2, art: 3 } },
                        { text: "تسمح لي بتصور أشياء لم أكن لأتمكن منها أبداً من قبل.", delta: { sentiment: 5, vibe: 8, art: -2 } },
                        { text: "لا أعرف ما هي هذه النماذج.", delta: { sentiment: 0 } }
                    ]
                },
                {
                    text: "عندما ترى شخصاً يكتب أوامر (Prompt Artist) ويدعي أنه مبدع...",
                    options: [
                        { text: "هذا يهين السنوات التي قضيتها في تعلم التشريح.", delta: { art: 8, sentiment: -5, vibe: -5 } },
                        { text: "إذا كانت النتيجة جميلة، فهم فنانون.", delta: { art: 0, sentiment: 5, vibe: 5 } },
                        { text: "التنسيق والاختيار هو شكل من أشكال الإبداع.", delta: { art: 2, sentiment: 2, vibe: 3 } },
                        { text: "لا أعلم / لا أهتم بالمسميات.", delta: { art: 0 } }
                    ]
                },
                {
                    text: "هل للصورة المولدة بالذكاء الاصطناعي 'روح'؟",
                    options: [
                        { text: "أبداً. هي مجرد رياضيات.", delta: { sentiment: -3, vibe: -2 } },
                        { text: "إذا جعلتني أشعر بشيء ما، فنعم.", delta: { sentiment: 3, vibe: 5 } },
                        { text: "الروح تأتي من نية الشخص الذي كتب الأوامر.", delta: { sentiment: 5, vibe: 8 } },
                        { text: "يعتمد ذلك كلياً على انحياز المشاهد.", delta: { sentiment: 0, vibe: 0 } }
                    ]
                }
            ],
            research: [
                {
                    text: "متوسط عدد الساعات أسبوعياً التي تتفاعل فيها مع أدوات الذكاء الاصطناعي؟",
                    options: [
                        { text: "0 ساعة (يدوي بالكامل)", delta: { usage_hours: 0 } },
                        { text: "1-5 ساعات (أحياناً)", delta: { usage_hours: 3 } },
                        { text: "5-20 ساعة (بشكل مكثف)", delta: { usage_hours: 12 } },
                        { text: "20+ ساعة (حلقة لا نهائية)", delta: { usage_hours: 30 } }
                    ]
                },
                {
                    text: "هل يمكنك إكمال مشروعك الأخير بدون أدوات الذكاء الاصطناعي؟",
                    options: [
                        { text: "نعم، لا أحتاج إليها.", delta: { atrophy: 0, tech: 2, art: 2 } },
                        { text: "نعم، لكن سيستغرق الأمر 3 أضعاف الوقت.", delta: { atrophy: 3, efficiency: -5 } },
                        { text: "لا، سأتعثر في عقبات تقنية/إبداعية.", delta: { atrophy: 7, vibe: 3 } },
                        { text: "لا أعلم / لم أحاول العمل بدونها مؤخراً.", delta: { atrophy: 0 } }
                    ]
                },
                {
                    text: "كيف تشعر تجاه مستقبل دورك المهني في غضون 3 سنوات؟",
                    options: [
                        { text: "متحمس وتم تمكيني", delta: { anxiety: -5, sentiment: 5 } },
                        { text: "حذر / محايد", delta: { anxiety: 0, sentiment: 1 } },
                        { text: "قلق / مهدد", delta: { anxiety: 5, sentiment: -3 } },
                        { text: "لا أعلم / لا يمكنني التنبؤ بـ 3 سنوات قادمة.", delta: { anxiety: 0 } }
                    ]
                },
                {
                    text: "هل يهمك إذا كان نموذج الذكاء الاصطناعي مفتوح المصدر (مثل Llama, Flux) مقابل مملوك لشركة (مثل OpenAI, Midjourney)؟",
                    options: [
                        { text: "للغاية. أنا أثق فقط في الأنظمة المفتوحة.", delta: { oss_preference: 'Critical', sentiment: 1 } },
                        { text: "هو تفضيل، لكني أستخدم ما ينجز العمل.", delta: { oss_preference: 'Preference', sentiment: 0 } },
                        { text: "لا. أريد فقط أفضل نتيجة.", delta: { oss_preference: 'Irrelevant', sentiment: 0 } },
                        { text: "لا أعرف ماذا تعني هذه المصطلحات.", delta: { oss_preference: 'Unaware', sentiment: 0 } }
                    ]
                }
            ],
            political: [
                {
                    text: "من يجب أن يملك حقوق المحتوى المولد بالذكاء الاصطناعي والمدرب على بيانات عامة؟",
                    options: [
                        { text: "المبدعون الأفراد (حقوق ملكية صارمة)", delta: { ethics: 10, resilience: 3, sentiment: -2 } },
                        { text: "مشتركة بين مالكي الذكاء الاصطناعي والمبدعين.", delta: { ethics: 5, sentiment: 1 } },
                        { text: "ملك عام / تقدم مفتوح.", delta: { ethics: -5, sentiment: 3 } },
                        { text: "لا أعلم / ليس لدي رأي في حقوق الملكية.", delta: { ethics: 0 } }
                    ]
                },
                {
                    text: "كم من هويتك المهنية يكمن في 'حرفتك اليدوية'؟",
                    options: [
                        { text: "هذا يمثلني بنسبة 100%. الذكاء الاصطناعي تهديد أجوف.", delta: { resilience: 10, tech: 2, art: 2 } },
                        { text: "مهمة، لكني هجين وبكفاءة عالية.", delta: { resilience: 5, efficiency: 2 } },
                        { text: "أنا منسق الآن. الحرفة تكمن في الرؤية.", delta: { resilience: -5, vibe: 5 } },
                        { text: "لا أعلم / لا أربط هويتي بالحرفة.", delta: { resilience: 0 } }
                    ]
                },
                {
                    text: "ما هو أكبر خطر في 'سباق الذهب' للذكاء الاصطناعي؟",
                    options: [
                        { text: "فقدان السيادة والاستقلالية البشرية.", delta: { ethics: 8, resilience: 5, anxiety: 5 } },
                        { text: "البطالة الجماعية والانهيار الاقتصادي.", delta: { ethics: 2, anxiety: 8 } },
                        { text: "تسارع الانحياز والمعلومات المضللة.", delta: { ethics: 5, anxiety: 3 } },
                        { text: "لا أعلم / لم أفكر في المخاطر بعد.", delta: { ethics: 0, anxiety: 0 } }
                    ]
                },
                {
                    text: "كيف ينبغي للحكومات التعامل مع تنظيم تطوير الذكاء الاصطناعي؟",
                    options: [
                        { text: "تنظيم أدنى: السماح للابتكار بالازدهار بأي ثمن.", delta: { efficiency: 5, sentiment: 2 } },
                        { text: "تنظيم معتدل: حماية العمال مع تشجيع التقدم.", delta: { ethics: 5, resilience: 2 } },
                        { text: "تنظيم صارم: إبطاء التطوير حتى يتم حل القضايا الأخلاقية.", delta: { ethics: 10, anxiety: 5, sentiment: -5 } },
                        { text: "لا أعلم / التنظيم ليس هو الحل.", delta: { sentiment: 0 } }
                    ]
                }
            ],
            content: [
                {
                    text: "عندما تكتشف أن صورة جميلة أو كوداً مفيداً تم توليده بالذكاء الاصطناعي، كيف تتغير نظرتك لـ 'قيمته'؟",
                    options: [
                        { text: "تصبح بلا قيمة؛ مجرد سلعة رخيصة.", delta: { content_sentiment: -10, sentiment: -2 } },
                        { text: "أشعر بخيبة أمل طفيفة، لكنها لا تزال مفيدة.", delta: { content_sentiment: -3, sentiment: -1 } },
                        { text: "قيمتها كما هي. النتيجة هي المهمة.", delta: { content_sentiment: 5, sentiment: 2 } },
                        { text: "المثير للإعجاب أن الآلة فعلت ذلك.", delta: { content_sentiment: 10, sentiment: 5 } }
                    ]
                },
                {
                    text: "هل تعتقد أن المحتوى المولد بالذكاء الاصطناعي يمكن أن يكون له 'روح'؟",
                    options: [
                        { text: "لا. الروح تتطلب كفاحاً بشرياً.", delta: { content_sentiment: -10, ethics: 5 } },
                        { text: "ربما، إذا كانت نية الشخص عميقة.", delta: { content_sentiment: 3, vibe: 2 } },
                        { text: "نعم. الجماليات مستقلة عن المبدع.", delta: { content_sentiment: 8, sentiment: 3 } },
                        { text: "لا أعرف ماذا تعني 'الروح' في هذا السياق.", delta: { content_sentiment: 0 } }
                    ]
                }
            ],
            psychology: [
                {
                    text: "أي نوع من الإتقان تعتقد أنه سيكون الأكثر قيمة خلال 50 عاماً؟",
                    options: [
                        { text: "مهارات ليندي (المنطق، التكوين، النظرية)", delta: { lindy: 10, resilience: 5 } },
                        { text: "المهارات العابرة (البرمجيات، القواعد، الأدوات)", delta: { lindy: -5, tech: 5, art: 5 } },
                        { text: "تنسيق الذكاء الاصطناعي (كتابة الأوامر، الاختيار)", delta: { lindy: -2, vibe: 5 } },
                        { text: "لا أعرف ماذا تعني أنواع المهارات هذه.", delta: { lindy: 0 } }
                    ]
                },
                {
                    text: "كيف تغير 'رضاك المهني' منذ استخدام الذكاء الاصطناعي في العمل؟",
                    options: [
                        { text: "الإنجازات الكبرى للإنتاج السريع مجزية.", delta: { flow: -5, efficiency: 5 } },
                        { text: "أفتقد الإنجازات الصغرى لحل المشكلات يدوياً.", delta: { flow: 10, resilience: 3 } },
                        { text: "أشعر بارتباط أقل بـ 'عملية' عملي.", delta: { flow: 5, sentiment: -2 } },
                        { text: "لا أعلم / رضاي لا يرتبط باستخدام الذكاء الاصطناعي.", delta: { flow: 0 } }
                    ]
                },
                {
                    text: "ما هو سببك الرئيسي لاستخدام الذكاء الاصطناعي أو تجنبه؟",
                    options: [
                        { text: "الاحتفاظ المتعمد: أريد إبقاء مهاراتي حادة.", delta: { lindy: 10, resilience: 10, domain: 'holdout' } },
                        { text: "الكفاءة: أحتاج للإنتاج على نطاق واسع.", delta: { efficiency: 10, vibe: 5 } },
                        { text: "الفضول: أحب رؤية ما هو ممكن.", delta: { sentiment: 5, vibe: 3 } },
                        { text: "لا أعلم / لا يوجد سبب محدد.", delta: { sentiment: 0 } }
                    ]
                }
            ]
        }
    }
};

window.translations = translations;
