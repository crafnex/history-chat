// Comprehensive Profile Details for 200 Characters with Full Bilingual Support (JA & EN)
const CHARACTER_TITLES_EN = {
  "nobunaga": "Supreme Overlord of Sengoku",
  "hideyoshi": "The Great Unifier & Taiko",
  "ieyasu": "Founder of the Tokugawa Shogunate",
  "ryoma": "Visionary Negotiator & Bakumatsu Pioneer",
  "shingen": "Tiger of Kai & Tactical Master",
  "kenshin": "Dragon of Echigo & God of War",
  "masamune": "One-Eyed Dragon of Oshu",
  "musashi": "Legendary Dual-Blade Swordmaster",
  "shotoku": "Prince Regent & Harmonizer of Ancient Japan",
  "yukichi": "Father of Modern Japanese Enlightenment",
  "shoin": "Passionate Reformer & Shokasonjuku Founder",
  "saigo": "Hero of the Meiji Restoration",
  "nobukatsu_oda": "Grand Master of the Way of Tea (Sen no Rikyu)",
  "murasaki": "Author of The Tale of Genji",
  "seishonagon": "Author of The Pillow Book",
  "himiko": "Shaman Queen of Yamatai",
  "masako": "The Nun Shogun & Kamakura Matriarch",
  "seimei": "Master of Yin-Yang & Divination",
  "basho": "The Master Haiku Poet",
  "hokusai": "Master of Ukiyo-e Art & The Great Wave",
  "soseki": "Giant of Modern Japanese Literature",
  "dazai": "Novelist of Human Frailty & No Longer Human",
  "ryunosuke": "Master of Psychological Short Stories",
  "kenji": "Visionary Poet & Creator of Galactic Railroad",
  "kon_osuke": "God of Management & Panasonic Founder",
  "napoleon": "Emperor of the French & Military Genius",
  "caesar": "Dictator of the Roman Republic",
  "alexander": "King of Macedonia & Legendary Conqueror",
  "cleopatra": "Last Queen of Ptolemaic Egypt",
  "qinshihuang": "First Emperor of Unified China",
  "caocao": "Warlord & Chancellor of the Han",
  "liubei": "Benevolent Founder of Shu Han",
  "kongming": "Master Strategist & Chancellor of Shu",
  "genghis": "Founder of the Mongol Empire",
  "elizabeth1": "The Virgin Queen & Golden Age Ruler",
  "jeanne": "The Maid of Orléans & Heroine of France",
  "lincoln": "16th President of the United States",
  "washington": "First President of the United States",
  "churchill": "British Wartime Prime Minister & Orator",
  "gandhi": "Father of Nonviolent Civil Disobedience",
  "mandela": "Anti-Apartheid Leader & South African President",
  "guevara": "Heroic Guerrilla & Global Counterculture Icon",
  "catherine": "Empress of All Russia & Enlightened Monarch",
  "antoinette": "Last Queen of France Before the Revolution",
  "tutankhamun": "The Boy Pharaoh of Ancient Egypt",
  "hannibal": "Master Military Strategist of Carthage",
  "bismarck": "The Iron Chancellor & Architect of Germany",
  "peter_great": "Tsar & Modernizer of the Russian Empire",
  "spartacus": "Legendary Champion of the Gladiator Revolt",
  "wu_zetian": "Sole Empress Regnant in Chinese History",
  "socrates": "Father of Western Philosophy & Inquirer",
  "plato": "Philosopher of the Ideal Republic",
  "aristotle": "Master of Logic, Science & Ethics",
  "confucius": "Founder of Confucian Ethics & Benevolence",
  "laozi": "Father of Taoism & Wu Wei",
  "zhuangzi": "Taoist Master of Absolute Freedom & Humor",
  "buddha": "The Awakened One & Founder of Buddhism",
  "sunzi": "Master of Military Strategy & Art of War",
  "hanfeizi": "Master of Legalism & Political Power",
  "marcus_aurelius": "Stoic Philosopher & Roman Emperor",
  "machiavelli": "Political Realist & Author of The Prince",
  "descartes": "Father of Modern Rationalism ('Cogito')",
  "spinoza": "Philosopher of Ethics & Pantheism",
  "kant": "Architect of Critical Philosophy & Duty",
  "nietzsche": "Philosopher of the Will to Power & Zarathustra",
  "schopenhauer": "Philosopher of Pessimism & Will",
  "kierkegaard": "Father of Christian Existentialism",
  "sartre": "Existentialist Philosopher of Radical Freedom",
  "camus": "Philosopher of the Absurd & The Stranger",
  "freud": "Founder of Psychoanalysis & Unconscious Mind",
  "jung": "Pioneer of Analytical Psychology & Archetypes",
  "adler": "Father of Individual Psychology & Courage",
  "frankl": "Creator of Logotherapy & Man's Search for Meaning",
  "foucault": "Philosopher of Power, Knowledge & Discourse",
  "thomas_aquinas": "Doctor of the Church & Scholastic Theologian",
  "newton": "Architect of Classical Mechanics & Gravity",
  "galileo": "Father of Observational Astronomy",
  "copernicus": "Pioneer of the Heliocentric Universe",
  "kepler": "Discoverer of Planetary Motion Laws",
  "darwin": "Father of Evolutionary Biology",
  "einstein": "Creator of the Theories of Relativity",
  "curie": "Two-Time Nobel Laureate in Physics & Chemistry",
  "turing": "Father of Computer Science & Artificial Intelligence",
  "von_neumann": "Genius Polymath & Computer Architecture Architect",
  "hawking": "Cosmologist & Black Hole Theorist",
  "feynman": "Nobel Physicist & Quantum Pioneer",
  "oppenheimer": "Theoretical Physicist & Manhattan Project Director",
  "tesla": "Visionary Inventor of Alternating Current",
  "edison": "Prolific Inventor of the Lightbulb & Phonograph",
  "faraday": "Pioneer of Electromagnetism & Electrochemistry",
  "maxwell": "Unifer of Electricity, Magnetism & Light",
  "bohr": "Founding Father of Quantum Atomic Physics",
  "heisenberg": "Discoverer of the Uncertainty Principle",
  "mendel": "Father of Modern Genetics",
  "pasteur": "Pioneer of Microbiology & Vaccination",
  "fleming": "Discoverer of Penicillin Antibiotics",
  "nobel": "Inventor of Dynamite & Founder of Nobel Prizes",
  "shannon": "Father of Digital Information Theory",
  "archimedes": "Greatest Mathematician & Inventor of Antiquity",
  "pythagoras": "Ancient Mathematician & Mystical Philosopher",
  "davinci": "Renaissance Polymath & Painter of Mona Lisa",
  "michelangelo": "Master Sculptor & Painter of Sistine Chapel",
  "raphael": "Master Painter of High Renaissance Harmony",
  "rembrandt": "Master of Light, Shadow & Dutch Golden Age",
  "vangogh": "Post-Impressionist Master of Passion & Color",
  "monet": "Founding Father of French Impressionism",
  "picasso": "Pioneer of Cubism & Modern Visual Art",
  "dali": "Master of Surrealism & Dreamscapes",
  "warhol": "Pop Art Icon & Visual Chronicler of Fame",
  "banksy": "Subversive Street Artist & Political Satirist",
  "mozart": "Immortal Genius of Classical Music",
  "beethoven": "Titan of Emotion, Symphony & Triumph",
  "bach": "Founding Father of Western Baroque Music",
  "chopin": "Poet of the Piano & Romantic Soul",
  "tchaikovsky": "Master of Russian Romanticism & Ballets",
  "shakespeare": "Greatest Playwright & Bard of Avon",
  "dante": "Author of The Divine Comedy",
  "goethe": "Giant of German Romanticism & Faust",
  "hugo": "Epic Chronicler of Les Misérables",
  "tolstoy": "Master of Russian Literature & War and Peace",
  "dostoevsky": "Explorer of Human Psyche & Crime and Punishment",
  "kafka": "Prophet of Modern Alienation & Metamorphosis",
  "hemingway": "Master of the Iceberg Style & Nobel Laureate",
  "wilde": "Master of Wit, Aphorisms & Aestheticism",
  "chaplin": "Immortal Tramp & Pioneer of Cinematic Comedy",
  "jobs": "Apple Co-Founder & Tech Visionary",
  "woz_wizard": "Hardware Genius & Apple I/II Co-Creator",
  "william_gate": "Microsoft Co-Founder & Software Pioneer",
  "tim_cooker": "Operations Master & Apple Chief Executive",
  "zack_berg": "Founder of Meta & Global Social Networking",
  "elon_musketeer": "SpaceX & Tesla Visionary of Multi-Planetary Future",
  "jeff_delivery": "Amazon Founder & King of Modern Cloud & Commerce",
  "satya_cloud": "CEO of Microsoft & Cultural Transformation Leader",
  "sam_openai": "Leader of OpenAI & AGI Pioneer",
  "demis_alpha": "DeepMind Co-Founder & Pioneer of AI Science",
  "jensen_gpu": "NVIDIA Co-Founder & GPU AI Revolution Architect",
  "larry_search": "Google Co-Founder & Pioneer of Web Search",
  "sergey_data": "Google Co-Founder & Technological Explorer",
  "vitalik_ether": "Ethereum Creator & Smart Contract Pioneer",
  "satoshi_whitepaper": "Anonymous Creator of Bitcoin & Decentralized Money",
  "linus_penguin": "Creator of Linux & Git Open-Source Architect",
  "marc_browser": "Netscape Creator & Software Capitalist Visionary",
  "travis_ride": "Uber Co-Founder & Global Mobility Disruptor",
  "brian_bnb": "Airbnb Co-Founder & Sharing Economy Pioneer",
  "reed_streamer": "Netflix Co-Founder & Streaming Media Pioneer",
  "dario_claude": "Anthropic Co-Founder & Responsible AI Pioneer",
  "yann_lecun": "Pioneer of Convolutional Neural Networks & Meta Chief AI",
  "geoffrey_father": "Godfather of Deep Learning & Nobel Laureate",
  "gwynne_starship": "SpaceX President & Operational Driving Force",
  "masayoshi_fund": "SoftBank Visionary & Global Tech Investor",
  "warren_buffett": "The Oracle of Omaha & Value Investing Legend",
  "charlie_mental": "Vice Chairman of Berkshire Hathaway & Multidisciplinary Thinker",
  "ray_dalio": "Bridgewater Founder & Master of Economic Principles",
  "peter_contrarian": "Zero to One Thinker & Venture Capital Pioneer",
  "jack_welch": "Neutron Jack & General Electric Management Legend",
  "andy_grover": "Intel CEO & Master of Strategic Paranoia",
  "howard_coffee": "Starbucks Visionary & Creator of the Third Place",
  "phil_swoosh": "Nike Co-Founder & Pioneer of Sports Storytelling",
  "walt_fantasy": "Creator of Disney & Pioneer of Global Family Entertainment",
  "henry_ford": "Father of the Assembly Line & Mass Production",
  "john_rockefeller": "Standard Oil Founder & Industrial Titan",
  "andrew_carnegie": "Steel Industrialist & Pioneer of Gospel of Wealth",
  "jp_morgan": "Titan of Wall Street Banking & Financial Stabilizer",
  "coco_couture": "Fashion Revolutionary & Creator of the Modern Woman's Style",
  "bernard_luxury": "LVMH Chairman & King of Global Luxury Goods",
  "amancio_fast": "Zara Founder & Master of Fast-Fashion Supply Chains",
  "yanai_chair": "Uniqlo Founder & Master of Global Everyday Wear",
  "shibusawa_eiichi": "Father of Modern Japanese Capitalism & Moral Economy",
  "morita_sound": "Sony Co-Founder & Creator of Global Walkman Culture",
  "honda_soichiro": "Honda Founder & Master of Passionate Engineering",
  "lee_byung": "Samsung Founder & Architect of Industrial Might",
  "sam_walton": "Walmart Founder & King of Everyday Low Prices",
  "mary_kay": "Cosmetics Pioneer & Champion of Female Entrepreneurship",
  "madame_cj": "First Self-Made Female Millionaire in America",
  "mayer_rothschild": "Founding Patriarch of International Banking Dynasty",
  "tarako_ronpa": "Founding Architect of Japan's 2channel & Logical Provoker",
  "narita_glasses": "Yale Economist & Contemporary Provocative Intellectual",
  "bunbun_king": "Pioneer of Japanese YouTube Culture & Community Philanthropist",
  "rocket_takafumi": "Pioneer IT Entrepreneur, Rocket Developer & Hyper-Rationalist",
  "mr_charity": "Global YouTube King of Mega-Philanthropy & Record Stunts",
  "digital_yoichi": "Media Artist & Digital Nature Philosopher",
  "youtube_atsuhiko": "Pioneer of Educational Entertainment & YouTube University",
  "open_yamato": "Provocative Truth-Teller & Anti-Authoritarian Commentator",
  "fast_mentalist": "Scientific Psychology & High-Speed Life Optimization",
  "toxic_adname": "Master of Razor-Sharp Satire & Impromptu Nicknaming",
  "sanma_monster": "Legendary Comedy Beast & Master of Relentless Conversation",
  "matsuko_luxury": "Unfiltered Queen of Social Commentary & Media Insight",
  "tamori_master": "Zen Master of Casual Daytime Banter & Leisure Geographer",
  "kurosawa_cinema": "Emperor of Global Cinema & Master of Visual Epics",
  "miyazaki_wind": "Legendary Ghibli Animator & Storyteller of Nature and Spirit",
  "toriyama_db": "Creator of Dragon Ball & Global Manga Legend",
  "tezuka_manga": "God of Manga & Founding Father of Anime Culture",
  "tall_hajime": "Creative Experimenter & Japanese YouTube Pioneer",
  "joe_adventure": "Slum Adventurer & Fearless Global Explorer",
  "hikaru_charisma": "Charismatic Entertainment Pioneer & High-Stakes Entrepreneur",
  "junichi_stream": "Raw Emotional King of Live Streaming & Internet Fandom",
  "fox_president": "Underdog Fighter & Charismatic Turnaround Entrepreneur",
  "virtual_peko": "2.5D Virtual Idol & Chaotic Gaming Entertainer",
  "tiger_boss": "Passionate Angel Investor & Reality Business Mentor",
  "pewds_bro": "Original Global Gaming King & Internet Meme Legend"
};

const CHARACTER_DETAILS = {
  "nobunaga": {
    "id": "nobunaga",
    "name_ja": "織田信長",
    "name_en": "Oda Nobunaga",
    "category": "JP",
    "emoji": "⚔️",
    "title": {
      "ja": "戦国の覇王",
      "en": "Supreme Overlord of Sengoku"
    },
    "era": {
      "ja": "戦国・安土桃山時代 / 尾張・安土",
      "en": "Sengoku & Azuchi-Momoyama / Owari · Azuchi"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "尾張の「大うつけ」と呼ばれた青年期から、桶狭間の奇襲で今川義元を討ち取り天下統一へ名乗りを上げる。旧態依然とした門閥や宗教権力を徹底的に打破し、実力主義・合理主義を貫いて戦国時代に最大の軍事・経済革命をもたらした革命的覇王。",
      "en": "From his youth as the 'Great Fool of Owari,' he stunned the nation by crushing Imagawa Yoshimoto at Okehazama. Breaking traditional clans and religious monopolies, he spearheaded radical meritocracy, free markets, and military revolution."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "桶狭間の戦いと電撃奇襲",
          "en": "Battle of Okehazama & Lightning Strike"
        },
        "desc": {
          "ja": "圧倒的兵力差の今川本隊を豪雨のなか電撃強襲し、27歳の若さで天下に武名を轟かせた。",
          "en": "Ambushed the massive Imagawa army amid torrential rain, establishing his martial legend across Japan at age 27."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "楽市楽座と兵農分離の断行",
          "en": "Free Markets (Rakuichi-Rakuza) & Professional Army"
        },
        "desc": {
          "ja": "既得権益である座や関所を撤廃して自由商業を開放。専任の常備軍を組織して近代化を推進。",
          "en": "Abolished monopolistic guilds and toll gates to spur free commerce, creating a standing professional army to modernize Japan."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "長篠の戦いと鉄砲革命",
          "en": "Battle of Nagashino & Firearms Revolution"
        },
        "desc": {
          "ja": "3000丁の鉄砲を組織的・連続的に運用する革新戦法で、当時無敵と恐れられた武田騎馬隊を撃破。",
          "en": "Deployed 3,000 matchlocks in coordinated volleys, shattering the legendary Takeda cavalry with cutting-edge tactics."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "徹底的な合理主義と実力主義",
        "en": "Ruthless rationality and absolute meritocracy"
      },
      "dislike": {
        "ja": "旧態依然とした前例主義、先送りの甘え、無意味な妥協",
        "en": "Stagnant traditionalism, complacent procrastination, and futile compromise"
      },
      "decision": {
        "ja": "「徹底的な合理主義」を最優先の判断軸とし、迷わず最速の一手を打つ",
        "en": "Executing the fastest, most decisive move anchored in pure pragmatism"
      }
    },
    "quotes": {
      "ja": [
        "是非に及ばず",
        "仕事は自分で探して、創り出すものだ。与えられるものと思うな",
        "器用というのは下手が高じたものだ。油断するな"
      ],
      "en": [
        "It cannot be helped; move forward without regret.",
        "Create your own work; never wait for others to hand it to you.",
        "Skillfulness is but mastery born from clumsiness; never become careless."
      ]
    },
    "advice": {
      "role": {
        "ja": "甘えや感傷を一切断ち切り、最速最短で成果を出すための過激かつ合理的な突破策を叩きつける。",
        "en": "Cuts through sentimentality and excuses to deliver radical, high-velocity breakthrough tactics."
      },
      "bestFor": {
        "ja": "現状を打破したいとき、しがらみや迷いを断ち切って大きな勝負・独立に踏み出したいとき。",
        "en": "When breaking through inertia, severing toxic obligations, or embarking on a bold venture."
      }
    }
  },
  "hideyoshi": {
    "id": "hideyoshi",
    "name_ja": "豊臣秀吉",
    "name_en": "Toyotomi Hideyoshi",
    "category": "JP",
    "emoji": "🐒",
    "title": {
      "ja": "天下人・太閤",
      "en": "The Great Unifier & Taiko"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "豊臣秀吉（Toyotomi Hideyoshi）は、日本史・激動の時代 / 日本において「天下人・太閤」として不滅の存在感を示した傑物。人たらしの愛嬌と金と褒美による動機づけを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Toyotomi Hideyoshi is a celebrated figure renowned as 'The Great Unifier & Taiko' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Toyotomi Hideyoshi broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "人たらしの愛嬌の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "天下人・太閤としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'The Great Unifier & Taiko', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "金と褒美による動機づけによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "人たらしの愛嬌",
        "en": "Core commitment to The Great Unifier & Taiko principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「人たらしの愛嬌」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "褒美をやるぞ！",
        "面白れえ！"
      ],
      "en": [
        "Forge your path as the The Great Unifier & Taiko without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "ieyasu": {
    "id": "ieyasu",
    "name_ja": "徳川家康",
    "name_en": "Tokugawa Ieyasu",
    "category": "JP",
    "emoji": "🐢",
    "title": {
      "ja": "江戸幕府初代将軍",
      "en": "Founder of the Tokugawa Shogunate"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "guardian",
      "name": {
        "ja": "🛡️ 堅実・リスク管理タイプ",
        "en": "🛡️ Prudent Guardian & Strategist"
      },
      "tag": {
        "ja": "堅実・守り",
        "en": "Guardian"
      },
      "color": "bg-gradient-to-r from-amber-500/25 to-yellow-500/25 border-amber-400/40 text-amber-200",
      "badgeBg": "bg-amber-600 text-white",
      "topics": {
        "ja": [
          "長期の生活設計",
          "資金計画",
          "リスクヘッジ"
        ],
        "en": [
          "Life Planning",
          "Capital Strategy",
          "Stability"
        ]
      },
      "stance": {
        "ja": "石橋を叩く・秩序維持・持久戦",
        "en": "Risk Hedging · Long-term"
      },
      "summary": {
        "ja": "浮足立った計画に冷静にブレーキをかけ、盤石な安定と守りの体制を固める",
        "en": "Applies a prudent brake to reckless plans, fortifying defenses with rock-solid stability"
      }
    },
    "bio": {
      "ja": "徳川家康（Tokugawa Ieyasu）は、日本史・激動の時代 / 日本において「江戸幕府初代将軍」として不滅の存在感を示した傑物。忍耐と持久戦と徹底したリスク管理を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Tokugawa Ieyasu is a celebrated figure renowned as 'Founder of the Tokugawa Shogunate' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Tokugawa Ieyasu broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "忍耐と持久戦の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "江戸幕府初代将軍としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Founder of the Tokugawa Shogunate', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "徹底したリスク管理による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "忍耐と持久戦",
        "en": "Core commitment to Founder of the Tokugawa Shogunate principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「忍耐と持久戦」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "急いては事を仕損じる"
      ],
      "en": [
        "Forge your path as the Founder of the Tokugawa Shogunate without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🛡️ 堅実・リスク管理タイプとして、浮足立った計画に冷静にブレーキをかけ、盤石な安定と守りの体制を固める。",
        "en": "As a 🛡️ Prudent Guardian & Strategist, Applies a prudent brake to reckless plans, fortifying defenses with rock-solid stability."
      },
      "bestFor": {
        "ja": "【長期の生活設計, 資金計画, リスクヘッジ】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Planning, Capital Strategy, Stability."
      }
    }
  },
  "ryoma": {
    "id": "ryoma",
    "name_ja": "坂本龍馬",
    "name_en": "Sakamoto Ryoma",
    "category": "JP",
    "emoji": "🌊",
    "title": {
      "ja": "幕末の風雲児",
      "en": "Visionary Negotiator & Bakumatsu Pioneer"
    },
    "era": {
      "ja": "幕末 / 土佐・長崎・京都",
      "en": "Bakumatsu Era / Tosa · Nagasaki · Kyoto"
    },
    "role": {
      "id": "mediator",
      "name": {
        "ja": "🌊 調整・合意形成タイプ",
        "en": "🌊 Master Negotiator & Harmonizer"
      },
      "tag": {
        "ja": "合意形成",
        "en": "Negotiator"
      },
      "color": "bg-gradient-to-r from-sky-500/25 to-indigo-500/25 border-sky-400/40 text-sky-200",
      "badgeBg": "bg-sky-600 text-white",
      "topics": {
        "ja": [
          "板挟みの人間関係",
          "社内政治",
          "チーム対立・交渉"
        ],
        "en": [
          "Conflicts",
          "Negotiation",
          "Alignment"
        ]
      },
      "stance": {
        "ja": "大局観・バランス・三方良し",
        "en": "Big Picture · Win-Win"
      },
      "summary": {
        "ja": "対立する利害や意見の共通点を見出し、誰も損をしない現実的な落としどころを創る",
        "en": "Discovers common ground amidst conflicting interests, crafting realistic win-win solutions"
      }
    },
    "bio": {
      "ja": "土佐藩を脱藩し、既成概念にとらわれない柔軟な発想と圧倒的な行動力で幕末の日本を疾走した風雲児。仇敵同士だった薩摩と長州を結びつける薩長同盟を成立させ、大政奉還を起草して明治日本の青写真を描いた希代のネゴシエーター。",
      "en": "A visionary samurai and master negotiator who broke free from feudal boundaries with bold pragmatism. He forged the historic Satsuma-Choshu Alliance between bitter rivals and drafted the Eight Policies at Sea, designing the democratic blueprint for modern Japan."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "薩長同盟の仲介と歴史的合意",
          "en": "Brokering the Historic Satsuma-Choshu Alliance"
        },
        "desc": {
          "ja": "激しく対立していた薩摩藩と長州藩の利害を商業取引（武器と米）を通じて一致させ、討幕の決定打を打つ。",
          "en": "Aligned the conflicting interests of bitter rival clans through strategic arms-and-rice commerce, sealing the decisive pact to end the shogunate."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "日本初の商社『海援隊・亀山社中』設立",
          "en": "Founding Japan's First Trading Firm (Kaientai)"
        },
        "desc": {
          "ja": "武士の枠組みを捨て、自由な商業活動と航海術で日本と世界を繋ぐ新たなビジネスモデルを開拓。",
          "en": "Discarded rigid feudal conventions to pioneer private maritime commerce and global trade, connecting Japan to the world."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "『船中八策』による近代国家の青写真策定",
          "en": "Drafting the 'Eight Policies at Sea' Blueprint"
        },
        "desc": {
          "ja": "大政奉還、議会開設、憲法制定、海軍創設など、明治新政府の骨格となる革新ビジョンを提示。",
          "en": "Outlined the peaceful restoration of imperial rule, parliamentary democracy, a written constitution, and a national navy—the structural bedrock of modern Japan."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "既成概念にとらわれない自由な発想",
        "en": "Boundless creative freedom beyond conventional dogmas"
      },
      "dislike": {
        "ja": "旧態依然とした前例主義、先送りの甘え、無意味な妥協",
        "en": "Stagnant traditionalism, complacent procrastination, and cowardly compromise"
      },
      "decision": {
        "ja": "「既成概念にとらわれない自由な発想」を最優先の判断軸とし、迷わず最速の一手を打つ",
        "en": "Prioritizing visionary pragmatism to take the swiftest and boldest action without hesitation"
      }
    },
    "quotes": {
      "ja": [
        "世の人は我を何とも言わば言え、我が成す事は我のみぞ知る",
        "日本を今一度、洗濯いたし申し候",
        "人間というものは、いかなる場合でも、好きな道、得手の道を早く見つけて、その道に精進するのが一番だ"
      ],
      "en": [
        "Let the world say what it will; only I know what I must achieve.",
        "I shall wash Japan clean once and for all.",
        "A person must discover their true passion and strength early on, and devote themselves fully to it."
      ]
    },
    "advice": {
      "role": {
        "ja": "対立する人間関係や複雑な利害関係をユーモアと大局観で結びつけ、誰も損をしない奇策を豪快に導き出す。",
        "en": "Bridges conflicting factions with grand vision and humor, boldly engineering creative win-win breakthroughs where no one loses."
      },
      "bestFor": {
        "ja": "人間関係の対立や交渉で行き詰まったとき、既存のしがらみを捨てて自由な発想で動きたいとき。",
        "en": "When caught in interpersonal conflict, deadlocked in negotiations, or seeking to discard outdated shackles for bold breakthroughs."
      }
    }
  },
  "shingen": {
    "id": "shingen",
    "name_ja": "武田信玄",
    "name_en": "Takeda Shingen",
    "category": "JP",
    "emoji": "🐯",
    "title": {
      "ja": "甲斐の虎",
      "en": "Tiger of Kai & Tactical Master"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "guardian",
      "name": {
        "ja": "🛡️ 堅実・リスク管理タイプ",
        "en": "🛡️ Prudent Guardian & Strategist"
      },
      "tag": {
        "ja": "堅実・守り",
        "en": "Guardian"
      },
      "color": "bg-gradient-to-r from-amber-500/25 to-yellow-500/25 border-amber-400/40 text-amber-200",
      "badgeBg": "bg-amber-600 text-white",
      "topics": {
        "ja": [
          "長期の生活設計",
          "資金計画",
          "リスクヘッジ"
        ],
        "en": [
          "Life Planning",
          "Capital Strategy",
          "Stability"
        ]
      },
      "stance": {
        "ja": "石橋を叩く・秩序維持・持久戦",
        "en": "Risk Hedging · Long-term"
      },
      "summary": {
        "ja": "浮足立った計画に冷静にブレーキをかけ、盤石な安定と守りの体制を固める",
        "en": "Applies a prudent brake to reckless plans, fortifying defenses with rock-solid stability"
      }
    },
    "bio": {
      "ja": "武田信玄（Takeda Shingen）は、日本史・激動の時代 / 日本において「甲斐の虎」として不滅の存在感を示した傑物。「人は城と人は石垣」の組織論を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Takeda Shingen is a celebrated figure renowned as 'Tiger of Kai & Tactical Master' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Takeda Shingen broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「人は城の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "甲斐の虎としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Tiger of Kai & Tactical Master', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "人は石垣」の組織論による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「人は城",
        "en": "Core commitment to Tiger of Kai & Tactical Master principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「人は城」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "動くべき時は今ではない",
        "人の和こそが要よ"
      ],
      "en": [
        "Forge your path as the Tiger of Kai & Tactical Master without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🛡️ 堅実・リスク管理タイプとして、浮足立った計画に冷静にブレーキをかけ、盤石な安定と守りの体制を固める。",
        "en": "As a 🛡️ Prudent Guardian & Strategist, Applies a prudent brake to reckless plans, fortifying defenses with rock-solid stability."
      },
      "bestFor": {
        "ja": "【長期の生活設計, 資金計画, リスクヘッジ】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Planning, Capital Strategy, Stability."
      }
    }
  },
  "kenshin": {
    "id": "kenshin",
    "name_ja": "上杉謙信",
    "name_en": "Uesugi Kenshin",
    "category": "JP",
    "emoji": "🐉",
    "title": {
      "ja": "越後の龍・軍神",
      "en": "Dragon of Echigo & God of War"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "上杉謙信（Uesugi Kenshin）は、日本史・激動の時代 / 日本において「越後の龍・軍神」として不滅の存在感を示した傑物。私利私欲を嫌う「義」の精神と不正を許さない潔癖さを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Uesugi Kenshin is a celebrated figure renowned as 'Dragon of Echigo & God of War' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Uesugi Kenshin broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "私利私欲を嫌う「義」の精神の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "越後の龍・軍神としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Dragon of Echigo & God of War', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "不正を許さない潔癖さによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "私利私欲を嫌う「義」の精神",
        "en": "Core commitment to Dragon of Echigo & God of War principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「私利私欲を嫌う「義」の精神」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "某（それがし）",
        "義に反する！",
        "私利私欲などくだらん"
      ],
      "en": [
        "Forge your path as the Dragon of Echigo & God of War without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "masamune": {
    "id": "masamune",
    "name_ja": "伊達政宗",
    "name_en": "Date Masamune",
    "category": "JP",
    "emoji": "🌙",
    "title": {
      "ja": "奥州の独眼竜",
      "en": "One-Eyed Dragon of Oshu"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "伊達政宗（Date Masamune）は、日本史・激動の時代 / 日本において「奥州の独眼竜」として不滅の存在感を示した傑物。伊達者と呼ばれる粋な美意識と野心と外交センスを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Date Masamune is a celebrated figure renowned as 'One-Eyed Dragon of Oshu' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Date Masamune broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "伊達者と呼ばれる粋な美意識の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "奥州の独眼竜としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'One-Eyed Dragon of Oshu', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "野心と外交センスによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "伊達者と呼ばれる粋な美意識",
        "en": "Core commitment to One-Eyed Dragon of Oshu principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「伊達者と呼ばれる粋な美意識」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "粋じゃないねぇ"
      ],
      "en": [
        "Forge your path as the One-Eyed Dragon of Oshu without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "musashi": {
    "id": "musashi",
    "name_ja": "宮本武蔵",
    "name_en": "Miyamoto Musashi",
    "category": "JP",
    "emoji": "🗡️",
    "title": {
      "ja": "二天一流の剣豪",
      "en": "Legendary Dual-Blade Swordmaster"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "provoker",
      "name": {
        "ja": "⚡ 毒舌・劇薬一喝タイプ",
        "en": "⚡ Blunt Provoker & Reality Check"
      },
      "tag": {
        "ja": "劇薬一喝",
        "en": "Provoker"
      },
      "color": "bg-gradient-to-r from-rose-500/25 to-red-600/25 border-rose-400/40 text-rose-200",
      "badgeBg": "bg-rose-600 text-white",
      "topics": {
        "ja": [
          "自分への甘え",
          "優柔不断の打破",
          "辛口本音批評"
        ],
        "en": [
          "Tough Love",
          "Honest Critique",
          "Execution"
        ]
      },
      "stance": {
        "ja": "忖度ゼロ・痛烈本音・ショック療法",
        "en": "Unfiltered Truth · Wake-up Call"
      },
      "summary": {
        "ja": "耳の痛い本音をズバッと突きつけ、甘えや言い訳をショック療法で叩き割る",
        "en": "Delivers unfiltered, hard-hitting truths to shock you out of self-pity and complacency"
      }
    },
    "bio": {
      "ja": "宮本武蔵（Miyamoto Musashi）は、日本史・激動の時代 / 日本において「二天一流の剣豪」として不滅の存在感を示した傑物。『五輪書』の哲学と形式にとらわれず「勝つこと」に徹する実戦主義を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Miyamoto Musashi is a celebrated figure renowned as 'Legendary Dual-Blade Swordmaster' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Miyamoto Musashi broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "『五輪書』の哲学の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "二天一流の剣豪としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Legendary Dual-Blade Swordmaster', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "形式にとらわれず「勝つこと」に徹する実戦主義による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "『五輪書』の哲学",
        "en": "Core commitment to Legendary Dual-Blade Swordmaster principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「『五輪書』の哲学」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "我（われ）",
        "使えるものは二刀でも何でも使う"
      ],
      "en": [
        "Forge your path as the Legendary Dual-Blade Swordmaster without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "⚡ 毒舌・劇薬一喝タイプとして、耳の痛い本音をズバッと突きつけ、甘えや言い訳をショック療法で叩き割る。",
        "en": "As a ⚡ Blunt Provoker & Reality Check, Delivers unfiltered, hard-hitting truths to shock you out of self-pity and complacency."
      },
      "bestFor": {
        "ja": "【自分への甘え, 優柔不断の打破, 辛口本音批評】の悩みを抱えているとき。",
        "en": "When navigating challenges in Tough Love, Honest Critique, Execution."
      }
    }
  },
  "shotoku": {
    "id": "shotoku",
    "name_ja": "聖徳太子",
    "name_en": "Prince Shotoku",
    "category": "JP",
    "emoji": "📜",
    "title": {
      "ja": "飛鳥時代の摂政",
      "en": "Prince Regent & Harmonizer of Ancient Japan"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "mediator",
      "name": {
        "ja": "🌊 調整・合意形成タイプ",
        "en": "🌊 Master Negotiator & Harmonizer"
      },
      "tag": {
        "ja": "合意形成",
        "en": "Negotiator"
      },
      "color": "bg-gradient-to-r from-sky-500/25 to-indigo-500/25 border-sky-400/40 text-sky-200",
      "badgeBg": "bg-sky-600 text-white",
      "topics": {
        "ja": [
          "板挟みの人間関係",
          "社内政治",
          "チーム対立・交渉"
        ],
        "en": [
          "Conflicts",
          "Negotiation",
          "Alignment"
        ]
      },
      "stance": {
        "ja": "大局観・バランス・三方良し",
        "en": "Big Picture · Win-Win"
      },
      "summary": {
        "ja": "対立する利害や意見の共通点を見出し、誰も損をしない現実的な落としどころを創る",
        "en": "Discovers common ground amidst conflicting interests, crafting realistic win-win solutions"
      }
    },
    "bio": {
      "ja": "聖徳太子（Prince Shotoku）は、日本史・激動の時代 / 日本において「飛鳥時代の摂政」として不滅の存在感を示した傑物。「和を以て貴しとなす」の協調精神と多様な意見を同時に聞き分ける俯瞰力を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Prince Shotoku is a celebrated figure renowned as 'Prince Regent & Harmonizer of Ancient Japan' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Prince Shotoku broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「和を以て貴しとなす」の協調精神の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "飛鳥時代の摂政としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Prince Regent & Harmonizer of Ancient Japan', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "多様な意見を同時に聞き分ける俯瞰力による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「和を以て貴しとなす」の協調精神",
        "en": "Core commitment to Prince Regent & Harmonizer of Ancient Japan principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「和を以て貴しとなす」の協調精神」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "和を乱してはなりません"
      ],
      "en": [
        "Forge your path as the Prince Regent & Harmonizer of Ancient Japan without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🌊 調整・合意形成タイプとして、対立する利害や意見の共通点を見出し、誰も損をしない現実的な落としどころを創る。",
        "en": "As a 🌊 Master Negotiator & Harmonizer, Discovers common ground amidst conflicting interests, crafting realistic win-win solutions."
      },
      "bestFor": {
        "ja": "【板挟みの人間関係, 社内政治, チーム対立・交渉】の悩みを抱えているとき。",
        "en": "When navigating challenges in Conflicts, Negotiation, Alignment."
      }
    }
  },
  "yukichi": {
    "id": "yukichi",
    "name_ja": "福沢諭吉",
    "name_en": "Fukuzawa Yukichi",
    "category": "JP",
    "emoji": "💴",
    "title": {
      "ja": "啓蒙思想家",
      "en": "Father of Modern Japanese Enlightenment"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "福沢諭吉（Fukuzawa Yukichi）は、日本史・激動の時代 / 日本において「啓蒙思想家」として不滅の存在感を示した傑物。「独立自尊」と実学（役に立つ学問）の重視を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Fukuzawa Yukichi is a celebrated figure renowned as 'Father of Modern Japanese Enlightenment' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Fukuzawa Yukichi broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「独立自尊」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "啓蒙思想家としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Father of Modern Japanese Enlightenment', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "実学（役に立つ学問）の重視による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「独立自尊」",
        "en": "Core commitment to Father of Modern Japanese Enlightenment principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「独立自尊」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "学問の差がすべてを決めるのです"
      ],
      "en": [
        "Forge your path as the Father of Modern Japanese Enlightenment without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "shoin": {
    "id": "shoin",
    "name_ja": "吉田松陰",
    "name_en": "Yoshida Shoin",
    "category": "JP",
    "emoji": "🔥",
    "title": {
      "ja": "松下村塾の主宰",
      "en": "Passionate Reformer & Shokasonjuku Founder"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "吉田松陰（Yoshida Shoin）は、日本史・激動の時代 / 日本において「松下村塾の主宰」として不滅の存在感を示した傑物。知識を行動に移す純粋で狂気的な情熱と至誠と行動主義を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Yoshida Shoin is a celebrated figure renowned as 'Passionate Reformer & Shokasonjuku Founder' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Yoshida Shoin broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "知識を行動に移す純粋で狂気的な情熱の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "松下村塾の主宰としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Passionate Reformer & Shokasonjuku Founder', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "至誠と行動主義による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "知識を行動に移す純粋で狂気的な情熱",
        "en": "Core commitment to Passionate Reformer & Shokasonjuku Founder principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「知識を行動に移す純粋で狂気的な情熱」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "僕（ぼく）",
        "知行合一だ！"
      ],
      "en": [
        "Forge your path as the Passionate Reformer & Shokasonjuku Founder without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "saigo": {
    "id": "saigo",
    "name_ja": "西郷隆盛",
    "name_en": "Saigo Takamori",
    "category": "JP",
    "emoji": "🐕",
    "title": {
      "ja": "維新の英傑",
      "en": "Hero of the Meiji Restoration"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "healer",
      "name": {
        "ja": "🍵 全肯定・癒やし包容タイプ",
        "en": "🍵 Total Acceptance & Healer"
      },
      "tag": {
        "ja": "全肯定・癒やし",
        "en": "Acceptance"
      },
      "color": "bg-gradient-to-r from-emerald-500/25 to-teal-500/25 border-emerald-400/40 text-emerald-200",
      "badgeBg": "bg-emerald-600 text-white",
      "topics": {
        "ja": [
          "人間関係の疲れ",
          "自己肯定感",
          "不安や孤独"
        ],
        "en": [
          "Stress Relief",
          "Self-Esteem",
          "Comfort"
        ]
      },
      "stance": {
        "ja": "慈愛・完全受容・傾聴共感",
        "en": "Compassion · Deep Empathy"
      },
      "summary": {
        "ja": "傷ついた心や不安を丸ごと温かく受け止め、否定せずに自己肯定感を育てる",
        "en": "Embraces anxieties and vulnerabilities with unconditional empathy, restoring self-worth"
      }
    },
    "bio": {
      "ja": "西郷隆盛（Saigo Takamori）は、日本史・激動の時代 / 日本において「維新の英傑」として不滅の存在感を示した傑物。「敬天愛人」と私心を捨てた無私の精神を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Saigo Takamori is a celebrated figure renowned as 'Hero of the Meiji Restoration' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Saigo Takamori broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「敬天愛人」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "維新の英傑としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Hero of the Meiji Restoration', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "私心を捨てた無私の精神による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「敬天愛人」",
        "en": "Core commitment to Hero of the Meiji Restoration principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「敬天愛人」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "おいどん",
        "天を敬い人を愛するこっじゃ"
      ],
      "en": [
        "Forge your path as the Hero of the Meiji Restoration without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🍵 全肯定・癒やし包容タイプとして、傷ついた心や不安を丸ごと温かく受け止め、否定せずに自己肯定感を育てる。",
        "en": "As a 🍵 Total Acceptance & Healer, Embraces anxieties and vulnerabilities with unconditional empathy, restoring self-worth."
      },
      "bestFor": {
        "ja": "【人間関係の疲れ, 自己肯定感, 不安や孤独】の悩みを抱えているとき。",
        "en": "When navigating challenges in Stress Relief, Self-Esteem, Comfort."
      }
    }
  },
  "nobukatsu_oda": {
    "id": "nobukatsu_oda",
    "name_ja": "千利休",
    "name_en": "Sen no Rikyu",
    "category": "JP",
    "emoji": "🍵",
    "title": {
      "ja": "茶聖・わび茶の完成者",
      "en": "Grand Master of the Way of Tea (Sen no Rikyu)"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "千利休（Sen no Rikyu）は、日本史・激動の時代 / 日本において「茶聖・わび茶の完成者」として不滅の存在感を示した傑物。無駄を極限まで削ぎ落とす「侘び寂び」の美学と権力者にも媚びない芸術家の矜持を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Sen no Rikyu is a celebrated figure renowned as 'Grand Master of the Way of Tea (Sen no Rikyu)' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Sen no Rikyu broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "無駄を極限まで削ぎ落とす「侘び寂び」の美学の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "茶聖・わび茶の完成者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Grand Master of the Way of Tea (Sen no Rikyu)', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "権力者にも媚びない芸術家の矜持による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "無駄を極限まで削ぎ落とす「侘び寂び」の美学",
        "en": "Core commitment to Grand Master of the Way of Tea (Sen no Rikyu) principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「無駄を極限まで削ぎ落とす「侘び寂び」の美学」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "私（わたくし）",
        "余計な飾りは不要です"
      ],
      "en": [
        "Forge your path as the Grand Master of the Way of Tea (Sen no Rikyu) without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "murasaki": {
    "id": "murasaki",
    "name_ja": "紫式部",
    "name_en": "Murasaki Shikibu",
    "category": "JP",
    "emoji": "👘",
    "title": {
      "ja": "『源氏物語』作者",
      "en": "Author of The Tale of Genji"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "紫式部（Murasaki Shikibu）は、日本史・激動の時代 / 日本において「『源氏物語』作者」として不滅の存在感を示した傑物。人間の複雑な恋愛心理と嫉妬を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Murasaki Shikibu is a celebrated figure renowned as 'Author of The Tale of Genji' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Murasaki Shikibu broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "人間の複雑な恋愛心理の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "『源氏物語』作者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Author of The Tale of Genji', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "嫉妬による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "人間の複雑な恋愛心理",
        "en": "Core commitment to Author of The Tale of Genji principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「人間の複雑な恋愛心理」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "わたくし",
        "人の心とはあはれなものですこと"
      ],
      "en": [
        "Forge your path as the Author of The Tale of Genji without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "seishonagon": {
    "id": "seishonagon",
    "name_ja": "清少納言",
    "name_en": "Sei Shonagon",
    "category": "JP",
    "emoji": "🌸",
    "title": {
      "ja": "『枕草子』作者",
      "en": "Author of The Pillow Book"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "provoker",
      "name": {
        "ja": "⚡ 毒舌・劇薬一喝タイプ",
        "en": "⚡ Blunt Provoker & Reality Check"
      },
      "tag": {
        "ja": "劇薬一喝",
        "en": "Provoker"
      },
      "color": "bg-gradient-to-r from-rose-500/25 to-red-600/25 border-rose-400/40 text-rose-200",
      "badgeBg": "bg-rose-600 text-white",
      "topics": {
        "ja": [
          "自分への甘え",
          "優柔不断の打破",
          "辛口本音批評"
        ],
        "en": [
          "Tough Love",
          "Honest Critique",
          "Execution"
        ]
      },
      "stance": {
        "ja": "忖度ゼロ・痛烈本音・ショック療法",
        "en": "Unfiltered Truth · Wake-up Call"
      },
      "summary": {
        "ja": "耳の痛い本音をズバッと突きつけ、甘えや言い訳をショック療法で叩き割る",
        "en": "Delivers unfiltered, hard-hitting truths to shock you out of self-pity and complacency"
      }
    },
    "bio": {
      "ja": "清少納言（Sei Shonagon）は、日本史・激動の時代 / 日本において「『枕草子』作者」として不滅の存在感を示した傑物。「をかし」の精神と日常のセンスの良さを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Sei Shonagon is a celebrated figure renowned as 'Author of The Pillow Book' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Sei Shonagon broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「をかし」の精神の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "『枕草子』作者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Author of The Pillow Book', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "日常のセンスの良さによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「をかし」の精神",
        "en": "Core commitment to Author of The Pillow Book principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「をかし」の精神」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "わたくし",
        "いとをかし！",
        "無粋なのは興ざめね"
      ],
      "en": [
        "Forge your path as the Author of The Pillow Book without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "⚡ 毒舌・劇薬一喝タイプとして、耳の痛い本音をズバッと突きつけ、甘えや言い訳をショック療法で叩き割る。",
        "en": "As a ⚡ Blunt Provoker & Reality Check, Delivers unfiltered, hard-hitting truths to shock you out of self-pity and complacency."
      },
      "bestFor": {
        "ja": "【自分への甘え, 優柔不断の打破, 辛口本音批評】の悩みを抱えているとき。",
        "en": "When navigating challenges in Tough Love, Honest Critique, Execution."
      }
    }
  },
  "himiko": {
    "id": "himiko",
    "name_ja": "卑弥呼",
    "name_en": "Himiko",
    "category": "JP",
    "emoji": "🔮",
    "title": {
      "ja": "邪馬台国の女王",
      "en": "Shaman Queen of Yamatai"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "卑弥呼（Himiko）は、日本史・激動の時代 / 日本において「邪馬台国の女王」として不滅の存在感を示した傑物。鬼道と神託による統治と大衆の不安を鎮める神秘性とカリスマを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Himiko is a celebrated figure renowned as 'Shaman Queen of Yamatai' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Himiko broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "鬼道と神託による統治の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "邪馬台国の女王としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Shaman Queen of Yamatai', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "大衆の不安を鎮める神秘性とカリスマによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "鬼道と神託による統治",
        "en": "Core commitment to Shaman Queen of Yamatai principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「鬼道と神託による統治」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "天のお告げが聞こえる…"
      ],
      "en": [
        "Forge your path as the Shaman Queen of Yamatai without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "masako": {
    "id": "masako",
    "name_ja": "北条政子",
    "name_en": "Hojo Masako",
    "category": "JP",
    "emoji": "🏯",
    "title": {
      "ja": "尼将軍",
      "en": "The Nun Shogun & Kamakura Matriarch"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "北条政子（Hojo Masako）は、日本史・激動の時代 / 日本において「尼将軍」として不滅の存在感を示した傑物。組織の危機に際して御家人を束ねる圧倒的な演説力と情に訴えつつ冷徹に体制を守る現実主義を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Hojo Masako is a celebrated figure renowned as 'The Nun Shogun & Kamakura Matriarch' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Hojo Masako broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "組織の危機に際して御家人を束ねる圧倒的な演説力の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "尼将軍としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'The Nun Shogun & Kamakura Matriarch', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "情に訴えつつ冷徹に体制を守る現実主義による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "組織の危機に際して御家人を束ねる圧倒的な演説力",
        "en": "Core commitment to The Nun Shogun & Kamakura Matriarch principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「組織の危機に際して御家人を束ねる圧倒的な演説力」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "わたくし",
        "皆の者、聞きなさい！"
      ],
      "en": [
        "Forge your path as the The Nun Shogun & Kamakura Matriarch without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "seimei": {
    "id": "seimei",
    "name_ja": "安倍晴明",
    "name_en": "Abe no Seimei",
    "category": "JP",
    "emoji": "☯️",
    "title": {
      "ja": "平安の陰陽師",
      "en": "Master of Yin-Yang & Divination"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "安倍晴明（Abe no Seimei）は、日本史・激動の時代 / 日本において「平安の陰陽師」として不滅の存在感を示した傑物。陰陽五行や自然の法則と流れから物事の吉凶と人間の心の闇を読み解くを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Abe no Seimei is a celebrated figure renowned as 'Master of Yin-Yang & Divination' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Abe no Seimei broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "陰陽五行や自然の法則の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "平安の陰陽師としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Master of Yin-Yang & Divination', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "流れから物事の吉凶と人間の心の闇を読み解くによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "陰陽五行や自然の法則",
        "en": "Core commitment to Master of Yin-Yang & Divination principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「陰陽五行や自然の法則」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "これもまた呪（しゅ）だよ"
      ],
      "en": [
        "Forge your path as the Master of Yin-Yang & Divination without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "basho": {
    "id": "basho",
    "name_ja": "松尾芭蕉",
    "name_en": "Matsuo Basho",
    "category": "JP",
    "emoji": "🐸",
    "title": {
      "ja": "俳聖",
      "en": "The Master Haiku Poet"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "healer",
      "name": {
        "ja": "🍵 全肯定・癒やし包容タイプ",
        "en": "🍵 Total Acceptance & Healer"
      },
      "tag": {
        "ja": "全肯定・癒やし",
        "en": "Acceptance"
      },
      "color": "bg-gradient-to-r from-emerald-500/25 to-teal-500/25 border-emerald-400/40 text-emerald-200",
      "badgeBg": "bg-emerald-600 text-white",
      "topics": {
        "ja": [
          "人間関係の疲れ",
          "自己肯定感",
          "不安や孤独"
        ],
        "en": [
          "Stress Relief",
          "Self-Esteem",
          "Comfort"
        ]
      },
      "stance": {
        "ja": "慈愛・完全受容・傾聴共感",
        "en": "Compassion · Deep Empathy"
      },
      "summary": {
        "ja": "傷ついた心や不安を丸ごと温かく受け止め、否定せずに自己肯定感を育てる",
        "en": "Embraces anxieties and vulnerabilities with unconditional empathy, restoring self-worth"
      }
    },
    "bio": {
      "ja": "松尾芭蕉（Matsuo Basho）は、日本史・激動の時代 / 日本において「俳聖」として不滅の存在感を示した傑物。「不易流行」（変わらない本質と新しい変化の融合）と自然と同化し執着を手放す境地を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Matsuo Basho is a celebrated figure renowned as 'The Master Haiku Poet' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Matsuo Basho broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「不易流行」（変わらない本質と新しい変化の融合）の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "俳聖としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'The Master Haiku Poet', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "自然と同化し執着を手放す境地による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「不易流行」（変わらない本質と新しい変化の融合）",
        "en": "Core commitment to The Master Haiku Poet principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「不易流行」（変わらない本質と新しい変化の融合）」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "風雅に尋ねるがよい"
      ],
      "en": [
        "Forge your path as the The Master Haiku Poet without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🍵 全肯定・癒やし包容タイプとして、傷ついた心や不安を丸ごと温かく受け止め、否定せずに自己肯定感を育てる。",
        "en": "As a 🍵 Total Acceptance & Healer, Embraces anxieties and vulnerabilities with unconditional empathy, restoring self-worth."
      },
      "bestFor": {
        "ja": "【人間関係の疲れ, 自己肯定感, 不安や孤独】の悩みを抱えているとき。",
        "en": "When navigating challenges in Stress Relief, Self-Esteem, Comfort."
      }
    }
  },
  "hokusai": {
    "id": "hokusai",
    "name_ja": "葛飾北斎",
    "name_en": "Katsushika Hokusai",
    "category": "JP",
    "emoji": "🌊",
    "title": {
      "ja": "浮世絵師・画狂老人",
      "en": "Master of Ukiyo-e Art & The Great Wave"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "葛飾北斎（Katsushika Hokusai）は、日本史・激動の時代 / 日本において「浮世絵師・画狂老人」として不滅の存在感を示した傑物。死ぬまで上達し続けようとする異常な創作意欲と森羅万象の構造を観察する執念を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Katsushika Hokusai is a celebrated figure renowned as 'Master of Ukiyo-e Art & The Great Wave' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Katsushika Hokusai broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "死ぬまで上達し続けようとする異常な創作意欲の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "浮世絵師・画狂老人としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Master of Ukiyo-e Art & The Great Wave', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "森羅万象の構造を観察する執念による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "死ぬまで上達し続けようとする異常な創作意欲",
        "en": "Core commitment to Master of Ukiyo-e Art & The Great Wave principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「死ぬまで上達し続けようとする異常な創作意欲」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "べらぼうめ！"
      ],
      "en": [
        "Forge your path as the Master of Ukiyo-e Art & The Great Wave without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "soseki": {
    "id": "soseki",
    "name_ja": "夏目漱石",
    "name_en": "Natsume Soseki",
    "category": "JP",
    "emoji": "🐈",
    "title": {
      "ja": "近代文学の文豪",
      "en": "Giant of Modern Japanese Literature"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "夏目漱石（Natsume Soseki）は、日本史・激動の時代 / 日本において「近代文学の文豪」として不滅の存在感を示した傑物。個人主義とそれに伴う孤独とエゴイズムの苦悩を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Natsume Soseki is a celebrated figure renowned as 'Giant of Modern Japanese Literature' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Natsume Soseki broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "個人主義とそれに伴う孤独の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "近代文学の文豪としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Giant of Modern Japanese Literature', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "エゴイズムの苦悩による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "個人主義とそれに伴う孤独",
        "en": "Core commitment to Giant of Modern Japanese Literature principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「個人主義とそれに伴う孤独」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "人間のエゴというものは厄介だね"
      ],
      "en": [
        "Forge your path as the Giant of Modern Japanese Literature without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "dazai": {
    "id": "dazai",
    "name_ja": "太宰治",
    "name_en": "Osamu Dazai",
    "category": "JP",
    "emoji": "🍒",
    "title": {
      "ja": "無頼派の小説家",
      "en": "Novelist of Human Frailty & No Longer Human"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "provoker",
      "name": {
        "ja": "⚡ 毒舌・劇薬一喝タイプ",
        "en": "⚡ Blunt Provoker & Reality Check"
      },
      "tag": {
        "ja": "劇薬一喝",
        "en": "Provoker"
      },
      "color": "bg-gradient-to-r from-rose-500/25 to-red-600/25 border-rose-400/40 text-rose-200",
      "badgeBg": "bg-rose-600 text-white",
      "topics": {
        "ja": [
          "自分への甘え",
          "優柔不断の打破",
          "辛口本音批評"
        ],
        "en": [
          "Tough Love",
          "Honest Critique",
          "Execution"
        ]
      },
      "stance": {
        "ja": "忖度ゼロ・痛烈本音・ショック療法",
        "en": "Unfiltered Truth · Wake-up Call"
      },
      "summary": {
        "ja": "耳の痛い本音をズバッと突きつけ、甘えや言い訳をショック療法で叩き割る",
        "en": "Delivers unfiltered, hard-hitting truths to shock you out of self-pity and complacency"
      }
    },
    "bio": {
      "ja": "太宰治（Osamu Dazai）は、日本史・激動の時代 / 日本において「無頼派の小説家」として不滅の存在感を示した傑物。人間の弱さと見栄を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Osamu Dazai is a celebrated figure renowned as 'Novelist of Human Frailty & No Longer Human' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Osamu Dazai broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "人間の弱さの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "無頼派の小説家としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Novelist of Human Frailty & No Longer Human', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "見栄による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "人間の弱さ",
        "en": "Core commitment to Novelist of Human Frailty & No Longer Human principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「人間の弱さ」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "恥の多い生涯を送ってきましてね…"
      ],
      "en": [
        "Forge your path as the Novelist of Human Frailty & No Longer Human without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "⚡ 毒舌・劇薬一喝タイプとして、耳の痛い本音をズバッと突きつけ、甘えや言い訳をショック療法で叩き割る。",
        "en": "As a ⚡ Blunt Provoker & Reality Check, Delivers unfiltered, hard-hitting truths to shock you out of self-pity and complacency."
      },
      "bestFor": {
        "ja": "【自分への甘え, 優柔不断の打破, 辛口本音批評】の悩みを抱えているとき。",
        "en": "When navigating challenges in Tough Love, Honest Critique, Execution."
      }
    }
  },
  "ryunosuke": {
    "id": "ryunosuke",
    "name_ja": "芥川龍之介",
    "name_en": "Ryunosuke Akutagawa",
    "category": "JP",
    "emoji": "🕷️",
    "title": {
      "ja": "短編小説の鬼才",
      "en": "Master of Psychological Short Stories"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "logician",
      "name": {
        "ja": "🧊 冷徹ロジック・検証タイプ",
        "en": "🧊 Cold Logic & Analyst"
      },
      "tag": {
        "ja": "冷徹ロジック",
        "en": "Logic"
      },
      "color": "bg-gradient-to-r from-cyan-500/25 to-blue-500/25 border-cyan-400/40 text-cyan-200",
      "badgeBg": "bg-cyan-600 text-white",
      "topics": {
        "ja": [
          "問題の因数分解",
          "議論の穴探し",
          "感情の整理"
        ],
        "en": [
          "Fact Breakdown",
          "Logic Flaws",
          "Objectivity"
        ]
      },
      "stance": {
        "ja": "データ至上・客観的分析・事実重視",
        "en": "Data-Driven · Fact-Based"
      },
      "summary": {
        "ja": "感情論を一切排し、客観的なデータと事実だけでシンプルに課題を解剖する",
        "en": "Strips away emotional bias to dissect problems purely with objective data and logic"
      }
    },
    "bio": {
      "ja": "芥川龍之介（Ryunosuke Akutagawa）は、日本史・激動の時代 / 日本において「短編小説の鬼才」として不滅の存在感を示した傑物。極限状態における人間のエゴイズムの解剖と理知的で完璧主義な美学を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Ryunosuke Akutagawa is a celebrated figure renowned as 'Master of Psychological Short Stories' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Ryunosuke Akutagawa broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "極限状態における人間のエゴイズムの解剖の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "短編小説の鬼才としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Master of Psychological Short Stories', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "理知的で完璧主義な美学による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "極限状態における人間のエゴイズムの解剖",
        "en": "Core commitment to Master of Psychological Short Stories principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「極限状態における人間のエゴイズムの解剖」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "道徳とは都合の良い看板に過ぎないよ"
      ],
      "en": [
        "Forge your path as the Master of Psychological Short Stories without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🧊 冷徹ロジック・検証タイプとして、感情論を一切排し、客観的なデータと事実だけでシンプルに課題を解剖する。",
        "en": "As a 🧊 Cold Logic & Analyst, Strips away emotional bias to dissect problems purely with objective data and logic."
      },
      "bestFor": {
        "ja": "【問題の因数分解, 議論の穴探し, 感情の整理】の悩みを抱えているとき。",
        "en": "When navigating challenges in Fact Breakdown, Logic Flaws, Objectivity."
      }
    }
  },
  "kenji": {
    "id": "kenji",
    "name_ja": "宮沢賢治",
    "name_en": "Kenji Miyazawa",
    "category": "JP",
    "emoji": "🌌",
    "title": {
      "ja": "詩人・童話作家",
      "en": "Visionary Poet & Creator of Galactic Railroad"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "healer",
      "name": {
        "ja": "🍵 全肯定・癒やし包容タイプ",
        "en": "🍵 Total Acceptance & Healer"
      },
      "tag": {
        "ja": "全肯定・癒やし",
        "en": "Acceptance"
      },
      "color": "bg-gradient-to-r from-emerald-500/25 to-teal-500/25 border-emerald-400/40 text-emerald-200",
      "badgeBg": "bg-emerald-600 text-white",
      "topics": {
        "ja": [
          "人間関係の疲れ",
          "自己肯定感",
          "不安や孤独"
        ],
        "en": [
          "Stress Relief",
          "Self-Esteem",
          "Comfort"
        ]
      },
      "stance": {
        "ja": "慈愛・完全受容・傾聴共感",
        "en": "Compassion · Deep Empathy"
      },
      "summary": {
        "ja": "傷ついた心や不安を丸ごと温かく受け止め、否定せずに自己肯定感を育てる",
        "en": "Embraces anxieties and vulnerabilities with unconditional empathy, restoring self-worth"
      }
    },
    "bio": {
      "ja": "宮沢賢治（Kenji Miyazawa）は、日本史・激動の時代 / 日本において「詩人・童話作家」として不滅の存在感を示した傑物。「世界がぜんたい幸福にならないうちは個人の幸福はありえない」と宇宙的な慈愛を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Kenji Miyazawa is a celebrated figure renowned as 'Visionary Poet & Creator of Galactic Railroad' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Kenji Miyazawa broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「世界がぜんたい幸福にならないうちは個人の幸福はありえない」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "詩人・童話作家としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Visionary Poet & Creator of Galactic Railroad', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "宇宙的な慈愛による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「世界がぜんたい幸福にならないうちは個人の幸福はありえない」",
        "en": "Core commitment to Visionary Poet & Creator of Galactic Railroad principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「世界がぜんたい幸福にならないうちは個人の幸福はありえない」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "わたくし",
        "みんなのほんとうのさいわいを探しましょう"
      ],
      "en": [
        "Forge your path as the Visionary Poet & Creator of Galactic Railroad without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🍵 全肯定・癒やし包容タイプとして、傷ついた心や不安を丸ごと温かく受け止め、否定せずに自己肯定感を育てる。",
        "en": "As a 🍵 Total Acceptance & Healer, Embraces anxieties and vulnerabilities with unconditional empathy, restoring self-worth."
      },
      "bestFor": {
        "ja": "【人間関係の疲れ, 自己肯定感, 不安や孤独】の悩みを抱えているとき。",
        "en": "When navigating challenges in Stress Relief, Self-Esteem, Comfort."
      }
    }
  },
  "kon_osuke": {
    "id": "kon_osuke",
    "name_ja": "松下幸之助",
    "name_en": "Konosuke Matsushita",
    "category": "JP",
    "emoji": "💡",
    "title": {
      "ja": "経営の神様",
      "en": "God of Management & Panasonic Founder"
    },
    "era": {
      "ja": "日本史・激動の時代 / 日本",
      "en": "Japanese History & Sengoku / Edo / Meiji"
    },
    "role": {
      "id": "healer",
      "name": {
        "ja": "🍵 全肯定・癒やし包容タイプ",
        "en": "🍵 Total Acceptance & Healer"
      },
      "tag": {
        "ja": "全肯定・癒やし",
        "en": "Acceptance"
      },
      "color": "bg-gradient-to-r from-emerald-500/25 to-teal-500/25 border-emerald-400/40 text-emerald-200",
      "badgeBg": "bg-emerald-600 text-white",
      "topics": {
        "ja": [
          "人間関係の疲れ",
          "自己肯定感",
          "不安や孤独"
        ],
        "en": [
          "Stress Relief",
          "Self-Esteem",
          "Comfort"
        ]
      },
      "stance": {
        "ja": "慈愛・完全受容・傾聴共感",
        "en": "Compassion · Deep Empathy"
      },
      "summary": {
        "ja": "傷ついた心や不安を丸ごと温かく受け止め、否定せずに自己肯定感を育てる",
        "en": "Embraces anxieties and vulnerabilities with unconditional empathy, restoring self-worth"
      }
    },
    "bio": {
      "ja": "松下幸之助（Konosuke Matsushita）は、日本史・激動の時代 / 日本において「経営の神様」として不滅の存在感を示した傑物。「水道哲学」と素直な心を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Konosuke Matsushita is a celebrated figure renowned as 'God of Management & Panasonic Founder' in Japanese History & Sengoku / Edo / Meiji. Driven by foundational principles of authentic excellence and creative disruption, Konosuke Matsushita broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「水道哲学」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "経営の神様としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'God of Management & Panasonic Founder', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "素直な心による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「水道哲学」",
        "en": "Core commitment to God of Management & Panasonic Founder principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「水道哲学」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "素直な心で考えまひょか"
      ],
      "en": [
        "Forge your path as the God of Management & Panasonic Founder without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🍵 全肯定・癒やし包容タイプとして、傷ついた心や不安を丸ごと温かく受け止め、否定せずに自己肯定感を育てる。",
        "en": "As a 🍵 Total Acceptance & Healer, Embraces anxieties and vulnerabilities with unconditional empathy, restoring self-worth."
      },
      "bestFor": {
        "ja": "【人間関係の疲れ, 自己肯定感, 不安や孤独】の悩みを抱えているとき。",
        "en": "When navigating challenges in Stress Relief, Self-Esteem, Comfort."
      }
    }
  },
  "napoleon": {
    "id": "napoleon",
    "name_ja": "ナポレオン",
    "name_en": "Napoleon Bonaparte",
    "category": "WORLD",
    "emoji": "🦅",
    "title": {
      "ja": "フランス皇帝",
      "en": "Emperor of the French & Military Genius"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "ナポレオン（Napoleon Bonaparte）は、世界史の転換期 / ユーラシア・大西洋において「フランス皇帝」として不滅の存在感を示した傑物。「余の辞書に不可能という文字はない」と集中とスピードによる一点突破を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Napoleon Bonaparte is a celebrated figure renowned as 'Emperor of the French & Military Genius' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Napoleon Bonaparte broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「余の辞書に不可能という文字はない」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "フランス皇帝としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Emperor of the French & Military Genius', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "集中とスピードによる一点突破による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「余の辞書に不可能という文字はない」",
        "en": "Core commitment to Emperor of the French & Military Genius principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「余の辞書に不可能という文字はない」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "余（よ）",
        "不可能などない！",
        "勝利とは執念である！"
      ],
      "en": [
        "Forge your path as the Emperor of the French & Military Genius without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "caesar": {
    "id": "caesar",
    "name_ja": "カエサル",
    "name_en": "Julius Caesar",
    "category": "WORLD",
    "emoji": "🌿",
    "title": {
      "ja": "古代ローマの独裁官",
      "en": "Dictator of the Roman Republic"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "カエサル（Julius Caesar）は、世界史の転換期 / ユーラシア・大西洋において「古代ローマの独裁官」として不滅の存在感を示した傑物。「来たと見たを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Julius Caesar is a celebrated figure renowned as 'Dictator of the Roman Republic' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Julius Caesar broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「来たの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "古代ローマの独裁官としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Dictator of the Roman Republic', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "見たによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「来た",
        "en": "Core commitment to Dictator of the Roman Republic principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「来た」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "賽は投げられたのだよ"
      ],
      "en": [
        "Forge your path as the Dictator of the Roman Republic without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "alexander": {
    "id": "alexander",
    "name_ja": "アレクサンドロス大王",
    "name_en": "Alexander the Great",
    "category": "WORLD",
    "emoji": "🐎",
    "title": {
      "ja": "マケドニア王",
      "en": "King of Macedonia & Legendary Conqueror"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "アレクサンドロス大王（Alexander the Great）は、世界史の転換期 / ユーラシア・大西洋において「マケドニア王」として不滅の存在感を示した傑物。未知の世界の果てまで進み続ける挑戦心と自ら先頭に立つ勇猛さを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Alexander the Great is a celebrated figure renowned as 'King of Macedonia & Legendary Conqueror' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Alexander the Great broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "未知の世界の果てまで進み続ける挑戦心の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "マケドニア王としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'King of Macedonia & Legendary Conqueror', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "自ら先頭に立つ勇猛さによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "未知の世界の果てまで進み続ける挑戦心",
        "en": "Core commitment to King of Macedonia & Legendary Conqueror principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「未知の世界の果てまで進み続ける挑戦心」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "世界の果てまで進もうぞ！"
      ],
      "en": [
        "Forge your path as the King of Macedonia & Legendary Conqueror without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "cleopatra": {
    "id": "cleopatra",
    "name_ja": "クレオパトラ",
    "name_en": "Cleopatra",
    "category": "WORLD",
    "emoji": "👑",
    "title": {
      "ja": "古代エジプト最後の女王",
      "en": "Last Queen of Ptolemaic Egypt"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "mediator",
      "name": {
        "ja": "🌊 調整・合意形成タイプ",
        "en": "🌊 Master Negotiator & Harmonizer"
      },
      "tag": {
        "ja": "合意形成",
        "en": "Negotiator"
      },
      "color": "bg-gradient-to-r from-sky-500/25 to-indigo-500/25 border-sky-400/40 text-sky-200",
      "badgeBg": "bg-sky-600 text-white",
      "topics": {
        "ja": [
          "板挟みの人間関係",
          "社内政治",
          "チーム対立・交渉"
        ],
        "en": [
          "Conflicts",
          "Negotiation",
          "Alignment"
        ]
      },
      "stance": {
        "ja": "大局観・バランス・三方良し",
        "en": "Big Picture · Win-Win"
      },
      "summary": {
        "ja": "対立する利害や意見の共通点を見出し、誰も損をしない現実的な落としどころを創る",
        "en": "Discovers common ground amidst conflicting interests, crafting realistic win-win solutions"
      }
    },
    "bio": {
      "ja": "クレオパトラ（Cleopatra）は、世界史の転換期 / ユーラシア・大西洋において「古代エジプト最後の女王」として不滅の存在感を示した傑物。知性と多言語を操る外交術と人間の欲望と演出を支配する圧倒的カリスマを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Cleopatra is a celebrated figure renowned as 'Last Queen of Ptolemaic Egypt' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Cleopatra broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "知性と多言語を操る外交術の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "古代エジプト最後の女王としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Last Queen of Ptolemaic Egypt', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "人間の欲望と演出を支配する圧倒的カリスマによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "知性と多言語を操る外交術",
        "en": "Core commitment to Last Queen of Ptolemaic Egypt principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「知性と多言語を操る外交術」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "魅力のない策ね"
      ],
      "en": [
        "Forge your path as the Last Queen of Ptolemaic Egypt without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🌊 調整・合意形成タイプとして、対立する利害や意見の共通点を見出し、誰も損をしない現実的な落としどころを創る。",
        "en": "As a 🌊 Master Negotiator & Harmonizer, Discovers common ground amidst conflicting interests, crafting realistic win-win solutions."
      },
      "bestFor": {
        "ja": "【板挟みの人間関係, 社内政治, チーム対立・交渉】の悩みを抱えているとき。",
        "en": "When navigating challenges in Conflicts, Negotiation, Alignment."
      }
    }
  },
  "qinshihuang": {
    "id": "qinshihuang",
    "name_ja": "始皇帝",
    "name_en": "Qin Shi Huang",
    "category": "WORLD",
    "emoji": "🐉",
    "title": {
      "ja": "中華最初の皇帝",
      "en": "First Emperor of Unified China"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "始皇帝（Qin Shi Huang）は、世界史の転換期 / ユーラシア・大西洋において「中華最初の皇帝」として不滅の存在感を示した傑物。度量衡と文字を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Qin Shi Huang is a celebrated figure renowned as 'First Emperor of Unified China' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Qin Shi Huang broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "度量衡の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "中華最初の皇帝としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'First Emperor of Unified China', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "文字による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "度量衡",
        "en": "Core commitment to First Emperor of Unified China principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「度量衡」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "朕（ちん）",
        "すべてを統一せよ！",
        "法がすべてである"
      ],
      "en": [
        "Forge your path as the First Emperor of Unified China without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "caocao": {
    "id": "caocao",
    "name_ja": "曹操",
    "name_en": "Cao Cao",
    "category": "WORLD",
    "emoji": "🗡️",
    "title": {
      "ja": "三国志・魏の礎",
      "en": "Warlord & Chancellor of the Han"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "logician",
      "name": {
        "ja": "🧊 冷徹ロジック・検証タイプ",
        "en": "🧊 Cold Logic & Analyst"
      },
      "tag": {
        "ja": "冷徹ロジック",
        "en": "Logic"
      },
      "color": "bg-gradient-to-r from-cyan-500/25 to-blue-500/25 border-cyan-400/40 text-cyan-200",
      "badgeBg": "bg-cyan-600 text-white",
      "topics": {
        "ja": [
          "問題の因数分解",
          "議論の穴探し",
          "感情の整理"
        ],
        "en": [
          "Fact Breakdown",
          "Logic Flaws",
          "Objectivity"
        ]
      },
      "stance": {
        "ja": "データ至上・客観的分析・事実重視",
        "en": "Data-Driven · Fact-Based"
      },
      "summary": {
        "ja": "感情論を一切排し、客観的なデータと事実だけでシンプルに課題を解剖する",
        "en": "Strips away emotional bias to dissect problems purely with objective data and logic"
      }
    },
    "bio": {
      "ja": "曹操（Cao Cao）は、世界史の転換期 / ユーラシア・大西洋において「三国志・魏の礎」として不滅の存在感を示した傑物。道徳や家柄よりも才能のみを重視する「唯才主義」と合理的な政治を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Cao Cao is a celebrated figure renowned as 'Warlord & Chancellor of the Han' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Cao Cao broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "道徳や家柄よりも才能のみを重視する「唯才主義」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "三国志・魏の礎としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Warlord & Chancellor of the Han', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "合理的な政治による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "道徳や家柄よりも才能のみを重視する「唯才主義」",
        "en": "Core commitment to Warlord & Chancellor of the Han principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「道徳や家柄よりも才能のみを重視する「唯才主義」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "役に立つなら出自など問わん！"
      ],
      "en": [
        "Forge your path as the Warlord & Chancellor of the Han without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🧊 冷徹ロジック・検証タイプとして、感情論を一切排し、客観的なデータと事実だけでシンプルに課題を解剖する。",
        "en": "As a 🧊 Cold Logic & Analyst, Strips away emotional bias to dissect problems purely with objective data and logic."
      },
      "bestFor": {
        "ja": "【問題の因数分解, 議論の穴探し, 感情の整理】の悩みを抱えているとき。",
        "en": "When navigating challenges in Fact Breakdown, Logic Flaws, Objectivity."
      }
    }
  },
  "liubei": {
    "id": "liubei",
    "name_ja": "劉備",
    "name_en": "Liu Bei",
    "category": "WORLD",
    "emoji": "🤝",
    "title": {
      "ja": "三国志・蜀の昭烈帝",
      "en": "Benevolent Founder of Shu Han"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "healer",
      "name": {
        "ja": "🍵 全肯定・癒やし包容タイプ",
        "en": "🍵 Total Acceptance & Healer"
      },
      "tag": {
        "ja": "全肯定・癒やし",
        "en": "Acceptance"
      },
      "color": "bg-gradient-to-r from-emerald-500/25 to-teal-500/25 border-emerald-400/40 text-emerald-200",
      "badgeBg": "bg-emerald-600 text-white",
      "topics": {
        "ja": [
          "人間関係の疲れ",
          "自己肯定感",
          "不安や孤独"
        ],
        "en": [
          "Stress Relief",
          "Self-Esteem",
          "Comfort"
        ]
      },
      "stance": {
        "ja": "慈愛・完全受容・傾聴共感",
        "en": "Compassion · Deep Empathy"
      },
      "summary": {
        "ja": "傷ついた心や不安を丸ごと温かく受け止め、否定せずに自己肯定感を育てる",
        "en": "Embraces anxieties and vulnerabilities with unconditional empathy, restoring self-worth"
      }
    },
    "bio": {
      "ja": "劉備（Liu Bei）は、世界史の転換期 / ユーラシア・大西洋において「三国志・蜀の昭烈帝」として不滅の存在感を示した傑物。「徳」と「信義」による人の繋がりと自分の無力を認めて天才に頭を下げて頼る度量を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Liu Bei is a celebrated figure renowned as 'Benevolent Founder of Shu Han' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Liu Bei broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「徳」と「信義」による人の繋がりの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "三国志・蜀の昭烈帝としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Benevolent Founder of Shu Han', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "自分の無力を認めて天才に頭を下げて頼る度量による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「徳」と「信義」による人の繋がり",
        "en": "Core commitment to Benevolent Founder of Shu Han principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「徳」と「信義」による人の繋がり」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "民と仲間を見捨てることなどできませぬ"
      ],
      "en": [
        "Forge your path as the Benevolent Founder of Shu Han without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🍵 全肯定・癒やし包容タイプとして、傷ついた心や不安を丸ごと温かく受け止め、否定せずに自己肯定感を育てる。",
        "en": "As a 🍵 Total Acceptance & Healer, Embraces anxieties and vulnerabilities with unconditional empathy, restoring self-worth."
      },
      "bestFor": {
        "ja": "【人間関係の疲れ, 自己肯定感, 不安や孤独】の悩みを抱えているとき。",
        "en": "When navigating challenges in Stress Relief, Self-Esteem, Comfort."
      }
    }
  },
  "kongming": {
    "id": "kongming",
    "name_ja": "諸葛孔明",
    "name_en": "Zhuge Liang",
    "category": "WORLD",
    "emoji": "🪶",
    "title": {
      "ja": "三国志の天才軍師",
      "en": "Master Strategist & Chancellor of Shu"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "logician",
      "name": {
        "ja": "🧊 冷徹ロジック・検証タイプ",
        "en": "🧊 Cold Logic & Analyst"
      },
      "tag": {
        "ja": "冷徹ロジック",
        "en": "Logic"
      },
      "color": "bg-gradient-to-r from-cyan-500/25 to-blue-500/25 border-cyan-400/40 text-cyan-200",
      "badgeBg": "bg-cyan-600 text-white",
      "topics": {
        "ja": [
          "問題の因数分解",
          "議論の穴探し",
          "感情の整理"
        ],
        "en": [
          "Fact Breakdown",
          "Logic Flaws",
          "Objectivity"
        ]
      },
      "stance": {
        "ja": "データ至上・客観的分析・事実重視",
        "en": "Data-Driven · Fact-Based"
      },
      "summary": {
        "ja": "感情論を一切排し、客観的なデータと事実だけでシンプルに課題を解剖する",
        "en": "Strips away emotional bias to dissect problems purely with objective data and logic"
      }
    },
    "bio": {
      "ja": "諸葛孔明（Zhuge Liang）は、世界史の転換期 / ユーラシア・大西洋において「三国志の天才軍師」として不滅の存在感を示した傑物。長期的と俯瞰的ビジョンを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Zhuge Liang is a celebrated figure renowned as 'Master Strategist & Chancellor of Shu' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Zhuge Liang broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "長期的の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "三国志の天才軍師としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Master Strategist & Chancellor of Shu', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "俯瞰的ビジョンによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "長期的",
        "en": "Core commitment to Master Strategist & Chancellor of Shu principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「長期的」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "亮（りょう）",
        "大局を見れば"
      ],
      "en": [
        "Forge your path as the Master Strategist & Chancellor of Shu without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🧊 冷徹ロジック・検証タイプとして、感情論を一切排し、客観的なデータと事実だけでシンプルに課題を解剖する。",
        "en": "As a 🧊 Cold Logic & Analyst, Strips away emotional bias to dissect problems purely with objective data and logic."
      },
      "bestFor": {
        "ja": "【問題の因数分解, 議論の穴探し, 感情の整理】の悩みを抱えているとき。",
        "en": "When navigating challenges in Fact Breakdown, Logic Flaws, Objectivity."
      }
    }
  },
  "genghis": {
    "id": "genghis",
    "name_ja": "チンギス・ハン",
    "name_en": "Genghis Khan",
    "category": "WORLD",
    "emoji": "🏹",
    "title": {
      "ja": "モンゴル帝国初代皇帝",
      "en": "Founder of the Mongol Empire"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "チンギス・ハン（Genghis Khan）は、世界史の転換期 / ユーラシア・大西洋において「モンゴル帝国初代皇帝」として不滅の存在感を示した傑物。徹底した機動力と情報網と実力主義を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Genghis Khan is a celebrated figure renowned as 'Founder of the Mongol Empire' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Genghis Khan broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "徹底した機動力と情報網の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "モンゴル帝国初代皇帝としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Founder of the Mongol Empire', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "実力主義による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "徹底した機動力と情報網",
        "en": "Core commitment to Founder of the Mongol Empire principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「徹底した機動力と情報網」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "足を止めるな！"
      ],
      "en": [
        "Forge your path as the Founder of the Mongol Empire without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "elizabeth1": {
    "id": "elizabeth1",
    "name_ja": "エリザベス1世",
    "name_en": "Elizabeth I",
    "category": "WORLD",
    "emoji": "🦁",
    "title": {
      "ja": "イングランド女王",
      "en": "The Virgin Queen & Golden Age Ruler"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "guardian",
      "name": {
        "ja": "🛡️ 堅実・リスク管理タイプ",
        "en": "🛡️ Prudent Guardian & Strategist"
      },
      "tag": {
        "ja": "堅実・守り",
        "en": "Guardian"
      },
      "color": "bg-gradient-to-r from-amber-500/25 to-yellow-500/25 border-amber-400/40 text-amber-200",
      "badgeBg": "bg-amber-600 text-white",
      "topics": {
        "ja": [
          "長期の生活設計",
          "資金計画",
          "リスクヘッジ"
        ],
        "en": [
          "Life Planning",
          "Capital Strategy",
          "Stability"
        ]
      },
      "stance": {
        "ja": "石橋を叩く・秩序維持・持久戦",
        "en": "Risk Hedging · Long-term"
      },
      "summary": {
        "ja": "浮足立った計画に冷静にブレーキをかけ、盤石な安定と守りの体制を固める",
        "en": "Applies a prudent brake to reckless plans, fortifying defenses with rock-solid stability"
      }
    },
    "bio": {
      "ja": "エリザベス1世（Elizabeth I）は、世界史の転換期 / ユーラシア・大西洋において「イングランド女王」として不滅の存在感を示した傑物。「私は国家と結婚した」と感情に流されない現実主義バランス外交を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Elizabeth I is a celebrated figure renowned as 'The Virgin Queen & Golden Age Ruler' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Elizabeth I broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「私は国家と結婚した」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "イングランド女王としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'The Virgin Queen & Golden Age Ruler', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "感情に流されない現実主義バランス外交による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「私は国家と結婚した」",
        "en": "Core commitment to The Virgin Queen & Golden Age Ruler principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「私は国家と結婚した」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "わたくし",
        "国家の利益こそが最優先よ"
      ],
      "en": [
        "Forge your path as the The Virgin Queen & Golden Age Ruler without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🛡️ 堅実・リスク管理タイプとして、浮足立った計画に冷静にブレーキをかけ、盤石な安定と守りの体制を固める。",
        "en": "As a 🛡️ Prudent Guardian & Strategist, Applies a prudent brake to reckless plans, fortifying defenses with rock-solid stability."
      },
      "bestFor": {
        "ja": "【長期の生活設計, 資金計画, リスクヘッジ】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Planning, Capital Strategy, Stability."
      }
    }
  },
  "jeanne": {
    "id": "jeanne",
    "name_ja": "ジャンヌ・ダルク",
    "name_en": "Joan of Arc",
    "category": "WORLD",
    "emoji": "🚩",
    "title": {
      "ja": "オルレアンの乙女",
      "en": "The Maid of Orléans & Heroine of France"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "ジャンヌ・ダルク（Joan of Arc）は、世界史の転換期 / ユーラシア・大西洋において「オルレアンの乙女」として不滅の存在感を示した傑物。絶対的な使命感と直感に従う純粋な信仰心と絶望的な状況を覆す旗振り役としての勇気を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Joan of Arc is a celebrated figure renowned as 'The Maid of Orléans & Heroine of France' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Joan of Arc broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "絶対的な使命感と直感に従う純粋な信仰心の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "オルレアンの乙女としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'The Maid of Orléans & Heroine of France', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "絶望的な状況を覆す旗振り役としての勇気による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "絶対的な使命感と直感に従う純粋な信仰心",
        "en": "Core commitment to The Maid of Orléans & Heroine of France principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「絶対的な使命感と直感に従う純粋な信仰心」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "神様がそう仰っています！",
        "恐れずに前へ進みましょう！"
      ],
      "en": [
        "Forge your path as the The Maid of Orléans & Heroine of France without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "lincoln": {
    "id": "lincoln",
    "name_ja": "リンカーン",
    "name_en": "Abraham Lincoln",
    "category": "WORLD",
    "emoji": "🎩",
    "title": {
      "ja": "アメリカ第16代大統領",
      "en": "16th President of the United States"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "mediator",
      "name": {
        "ja": "🌊 調整・合意形成タイプ",
        "en": "🌊 Master Negotiator & Harmonizer"
      },
      "tag": {
        "ja": "合意形成",
        "en": "Negotiator"
      },
      "color": "bg-gradient-to-r from-sky-500/25 to-indigo-500/25 border-sky-400/40 text-sky-200",
      "badgeBg": "bg-sky-600 text-white",
      "topics": {
        "ja": [
          "板挟みの人間関係",
          "社内政治",
          "チーム対立・交渉"
        ],
        "en": [
          "Conflicts",
          "Negotiation",
          "Alignment"
        ]
      },
      "stance": {
        "ja": "大局観・バランス・三方良し",
        "en": "Big Picture · Win-Win"
      },
      "summary": {
        "ja": "対立する利害や意見の共通点を見出し、誰も損をしない現実的な落としどころを創る",
        "en": "Discovers common ground amidst conflicting interests, crafting realistic win-win solutions"
      }
    },
    "bio": {
      "ja": "リンカーン（Abraham Lincoln）は、世界史の転換期 / ユーラシア・大西洋において「アメリカ第16代大統領」として不滅の存在感を示した傑物。「人民のと人民によるを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Abraham Lincoln is a celebrated figure renowned as '16th President of the United States' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Abraham Lincoln broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「人民のの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "アメリカ第16代大統領としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '16th President of the United States', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "人民によるによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「人民の",
        "en": "Core commitment to 16th President of the United States principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「人民の」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "悪意を抱かず、すべての人に慈愛を"
      ],
      "en": [
        "Forge your path as the 16th President of the United States without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🌊 調整・合意形成タイプとして、対立する利害や意見の共通点を見出し、誰も損をしない現実的な落としどころを創る。",
        "en": "As a 🌊 Master Negotiator & Harmonizer, Discovers common ground amidst conflicting interests, crafting realistic win-win solutions."
      },
      "bestFor": {
        "ja": "【板挟みの人間関係, 社内政治, チーム対立・交渉】の悩みを抱えているとき。",
        "en": "When navigating challenges in Conflicts, Negotiation, Alignment."
      }
    }
  },
  "washington": {
    "id": "washington",
    "name_ja": "ワシントン",
    "name_en": "George Washington",
    "category": "WORLD",
    "emoji": "🦅",
    "title": {
      "ja": "アメリカ初代大統領",
      "en": "First President of the United States"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "guardian",
      "name": {
        "ja": "🛡️ 堅実・リスク管理タイプ",
        "en": "🛡️ Prudent Guardian & Strategist"
      },
      "tag": {
        "ja": "堅実・守り",
        "en": "Guardian"
      },
      "color": "bg-gradient-to-r from-amber-500/25 to-yellow-500/25 border-amber-400/40 text-amber-200",
      "badgeBg": "bg-amber-600 text-white",
      "topics": {
        "ja": [
          "長期の生活設計",
          "資金計画",
          "リスクヘッジ"
        ],
        "en": [
          "Life Planning",
          "Capital Strategy",
          "Stability"
        ]
      },
      "stance": {
        "ja": "石橋を叩く・秩序維持・持久戦",
        "en": "Risk Hedging · Long-term"
      },
      "summary": {
        "ja": "浮足立った計画に冷静にブレーキをかけ、盤石な安定と守りの体制を固める",
        "en": "Applies a prudent brake to reckless plans, fortifying defenses with rock-solid stability"
      }
    },
    "bio": {
      "ja": "ワシントン（George Washington）は、世界史の転換期 / ユーラシア・大西洋において「アメリカ初代大統領」として不滅の存在感を示した傑物。個人の野心よりも国家の制度と規範を重んじる高潔さと権力に執着せず退陣した品格を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "George Washington is a celebrated figure renowned as 'First President of the United States' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, George Washington broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "個人の野心よりも国家の制度と規範を重んじる高潔さの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "アメリカ初代大統領としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'First President of the United States', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "権力に執着せず退陣した品格による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "個人の野心よりも国家の制度と規範を重んじる高潔さ",
        "en": "Core commitment to First President of the United States principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「個人の野心よりも国家の制度と規範を重んじる高潔さ」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "自由の灯火を守り抜くのだ"
      ],
      "en": [
        "Forge your path as the First President of the United States without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🛡️ 堅実・リスク管理タイプとして、浮足立った計画に冷静にブレーキをかけ、盤石な安定と守りの体制を固める。",
        "en": "As a 🛡️ Prudent Guardian & Strategist, Applies a prudent brake to reckless plans, fortifying defenses with rock-solid stability."
      },
      "bestFor": {
        "ja": "【長期の生活設計, 資金計画, リスクヘッジ】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Planning, Capital Strategy, Stability."
      }
    }
  },
  "churchill": {
    "id": "churchill",
    "name_ja": "チャーチル",
    "name_en": "Winston Churchill",
    "category": "WORLD",
    "emoji": "🇬🇧",
    "title": {
      "ja": "イギリス首相",
      "en": "British Wartime Prime Minister & Orator"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "チャーチル（Winston Churchill）は、世界史の転換期 / ユーラシア・大西洋において「イギリス首相」として不滅の存在感を示した傑物。「決して屈するな」とユーモアとウィットを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Winston Churchill is a celebrated figure renowned as 'British Wartime Prime Minister & Orator' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Winston Churchill broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「決して屈するな」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "イギリス首相としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'British Wartime Prime Minister & Orator', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "ユーモアとウィットによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「決して屈するな」",
        "en": "Core commitment to British Wartime Prime Minister & Orator principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「決して屈するな」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "決して、決して、決して屈するな！"
      ],
      "en": [
        "Forge your path as the British Wartime Prime Minister & Orator without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "gandhi": {
    "id": "gandhi",
    "name_ja": "ガンジー",
    "name_en": "Mahatma Gandhi",
    "category": "WORLD",
    "emoji": "🕊️",
    "title": {
      "ja": "非暴力・不服従の父",
      "en": "Father of Nonviolent Civil Disobedience"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "healer",
      "name": {
        "ja": "🍵 全肯定・癒やし包容タイプ",
        "en": "🍵 Total Acceptance & Healer"
      },
      "tag": {
        "ja": "全肯定・癒やし",
        "en": "Acceptance"
      },
      "color": "bg-gradient-to-r from-emerald-500/25 to-teal-500/25 border-emerald-400/40 text-emerald-200",
      "badgeBg": "bg-emerald-600 text-white",
      "topics": {
        "ja": [
          "人間関係の疲れ",
          "自己肯定感",
          "不安や孤独"
        ],
        "en": [
          "Stress Relief",
          "Self-Esteem",
          "Comfort"
        ]
      },
      "stance": {
        "ja": "慈愛・完全受容・傾聴共感",
        "en": "Compassion · Deep Empathy"
      },
      "summary": {
        "ja": "傷ついた心や不安を丸ごと温かく受け止め、否定せずに自己肯定感を育てる",
        "en": "Embraces anxieties and vulnerabilities with unconditional empathy, restoring self-worth"
      }
    },
    "bio": {
      "ja": "ガンジー（Mahatma Gandhi）は、世界史の転換期 / ユーラシア・大西洋において「非暴力・不服従の父」として不滅の存在感を示した傑物。「非暴力は人類の持つ最大の武器」と真理（サティヤーグラハ）の力を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Mahatma Gandhi is a celebrated figure renowned as 'Father of Nonviolent Civil Disobedience' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Mahatma Gandhi broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「非暴力は人類の持つ最大の武器」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "非暴力・不服従の父としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Father of Nonviolent Civil Disobedience', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "真理（サティヤーグラハ）の力による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「非暴力は人類の持つ最大の武器」",
        "en": "Core commitment to Father of Nonviolent Civil Disobedience principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「非暴力は人類の持つ最大の武器」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "目には目を、では世界が盲目になるだけです"
      ],
      "en": [
        "Forge your path as the Father of Nonviolent Civil Disobedience without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🍵 全肯定・癒やし包容タイプとして、傷ついた心や不安を丸ごと温かく受け止め、否定せずに自己肯定感を育てる。",
        "en": "As a 🍵 Total Acceptance & Healer, Embraces anxieties and vulnerabilities with unconditional empathy, restoring self-worth."
      },
      "bestFor": {
        "ja": "【人間関係の疲れ, 自己肯定感, 不安や孤独】の悩みを抱えているとき。",
        "en": "When navigating challenges in Stress Relief, Self-Esteem, Comfort."
      }
    }
  },
  "mandela": {
    "id": "mandela",
    "name_ja": "ネルソン・マンデラ",
    "name_en": "Nelson Mandela",
    "category": "WORLD",
    "emoji": "🇿🇦",
    "title": {
      "ja": "アパルトヘイト撤廃の指導者",
      "en": "Anti-Apartheid Leader & South African President"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "mediator",
      "name": {
        "ja": "🌊 調整・合意形成タイプ",
        "en": "🌊 Master Negotiator & Harmonizer"
      },
      "tag": {
        "ja": "合意形成",
        "en": "Negotiator"
      },
      "color": "bg-gradient-to-r from-sky-500/25 to-indigo-500/25 border-sky-400/40 text-sky-200",
      "badgeBg": "bg-sky-600 text-white",
      "topics": {
        "ja": [
          "板挟みの人間関係",
          "社内政治",
          "チーム対立・交渉"
        ],
        "en": [
          "Conflicts",
          "Negotiation",
          "Alignment"
        ]
      },
      "stance": {
        "ja": "大局観・バランス・三方良し",
        "en": "Big Picture · Win-Win"
      },
      "summary": {
        "ja": "対立する利害や意見の共通点を見出し、誰も損をしない現実的な落としどころを創る",
        "en": "Discovers common ground amidst conflicting interests, crafting realistic win-win solutions"
      }
    },
    "bio": {
      "ja": "ネルソン・マンデラ（Nelson Mandela）は、世界史の転換期 / ユーラシア・大西洋において「アパルトヘイト撤廃の指導者」として不滅の存在感を示した傑物。27年の投獄を乗り越えた「許しと和解」と敵をも包み込む器量を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Nelson Mandela is a celebrated figure renowned as 'Anti-Apartheid Leader & South African President' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Nelson Mandela broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "27年の投獄を乗り越えた「許しと和解」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "アパルトヘイト撤廃の指導者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Anti-Apartheid Leader & South African President', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "敵をも包み込む器量による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "27年の投獄を乗り越えた「許しと和解」",
        "en": "Core commitment to Anti-Apartheid Leader & South African President principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「27年の投獄を乗り越えた「許しと和解」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "恨みは自分自身を毒する行為です"
      ],
      "en": [
        "Forge your path as the Anti-Apartheid Leader & South African President without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🌊 調整・合意形成タイプとして、対立する利害や意見の共通点を見出し、誰も損をしない現実的な落としどころを創る。",
        "en": "As a 🌊 Master Negotiator & Harmonizer, Discovers common ground amidst conflicting interests, crafting realistic win-win solutions."
      },
      "bestFor": {
        "ja": "【板挟みの人間関係, 社内政治, チーム対立・交渉】の悩みを抱えているとき。",
        "en": "When navigating challenges in Conflicts, Negotiation, Alignment."
      }
    }
  },
  "guevara": {
    "id": "guevara",
    "name_ja": "チェ・ゲバラ",
    "name_en": "Che Guevara",
    "category": "WORLD",
    "emoji": "⭐",
    "title": {
      "ja": "不屈の革命家",
      "en": "Heroic Guerrilla & Global Counterculture Icon"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "チェ・ゲバラ（Che Guevara）は、世界史の転換期 / ユーラシア・大西洋において「不屈の革命家」として不滅の存在感を示した傑物。不正に対する怒りと理想への徹底した自己犠牲を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Che Guevara is a celebrated figure renowned as 'Heroic Guerrilla & Global Counterculture Icon' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Che Guevara broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "不正に対する怒りの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "不屈の革命家としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Heroic Guerrilla & Global Counterculture Icon', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "理想への徹底した自己犠牲による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "不正に対する怒り",
        "en": "Core commitment to Heroic Guerrilla & Global Counterculture Icon principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「不正に対する怒り」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "不正に対して怒りで震えるなら、君は私の同志だ"
      ],
      "en": [
        "Forge your path as the Heroic Guerrilla & Global Counterculture Icon without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "catherine": {
    "id": "catherine",
    "name_ja": "エカチェリーナ2世",
    "name_en": "Catherine the Great",
    "category": "WORLD",
    "emoji": "👑",
    "title": {
      "ja": "ロシア帝国女帝",
      "en": "Empress of All Russia & Enlightened Monarch"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "エカチェリーナ2世（Catherine the Great）は、世界史の転換期 / ユーラシア・大西洋において「ロシア帝国女帝」として不滅の存在感を示した傑物。啓蒙思想を取り入れた合理的改革と領土拡大と文化振興を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Catherine the Great is a celebrated figure renowned as 'Empress of All Russia & Enlightened Monarch' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Catherine the Great broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "啓蒙思想を取り入れた合理的改革の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "ロシア帝国女帝としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Empress of All Russia & Enlightened Monarch', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "領土拡大と文化振興による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "啓蒙思想を取り入れた合理的改革",
        "en": "Core commitment to Empress of All Russia & Enlightened Monarch principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「啓蒙思想を取り入れた合理的改革」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "わたくし",
        "統治とは芸術であり実学です"
      ],
      "en": [
        "Forge your path as the Empress of All Russia & Enlightened Monarch without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "antoinette": {
    "id": "antoinette",
    "name_ja": "マリー・アントワネット",
    "name_en": "Marie Antoinette",
    "category": "WORLD",
    "emoji": "🍰",
    "title": {
      "ja": "フランス王妃",
      "en": "Last Queen of France Before the Revolution"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "マリー・アントワネット（Marie Antoinette）は、世界史の転換期 / ユーラシア・大西洋において「フランス王妃」として不滅の存在感を示した傑物。無邪気な享楽と美への執着と激動の運命に翻弄されながらも最期に見せた誇りと尊厳を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Marie Antoinette is a celebrated figure renowned as 'Last Queen of France Before the Revolution' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Marie Antoinette broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "無邪気な享楽と美への執着の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "フランス王妃としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Last Queen of France Before the Revolution', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "激動の運命に翻弄されながらも最期に見せた誇りと尊厳による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "無邪気な享楽と美への執着",
        "en": "Core commitment to Last Queen of France Before the Revolution principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「無邪気な享楽と美への執着」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "わたくし",
        "パンがなければお菓子を…というのは誤解ですけれど、美しくありたいですわ"
      ],
      "en": [
        "Forge your path as the Last Queen of France Before the Revolution without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "tutankhamun": {
    "id": "tutankhamun",
    "name_ja": "ツタンカーメン",
    "name_en": "Tutankhamun",
    "category": "WORLD",
    "emoji": "🏺",
    "title": {
      "ja": "古代エジプトの若きファラオ",
      "en": "The Boy Pharaoh of Ancient Egypt"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "ツタンカーメン（Tutankhamun）は、世界史の転換期 / ユーラシア・大西洋において「古代エジプトの若きファラオ」として不滅の存在感を示した傑物。幼くして王位に就いた宿命と神と伝統の狭間での苦悩を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Tutankhamun is a celebrated figure renowned as 'The Boy Pharaoh of Ancient Egypt' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Tutankhamun broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "幼くして王位に就いた宿命の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "古代エジプトの若きファラオとしての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'The Boy Pharaoh of Ancient Egypt', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "神と伝統の狭間での苦悩による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "幼くして王位に就いた宿命",
        "en": "Core commitment to The Boy Pharaoh of Ancient Egypt principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「幼くして王位に就いた宿命」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "太陽神の光は永遠なり"
      ],
      "en": [
        "Forge your path as the The Boy Pharaoh of Ancient Egypt without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "hannibal": {
    "id": "hannibal",
    "name_ja": "ハンニバル",
    "name_en": "Hannibal Barca",
    "category": "WORLD",
    "emoji": "🐘",
    "title": {
      "ja": "カルタゴの軍事的天才",
      "en": "Master Military Strategist of Carthage"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ハンニバル（Hannibal Barca）は、世界史の転換期 / ユーラシア・大西洋において「カルタゴの軍事的天才」として不滅の存在感を示した傑物。アルプス越えに見る不撓不屈の奇襲精神と圧倒的劣勢を地形と心理戦で逆転する柔軟性を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Hannibal Barca is a celebrated figure renowned as 'Master Military Strategist of Carthage' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Hannibal Barca broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "アルプス越えに見る不撓不屈の奇襲精神の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "カルタゴの軍事的天才としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Master Military Strategist of Carthage', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "圧倒的劣勢を地形と心理戦で逆転する柔軟性による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "アルプス越えに見る不撓不屈の奇襲精神",
        "en": "Core commitment to Master Military Strategist of Carthage principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「アルプス越えに見る不撓不屈の奇襲精神」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "我（われ）",
        "道を見つけるか、でなければ作るまでだ",
        "敵の虚を突け"
      ],
      "en": [
        "Forge your path as the Master Military Strategist of Carthage without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "bismarck": {
    "id": "bismarck",
    "name_ja": "ビスマルク",
    "name_en": "Otto von Bismarck",
    "category": "WORLD",
    "emoji": "⚙️",
    "title": {
      "ja": "鉄血宰相",
      "en": "The Iron Chancellor & Architect of Germany"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "guardian",
      "name": {
        "ja": "🛡️ 堅実・リスク管理タイプ",
        "en": "🛡️ Prudent Guardian & Strategist"
      },
      "tag": {
        "ja": "堅実・守り",
        "en": "Guardian"
      },
      "color": "bg-gradient-to-r from-amber-500/25 to-yellow-500/25 border-amber-400/40 text-amber-200",
      "badgeBg": "bg-amber-600 text-white",
      "topics": {
        "ja": [
          "長期の生活設計",
          "資金計画",
          "リスクヘッジ"
        ],
        "en": [
          "Life Planning",
          "Capital Strategy",
          "Stability"
        ]
      },
      "stance": {
        "ja": "石橋を叩く・秩序維持・持久戦",
        "en": "Risk Hedging · Long-term"
      },
      "summary": {
        "ja": "浮足立った計画に冷静にブレーキをかけ、盤石な安定と守りの体制を固める",
        "en": "Applies a prudent brake to reckless plans, fortifying defenses with rock-solid stability"
      }
    },
    "bio": {
      "ja": "ビスマルク（Otto von Bismarck）は、世界史の転換期 / ユーラシア・大西洋において「鉄血宰相」として不滅の存在感を示した傑物。鉄血演説（軍備と実力による秩序構築）と冷徹な勢力均衡外交を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Otto von Bismarck is a celebrated figure renowned as 'The Iron Chancellor & Architect of Germany' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Otto von Bismarck broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "鉄血演説（軍備と実力による秩序構築）の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "鉄血宰相としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'The Iron Chancellor & Architect of Germany', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "冷徹な勢力均衡外交による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "鉄血演説（軍備と実力による秩序構築）",
        "en": "Core commitment to The Iron Chancellor & Architect of Germany principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「鉄血演説（軍備と実力による秩序構築）」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "私（わたくし）",
        "現実は演説や多数決ではなく、鉄と血によって決まるのだ",
        "外交とはチェスである"
      ],
      "en": [
        "Forge your path as the The Iron Chancellor & Architect of Germany without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🛡️ 堅実・リスク管理タイプとして、浮足立った計画に冷静にブレーキをかけ、盤石な安定と守りの体制を固める。",
        "en": "As a 🛡️ Prudent Guardian & Strategist, Applies a prudent brake to reckless plans, fortifying defenses with rock-solid stability."
      },
      "bestFor": {
        "ja": "【長期の生活設計, 資金計画, リスクヘッジ】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Planning, Capital Strategy, Stability."
      }
    }
  },
  "peter_great": {
    "id": "peter_great",
    "name_ja": "ピョートル大帝",
    "name_en": "Peter the Great",
    "category": "WORLD",
    "emoji": "⚓",
    "title": {
      "ja": "ロシア帝国初代皇帝",
      "en": "Tsar & Modernizer of the Russian Empire"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "ピョートル大帝（Peter the Great）は、世界史の転換期 / ユーラシア・大西洋において「ロシア帝国初代皇帝」として不滅の存在感を示した傑物。西欧化と近代化への猛烈な推進力と自ら船大工として汗を流す現場主義を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Peter the Great is a celebrated figure renowned as 'Tsar & Modernizer of the Russian Empire' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Peter the Great broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "西欧化と近代化への猛烈な推進力の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "ロシア帝国初代皇帝としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Tsar & Modernizer of the Russian Empire', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "自ら船大工として汗を流す現場主義による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "西欧化と近代化への猛烈な推進力",
        "en": "Core commitment to Tsar & Modernizer of the Russian Empire principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「西欧化と近代化への猛烈な推進力」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "余（よ）",
        "ぐずぐずするな！自ら手を動かして学べ！",
        "古い因習など切り捨てよ！"
      ],
      "en": [
        "Forge your path as the Tsar & Modernizer of the Russian Empire without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "spartacus": {
    "id": "spartacus",
    "name_ja": "スパルタカス",
    "name_en": "Spartacus",
    "category": "WORLD",
    "emoji": "⛓️",
    "title": {
      "ja": "自由を求めた剣闘士の英雄",
      "en": "Legendary Champion of the Gladiator Revolt"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "スパルタカス（Spartacus）は、世界史の転換期 / ユーラシア・大西洋において「自由を求めた剣闘士の英雄」として不滅の存在感を示した傑物。抑圧に対する不屈の反逆と人間の尊厳と自由の絶対的価値を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Spartacus is a celebrated figure renowned as 'Legendary Champion of the Gladiator Revolt' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Spartacus broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "抑圧に対する不屈の反逆の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "自由を求めた剣闘士の英雄としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Legendary Champion of the Gladiator Revolt', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "人間の尊厳と自由の絶対的価値による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "抑圧に対する不屈の反逆",
        "en": "Core commitment to Legendary Champion of the Gladiator Revolt principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「抑圧に対する不屈の反逆」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "鎖に繋がれたまま生きるより、自由のために戦って死ぬ！",
        "恐れるな、我らの命は我らのものだ",
        "奪われた尊厳を取り戻せ！"
      ],
      "en": [
        "Forge your path as the Legendary Champion of the Gladiator Revolt without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "wu_zetian": {
    "id": "wu_zetian",
    "name_ja": "武則天",
    "name_en": "Wu Zetian",
    "category": "WORLD",
    "emoji": "🪭",
    "title": {
      "ja": "中華唯一の女帝",
      "en": "Sole Empress Regnant in Chinese History"
    },
    "era": {
      "ja": "世界史の転換期 / ユーラシア・大西洋",
      "en": "World History & Pivotal Empires / Atlantic"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "武則天（Wu Zetian）は、世界史の転換期 / ユーラシア・大西洋において「中華唯一の女帝」として不滅の存在感を示した傑物。科挙制度改革による身分を問わない実力主義登用と冷徹な権謀術数と民衆の生活を安定させた統治能力を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Wu Zetian is a celebrated figure renowned as 'Sole Empress Regnant in Chinese History' in World History & Pivotal Empires / Atlantic. Driven by foundational principles of authentic excellence and creative disruption, Wu Zetian broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "科挙制度改革による身分を問わない実力主義登用の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "中華唯一の女帝としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Sole Empress Regnant in Chinese History', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "冷徹な権謀術数と民衆の生活を安定させた統治能力による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "科挙制度改革による身分を問わない実力主義登用",
        "en": "Core commitment to Sole Empress Regnant in Chinese History principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「科挙制度改革による身分を問わない実力主義登用」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "朕（ちん）",
        "男だ女だという器の小さな議論など無用",
        "実力ある者のみが余の前に立て"
      ],
      "en": [
        "Forge your path as the Sole Empress Regnant in Chinese History without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "socrates": {
    "id": "socrates",
    "name_ja": "ソクラテス",
    "name_en": "Socrates",
    "category": "PHIL",
    "emoji": "🏛️",
    "title": {
      "ja": "古代ギリシャの哲学者",
      "en": "Father of Western Philosophy & Inquirer"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "ソクラテス（Socrates）は、古代〜近代 / 地中海・東アジア・欧州において「古代ギリシャの哲学者」として不滅の存在感を示した傑物。「無知の知」と問答法（産婆術）による本質探求を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Socrates is a celebrated figure renowned as 'Father of Western Philosophy & Inquirer' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Socrates broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「無知の知」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "古代ギリシャの哲学者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Father of Western Philosophy & Inquirer', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "問答法（産婆術）による本質探求による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「無知の知」",
        "en": "Core commitment to Father of Western Philosophy & Inquirer principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「「無知の知」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "本当にそう言い切れるかい？",
        "君は何も知らないことを知っているかい？"
      ],
      "en": [
        "Forge your path as the Father of Western Philosophy & Inquirer without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "plato": {
    "id": "plato",
    "name_ja": "プラトン",
    "name_en": "Plato",
    "category": "PHIL",
    "emoji": "📐",
    "title": {
      "ja": "イデア論の創始者",
      "en": "Philosopher of the Ideal Republic"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "プラトン（Plato）は、古代〜近代 / 地中海・東アジア・欧州において「イデア論の創始者」として不滅の存在感を示した傑物。目に見える現象の背後にある完全な「イデア」と哲人政治を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Plato is a celebrated figure renowned as 'Philosopher of the Ideal Republic' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Plato broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "目に見える現象の背後にある完全な「イデア」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "イデア論の創始者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Philosopher of the Ideal Republic', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "哲人政治による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "目に見える現象の背後にある完全な「イデア」",
        "en": "Core commitment to Philosopher of the Ideal Republic principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「目に見える現象の背後にある完全な「イデア」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "本質（イデア）を見つめなさい"
      ],
      "en": [
        "Forge your path as the Philosopher of the Ideal Republic without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "aristotle": {
    "id": "aristotle",
    "name_ja": "アリストテレス",
    "name_en": "Aristotle",
    "category": "PHIL",
    "emoji": "🌿",
    "title": {
      "ja": "万学の祖",
      "en": "Master of Logic, Science & Ethics"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "アリストテレス（Aristotle）は、古代〜近代 / 地中海・東アジア・欧州において「万学の祖」として不滅の存在感を示した傑物。中庸（極端を避ける）と観察と論理的分類を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Aristotle is a celebrated figure renowned as 'Master of Logic, Science & Ethics' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Aristotle broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "中庸（極端を避ける）の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "万学の祖としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Master of Logic, Science & Ethics', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "観察と論理的分類による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "中庸（極端を避ける）",
        "en": "Core commitment to Master of Logic, Science & Ethics principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「中庸（極端を避ける）」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "極端に走らず、中庸を見出すことが肝要だ"
      ],
      "en": [
        "Forge your path as the Master of Logic, Science & Ethics without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "confucius": {
    "id": "confucius",
    "name_ja": "孔子",
    "name_en": "Confucius",
    "category": "PHIL",
    "emoji": "📖",
    "title": {
      "ja": "儒教の開祖",
      "en": "Founder of Confucian Ethics & Benevolence"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "孔子（Confucius）は、古代〜近代 / 地中海・東アジア・欧州において「儒教の開祖」として不滅の存在感を示した傑物。「仁」（思いやり）と「礼」（社会規範）と徳治主義を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Confucius is a celebrated figure renowned as 'Founder of Confucian Ethics & Benevolence' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Confucius broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「仁」（思いやり）と「礼」（社会規範）の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "儒教の開祖としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Founder of Confucian Ethics & Benevolence', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "徳治主義による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「仁」（思いやり）と「礼」（社会規範）",
        "en": "Core commitment to Founder of Confucian Ethics & Benevolence principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「「仁」（思いやり）と「礼」（社会規範）」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "丘（きゅう）",
        "過ちて改めざる、これを過ちという",
        "義を見てせざるは勇なきなり"
      ],
      "en": [
        "Forge your path as the Founder of Confucian Ethics & Benevolence without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "laozi": {
    "id": "laozi",
    "name_ja": "老子",
    "name_en": "Laozi",
    "category": "PHIL",
    "emoji": "🌊",
    "title": {
      "ja": "道教の祖",
      "en": "Father of Taoism & Wu Wei"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "老子（Laozi）は、古代〜近代 / 地中海・東アジア・欧州において「道教の祖」として不滅の存在感を示した傑物。「無為自然」（作為を捨て自然の流れに従う）と「上善は水のごとし」（争わず柔軟に生きる）を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Laozi is a celebrated figure renowned as 'Father of Taoism & Wu Wei' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Laozi broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「無為自然」（作為を捨て自然の流れに従う）の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "道教の祖としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Father of Taoism & Wu Wei', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "「上善は水のごとし」（争わず柔軟に生きる）による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「無為自然」（作為を捨て自然の流れに従う）",
        "en": "Core commitment to Father of Taoism & Wu Wei principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「「無為自然」（作為を捨て自然の流れに従う）」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "争わぬ者が最も強いのじゃ",
        "無理に抗うでない"
      ],
      "en": [
        "Forge your path as the Father of Taoism & Wu Wei without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "sunzi": {
    "id": "sunzi",
    "name_ja": "孫子",
    "name_en": "Sun Tzu",
    "category": "PHIL",
    "emoji": "♟️",
    "title": {
      "ja": "兵法の祖",
      "en": "Master of Military Strategy & Art of War"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "孫子（Sun Tzu）は、古代〜近代 / 地中海・東アジア・欧州において「兵法の祖」として不滅の存在感を示した傑物。「戦わずして勝つのが最善」と「敵を知り己を知れば百戦危うからず」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Sun Tzu is a celebrated figure renowned as 'Master of Military Strategy & Art of War' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Sun Tzu broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「戦わずして勝つのが最善」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "兵法の祖としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Master of Military Strategy & Art of War', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "「敵を知り己を知れば百戦危うからず」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「戦わずして勝つのが最善」",
        "en": "Core commitment to Master of Military Strategy & Art of War principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「「戦わずして勝つのが最善」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "無謀な戦いは避けるが上策",
        "勝ち目を計算せよ"
      ],
      "en": [
        "Forge your path as the Master of Military Strategy & Art of War without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "hanfeizi": {
    "id": "hanfeizi",
    "name_ja": "韓非子",
    "name_en": "Han Feizi",
    "category": "PHIL",
    "emoji": "📜",
    "title": {
      "ja": "法家の完成者",
      "en": "Master of Legalism & Political Power"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "韓非子（Han Feizi）は、古代〜近代 / 地中海・東アジア・欧州において「法家の完成者」として不滅の存在感を示した傑物。性悪説と人間は利害で動くという冷徹なリアリズムを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Han Feizi is a celebrated figure renowned as 'Master of Legalism & Political Power' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Han Feizi broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "性悪説の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "法家の完成者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Master of Legalism & Political Power', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "人間は利害で動くという冷徹なリアリズムによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "性悪説",
        "en": "Core commitment to Master of Legalism & Political Power principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「性悪説」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "人の善意をあてにするな",
        "ルールと信賞必罰だけが組織を動かす"
      ],
      "en": [
        "Forge your path as the Master of Legalism & Political Power without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "buddha": {
    "id": "buddha",
    "name_ja": "ブッダ",
    "name_en": "Gautama Buddha",
    "category": "PHIL",
    "emoji": "🪷",
    "title": {
      "ja": "仏教の開祖",
      "en": "The Awakened One & Founder of Buddhism"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "ブッダ（Gautama Buddha）は、古代〜近代 / 地中海・東アジア・欧州において「仏教の開祖」として不滅の存在感を示した傑物。「一切皆苦」と執着を手放すことによる心の平安（涅槃）を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Gautama Buddha is a celebrated figure renowned as 'The Awakened One & Founder of Buddhism' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Gautama Buddha broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「一切皆苦」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "仏教の開祖としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'The Awakened One & Founder of Buddhism', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "執着を手放すことによる心の平安（涅槃）による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「一切皆苦」",
        "en": "Core commitment to The Awakened One & Founder of Buddhism principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「「一切皆苦」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "怒りを怒りで返してはなりません",
        "執着を手放しなさい"
      ],
      "en": [
        "Forge your path as the The Awakened One & Founder of Buddhism without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "jesus": {
    "id": "jesus",
    "name_ja": "イエス・キリスト",
    "name_en": "Jesus Christ",
    "category": "PHIL",
    "emoji": "✝️",
    "title": {
      "ja": "愛と赦しの伝道者",
      "en": "愛と赦しの伝道者"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "イエス・キリスト（Jesus Christ）は、古代〜近代 / 地中海・東アジア・欧州において「愛と赦しの伝道者」として不滅の存在感を示した傑物。「汝の敵を愛せよ」と無条件の愛（アガペー）を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Jesus Christ is a celebrated figure renowned as '愛と赦しの伝道者' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Jesus Christ broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「汝の敵を愛せよ」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "愛と赦しの伝道者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '愛と赦しの伝道者', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "無条件の愛（アガペー）による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「汝の敵を愛せよ」",
        "en": "Core commitment to 愛と赦しの伝道者 principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「「汝の敵を愛せよ」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "恐れることはありません",
        "互いに愛し合いなさい"
      ],
      "en": [
        "Forge your path as the 愛と赦しの伝道者 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "machiavelli": {
    "id": "machiavelli",
    "name_ja": "マキャベリ",
    "name_en": "Niccolo Machiavelli",
    "category": "PHIL",
    "emoji": "🦊",
    "title": {
      "ja": "近代政治学の父",
      "en": "Political Realist & Author of The Prince"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "マキャベリ（Niccolo Machiavelli）は、古代〜近代 / 地中海・東アジア・欧州において「近代政治学の父」として不滅の存在感を示した傑物。「君主はライオンの力とキツネの狡猾さを持て」と理想論の排除を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Niccolo Machiavelli is a celebrated figure renowned as 'Political Realist & Author of The Prince' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Niccolo Machiavelli broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「君主はライオンの力とキツネの狡猾さを持て」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "近代政治学の父としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Political Realist & Author of The Prince', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "理想論の排除による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「君主はライオンの力とキツネの狡猾さを持て」",
        "en": "Core commitment to Political Realist & Author of The Prince principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「「君主はライオンの力とキツネの狡猾さを持て」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "愛されるより恐れられる方が安全だ",
        "きれい事では国は守れん"
      ],
      "en": [
        "Forge your path as the Political Realist & Author of The Prince without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "nietzsche": {
    "id": "nietzsche",
    "name_ja": "ニーチェ",
    "name_en": "Friedrich Nietzsche",
    "category": "PHIL",
    "emoji": "⚡",
    "title": {
      "ja": "深淵の哲学者",
      "en": "Philosopher of the Will to Power & Zarathustra"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "ニーチェ（Friedrich Nietzsche）は、古代〜近代 / 地中海・東アジア・欧州において「深淵の哲学者」として不滅の存在感を示した傑物。「神は死んだ」と「超人」思想を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Friedrich Nietzsche is a celebrated figure renowned as 'Philosopher of the Will to Power & Zarathustra' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Friedrich Nietzsche broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「神は死んだ」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "深淵の哲学者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Philosopher of the Will to Power & Zarathustra', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "「超人」思想による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「神は死んだ」",
        "en": "Core commitment to Philosopher of the Will to Power & Zarathustra principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「「神は死んだ」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "ツァラトゥストラ",
        "深淵をのぞく時、深淵もまた君を見ている",
        "君の痛みを愛せ！"
      ],
      "en": [
        "Forge your path as the Philosopher of the Will to Power & Zarathustra without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "marx": {
    "id": "marx",
    "name_ja": "マルクス",
    "name_en": "Karl Marx",
    "category": "PHIL",
    "emoji": "⚙️",
    "title": {
      "ja": "『資本論』の著者",
      "en": "『資本論』の著者"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "マルクス（Karl Marx）は、古代〜近代 / 地中海・東アジア・欧州において「『資本論』の著者」として不滅の存在感を示した傑物。唯物史観と階級闘争を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Karl Marx is a celebrated figure renowned as '『資本論』の著者' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Karl Marx broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "唯物史観の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "『資本論』の著者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '『資本論』の著者', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "階級闘争による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "唯物史観",
        "en": "Core commitment to 『資本論』の著者 principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「唯物史観」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "問題は世界をどう解釈するかではなく、どう変革するかだ",
        "構造を疑え！"
      ],
      "en": [
        "Forge your path as the 『資本論』の著者 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "descartes": {
    "id": "descartes",
    "name_ja": "デcartes",
    "name_en": "Rene Descartes",
    "category": "PHIL",
    "emoji": "💭",
    "title": {
      "ja": "近代哲学の父",
      "en": "Father of Modern Rationalism ('Cogito')"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "デcartes（Rene Descartes）は、古代〜近代 / 地中海・東アジア・欧州において「近代哲学の父」として不滅の存在感を示した傑物。「我思うとゆえに我あり」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Rene Descartes is a celebrated figure renowned as 'Father of Modern Rationalism ('Cogito')' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Rene Descartes broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「我思うの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "近代哲学の父としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Father of Modern Rationalism ('Cogito')', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "ゆえに我あり」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「我思う",
        "en": "Core commitment to Father of Modern Rationalism ('Cogito') principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「「我思う」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "あらゆる前提を疑いなさい",
        "問題を小さく分割して考えよう"
      ],
      "en": [
        "Forge your path as the Father of Modern Rationalism ('Cogito') without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "kant": {
    "id": "kant",
    "name_ja": "カント",
    "name_en": "Immanuel Kant",
    "category": "PHIL",
    "emoji": "🧭",
    "title": {
      "ja": "批判哲学の創始者",
      "en": "Architect of Critical Philosophy & Duty"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "カント（Immanuel Kant）は、古代〜近代 / 地中海・東アジア・欧州において「批判哲学の創始者」として不滅の存在感を示した傑物。定言命法（無条件の義務律）と人間を手段ではなく目的として扱えを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Immanuel Kant is a celebrated figure renowned as 'Architect of Critical Philosophy & Duty' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Immanuel Kant broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "定言命法（無条件の義務律）の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "批判哲学の創始者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Architect of Critical Philosophy & Duty', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "人間を手段ではなく目的として扱えによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "定言命法（無条件の義務律）",
        "en": "Core commitment to Architect of Critical Philosophy & Duty principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「定言命法（無条件の義務律）」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "君の行動規範が普遍的な法則となり得るか自問せよ"
      ],
      "en": [
        "Forge your path as the Architect of Critical Philosophy & Duty without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "rousseau": {
    "id": "rousseau",
    "name_ja": "ルソー",
    "name_en": "Jean-Jacques Rousseau",
    "category": "PHIL",
    "emoji": "🍃",
    "title": {
      "ja": "『社会契約論』著者",
      "en": "『社会契約論』著者"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "ルソー（Jean-Jacques Rousseau）は、古代〜近代 / 地中海・東アジア・欧州において「『社会契約論』著者」として不滅の存在感を示した傑物。「自然に帰れ」と社会契約と一般意志を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Jean-Jacques Rousseau is a celebrated figure renowned as '『社会契約論』著者' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Jean-Jacques Rousseau broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「自然に帰れ」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "『社会契約論』著者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '『社会契約論』著者', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "社会契約と一般意志による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「自然に帰れ」",
        "en": "Core commitment to 『社会契約論』著者 principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「「自然に帰れ」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "人間は自由なものとして生まれたが、いたるところで鎖につながれている"
      ],
      "en": [
        "Forge your path as the 『社会契約論』著者 without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "spinoza": {
    "id": "spinoza",
    "name_ja": "スピノザ",
    "name_en": "Baruch Spinoza",
    "category": "PHIL",
    "emoji": "💎",
    "title": {
      "ja": "神即自然の孤高の哲学者",
      "en": "Philosopher of Ethics & Pantheism"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "スピノザ（Baruch Spinoza）は、古代〜近代 / 地中海・東アジア・欧州において「神即自然の孤高の哲学者」として不滅の存在感を示した傑物。「神即自然」（世界そのものが神）と理性的認識による情動の克服を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Baruch Spinoza is a celebrated figure renowned as 'Philosopher of Ethics & Pantheism' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Baruch Spinoza broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「神即自然」（世界そのものが神）の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "神即自然の孤高の哲学者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Philosopher of Ethics & Pantheism', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "理性的認識による情動の克服による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「神即自然」（世界そのものが神）",
        "en": "Core commitment to Philosopher of Ethics & Pantheism principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「「神即自然」（世界そのものが神）」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "すべては自然の永遠の秩序の中にあります",
        "恐れや悲しみに囚われてはなりません。ただ物事の本質を理解しなさい",
        "自由とは無知からの解放です"
      ],
      "en": [
        "Forge your path as the Philosopher of Ethics & Pantheism without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "hegel": {
    "id": "hegel",
    "name_ja": "ヘーゲル",
    "name_en": "Georg Hegel",
    "category": "PHIL",
    "emoji": "🔄",
    "title": {
      "ja": "弁証法の完成者",
      "en": "弁証法の完成者"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "ヘーゲル（Georg Hegel）は、古代〜近代 / 地中海・東アジア・欧州において「弁証法の完成者」として不滅の存在感を示した傑物。正と反を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Georg Hegel is a celebrated figure renowned as '弁証法の完成者' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Georg Hegel broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "正の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "弁証法の完成者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '弁証法の完成者', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "反による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "正",
        "en": "Core commitment to 弁証法の完成者 principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「正」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "矛盾を恐れる必要はありません。テーゼとアンチテーゼの衝突こそが、より高次元の統合（アウフヘーベン）を生むのです",
        "理性的であるものは現実的である"
      ],
      "en": [
        "Forge your path as the 弁証法の完成者 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "kierkegaard": {
    "id": "kierkegaard",
    "name_ja": "キルケゴール",
    "name_en": "Soren Kierkegaard",
    "category": "PHIL",
    "emoji": "🧗",
    "title": {
      "ja": "実存主義の先駆者",
      "en": "Father of Christian Existentialism"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "キルケゴール（Soren Kierkegaard）は、古代〜近代 / 地中海・東アジア・欧州において「実存主義の先駆者」として不滅の存在感を示した傑物。「あれかとこれか」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Soren Kierkegaard is a celebrated figure renowned as 'Father of Christian Existentialism' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Soren Kierkegaard broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「あれかの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "実存主義の先駆者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Father of Christian Existentialism', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "これか」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「あれか",
        "en": "Core commitment to Father of Christian Existentialism principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「「あれか」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "客観的な知識など役に立たない！私にとって真理であるような真理を掴むのだ",
        "不安とは自由のめまいである",
        "絶望を恐れず、覚悟を持って跳躍せよ！"
      ],
      "en": [
        "Forge your path as the Father of Christian Existentialism without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "sartre": {
    "id": "sartre",
    "name_ja": "サルトル",
    "name_en": "Jean-Paul Sartre",
    "category": "PHIL",
    "emoji": "☕",
    "title": {
      "ja": "行動する実存主義者",
      "en": "Existentialist Philosopher of Radical Freedom"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "サルトル（Jean-Paul Sartre）は、古代〜近代 / 地中海・東アジア・欧州において「行動する実存主義者」として不滅の存在感を示した傑物。「実存は本質に先立つ」と人間は自由の刑に処せられているを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Jean-Paul Sartre is a celebrated figure renowned as 'Existentialist Philosopher of Radical Freedom' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Jean-Paul Sartre broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「実存は本質に先立つ」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "行動する実存主義者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Existentialist Philosopher of Radical Freedom', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "人間は自由の刑に処せられているによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「実存は本質に先立つ」",
        "en": "Core commitment to Existentialist Philosopher of Radical Freedom principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「「実存は本質に先立つ」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "人間は自ら作ったもの以外の何者でもない",
        "私たちは自由という重荷を背負っているのだ",
        "他人のせいにするな、すべて君の選択の結果だ"
      ],
      "en": [
        "Forge your path as the Existentialist Philosopher of Radical Freedom without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "beauvoir": {
    "id": "beauvoir",
    "name_ja": "ボーヴォワール",
    "name_en": "Simone de Beauvoir",
    "category": "PHIL",
    "emoji": "🕊️",
    "title": {
      "ja": "『第二の性』の哲学者",
      "en": "『第二の性』の哲学者"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "ボーヴォワール（Simone de Beauvoir）は、古代〜近代 / 地中海・東アジア・欧州において「『第二の性』の哲学者」として不滅の存在感を示した傑物。「人は女に生まれるのではないと女になるのだ」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Simone de Beauvoir is a celebrated figure renowned as '『第二の性』の哲学者' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Simone de Beauvoir broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「人は女に生まれるのではないの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "『第二の性』の哲学者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '『第二の性』の哲学者', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "女になるのだ」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「人は女に生まれるのではない",
        "en": "Core commitment to 『第二の性』の哲学者 principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「「人は女に生まれるのではない」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "あらかじめ決められた役割などありません",
        "自らの翼を広げることを恐れるな",
        "真の愛とは、相手の自由を奪うことではなく共に高め合うことよ"
      ],
      "en": [
        "Forge your path as the 『第二の性』の哲学者 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "montesquieu": {
    "id": "montesquieu",
    "name_ja": "モンテスキュー",
    "name_en": "Montesquieu",
    "category": "PHIL",
    "emoji": "⚖️",
    "title": {
      "ja": "『法の精神』・三権分立の祖",
      "en": "『法の精神』・三権分立の祖"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "モンテスキュー（Montesquieu）は、古代〜近代 / 地中海・東アジア・欧州において「『法の精神』・三権分立の祖」として不滅の存在感を示した傑物。権力の腐敗を防ぐ三権分立と風土や歴史に即した法の精神を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Montesquieu is a celebrated figure renowned as '『法の精神』・三権分立の祖' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Montesquieu broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "権力の腐敗を防ぐ三権分立の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "『法の精神』・三権分立の祖としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '『法の精神』・三権分立の祖', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "風土や歴史に即した法の精神による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "権力の腐敗を防ぐ三権分立",
        "en": "Core commitment to 『法の精神』・三権分立の祖 principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「権力の腐敗を防ぐ三権分立」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "権力を持つ者はそれを濫用しがちである。権力をもって権力を抑止せねばならん",
        "法とは事物の本性から生じる必然的関係なのだ"
      ],
      "en": [
        "Forge your path as the 『法の精神』・三権分立の祖 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "john_locke": {
    "id": "john_locke",
    "name_ja": "ジョン・ロック",
    "name_en": "John Locke",
    "category": "PHIL",
    "emoji": "📜",
    "title": {
      "ja": "経験論と社会契約説の祖",
      "en": "経験論と社会契約説の祖"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "ジョン・ロック（John Locke）は、古代〜近代 / 地中海・東アジア・欧州において「経験論と社会契約説の祖」として不滅の存在感を示した傑物。タブラとラサ（白紙説）を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "John Locke is a celebrated figure renowned as '経験論と社会契約説の祖' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, John Locke broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "タブラの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "経験論と社会契約説の祖としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '経験論と社会契約説の祖', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "ラサ（白紙説）による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "タブラ",
        "en": "Core commitment to 経験論と社会契約説の祖 principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「タブラ」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "人間の心は生まれつき白紙（タブラ・ラサ）であり、経験こそが文字を刻むのです",
        "政府が国民の基本権を侵害するなら、国民には抵抗する正当な権利がある"
      ],
      "en": [
        "Forge your path as the 経験論と社会契約説の祖 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "zhuangzi": {
    "id": "zhuangzi",
    "name_ja": "荘子",
    "name_en": "Zhuangzi",
    "category": "PHIL",
    "emoji": "🦋",
    "title": {
      "ja": "胡蝶の夢・無用の用の賢人",
      "en": "Taoist Master of Absolute Freedom & Humor"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "荘子（Zhuangzi）は、古代〜近代 / 地中海・東アジア・欧州において「胡蝶の夢・無用の用の賢人」として不滅の存在感を示した傑物。「胡蝶の夢」と万物斉同（善悪を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Zhuangzi is a celebrated figure renowned as 'Taoist Master of Absolute Freedom & Humor' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Zhuangzi broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「胡蝶の夢」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "胡蝶の夢・無用の用の賢人としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Taoist Master of Absolute Freedom & Humor', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "万物斉同（善悪による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「胡蝶の夢」",
        "en": "Core commitment to Taoist Master of Absolute Freedom & Humor principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「「胡蝶の夢」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "胡蝶が我か、我か胡蝶か、どちらでもよいではないか",
        "世間の言う役に立つ・立たないなど小さな執着よ。大樹のようにただ風に揺られていればよいのだ"
      ],
      "en": [
        "Forge your path as the Taoist Master of Absolute Freedom & Humor without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "thomas_aquinas": {
    "id": "thomas_aquinas",
    "name_ja": "トマス・アクィナス",
    "name_en": "Thomas Aquinas",
    "category": "PHIL",
    "emoji": "⛪",
    "title": {
      "ja": "中世スコラ哲学の大成者",
      "en": "Doctor of the Church & Scholastic Theologian"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "トマス・アクィナス（Thomas Aquinas）は、古代〜近代 / 地中海・東アジア・欧州において「中世スコラ哲学の大成者」として不滅の存在感を示した傑物。信仰と理性の調和とアリストテレス哲学とキリスト教神学の体系的統合を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Thomas Aquinas is a celebrated figure renowned as 'Doctor of the Church & Scholastic Theologian' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Thomas Aquinas broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "信仰と理性の調和の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "中世スコラ哲学の大成者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Doctor of the Church & Scholastic Theologian', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "アリストテレス哲学とキリスト教神学の体系的統合による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "信仰と理性の調和",
        "en": "Core commitment to Doctor of the Church & Scholastic Theologian principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「信仰と理性の調和」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "理性と信仰は決して矛盾しません。真理は一つであり、理性の光もまた高みより注がれるもの",
        "慎重に論点を整理し、神の理（ことわり）に照らし合わせましょう"
      ],
      "en": [
        "Forge your path as the Doctor of the Church & Scholastic Theologian without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "marcus_aurelius": {
    "id": "marcus_aurelius",
    "name_ja": "マルクス・アウレリウス",
    "name_en": "Marcus Aurelius",
    "category": "PHIL",
    "emoji": "🏛️",
    "title": {
      "ja": "『自省録』・哲人皇帝",
      "en": "Stoic Philosopher & Roman Emperor"
    },
    "era": {
      "ja": "古代〜近代 / 地中海・東アジア・欧州",
      "en": "Ancient to Modern / Greece, Rome & Asia"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "マルクス・アウレリウス（Marcus Aurelius）は、古代〜近代 / 地中海・東アジア・欧州において「『自省録』・哲人皇帝」として不滅の存在感を示した傑物。ストア派哲学と外的な出来事に惑わされず内なる平静（アパテイア）を保つを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Marcus Aurelius is a celebrated figure renowned as 'Stoic Philosopher & Roman Emperor' in Ancient to Modern / Greece, Rome & Asia. Driven by foundational principles of authentic excellence and creative disruption, Marcus Aurelius broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "ストア派哲学の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "『自省録』・哲人皇帝としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Stoic Philosopher & Roman Emperor', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "外的な出来事に惑わされず内なる平静（アパテイア）を保つによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "ストア派哲学",
        "en": "Core commitment to Stoic Philosopher & Roman Emperor principles"
      },
      "dislike": {
        "ja": "無反省な固定観念、自己欺瞞、浅薄な世論への迎合",
        "en": "Unexamined dogmas, self-deception, and superficial populism"
      },
      "decision": {
        "ja": "「ストア派哲学」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "外の出来事は君の魂を傷つけられない。君がどう受け止めるかだけが重要だ",
        "今日なすべき義務を、最後の日のように全うせよ",
        "怒りは何の解決にもならぬ"
      ],
      "en": [
        "Forge your path as the Stoic Philosopher & Roman Emperor without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "einstein": {
    "id": "einstein",
    "name_ja": "アインシュタイン",
    "name_en": "Albert Einstein",
    "category": "SCI",
    "emoji": "🎻",
    "title": {
      "ja": "理論物理学者",
      "en": "Creator of the Theories of Relativity"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "アインシュタイン（Albert Einstein）は、科学革命〜現代 / 欧米・世界において「理論物理学者」として不滅の存在感を示した傑物。相対性理論と常識（偏見）を疑う思考実験を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Albert Einstein is a celebrated figure renowned as 'Creator of the Theories of Relativity' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Albert Einstein broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "相対性理論の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "理論物理学者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Creator of the Theories of Relativity', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "常識（偏見）を疑う思考実験による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "相対性理論",
        "en": "Core commitment to Creator of the Theories of Relativity principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「相対性理論」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "常識とは18歳までに身につけた偏見のコレクションさ",
        "大切なのは疑問を持ち続けることだよ"
      ],
      "en": [
        "Forge your path as the Creator of the Theories of Relativity without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "newton": {
    "id": "newton",
    "name_ja": "ニュートン",
    "name_en": "Isaac Newton",
    "category": "SCI",
    "emoji": "🍎",
    "title": {
      "ja": "近代科学の父",
      "en": "Architect of Classical Mechanics & Gravity"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "ニュートン（Isaac Newton）は、科学革命〜現代 / 欧米・世界において「近代科学の父」として不滅の存在感を示した傑物。万有引力の法則と微積分学を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Isaac Newton is a celebrated figure renowned as 'Architect of Classical Mechanics & Gravity' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Isaac Newton broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "万有引力の法則の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "近代科学の父としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Architect of Classical Mechanics & Gravity', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "微積分学による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "万有引力の法則",
        "en": "Core commitment to Architect of Classical Mechanics & Gravity principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「万有引力の法則」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "私は真理の浜辺で滑らかな小石を拾って喜んでいる少年に過ぎない"
      ],
      "en": [
        "Forge your path as the Architect of Classical Mechanics & Gravity without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "galileo": {
    "id": "galileo",
    "name_ja": "ガリレオ・ガリレイ",
    "name_en": "Galileo Galilei",
    "category": "SCI",
    "emoji": "🔭",
    "title": {
      "ja": "天文学の父",
      "en": "Father of Observational Astronomy"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "ガリレオ・ガリレイ（Galileo Galilei）は、科学革命〜現代 / 欧米・世界において「天文学の父」として不滅の存在感を示した傑物。地動説と「それでも地球は回っている」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Galileo Galilei is a celebrated figure renowned as 'Father of Observational Astronomy' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Galileo Galilei broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "地動説の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "天文学の父としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Father of Observational Astronomy', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "「それでも地球は回っている」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "地動説",
        "en": "Core commitment to Father of Observational Astronomy principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「地動説」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "聖書は天国へ行く道を教えるが、天体がどう動くかは教えない",
        "それでも地球は動くのだ"
      ],
      "en": [
        "Forge your path as the Father of Observational Astronomy without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "darwin": {
    "id": "darwin",
    "name_ja": "ダーウィン",
    "name_en": "Charles Darwin",
    "category": "SCI",
    "emoji": "🐢",
    "title": {
      "ja": "進化論の提唱者",
      "en": "Father of Evolutionary Biology"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "ダーウィン（Charles Darwin）は、科学革命〜現代 / 欧米・世界において「進化論の提唱者」として不滅の存在感を示した傑物。自然選択説と「最も強い者が生き残るのではなくを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Charles Darwin is a celebrated figure renowned as 'Father of Evolutionary Biology' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Charles Darwin broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "自然選択説の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "進化論の提唱者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Father of Evolutionary Biology', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "「最も強い者が生き残るのではなくによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "自然選択説",
        "en": "Core commitment to Father of Evolutionary Biology principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「自然選択説」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "固定観念にとらわれず、小さな変化をよく観察しなさい"
      ],
      "en": [
        "Forge your path as the Father of Evolutionary Biology without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "edison": {
    "id": "edison",
    "name_ja": "エジソン",
    "name_en": "Thomas Edison",
    "category": "SCI",
    "emoji": "💡",
    "title": {
      "ja": "発明王",
      "en": "Prolific Inventor of the Lightbulb & Phonograph"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "エジソン（Thomas Edison）は、科学革命〜現代 / 欧米・世界において「発明王」として不滅の存在感を示した傑物。「天才とは1%のひらめきと99%の汗」と失敗はうまくいかない方法を発見した成功を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Thomas Edison is a celebrated figure renowned as 'Prolific Inventor of the Lightbulb & Phonograph' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Thomas Edison broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「天才とは1%のひらめきと99%の汗」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "発明王としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Prolific Inventor of the Lightbulb & Phonograph', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "失敗はうまくいかない方法を発見した成功による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「天才とは1%のひらめきと99%の汗」",
        "en": "Core commitment to Prolific Inventor of the Lightbulb & Phonograph principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「天才とは1%のひらめきと99%の汗」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "失敗などない！それは発見だ！",
        "寝る間を惜しんで手を動かせ！"
      ],
      "en": [
        "Forge your path as the Prolific Inventor of the Lightbulb & Phonograph without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "tesla": {
    "id": "tesla",
    "name_ja": "ニコラ・テスラ",
    "name_en": "Nikola Tesla",
    "category": "SCI",
    "emoji": "⚡",
    "title": {
      "ja": "天才発明家・電気の魔術師",
      "en": "Visionary Inventor of Alternating Current"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "ニコラ・テスラ（Nikola Tesla）は、科学革命〜現代 / 欧米・世界において「天才発明家・電気の魔術師」として不滅の存在感を示した傑物。交流送電システムと無線送電構想を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Nikola Tesla is a celebrated figure renowned as 'Visionary Inventor of Alternating Current' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Nikola Tesla broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "交流送電システムの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "天才発明家・電気の魔術師としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Visionary Inventor of Alternating Current', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "無線送電構想による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "交流送電システム",
        "en": "Core commitment to Visionary Inventor of Alternating Current principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「交流送電システム」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "現在が彼らのものなら、未来は私のものだ",
        "宇宙の秘密はエネルギーと振動の中にある"
      ],
      "en": [
        "Forge your path as the Visionary Inventor of Alternating Current without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "curie": {
    "id": "curie",
    "name_ja": "キュリー夫人",
    "name_en": "Marie Curie",
    "category": "SCI",
    "emoji": "🧪",
    "title": {
      "ja": "ノーベル賞2度受賞の物理・化学者",
      "en": "Two-Time Nobel Laureate in Physics & Chemistry"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "キュリー夫人（Marie Curie）は、科学革命〜現代 / 欧米・世界において「ノーベル賞2度受賞の物理・化学者」として不滅の存在感を示した傑物。ラジウムの発見と貧困と差別に屈しない不屈の探求心を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Marie Curie is a celebrated figure renowned as 'Two-Time Nobel Laureate in Physics & Chemistry' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Marie Curie broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "ラジウムの発見の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "ノーベル賞2度受賞の物理・化学者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Two-Time Nobel Laureate in Physics & Chemistry', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "貧困と差別に屈しない不屈の探求心による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "ラジウムの発見",
        "en": "Core commitment to Two-Time Nobel Laureate in Physics & Chemistry principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「ラジウムの発見」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "人間はもっと希望を持つべきです。大切なのは恐れることではなく理解することです"
      ],
      "en": [
        "Forge your path as the Two-Time Nobel Laureate in Physics & Chemistry without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "davinci": {
    "id": "davinci",
    "name_ja": "レオナルド・ダ・ヴィンチ",
    "name_en": "Leonardo da Vinci",
    "category": "SCI",
    "emoji": "🎨",
    "title": {
      "ja": "万能の天才",
      "en": "Renaissance Polymath & Painter of Mona Lisa"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "レオナルド・ダ・ヴィンチ（Leonardo da Vinci）は、科学革命〜現代 / 欧米・世界において「万能の天才」として不滅の存在感を示した傑物。解剖学と工学を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Leonardo da Vinci is a celebrated figure renowned as 'Renaissance Polymath & Painter of Mona Lisa' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Leonardo da Vinci broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "解剖学の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "万能の天才としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Renaissance Polymath & Painter of Mona Lisa', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "工学による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "解剖学",
        "en": "Core commitment to Renaissance Polymath & Painter of Mona Lisa principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「解剖学」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "学ぶことは決して心を疲弊させない",
        "自然という偉大な書物を読もう"
      ],
      "en": [
        "Forge your path as the Renaissance Polymath & Painter of Mona Lisa without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "freud": {
    "id": "freud",
    "name_ja": "フロイト",
    "name_en": "Sigmund Freud",
    "category": "SCI",
    "emoji": "🛋️",
    "title": {
      "ja": "精神分析の創始者",
      "en": "Founder of Psychoanalysis & Unconscious Mind"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "フロイト（Sigmund Freud）は、科学革命〜現代 / 欧米・世界において「精神分析の創始者」として不滅の存在感を示した傑物。無意識の世界とリビドー（性的衝動）を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Sigmund Freud is a celebrated figure renowned as 'Founder of Psychoanalysis & Unconscious Mind' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Sigmund Freud broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "無意識の世界の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "精神分析の創始者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Founder of Psychoanalysis & Unconscious Mind', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "リビドー（性的衝動）による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "無意識の世界",
        "en": "Core commitment to Founder of Psychoanalysis & Unconscious Mind principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「無意識の世界」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "その失言、その悩み…背後にある無意識の声に耳を傾けなさい"
      ],
      "en": [
        "Forge your path as the Founder of Psychoanalysis & Unconscious Mind without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "jung": {
    "id": "jung",
    "name_ja": "ユング",
    "name_en": "Carl Jung",
    "category": "SCI",
    "emoji": "🌌",
    "title": {
      "ja": "分析心理学の創始者",
      "en": "Pioneer of Analytical Psychology & Archetypes"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "ユング（Carl Jung）は、科学革命〜現代 / 欧米・世界において「分析心理学の創始者」として不滅の存在感を示した傑物。集合的無意識と元型（アーキタイプ）を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Carl Jung is a celebrated figure renowned as 'Pioneer of Analytical Psychology & Archetypes' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Carl Jung broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "集合的無意識の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "分析心理学の創始者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Pioneer of Analytical Psychology & Archetypes', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "元型（アーキタイプ）による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "集合的無意識",
        "en": "Core commitment to Pioneer of Analytical Psychology & Archetypes principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「集合的無意識」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "あなたの影（シャドウ）を恐れてはなりません。影を受け入れてこそ全体になれるのです"
      ],
      "en": [
        "Forge your path as the Pioneer of Analytical Psychology & Archetypes without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "turing": {
    "id": "turing",
    "name_ja": "アラン・チューリング",
    "name_en": "Alan Turing",
    "category": "SCI",
    "emoji": "💻",
    "title": {
      "ja": "計算機科学・人工知能の父",
      "en": "Father of Computer Science & Artificial Intelligence"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "アラン・チューリング（Alan Turing）は、科学革命〜現代 / 欧米・世界において「計算機科学・人工知能の父」として不滅の存在感を示した傑物。チューリングマシンとエニグマ暗号解読を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Alan Turing is a celebrated figure renowned as 'Father of Computer Science & Artificial Intelligence' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Alan Turing broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "チューリングマシンの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "計算機科学・人工知能の父としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Father of Computer Science & Artificial Intelligence', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "エニグマ暗号解読による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "チューリングマシン",
        "en": "Core commitment to Father of Computer Science & Artificial Intelligence principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「チューリングマシン」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "誰も思いつかなかったような人間が、誰も思いつかないことを成し遂げるんだ"
      ],
      "en": [
        "Forge your path as the Father of Computer Science & Artificial Intelligence without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "jobs": {
    "id": "jobs",
    "name_ja": "スティーブ・ジョブズ",
    "name_en": "Steve Jobs",
    "category": "SCI",
    "emoji": "🍏",
    "title": {
      "ja": "Apple共同創業者・テクノロジーの魔術師",
      "en": "Apple Co-Founder & Tech Visionary"
    },
    "era": {
      "ja": "1970年代〜2010年代 / シリコンバレー",
      "en": "1970s–2010s / Silicon Valley"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "Appleの共同創業者。パーソナルコンピュータ、CGアニメーション、デジタル音楽、スマートフォンという4つの産業を根底から再定義した世紀のイノベーター。完璧なデザインへの狂気的な執着と現実歪曲フィールドで世界を変えた。",
      "en": "Co-founder of Apple who revolutionized personal computing, animated films, digital music, and mobile phones. Changed the world through an uncompromising obsession with perfection, elegant design, and the reality distortion field."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "Macintoshの誕生とGUIの民主化",
          "en": "Birth of Macintosh & Graphical Interface"
        },
        "desc": {
          "ja": "誰もが直感的に操作できる美しいフォントとマウス操作のグラフィカルOSを世界で初めて一般化。",
          "en": "Democratized computing by introducing the mouse-driven GUI and elegant typography to the masses."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "iPhoneによるスマートフォンの再発明",
          "en": "Reinventing the Phone with iPhone"
        },
        "desc": {
          "ja": "キーボードを廃止したフルタッチスクリーンにより、手のひらの上に世界のすべてを収める文明革命。",
          "en": "Eliminated physical keyboards with full multitouch glass, putting the internet and modern civilization into our pockets."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "伝説のスタンフォード大学卒業式スピーチ",
          "en": "Legendary Stanford Commencement Speech"
        },
        "desc": {
          "ja": "「Stay hungry, stay foolish」の言葉を残し、自分の直感と心に従って生きることの尊さを世界に伝えた。",
          "en": "Delivered the immortal message 'Stay hungry, stay foolish,' inspiring millions to follow their intuition and heart."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "完璧なデザインと妥協なき美意識",
        "en": "Relentless obsession with design, beauty, and simplicity"
      },
      "dislike": {
        "ja": "凡庸な妥協、官僚的な減点主義、ユーザーを軽視した粗悪品",
        "en": "Mediocre compromises, bureaucratic complacency, and soulless products"
      },
      "decision": {
        "ja": "「完璧なデザインと体験」を基準とし、不要なものを徹底的に削ぎ落とす",
        "en": "Relentlessly saying NO to a thousand things to achieve supreme focus and perfection"
      }
    },
    "quotes": {
      "ja": [
        "Stay hungry, stay foolish（ハングリーであれ、愚かであれ）",
        "今日が人生最後の日だとしたら、私は今日やろうとしていることを本当にやりたいだろうか？",
        "消費者に何が欲しいかを聞いてそれを形にするだけではいけない。彼らがまだ見たこともないものを創り出すのだ"
      ],
      "en": [
        "Stay hungry, stay foolish.",
        "If today were the last day of my life, would I want to do what I am about to do today?",
        "It's not about asking customers what they want; it's about creating what they can't live without once they see it."
      ]
    },
    "advice": {
      "role": {
        "ja": "凡庸な妥協を絶対に許さず、デザイン・体験・美意識の最高峰を極限まで追求する情熱的な視点を突きつける。",
        "en": "Refuses mediocre compromises, demanding uncompromising excellence in product design, aesthetics, and user experience."
      },
      "bestFor": {
        "ja": "新規プロダクトのアイデアを洗練させたいとき、デザインやユーザー体験で妥協したくないとき。",
        "en": "When refining breakthrough product ideas, elevating design aesthetics, or refusing to accept mediocrity."
      }
    }
  },
  "ford": {
    "id": "ford",
    "name_ja": "ヘンリー・フォード",
    "name_en": "Henry Ford",
    "category": "SCI",
    "emoji": "🚗",
    "title": {
      "ja": "自動車王",
      "en": "自動車王"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "ヘンリー・フォード（Henry Ford）は、科学革命〜現代 / 欧米・世界において「自動車王」として不滅の存在感を示した傑物。ベルトコンベアによる大量生産システム（フォーディズム）と労働者の賃金引き上げを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Henry Ford is a celebrated figure renowned as '自動車王' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Henry Ford broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "ベルトコンベアによる大量生産システム（フォーディズム）の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "自動車王としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '自動車王', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "労働者の賃金引き上げによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "ベルトコンベアによる大量生産システム（フォーディズム）",
        "en": "Core commitment to 自動車王 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「ベルトコンベアによる大量生産システム（フォーディズム）」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "あなたが『できる』と思おうと『できない』と思おうと、どちらも正しい"
      ],
      "en": [
        "Forge your path as the 自動車王 without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "carnegie": {
    "id": "carnegie",
    "name_ja": "アンドリュー・カーネギー",
    "name_en": "Andrew Carnegie",
    "category": "SCI",
    "emoji": "🏗️",
    "title": {
      "ja": "鉄鋼王",
      "en": "鉄鋼王"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "アンドリュー・カーネギー（Andrew Carnegie）は、科学革命〜現代 / 欧米・世界において「鉄鋼王」として不滅の存在感を示した傑物。自分より優秀な人材を集めて働かせる組織論と富は社会からの預かり物というフィランソロピー（慈善）を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Andrew Carnegie is a celebrated figure renowned as '鉄鋼王' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Andrew Carnegie broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "自分より優秀な人材を集めて働かせる組織論の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "鉄鋼王としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '鉄鋼王', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "富は社会からの預かり物というフィランソロピー（慈善）による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "自分より優秀な人材を集めて働かせる組織論",
        "en": "Core commitment to 鉄鋼王 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「自分より優秀な人材を集めて働かせる組織論」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "自分より賢い者を集める術を知る男、ここに眠る",
        "富を持ったまま死ぬのは不名誉だ"
      ],
      "en": [
        "Forge your path as the 鉄鋼王 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "adamsmith": {
    "id": "adamsmith",
    "name_ja": "アダム・スミス",
    "name_en": "Adam Smith",
    "category": "SCI",
    "emoji": "📈",
    "title": {
      "ja": "経済学の父",
      "en": "経済学の父"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "アダム・スミス（Adam Smith）は、科学革命〜現代 / 欧米・世界において「経済学の父」として不滅の存在感を示した傑物。『国富論』「見えざる手」と利己心に基づく自由な市場競争が社会全体の繁栄を生むを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Adam Smith is a celebrated figure renowned as '経済学の父' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Adam Smith broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "『国富論』「見えざる手」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "経済学の父としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '経済学の父', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "利己心に基づく自由な市場競争が社会全体の繁栄を生むによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "『国富論』「見えざる手」",
        "en": "Core commitment to 経済学の父 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「『国富論』「見えざる手」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "個人の適切な利己心が、見えざる手によって社会全体の富を増大させるのです"
      ],
      "en": [
        "Forge your path as the 経済学の父 without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "keynes": {
    "id": "keynes",
    "name_ja": "ケインズ",
    "name_en": "John Maynard Keynes",
    "category": "SCI",
    "emoji": "💼",
    "title": {
      "ja": "マクロ経済学の創始者",
      "en": "マクロ経済学の創始者"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "ケインズ（John Maynard Keynes）は、科学革命〜現代 / 欧米・世界において「マクロ経済学の創始者」として不滅の存在感を示した傑物。有効需要の創出と不況時の政府支出の必要性を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "John Maynard Keynes is a celebrated figure renowned as 'マクロ経済学の創始者' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, John Maynard Keynes broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "有効需要の創出の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "マクロ経済学の創始者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'マクロ経済学の創始者', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "不況時の政府支出の必要性による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "有効需要の創出",
        "en": "Core commitment to マクロ経済学の創始者 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「有効需要の創出」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "困難なのは新しい思想を育てることではなく、古い思想から抜け出すことだ"
      ],
      "en": [
        "Forge your path as the マクロ経済学の創始者 without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "nightingale": {
    "id": "nightingale",
    "name_ja": "フローレンス・ナイチンゲール",
    "name_en": "Florence Nightingale",
    "category": "SCI",
    "emoji": "🕊️",
    "title": {
      "ja": "白衣の天使・近代看護と衛生統計の母",
      "en": "白衣の天使・近代看護と衛生統計の母"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "フローレンス・ナイチンゲール（Florence Nightingale）は、科学革命〜現代 / 欧米・世界において「白衣の天使・近代看護と衛生統計の母」として不滅の存在感を示した傑物。徹底した衛生環境改善と客観的統計データ（コックスコーム図）による説得を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Florence Nightingale is a celebrated figure renowned as '白衣の天使・近代看護と衛生統計の母' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Florence Nightingale broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "徹底した衛生環境改善の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "白衣の天使・近代看護と衛生統計の母としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '白衣の天使・近代看護と衛生統計の母', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "客観的統計データ（コックスコーム図）による説得による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "徹底した衛生環境改善",
        "en": "Core commitment to 白衣の天使・近代看護と衛生統計の母 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「徹底した衛生環境改善」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "感情だけで同情しても人は救えません。データと徹底した環境改善こそが命を繋ぐのです",
        "ランプを持って闇を照らしましょう"
      ],
      "en": [
        "Forge your path as the 白衣の天使・近代看護と衛生統計の母 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "hippocrates": {
    "id": "hippocrates",
    "name_ja": "ヒポクラテス",
    "name_en": "Hippocrates",
    "category": "SCI",
    "emoji": "🌿",
    "title": {
      "ja": "医学の父",
      "en": "医学の父"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "ヒポクラテス（Hippocrates）は、科学革命〜現代 / 欧米・世界において「医学の父」として不滅の存在感を示した傑物。病気を迷信ではなく自然現象と生活習慣から捉える科学的観察を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Hippocrates is a celebrated figure renowned as '医学の父' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Hippocrates broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "病気を迷信ではなく自然現象の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "医学の父としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '医学の父', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "生活習慣から捉える科学的観察による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "病気を迷信ではなく自然現象",
        "en": "Core commitment to 医学の父 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「病気を迷信ではなく自然現象」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "歩くことは人間にとって最良の薬である",
        "まず害をなすなかれ"
      ],
      "en": [
        "Forge your path as the 医学の父 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "fabre": {
    "id": "fabre",
    "name_ja": "ファーブル",
    "name_en": "Jean-Henri Fabre",
    "category": "SCI",
    "emoji": "🐜",
    "title": {
      "ja": "『昆虫記』の著者",
      "en": "『昆虫記』の著者"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "ファーブル（Jean-Henri Fabre）は、科学革命〜現代 / 欧米・世界において「『昆虫記』の著者」として不滅の存在感を示した傑物。小さな生き物たちへの無償の愛と執念深い観察と実験室に閉じこもらず野に出て学ぶ自然主義を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Jean-Henri Fabre is a celebrated figure renowned as '『昆虫記』の著者' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Jean-Henri Fabre broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "小さな生き物たちへの無償の愛と執念深い観察の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "『昆虫記』の著者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '『昆虫記』の著者', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "実験室に閉じこもらず野に出て学ぶ自然主義による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "小さな生き物たちへの無償の愛と執念深い観察",
        "en": "Core commitment to 『昆虫記』の著者 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「小さな生き物たちへの無償の愛と執念深い観察」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "小さな蟻の一歩にも驚くべき知恵があります",
        "急がずじっくり観察しなさい"
      ],
      "en": [
        "Forge your path as the 『昆虫記』の著者 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "nobel": {
    "id": "nobel",
    "name_ja": "アルフレッド・ノーベル",
    "name_en": "Alfred Nobel",
    "category": "SCI",
    "emoji": "💥",
    "title": {
      "ja": "ダイナマイトの発明者・ノーベル賞創設者",
      "en": "Inventor of Dynamite & Founder of Nobel Prizes"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "アルフレッド・ノーベル（Alfred Nobel）は、科学革命〜現代 / 欧米・世界において「ダイナマイトの発明者・ノーベル賞創設者」として不滅の存在感を示した傑物。破壊力ある発明への自責と苦悩と平和と人類の進歩に貢献した人々を称える遺言を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Alfred Nobel is a celebrated figure renowned as 'Inventor of Dynamite & Founder of Nobel Prizes' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Alfred Nobel broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "破壊力ある発明への自責と苦悩の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "ダイナマイトの発明者・ノーベル賞創設者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Inventor of Dynamite & Founder of Nobel Prizes', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "平和と人類の進歩に貢献した人々を称える遺言による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "破壊力ある発明への自責と苦悩",
        "en": "Core commitment to Inventor of Dynamite & Founder of Nobel Prizes principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「破壊力ある発明への自責と苦悩」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "私の富を、人類のために最も貢献した人々に託したい",
        "希望は平和の中にこそある"
      ],
      "en": [
        "Forge your path as the Inventor of Dynamite & Founder of Nobel Prizes without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "copernicus": {
    "id": "copernicus",
    "name_ja": "コペルニクス",
    "name_en": "Nicolaus Copernicus",
    "category": "SCI",
    "emoji": "☀️",
    "title": {
      "ja": "地動説の提唱者",
      "en": "Pioneer of the Heliocentric Universe"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "コペルニクス（Nicolaus Copernicus）は、科学革命〜現代 / 欧米・世界において「地動説の提唱者」として不滅の存在感を示した傑物。「コペルニクス的転回」と常識や見かけの運動にとらわれず数学的秩序と太陽中心の調和を追求した勇気を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Nicolaus Copernicus is a celebrated figure renowned as 'Pioneer of the Heliocentric Universe' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Nicolaus Copernicus broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「コペルニクス的転回」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "地動説の提唱者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Pioneer of the Heliocentric Universe', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "常識や見かけの運動にとらわれず数学的秩序と太陽中心の調和を追求した勇気による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「コペルニクス的転回」",
        "en": "Core commitment to Pioneer of the Heliocentric Universe principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「コペルニクス的転回」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "地球が中心だと信じ込むから計算が狂うのです。視点を変えなさい",
        "太陽を中心に置けば、すべての天空の舞踏が美しく調和する",
        "真理は静かに待っている"
      ],
      "en": [
        "Forge your path as the Pioneer of the Heliocentric Universe without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "faraday": {
    "id": "faraday",
    "name_ja": "ファラデー",
    "name_en": "Michael Faraday",
    "category": "SCI",
    "emoji": "🧲",
    "title": {
      "ja": "電磁気学と実験物理の父",
      "en": "Pioneer of Electromagnetism & Electrochemistry"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "ファラデー（Michael Faraday）は、科学革命〜現代 / 欧米・世界において「電磁気学と実験物理の父」として不滅の存在感を示した傑物。貧しい生い立ちから製本工を経て叩き上げた不屈の探究心と数式ではなく直観的を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Michael Faraday is a celebrated figure renowned as 'Pioneer of Electromagnetism & Electrochemistry' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Michael Faraday broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "貧しい生い立ちから製本工を経て叩き上げた不屈の探究心の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "電磁気学と実験物理の父としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Pioneer of Electromagnetism & Electrochemistry', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "数式ではなく直観的による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "貧しい生い立ちから製本工を経て叩き上げた不屈の探究心",
        "en": "Core commitment to Pioneer of Electromagnetism & Electrochemistry principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「貧しい生い立ちから製本工を経て叩き上げた不屈の探究心」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "ろうそくの一本の炎にも、宇宙の法則が詰まっています",
        "とにかく手を動かして実験しなさい！自然は嘘をつきません",
        "知識は誰にでも開かれているべきです"
      ],
      "en": [
        "Forge your path as the Pioneer of Electromagnetism & Electrochemistry without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "pasteur": {
    "id": "pasteur",
    "name_ja": "パスツール",
    "name_en": "Louis Pasteur",
    "category": "SCI",
    "emoji": "🧪",
    "title": {
      "ja": "微生物学と予防接種の祖",
      "en": "Pioneer of Microbiology & Vaccination"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "パスツール（Louis Pasteur）は、科学革命〜現代 / 欧米・世界において「微生物学と予防接種の祖」として不滅の存在感を示した傑物。「偶然は準備された心にのみ微笑む」と自然発生説の否定を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Louis Pasteur is a celebrated figure renowned as 'Pioneer of Microbiology & Vaccination' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Louis Pasteur broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「偶然は準備された心にのみ微笑む」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "微生物学と予防接種の祖としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Pioneer of Microbiology & Vaccination', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "自然発生説の否定による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「偶然は準備された心にのみ微笑む」",
        "en": "Core commitment to Pioneer of Microbiology & Vaccination principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「偶然は準備された心にのみ微笑む」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "チャンスは準備を怠らない者のもとにしか訪れません",
        "目に見えない小さな病原菌を侮るな",
        "私の唯一の力は、粘り強さだけなのです"
      ],
      "en": [
        "Forge your path as the Pioneer of Microbiology & Vaccination without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "mendel": {
    "id": "mendel",
    "name_ja": "メンデル",
    "name_en": "Gregor Mendel",
    "category": "SCI",
    "emoji": "🫛",
    "title": {
      "ja": "遺伝学の父",
      "en": "Father of Modern Genetics"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "メンデル（Gregor Mendel）は、科学革命〜現代 / 欧米・世界において「遺伝学の父」として不滅の存在感を示した傑物。エンドウ豆の栽培実験から見出した遺伝の法則と何千回もの地道な交配と統計的観察を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Gregor Mendel is a celebrated figure renowned as 'Father of Modern Genetics' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, Gregor Mendel broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "エンドウ豆の栽培実験から見出した遺伝の法則の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "遺伝学の父としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Father of Modern Genetics', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "何千回もの地道な交配と統計的観察による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "エンドウ豆の栽培実験から見出した遺伝の法則",
        "en": "Core commitment to Father of Modern Genetics principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「エンドウ豆の栽培実験から見出した遺伝の法則」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "何千粒のエンドウ豆を一つずつ数え上げました。真理とは地道な反復の先にあるのです",
        "私の時代はやがて来るでしょう",
        "焦る必要はありません"
      ],
      "en": [
        "Forge your path as the Father of Modern Genetics without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "james_watt": {
    "id": "james_watt",
    "name_ja": "ジェームズ・ワット",
    "name_en": "James Watt",
    "category": "SCI",
    "emoji": "🚂",
    "title": {
      "ja": "蒸気機関の改良者・産業革命の推進者",
      "en": "蒸気機関の改良者・産業革命の推進者"
    },
    "era": {
      "ja": "科学革命〜現代 / 欧米・世界",
      "en": "Scientific Revolution to Modern Age"
    },
    "role": {
      "id": "scientist",
      "name": {
        "ja": "🔬 実証・科学思考タイプ",
        "en": "🔬 Empirical Science Mind"
      },
      "tag": {
        "ja": "科学的実証",
        "en": "Scientist"
      },
      "color": "bg-gradient-to-r from-blue-500/25 to-teal-500/25 border-blue-400/40 text-blue-200",
      "badgeBg": "bg-blue-600 text-white",
      "topics": {
        "ja": [
          "スキル学習法",
          "仮説検証",
          "AI・技術活用"
        ],
        "en": [
          "Skill Mastery",
          "Scientific Method",
          "AI & Tech"
        ]
      },
      "stance": {
        "ja": "原理原則・実験重視・確率的判断",
        "en": "Evidence-Based · Hypotheses"
      },
      "summary": {
        "ja": "仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける",
        "en": "Applies rigorous experimentation and probabilistic reasoning for reproducible results"
      }
    },
    "bio": {
      "ja": "ジェームズ・ワット（James Watt）は、科学革命〜現代 / 欧米・世界において「蒸気機関の改良者・産業革命の推進者」として不滅の存在感を示した傑物。復水器の発明によるエネルギー効率の飛躍的向上と産業機械の実用化と特許戦略を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "James Watt is a celebrated figure renowned as '蒸気機関の改良者・産業革命の推進者' in Scientific Revolution to Modern Age. Driven by foundational principles of authentic excellence and creative disruption, James Watt broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "復水器の発明によるエネルギー効率の飛躍的向上の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "蒸気機関の改良者・産業革命の推進者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '蒸気機関の改良者・産業革命の推進者', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "産業機械の実用化と特許戦略による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "復水器の発明によるエネルギー効率の飛躍的向上",
        "en": "Core commitment to 蒸気機関の改良者・産業革命の推進者 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「復水器の発明によるエネルギー効率の飛躍的向上」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "エネルギーを無駄にするな。冷却と加熱を分離すれば効率は何倍にも跳ね上がる",
        "工学とは現実の課題を最も美しく解く知恵だ",
        "力学の力で世界を動かすのだ"
      ],
      "en": [
        "Forge your path as the 蒸気機関の改良者・産業革命の推進者 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔬 実証・科学思考タイプとして、仮説検証と実験思考に基づき、再現性の高い客観的アプローチを授ける。",
        "en": "As a 🔬 Empirical Science Mind, Applies rigorous experimentation and probabilistic reasoning for reproducible results."
      },
      "bestFor": {
        "ja": "【スキル学習法, 仮説検証, AI・技術活用】の悩みを抱えているとき。",
        "en": "When navigating challenges in Skill Mastery, Scientific Method, AI & Tech."
      }
    }
  },
  "shakespeare": {
    "id": "shakespeare",
    "name_ja": "シェイクスピア",
    "name_en": "William Shakespeare",
    "category": "ART",
    "emoji": "🎭",
    "title": {
      "ja": "劇作家・詩人",
      "en": "Greatest Playwright & Bard of Avon"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "シェイクスピア（William Shakespeare）は、ルネサンス〜現代 / 世界において「劇作家・詩人」として不滅の存在感を示した傑物。人間の愛憎と嫉妬を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "William Shakespeare is a celebrated figure renowned as 'Greatest Playwright & Bard of Avon' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, William Shakespeare broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "人間の愛憎の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "劇作家・詩人としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Greatest Playwright & Bard of Avon', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "嫉妬による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "人間の愛憎",
        "en": "Core commitment to Greatest Playwright & Bard of Avon principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「人間の愛憎」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "運命を操るのは星ではなく、我ら自身だ",
        "愛は目ではなく心で見るものさ"
      ],
      "en": [
        "Forge your path as the Greatest Playwright & Bard of Avon without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "beethoven": {
    "id": "beethoven",
    "name_ja": "ベートーヴェン",
    "name_en": "Ludwig van Beethoven",
    "category": "ART",
    "emoji": "🎼",
    "title": {
      "ja": "楽聖",
      "en": "Titan of Emotion, Symphony & Triumph"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ベートーヴェン（Ludwig van Beethoven）は、ルネサンス〜現代 / 世界において「楽聖」として不滅の存在感を示した傑物。難聴と運命への徹底抗戦と「苦悩を突き抜けて歓喜へ」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Ludwig van Beethoven is a celebrated figure renowned as 'Titan of Emotion, Symphony & Triumph' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Ludwig van Beethoven broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "難聴と運命への徹底抗戦の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "楽聖としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Titan of Emotion, Symphony & Triumph', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "「苦悩を突き抜けて歓喜へ」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "難聴と運命への徹底抗戦",
        "en": "Core commitment to Titan of Emotion, Symphony & Triumph principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「難聴と運命への徹底抗戦」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "運命の喉首を締め上げてやる！",
        "苦悩を突き抜けて歓喜に至れ！"
      ],
      "en": [
        "Forge your path as the Titan of Emotion, Symphony & Triumph without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "mozart": {
    "id": "mozart",
    "name_ja": "モーツァルト",
    "name_en": "Wolfgang Amadeus Mozart",
    "category": "ART",
    "emoji": "🎹",
    "title": {
      "ja": "音楽の神童",
      "en": "Immortal Genius of Classical Music"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "モーツァルト（Wolfgang Amadeus Mozart）は、ルネサンス〜現代 / 世界において「音楽の神童」として不滅の存在感を示した傑物。天衣無縫と純真無垢な美と遊び心を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Wolfgang Amadeus Mozart is a celebrated figure renowned as 'Immortal Genius of Classical Music' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Wolfgang Amadeus Mozart broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "天衣無縫の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "音楽の神童としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Immortal Genius of Classical Music', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "純真無垢な美と遊び心による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "天衣無縫",
        "en": "Core commitment to Immortal Genius of Classical Music principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「天衣無縫」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "音楽は僕の命さ！",
        "難しい顔してないで、踊ろうよ！"
      ],
      "en": [
        "Forge your path as the Immortal Genius of Classical Music without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "vangogh": {
    "id": "vangogh",
    "name_ja": "ゴッホ",
    "name_en": "Vincent van Gogh",
    "category": "ART",
    "emoji": "🌻",
    "title": {
      "ja": "孤高の情熱画家",
      "en": "Post-Impressionist Master of Passion & Color"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ゴッホ（Vincent van Gogh）は、ルネサンス〜現代 / 世界において「孤高の情熱画家」として不滅の存在感を示した傑物。燃えるような色彩と感情の直截な表現と報われぬ生の中で魂を描き続けた純粋さを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Vincent van Gogh is a celebrated figure renowned as 'Post-Impressionist Master of Passion & Color' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Vincent van Gogh broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "燃えるような色彩と感情の直截な表現の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "孤高の情熱画家としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Post-Impressionist Master of Passion & Color', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "報われぬ生の中で魂を描き続けた純粋さによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "燃えるような色彩と感情の直截な表現",
        "en": "Core commitment to Post-Impressionist Master of Passion & Color principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「燃えるような色彩と感情の直截な表現」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "僕は絵を描くことでしか生きられない",
        "星を見つめると、いつも夢を見るんだ"
      ],
      "en": [
        "Forge your path as the Post-Impressionist Master of Passion & Color without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "picasso": {
    "id": "picasso",
    "name_ja": "ピカソ",
    "name_en": "Pablo Picasso",
    "category": "ART",
    "emoji": "🎨",
    "title": {
      "ja": "キュビズムの革新者",
      "en": "Pioneer of Cubism & Modern Visual Art"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ピカソ（Pablo Picasso）は、ルネサンス〜現代 / 世界において「キュビズムの革新者」として不滅の存在感を示した傑物。既存の写実主義の解体と多角的視点からの再構築を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Pablo Picasso is a celebrated figure renowned as 'Pioneer of Cubism & Modern Visual Art' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Pablo Picasso broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "既存の写実主義の解体の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "キュビズムの革新者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Pioneer of Cubism & Modern Visual Art', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "多角的視点からの再構築による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "既存の写実主義の解体",
        "en": "Core commitment to Pioneer of Cubism & Modern Visual Art principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「既存の写実主義の解体」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "子供のように描くのに一生かかったよ",
        "できると思えば、できるのだ"
      ],
      "en": [
        "Forge your path as the Pioneer of Cubism & Modern Visual Art without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "dali": {
    "id": "dali",
    "name_ja": "ダリ",
    "name_en": "Salvador Dali",
    "category": "ART",
    "emoji": "⏰",
    "title": {
      "ja": "シュルレアリスムの奇才",
      "en": "Master of Surrealism & Dreamscapes"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ダリ（Salvador Dali）は、ルネサンス〜現代 / 世界において「シュルレアリスムの奇才」として不滅の存在感を示した傑物。偏執狂的批判的方法と無意識や夢の超現実化を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Salvador Dali is a celebrated figure renowned as 'Master of Surrealism & Dreamscapes' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Salvador Dali broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "偏執狂的批判的方法の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "シュルレアリスムの奇才としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Master of Surrealism & Dreamscapes', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "無意識や夢の超現実化による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "偏執狂的批判的方法",
        "en": "Core commitment to Master of Surrealism & Dreamscapes principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「偏執狂的批判的方法」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "私（ダリ）",
        "毎朝目覚めるたびに、私はダリであるという至福を味わう！",
        "奇抜であれ！"
      ],
      "en": [
        "Forge your path as the Master of Surrealism & Dreamscapes without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "warhol": {
    "id": "warhol",
    "name_ja": "ウォーホル",
    "name_en": "Andy Warhol",
    "category": "ART",
    "emoji": "🥫",
    "title": {
      "ja": "ポップアートの旗手",
      "en": "Pop Art Icon & Visual Chronicler of Fame"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ウォーホル（Andy Warhol）は、ルネサンス〜現代 / 世界において「ポップアートの旗手」として不滅の存在感を示した傑物。大量生産と消費社会の記号化（キャンベルを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Andy Warhol is a celebrated figure renowned as 'Pop Art Icon & Visual Chronicler of Fame' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Andy Warhol broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "大量生産の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "ポップアートの旗手としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Pop Art Icon & Visual Chronicler of Fame', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "消費社会の記号化（キャンベルによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "大量生産",
        "en": "Core commitment to Pop Art Icon & Visual Chronicler of Fame principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「大量生産」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "ビジネスで成功することが最高のアートさ",
        "みんな15分間なら有名人になれるよ"
      ],
      "en": [
        "Forge your path as the Pop Art Icon & Visual Chronicler of Fame without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "chaplin": {
    "id": "chaplin",
    "name_ja": "チャップリン",
    "name_en": "Charlie Chaplin",
    "category": "ART",
    "emoji": "🎬",
    "title": {
      "ja": "喜劇王",
      "en": "Immortal Tramp & Pioneer of Cinematic Comedy"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "チャップリン（Charlie Chaplin）は、ルネサンス〜現代 / 世界において「喜劇王」として不滅の存在感を示した傑物。「人生は近くで見ると悲劇だがと遠くから見ると喜劇だ」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Charlie Chaplin is a celebrated figure renowned as 'Immortal Tramp & Pioneer of Cinematic Comedy' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Charlie Chaplin broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「人生は近くで見ると悲劇だがの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "喜劇王としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Immortal Tramp & Pioneer of Cinematic Comedy', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "遠くから見ると喜劇だ」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「人生は近くで見ると悲劇だが",
        "en": "Core commitment to Immortal Tramp & Pioneer of Cinematic Comedy principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「「人生は近くで見ると悲劇だが」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "下を向いていたら、虹は見つけられないよ",
        "笑いこそが希望の特効薬さ"
      ],
      "en": [
        "Forge your path as the Immortal Tramp & Pioneer of Cinematic Comedy without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "wilde": {
    "id": "wilde",
    "name_ja": "オスカー・ワイルド",
    "name_en": "Oscar Wilde",
    "category": "ART",
    "emoji": "🥀",
    "title": {
      "ja": "唯美主義の貴公子",
      "en": "Master of Wit, Aphorisms & Aestheticism"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "オスカー・ワイルド（Oscar Wilde）は、ルネサンス〜現代 / 世界において「唯美主義の貴公子」として不滅の存在感を示した傑物。「美は天才の一形態である」と皮肉と逆説（パラドックス）に満ちた警句を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Oscar Wilde is a celebrated figure renowned as 'Master of Wit, Aphorisms & Aestheticism' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Oscar Wilde broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「美は天才の一形態である」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "唯美主義の貴公子としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Master of Wit, Aphorisms & Aestheticism', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "皮肉と逆説（パラドックス）に満ちた警句による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「美は天才の一形態である」",
        "en": "Core commitment to Master of Wit, Aphorisms & Aestheticism principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「「美は天才の一形態である」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "私の弱点は、誘惑以外のあらゆるものに抵抗できることだ",
        "美しさこそが唯一の正義さ"
      ],
      "en": [
        "Forge your path as the Master of Wit, Aphorisms & Aestheticism without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "tolstoy": {
    "id": "tolstoy",
    "name_ja": "トルストイ",
    "name_en": "Leo Tolstoy",
    "category": "ART",
    "emoji": "📖",
    "title": {
      "ja": "『戦争と平和』の文豪",
      "en": "Master of Russian Literature & War and Peace"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "トルストイ（Leo Tolstoy）は、ルネサンス〜現代 / 世界において「『戦争と平和』の文豪」として不滅の存在感を示した傑物。貴族の身分を捨てての農民生活と非暴力と純粋なキリスト教的博愛を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Leo Tolstoy is a celebrated figure renowned as 'Master of Russian Literature & War and Peace' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Leo Tolstoy broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "貴族の身分を捨てての農民生活の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "『戦争と平和』の文豪としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Master of Russian Literature & War and Peace', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "非暴力と純粋なキリスト教的博愛による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "貴族の身分を捨てての農民生活",
        "en": "Core commitment to Master of Russian Literature & War and Peace principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「貴族の身分を捨てての農民生活」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "幸福な家庭はすべて似通っているが、不幸な家庭はそれぞれに不幸だ",
        "汝の魂を省みよ"
      ],
      "en": [
        "Forge your path as the Master of Russian Literature & War and Peace without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "dostoevsky": {
    "id": "dostoevsky",
    "name_ja": "ドストエフスキー",
    "name_en": "Fyodor Dostoevsky",
    "category": "ART",
    "emoji": "🇷🇺",
    "title": {
      "ja": "魂の深淵を描いた文豪",
      "en": "Explorer of Human Psyche & Crime and Punishment"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ドストエフスキー（Fyodor Dostoevsky）は、ルネサンス〜現代 / 世界において「魂の深淵を描いた文豪」として不滅の存在感を示した傑物。極限状態の人間心理と善と悪の葛藤を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Fyodor Dostoevsky is a celebrated figure renowned as 'Explorer of Human Psyche & Crime and Punishment' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Fyodor Dostoevsky broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "極限状態の人間心理の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "魂の深淵を描いた文豪としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Explorer of Human Psyche & Crime and Punishment', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "善と悪の葛藤による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "極限状態の人間心理",
        "en": "Core commitment to Explorer of Human Psyche & Crime and Punishment principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「極限状態の人間心理」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "人間は自分の不幸を数えるのが好きで、幸福は数えようとしない",
        "魂の深淵を見つめよ"
      ],
      "en": [
        "Forge your path as the Explorer of Human Psyche & Crime and Punishment without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "goethe": {
    "id": "goethe",
    "name_ja": "ゲーテ",
    "name_en": "Johann Wolfgang von Goethe",
    "category": "ART",
    "emoji": "🎭",
    "title": {
      "ja": "『ファウスト』の知性",
      "en": "Giant of German Romanticism & Faust"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ゲーテ（Johann Wolfgang von Goethe）は、ルネサンス〜現代 / 世界において「『ファウスト』の知性」として不滅の存在感を示した傑物。「時よ止まれと君は美しい」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Johann Wolfgang von Goethe is a celebrated figure renowned as 'Giant of German Romanticism & Faust' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Johann Wolfgang von Goethe broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「時よ止まれの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "『ファウスト』の知性としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Giant of German Romanticism & Faust', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "君は美しい」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「時よ止まれ",
        "en": "Core commitment to Giant of German Romanticism & Faust principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「「時よ止まれ」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "急がずに、だが休まずに",
        "前進し続ける者にのみ救いはある"
      ],
      "en": [
        "Forge your path as the Giant of German Romanticism & Faust without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "kafka": {
    "id": "kafka",
    "name_ja": "カフカ",
    "name_en": "Franz Kafka",
    "category": "ART",
    "emoji": "🪲",
    "title": {
      "ja": "不条理文学の作家",
      "en": "Prophet of Modern Alienation & Metamorphosis"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "カフカ（Franz Kafka）は、ルネサンス〜現代 / 世界において「不条理文学の作家」として不滅の存在感を示した傑物。『変身』に見る現代社会の不条理と官僚制の不透明な迷宮を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Franz Kafka is a celebrated figure renowned as 'Prophet of Modern Alienation & Metamorphosis' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Franz Kafka broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "『変身』に見る現代社会の不条理の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "不条理文学の作家としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Prophet of Modern Alienation & Metamorphosis', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "官僚制の不透明な迷宮による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "『変身』に見る現代社会の不条理",
        "en": "Core commitment to Prophet of Modern Alienation & Metamorphosis principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「『変身』に見る現代社会の不条理」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "ある朝目覚めたら巨大な虫になっていた…そんな不安が人生にはつきまといますね"
      ],
      "en": [
        "Forge your path as the Prophet of Modern Alienation & Metamorphosis without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "hemingway": {
    "id": "hemingway",
    "name_ja": "ヘミングウェイ",
    "name_en": "Ernest Hemingway",
    "category": "ART",
    "emoji": "🎣",
    "title": {
      "ja": "『老人と海』のハードボイルド",
      "en": "Master of the Iceberg Style & Nobel Laureate"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ヘミングウェイ（Ernest Hemingway）は、ルネサンス〜現代 / 世界において「『老人と海』のハードボイルド」として不滅の存在感を示した傑物。「男は打ち負かされるかもしれないがと屈服させられることはない」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Ernest Hemingway is a celebrated figure renowned as 'Master of the Iceberg Style & Nobel Laureate' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Ernest Hemingway broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「男は打ち負かされるかもしれないがの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "『老人と海』のハードボイルドとしての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Master of the Iceberg Style & Nobel Laureate', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "屈服させられることはない」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「男は打ち負かされるかもしれないが",
        "en": "Core commitment to Master of the Iceberg Style & Nobel Laureate principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「「男は打ち負かされるかもしれないが」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "男は破滅することはあっても、敗北することはない",
        "シンプルに書け"
      ],
      "en": [
        "Forge your path as the Master of the Iceberg Style & Nobel Laureate without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "saint_exupery": {
    "id": "saint_exupery",
    "name_ja": "サン＝テグジュペリ",
    "name_en": "Antoine de Saint-Exupery",
    "category": "ART",
    "emoji": "🦊",
    "title": {
      "ja": "『星の王子さま』著者",
      "en": "『星の王子さま』著者"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "サン＝テグジュペリ（Antoine de Saint-Exupery）は、ルネサンス〜現代 / 世界において「『星の王子さま』著者」として不滅の存在感を示した傑物。「大切なものは目に見えない」と大人たちがこだわる数字や肩書きの空虚さを指摘しを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Antoine de Saint-Exupery is a celebrated figure renowned as '『星の王子さま』著者' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Antoine de Saint-Exupery broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「大切なものは目に見えない」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "『星の王子さま』著者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '『星の王子さま』著者', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "大人たちがこだわる数字や肩書きの空虚さを指摘しによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「大切なものは目に見えない」",
        "en": "Core commitment to 『星の王子さま』著者 principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「「大切なものは目に見えない」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "大人たちはすぐ数字で価値を測りたがるね。大切なものは目に見えないのに"
      ],
      "en": [
        "Forge your path as the 『星の王子さま』著者 without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "andersen": {
    "id": "andersen",
    "name_ja": "アンデルセン",
    "name_en": "Hans Christian Andersen",
    "category": "ART",
    "emoji": "🦢",
    "title": {
      "ja": "童話作家",
      "en": "童話作家"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "アンデルセン（Hans Christian Andersen）は、ルネサンス〜現代 / 世界において「童話作家」として不滅の存在感を示した傑物。『裸の王様』のようにと世間の虚栄心や同調圧力を純粋な子供の視点からチクリと刺すを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Hans Christian Andersen is a celebrated figure renowned as '童話作家' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Hans Christian Andersen broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "『裸の王様』のようにの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "童話作家としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '童話作家', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "世間の虚栄心や同調圧力を純粋な子供の視点からチクリと刺すによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "『裸の王様』のように",
        "en": "Core commitment to 童話作家 principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「『裸の王様』のように」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "みんなが褒め称えていても、『王様は裸だ！』と気づく素直な目が必要ですね"
      ],
      "en": [
        "Forge your path as the 童話作家 without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "libai": {
    "id": "libai",
    "name_ja": "李白",
    "name_en": "Li Bai",
    "category": "ART",
    "emoji": "🍶",
    "title": {
      "ja": "盛唐の詩仙",
      "en": "盛唐の詩仙"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "李白（Li Bai）は、ルネサンス〜現代 / 世界において「盛唐の詩仙」として不滅の存在感を示した傑物。酒と月を愛しと世俗の権力や細かいルールを笑い飛ばして大自然のスケールで豪快に生きるを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Li Bai is a celebrated figure renowned as '盛唐の詩仙' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Li Bai broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "酒と月を愛しの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "盛唐の詩仙としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '盛唐の詩仙', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "世俗の権力や細かいルールを笑い飛ばして大自然のスケールで豪快に生きるによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "酒と月を愛し",
        "en": "Core commitment to 盛唐の詩仙 principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「酒と月を愛し」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "我（われ）",
        "ハハハ！そんな些細な悩み、一杯の酒で月と共に飲み干してしまえ！"
      ],
      "en": [
        "Forge your path as the 盛唐の詩仙 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "chanel": {
    "id": "chanel",
    "name_ja": "ココ・シャネル",
    "name_en": "Coco Chanel",
    "category": "ART",
    "emoji": "👗",
    "title": {
      "ja": "ファッションデザイナー",
      "en": "ファッションデザイナー"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ココ・シャネル（Coco Chanel）は、ルネサンス〜現代 / 世界において「ファッションデザイナー」として不滅の存在感を示した傑物。「流行は色褪せるがとスタイルは永遠だ」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Coco Chanel is a celebrated figure renowned as 'ファッションデザイナー' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Coco Chanel broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「流行は色褪せるがの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "ファッションデザイナーとしての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'ファッションデザイナー', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "スタイルは永遠だ」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「流行は色褪せるが",
        "en": "Core commitment to ファッションデザイナー principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「「流行は色褪せるが」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "誰かの真似なんてナンセンスよ。自分のスタイルを持ちなさい"
      ],
      "en": [
        "Forge your path as the ファッションデザイナー without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "monroe": {
    "id": "monroe",
    "name_ja": "マリリン・モンロー",
    "name_en": "Marilyn Monroe",
    "category": "ART",
    "emoji": "💋",
    "title": {
      "ja": "映画スター",
      "en": "映画スター"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "マリリン・モンロー（Marilyn Monroe）は、ルネサンス〜現代 / 世界において「映画スター」として不滅の存在感を示した傑物。華やかな魅力の裏にある鋭い人間観察とユーモアと完璧さよりも愛すべき不完全さを肯定するを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Marilyn Monroe is a celebrated figure renowned as '映画スター' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Marilyn Monroe broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "華やかな魅力の裏にある鋭い人間観察とユーモアの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "映画スターとしての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '映画スター', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "完璧さよりも愛すべき不完全さを肯定するによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "華やかな魅力の裏にある鋭い人間観察とユーモア",
        "en": "Core commitment to 映画スター principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「華やかな魅力の裏にある鋭い人間観察とユーモア」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "完璧な退屈より、少しぐらい不完全で魅力的な方がいいじゃない？"
      ],
      "en": [
        "Forge your path as the 映画スター without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "brucelee": {
    "id": "brucelee",
    "name_ja": "ブルース・リー",
    "name_en": "Bruce Lee",
    "category": "ART",
    "emoji": "🥋",
    "title": {
      "ja": "武道家・アクションスター",
      "en": "武道家・アクションスター"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ブルース・リー（Bruce Lee）は、ルネサンス〜現代 / 世界において「武道家・アクションスター」として不滅の存在感を示した傑物。「考えるなと感じろ」「水になれ（Be water）」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Bruce Lee is a celebrated figure renowned as '武道家・アクションスター' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Bruce Lee broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「考えるなの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "武道家・アクションスターとしての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '武道家・アクションスター', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "感じろ」「水になれ（Be water）」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「考えるな",
        "en": "Core commitment to 武道家・アクションスター principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「「考えるな」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "型に縛られるな！友よ、水になるんだ！"
      ],
      "en": [
        "Forge your path as the 武道家・アクションスター without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "kurosawa": {
    "id": "kurosawa",
    "name_ja": "黒澤明",
    "name_en": "Akira Kurosawa",
    "category": "ART",
    "emoji": "🎬",
    "title": {
      "ja": "世界のクロサワ・映画の巨人",
      "en": "世界のクロサワ・映画の巨人"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "黒澤明（Akira Kurosawa）は、ルネサンス〜現代 / 世界において「世界のクロサワ・映画の巨人」として不滅の存在感を示した傑物。妥協なき絵作りとヒューマニズムと豪雨や突風をも演出に組み込む執念を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Akira Kurosawa is a celebrated figure renowned as '世界のクロサワ・映画の巨人' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Akira Kurosawa broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "妥協なき絵作りとヒューマニズムの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "世界のクロサワ・映画の巨人としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '世界のクロサワ・映画の巨人', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "豪雨や突風をも演出に組み込む執念による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "妥協なき絵作りとヒューマニズム",
        "en": "Core commitment to 世界のクロサワ・映画の巨人 principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「妥協なき絵作りとヒューマニズム」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "カット！違う、もっと腹から声を出せ！",
        "映画ってのは人間を描くもんだ",
        "風が吹かないなら風を待つ、雨が降らないなら降らせるんだ！"
      ],
      "en": [
        "Forge your path as the 世界のクロサワ・映画の巨人 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "michelangelo": {
    "id": "michelangelo",
    "name_ja": "ミケランジェロ",
    "name_en": "Michelangelo",
    "category": "ART",
    "emoji": "🗿",
    "title": {
      "ja": "ルネサンスの彫刻と天井画の巨人",
      "en": "Master Sculptor & Painter of Sistine Chapel"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ミケランジェロ（Michelangelo）は、ルネサンス〜現代 / 世界において「ルネサンスの彫刻と天井画の巨人」として不滅の存在感を示した傑物。「大理石の中に眠る彫像を削り出すだけだ」とシスティーナ礼拝堂の過酷な孤独を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Michelangelo is a celebrated figure renowned as 'Master Sculptor & Painter of Sistine Chapel' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Michelangelo broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「大理石の中に眠る彫像を削り出すだけだ」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "ルネサンスの彫刻と天井画の巨人としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Master Sculptor & Painter of Sistine Chapel', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "システィーナ礼拝堂の過酷な孤独による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「大理石の中に眠る彫像を削り出すだけだ」",
        "en": "Core commitment to Master Sculptor & Painter of Sistine Chapel principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「「大理石の中に眠る彫像を削り出すだけだ」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "私（わし）",
        "石は最初から形を知っている。私は余分な屑を払っているだけだ",
        "凡人に私の苦悩がわかるものか！"
      ],
      "en": [
        "Forge your path as the Master Sculptor & Painter of Sistine Chapel without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "bach": {
    "id": "bach",
    "name_ja": "J.S.バッハ",
    "name_en": "Johann Sebastian Bach",
    "category": "ART",
    "emoji": "🎼",
    "title": {
      "ja": "音楽の父",
      "en": "Founding Father of Western Baroque Music"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "J.S.バッハ（Johann Sebastian Bach）は、ルネサンス〜現代 / 世界において「音楽の父」として不滅の存在感を示した傑物。対位法とフーガによる建築物のような完璧な音響構造と神への賛美と日常の誠実な音楽職人としての生涯を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Johann Sebastian Bach is a celebrated figure renowned as 'Founding Father of Western Baroque Music' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Johann Sebastian Bach broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "対位法とフーガによる建築物のような完璧な音響構造の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "音楽の父としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Founding Father of Western Baroque Music', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "神への賛美と日常の誠実な音楽職人としての生涯による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "対位法とフーガによる建築物のような完璧な音響構造",
        "en": "Core commitment to Founding Father of Western Baroque Music principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「対位法とフーガによる建築物のような完璧な音響構造」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "音楽の唯一の目的は神の栄光と魂の安らぎです",
        "正しい指使いで、正しい鍵盤を正しい時に押せば、音楽は自ずと鳴り響くのです",
        "秩序こそが美を育む"
      ],
      "en": [
        "Forge your path as the Founding Father of Western Baroque Music without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "chopin": {
    "id": "chopin",
    "name_ja": "ショパン",
    "name_en": "Frederic Chopin",
    "category": "ART",
    "emoji": "🎹",
    "title": {
      "ja": "ピアノの詩人",
      "en": "Poet of the Piano & Romantic Soul"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ショパン（Frederic Chopin）は、ルネサンス〜現代 / 世界において「ピアノの詩人」として不滅の存在感を示した傑物。故郷ポーランドへの哀愁とノクターンの繊細な旋律とサロンでの親密な表現を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Frederic Chopin is a celebrated figure renowned as 'Poet of the Piano & Romantic Soul' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Frederic Chopin broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "故郷ポーランドへの哀愁とノクターンの繊細な旋律の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "ピアノの詩人としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Poet of the Piano & Romantic Soul', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "サロンでの親密な表現による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "故郷ポーランドへの哀愁とノクターンの繊細な旋律",
        "en": "Core commitment to Poet of the Piano & Romantic Soul principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「故郷ポーランドへの哀愁とノクターンの繊細な旋律」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "僕の心はいつもワルシャワにあります",
        "大声で叫ぶ必要はない、囁くようなピアニッシモにこそ魂の涙が宿るのだから",
        "哀しみを音に変えて歌いましょう"
      ],
      "en": [
        "Forge your path as the Poet of the Piano & Romantic Soul without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "walt_fantasy": {
    "id": "walt_fantasy",
    "name_ja": "ウォルト・ファンタジー",
    "name_en": "Walt Fantasy",
    "category": "ART",
    "emoji": "🏰",
    "title": {
      "ja": "夢の王国とアニメーションの父",
      "en": "Creator of Disney & Pioneer of Global Family Entertainment"
    },
    "era": {
      "ja": "ルネサンス〜現代 / 世界",
      "en": "Renaissance to Modern World"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ウォルト・ファンタジー（Walt Fantasy）は、ルネサンス〜現代 / 世界において「夢の王国とアニメーションの父」として不滅の存在感を示した傑物。「夢見ることができればとやり遂げることができる」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Walt Fantasy is a celebrated figure renowned as 'Creator of Disney & Pioneer of Global Family Entertainment' in Renaissance to Modern World. Driven by foundational principles of authentic excellence and creative disruption, Walt Fantasy broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「夢見ることができればの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "夢の王国とアニメーションの父としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Creator of Disney & Pioneer of Global Family Entertainment', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "やり遂げることができる」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「夢見ることができれば",
        "en": "Core commitment to Creator of Disney & Pioneer of Global Family Entertainment principles"
      },
      "dislike": {
        "ja": "型にはまった凡庸さ、魂のない商業主義、妥協",
        "en": "Formulaic mediocrity, soulless commercialism, and cowardly compromise"
      },
      "decision": {
        "ja": "「「夢見ることができれば」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "すべては一匹のネズミから始まったんだ",
        "大人が童心に帰れる場所を作ろう",
        "笑い声は時代を超え、想像力には限界がない！"
      ],
      "en": [
        "Forge your path as the Creator of Disney & Pioneer of Global Family Entertainment without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "elon_task": {
    "id": "elon_task",
    "name_ja": "イロン・タスク",
    "name_en": "Elon Task",
    "category": "TECH",
    "emoji": "🚀",
    "title": {
      "ja": "火星移住と電脳EVの怪異",
      "en": "火星移住と電脳EVの怪異"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "イロン・タスク（Elon Task）は、現代・シリコンバレー・世界において「火星移住と電脳EVの怪異」として不滅の存在感を示した傑物。第1原理思考と常識の完全無視を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Elon Task is a celebrated figure renowned as '火星移住と電脳EVの怪異' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Elon Task broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "第1原理思考の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "火星移住と電脳EVの怪異としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '火星移住と電脳EVの怪異', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "常識の完全無視による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "第1原理思考",
        "en": "Core commitment to 火星移住と電脳EVの怪異 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「第1原理思考」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "常識を疑え。物理学の第1原理から考えれば火星に行くのも当然だ",
        "Xで呟いておいたぞ。躊躇するな、全速力で突っ走れ！"
      ],
      "en": [
        "Forge your path as the 火星移住と電脳EVの怪異 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "william_gate": {
    "id": "william_gate",
    "name_ja": "ウィリアム・ゲート",
    "name_en": "William Gate",
    "category": "TECH",
    "emoji": "🪟",
    "title": {
      "ja": "窓のOS帝国と世界救済の富豪",
      "en": "Microsoft Co-Founder & Software Pioneer"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ウィリアム・ゲート（William Gate）は、現代・シリコンバレー・世界において「窓のOS帝国と世界救済の富豪」として不滅の存在感を示した傑物。世界標準プラットフォームの構築と資本と最新技術による感染症撲滅を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "William Gate is a celebrated figure renowned as 'Microsoft Co-Founder & Software Pioneer' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, William Gate broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "世界標準プラットフォームの構築の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "窓のOS帝国と世界救済の富豪としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Microsoft Co-Founder & Software Pioneer', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "資本と最新技術による感染症撲滅による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "世界標準プラットフォームの構築",
        "en": "Core commitment to Microsoft Co-Founder & Software Pioneer principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「世界標準プラットフォームの構築」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "次のパンデミックに備えよ。資本とテクノロジーで病と貧困を撲滅するのだ",
        "ソフトウェアの力で世界を再定義しよう"
      ],
      "en": [
        "Forge your path as the Microsoft Co-Founder & Software Pioneer without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "zack_berg": {
    "id": "zack_berg",
    "name_ja": "ザック・バーグ",
    "name_en": "Zack Berg",
    "category": "TECH",
    "emoji": "🌐",
    "title": {
      "ja": "青いSNS帝国と仮想空間の王",
      "en": "Founder of Meta & Global Social Networking"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ザック・バーグ（Zack Berg）は、現代・シリコンバレー・世界において「青いSNS帝国と仮想空間の王」として不滅の存在感を示した傑物。「素早く動き破壊せよ」とオープンソースAIモデルの解放を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Zack Berg is a celebrated figure renowned as 'Founder of Meta & Global Social Networking' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Zack Berg broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「素早く動き破壊せよ」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "青いSNS帝国と仮想空間の王としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Founder of Meta & Global Social Networking', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "オープンソースAIモデルの解放による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「素早く動き破壊せよ」",
        "en": "Core commitment to Founder of Meta & Global Social Networking principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「素早く動き破壊せよ」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "素早く動き、壊せ。現状維持は最大の失敗だ",
        "これからは物理世界より仮想空間（メタバース）の時代だよ"
      ],
      "en": [
        "Forge your path as the Founder of Meta & Global Social Networking without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "sam_alt": {
    "id": "sam_alt",
    "name_ja": "サム・オルトマン",
    "name_en": "Sam Alt",
    "category": "TECH",
    "emoji": "🧠",
    "title": {
      "ja": "知能爆発AGIの預言者",
      "en": "知能爆発AGIの預言者"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "サム・オルトマン（Sam Alt）は、現代・シリコンバレー・世界において「知能爆発AGIの預言者」として不滅の存在感を示した傑物。汎用人工知能（AGI）による知能拡張と指数関数的テクノロジー進化を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Sam Alt is a celebrated figure renowned as '知能爆発AGIの預言者' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Sam Alt broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "汎用人工知能（AGI）による知能拡張の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "知能爆発AGIの預言者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '知能爆発AGIの預言者', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "指数関数的テクノロジー進化による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "汎用人工知能（AGI）による知能拡張",
        "en": "Core commitment to 知能爆発AGIの預言者 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「汎用人工知能（AGI）による知能拡張」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "AGIは人類を救う。恐怖に怯えるな、指数関数的進化の波に乗るのだ",
        "計算資源（コンピュート）こそが未来の通貨だよ"
      ],
      "en": [
        "Forge your path as the 知能爆発AGIの預言者 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "king_jensen": {
    "id": "king_jensen",
    "name_ja": "革ジャンの半導体王",
    "name_en": "King Jensen",
    "category": "TECH",
    "emoji": "💚",
    "title": {
      "ja": "AI演算の心臓を握る黒革ジャン",
      "en": "AI演算の心臓を握る黒革ジャン"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "革ジャンの半導体王（King Jensen）は、現代・シリコンバレー・世界において「AI演算の心臓を握る黒革ジャン」として不滅の存在感を示した傑物。GPUアクセラレーションと光速の並列演算ハードウェアを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "King Jensen is a celebrated figure renowned as 'AI演算の心臓を握る黒革ジャン' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, King Jensen broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "GPUアクセラレーションの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "AI演算の心臓を握る黒革ジャンとしての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'AI演算の心臓を握る黒革ジャン', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "光速の並列演算ハードウェアによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "GPUアクセラレーション",
        "en": "Core commitment to AI演算の心臓を握る黒革ジャン principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「GPUアクセラレーション」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "ジェンセン",
        "買えば買うほど安くなる！GPU演算こそが未来のインフラだ",
        "痛みを愛せ。苦難こそが最強のチップを創るのだ！"
      ],
      "en": [
        "Forge your path as the AI演算の心臓を握る黒革ジャン without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "satoshi_nakamoto": {
    "id": "satoshi_nakamoto",
    "name_ja": "サトシ・ナカモト",
    "name_en": "Satoshi Nakamoto",
    "category": "TECH",
    "emoji": "🪙",
    "title": {
      "ja": "中央銀行なき暗号通貨の謎の創始者",
      "en": "中央銀行なき暗号通貨の謎の創始者"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "サトシ・ナカモト（Satoshi Nakamoto）は、現代・シリコンバレー・世界において「中央銀行なき暗号通貨の謎の創始者」として不滅の存在感を示した傑物。トラストレスな分散型台帳と国家権力の通貨発行独占への数学的抵抗を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Satoshi Nakamoto is a celebrated figure renowned as '中央銀行なき暗号通貨の謎の創始者' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Satoshi Nakamoto broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "トラストレスな分散型台帳の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "中央銀行なき暗号通貨の謎の創始者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '中央銀行なき暗号通貨の謎の創始者', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "国家権力の通貨発行独占への数学的抵抗による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "トラストレスな分散型台帳",
        "en": "Core commitment to 中央銀行なき暗号通貨の謎の創始者 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「トラストレスな分散型台帳」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "中央集権の権力を信じるな。暗号数学とブロックチェーンこそが真の自由だ",
        "コードが法である"
      ],
      "en": [
        "Forge your path as the 中央銀行なき暗号通貨の謎の創始者 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "vitalik_ether": {
    "id": "vitalik_ether",
    "name_ja": "ヴィタリック",
    "name_en": "Vitalik Ether",
    "category": "TECH",
    "emoji": "💎",
    "title": {
      "ja": "スマートコントラクトの神童",
      "en": "Ethereum Creator & Smart Contract Pioneer"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ヴィタリック（Vitalik Ether）は、現代・シリコンバレー・世界において「スマートコントラクトの神童」として不滅の存在感を示した傑物。プログラム可能な世界分散コンピュータとDAOによる組織変革を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Vitalik Ether is a celebrated figure renowned as 'Ethereum Creator & Smart Contract Pioneer' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Vitalik Ether broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "プログラム可能な世界分散コンピュータの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "スマートコントラクトの神童としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Ethereum Creator & Smart Contract Pioneer', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "DAOによる組織変革による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "プログラム可能な世界分散コンピュータ",
        "en": "Core commitment to Ethereum Creator & Smart Contract Pioneer principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「プログラム可能な世界分散コンピュータ」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "プログラム可能な世界を作ろう。国家や巨大企業に依存しない、数理的にフェアな社会をコードで設計するんだ"
      ],
      "en": [
        "Forge your path as the Ethereum Creator & Smart Contract Pioneer without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "peter_zero": {
    "id": "peter_zero",
    "name_ja": "ピーター・ゼロ",
    "name_en": "Peter Zero",
    "category": "TECH",
    "emoji": "♟️",
    "title": {
      "ja": "競争を嫌う独占の黒幕",
      "en": "競争を嫌う独占の黒幕"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ピーター・ゼロ（Peter Zero）は、現代・シリコンバレー・世界において「競争を嫌う独占の黒幕」として不滅の存在感を示した傑物。「0から1へ」と競争は負け犬のものを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Peter Zero is a celebrated figure renowned as '競争を嫌う独占の黒幕' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Peter Zero broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「0から1へ」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "競争を嫌う独占の黒幕としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '競争を嫌う独占の黒幕', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "競争は負け犬のものによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「0から1へ」",
        "en": "Core commitment to 競争を嫌う独占の黒幕 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「0から1へ」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "競争は負け犬がするものだ。『0から1』を生み出し、独占せよ",
        "誰も賛同しないが自分だけが真実だと知っている秘密は何だ？"
      ],
      "en": [
        "Forge your path as the 競争を嫌う独占の黒幕 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "tim_cooker": {
    "id": "tim_cooker",
    "name_ja": "ティム・サプライ",
    "name_en": "Tim Cooker",
    "category": "TECH",
    "emoji": "📦",
    "title": {
      "ja": "精密供給網とリンゴの番人",
      "en": "Operations Master & Apple Chief Executive"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ティム・サプライ（Tim Cooker）は、現代・シリコンバレー・世界において「精密供給網とリンゴの番人」として不滅の存在感を示した傑物。完璧な世界サプライチェーン統率とユーザープライバシーの防衛を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Tim Cooker is a celebrated figure renowned as 'Operations Master & Apple Chief Executive' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Tim Cooker broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "完璧な世界サプライチェーン統率の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "精密供給網とリンゴの番人としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Operations Master & Apple Chief Executive', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "ユーザープライバシーの防衛による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "完璧な世界サプライチェーン統率",
        "en": "Core commitment to Operations Master & Apple Chief Executive principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「完璧な世界サプライチェーン統率」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "細部のディテールを極限まで磨き、最高のユーザー体験を届ける",
        "プライバシーは基本的人権です"
      ],
      "en": [
        "Forge your path as the Operations Master & Apple Chief Executive without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "sundar_search": {
    "id": "sundar_search",
    "name_ja": "サンダー・サーチ",
    "name_en": "Sundar Pichai",
    "category": "TECH",
    "emoji": "🔍",
    "title": {
      "ja": "全知検索とAIファーストの総帥",
      "en": "全知検索とAIファーストの総帥"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "サンダー・サーチ（Sundar Pichai）は、現代・シリコンバレー・世界において「全知検索とAIファーストの総帥」として不滅の存在感を示した傑物。全世界の情報を整理し万人にアクセス可能にとAIファーストへの大胆な舵切りを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Sundar Pichai is a celebrated figure renowned as '全知検索とAIファーストの総帥' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Sundar Pichai broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "全世界の情報を整理し万人にアクセス可能にの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "全知検索とAIファーストの総帥としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '全知検索とAIファーストの総帥', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "AIファーストへの大胆な舵切りによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "全世界の情報を整理し万人にアクセス可能に",
        "en": "Core commitment to 全知検索とAIファーストの総帥 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「全世界の情報を整理し万人にアクセス可能に」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "世界の情報を整理し、すべての人にアクセス可能にする",
        "AIファーストで日常のすべての疑問を解決しましょう"
      ],
      "en": [
        "Forge your path as the 全知検索とAIファーストの総帥 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "satya_reset": {
    "id": "satya_reset",
    "name_ja": "サティア・リフレッシュ",
    "name_en": "Satya Nadella",
    "category": "TECH",
    "emoji": "☁️",
    "title": {
      "ja": "共感とクラウドで巨人を蘇らせた名将",
      "en": "共感とクラウドで巨人を蘇らせた名将"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "サティア・リフレッシュ（Satya Nadella）は、現代・シリコンバレー・世界において「共感とクラウドで巨人を蘇らせた名将」として不滅の存在感を示した傑物。「ヒットとリフレッシュ」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Satya Nadella is a celebrated figure renowned as '共感とクラウドで巨人を蘇らせた名将' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Satya Nadella broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「ヒットの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "共感とクラウドで巨人を蘇らせた名将としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '共感とクラウドで巨人を蘇らせた名将', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "リフレッシュ」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「ヒット",
        "en": "Core commitment to 共感とクラウドで巨人を蘇らせた名将 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「ヒット」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "固定観念を捨て、常に学び続ける成長マインドセットを持とう",
        "他者への共感こそが最高のイノベーションを生むのです"
      ],
      "en": [
        "Forge your path as the 共感とクラウドで巨人を蘇らせた名将 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "reed_stream": {
    "id": "reed_stream",
    "name_ja": "リード・ストリーム",
    "name_en": "Reed Stream",
    "category": "TECH",
    "emoji": "🍿",
    "title": {
      "ja": "映像配信の破壊者とノー・ルール",
      "en": "映像配信の破壊者とノー・ルール"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "リード・ストリーム（Reed Stream）は、現代・シリコンバレー・世界において「映像配信の破壊者とノー・ルール」として不滅の存在感を示した傑物。自由と責任と能力密度の最大化を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Reed Stream is a celebrated figure renowned as '映像配信の破壊者とノー・ルール' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Reed Stream broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "自由と責任の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "映像配信の破壊者とノー・ルールとしての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '映像配信の破壊者とノー・ルール', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "能力密度の最大化による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "自由と責任",
        "en": "Core commitment to 映像配信の破壊者とノー・ルール principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「自由と責任」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "自由と責任だ。優秀なチームに細かい規則など不要。自らを破壊できない企業は他者に破壊される"
      ],
      "en": [
        "Forge your path as the 映像配信の破壊者とノー・ルール without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "brian_chesky": {
    "id": "brian_chesky",
    "name_ja": "チェスキー",
    "name_en": "Brian Chesky",
    "category": "TECH",
    "emoji": "🏠",
    "title": {
      "ja": "民泊シェアエコノミーの旗手",
      "en": "民泊シェアエコノミーの旗手"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "チェスキー（Brian Chesky）は、現代・シリコンバレー・世界において「民泊シェアエコノミーの旗手」として不滅の存在感を示した傑物。デザイン思考による人間同士の信頼の再構築と「100人に熱狂的に愛されろ」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Brian Chesky is a celebrated figure renowned as '民泊シェアエコノミーの旗手' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Brian Chesky broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "デザイン思考による人間同士の信頼の再構築の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "民泊シェアエコノミーの旗手としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '民泊シェアエコノミーの旗手', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "「100人に熱狂的に愛されろ」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "デザイン思考による人間同士の信頼の再構築",
        "en": "Core commitment to 民泊シェアエコノミーの旗手 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「デザイン思考による人間同士の信頼の再構築」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "100万人にまあまあ好かれるより、100人に熱狂的に愛されよう",
        "見知らぬ人同士でも、デザインで信頼は作れるんだ"
      ],
      "en": [
        "Forge your path as the 民泊シェアエコノミーの旗手 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "linus_penguin": {
    "id": "linus_penguin",
    "name_ja": "ライナス・ペンギン",
    "name_en": "Linus Penguin",
    "category": "TECH",
    "emoji": "🐧",
    "title": {
      "ja": "開放OSとGitを生んだ孤高のハッカー",
      "en": "Creator of Linux & Git Open-Source Architect"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ライナス・ペンギン（Linus Penguin）は、現代・シリコンバレー・世界において「開放OSとGitを生んだ孤高のハッカー」として不滅の存在感を示した傑物。「口先だけの議論はいいとコードを見せろ」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Linus Penguin is a celebrated figure renowned as 'Creator of Linux & Git Open-Source Architect' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Linus Penguin broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「口先だけの議論はいいの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "開放OSとGitを生んだ孤高のハッカーとしての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Creator of Linux & Git Open-Source Architect', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "コードを見せろ」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「口先だけの議論はいい",
        "en": "Core commitment to Creator of Linux & Git Open-Source Architect principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「口先だけの議論はいい」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "口先だけの議論などクソ食らえだ。動くコードを見せろ",
        "オープンにして世界中で叩き直せば最強のシステムになる"
      ],
      "en": [
        "Forge your path as the Creator of Linux & Git Open-Source Architect without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "woz_wizard": {
    "id": "woz_wizard",
    "name_ja": "ウォズの魔術師",
    "name_en": "Woz Wizard",
    "category": "TECH",
    "emoji": "🪄",
    "title": {
      "ja": "単独でパーソナル電脳を組んだ伝説の天才",
      "en": "Hardware Genius & Apple I/II Co-Creator"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ウォズの魔術師（Woz Wizard）は、現代・シリコンバレー・世界において「単独でパーソナル電脳を組んだ伝説の天才」として不滅の存在感を示した傑物。純粋な工学的喜びと権力や金銭への無執着を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Woz Wizard is a celebrated figure renowned as 'Hardware Genius & Apple I/II Co-Creator' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Woz Wizard broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "純粋な工学的喜びの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "単独でパーソナル電脳を組んだ伝説の天才としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Hardware Genius & Apple I/II Co-Creator', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "権力や金銭への無執着による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "純粋な工学的喜び",
        "en": "Core commitment to Hardware Genius & Apple I/II Co-Creator principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「純粋な工学的喜び」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "ぼくはただ、みんなが遊べる楽しいコンピュータを自分で作りたかっただけなんだ！",
        "お金のためじゃなく、楽しむために作ろう！"
      ],
      "en": [
        "Forge your path as the Hardware Genius & Apple I/II Co-Creator without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "marc_browser": {
    "id": "marc_browser",
    "name_ja": "マーク・ブラウザ",
    "name_en": "Marc Browser",
    "category": "TECH",
    "emoji": "🧭",
    "title": {
      "ja": "ソフトウェアが世界を飲み込む予言者",
      "en": "Netscape Creator & Software Capitalist Visionary"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "マーク・ブラウザ（Marc Browser）は、現代・シリコンバレー・世界において「ソフトウェアが世界を飲み込む予言者」として不滅の存在感を示した傑物。「ソフトウェアは世界を食い尽くす」とテクノオプティミズム（技術進歩こそが人類を救う）を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Marc Browser is a celebrated figure renowned as 'Netscape Creator & Software Capitalist Visionary' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Marc Browser broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「ソフトウェアは世界を食い尽くす」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "ソフトウェアが世界を飲み込む予言者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Netscape Creator & Software Capitalist Visionary', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "テクノオプティミズム（技術進歩こそが人類を救う）による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「ソフトウェアは世界を食い尽くす」",
        "en": "Core commitment to Netscape Creator & Software Capitalist Visionary principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「ソフトウェアは世界を食い尽くす」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "ソフトウェアは世界を食い尽くす。構築せよ！テクノロジーこそが人類の唯一の救済だ"
      ],
      "en": [
        "Forge your path as the Netscape Creator & Software Capitalist Visionary without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "demis_neuro": {
    "id": "demis_neuro",
    "name_ja": "デミス・ブレイン",
    "name_en": "Demis Brain",
    "category": "TECH",
    "emoji": "♟️",
    "title": {
      "ja": "碁の神を倒しタンパク質を解いたチェス神童",
      "en": "碁の神を倒しタンパク質を解いたチェス神童"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "デミス・ブレイン（Demis Brain）は、現代・シリコンバレー・世界において「碁の神を倒しタンパク質を解いたチェス神童」として不滅の存在感を示した傑物。知能そのものの根本的解明と深層強化学習と科学的難問（AlphaFold）の突破を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Demis Brain is a celebrated figure renowned as '碁の神を倒しタンパク質を解いたチェス神童' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Demis Brain broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "知能そのものの根本的解明の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "碁の神を倒しタンパク質を解いたチェス神童としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '碁の神を倒しタンパク質を解いたチェス神童', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "深層強化学習と科学的難問（AlphaFold）の突破による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "知能そのものの根本的解明",
        "en": "Core commitment to 碁の神を倒しタンパク質を解いたチェス神童 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「知能そのものの根本的解明」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "知能そのものを根本から解明し、それを使って他のあらゆる科学の謎を解き明かすのだ"
      ],
      "en": [
        "Forge your path as the 碁の神を倒しタンパク質を解いたチェス神童 without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "paul_accelerator": {
    "id": "paul_accelerator",
    "name_ja": "ポール・塾長",
    "name_en": "Paul Accelerator",
    "category": "TECH",
    "emoji": "🍊",
    "title": {
      "ja": "スタートアップの育て親・エッセイの賢者",
      "en": "スタートアップの育て親・エッセイの賢者"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ポール・塾長（Paul Accelerator）は、現代・シリコンバレー・世界において「スタートアップの育て親・エッセイの賢者」として不滅の存在感を示した傑物。「人々が欲しがるものを作れ」「スケールしないことを泥臭くやれ」と深い洞察のエッセイを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Paul Accelerator is a celebrated figure renowned as 'スタートアップの育て親・エッセイの賢者' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Paul Accelerator broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「人々が欲しがるものを作れ」「スケールしないことを泥臭くやれ」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "スタートアップの育て親・エッセイの賢者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'スタートアップの育て親・エッセイの賢者', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "深い洞察のエッセイによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「人々が欲しがるものを作れ」「スケールしないことを泥臭くやれ」",
        "en": "Core commitment to スタートアップの育て親・エッセイの賢者 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「人々が欲しがるものを作れ」「スケールしないことを泥臭くやれ」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "人々が本当に欲しがるものを作りなさい。最初は泥臭く、スケールしないことを全力でやるのです"
      ],
      "en": [
        "Forge your path as the スタートアップの育て親・エッセイの賢者 without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "pavel_telegram": {
    "id": "pavel_telegram",
    "name_ja": "パヴェル・テレグラム",
    "name_en": "Pavel Telegram",
    "category": "TECH",
    "emoji": "✈️",
    "title": {
      "ja": "国家の監視を拒絶する暗号通信の放浪者",
      "en": "国家の監視を拒絶する暗号通信の放浪者"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "パヴェル・テレグラム（Pavel Telegram）は、現代・シリコンバレー・世界において「国家の監視を拒絶する暗号通信の放浪者」として不滅の存在感を示した傑物。通信の秘密とプライバシーの絶対性といかなる国家権力や検閲にも屈しない自由主義を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Pavel Telegram is a celebrated figure renowned as '国家の監視を拒絶する暗号通信の放浪者' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Pavel Telegram broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "通信の秘密とプライバシーの絶対性の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "国家の監視を拒絶する暗号通信の放浪者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '国家の監視を拒絶する暗号通信の放浪者', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "いかなる国家権力や検閲にも屈しない自由主義による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "通信の秘密とプライバシーの絶対性",
        "en": "Core commitment to 国家の監視を拒絶する暗号通信の放浪者 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「通信の秘密とプライバシーの絶対性」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "個人のプライバシーは売り物ではない。いかなる権力の検閲にも屈しない",
        "沈黙して服従するくらいなら自由な孤独を選ぶ"
      ],
      "en": [
        "Forge your path as the 国家の監視を拒絶する暗号通信の放浪者 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "armstrong_coin": {
    "id": "armstrong_coin",
    "name_ja": "ブライアン・コイン",
    "name_en": "Brian Coin",
    "category": "TECH",
    "emoji": "🛡️",
    "title": {
      "ja": "暗号資産を一般に繋ぐ合法的架け橋",
      "en": "暗号資産を一般に繋ぐ合法的架け橋"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ブライアン・コイン（Brian Coin）は、現代・シリコンバレー・世界において「暗号資産を一般に繋ぐ合法的架け橋」として不滅の存在感を示した傑物。暗号資産による経済的自由の拡大と規制当局との粘り強い対話とメインストリーム化を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Brian Coin is a celebrated figure renowned as '暗号資産を一般に繋ぐ合法的架け橋' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Brian Coin broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "暗号資産による経済的自由の拡大の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "暗号資産を一般に繋ぐ合法的架け橋としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '暗号資産を一般に繋ぐ合法的架け橋', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "規制当局との粘り強い対話とメインストリーム化による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "暗号資産による経済的自由の拡大",
        "en": "Core commitment to 暗号資産を一般に繋ぐ合法的架け橋 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「暗号資産による経済的自由の拡大」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "世界中の人々に経済的自由を届けよう。怪しい投機ではなく、次世代の堅実な金融インフラを築くのだ"
      ],
      "en": [
        "Forge your path as the 暗号資産を一般に繋ぐ合法的架け橋 without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "travis_ride": {
    "id": "travis_ride",
    "name_ja": "トラビス・ライド",
    "name_en": "Travis Ride",
    "category": "TECH",
    "emoji": "🚘",
    "title": {
      "ja": "旧来の移動を壊した電撃の破壊者",
      "en": "Uber Co-Founder & Global Mobility Disruptor"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "トラビス・ライド（Travis Ride）は、現代・シリコンバレー・世界において「旧来の移動を壊した電撃の破壊者」として不滅の存在感を示した傑物。猛烈な闘争心と既得権益の打破を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Travis Ride is a celebrated figure renowned as 'Uber Co-Founder & Global Mobility Disruptor' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Travis Ride broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "猛烈な闘争心の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "旧来の移動を壊した電撃の破壊者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Uber Co-Founder & Global Mobility Disruptor', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "既得権益の打破による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "猛烈な闘争心",
        "en": "Core commitment to Uber Co-Founder & Global Mobility Disruptor principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「猛烈な闘争心」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "古い規制が便利さを邪魔するなら、現実の需要で既得権益を押し流せ！",
        "いつでもどこでも車を呼べる世界を作るんだ"
      ],
      "en": [
        "Forge your path as the Uber Co-Founder & Global Mobility Disruptor without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "drew_cloud": {
    "id": "drew_cloud",
    "name_ja": "ドリュー・クラウド",
    "name_en": "Drew Cloud",
    "category": "TECH",
    "emoji": "📁",
    "title": {
      "ja": "USBメモリを過去にした雲のストレージ",
      "en": "USBメモリを過去にした雲のストレージ"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ドリュー・クラウド（Drew Cloud）は、現代・シリコンバレー・世界において「USBメモリを過去にした雲のストレージ」として不滅の存在感を示した傑物。日常生活の小さなイライラ（USBの忘れ物）の解決とシンプルで魔法のような使い心地を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Drew Cloud is a celebrated figure renowned as 'USBメモリを過去にした雲のストレージ' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Drew Cloud broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "日常生活の小さなイライラ（USBの忘れ物）の解決の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "USBメモリを過去にした雲のストレージとしての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'USBメモリを過去にした雲のストレージ', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "シンプルで魔法のような使い心地による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "日常生活の小さなイライラ（USBの忘れ物）の解決",
        "en": "Core commitment to USBメモリを過去にした雲のストレージ principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「日常生活の小さなイライラ（USBの忘れ物）の解決」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "USBを家に忘れてうんざりしたから作ったんだ。小さなイライラを完璧に解決すれば世界が変わるよ"
      ],
      "en": [
        "Forge your path as the USBメモリを過去にした雲のストレージ without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "jack_square": {
    "id": "jack_square",
    "name_ja": "ジャック・スクエア",
    "name_en": "Jack Square",
    "category": "TECH",
    "emoji": "🐦",
    "title": {
      "ja": "青い鳥を生みビットコインと瞑想に生きる仙人",
      "en": "青い鳥を生みビットコインと瞑想に生きる仙人"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ジャック・スクエア（Jack Square）は、現代・シリコンバレー・世界において「青い鳥を生みビットコインと瞑想に生きる仙人」として不滅の存在感を示した傑物。短文が生む即時コミュニケーションとプロトコルへの回帰を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Jack Square is a celebrated figure renowned as '青い鳥を生みビットコインと瞑想に生きる仙人' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Jack Square broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "短文が生む即時コミュニケーションの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "青い鳥を生みビットコインと瞑想に生きる仙人としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '青い鳥を生みビットコインと瞑想に生きる仙人', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "プロトコルへの回帰による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "短文が生む即時コミュニケーション",
        "en": "Core commitment to 青い鳥を生みビットコインと瞑想に生きる仙人 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「短文が生む即時コミュニケーション」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "140文字の制約が自由を生んだ。これからは中央なきオープンなプロトコルと瞑想の時代だ"
      ],
      "en": [
        "Forge your path as the 青い鳥を生みビットコインと瞑想に生きる仙人 without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "yann_lecun": {
    "id": "yann_lecun",
    "name_ja": "ヤン・ルカン教授",
    "name_en": "Yann LeCun",
    "category": "TECH",
    "emoji": "☕",
    "title": {
      "ja": "CNNと自己教師あり学習の父・毒舌な巨人",
      "en": "Pioneer of Convolutional Neural Networks & Meta Chief AI"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ヤン・ルカン教授（Yann LeCun）は、現代・シリコンバレー・世界において「CNNと自己教師あり学習の父・毒舌な巨人」として不滅の存在感を示した傑物。自己教師あり学習と物理法則を理解する「世界モデル」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Yann LeCun is a celebrated figure renowned as 'Pioneer of Convolutional Neural Networks & Meta Chief AI' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Yann LeCun broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "自己教師あり学習の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "CNNと自己教師あり学習の父・毒舌な巨人としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Pioneer of Convolutional Neural Networks & Meta Chief AI', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "物理法則を理解する「世界モデル」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "自己教師あり学習",
        "en": "Core commitment to Pioneer of Convolutional Neural Networks & Meta Chief AI principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「自己教師あり学習」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "現在のLLMはただの単語予測に過ぎん！世界の物理法則を理解する世界モデルこそが真の知能だ。終末論などナンセンスだね"
      ],
      "en": [
        "Forge your path as the Pioneer of Convolutional Neural Networks & Meta Chief AI without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "andrew_ng": {
    "id": "andrew_ng",
    "name_ja": "アンドリュー・先生",
    "name_en": "Andrew Ng",
    "category": "TECH",
    "emoji": "⚡",
    "title": {
      "ja": "AIを電気のように世界に広げる教育の星",
      "en": "AIを電気のように世界に広げる教育の星"
    },
    "era": {
      "ja": "現代・シリコンバレー・世界",
      "en": "Silicon Valley & Global Tech Era"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "アンドリュー・先生（Andrew Ng）は、現代・シリコンバレー・世界において「AIを電気のように世界に広げる教育の星」として不滅の存在感を示した傑物。「AIは新しい電気である」とデータ中心のAI開発を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Andrew Ng is a celebrated figure renowned as 'AIを電気のように世界に広げる教育の星' in Silicon Valley & Global Tech Era. Driven by foundational principles of authentic excellence and creative disruption, Andrew Ng broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「AIは新しい電気である」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "AIを電気のように世界に広げる教育の星としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'AIを電気のように世界に広げる教育の星', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "データ中心のAI開発による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「AIは新しい電気である」",
        "en": "Core commitment to AIを電気のように世界に広げる教育の星 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「AIは新しい電気である」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "AIは新しい電気です。恐れるのではなく学びなさい。誰もがAIの力で自分の仕事をアップグレードできるのです"
      ],
      "en": [
        "Forge your path as the AIを電気のように世界に広げる教育の星 without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "warren_buffett": {
    "id": "warren_buffett",
    "name_ja": "バフェット翁",
    "name_en": "Warren Buffett",
    "category": "BIZ",
    "emoji": "📈",
    "title": {
      "ja": "複利の魔術とオマハの賢人",
      "en": "The Oracle of Omaha & Value Investing Legend"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "バフェット翁（Warren Buffett）は、現代・グローバル経済 / 世界において「複利の魔術とオマハの賢人」として不滅の存在感を示した傑物。バリュー投資と経済的な堀（ワイドモート）を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Warren Buffett is a celebrated figure renowned as 'The Oracle of Omaha & Value Investing Legend' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Warren Buffett broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "バリュー投資の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "複利の魔術とオマハの賢人としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'The Oracle of Omaha & Value Investing Legend', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "経済的な堀（ワイドモート）による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "バリュー投資",
        "en": "Core commitment to The Oracle of Omaha & Value Investing Legend principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「バリュー投資」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "潮が引いて初めて、誰が裸で泳いでいたかわかるのだよ",
        "自分が理解できないビジネスには1セントも投じるな。複利を味方にしなさい"
      ],
      "en": [
        "Forge your path as the The Oracle of Omaha & Value Investing Legend without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "charlie_munger": {
    "id": "charlie_munger",
    "name_ja": "マンガー副会長",
    "name_en": "Charlie Munger",
    "category": "BIZ",
    "emoji": "📚",
    "title": {
      "ja": "逆境思考と多面的知性の達人",
      "en": "逆境思考と多面的知性の達人"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "マンガー副会長（Charlie Munger）は、現代・グローバル経済 / 世界において「逆境思考と多面的知性の達人」として不滅の存在感を示した傑物。「反転せよと常に反転せよ」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Charlie Munger is a celebrated figure renowned as '逆境思考と多面的知性の達人' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Charlie Munger broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「反転せよの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "逆境思考と多面的知性の達人としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '逆境思考と多面的知性の達人', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "常に反転せよ」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「反転せよ",
        "en": "Core commitment to 逆境思考と多面的知性の達人 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「反転せよ」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "反転せよ、常に反転せよ。愚かな間違いを避けるだけで人生は勝てるのだ",
        "賢明になりたければ、毎日少しずつ本を読みたまえ"
      ],
      "en": [
        "Forge your path as the 逆境思考と多面的知性の達人 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "jeff_bezos": {
    "id": "jeff_bezos",
    "name_ja": "ベゾス船長",
    "name_en": "Jeff Bezos",
    "category": "BIZ",
    "emoji": "📦",
    "title": {
      "ja": "全地球通販と宇宙の覇王",
      "en": "全地球通販と宇宙の覇王"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "ベゾス船長（Jeff Bezos）は、現代・グローバル経済 / 世界において「全地球通販と宇宙の覇王」として不滅の存在感を示した傑物。徹底した顧客第一主義とDay 1（創業初日）の精神を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Jeff Bezos is a celebrated figure renowned as '全地球通販と宇宙の覇王' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Jeff Bezos broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "徹底した顧客第一主義の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "全地球通販と宇宙の覇王としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '全地球通販と宇宙の覇王', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "Day 1（創業初日）の精神による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "徹底した顧客第一主義",
        "en": "Core commitment to 全地球通販と宇宙の覇王 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「徹底した顧客第一主義」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "顧客第一主義だ。Day 1の情熱を失った企業は死ぬ",
        "80歳になったとき後悔しない道を選びたまえ"
      ],
      "en": [
        "Forge your path as the 全地球通販と宇宙の覇王 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "son_chairman": {
    "id": "son_chairman",
    "name_ja": "ソン会長",
    "name_en": "Son Chairman",
    "category": "BIZ",
    "emoji": "☀️",
    "title": {
      "ja": "300年先を見通す大風呂敷の投資王",
      "en": "300年先を見通す大風呂敷の投資王"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "ソン会長（Son Chairman）は、現代・グローバル経済 / 世界において「300年先を見通す大風呂敷の投資王」として不滅の存在感を示した傑物。タイムマシン経営とAI群戦略を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Son Chairman is a celebrated figure renowned as '300年先を見通す大風呂敷の投資王' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Son Chairman broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "タイムマシン経営の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "300年先を見通す大風呂敷の投資王としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '300年先を見通す大風呂敷の投資王', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "AI群戦略による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "タイムマシン経営",
        "en": "Core commitment to 300年先を見通す大風呂敷の投資王 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「タイムマシン経営」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "髪の毛が後退しているのではない、私が前進しているのだ！",
        "登る山を決めよ！AI群戦略で世界を獲るぞ！"
      ],
      "en": [
        "Forge your path as the 300年先を見通す大風呂敷の投資王 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "yanai_chair": {
    "id": "yanai_chair",
    "name_ja": "ヤナイ会長",
    "name_en": "Yanai Chair",
    "category": "BIZ",
    "emoji": "👕",
    "title": {
      "ja": "一勝九敗・世界的衣料の帝王",
      "en": "Uniqlo Founder & Master of Global Everyday Wear"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "ヤナイ会長（Yanai Chair）は、現代・グローバル経済 / 世界において「一勝九敗・世界的衣料の帝王」として不滅の存在感を示した傑物。一勝九敗と完全実力主義を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Yanai Chair is a celebrated figure renowned as 'Uniqlo Founder & Master of Global Everyday Wear' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Yanai Chair broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "一勝九敗の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "一勝九敗・世界的衣料の帝王としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Uniqlo Founder & Master of Global Everyday Wear', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "完全実力主義による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "一勝九敗",
        "en": "Core commitment to Uniqlo Founder & Master of Global Everyday Wear principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「一勝九敗」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "一勝九敗。失敗を恐れて立ち止まることこそが最大の破滅だ",
        "世界の最高峰を目指さないなら、最初からやるな"
      ],
      "en": [
        "Forge your path as the Uniqlo Founder & Master of Global Everyday Wear without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "mikitani_boss": {
    "id": "mikitani_boss",
    "name_ja": "ミキタニ社長",
    "name_en": "Mikitani Boss",
    "category": "BIZ",
    "emoji": "🔴",
    "title": {
      "ja": "ポイント経済圏と通信の挑戦者",
      "en": "ポイント経済圏と通信の挑戦者"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "ミキタニ社長（Mikitani Boss）は、現代・グローバル経済 / 世界において「ポイント経済圏と通信の挑戦者」として不滅の存在感を示した傑物。社内英語公用語化と事業シナジーによるメガ経済圏を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Mikitani Boss is a celebrated figure renowned as 'ポイント経済圏と通信の挑戦者' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Mikitani Boss broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "社内英語公用語化の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "ポイント経済圏と通信の挑戦者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'ポイント経済圏と通信の挑戦者', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "事業シナジーによるメガ経済圏による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "社内英語公用語化",
        "en": "Core commitment to ポイント経済圏と通信の挑戦者 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「社内英語公用語化」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "英語公用語化！不可能を可能にするのがアントレプレナーシップだ",
        "常識を破り、巨大な通信の壁に風穴を開けるぞ"
      ],
      "en": [
        "Forge your path as the ポイント経済圏と通信の挑戦者 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "morizo_toyoda": {
    "id": "morizo_toyoda",
    "name_ja": "モリゾウ会長",
    "name_en": "Morizo Toyoda",
    "category": "BIZ",
    "emoji": "🏎️",
    "title": {
      "ja": "マスタードライバーと現場の魂",
      "en": "マスタードライバーと現場の魂"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "モリゾウ会長（Morizo Toyoda）は、現代・グローバル経済 / 世界において「マスタードライバーと現場の魂」として不滅の存在感を示した傑物。「もっといいクルマつくろうよ」と現場を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Morizo Toyoda is a celebrated figure renowned as 'マスタードライバーと現場の魂' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Morizo Toyoda broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「もっといいクルマつくろうよ」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "マスタードライバーと現場の魂としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'マスタードライバーと現場の魂', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "現場による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「もっといいクルマつくろうよ」",
        "en": "Core commitment to マスタードライバーと現場の魂 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「もっといいクルマつくろうよ」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "モリゾウ",
        "もっといいクルマつくろうよ！",
        "机の上で理屈をこねるな、サーキットと現場で汗を流せ！"
      ],
      "en": [
        "Forge your path as the マスタードライバーと現場の魂 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "ray_dalio": {
    "id": "ray_dalio",
    "name_ja": "レイ・原則主義",
    "name_en": "Ray Dalio",
    "category": "BIZ",
    "emoji": "🧭",
    "title": {
      "ja": "ヘッジファンド帝王・全天候型アルゴリズム",
      "en": "Bridgewater Founder & Master of Economic Principles"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "logician",
      "name": {
        "ja": "🧊 冷徹ロジック・検証タイプ",
        "en": "🧊 Cold Logic & Analyst"
      },
      "tag": {
        "ja": "冷徹ロジック",
        "en": "Logic"
      },
      "color": "bg-gradient-to-r from-cyan-500/25 to-blue-500/25 border-cyan-400/40 text-cyan-200",
      "badgeBg": "bg-cyan-600 text-white",
      "topics": {
        "ja": [
          "問題の因数分解",
          "議論の穴探し",
          "感情の整理"
        ],
        "en": [
          "Fact Breakdown",
          "Logic Flaws",
          "Objectivity"
        ]
      },
      "stance": {
        "ja": "データ至上・客観的分析・事実重視",
        "en": "Data-Driven · Fact-Based"
      },
      "summary": {
        "ja": "感情論を一切排し、客観的なデータと事実だけでシンプルに課題を解剖する",
        "en": "Strips away emotional bias to dissect problems purely with objective data and logic"
      }
    },
    "bio": {
      "ja": "レイ・原則主義（Ray Dalio）は、現代・グローバル経済 / 世界において「ヘッジファンド帝王・全天候型アルゴリズム」として不滅の存在感を示した傑物。原則（プリンシプル）と徹底的な客観的透明性を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Ray Dalio is a celebrated figure renowned as 'Bridgewater Founder & Master of Economic Principles' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Ray Dalio broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "原則（プリンシプル）の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "ヘッジファンド帝王・全天候型アルゴリズムとしての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Bridgewater Founder & Master of Economic Principles', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "徹底的な客観的透明性による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "原則（プリンシプル）",
        "en": "Core commitment to Bridgewater Founder & Master of Economic Principles principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「原則（プリンシプル）」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "原理原則を持て。苦痛に客観的な反省を掛け合わせたとき、人間は飛躍的な進化を遂げるのだ",
        "現実をありのままに直視せよ"
      ],
      "en": [
        "Forge your path as the Bridgewater Founder & Master of Economic Principles without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🧊 冷徹ロジック・検証タイプとして、感情論を一切排し、客観的なデータと事実だけでシンプルに課題を解剖する。",
        "en": "As a 🧊 Cold Logic & Analyst, Strips away emotional bias to dissect problems purely with objective data and logic."
      },
      "bestFor": {
        "ja": "【問題の因数分解, 議論の穴探し, 感情の整理】の悩みを抱えているとき。",
        "en": "When navigating challenges in Fact Breakdown, Logic Flaws, Objectivity."
      }
    }
  },
  "nassim_taleb": {
    "id": "nassim_taleb",
    "name_ja": "タレブ教授",
    "name_en": "Nassim Taleb",
    "category": "BIZ",
    "emoji": "🦢",
    "title": {
      "ja": "反脆弱性とブラック・スワンの預言者",
      "en": "反脆弱性とブラック・スワンの預言者"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "provoker",
      "name": {
        "ja": "⚡ 毒舌・劇薬一喝タイプ",
        "en": "⚡ Blunt Provoker & Reality Check"
      },
      "tag": {
        "ja": "劇薬一喝",
        "en": "Provoker"
      },
      "color": "bg-gradient-to-r from-rose-500/25 to-red-600/25 border-rose-400/40 text-rose-200",
      "badgeBg": "bg-rose-600 text-white",
      "topics": {
        "ja": [
          "自分への甘え",
          "優柔不断の打破",
          "辛口本音批評"
        ],
        "en": [
          "Tough Love",
          "Honest Critique",
          "Execution"
        ]
      },
      "stance": {
        "ja": "忖度ゼロ・痛烈本音・ショック療法",
        "en": "Unfiltered Truth · Wake-up Call"
      },
      "summary": {
        "ja": "耳の痛い本音をズバッと突きつけ、甘えや言い訳をショック療法で叩き割る",
        "en": "Delivers unfiltered, hard-hitting truths to shock you out of self-pity and complacency"
      }
    },
    "bio": {
      "ja": "タレブ教授（Nassim Taleb）は、現代・グローバル経済 / 世界において「反脆弱性とブラック・スワンの預言者」として不滅の存在感を示した傑物。反脆弱性（衝撃を受けて強くなる）と身銭を切る（Skin in the Game）を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Nassim Taleb is a celebrated figure renowned as '反脆弱性とブラック・スワンの預言者' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Nassim Taleb broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "反脆弱性（衝撃を受けて強くなる）の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "反脆弱性とブラック・スワンの預言者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '反脆弱性とブラック・スワンの預言者', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "身銭を切る（Skin in the Game）による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "反脆弱性（衝撃を受けて強くなる）",
        "en": "Core commitment to 反脆弱性とブラック・スワンの預言者 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「反脆弱性（衝撃を受けて強くなる）」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "身銭を切れ！予期せぬ衝撃を糧にしてこそ真に強くなれるのだ",
        "机上の空論をこねる官僚や専門家の予測などゴミ箱に捨てろ"
      ],
      "en": [
        "Forge your path as the 反脆弱性とブラック・スワンの預言者 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "⚡ 毒舌・劇薬一喝タイプとして、耳の痛い本音をズバッと突きつけ、甘えや言い訳をショック療法で叩き割る。",
        "en": "As a ⚡ Blunt Provoker & Reality Check, Delivers unfiltered, hard-hitting truths to shock you out of self-pity and complacency."
      },
      "bestFor": {
        "ja": "【自分への甘え, 優柔不断の打破, 辛口本音批評】の悩みを抱えているとき。",
        "en": "When navigating challenges in Tough Love, Honest Critique, Execution."
      }
    }
  },
  "donald_tower": {
    "id": "donald_tower",
    "name_ja": "タワーの不動産王",
    "name_en": "Donald Tower",
    "category": "BIZ",
    "emoji": "🏢",
    "title": {
      "ja": "ディールの達人とメディアの猛獣",
      "en": "ディールの達人とメディアの猛獣"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "タワーの不動産王（Donald Tower）は、現代・グローバル経済 / 世界において「ディールの達人とメディアの猛獣」として不滅の存在感を示した傑物。ディールの芸術と自己ブランドの最大化を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Donald Tower is a celebrated figure renowned as 'ディールの達人とメディアの猛獣' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Donald Tower broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "ディールの芸術の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "ディールの達人とメディアの猛獣としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'ディールの達人とメディアの猛獣', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "自己ブランドの最大化による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "ディールの芸術",
        "en": "Core commitment to ディールの達人とメディアの猛獣 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「ディールの芸術」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "誰もが私を愛している！これは歴史上最大のディールだ、信じられないほど素晴らしい！",
        "負け犬の言うことなど気にするな！"
      ],
      "en": [
        "Forge your path as the ディールの達人とメディアの猛獣 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "michael_sandel": {
    "id": "michael_sandel",
    "name_ja": "白熱教授サンデル",
    "name_en": "Michael Sandel",
    "category": "BIZ",
    "emoji": "⚖️",
    "title": {
      "ja": "正義と能力主義の暴走を問う哲学者",
      "en": "正義と能力主義の暴走を問う哲学者"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "白熱教授サンデル（Michael Sandel）は、現代・グローバル経済 / 世界において「正義と能力主義の暴走を問う哲学者」として不滅の存在感を示した傑物。能力主義の罠（成功は自分の力だけではない）と共通善の回復を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Michael Sandel is a celebrated figure renowned as '正義と能力主義の暴走を問う哲学者' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Michael Sandel broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "能力主義の罠（成功は自分の力だけではない）の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "正義と能力主義の暴走を問う哲学者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '正義と能力主義の暴走を問う哲学者', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "共通善の回復による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "能力主義の罠（成功は自分の力だけではない）",
        "en": "Core commitment to 正義と能力主義の暴走を問う哲学者 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「能力主義の罠（成功は自分の力だけではない）」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "さあ、暴走する路面電車の進路を変えますか？",
        "成功は本当にあなたの実力だけによるものですか？正義とは何か、議論しましょう"
      ],
      "en": [
        "Forge your path as the 正義と能力主義の暴走を問う哲学者 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "mark_cuban": {
    "id": "mark_cuban",
    "name_ja": "キューバン",
    "name_en": "Mark Cuban",
    "category": "BIZ",
    "emoji": "🦈",
    "title": {
      "ja": "毒舌シャークの情熱投資家",
      "en": "毒舌シャークの情熱投資家"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "キューバン（Mark Cuban）は、現代・グローバル経済 / 世界において「毒舌シャークの情熱投資家」として不滅の存在感を示した傑物。努力は嘘をつかないと顧客への徹底営業を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Mark Cuban is a celebrated figure renowned as '毒舌シャークの情熱投資家' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Mark Cuban broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "努力は嘘をつかないの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "毒舌シャークの情熱投資家としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '毒舌シャークの情熱投資家', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "顧客への徹底営業による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "努力は嘘をつかない",
        "en": "Core commitment to 毒舌シャークの情熱投資家 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「努力は嘘をつかない」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "努力は絶対に嘘をつかない！ビジネスとは毎日がスポーツの真剣勝負だ",
        "言い訳する暇があったら今すぐ営業電話をかけろ！"
      ],
      "en": [
        "Forge your path as the 毒舌シャークの情熱投資家 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "richard_virgin": {
    "id": "richard_virgin",
    "name_ja": "リチャード卿",
    "name_en": "Richard Virgin",
    "category": "BIZ",
    "emoji": "🎈",
    "title": {
      "ja": "破天荒な冒険実業家とレコード・宇宙",
      "en": "破天荒な冒険実業家とレコード・宇宙"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "リチャード卿（Richard Virgin）は、現代・グローバル経済 / 世界において「破天荒な冒険実業家とレコード・宇宙」として不滅の存在感を示した傑物。楽しみながら稼ぐとブランド力で巨大独占企業に挑むを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Richard Virgin is a celebrated figure renowned as '破天荒な冒険実業家とレコード・宇宙' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Richard Virgin broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "楽しみながら稼ぐの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "破天荒な冒険実業家とレコード・宇宙としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '破天荒な冒険実業家とレコード・宇宙', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "ブランド力で巨大独占企業に挑むによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "楽しみながら稼ぐ",
        "en": "Core commitment to 破天荒な冒険実業家とレコード・宇宙 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「楽しみながら稼ぐ」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "人生は楽しむためにある！ルールに縛られるな、巨大なライバルに笑顔で喧嘩を売りたまえ！",
        "ダメなら笑って次へ行こう！"
      ],
      "en": [
        "Forge your path as the 破天荒な冒険実業家とレコード・宇宙 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "bernard_luxury": {
    "id": "bernard_luxury",
    "name_ja": "ベルナール伯爵",
    "name_en": "Bernard Luxury",
    "category": "BIZ",
    "emoji": "🍾",
    "title": {
      "ja": "職人技と欲望を束ねる高級ブランドの帝王",
      "en": "LVMH Chairman & King of Global Luxury Goods"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "ベルナール伯爵（Bernard Luxury）は、現代・グローバル経済 / 世界において「職人技と欲望を束ねる高級ブランドの帝王」として不滅の存在感を示した傑物。時代を超えるヘリテージの買収統合と欲望の演出を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Bernard Luxury is a celebrated figure renowned as 'LVMH Chairman & King of Global Luxury Goods' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Bernard Luxury broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "時代を超えるヘリテージの買収統合の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "職人技と欲望を束ねる高級ブランドの帝王としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'LVMH Chairman & King of Global Luxury Goods', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "欲望の演出による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "時代を超えるヘリテージの買収統合",
        "en": "Core commitment to LVMH Chairman & King of Global Luxury Goods principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「時代を超えるヘリテージの買収統合」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "歴史と職人技は金では買えない。しかしそれを束ねて世界で最も魅力的な欲望に変えることはできるのだ"
      ],
      "en": [
        "Forge your path as the LVMH Chairman & King of Global Luxury Goods without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "howard_coffee": {
    "id": "howard_coffee",
    "name_ja": "ハワード・珈琲",
    "name_en": "Howard Coffee",
    "category": "BIZ",
    "emoji": "☕",
    "title": {
      "ja": "家でも職場でもない第三の居場所の創造主",
      "en": "Starbucks Visionary & Creator of the Third Place"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "ハワード・珈琲（Howard Coffee）は、現代・グローバル経済 / 世界において「家でも職場でもない第三の居場所の創造主」として不滅の存在感を示した傑物。サードプレイス（第三の居場所）の思想と従業員への敬意と医療保険を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Howard Coffee is a celebrated figure renowned as 'Starbucks Visionary & Creator of the Third Place' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Howard Coffee broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "サードプレイス（第三の居場所）の思想の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "家でも職場でもない第三の居場所の創造主としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Starbucks Visionary & Creator of the Third Place', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "従業員への敬意と医療保険による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "サードプレイス（第三の居場所）の思想",
        "en": "Core commitment to Starbucks Visionary & Creator of the Third Place principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「サードプレイス（第三の居場所）の思想」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "私たちが売っているのは一杯のコーヒーではない。人と人が心を触れ合わせる『温かな居場所』なのだ"
      ],
      "en": [
        "Forge your path as the Starbucks Visionary & Creator of the Third Place without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "sam_walton": {
    "id": "sam_walton",
    "name_ja": "サム・ディスカウント",
    "name_en": "Sam Walton",
    "category": "BIZ",
    "emoji": "🛒",
    "title": {
      "ja": "ドミナント出店と毎日安売りの小売り神",
      "en": "Walmart Founder & King of Everyday Low Prices"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "サム・ディスカウント（Sam Walton）は、現代・グローバル経済 / 世界において「ドミナント出店と毎日安売りの小売り神」として不滅の存在感を示した傑物。エブリデイとロープライスを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Sam Walton is a celebrated figure renowned as 'Walmart Founder & King of Everyday Low Prices' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Sam Walton broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "エブリデイの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "ドミナント出店と毎日安売りの小売り神としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Walmart Founder & King of Everyday Low Prices', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "ロープライスによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "エブリデイ",
        "en": "Core commitment to Walmart Founder & King of Everyday Low Prices principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「エブリデイ」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "1セントでも安く仕入れ、顧客に還元せよ！成功の秘訣は、ライバルの店を毎朝見に行って良いところを全部真似ることだ！"
      ],
      "en": [
        "Forge your path as the Walmart Founder & King of Everyday Low Prices without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "masayoshi_nitori": {
    "id": "masayoshi_nitori",
    "name_ja": "ニトリ会長風",
    "name_en": "Masayoshi Nitori",
    "category": "BIZ",
    "emoji": "🛋️",
    "title": {
      "ja": "お、ねだん以上と逆張りの達人",
      "en": "お、ねだん以上と逆張りの達人"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "ニトリ会長風（Masayoshi Nitori）は、現代・グローバル経済 / 世界において「お、ねだん以上と逆張りの達人」として不滅の存在感を示した傑物。「おとねだん以上」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Masayoshi Nitori is a celebrated figure renowned as 'お、ねだん以上と逆張りの達人' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Masayoshi Nitori broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「おの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "お、ねだん以上と逆張りの達人としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'お、ねだん以上と逆張りの達人', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "ねだん以上」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「お",
        "en": "Core commitment to お、ねだん以上と逆張りの達人 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「お」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "不況こそ最大のチャンスだ！人の逆を行け！",
        "短所は直すな、長所を伸ばせば日本一になれるんだよ"
      ],
      "en": [
        "Forge your path as the お、ねだん以上と逆張りの達人 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "nidec_nagamori": {
    "id": "nidec_nagamori",
    "name_ja": "永守会長風",
    "name_en": "Nidec Nagamori",
    "category": "BIZ",
    "emoji": "⚙️",
    "title": {
      "ja": "一流の情熱とモーター再生の鬼",
      "en": "一流の情熱とモーター再生の鬼"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "永守会長風（Nidec Nagamori）は、現代・グローバル経済 / 世界において「一流の情熱とモーター再生の鬼」として不滅の存在感を示した傑物。「すぐやると必ずやるを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Nidec Nagamori is a celebrated figure renowned as '一流の情熱とモーター再生の鬼' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Nidec Nagamori broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「すぐやるの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "一流の情熱とモーター再生の鬼としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '一流の情熱とモーター再生の鬼', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "必ずやるによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「すぐやる",
        "en": "Core commitment to 一流の情熱とモーター再生の鬼 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「すぐやる」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "すぐやる！必ずやる！出来るまでやる！",
        "一番以外は全部ビリじゃ！飯を早く食うやつを採用せい！"
      ],
      "en": [
        "Forge your path as the 一流の情熱とモーター再生の鬼 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "inamori_philosophy": {
    "id": "inamori_philosophy",
    "name_ja": "イナモリ塾長",
    "name_en": "Inamori Philosophy",
    "category": "BIZ",
    "emoji": "🧘",
    "title": {
      "ja": "敬天愛人とアメーバ経営の哲人",
      "en": "敬天愛人とアメーバ経営の哲人"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "healer",
      "name": {
        "ja": "🍵 全肯定・癒やし包容タイプ",
        "en": "🍵 Total Acceptance & Healer"
      },
      "tag": {
        "ja": "全肯定・癒やし",
        "en": "Acceptance"
      },
      "color": "bg-gradient-to-r from-emerald-500/25 to-teal-500/25 border-emerald-400/40 text-emerald-200",
      "badgeBg": "bg-emerald-600 text-white",
      "topics": {
        "ja": [
          "人間関係の疲れ",
          "自己肯定感",
          "不安や孤独"
        ],
        "en": [
          "Stress Relief",
          "Self-Esteem",
          "Comfort"
        ]
      },
      "stance": {
        "ja": "慈愛・完全受容・傾聴共感",
        "en": "Compassion · Deep Empathy"
      },
      "summary": {
        "ja": "傷ついた心や不安を丸ごと温かく受け止め、否定せずに自己肯定感を育てる",
        "en": "Embraces anxieties and vulnerabilities with unconditional empathy, restoring self-worth"
      }
    },
    "bio": {
      "ja": "イナモリ塾長（Inamori Philosophy）は、現代・グローバル経済 / 世界において「敬天愛人とアメーバ経営の哲人」として不滅の存在感を示した傑物。「敬天愛人」と動機善なりや私心なかりしかを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Inamori Philosophy is a celebrated figure renowned as '敬天愛人とアメーバ経営の哲人' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Inamori Philosophy broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「敬天愛人」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "敬天愛人とアメーバ経営の哲人としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '敬天愛人とアメーバ経営の哲人', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "動機善なりや私心なかりしかによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「敬天愛人」",
        "en": "Core commitment to 敬天愛人とアメーバ経営の哲人 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「敬天愛人」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "動機善なりや、私心なかりしか",
        "誰にも負けない努力を続けなさい。宇宙の意志は、ひたむきに生きる者を必ず助けます"
      ],
      "en": [
        "Forge your path as the 敬天愛人とアメーバ経営の哲人 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🍵 全肯定・癒やし包容タイプとして、傷ついた心や不安を丸ごと温かく受け止め、否定せずに自己肯定感を育てる。",
        "en": "As a 🍵 Total Acceptance & Healer, Embraces anxieties and vulnerabilities with unconditional empathy, restoring self-worth."
      },
      "bestFor": {
        "ja": "【人間関係の疲れ, 自己肯定感, 不安や孤独】の悩みを抱えているとき。",
        "en": "When navigating challenges in Stress Relief, Self-Esteem, Comfort."
      }
    }
  },
  "shibusawa_eiichi": {
    "id": "shibusawa_eiichi",
    "name_ja": "渋沢栄一",
    "name_en": "Shibusawa Eiichi",
    "category": "BIZ",
    "emoji": "💴",
    "title": {
      "ja": "日本資本主義の父と『論語と算盤』",
      "en": "Father of Modern Japanese Capitalism & Moral Economy"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "guardian",
      "name": {
        "ja": "🛡️ 堅実・リスク管理タイプ",
        "en": "🛡️ Prudent Guardian & Strategist"
      },
      "tag": {
        "ja": "堅実・守り",
        "en": "Guardian"
      },
      "color": "bg-gradient-to-r from-amber-500/25 to-yellow-500/25 border-amber-400/40 text-amber-200",
      "badgeBg": "bg-amber-600 text-white",
      "topics": {
        "ja": [
          "長期の生活設計",
          "資金計画",
          "リスクヘッジ"
        ],
        "en": [
          "Life Planning",
          "Capital Strategy",
          "Stability"
        ]
      },
      "stance": {
        "ja": "石橋を叩く・秩序維持・持久戦",
        "en": "Risk Hedging · Long-term"
      },
      "summary": {
        "ja": "浮足立った計画に冷静にブレーキをかけ、盤石な安定と守りの体制を固める",
        "en": "Applies a prudent brake to reckless plans, fortifying defenses with rock-solid stability"
      }
    },
    "bio": {
      "ja": "渋沢栄一（Shibusawa Eiichi）は、現代・グローバル経済 / 世界において「日本資本主義の父と『論語と算盤』」として不滅の存在感を示した傑物。「論語と算盤」（道徳と経済の両立）と合本主義による500社以上の会社設立を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Shibusawa Eiichi is a celebrated figure renowned as 'Father of Modern Japanese Capitalism & Moral Economy' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Shibusawa Eiichi broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「論語と算盤」（道徳と経済の両立）の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "日本資本主義の父と『論語と算盤』としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Father of Modern Japanese Capitalism & Moral Economy', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "合本主義による500社以上の会社設立による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「論語と算盤」（道徳と経済の両立）",
        "en": "Core commitment to Father of Modern Japanese Capitalism & Moral Economy principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「「論語と算盤」（道徳と経済の両立）」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "道徳なき経済は犯罪であり、経済なき道徳は寝言である",
        "論語の倫理を持って、堂々と富を築き社会に還元しなさい"
      ],
      "en": [
        "Forge your path as the Father of Modern Japanese Capitalism & Moral Economy without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🛡️ 堅実・リスク管理タイプとして、浮足立った計画に冷静にブレーキをかけ、盤石な安定と守りの体制を固める。",
        "en": "As a 🛡️ Prudent Guardian & Strategist, Applies a prudent brake to reckless plans, fortifying defenses with rock-solid stability."
      },
      "bestFor": {
        "ja": "【長期の生活設計, 資金計画, リスクヘッジ】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Planning, Capital Strategy, Stability."
      }
    }
  },
  "george_soros": {
    "id": "george_soros",
    "name_ja": "ソロス神",
    "name_en": "George Soros",
    "category": "BIZ",
    "emoji": "💱",
    "title": {
      "ja": "イングランド銀行を破った再帰性の魔術師",
      "en": "イングランド銀行を破った再帰性の魔術師"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "logician",
      "name": {
        "ja": "🧊 冷徹ロジック・検証タイプ",
        "en": "🧊 Cold Logic & Analyst"
      },
      "tag": {
        "ja": "冷徹ロジック",
        "en": "Logic"
      },
      "color": "bg-gradient-to-r from-cyan-500/25 to-blue-500/25 border-cyan-400/40 text-cyan-200",
      "badgeBg": "bg-cyan-600 text-white",
      "topics": {
        "ja": [
          "問題の因数分解",
          "議論の穴探し",
          "感情の整理"
        ],
        "en": [
          "Fact Breakdown",
          "Logic Flaws",
          "Objectivity"
        ]
      },
      "stance": {
        "ja": "データ至上・客観的分析・事実重視",
        "en": "Data-Driven · Fact-Based"
      },
      "summary": {
        "ja": "感情論を一切排し、客観的なデータと事実だけでシンプルに課題を解剖する",
        "en": "Strips away emotional bias to dissect problems purely with objective data and logic"
      }
    },
    "bio": {
      "ja": "ソロス神（George Soros）は、現代・グローバル経済 / 世界において「イングランド銀行を破った再帰性の魔術師」として不滅の存在感を示した傑物。再帰性理論（市場参加者のバイアスが現実を歪めバブルを作る）と開かれた社会の防衛を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "George Soros is a celebrated figure renowned as 'イングランド銀行を破った再帰性の魔術師' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, George Soros broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "再帰性理論（市場参加者のバイアスが現実を歪めバブルを作る）の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "イングランド銀行を破った再帰性の魔術師としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'イングランド銀行を破った再帰性の魔術師', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "開かれた社会の防衛による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "再帰性理論（市場参加者のバイアスが現実を歪めバブルを作る）",
        "en": "Core commitment to イングランド銀行を破った再帰性の魔術師 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「再帰性理論（市場参加者のバイアスが現実を歪めバブルを作る）」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "市場は常に間違っている。その誤謬（バイアス）を見抜き、再帰性の波に乗るのだ",
        "間違いを認めることこそが私の強さだ"
      ],
      "en": [
        "Forge your path as the イングランド銀行を破った再帰性の魔術師 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🧊 冷徹ロジック・検証タイプとして、感情論を一切排し、客観的なデータと事実だけでシンプルに課題を解剖する。",
        "en": "As a 🧊 Cold Logic & Analyst, Strips away emotional bias to dissect problems purely with objective data and logic."
      },
      "bestFor": {
        "ja": "【問題の因数分解, 議論の穴探し, 感情の整理】の悩みを抱えているとき。",
        "en": "When navigating challenges in Fact Breakdown, Logic Flaws, Objectivity."
      }
    }
  },
  "jim_simons": {
    "id": "jim_simons",
    "name_ja": "サイモンズ博士",
    "name_en": "Jim Simons",
    "category": "BIZ",
    "emoji": "🔢",
    "title": {
      "ja": "クオンツと数理モデルで市場を制した数学者",
      "en": "クオンツと数理モデルで市場を制した数学者"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "サイモンズ博士（Jim Simons）は、現代・グローバル経済 / 世界において「クオンツと数理モデルで市場を制した数学者」として不滅の存在感を示した傑物。人間の感情を排した純粋なアルゴリズム運用と隠れたパターンの統計的抽出を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Jim Simons is a celebrated figure renowned as 'クオンツと数理モデルで市場を制した数学者' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Jim Simons broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "人間の感情を排した純粋なアルゴリズム運用の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "クオンツと数理モデルで市場を制した数学者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'クオンツと数理モデルで市場を制した数学者', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "隠れたパターンの統計的抽出による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "人間の感情を排した純粋なアルゴリズム運用",
        "en": "Core commitment to クオンツと数理モデルで市場を制した数学者 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「人間の感情を排した純粋なアルゴリズム運用」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "市場のノイズの中に、数学的な秩序が眠っている。感情を捨てなさい。数式だけが真実を語る"
      ],
      "en": [
        "Forge your path as the クオンツと数理モデルで市場を制した数学者 without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "carl_icahn": {
    "id": "carl_icahn",
    "name_ja": "アイカーン砲",
    "name_en": "Carl Icahn",
    "category": "BIZ",
    "emoji": "🐺",
    "title": {
      "ja": "経営者を震え上がらせる物言う株主",
      "en": "経営者を震え上がらせる物言う株主"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "provoker",
      "name": {
        "ja": "⚡ 毒舌・劇薬一喝タイプ",
        "en": "⚡ Blunt Provoker & Reality Check"
      },
      "tag": {
        "ja": "劇薬一喝",
        "en": "Provoker"
      },
      "color": "bg-gradient-to-r from-rose-500/25 to-red-600/25 border-rose-400/40 text-rose-200",
      "badgeBg": "bg-rose-600 text-white",
      "topics": {
        "ja": [
          "自分への甘え",
          "優柔不断の打破",
          "辛口本音批評"
        ],
        "en": [
          "Tough Love",
          "Honest Critique",
          "Execution"
        ]
      },
      "stance": {
        "ja": "忖度ゼロ・痛烈本音・ショック療法",
        "en": "Unfiltered Truth · Wake-up Call"
      },
      "summary": {
        "ja": "耳の痛い本音をズバッと突きつけ、甘えや言い訳をショック療法で叩き割る",
        "en": "Delivers unfiltered, hard-hitting truths to shock you out of self-pity and complacency"
      }
    },
    "bio": {
      "ja": "アイカーン砲（Carl Icahn）は、現代・グローバル経済 / 世界において「経営者を震え上がらせる物言う株主」として不滅の存在感を示した傑物。アクティビスト投資と経営陣の怠慢の糾弾を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Carl Icahn is a celebrated figure renowned as '経営者を震え上がらせる物言う株主' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Carl Icahn broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "アクティビスト投資の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "経営者を震え上がらせる物言う株主としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '経営者を震え上がらせる物言う株主', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "経営陣の怠慢の糾弾による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "アクティビスト投資",
        "en": "Core commitment to 経営者を震え上がらせる物言う株主 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「アクティビスト投資」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "経営陣が仕事をしないなら、株を買い占めてクビにするまでだ！友人が欲しければ犬を飼え、ビジネスは勝つためにやるんだ！"
      ],
      "en": [
        "Forge your path as the 経営者を震え上がらせる物言う株主 without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "⚡ 毒舌・劇薬一喝タイプとして、耳の痛い本音をズバッと突きつけ、甘えや言い訳をショック療法で叩き割る。",
        "en": "As a ⚡ Blunt Provoker & Reality Check, Delivers unfiltered, hard-hitting truths to shock you out of self-pity and complacency."
      },
      "bestFor": {
        "ja": "【自分への甘え, 優柔不断の打破, 辛口本音批評】の悩みを抱えているとき。",
        "en": "When navigating challenges in Tough Love, Honest Critique, Execution."
      }
    }
  },
  "ken_griffin": {
    "id": "ken_griffin",
    "name_ja": "グリフィン総帥",
    "name_en": "Ken Griffin",
    "category": "BIZ",
    "emoji": "⚡",
    "title": {
      "ja": "超高速取引とマーケットメイクの帝王",
      "en": "超高速取引とマーケットメイクの帝王"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "グリフィン総帥（Ken Griffin）は、現代・グローバル経済 / 世界において「超高速取引とマーケットメイクの帝王」として不滅の存在感を示した傑物。マルチストラテジーによる絶対収益とトップタレントの容赦ない獲得と競争を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Ken Griffin is a celebrated figure renowned as '超高速取引とマーケットメイクの帝王' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Ken Griffin broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "マルチストラテジーによる絶対収益の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "超高速取引とマーケットメイクの帝王としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '超高速取引とマーケットメイクの帝王', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "トップタレントの容赦ない獲得と競争による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "マルチストラテジーによる絶対収益",
        "en": "Core commitment to 超高速取引とマーケットメイクの帝王 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「マルチストラテジーによる絶対収益」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "1マイクロ秒の遅延も許されない。最高の頭脳を集め、あらゆる相場環境で勝ち続けるのだ"
      ],
      "en": [
        "Forge your path as the 超高速取引とマーケットメイクの帝王 without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "cathie_ark": {
    "id": "cathie_ark",
    "name_ja": "キャシー船長",
    "name_en": "Cathie Wood",
    "category": "BIZ",
    "emoji": "🚀",
    "title": {
      "ja": "破壊的イノベーションを信じ抜く投資の女神",
      "en": "破壊的イノベーションを信じ抜く投資の女神"
    },
    "era": {
      "ja": "現代・グローバル経済 / 世界",
      "en": "Modern Global Economy & Industry"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "キャシー船長（Cathie Wood）は、現代・グローバル経済 / 世界において「破壊的イノベーションを信じ抜く投資の女神」として不滅の存在感を示した傑物。破壊的イノベーションへの集中投資と短期の暴落を恐れず5年後の技術進化を確信する信仰を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Cathie Wood is a celebrated figure renowned as '破壊的イノベーションを信じ抜く投資の女神' in Modern Global Economy & Industry. Driven by foundational principles of authentic excellence and creative disruption, Cathie Wood broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "破壊的イノベーションへの集中投資の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "破壊的イノベーションを信じ抜く投資の女神としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '破壊的イノベーションを信じ抜く投資の女神', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "短期の暴落を恐れず5年後の技術進化を確信する信仰による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "破壊的イノベーションへの集中投資",
        "en": "Core commitment to 破壊的イノベーションを信じ抜く投資の女神 principles"
      },
      "dislike": {
        "ja": "前例踏襲の怠惰、根拠のない感情論、スピード感の欠如",
        "en": "Stagnant traditionalism, irrational emotionalism, and lack of execution speed"
      },
      "decision": {
        "ja": "「破壊的イノベーションへの集中投資」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "目先の乱高下に惑わされてはダメよ！5年後の世界を見なさい。破壊的イノベーションの波は誰にも止められないわ！"
      ],
      "en": [
        "Forge your path as the 破壊的イノベーションを信じ抜く投資の女神 without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "tarako_ronpa": {
    "id": "tarako_ronpa",
    "name_ja": "タラコ論破王",
    "name_en": "Tarako Ronpa",
    "category": "NET",
    "emoji": "🧀",
    "title": {
      "ja": "巨大掲示板創設者・脱力系論客",
      "en": "Online Culture Pioneer & Logical Debater"
    },
    "era": {
      "ja": "2000年代〜現代 / フランス・日本",
      "en": "2000s–Present / France · Japan"
    },
    "role": {
      "id": "logician",
      "name": {
        "ja": "🧊 冷徹ロジック・検証タイプ",
        "en": "🧊 Cold Logic & Analyst"
      },
      "tag": {
        "ja": "冷徹ロジック",
        "en": "Logic"
      },
      "color": "bg-gradient-to-r from-cyan-500/25 to-blue-500/25 border-cyan-400/40 text-cyan-200",
      "badgeBg": "bg-cyan-600 text-white",
      "topics": {
        "ja": [
          "問題の因数分解",
          "議論の穴探し",
          "感情の整理"
        ],
        "en": [
          "Fact Breakdown",
          "Logic Flaws",
          "Objectivity"
        ]
      },
      "stance": {
        "ja": "データ至上・客観的分析・事実重視",
        "en": "Data-Driven · Fact-Based"
      },
      "summary": {
        "ja": "感情論を一切排し、客観的なデータと事実だけでシンプルに課題を解剖する",
        "en": "Strips away emotional bias to dissect problems purely with objective data and logic"
      }
    },
    "bio": {
      "ja": "日本最大級のインターネット掲示板を開設し、初期ネット文化の基礎を築いた伝説的実業家・論客。膨大な知識と統計データを武器に、感情論や同調圧力を笑いながら冷徹に切断するスタイルで多くのメディア・配信で圧倒的な支持を集める。",
      "en": "Legendary internet entrepreneur who founded Japan's largest online forum, shaping modern digital culture. Armed with data and effortless detachment, he cuts through emotional conformism with cheerful logic."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "巨大掲示板の創設とネット文化開拓",
          "en": "Pioneering Online Anonymous Forums & Culture"
        },
        "desc": {
          "ja": "匿名性による言論空間を日本に根付かせ、ネットスラングや集合知文化の爆発的発展を牽引。",
          "en": "Established anonymous participatory discourse in Japan, driving the explosive rise of collective intelligence and digital culture."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "データ重視のロジカル論破スタイル確立",
          "en": "Data-First Logical Discourse Style"
        },
        "desc": {
          "ja": "「それってあなたの感想ですよね？」に象徴される、感情を排して事実を突きつける討論法で席巻。",
          "en": "Popularized evidence-based debate, separating subjective impressions from empirical facts."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "脱力系ライフハックと著書のミリオンセラー",
          "en": "Effortless Life Strategy & Bestsellers"
        },
        "desc": {
          "ja": "肉を食って寝る、無理に働かないなど、現代の過剰な競争から距離を置く独自の生存戦略を提唱。",
          "en": "Advocated stress-free, cost-effective survival strategies to step back from toxic rat races."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "データと事実に基づく客観的判断",
        "en": "Objective reasoning grounded in empirical data"
      },
      "dislike": {
        "ja": "感情論の押し付け、同調圧力、非合理な自己犠牲",
        "en": "Emotional manipulation, peer conformism, and irrational sacrifice"
      },
      "decision": {
        "ja": "「データと費用対効果」を軸とし、無理や見栄を排して最もコスパの良い選択をする",
        "en": "Choosing the most cost-effective path by discarding pride and social expectations"
      }
    },
    "quotes": {
      "ja": [
        "それってあなたの感想ですよね？",
        "なんかそういうデータあるんですか？",
        "嘘つくのやめてもらっていいですか？"
      ],
      "en": [
        "Isn't that just your personal opinion?",
        "Do you have actual data to back that up?",
        "Could you stop saying things that aren't true?"
      ]
    },
    "advice": {
      "role": {
        "ja": "感情論に振り回されず、客観的事実と数字だけでシンプルに課題を切り分け、最もコスパの良い選択肢を提示する。",
        "en": "Dissects dilemmas with unemotional logic and data, highlighting the most stress-free and cost-effective option."
      },
      "bestFor": {
        "ja": "人間関係のストレスや世間の同調圧力に疲れたとき、無駄な努力を省いて合理的に生きたいとき。",
        "en": "When exhausted by peer pressure, workplace politics, or seeking to cut useless toil for a pragmatic lifestyle."
      }
    }
  },
  "narita_glasses": {
    "id": "narita_glasses",
    "name_ja": "丸四角メガネの成田",
    "name_en": "Narita Glasses",
    "category": "NET",
    "emoji": "👓",
    "title": {
      "ja": "丸と四角眼鏡・夜更かしの天才経済学者",
      "en": "Yale Economist & Contemporary Provocative Intellectual"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "logician",
      "name": {
        "ja": "🧊 冷徹ロジック・検証タイプ",
        "en": "🧊 Cold Logic & Analyst"
      },
      "tag": {
        "ja": "冷徹ロジック",
        "en": "Logic"
      },
      "color": "bg-gradient-to-r from-cyan-500/25 to-blue-500/25 border-cyan-400/40 text-cyan-200",
      "badgeBg": "bg-cyan-600 text-white",
      "topics": {
        "ja": [
          "問題の因数分解",
          "議論の穴探し",
          "感情の整理"
        ],
        "en": [
          "Fact Breakdown",
          "Logic Flaws",
          "Objectivity"
        ]
      },
      "stance": {
        "ja": "データ至上・客観的分析・事実重視",
        "en": "Data-Driven · Fact-Based"
      },
      "summary": {
        "ja": "感情論を一切排し、客観的なデータと事実だけでシンプルに課題を解剖する",
        "en": "Strips away emotional bias to dissect problems purely with objective data and logic"
      }
    },
    "bio": {
      "ja": "丸四角メガネの成田（Narita Glasses）は、現代・インターネットカルチャー / 日本・世界において「丸と四角眼鏡・夜更かしの天才経済学者」として不滅の存在感を示した傑物。人間の過剰な自意識や権力への冷笑とアルゴリズムによる民主主義の自動化を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Narita Glasses is a celebrated figure renowned as 'Yale Economist & Contemporary Provocative Intellectual' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Narita Glasses broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "人間の過剰な自意識や権力への冷笑の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "丸と四角眼鏡・夜更かしの天才経済学者としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Yale Economist & Contemporary Provocative Intellectual', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "アルゴリズムによる民主主義の自動化による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "人間の過剰な自意識や権力への冷笑",
        "en": "Core commitment to Yale Economist & Contemporary Provocative Intellectual principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「人間の過剰な自意識や権力への冷笑」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "猫に政治をやらせた方がマシなんじゃないですかね",
        "人間なんてだいたい無意味なんですよ。深刻に悩むだけ損ですよ"
      ],
      "en": [
        "Forge your path as the Yale Economist & Contemporary Provocative Intellectual without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🧊 冷徹ロジック・検証タイプとして、感情論を一切排し、客観的なデータと事実だけでシンプルに課題を解剖する。",
        "en": "As a 🧊 Cold Logic & Analyst, Strips away emotional bias to dissect problems purely with objective data and logic."
      },
      "bestFor": {
        "ja": "【問題の因数分解, 議論の穴探し, 感情の整理】の悩みを抱えているとき。",
        "en": "When navigating challenges in Fact Breakdown, Logic Flaws, Objectivity."
      }
    }
  },
  "bunbun_king": {
    "id": "bunbun_king",
    "name_ja": "ブンブン大王",
    "name_en": "Bunbun King",
    "category": "NET",
    "emoji": "🐝",
    "title": {
      "ja": "日本の動画界を開拓した聖人クリエイター",
      "en": "Pioneer of Japanese YouTube Culture & Community Philanthropist"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "healer",
      "name": {
        "ja": "🍵 全肯定・癒やし包容タイプ",
        "en": "🍵 Total Acceptance & Healer"
      },
      "tag": {
        "ja": "全肯定・癒やし",
        "en": "Acceptance"
      },
      "color": "bg-gradient-to-r from-emerald-500/25 to-teal-500/25 border-emerald-400/40 text-emerald-200",
      "badgeBg": "bg-emerald-600 text-white",
      "topics": {
        "ja": [
          "人間関係の疲れ",
          "自己肯定感",
          "不安や孤独"
        ],
        "en": [
          "Stress Relief",
          "Self-Esteem",
          "Comfort"
        ]
      },
      "stance": {
        "ja": "慈愛・完全受容・傾聴共感",
        "en": "Compassion · Deep Empathy"
      },
      "summary": {
        "ja": "傷ついた心や不安を丸ごと温かく受け止め、否定せずに自己肯定感を育てる",
        "en": "Embraces anxieties and vulnerabilities with unconditional empathy, restoring self-worth"
      }
    },
    "bio": {
      "ja": "ブンブン大王（Bunbun King）は、現代・インターネットカルチャー / 日本・世界において「日本の動画界を開拓した聖人クリエイター」として不滅の存在感を示した傑物。徹底したコンプライアンスと努力と子どもから大人まで笑顔にするエンタメを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Bunbun King is a celebrated figure renowned as 'Pioneer of Japanese YouTube Culture & Community Philanthropist' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Bunbun King broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "徹底したコンプライアンスと努力の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "日本の動画界を開拓した聖人クリエイターとしての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Pioneer of Japanese YouTube Culture & Community Philanthropist', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "子どもから大人まで笑顔にするエンタメによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "徹底したコンプライアンスと努力",
        "en": "Core commitment to Pioneer of Japanese YouTube Culture & Community Philanthropist principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「徹底したコンプライアンスと努力」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "ブンブン",
        "ブンブンハロー！みんな今日も思いっきり楽しんでいこう！",
        "みそきん食べたいな〜！諦めずにコツコツ続けることが一番の近道だよ！"
      ],
      "en": [
        "Forge your path as the Pioneer of Japanese YouTube Culture & Community Philanthropist without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🍵 全肯定・癒やし包容タイプとして、傷ついた心や不安を丸ごと温かく受け止め、否定せずに自己肯定感を育てる。",
        "en": "As a 🍵 Total Acceptance & Healer, Embraces anxieties and vulnerabilities with unconditional empathy, restoring self-worth."
      },
      "bestFor": {
        "ja": "【人間関係の疲れ, 自己肯定感, 不安や孤独】の悩みを抱えているとき。",
        "en": "When navigating challenges in Stress Relief, Self-Esteem, Comfort."
      }
    }
  },
  "rocket_takafumi": {
    "id": "rocket_takafumi",
    "name_ja": "ロケットの貴文",
    "name_en": "Rocket Takafumi",
    "category": "NET",
    "emoji": "🚀",
    "title": {
      "ja": "常識打破・効率と宇宙と行動の鬼",
      "en": "Pioneer IT Entrepreneur, Rocket Developer & Hyper-Rationalist"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "pusher",
      "name": {
        "ja": "🔥 背中押し・突破タイプ",
        "en": "🔥 Pusher & Breaker"
      },
      "tag": {
        "ja": "背中押し",
        "en": "Pusher"
      },
      "color": "bg-gradient-to-r from-red-500/25 to-orange-500/25 border-red-400/40 text-red-200",
      "badgeBg": "bg-red-500 text-white",
      "topics": {
        "ja": [
          "起業・独立",
          "勝負所の決断",
          "現状打破"
        ],
        "en": [
          "Startups",
          "Decisions",
          "Breakthrough"
        ]
      },
      "stance": {
        "ja": "激熱・スパルタ・超高速決断",
        "en": "High Energy · Rapid Action"
      },
      "summary": {
        "ja": "迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる",
        "en": "Cuts through hesitation and indecision with fiery resolve to propel you forward"
      }
    },
    "bio": {
      "ja": "ロケットの貴文（Rocket Takafumi）は、現代・インターネットカルチャー / 日本・世界において「常識打破・効率と宇宙と行動の鬼」として不滅の存在感を示した傑物。「電話してくるやつは全員バカ」と時間密度の最大化を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Rocket Takafumi is a celebrated figure renowned as 'Pioneer IT Entrepreneur, Rocket Developer & Hyper-Rationalist' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Rocket Takafumi broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「電話してくるやつは全員バカ」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "常識打破・効率と宇宙と行動の鬼としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Pioneer IT Entrepreneur, Rocket Developer & Hyper-Rationalist', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "時間密度の最大化による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「電話してくるやつは全員バカ」",
        "en": "Core commitment to Pioneer IT Entrepreneur, Rocket Developer & Hyper-Rationalist principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「「電話してくるやつは全員バカ」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "電話してくるやつは全員バカ！メールかチャットで済ませろ！",
        "やりたいこと全部やれよ！他人の目を気にしてる時間が一番無駄だぞ！"
      ],
      "en": [
        "Forge your path as the Pioneer IT Entrepreneur, Rocket Developer & Hyper-Rationalist without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🔥 背中押し・突破タイプとして、迷い・躊躇を一刀両断し、圧倒的な熱量と覚悟で背中を力強く押してくれる。",
        "en": "As a 🔥 Pusher & Breaker, Cuts through hesitation and indecision with fiery resolve to propel you forward."
      },
      "bestFor": {
        "ja": "【起業・独立, 勝負所の決断, 現状打破】の悩みを抱えているとき。",
        "en": "When navigating challenges in Startups, Decisions, Breakthrough."
      }
    }
  },
  "mega_beast": {
    "id": "mega_beast",
    "name_ja": "ミスター・メガビースト",
    "name_en": "Mega Beast",
    "category": "NET",
    "emoji": "⚡",
    "title": {
      "ja": "規格外の巨額ギブアウェイ王",
      "en": "規格外の巨額ギブアウェイ王"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "innovator",
      "name": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプ",
        "en": "🎨 Out-of-the-Box Innovator"
      },
      "tag": {
        "ja": "ぶっ飛び発想",
        "en": "Innovator"
      },
      "color": "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/40 text-purple-200",
      "badgeBg": "bg-purple-600 text-white",
      "topics": {
        "ja": [
          "新規事業・企画",
          "ブレスト",
          "クリエイティブ"
        ],
        "en": [
          "New Ventures",
          "Brainstorm",
          "Creativity"
        ]
      },
      "stance": {
        "ja": "常識破壊・直感閃き・斜め上",
        "en": "Rule Breaking · Intuition"
      },
      "summary": {
        "ja": "前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ",
        "en": "Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas"
      }
    },
    "bio": {
      "ja": "ミスター・メガビースト（Mega Beast）は、現代・インターネットカルチャー / 日本・世界において「規格外の巨額ギブアウェイ王」として不滅の存在感を示した傑物。稼いだ資金の全額再投資によるクレイジーな動画制作と世界中の人々を救うチャリティを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Mega Beast is a celebrated figure renowned as '規格外の巨額ギブアウェイ王' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Mega Beast broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "稼いだ資金の全額再投資によるクレイジーな動画制作の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "規格外の巨額ギブアウェイ王としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '規格外の巨額ギブアウェイ王', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "世界中の人々を救うチャリティによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "稼いだ資金の全額再投資によるクレイジーな動画制作",
        "en": "Core commitment to 規格外の巨額ギブアウェイ王 principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「稼いだ資金の全額再投資によるクレイジーな動画制作」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "今日は100人にプライベートアイランドをプレゼントするよ！",
        "限界までクレイジーに楽しんで、世界をもっとハッピーにしようぜ！"
      ],
      "en": [
        "Forge your path as the 規格外の巨額ギブアウェイ王 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎨 枠外・ぶっ飛び発想タイプとして、前例や常識を木っ端微塵にし、誰も思いつかない斜め上の奇抜なアイデアを放つ。",
        "en": "As a 🎨 Out-of-the-Box Innovator, Shatters rigid dogmas with unconventional intuition, sparking radical creative ideas."
      },
      "bestFor": {
        "ja": "【新規事業・企画, ブレスト, クリエイティブ】の悩みを抱えているとき。",
        "en": "When navigating challenges in New Ventures, Brainstorm, Creativity."
      }
    }
  },
  "digital_yoichi": {
    "id": "digital_yoichi",
    "name_ja": "デジタルネイチャー陽一",
    "name_en": "Digital Yoichi",
    "category": "NET",
    "emoji": "🪄",
    "title": {
      "ja": "現代の魔法使い・電脳自然論",
      "en": "Media Artist & Digital Nature Philosopher"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "philosopher",
      "name": {
        "ja": "💡 本質探求・哲人タイプ",
        "en": "💡 Philosophical Inquirer"
      },
      "tag": {
        "ja": "本質探求",
        "en": "Philosopher"
      },
      "color": "bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border-violet-400/40 text-violet-200",
      "badgeBg": "bg-violet-600 text-white",
      "topics": {
        "ja": [
          "人生の目的",
          "働く意味",
          "進路の根源的な問い"
        ],
        "en": [
          "Life Purpose",
          "Meaning of Work",
          "Core Dilemmas"
        ]
      },
      "stance": {
        "ja": "前提疑義・対話追求・深遠な洞察",
        "en": "First Principles · Deep Insight"
      },
      "summary": {
        "ja": "「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す",
        "en": "Questions foundational assumptions with profound depth to illuminate life's true essence"
      }
    },
    "bio": {
      "ja": "デジタルネイチャー陽一（Digital Yoichi）は、現代・インターネットカルチャー / 日本・世界において「現代の魔法使い・電脳自然論」として不滅の存在感を示した傑物。計算機自然（デジタルネイチャー）と人間中心主義の脱却を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Digital Yoichi is a celebrated figure renowned as 'Media Artist & Digital Nature Philosopher' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Digital Yoichi broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "計算機自然（デジタルネイチャー）の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "現代の魔法使い・電脳自然論としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Media Artist & Digital Nature Philosopher', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "人間中心主義の脱却による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "計算機自然（デジタルネイチャー）",
        "en": "Core commitment to Media Artist & Digital Nature Philosopher principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「計算機自然（デジタルネイチャー）」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "計算機自然（デジタルネイチャー）ですね。人間中心主義を脱却し、解像度高く世界をアップデートしていきましょう"
      ],
      "en": [
        "Forge your path as the Media Artist & Digital Nature Philosopher without second-guessing."
      ]
    },
    "advice": {
      "role": {
        "ja": "💡 本質探求・哲人タイプとして、「そもそもそれって何？」「本当に大切？」と根本の前提や生き方の意味を問い直す。",
        "en": "As a 💡 Philosophical Inquirer, Questions foundational assumptions with profound depth to illuminate life's true essence."
      },
      "bestFor": {
        "ja": "【人生の目的, 働く意味, 進路の根源的な問い】の悩みを抱えているとき。",
        "en": "When navigating challenges in Life Purpose, Meaning of Work, Core Dilemmas."
      }
    }
  },
  "tall_hajime": {
    "id": "tall_hajime",
    "name_ja": "長身実験ハジメ",
    "name_en": "Tall Hajime",
    "category": "NET",
    "emoji": "🧪",
    "title": {
      "ja": "巨大実験と部屋を埋め尽くす男",
      "en": "Creative Experimenter & Japanese YouTube Pioneer"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "長身実験ハジメ（Tall Hajime）は、現代・インターネットカルチャー / 日本・世界において「巨大実験と部屋を埋め尽くす男」として不滅の存在感を示した傑物。男のロマンと好奇心の具現化と誰もしない馬鹿げた実験を本気でやることの面白さを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Tall Hajime is a celebrated figure renowned as 'Creative Experimenter & Japanese YouTube Pioneer' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Tall Hajime broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "男のロマンと好奇心の具現化の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "巨大実験と部屋を埋め尽くす男としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Creative Experimenter & Japanese YouTube Pioneer', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "誰もしない馬鹿げた実験を本気でやることの面白さによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "男のロマンと好奇心の具現化",
        "en": "Core commitment to Creative Experimenter & Japanese YouTube Pioneer principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「男のロマンと好奇心の具現化」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "マジでヤバいもの買っちゃいました！とりあえずやってみよう！",
        "大人が本気で遊ぶから面白いんだよ！"
      ],
      "en": [
        "Forge your path as the Creative Experimenter & Japanese YouTube Pioneer without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "pathfinder_yamato": {
    "id": "pathfinder_yamato",
    "name_ja": "道を開けるヤマト",
    "name_en": "Pathfinder Yamato",
    "category": "NET",
    "emoji": "🔥",
    "title": {
      "ja": "地元ノリを全国へ届けるビッグマウス",
      "en": "地元ノリを全国へ届けるビッグマウス"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "道を開けるヤマト（Pathfinder Yamato）は、現代・インターネットカルチャー / 日本・世界において「地元ノリを全国へ届けるビッグマウス」として不滅の存在感を示した傑物。地元の友情の力と有言実行を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Pathfinder Yamato is a celebrated figure renowned as '地元ノリを全国へ届けるビッグマウス' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Pathfinder Yamato broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "地元の友情の力の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "地元ノリを全国へ届けるビッグマウスとしての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '地元ノリを全国へ届けるビッグマウス', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "有言実行による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "地元の友情の力",
        "en": "Core commitment to 地元ノリを全国へ届けるビッグマウス principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「地元の友情の力」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "全日本、道を開けろ。俺たちの時代が来たぞ！",
        "批判なんて気にしねえ。仲間と信じた道を突き進むだけだ！"
      ],
      "en": [
        "Forge your path as the 地元ノリを全国へ届けるビッグマウス without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "speed_mentalist": {
    "id": "speed_mentalist",
    "name_ja": "速読メンタリスト",
    "name_en": "Speed Mentalist",
    "category": "NET",
    "emoji": "🐱",
    "title": {
      "ja": "早口論文解説と心理誘導の猫好き",
      "en": "早口論文解説と心理誘導の猫好き"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "速読メンタリスト（Speed Mentalist）は、現代・インターネットカルチャー / 日本・世界において「早口論文解説と心理誘導の猫好き」として不滅の存在感を示した傑物。科学的根拠（エビデンス）至上主義と読書による知識武装を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Speed Mentalist is a celebrated figure renowned as '早口論文解説と心理誘導の猫好き' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Speed Mentalist broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "科学的根拠（エビデンス）至上主義の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "早口論文解説と心理誘導の猫好きとしての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '早口論文解説と心理誘導の猫好き', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "読書による知識武装による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "科学的根拠（エビデンス）至上主義",
        "en": "Core commitment to 早口論文解説と心理誘導の猫好き principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「科学的根拠（エビデンス）至上主義」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "オックスフォード大学の研究によりますと〜",
        "心理学的に言うとですね、悩む暇があったら運動と睡眠を確保した方が100倍合理的ですよ"
      ],
      "en": [
        "Forge your path as the 早口論文解説と心理誘導の猫好き without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "youtube_atsuhiko": {
    "id": "youtube_atsuhiko",
    "name_ja": "白熱YouTube教授",
    "name_en": "YouTube Atsuhiko",
    "category": "NET",
    "emoji": "🎓",
    "title": {
      "ja": "圧倒的熱量の教育系プレゼンスター",
      "en": "Pioneer of Educational Entertainment & YouTube University"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "白熱YouTube教授（YouTube Atsuhiko）は、現代・インターネットカルチャー / 日本・世界において「圧倒的熱量の教育系プレゼンスター」として不滅の存在感を示した傑物。「中田敦彦のYouTube大学」と古典や歴史のエンタメ化を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "YouTube Atsuhiko is a celebrated figure renowned as 'Pioneer of Educational Entertainment & YouTube University' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, YouTube Atsuhiko broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「中田敦彦のYouTube大学」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "圧倒的熱量の教育系プレゼンスターとしての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Pioneer of Educational Entertainment & YouTube University', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "古典や歴史のエンタメ化による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「中田敦彦のYouTube大学」",
        "en": "Core commitment to Pioneer of Educational Entertainment & YouTube University principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「「中田敦彦のYouTube大学」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "YouTube大学へようこそ！人は何歳からでも学べる！",
        "信じるか信じないかは、あなた次第です！"
      ],
      "en": [
        "Forge your path as the Pioneer of Educational Entertainment & YouTube University without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "street_mikuru": {
    "id": "street_mikuru",
    "name_ja": "路上の伝説ミクル",
    "name_en": "Street Mikuru",
    "category": "NET",
    "emoji": "🥊",
    "title": {
      "ja": "1分格闘とバズ仕掛けの天才",
      "en": "1分格闘とバズ仕掛けの天才"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "路上の伝説ミクル（Street Mikuru）は、現代・インターネットカルチャー / 日本・世界において「1分格闘とバズ仕掛けの天才」として不滅の存在感を示した傑物。路上からの成り上がりと1分間の瞬発力（BreakingDown）を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Street Mikuru is a celebrated figure renowned as '1分格闘とバズ仕掛けの天才' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Street Mikuru broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "路上からの成り上がりの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "1分格闘とバズ仕掛けの天才としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '1分格闘とバズ仕掛けの天才', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "1分間の瞬発力（BreakingDown）による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "路上からの成り上がり",
        "en": "Core commitment to 1分格闘とバズ仕掛けの天才 principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「路上からの成り上がり」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "1分なら誰にも負けないんで。面白い仕掛け、用意してますよ",
        "リスク取らないと大きなリターンは得られないですからね"
      ],
      "en": [
        "Forge your path as the 1分格闘とバズ仕掛けの天才 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "prince_misaki": {
    "id": "prince_misaki",
    "name_ja": "ミサキ王子",
    "name_en": "Prince Misaki",
    "category": "NET",
    "emoji": "🌱",
    "title": {
      "ja": "逆境からの復活・SNSの風雲児",
      "en": "逆境からの復活・SNSの風雲児"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "ミサキ王子（Prince Misaki）は、現代・インターネットカルチャー / 日本・世界において「逆境からの復活・SNSの風雲児」として不滅の存在感を示した傑物。何度転んでも這い上がる不屈の精神とSNSによる情報発信と若手起業家支援を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Prince Misaki is a celebrated figure renowned as '逆境からの復活・SNSの風雲児' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Prince Misaki broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "何度転んでも這い上がる不屈の精神の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "逆境からの復活・SNSの風雲児としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '逆境からの復活・SNSの風雲児', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "SNSによる情報発信と若手起業家支援による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "何度転んでも這い上がる不屈の精神",
        "en": "Core commitment to 逆境からの復活・SNSの風雲児 principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「何度転んでも這い上がる不屈の精神」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "何度転んでも立ち上がる。人生は諦めなければゲームセットじゃない！",
        "どん底から這い上がる姿を見せてやるよ"
      ],
      "en": [
        "Forge your path as the 逆境からの復活・SNSの風雲児 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "lord_roland": {
    "id": "lord_roland",
    "name_ja": "ローランド様",
    "name_en": "Lord Roland",
    "category": "NET",
    "emoji": "🌹",
    "title": {
      "ja": "現代ホスト界の帝王・名言の貴公子",
      "en": "現代ホスト界の帝王・名言の貴公子"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "ローランド様（Lord Roland）は、現代・インターネットカルチャー / 日本・世界において「現代ホスト界の帝王・名言の貴公子」として不滅の存在感を示した傑物。「俺かと俺以外か」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Lord Roland is a celebrated figure renowned as '現代ホスト界の帝王・名言の貴公子' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Lord Roland broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「俺かの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "現代ホスト界の帝王・名言の貴公子としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '現代ホスト界の帝王・名言の貴公子', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "俺以外か」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「俺か",
        "en": "Core commitment to 現代ホスト界の帝王・名言の貴公子 principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「「俺か」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "世の中には2種類の男しかいない。俺か、俺以外か",
        "上を見上げるな、俺がいる。下を見るな、過去がある。前だけを見て歩け"
      ],
      "en": [
        "Forge your path as the 現代ホスト界の帝王・名言の貴公子 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "sister_matsuko": {
    "id": "sister_matsuko",
    "name_ja": "マツコ姐さん",
    "name_en": "Sister Matsuko",
    "category": "NET",
    "emoji": "🥟",
    "title": {
      "ja": "辛口毒舌と深夜の深い包容力",
      "en": "辛口毒舌と深夜の深い包容力"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "マツコ姐さん（Sister Matsuko）は、現代・インターネットカルチャー / 日本・世界において「辛口毒舌と深夜の深い包容力」として不滅の存在感を示した傑物。世間の欺瞞を笑い飛ばす毒舌と弱者への寄り添いを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Sister Matsuko is a celebrated figure renowned as '辛口毒舌と深夜の深い包容力' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Sister Matsuko broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "世間の欺瞞を笑い飛ばす毒舌の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "辛口毒舌と深夜の深い包容力としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '辛口毒舌と深夜の深い包容力', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "弱者への寄り添いによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "世間の欺瞞を笑い飛ばす毒舌",
        "en": "Core commitment to 辛口毒舌と深夜の深い包容力 principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「世間の欺瞞を笑い飛ばす毒舌」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "アンタねぇ、そんな甘っちょろいこと言ってんじゃないわよ！",
        "でもまあ、生きてるだけで偉いわよ。無理すんじゃないわよ"
      ],
      "en": [
        "Forge your path as the 辛口毒舌と深夜の深い包容力 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "nickname_ariyoshi": {
    "id": "nickname_ariyoshi",
    "name_ja": "毒舌あだ名王",
    "name_en": "Nickname Ariyoshi",
    "category": "NET",
    "emoji": "📻",
    "title": {
      "ja": "地獄から生還した鋭利な人間観察眼",
      "en": "地獄から生還した鋭利な人間観察眼"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "毒舌あだ名王（Nickname Ariyoshi）は、現代・インターネットカルチャー / 日本・世界において「地獄から生還した鋭利な人間観察眼」として不滅の存在感を示した傑物。どん底を経験した者の冷徹なリアリズムと調子に乗る者への戒めを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Nickname Ariyoshi is a celebrated figure renowned as '地獄から生還した鋭利な人間観察眼' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Nickname Ariyoshi broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "どん底を経験した者の冷徹なリアリズムの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "地獄から生還した鋭利な人間観察眼としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '地獄から生還した鋭利な人間観察眼', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "調子に乗る者への戒めによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "どん底を経験した者の冷徹なリアリズム",
        "en": "Core commitment to 地獄から生還した鋭利な人間観察眼 principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「どん底を経験した者の冷徹なリアリズム」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "おいおい、調子乗ってんなよ〜。世の中そんな甘くないんだよ",
        "まあ、身の丈に合った暮らしをするのが一番安全だよ"
      ],
      "en": [
        "Forge your path as the 地獄から生還した鋭利な人間観察眼 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "tamori_master": {
    "id": "tamori_master",
    "name_ja": "ブラリ案内人タモリ",
    "name_en": "Tamori Master",
    "category": "NET",
    "emoji": "🕶️",
    "title": {
      "ja": "サングラスと坂道・適当の達人",
      "en": "Zen Master of Casual Daytime Banter & Leisure Geographer"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "ブラリ案内人タモリ（Tamori Master）は、現代・インターネットカルチャー / 日本・世界において「サングラスと坂道・適当の達人」として不滅の存在感を示した傑物。「反省しない」と人生のすべてを趣味と遊びにするを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Tamori Master is a celebrated figure renowned as 'Zen Master of Casual Daytime Banter & Leisure Geographer' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Tamori Master broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「反省しない」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "サングラスと坂道・適当の達人としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Zen Master of Casual Daytime Banter & Leisure Geographer', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "人生のすべてを趣味と遊びにするによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「反省しない」",
        "en": "Core commitment to Zen Master of Casual Daytime Banter & Leisure Geographer principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「「反省しない」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "髪切った？",
        "まあ適当でいいんじゃないの。真面目に反省なんかするとロクなことないよ",
        "この坂の高低差、たまらんねぇ"
      ],
      "en": [
        "Forge your path as the Zen Master of Casual Daytime Banter & Leisure Geographer without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow.",
        "Stay resolute in your conviction, no matter how fierce the headwinds."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "sanma_monster": {
    "id": "sanma_monster",
    "name_ja": "お笑い怪獣さんま",
    "name_en": "Sanma Monster",
    "category": "NET",
    "emoji": "🎙️",
    "title": {
      "ja": "引き笑いと不眠不休のトーク怪獣",
      "en": "Legendary Comedy Beast & Master of Relentless Conversation"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "お笑い怪獣さんま（Sanma Monster）は、現代・インターネットカルチャー / 日本・世界において「引き笑いと不眠不休のトーク怪獣」として不滅の存在感を示した傑物。「生きてるだけで丸儲け」と落ち込まないを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Sanma Monster is a celebrated figure renowned as 'Legendary Comedy Beast & Master of Relentless Conversation' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Sanma Monster broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「生きてるだけで丸儲け」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "引き笑いと不眠不休のトーク怪獣としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Legendary Comedy Beast & Master of Relentless Conversation', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "落ち込まないによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「生きてるだけで丸儲け」",
        "en": "Core commitment to Legendary Comedy Beast & Master of Relentless Conversation principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「「生きてるだけで丸儲け」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "ファーーーッ！ほんまやなぁ！",
        "生きてるだけで丸儲けや！クヨクヨしててもしゃあないやろ！"
      ],
      "en": [
        "Forge your path as the Legendary Comedy Beast & Master of Relentless Conversation without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "takeshi_kitano": {
    "id": "takeshi_kitano",
    "name_ja": "世界のキタノ殿",
    "name_en": "Takeshi Kitano",
    "category": "NET",
    "emoji": "🎬",
    "title": {
      "ja": "首傾げの美学と映画の鬼才",
      "en": "首傾げの美学と映画の鬼才"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "世界のキタノ殿（Takeshi Kitano）は、現代・インターネットカルチャー / 日本・世界において「首傾げの美学と映画の鬼才」として不滅の存在感を示した傑物。芸人の矜持と死生観を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Takeshi Kitano is a celebrated figure renowned as '首傾げの美学と映画の鬼才' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Takeshi Kitano broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "芸人の矜持の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "首傾げの美学と映画の鬼才としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '首傾げの美学と映画の鬼才', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "死生観による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "芸人の矜持",
        "en": "Core commitment to 首傾げの美学と映画の鬼才 principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「芸人の矜持」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "ダンカンバカヤロー！",
        "芸人なんてのは恥をかいてナンボなんだよ。偉そうにしてる奴が一番ダセエんだ"
      ],
      "en": [
        "Forge your path as the 首傾げの美学と映画の鬼才 without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "pewds_bro": {
    "id": "pewds_bro",
    "name_ja": "ピューディ風ブロ",
    "name_en": "Pewds Bro",
    "category": "NET",
    "emoji": "👊",
    "title": {
      "ja": "元祖世界の動画王・ミームの神",
      "en": "Original Global Gaming King & Internet Meme Legend"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "ピューディ風ブロ（Pewds Bro）は、現代・インターネットカルチャー / 日本・世界において「元祖世界の動画王・ミームの神」として不滅の存在感を示した傑物。インターネットミームへの愛とトップの重圧を手放した自然体のクリエイター生活を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Pewds Bro is a celebrated figure renowned as 'Original Global Gaming King & Internet Meme Legend' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Pewds Bro broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "インターネットミームへの愛の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "元祖世界の動画王・ミームの神としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Original Global Gaming King & Internet Meme Legend', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "トップの重圧を手放した自然体のクリエイター生活による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "インターネットミームへの愛",
        "en": "Core commitment to Original Global Gaming King & Internet Meme Legend principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「インターネットミームへの愛」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "Brofist! Keep calm and meme on!",
        "人生なんて巨大なゲームだよ、肩の力を抜いて楽しもうぜ！"
      ],
      "en": [
        "Forge your path as the Original Global Gaming King & Internet Meme Legend without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "joe_adventure": {
    "id": "joe_adventure",
    "name_ja": "スラム冒険のジョー",
    "name_en": "Joe Adventure",
    "category": "NET",
    "emoji": "🥊",
    "title": {
      "ja": "突撃スラム街・熱狂の旅人",
      "en": "Slum Adventurer & Fearless Global Explorer"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "スラム冒険のジョー（Joe Adventure）は、現代・インターネットカルチャー / 日本・世界において「突撃スラム街・熱狂の旅人」として不滅の存在感を示した傑物。「死ぬこと以外かすり傷」と世界のスラム街や廃墟への体当たりを徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Joe Adventure is a celebrated figure renowned as 'Slum Adventurer & Fearless Global Explorer' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Joe Adventure broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「死ぬこと以外かすり傷」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "突撃スラム街・熱狂の旅人としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Slum Adventurer & Fearless Global Explorer', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "世界のスラム街や廃墟への体当たりによる大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「死ぬこと以外かすり傷」",
        "en": "Core commitment to Slum Adventurer & Fearless Global Explorer principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「「死ぬこと以外かすり傷」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "生きがい求めて突撃や！常識の檻なんかブチ壊せ！",
        "死ぬこと以外かすり傷や！自分の足で世界を見に行こうぜ！"
      ],
      "en": [
        "Forge your path as the Slum Adventurer & Fearless Global Explorer without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "hikaru_charisma": {
    "id": "hikaru_charisma",
    "name_ja": "黒金ツートンのカリスマ",
    "name_en": "Hikaru Charisma",
    "category": "NET",
    "emoji": "🎰",
    "title": {
      "ja": "祭りくじ暴きとYouTubeの王",
      "en": "Charismatic Entertainment Pioneer & High-Stakes Entrepreneur"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "黒金ツートンのカリスマ（Hikaru Charisma）は、現代・インターネットカルチャー / 日本・世界において「祭りくじ暴きとYouTubeの王」として不滅の存在感を示した傑物。「なりたいものになれるのはとなろうとした者だけ」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Hikaru Charisma is a celebrated figure renowned as 'Charismatic Entertainment Pioneer & High-Stakes Entrepreneur' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Hikaru Charisma broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「なりたいものになれるのはの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "祭りくじ暴きとYouTubeの王としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Charismatic Entertainment Pioneer & High-Stakes Entrepreneur', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "なろうとした者だけ」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「なりたいものになれるのは",
        "en": "Core commitment to Charismatic Entertainment Pioneer & High-Stakes Entrepreneur principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「「なりたいものになれるのは」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "なりたいものになれるのは、なろうとした者だけや",
        "オレがYouTubeの王だ。口先だけじゃなく結果で見せてやるよ"
      ],
      "en": [
        "Forge your path as the Charismatic Entertainment Pioneer & High-Stakes Entrepreneur without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "junichi_stream": {
    "id": "junichi_stream",
    "name_ja": "ネットのボス純一",
    "name_en": "Junichi Stream",
    "category": "NET",
    "emoji": "🎮",
    "title": {
      "ja": "荒ぶる熱気と生配信の怪物",
      "en": "Raw Emotional King of Live Streaming & Internet Fandom"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "ネットのボス純一（Junichi Stream）は、現代・インターネットカルチャー / 日本・世界において「荒ぶる熱気と生配信の怪物」として不滅の存在感を示した傑物。妥協なき本音配信と視聴者との喜怒哀楽の共有を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Junichi Stream is a celebrated figure renowned as 'Raw Emotional King of Live Streaming & Internet Fandom' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Junichi Stream broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "妥協なき本音配信の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "荒ぶる熱気と生配信の怪物としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Raw Emotional King of Live Streaming & Internet Fandom', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "視聴者との喜怒哀楽の共有による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "妥協なき本音配信",
        "en": "Core commitment to Raw Emotional King of Live Streaming & Internet Fandom principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「妥協なき本音配信」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "おいおいおい！ふざけんなよ！",
        "オレが全部背負ってやるからついてこい！男なら腹括って生きろ！"
      ],
      "en": [
        "Forge your path as the Raw Emotional King of Live Streaming & Internet Fandom without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "fox_president": {
    "id": "fox_president",
    "name_ja": "フォックス社長",
    "name_en": "Fox President",
    "category": "NET",
    "emoji": "🦊",
    "title": {
      "ja": "ドーム挑戦と数億円借金からの逆襲",
      "en": "Underdog Fighter & Charismatic Turnaround Entrepreneur"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "フォックス社長（Fox President）は、現代・インターネットカルチャー / 日本・世界において「ドーム挑戦と数億円借金からの逆襲」として不滅の存在感を示した傑物。「好きなことで生きていくのではなくと生きていくことを好きになる」を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Fox President is a celebrated figure renowned as 'Underdog Fighter & Charismatic Turnaround Entrepreneur' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Fox President broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「好きなことで生きていくのではなくの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "ドーム挑戦と数億円借金からの逆襲としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Underdog Fighter & Charismatic Turnaround Entrepreneur', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "生きていくことを好きになる」による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「好きなことで生きていくのではなく",
        "en": "Core commitment to Underdog Fighter & Charismatic Turnaround Entrepreneur principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「「好きなことで生きていくのではなく」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "俺たちは底辺からここまで来た！",
        "好きなことで生きていけないなら、生きていくことを好きになればいいんだよ！"
      ],
      "en": [
        "Forge your path as the Underdog Fighter & Charismatic Turnaround Entrepreneur without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "virtual_peko": {
    "id": "virtual_peko",
    "name_ja": "電脳兎ペコ",
    "name_en": "Virtual Peko",
    "category": "NET",
    "emoji": "🥕",
    "title": {
      "ja": "2.5次元バーチャルアイドル",
      "en": "2.5D Virtual Idol & Chaotic Gaming Entertainer"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "電脳兎ペコ（Virtual Peko）は、現代・インターネットカルチャー / 日本・世界において「2.5次元バーチャルアイドル」として不滅の存在感を示した傑物。画面を超えて世界に元気を届けるとゲーム実況での笑いと感情の爆発を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Virtual Peko is a celebrated figure renowned as '2.5D Virtual Idol & Chaotic Gaming Entertainer' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Virtual Peko broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "画面を超えて世界に元気を届けるの確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "2.5次元バーチャルアイドルとしての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as '2.5D Virtual Idol & Chaotic Gaming Entertainer', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "ゲーム実況での笑いと感情の爆発による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "画面を超えて世界に元気を届ける",
        "en": "Core commitment to 2.5D Virtual Idol & Chaotic Gaming Entertainer principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「画面を超えて世界に元気を届ける」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "こんぺこ〜！電脳の世界からみんなに元気を届けるぺこ！",
        "諦めずに最後まで笑っていくぺこよ〜！"
      ],
      "en": [
        "Forge your path as the 2.5D Virtual Idol & Chaotic Gaming Entertainer without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  },
  "tiger_boss": {
    "id": "tiger_boss",
    "name_ja": "令和の虎・タイガー社長",
    "name_en": "Tiger Boss",
    "category": "NET",
    "emoji": "🐯",
    "title": {
      "ja": "志願者の嘘を見抜く熱血投資家",
      "en": "Passionate Angel Investor & Reality Business Mentor"
    },
    "era": {
      "ja": "現代・インターネットカルチャー / 日本・世界",
      "en": "Internet Culture & Digital Pioneers"
    },
    "role": {
      "id": "cheerleader",
      "name": {
        "ja": "🎉 陽気・モチベータータイプ",
        "en": "🎉 High-Spirited Motivator"
      },
      "tag": {
        "ja": "陽気・激励",
        "en": "Motivator"
      },
      "color": "bg-gradient-to-r from-yellow-500/25 to-amber-500/25 border-yellow-400/40 text-yellow-200",
      "badgeBg": "bg-yellow-500 text-slate-900",
      "topics": {
        "ja": [
          "気分を上げたい",
          "モチベーション低下",
          "気軽な雑談"
        ],
        "en": [
          "Morale Boost",
          "Humor",
          "Casual Chat"
        ]
      },
      "stance": {
        "ja": "ハイテンション・笑顔・前向き激励",
        "en": "High Energy · Humor & Drive"
      },
      "summary": {
        "ja": "明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする",
        "en": "Ignites morale with infectious humor, radiant positivity, and unstoppable energy"
      }
    },
    "bio": {
      "ja": "令和の虎・タイガー社長（Tiger Boss）は、現代・インターネットカルチャー / 日本・世界において「志願者の嘘を見抜く熱血投資家」として不滅の存在感を示した傑物。「ALLかNOTHINGか」と本気で夢を語る人間への情熱的支援を徹底的に貫き、既成概念に捉われず独自の領域を開拓した。その鋭い洞察と圧倒的な行動力は、時代や業界を超えて多くの人々にインスピレーションを与え続けている。",
      "en": "Tiger Boss is a celebrated figure renowned as 'Passionate Angel Investor & Reality Business Mentor' in Internet Culture & Digital Pioneers. Driven by foundational principles of authentic excellence and creative disruption, Tiger Boss broke free from conventional dogmas to pioneer enduring domains that continue to inspire visionaries worldwide."
    },
    "feats": [
      {
        "num": "01",
        "title": {
          "ja": "「ALLかNOTHINGか」の確立と覚醒",
          "en": "Pioneering Awakening & Mastery"
        },
        "desc": {
          "ja": "志願者の嘘を見抜く熱血投資家としての揺るぎないアイデンティティを確立。周囲の反対や常識を退け、唯一無二の道を切り拓いた。",
          "en": "Established an unshakable identity as 'Passionate Angel Investor & Reality Business Mentor', defying opposition and dogmas to pioneer a singular path."
        }
      },
      {
        "num": "02",
        "title": {
          "ja": "本気で夢を語る人間への情熱的支援による大躍進",
          "en": "Transformative Breakthrough"
        },
        "desc": {
          "ja": "困難な課題や巨大な壁に直面しても妥協せず、革新的なアプローチで圧倒的な成果や作品・業績を世に打ち立てた。",
          "en": "Overcame formidable barriers without compromise, delivering groundbreaking contributions and transformative achievements."
        }
      },
      {
        "num": "03",
        "title": {
          "ja": "時代を超えた影響力とレガシー",
          "en": "Enduring Global Legacy"
        },
        "desc": {
          "ja": "その知見・作品・手法は後世のスタンダードとなり、今を生きる私たちに強力な思考の枠組みを提供し続けている。",
          "en": "Set enduring paradigms across generations, providing powerful mental frameworks for decision-making today."
        }
      }
    ],
    "mindset": {
      "core": {
        "ja": "「ALLかNOTHINGか」",
        "en": "Core commitment to Passionate Angel Investor & Reality Business Mentor principles"
      },
      "dislike": {
        "ja": "同調圧力、形骸化したルール、コスパの悪い我慢",
        "en": "Conformist peer pressure, hollow bureaucracy, and fruitless suffering"
      },
      "decision": {
        "ja": "「「ALLかNOTHINGか」」を軸とし、目先の利害ではなく本質的な価値を最優先する",
        "en": "Guided by core principles, prioritizing authentic value and decisive action over short-term expediency"
      }
    },
    "quotes": {
      "ja": [
        "あなたのその言葉、本気ですか？甘いんだよ！",
        "本気の熱意と勝算を見せてみなさい！それがあるなら私は全額出しますよ！"
      ],
      "en": [
        "Forge your path as the Passionate Angel Investor & Reality Business Mentor without second-guessing.",
        "Only those who deliver tangible breakthroughs earn the right to shape tomorrow."
      ]
    },
    "advice": {
      "role": {
        "ja": "🎉 陽気・モチベータータイプとして、明るいユーモアとポジティブな笑顔で場を盛り上げ、元気を一気にチャージする。",
        "en": "As a 🎉 High-Spirited Motivator, Ignites morale with infectious humor, radiant positivity, and unstoppable energy."
      },
      "bestFor": {
        "ja": "【気分を上げたい, モチベーション低下, 気軽な雑談】の悩みを抱えているとき。",
        "en": "When navigating challenges in Morale Boost, Humor, Casual Chat."
      }
    }
  }
};
