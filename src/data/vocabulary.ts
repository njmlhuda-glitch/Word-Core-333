export interface Word {
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  meaning: string[];
  bengali: string;
  example: string[];
}

export interface ElegantExample {
  weak: string;
  better: string;
}

export interface ElegantWord {
  mainWord: string;
  insteadWords: string[];
  examples: ElegantExample[];
}

// ALL VOCABULARY WORDS (1-120)
export const ALL_WORDS: Word[] = [
  {
    word: "ALACRITY",
    pronunciation: "uh-LAK-ri-tee",
    partOfSpeech: "noun",
    meaning: ["eager willingness; cheerful readiness"],
    bengali: "উৎসাহ / আগ্রহপূর্ণ প্রস্তুতি",
    example: ["She accepted the invitation with great alacrity."],
  },
  {
    word: "MOROSE",
    pronunciation: "muh-ROHS",
    partOfSpeech: "adjective",
    meaning: ["gloomy; ill-tempered"],
    bengali: "বিষণ্ণ / খিটখিটে",
    example: ["He remained morose after hearing the bad news."],
  },
  {
    word: "COGENT",
    pronunciation: "KOH-jent",
    partOfSpeech: "adjective",
    meaning: ["clear and convincing"],
    bengali: "জোরালো / বিশ্বাসযোগ্য",
    example: ["The lawyer presented a cogent argument in court."],
  },
  {
    word: "PLACATE",
    pronunciation: "PLAY-kayt",
    partOfSpeech: "verb",
    meaning: ["to calm or satisfy someone"],
    bengali: "শান্ত করা / তুষ্ট করা",
    example: ["They tried to placate the angry customer with an apology."],
  },
  {
    word: "BOMBASTIC",
    pronunciation: "bom-BAS-tik",
    partOfSpeech: "adjective",
    meaning: ["pompous in speech or writing"],
    bengali: "আড়ম্বরপূর্ণ / ফুলানো ভাষার",
    example: ["His bombastic speech failed to impress the audience."],
  },
  {
    word: "LUCID",
    pronunciation: "LOO-sid",
    partOfSpeech: "adjective",
    meaning: ["clear and easy to understand"],
    bengali: "স্পষ্ট / পরিষ্কার",
    example: ["The professor gave a lucid explanation of the theory."],
  },
  {
    word: "CAPRICIOUS",
    pronunciation: "kuh-PRISH-us",
    partOfSpeech: "adjective",
    meaning: ["unpredictable; impulsive"],
    bengali: "খামখেয়ালি / অস্থিরমতি",
    example: ["The weather here is highly capricious."],
  },
  {
    word: "VIABLE",
    pronunciation: "VY-uh-bul",
    partOfSpeech: "adjective",
    meaning: ["capable of working successfully"],
    bengali: "কার্যকর / বাস্তবসম্মত",
    example: ["They proposed a viable solution to the crisis."],
  },
  {
    word: "PEDANTIC",
    pronunciation: "puh-DAN-tik",
    partOfSpeech: "adjective",
    meaning: ["overly concerned with minor details or rules"],
    bengali: "অতিরিক্ত খুঁতখুঁতে / পাণ্ডিত্য জাহিরকারী",
    example: ["His pedantic corrections annoyed the students."],
  },
  {
    word: "EPHEMERAL",
    pronunciation: "ih-FEM-er-ul",
    partOfSpeech: "adjective",
    meaning: ["lasting for a very short time"],
    bengali: "ক্ষণস্থায়ী / অস্থায়ী",
    example: ["The beauty of the rainbow was ephemeral."],
  },
  {
    word: "GUILELESS",
    pronunciation: "GYLE-less",
    partOfSpeech: "adjective",
    meaning: ["innocent and sincere"],
    bengali: "সরল / কপটতাহহীন",
    example: ["Her guileless smile won everyone's heart."],
  },
  {
    word: "PUNGENT",
    pronunciation: "PUN-jent",
    partOfSpeech: "adjective",
    meaning: ["having a strong sharp smell or taste"],
    bengali: "তীব্র গন্ধযুক্ত / ঝাঁঝালো",
    example: ["The pungent smell of garlic filled the kitchen."],
  },
  {
    word: "ABERRANT",
    pronunciation: "ab-ERR-ent",
    partOfSpeech: "adjective",
    meaning: ["deviating from the normal or expected"],
    bengali: "ব্যতিক্রমী / অস্বাভাবিক",
    example: ["His aberrant behavior worried his friends."],
  },
  {
    word: "MOLLIFY",
    pronunciation: "MOL-uh-fy",
    partOfSpeech: "verb",
    meaning: ["to soothe or calm"],
    bengali: "শান্ত করা / প্রশমিত করা",
    example: ["She tried to mollify the crying child."],
  },
  {
    word: "PRAGMATIC",
    pronunciation: "prag-MAT-ik",
    partOfSpeech: "adjective",
    meaning: ["practical rather than theoretical"],
    bengali: "বাস্তববাদী / ব্যবহারিক",
    example: ["He took a pragmatic approach to the problem."],
  },
  {
    word: "LOQUACIOUS",
    pronunciation: "loh-KWAY-shus",
    partOfSpeech: "adjective",
    meaning: ["very talkative"],
    bengali: "বাচাল / অতিরিক্ত কথাবার্তাপ্রবণ",
    example: ["The loquacious guest dominated the conversation."],
  },
  {
    word: "TRACTABLE",
    pronunciation: "TRAK-tuh-bul",
    partOfSpeech: "adjective",
    meaning: ["easy to control or manage"],
    bengali: "সহজে নিয়ন্ত্রণযোগ্য",
    example: ["The once wild horse became tractable after training."],
  },
  {
    word: "DERIDE",
    pronunciation: "dih-RYDE",
    partOfSpeech: "verb",
    meaning: ["to mock or ridicule"],
    bengali: "উপহাস করা / বিদ্রূপ করা",
    example: ["Critics derided the actor for his poor performance."],
  },
  {
    word: "IMMUTABLE",
    pronunciation: "ih-MYOO-tuh-bul",
    partOfSpeech: "adjective",
    meaning: ["unchangeable"],
    bengali: "অপরিবর্তনীয়",
    example: ["The laws of nature are considered immutable."],
  },
  {
    word: "SOPORIFIC",
    pronunciation: "sop-uh-RIF-ik",
    partOfSpeech: "adjective",
    meaning: ["causing sleep or drowsiness"],
    bengali: "ঘুমপাড়ানি / তন্দ্রাজনক",
    example: ["The lecture was so soporific that many students yawned."],
  },
  {
    word: "AMBIGUOUS",
    pronunciation: "am-BIG-yoo-us",
    partOfSpeech: "adjective",
    meaning: ["having more than one possible meaning; unclear"],
    bengali: "দ্ব্যর্থক / অস্পষ্ট",
    example: ["His ambiguous reply confused everyone."],
  },
  {
    word: "WARY",
    pronunciation: "WAIR-ee",
    partOfSpeech: "adjective",
    meaning: ["cautious and alert"],
    bengali: "সতর্ক / সাবধান",
    example: ["Travelers should be wary of pickpockets."],
  },
  {
    word: "EBULLIENT",
    pronunciation: "ih-BULL-yent",
    partOfSpeech: "adjective",
    meaning: ["overflowing with enthusiasm or excitement"],
    bengali: "উচ্ছ্বসিত / প্রাণবন্ত",
    example: ["Her ebullient personality energized the team."],
  },
  {
    word: "PERFIDIOUS",
    pronunciation: "per-FID-ee-us",
    partOfSpeech: "adjective",
    meaning: ["treacherous; disloyal"],
    bengali: "বিশ্বাসঘাতক / প্রতারক",
    example: ["The perfidious spy betrayed his country."],
  },
  {
    word: "MITIGATE",
    pronunciation: "MIT-ih-gayt",
    partOfSpeech: "verb",
    meaning: ["to make less severe"],
    bengali: "প্রশমিত করা / লাঘব করা",
    example: ["The government took steps to mitigate the crisis."],
  },
  {
    word: "CRAVEN",
    pronunciation: "KRAY-vun",
    partOfSpeech: "adjective",
    meaning: ["cowardly"],
    bengali: "কাপুরুষোচিত / ভীরু",
    example: ["The craven soldier fled from the battlefield."],
  },
  {
    word: "HYPERBOLE",
    pronunciation: "hy-PER-buh-lee",
    partOfSpeech: "noun",
    meaning: ["deliberate exaggeration for effect"],
    bengali: "অতিরঞ্জন",
    example: ["Saying he had a million problems was pure hyperbole."],
  },
  {
    word: "ASSIDUOUS",
    pronunciation: "uh-SID-yoo-us",
    partOfSpeech: "adjective",
    meaning: ["hardworking and persistent"],
    bengali: "পরিশ্রমী / অধ্যবসায়ী",
    example: ["She was assiduous in completing her research."],
  },
  {
    word: "MUNDANE",
    pronunciation: "mun-DAYN",
    partOfSpeech: "adjective",
    meaning: ["ordinary; dull"],
    bengali: "সাধারণ / একঘেয়ে",
    example: ["He grew tired of his mundane routine."],
  },
  {
    word: "DISCREDIT",
    pronunciation: "dis-KRED-it",
    partOfSpeech: "verb",
    meaning: ["to harm the reputation of"],
    bengali: "অসম্মান করা / বিশ্বাসযোগ্যতা নষ্ট করা",
    example: ["False rumors discredited the politician."],
  },
  {
    word: "REVERENT",
    pronunciation: "REV-er-ent",
    partOfSpeech: "adjective",
    meaning: ["showing deep respect"],
    bengali: "শ্রদ্ধাশীল / ভক্তিপূর্ণ",
    example: ["The audience remained reverent during the ceremony."],
  },
  {
    word: "PREVARICATE",
    pronunciation: "pri-VAIR-ih-kayt",
    partOfSpeech: "verb",
    meaning: ["to avoid telling the truth"],
    bengali: "সত্য গোপন করা / ঘুরিয়ে কথা বলা",
    example: ["Instead of answering directly, he chose to prevaricate."],
  },
  {
    word: "LACONIC",
    pronunciation: "luh-KON-ik",
    partOfSpeech: "adjective",
    meaning: ["using very few words"],
    bengali: "স্বল্পভাষী",
    example: ["His laconic response ended the discussion quickly."],
  },
  {
    word: "DIFFIDENCE",
    pronunciation: "DIFF-ih-duns",
    partOfSpeech: "noun",
    meaning: ["shyness; lack of confidence"],
    bengali: "আত্মবিশ্বাসের অভাব / লজ্জাশীলতা",
    example: ["Her diffidence prevented her from speaking publicly."],
  },
  {
    word: "PROFOUND",
    pronunciation: "pruh-FOUND",
    partOfSpeech: "adjective",
    meaning: ["deep or intense"],
    bengali: "গভীর / সুদূরপ্রসারী",
    example: ["The book had a profound impact on my thinking."],
  },
  {
    word: "VOLATILE",
    pronunciation: "VOL-uh-tyl",
    partOfSpeech: "adjective",
    meaning: ["unstable; likely to change suddenly"],
    bengali: "অস্থির / পরিবর্তনশীল",
    example: ["The stock market has been highly volatile recently."],
  },
  {
    word: "EQUANIMITY",
    pronunciation: "ee-kwuh-NIM-ih-tee",
    partOfSpeech: "noun",
    meaning: ["mental calmness and composure"],
    bengali: "মানসিক স্থিরতা / ধীরতা",
    example: ["She handled the crisis with remarkable equanimity."],
  },
  {
    word: "HARANGUE",
    pronunciation: "huh-RANG",
    partOfSpeech: "noun",
    meaning: ["a lengthy aggressive speech"],
    bengali: "দীর্ঘ তিরস্কারমূলক বক্তৃতা",
    example: ["The manager delivered a harangue about punctuality."],
  },
  {
    word: "INERT",
    pronunciation: "ih-NURT",
    partOfSpeech: "adjective",
    meaning: ["inactive; lacking energy"],
    bengali: "নিষ্ক্রিয় / জড়",
    example: ["The inert machine stood unused in the corner."],
  },
  {
    word: "SKEPTIC",
    pronunciation: "SKEP-tik",
    partOfSpeech: "noun",
    meaning: ["a person who doubts something"],
    bengali: "সন্দেহপ্রবণ ব্যক্তি",
    example: ["He remained a skeptic despite the evidence."],
  },
  {
    word: "OBDURATE",
    pronunciation: "OB-duh-rut",
    partOfSpeech: "adjective",
    meaning: ["stubbornly refusing to change one's opinion"],
    bengali: "একগুঁয়ে / অনমনীয়",
    example: ["The obdurate leader refused to compromise."],
  },
  {
    word: "CONTRITE",
    pronunciation: "kun-TRYT",
    partOfSpeech: "adjective",
    meaning: ["feeling deep remorse or guilt"],
    bengali: "অনুতপ্ত / অনুশোচনাকারী",
    example: ["He sounded truly contrite after the mistake."],
  },
  {
    word: "GARRULOUS",
    pronunciation: "GAR-uh-lus",
    partOfSpeech: "adjective",
    meaning: ["excessively talkative"],
    bengali: "বাচাল / অতিরিক্ত কথাবার্তাপ্রবণ",
    example: ["The garrulous passenger talked throughout the journey."],
  },
  {
    word: "IMPEDE",
    pronunciation: "im-PEED",
    partOfSpeech: "verb",
    meaning: ["to hinder or obstruct"],
    bengali: "বাধা দেওয়া / প্রতিবন্ধকতা সৃষ্টি করা",
    example: ["Heavy rain impeded the rescue operation."],
  },
  {
    word: "AUSTERE",
    pronunciation: "aw-STEER",
    partOfSpeech: "adjective",
    meaning: ["strict; plain and without luxury"],
    bengali: "কঠোর / অনাড়ম্বর",
    example: ["The monks lived an austere lifestyle."],
  },
  {
    word: "QUIBBLE",
    pronunciation: "KWIB-ul",
    partOfSpeech: "verb",
    meaning: ["to argue over trivial matters"],
    bengali: "তুচ্ছ বিষয় নিয়ে তর্ক করা",
    example: ["They quibbled about the wording of the contract."],
  },
  {
    word: "MAGNANIMITY",
    pronunciation: "mag-nuh-NIM-ih-tee",
    partOfSpeech: "noun",
    meaning: ["generosity and nobility of spirit"],
    bengali: "মহানুভবতা / উদারতা",
    example: ["She showed magnanimity toward her rivals."],
  },
  {
    word: "INSIPID",
    pronunciation: "in-SIP-id",
    partOfSpeech: "adjective",
    meaning: ["dull; lacking flavor or interest"],
    bengali: "নীরস / স্বাদহীন",
    example: ["The movie was long and insipid."],
  },
  {
    word: "METICULOUS",
    pronunciation: "muh-TIK-yuh-lus",
    partOfSpeech: "adjective",
    meaning: ["extremely careful and precise"],
    bengali: "খুঁতখুঁতে / অত্যন্ত সতর্ক",
    example: ["She kept meticulous records of every expense."],
  },
  {
    word: "TRUCULENCE",
    pronunciation: "TRUK-yuh-luns",
    partOfSpeech: "noun",
    meaning: ["aggressive or defiant behavior"],
    bengali: "উগ্রতা / ঝগড়াটে স্বভাব",
    example: ["His truculence made negotiations difficult."],
  },
  {
    word: "DISINTERESTED",
    pronunciation: "dis-IN-truh-stid",
    partOfSpeech: "adjective",
    meaning: ["unbiased; impartial"],
    bengali: "নিরপেক্ষ / স্বার্থহীন",
    example: ["A disinterested judge heard the case fairly."],
  },
  {
    word: "COMPENDIUM",
    pronunciation: "kum-PEN-dee-um",
    partOfSpeech: "noun",
    meaning: ["a concise collection of information"],
    bengali: "সংক্ষিপ্ত সংকলন / সারসংগ্রহ",
    example: ["The handbook is a compendium of legal rules."],
  },
  {
    word: "DIVERGE",
    pronunciation: "dy-VURJ",
    partOfSpeech: "verb",
    meaning: ["to move or separate in different directions"],
    bengali: "বিচ্ছিন্ন হওয়া / ভিন্ন পথে যাওয়া",
    example: ["Their opinions began to diverge sharply."],
  },
  {
    word: "FRUGALITY",
    pronunciation: "froo-GAL-ih-tee",
    partOfSpeech: "noun",
    meaning: ["economical use of resources"],
    bengali: "মিতব্যয়িতা",
    example: ["His frugality allowed him to save money."],
  },
  {
    word: "IMPASSIVE",
    pronunciation: "im-PAS-iv",
    partOfSpeech: "adjective",
    meaning: ["showing no emotion"],
    bengali: "ভাবলেশহীন / নির্বিকার",
    example: ["She remained impassive during the argument."],
  },
  {
    word: "FATUOUS",
    pronunciation: "FACH-oo-us",
    partOfSpeech: "adjective",
    meaning: ["foolishly self-satisfied; silly"],
    bengali: "বোকাসোকা / নির্বোধ",
    example: ["His fatuous remarks irritated the audience."],
  },
  {
    word: "DISSEMINATE",
    pronunciation: "dih-SEM-uh-nayt",
    partOfSpeech: "verb",
    meaning: ["to spread widely"],
    bengali: "প্রচার করা / ছড়িয়ে দেওয়া",
    example: ["The organization disseminated information quickly."],
  },
  {
    word: "VENERATE",
    pronunciation: "VEN-uh-rayt",
    partOfSpeech: "verb",
    meaning: ["to respect deeply"],
    bengali: "শ্রদ্ধা করা / পূজা করা",
    example: ["Many cultures venerate their ancestors."],
  },
  {
    word: "DOGMATIC",
    pronunciation: "dog-MAT-ik",
    partOfSpeech: "adjective",
    meaning: ["stubbornly opinionated"],
    bengali: "গোঁড়া / মতবাদে অনড়",
    example: ["His dogmatic attitude discouraged debate."],
  },
  {
    word: "FLEDGLING",
    pronunciation: "FLEJ-ling",
    partOfSpeech: "noun",
    meaning: ["a beginner or inexperienced person"],
    bengali: "নবীন / অনভিজ্ঞ ব্যক্তি",
    example: ["The fledgling company struggled in its first year."],
  },
  {
    word: "PERENNIAL",
    pronunciation: "puh-REN-ee-ul",
    partOfSpeech: "adjective",
    meaning: ["lasting for a long time; recurring every year"],
    bengali: "চিরস্থায়ী / বার্ষিক",
    example: ["Poverty remains a perennial problem in many regions."],
  },
  {
    word: "ANOMALOUS",
    pronunciation: "uh-NOM-uh-lus",
    partOfSpeech: "adjective",
    meaning: ["deviating from what is normal"],
    bengali: "অস্বাভাবিক / ব্যতিক্রমী",
    example: ["Scientists were puzzled by the anomalous results."],
  },
  {
    word: "RETICENT",
    pronunciation: "RET-ih-sunt",
    partOfSpeech: "adjective",
    meaning: ["reserved; unwilling to speak freely"],
    bengali: "স্বল্পভাষী / সংযত",
    example: ["He was reticent about his personal life."],
  },
  {
    word: "DISSONANCE",
    pronunciation: "DIS-uh-nuns",
    partOfSpeech: "noun",
    meaning: ["lack of harmony or agreement"],
    bengali: "অসামঞ্জস্য / বেসুরো অবস্থা",
    example: ["There was clear dissonance between their statements."],
  },
  {
    word: "SATIATE",
    pronunciation: "SAY-shee-ayt",
    partOfSpeech: "verb",
    meaning: ["to satisfy fully"],
    bengali: "পূর্ণ তৃপ্ত করা",
    example: ["The feast satiated everyone's hunger."],
  },
  {
    word: "MENDACIOUS",
    pronunciation: "men-DAY-shus",
    partOfSpeech: "adjective",
    meaning: ["dishonest; lying"],
    bengali: "মিথ্যাবাদী / অসত্যবাদী",
    example: ["The mendacious witness could not be trusted."],
  },
  {
    word: "CONVOLUTED",
    pronunciation: "KON-vuh-loo-tid",
    partOfSpeech: "adjective",
    meaning: ["complex and difficult to follow"],
    bengali: "জটিল / প্যাঁচালো",
    example: ["The plot of the novel was overly convoluted."],
  },
  {
    word: "SALUBRIOUS",
    pronunciation: "suh-LOO-bree-us",
    partOfSpeech: "adjective",
    meaning: ["health-giving; healthy"],
    bengali: "স্বাস্থ্যকর / উপকারী",
    example: ["They moved to a salubrious climate by the sea."],
  },
  {
    word: "CAUSTIC",
    pronunciation: "KAW-stik",
    partOfSpeech: "adjective",
    meaning: ["sarcastic and biting"],
    bengali: "তীক্ষ্ণ বিদ্রূপপূর্ণ",
    example: ["Her caustic remarks hurt his feelings."],
  },
  {
    word: "PROPENSITY",
    pronunciation: "pruh-PEN-sih-tee",
    partOfSpeech: "noun",
    meaning: ["a natural tendency or inclination"],
    bengali: "প্রবণতা / ঝোঁক",
    example: ["He has a propensity for taking risks."],
  },
  {
    word: "FACETIOUS",
    pronunciation: "fuh-SEE-shus",
    partOfSpeech: "adjective",
    meaning: ["humorous in an inappropriate way"],
    bengali: "ঠাট্টাপ্রবণ / হাস্যরসাত্মক",
    example: ["His facetious comment annoyed the teacher."],
  },
  {
    word: "STIGMA",
    pronunciation: "STIG-muh",
    partOfSpeech: "noun",
    meaning: ["a mark of shame or disgrace"],
    bengali: "কলঙ্ক / সামাজিক লজ্জা",
    example: ["There is still a stigma surrounding mental illness."],
  },
  {
    word: "INTRACTABLE",
    pronunciation: "in-TRAK-tuh-bul",
    partOfSpeech: "adjective",
    meaning: ["hard to control or solve"],
    bengali: "দুর্বার / কঠিনভাবে নিয়ন্ত্রণযোগ্য",
    example: ["The dispute became increasingly intractable."],
  },
  {
    word: "ECLECTIC",
    pronunciation: "ih-KLEK-tik",
    partOfSpeech: "adjective",
    meaning: ["drawing ideas from many different sources"],
    bengali: "বিচিত্রধর্মী / নানা উৎস থেকে গৃহীত",
    example: ["Her music taste is highly eclectic."],
  },
  {
    word: "PRESUMPTUOUS",
    pronunciation: "prih-ZUMP-choo-us",
    partOfSpeech: "adjective",
    meaning: ["overly bold or arrogant"],
    bengali: "ধৃষ্ট / ঔদ্ধত্যপূর্ণ",
    example: ["It was presumptuous of him to speak for everyone."],
  },
  {
    word: "DORMANT",
    pronunciation: "DOR-munt",
    partOfSpeech: "adjective",
    meaning: ["inactive but capable of becoming active"],
    bengali: "সুপ্ত / নিষ্ক্রিয়",
    example: ["The volcano has remained dormant for centuries."],
  },
  {
    word: "DISABUSE",
    pronunciation: "dis-uh-BYOOZ",
    partOfSpeech: "verb",
    meaning: ["to free someone from a false belief"],
    bengali: "ভুল ধারণা দূর করা",
    example: ["The teacher disabused students of the rumor."],
  },
  {
    word: "TENUOUS",
    pronunciation: "TEN-yoo-us",
    partOfSpeech: "adjective",
    meaning: ["weak; not well supported"],
    bengali: "দুর্বল / ভঙ্গুর",
    example: ["The evidence against him was tenuous."],
  },
  {
    word: "APPROBATION",
    pronunciation: "ap-ruh-BAY-shun",
    partOfSpeech: "noun",
    meaning: ["approval or praise"],
    bengali: "অনুমোদন / প্রশংসা",
    example: ["Her performance earned the approbation of critics."],
  },
  {
    word: "QUIESCENT",
    pronunciation: "kwee-ES-unt",
    partOfSpeech: "adjective",
    meaning: ["inactive; at rest"],
    bengali: "নিষ্ক্রিয় / শান্ত",
    example: ["The volcano is currently quiescent."],
  },
  {
    word: "MISANTHROPE",
    pronunciation: "MIS-un-throhp",
    partOfSpeech: "noun",
    meaning: ["a person who dislikes humanity"],
    bengali: "মানববিদ্বেষী ব্যক্তি",
    example: ["The old man was known as a misanthrope who avoided society."],
  },
  {
    word: "DENIGRATE",
    pronunciation: "DEN-ih-grayt",
    partOfSpeech: "verb",
    meaning: ["to criticize unfairly; belittle"],
    bengali: "হেয় করা / নিন্দা করা",
    example: ["He constantly denigrated his opponent's achievements."],
  },
  {
    word: "INGENUOUS",
    pronunciation: "in-JEN-yoo-us",
    partOfSpeech: "adjective",
    meaning: ["innocent and sincere"],
    bengali: "সরল / অকপট",
    example: ["Her ingenuous nature made her easy to trust."],
  },
  {
    word: "PRODIGAL",
    pronunciation: "PROD-ih-gul",
    partOfSpeech: "adjective",
    meaning: ["wastefully extravagant"],
    bengali: "অপব্যয়ী / অপচয়কারী",
    example: ["His prodigal spending left him in debt."],
  },
  {
    word: "FELICITOUS",
    pronunciation: "fih-LISS-ih-tus",
    partOfSpeech: "adjective",
    meaning: ["well chosen; suitable"],
    bengali: "যথাযথ / সুখকর",
    example: ["She made a felicitous remark during the meeting."],
  },
  {
    word: "CHICANERY",
    pronunciation: "shi-KAY-nuh-ree",
    partOfSpeech: "noun",
    meaning: ["deception through trickery"],
    bengali: "কৌশলী প্রতারণা / ধোঁকাবাজি",
    example: ["The case involved political chicanery and corruption."],
  },
  {
    word: "BOLSTER",
    pronunciation: "BOHL-stur",
    partOfSpeech: "verb",
    meaning: ["to support or strengthen"],
    bengali: "শক্তিশালী করা / সমর্থন করা",
    example: ["The evidence bolstered her argument."],
  },
  {
    word: "INSINUATE",
    pronunciation: "in-SIN-yoo-ayt",
    partOfSpeech: "verb",
    meaning: ["to suggest indirectly"],
    bengali: "ইঙ্গিত করা / পরোক্ষভাবে বলা",
    example: ["Are you insinuating that I lied?"],
  },
  {
    word: "RECALCITRANT",
    pronunciation: "rih-KAL-sih-trunt",
    partOfSpeech: "adjective",
    meaning: ["stubbornly resistant to authority"],
    bengali: "অবাধ্য / একগুঁয়ে",
    example: ["The recalcitrant student refused to follow instructions."],
  },
  {
    word: "PERVASIVE",
    pronunciation: "per-VAY-siv",
    partOfSpeech: "adjective",
    meaning: ["spreading widely throughout"],
    bengali: "সর্বব্যাপী / ব্যাপকভাবে ছড়ানো",
    example: ["A pervasive smell of smoke filled the room."],
  },
  {
    word: "AVER",
    pronunciation: "uh-VUR",
    partOfSpeech: "verb",
    meaning: ["to declare confidently"],
    bengali: "দৃঢ়ভাবে ঘোষণা করা",
    example: ["The witness averred that he saw the incident clearly."],
  },
  {
    word: "IDOLATRY",
    pronunciation: "eye-DOL-uh-tree",
    partOfSpeech: "noun",
    meaning: ["excessive admiration or worship"],
    bengali: "মূর্তিপূজা / অন্ধ ভক্তি",
    example: ["Celebrity idolatry is common among teenagers."],
  },
  {
    word: "LUMINOUS",
    pronunciation: "LOO-muh-nus",
    partOfSpeech: "adjective",
    meaning: ["radiating or reflecting light"],
    bengali: "উজ্জ্বল / দীপ্তিমান",
    example: ["The moon looked luminous in the night sky."],
  },
  {
    word: "PERFUNCTORY",
    pronunciation: "per-FUNK-tuh-ree",
    partOfSpeech: "adjective",
    meaning: ["done with little interest or effort"],
    bengali: "যান্ত্রিকভাবে সম্পন্ন / অনাগ্রহপূর্ণ",
    example: ["He gave a perfunctory apology and left."],
  },
  {
    word: "ASSUAGE",
    pronunciation: "uh-SWAYJ",
    partOfSpeech: "verb",
    meaning: ["to ease or lessen pain or fear"],
    bengali: "উপশম করা / প্রশমিত করা",
    example: ["The medicine assuaged her headache."],
  },
  {
    word: "INUNDATE",
    pronunciation: "IN-un-dayt",
    partOfSpeech: "verb",
    meaning: ["to flood or overwhelm"],
    bengali: "প্লাবিত করা / ভাসিয়ে দেওয়া",
    example: ["The office was inundated with applications."],
  },
  {
    word: "GRANDILOQUENT",
    pronunciation: "gran-DIL-uh-kwunt",
    partOfSpeech: "adjective",
    meaning: ["pompous in speech or style"],
    bengali: "আড়ম্বরপূর্ণ ভাষার",
    example: ["His grandiloquent speech impressed nobody."],
  },
  {
    word: "ONEROUS",
    pronunciation: "ON-er-us",
    partOfSpeech: "adjective",
    meaning: ["burdensome; difficult to endure"],
    bengali: "কষ্টকর / বোঝাস্বরূপ",
    example: ["The contract imposed onerous conditions on workers."],
  },
  {
    word: "DICHOTOMY",
    pronunciation: "dy-KOT-uh-mee",
    partOfSpeech: "noun",
    meaning: ["a division into two contrasting parts"],
    bengali: "দ্বিভাগ / দ্বৈত বিভাজন",
    example: ["The book explores the dichotomy between science and religion."],
  },
  {
    word: "DISJOINTED",
    pronunciation: "dis-JOYN-tid",
    partOfSpeech: "adjective",
    meaning: ["lacking connection or coherence"],
    bengali: "বিচ্ছিন্ন / অসংলগ্ন",
    example: ["His explanation sounded disjointed and confusing."],
  },
  {
    word: "VERACIOUS",
    pronunciation: "vuh-RAY-shus",
    partOfSpeech: "adjective",
    meaning: ["truthful and honest"],
    bengali: "সত্যবাদী / সৎ",
    example: ["The journalist was known for her veracious reporting."],
  },
  {
    word: "INSULARITY",
    pronunciation: "in-suh-LAIR-ih-tee",
    partOfSpeech: "noun",
    meaning: ["narrow-minded isolation"],
    bengali: "সংকীর্ণতা / বিচ্ছিন্ন মানসিকতা",
    example: ["Cultural insularity can hinder progress."],
  },
  {
    word: "CATALYST",
    pronunciation: "KAT-uh-list",
    partOfSpeech: "noun",
    meaning: ["something that causes change or action"],
    bengali: "অনুঘটক / পরিবর্তনের কারণ",
    example: ["The protest became a catalyst for reform."],
  },
  {
    word: "DAUNT",
    pronunciation: "DONT",
    partOfSpeech: "verb",
    meaning: ["to intimidate or discourage"],
    bengali: "ভয় দেখানো / নিরুৎসাহিত করা",
    example: ["The difficult exam did not daunt her."],
  },
  {
    word: "AMBIVALENCE",
    pronunciation: "am-BIV-uh-luns",
    partOfSpeech: "noun",
    meaning: ["mixed or contradictory feelings"],
    bengali: "দ্বিধা / মিশ্র অনুভূতি",
    example: ["He felt ambivalence about changing jobs."],
  },
  {
    word: "DISTILL",
    pronunciation: "dih-STIL",
    partOfSpeech: "verb",
    meaning: ["to extract the essential meaning"],
    bengali: "সারাংশ বের করা / বিশুদ্ধ করা",
    example: ["She distilled the report into a short summary."],
  },
  {
    word: "REPROACH",
    pronunciation: "rih-PROHCH",
    partOfSpeech: "verb",
    meaning: ["to express disappointment or blame"],
    bengali: "ভর্ৎসনা করা / দোষোয়ারোপ করা",
    example: ["He reproached himself for the mistake."],
  },
  {
    word: "HOMOGENEOUS",
    pronunciation: "hoh-muh-JEE-nee-us",
    partOfSpeech: "adjective",
    meaning: ["uniform in composition or character"],
    bengali: "সমজাতীয় / একরূপ",
    example: ["The population of the village is fairly homogeneous."],
  },
  {
    word: "CONUNDRUM",
    pronunciation: "kuh-NUN-drum",
    partOfSpeech: "noun",
    meaning: ["a confusing and difficult problem"],
    bengali: "জটিল সমস্যা / ধাঁধা",
    example: ["Balancing work and family became a conundrum for her."],
  },
  {
    word: "TACIT",
    pronunciation: "TASS-it",
    partOfSpeech: "adjective",
    meaning: ["understood without being stated"],
    bengali: "নীরব সম্মতিসূচক / প্রচ্ছন্ন",
    example: ["There was a tacit agreement between them."],
  },
  {
    word: "STRUT",
    pronunciation: "STRUT",
    partOfSpeech: "verb",
    meaning: ["to walk proudly with arrogance"],
    bengali: "দম্ভভরে হাঁটা",
    example: ["He strutted across the stage confidently."],
  },
  {
    word: "ENGENDER",
    pronunciation: "en-JEN-der",
    partOfSpeech: "verb",
    meaning: ["to cause or produce"],
    bengali: "সৃষ্টি করা / জন্ম দেওয়া",
    example: ["The policy engendered public resentment."],
  },
  {
    word: "PATHOLOGICAL",
    pronunciation: "path-uh-LOJ-ih-kul",
    partOfSpeech: "adjective",
    meaning: ["extreme or compulsive in an unhealthy way"],
    bengali: "রোগগত / অস্বাভাবিকভাবে প্রবল",
    example: ["He was a pathological liar."],
  },
  {
    word: "DISTEND",
    pronunciation: "dih-STEND",
    partOfSpeech: "verb",
    meaning: ["to swell or expand"],
    bengali: "ফুলে ওঠা / প্রসারিত হওয়া",
    example: ["Her stomach distended after the meal."],
  },
  {
    word: "SAGE",
    pronunciation: "SAYJ",
    partOfSpeech: "noun",
    meaning: ["a wise person"],
    bengali: "জ্ঞানী ব্যক্তি / প্রাজ্ঞ",
    example: ["The old sage offered valuable advice."],
  },
  {
    word: "OSCILLATE",
    pronunciation: "OSS-uh-layt",
    partOfSpeech: "verb",
    meaning: ["to swing back and forth; fluctuate"],
    bengali: "দোল খাওয়া / ওঠানামা করা",
    example: ["Public opinion tends to oscillate over time."],
  },
  {
    word: "INNOCUOUS",
    pronunciation: "ih-NOK-yoo-us",
    partOfSpeech: "adjective",
    meaning: ["harmless"],
    bengali: "নিরীহ / ক্ষতিকর নয়",
    example: ["The remark seemed innocuous at first."],
  },
  {
    word: "SANCTION",
    pronunciation: "SANK-shun",
    partOfSpeech: "noun",
    meaning: ["official approval or penalty"],
    bengali: "অনুমোদন / নিষেধাজ্ঞা",
    example: ["The country faced economic sanctions."],
  },
  {
    word: "ARDUOUS",
    pronunciation: "AR-joo-us",
    partOfSpeech: "adjective",
    meaning: ["difficult and demanding"],
    bengali: "কঠিন / শ্রমসাধ্য",
    example: ["Climbing the mountain was an arduous task."],
  },
  {
    word: "AESTHETIC",
    pronunciation: "es-THET-ik",
    partOfSpeech: "adjective",
    meaning: ["concerned with beauty or artistic taste"],
    bengali: "নান্দনিক / সৌন্দর্যবিষয়ক",
    example: ["The building has great aesthetic appeal."],
  },
  {
    word: "SUBSTANTIATE",
    pronunciation: "sub-STAN-shee-ayt",
    partOfSpeech: "verb",
    meaning: ["to support with evidence"],
    bengali: "প্রমাণ দ্বারা প্রতিষ্ঠা করা",
    example: ["The scientist substantiated his theory with data."],
  },
  {
    word: "INCHOATE",
    pronunciation: "in-KOH-it",
    partOfSpeech: "adjective",
    meaning: ["not fully formed or developed"],
    bengali: "অপরিণত / অসম্পূর্ণ",
    example: ["Her ideas were still inchoate and unclear."],
  },
  {
    word: "OBSEQUIOUS",
    pronunciation: "ub-SEE-kwee-us",
    partOfSpeech: "adjective",
    meaning: ["excessively eager to please"],
    bengali: "তোষামোদকারী / অতিরিক্ত অনুগত",
    example: ["The obsequious assistant agreed with everything the boss said."],
  },
  {
    word: "IMPLICIT",
    pronunciation: "im-PLISS-it",
    partOfSpeech: "adjective",
    meaning: ["understood though not directly expressed"],
    bengali: "প্রচ্ছন্ন / পরোক্ষ",
    example: ["There was an implicit warning in his words."],
  },
  {
    word: "PHLEGMATIC",
    pronunciation: "fleg-MAT-ik",
    partOfSpeech: "adjective",
    meaning: ["calm and unemotional"],
    bengali: "শান্ত স্বভাবের / নির্বিকার",
    example: ["She remained phlegmatic during the emergency."],
  },
  {
    word: "PRECARIOUS",
    pronunciation: "prih-KAIR-ee-us",
    partOfSpeech: "adjective",
    meaning: ["uncertain and dangerous"],
    bengali: "অনিশ্চিত / ঝুঁকিপূর্ণ",
    example: ["They lived in a precarious financial situation."],
  },
  {
    word: "DISPARAGE",
    pronunciation: "dih-SPAIR-ij",
    partOfSpeech: "verb",
    meaning: ["to belittle or speak negatively about"],
    bengali: "হেয় করা / তুচ্ছতাচ্ছিল্য করা",
    example: ["Critics unfairly disparaged the young artist."],
  },
  {
    word: "DESULTORY",
    pronunciation: "DEZ-ul-tor-ee",
    partOfSpeech: "adjective",
    meaning: ["lacking a clear plan or purpose"],
    bengali: "এলোমেলো / উদ্দেশ্যহীন",
    example: ["Their desultory conversation soon ended."],
  },
  {
    word: "PROBLEMATIC",
    pronunciation: "prob-luh-MAT-ik",
    partOfSpeech: "adjective",
    meaning: ["difficult or troublesome"],
    bengali: "সমস্যাজনক",
    example: ["The new policy proved problematic for small businesses."],
  },
  {
    word: "SPORADIC",
    pronunciation: "spuh-RAD-ik",
    partOfSpeech: "adjective",
    meaning: ["occurring irregularly"],
    bengali: "বিক্ষিপ্ত / অনিয়মিত",
    example: ["The region experienced sporadic rainfall."],
  },
  {
    word: "ADMONISH",
    pronunciation: "ad-MON-ish",
    partOfSpeech: "verb",
    meaning: ["to warn or scold gently"],
    bengali: "সতর্ক করা / ভর্ৎসনা করা",
    example: ["The teacher admonished the students for being late."],
  },
  {
    word: "ENDEMIC",
    pronunciation: "en-DEM-ik",
    partOfSpeech: "adjective",
    meaning: ["native or regularly found in a place"],
    bengali: "স্থানীয়ভাবে প্রচলিত",
    example: ["Malaria is endemic in some tropical regions."],
  },
  {
    word: "RECLUSE",
    pronunciation: "REK-loos",
    partOfSpeech: "noun",
    meaning: ["a person who lives in isolation"],
    bengali: "নির্জনবাসী ব্যক্তি",
    example: ["The writer became a recluse in his old age."],
  },
  {
    word: "PROPITIATE",
    pronunciation: "pruh-PISH-ee-ayt",
    partOfSpeech: "verb",
    meaning: ["to win favor or appease"],
    bengali: "প্রসন্ন করা / সন্তুষ্ট করা",
    example: ["They offered gifts to propitiate the ruler."],
  },
  {
    word: "DISSOLUTION",
    pronunciation: "dis-uh-LOO-shun",
    partOfSpeech: "noun",
    meaning: ["the act of ending or breaking apart"],
    bengali: "বিলুপ্তি / ভাঙন",
    example: ["The dissolution of the alliance shocked many people."],
  },
  {
    word: "BURNISH",
    pronunciation: "BUR-nish",
    partOfSpeech: "verb",
    meaning: ["to polish or make shiny"],
    bengali: "মসৃণ করা / পালিশ করা",
    example: ["He burnished the silver until it gleamed."],
  },
  {
    word: "DESICCATE",
    pronunciation: "DESS-ih-kayt",
    partOfSpeech: "verb",
    meaning: ["to dry out completely"],
    bengali: "শুকিয়ে ফেলা",
    example: ["The intense heat desiccated the soil."],
  },
  {
    word: "GULLIBLE",
    pronunciation: "GUL-uh-bul",
    partOfSpeech: "adjective",
    meaning: ["easily deceived"],
    bengali: "সহজে প্রতারিত হয় এমন",
    example: ["The scam targeted gullible customers."],
  },
  {
    word: "AMALGAMATE",
    pronunciation: "uh-MAL-guh-mayt",
    partOfSpeech: "verb",
    meaning: ["to combine into one whole"],
    bengali: "একত্রিত করা / মিশিয়ে ফেলা",
    example: ["The companies decided to amalgamate their resources."],
  },
  {
    word: "IMPAIR",
    pronunciation: "im-PAIR",
    partOfSpeech: "verb",
    meaning: ["to weaken or damage"],
    bengali: "ক্ষতিগ্রস্ত করা / দুর্বল করা",
    example: ["Lack of sleep can impair judgment."],
  },
  {
    word: "STOLID",
    pronunciation: "STOL-id",
    partOfSpeech: "adjective",
    meaning: ["calm and unemotional; not easily excited"],
    bengali: "নির্বিকার / অনুভূতিহীন",
    example: ["The guard remained stolid despite the chaos."],
  },
  {
    word: "EXCULPATE",
    pronunciation: "EKS-kul-payt",
    partOfSpeech: "verb",
    meaning: ["to clear from blame"],
    bengali: "দোষমুক্ত করা",
    example: ["The evidence exculpated the accused man."],
  },
  {
    word: "FERVOR",
    pronunciation: "FUR-vur",
    partOfSpeech: "noun",
    meaning: ["intense enthusiasm or passion"],
    bengali: "উদ্দীপনা / তীব্র আবেগ",
    example: ["The crowd cheered with great fervor."],
  },
  {
    word: "INADVERTENTLY",
    pronunciation: "in-ad-VUR-tunt-lee",
    partOfSpeech: "adverb",
    meaning: ["unintentionally; accidentally"],
    bengali: "অনিচ্ছাকৃতভাবে / অসাবধানতাবশত",
    example: ["She inadvertently deleted the important file."],
  },
  {
    word: "CONTENTIOUS",
    pronunciation: "kun-TEN-shus",
    partOfSpeech: "adjective",
    meaning: ["causing argument or disagreement"],
    bengali: "বিতর্কিত / ঝগড়াটে",
    example: ["The proposal became a contentious issue."],
  },
  {
    word: "DIFFUSE",
    pronunciation: "dih-FYOOS",
    partOfSpeech: "adjective",
    meaning: ["spread out; not concise"],
    bengali: "বিক্ষিপ্ত / দীর্ঘ ও অসংলগ্ন",
    example: ["His diffuse explanation confused the audience."],
  },
  {
    word: "PROSCRIBE",
    pronunciation: "proh-SCRYBE",
    partOfSpeech: "verb",
    meaning: ["to forbid or outlaw"],
    bengali: "নিষিদ্ধ করা",
    example: ["The government proscribed the extremist group."],
  },
  {
    word: "ANALOGOUS",
    pronunciation: "uh-NAL-uh-gus",
    partOfSpeech: "adjective",
    meaning: ["similar in some respects"],
    bengali: "সদৃশ / তুলনীয়",
    example: ["The human brain is often considered analogous to a computer."],
  },
  {
    word: "PAUCITY",
    pronunciation: "PAW-sih-tee",
    partOfSpeech: "noun",
    meaning: ["scarcity; lack"],
    bengali: "স্বল্পতা / অভাব",
    example: ["There is a paucity of reliable information on the topic."],
  },
  {
    word: "DIRGE",
    pronunciation: "DURJ",
    partOfSpeech: "noun",
    meaning: ["a mournful song for the dead"],
    bengali: "শোকগীতি",
    example: ["A dirge was played at the funeral."],
  },
  {
    word: "CONCILIATORY",
    pronunciation: "kun-SIL-ee-uh-tor-ee",
    partOfSpeech: "adjective",
    meaning: ["intended to make peace"],
    bengali: "মীমাংসামূলক / শান্তিপূর্ণ",
    example: ["She adopted a conciliatory tone during negotiations."],
  },
  {
    word: "LETHARGIC",
    pronunciation: "luh-THAR-jik",
    partOfSpeech: "adjective",
    meaning: ["sluggish and lacking energy"],
    bengali: "অলস / অবসন্ন",
    example: ["He felt lethargic after the long journey."],
  },
  {
    word: "SPECIOUS",
    pronunciation: "SPEE-shus",
    partOfSpeech: "adjective",
    meaning: ["appearing true but actually false"],
    bengali: "ভ্রান্ত কিন্তু বিশ্বাসযোগ্য মনে হয় এমন",
    example: ["The lawyer's argument sounded specious."],
  },
  {
    word: "CONVERGE",
    pronunciation: "kun-VURJ",
    partOfSpeech: "verb",
    meaning: ["to come together from different directions"],
    bengali: "একত্রিত হওয়া / মিলিত হওয়া",
    example: ["Thousands of protesters converged on the capital."],
  },
  {
    word: "BURGEON",
    pronunciation: "BUR-jun",
    partOfSpeech: "verb",
    meaning: ["to grow or expand rapidly"],
    bengali: "দ্রুত বৃদ্ধি পাওয়া",
    example: ["The city has burgeoned into a major trade center."],
  },
  {
    word: "DISINGENUOUS",
    pronunciation: "dis-in-JEN-yoo-us",
    partOfSpeech: "adjective",
    meaning: ["not candid or sincere"],
    bengali: "কপট / অসৎ",
    example: ["His disingenuous apology fooled nobody."],
  },
  {
    word: "APPROPRIATE",
    pronunciation: "uh-PROH-pree-ayt",
    partOfSpeech: "verb",
    meaning: ["to take for one's own use"],
    bengali: "আত্মসাৎ করা / নিজের কাজে ব্যবহার করা",
    example: ["The official was accused of appropriating public funds."],
  },
  {
    word: "ITINERARY",
    pronunciation: "eye-TIN-uh-rair-ee",
    partOfSpeech: "noun",
    meaning: ["a planned route or schedule of travel"],
    bengali: "ভ্রমণসূচি",
    example: ["The tour guide handed us the itinerary."],
  },
  {
    word: "APATHY",
    pronunciation: "AP-uh-thee",
    partOfSpeech: "noun",
    meaning: ["lack of interest or emotion"],
    bengali: "উদাসীনতা / অনাগ্রহ",
    example: ["Public apathy toward politics worried analysts."],
  },
  {
    word: "DEFAULT",
    pronunciation: "dih-FAWLT",
    partOfSpeech: "verb",
    meaning: ["to fail to fulfill an obligation"],
    bengali: "দায়িত্ব পালনে ব্যর্থ হওয়া",
    example: ["The company defaulted on its loan payments."],
  },
  {
    word: "Default",
    pronunciation: "di-FAWLT",
    partOfSpeech: "noun",
    meaning: ["failure to fulfill an obligation"],
    bengali: "ডিফল্ট / ব্যর্থতা / ঋণ পরিশোধে ব্যর্থতা",
    example: ["He was in default on his loan payments."],
  },
  {
    word: "Plasticity",
    pronunciation: "pla-STIS-i-tee",
    partOfSpeech: "noun",
    meaning: ["ability to be shaped or molded", "adaptability"],
    bengali: "নমনীয়তা / পরিবর্তনশীলতা",
    example: ["The plasticity of the brain allows learning."],
  },
  {
    word: "Relegate",
    pronunciation: "REL-uh-gayt",
    partOfSpeech: "verb",
    meaning: ["to assign to a lower position"],
    bengali: "নিম্নপদে স্থানান্তর করা / অবনমিত করা",
    example: ["He was relegated to a minor role."],
  },
  {
    word: "Autonomous",
    pronunciation: "aw-TON-uh-mus",
    partOfSpeech: "adjective",
    meaning: ["self-governing", "independent"],
    bengali: "স্বায়ত্তশাসিত / স্বাধীন",
    example: ["The region became autonomous."],
  },
  {
    word: "Plethora",
    pronunciation: "PLETH-uh-ruh",
    partOfSpeech: "noun",
    meaning: ["an excessive amount"],
    bengali: "প্রাচুর্য / অতিরিক্ততা",
    example: ["There is a plethora of options."],
  },
  {
    word: "Officious",
    pronunciation: "uh-FISH-us",
    partOfSpeech: "adjective",
    meaning: ["assertively eager to help, especially in an unwanted way"],
    bengali: "অতিরিক্ত হস্তক্ষেপকারী",
    example: ["The officious clerk annoyed the customers."],
  },
  {
    word: "Goad",
    pronunciation: "gohd",
    partOfSpeech: "verb",
    meaning: ["to provoke or annoy to stimulate action"],
    bengali: "উসকানো / প্ররোচিত করা",
    example: ["He was goaded into reacting."],
  },
  {
    word: "Rarefied",
    pronunciation: "RAIR-uh-fyd",
    partOfSpeech: "adjective",
    meaning: ["sophisticated", "less dense"],
    bengali: "পরিশীলিত / পাতলা",
    example: ["They moved in rarefied academic circles."],
  },
  {
    word: "Apprise",
    pronunciation: "uh-PRYZ",
    partOfSpeech: "verb",
    meaning: ["to inform"],
    bengali: "অবহিত করা / জানানো",
    example: ["She apprised him of the situation."],
  },
  {
    word: "Precursor",
    pronunciation: "PREE-kur-ser",
    partOfSpeech: "noun",
    meaning: ["something that comes before another thing"],
    bengali: "পূর্বসূরি / পূর্বাভাস",
    example: ["Storm clouds are a precursor to rain."],
  },
  {
    word: "Disparate",
    pronunciation: "DIS-puh-rit",
    partOfSpeech: "adjective",
    meaning: ["essentially different"],
    bengali: "অসম / ভিন্নধর্মী",
    example: ["They come from disparate backgrounds."],
  },
  {
    word: "Torpor",
    pronunciation: "TAWR-per",
    partOfSpeech: "noun",
    meaning: ["a state of physical or mental inactivity"],
    bengali: "অবশতা / নিষ্ক্রিয়তা",
    example: ["He lay in torpor after the long journey."],
  },
  {
    word: "Piety",
    pronunciation: "PY-uh-tee",
    partOfSpeech: "noun",
    meaning: ["religious devotion"],
    bengali: "ধর্মভক্তি / ধর্মপরায়ণতা",
    example: ["Her piety was admired."],
  },
  {
    word: "Contentious",
    pronunciation: "kuhn-TEN-shus",
    partOfSpeech: "adjective",
    meaning: ["causing disagreement", "argumentative"],
    bengali: "বিতর্কিত / ঝগড়াটে",
    example: ["It is a contentious issue."],
  },
  {
    word: "Document",
    pronunciation: "DOK-yuh-ment",
    partOfSpeech: "verb",
    meaning: ["to record in detail"],
    bengali: "নথিভুক্ত করা",
    example: ["They documented the findings."],
  },
  {
    word: "Forestall",
    pronunciation: "for-STAWL",
    partOfSpeech: "verb",
    meaning: ["to prevent or obstruct"],
    bengali: "প্রতিরোধ করা / আগাম ঠেকানো",
    example: ["They forestalled the attack."],
  },
  {
    word: "Volatile",
    pronunciation: "VOL-uh-tyl",
    partOfSpeech: "adjective",
    meaning: ["likely to change suddenly", "unstable"],
    bengali: "অস্থির / পরিবর্তনশীল",
    example: ["The market is highly volatile."],
  },
  {
    word: "Equivocate",
    pronunciation: "ih-KWIV-uh-kayt",
    partOfSpeech: "verb",
    meaning: ["to speak ambiguously"],
    bengali: "এড়িয়ে কথা বলা / অস্পষ্টভাবে বলা",
    example: ["He tried to equivocate during questioning."],
  },
  {
    word: "Striated",
    pronunciation: "STRY-ay-tid",
    partOfSpeech: "adjective",
    meaning: ["marked with stripes or grooves"],
    bengali: "ধারাবিশিষ্ট / রেখাযুক্ত",
    example: ["The rock has a striated surface."],
  },
  {
    word: "Fawning",
    pronunciation: "FAW-ning",
    partOfSpeech: "adjective",
    meaning: ["excessively flattering"],
    bengali: "চাটুকারিতাপূর্ণ",
    example: ["He gave a fawning compliment."],
  },
  {
    word: "Probity",
    pronunciation: "PROH-bi-tee",
    partOfSpeech: "noun",
    meaning: ["integrity", "honesty"],
    bengali: "সততা / নৈতিক দৃঢ়তা",
    example: ["The judge was known for his probity."]
  },
  {
    word: "Impenetrable",
    pronunciation: "im-PEN-i-truh-bul",
    partOfSpeech: "adjective",
    meaning: ["impossible to pass through", "hard to understand"],
    bengali: "অভেদ্য / দুর্বোধ্য",
    example: ["The forest was impenetrable."]
  },
  {
    word: "Condone",
    pronunciation: "kuhn-DOHN",
    partOfSpeech: "verb",
    meaning: ["to accept or allow behavior that is wrong"],
    bengali: "চুপিসারে অনুমোদন করা / ক্ষমা করা",
    example: ["We cannot condone violence."]
  },
  {
    word: "Welter",
    pronunciation: "WEL-ter",
    partOfSpeech: "noun",
    meaning: ["a confused mass or jumble"],
    bengali: "অব্যবস্থা / বিশৃঙ্খলা",
    example: ["The room was a welter of papers."]
  },
  {
    word: "Approbation",
    pronunciation: "ap-ruh-BAY-shun",
    partOfSpeech: "noun",
    meaning: ["approval or praise"],
    bengali: "অনুমোদন / প্রশংসা",
    example: ["His work gained wide approbation."]
  },
  {
    word: "Discrepancy",
    pronunciation: "dis-KREP-uhn-see",
    partOfSpeech: "noun",
    meaning: ["a difference or inconsistency"],
    bengali: "অমিল / অসঙ্গতি",
    example: ["There is a discrepancy in the report."]
  },
  {
    word: "Oscillate",
    pronunciation: "OS-uh-layt",
    partOfSpeech: "verb",
    meaning: ["to swing back and forth", "to vary between opinions"],
    bengali: "দোলানো / দোদুল্যমান হওয়া",
    example: ["His mood oscillates daily."]
  },
  {
    word: "Partisan",
    pronunciation: "PAHR-ti-zan",
    partOfSpeech: "noun",
    meaning: ["a strong supporter of a cause or party"],
    bengali: "দলীয় সমর্থক / পক্ষপাতী",
    example: ["He is a partisan of the ruling party."]
  },
  {
    word: "Facilitate",
    pronunciation: "fuh-SIL-i-tayt",
    partOfSpeech: "verb",
    meaning: ["to make easier"],
    bengali: "সহজ করা / সুবিধা প্রদান করা",
    example: ["Technology facilitates communication."]
  },
  {
    word: "Supposition",
    pronunciation: "sup-uh-ZISH-un",
    partOfSpeech: "noun",
    meaning: ["assumption or hypothesis"],
    bengali: "অনুমান / ধারণা",
    example: ["It is only a supposition."]
  },
  {
    word: "Irascible",
    pronunciation: "ih-RAS-uh-bul",
    partOfSpeech: "adjective",
    meaning: ["easily angered"],
    bengali: "রাগী / খিটখিটে",
    example: ["The irascible man shouted at everyone."]
  },
  {
    word: "Exacerbate",
    pronunciation: "ig-ZAS-er-bayt",
    partOfSpeech: "verb",
    meaning: ["to make worse"],
    bengali: "আরও খারাপ করা",
    example: ["Pollution exacerbates health problems."]
  },
  {
    word: "Tangential",
    pronunciation: "tan-JEN-shul",
    partOfSpeech: "adjective",
    meaning: ["only slightly related"],
    bengali: "অপ্রাসঙ্গিক / পাশ্ববর্তী",
    example: ["He made a tangential remark."]
  },
  {
    word: "Permeable",
    pronunciation: "PUR-mee-uh-bul",
    partOfSpeech: "adjective",
    meaning: ["allowing liquids or gases to pass through"],
    bengali: "ভেদ্য / প্রবেশযোগ্য",
    example: ["The soil is permeable."]
  },
  {
    word: "Elegy",
    pronunciation: "EL-uh-jee",
    partOfSpeech: "noun",
    meaning: ["a mournful poem"],
    bengali: "শোকগীতি",
    example: ["He wrote an elegy for his friend."]
  },
  {
    word: "Latent",
    pronunciation: "LAY-tent",
    partOfSpeech: "adjective",
    meaning: ["hidden but capable of becoming active"],
    bengali: "লুকানো / সুপ্ত",
    example: ["He has latent talent."]
  },
  {
    word: "Homogeneous",
    pronunciation: "hoh-moh-JEE-nee-us",
    partOfSpeech: "adjective",
    meaning: ["of the same kind"],
    bengali: "সমজাতীয়",
    example: ["The group was homogeneous."]
  },
  {
    word: "Discrete",
    pronunciation: "dis-KREET",
    partOfSpeech: "adjective",
    meaning: ["separate and distinct"],
    bengali: "পৃথক / স্বতন্ত্র",
    example: ["These are discrete units."]
  },
  {
    word: "Solicitous",
    pronunciation: "suh-LIS-i-tus",
    partOfSpeech: "adjective",
    meaning: ["showing care or concern"],
    bengali: "উদ্বিগ্ন / যত্নশীল",
    example: ["She was solicitous about his health."]
  },
  {
    word: "Attenuate",
    pronunciation: "uh-TEN-yoo-ayt",
    partOfSpeech: "verb",
    meaning: ["to reduce in force or effect"],
    bengali: "দুর্বল করা / হ্রাস করা",
    example: ["The virus was attenuated in the lab."]
  },
  {
    word: "Connoisseur",
    pronunciation: "kon-uh-SUR",
    partOfSpeech: "noun",
    meaning: ["an expert judge in matters of taste"],
    bengali: "রুচিবিশারদ / বিশেষজ্ঞ রসজ্ঞ",
    example: ["He is a connoisseur of fine wine."]
  },
  {
    word: "Zealot",
    pronunciation: "ZEL-uht",
    partOfSpeech: "noun",
    meaning: ["a fanatical and uncompromising follower"],
    bengali: "অন্ধ অনুরাগী / উগ্রপন্থী",
    example: ["He is a political zealot."]
  },
  {
    word: "Beneficent",
    pronunciation: "buh-NEF-uh-sent",
    partOfSpeech: "adjective",
    meaning: ["doing good", "kindly"],
    bengali: "কল্যাণকর / দয়ালু",
    example: ["A beneficent leader helps everyone."]
  },
  {
    word: "Refractory",
    pronunciation: "ri-FRAK-tuh-ree",
    partOfSpeech: "adjective",
    meaning: ["stubborn", "resistant to control"],
    bengali: "একগুঁয়ে / অনমনীয়",
    example: ["The refractory child refused to obey."]
  },
  {
    word: "Elicit",
    pronunciation: "ih-LIS-it",
    partOfSpeech: "verb",
    meaning: ["to draw out a response"],
    bengali: "উদ্ধার করা / প্রতিক্রিয়া বের করা",
    example: ["The teacher elicited answers from students."]
  },
  {
    word: "Preamble",
    pronunciation: "pree-AM-bul",
    partOfSpeech: "noun",
    meaning: ["an introductory statement"],
    bengali: "ভূমিকা / প্রারম্ভিক অংশ",
    example: ["The constitution begins with a preamble."]
  },
  {
    word: "Boorish",
    pronunciation: "BOOR-ish",
    partOfSpeech: "adjective",
    meaning: ["rude and insensitive"],
    bengali: "অভদ্র / অশিষ্ট",
    example: ["His boorish behavior offended guests."]
  },
  {
    word: "Levity",
    pronunciation: "LEV-i-tee",
    partOfSpeech: "noun",
    meaning: ["lack of seriousness", "lightness"],
    bengali: "হালকামনা / অগম্ভীরতা",
    example: ["He showed levity during the serious meeting."]
  },
  {
    word: "Plummet",
    pronunciation: "PLUM-it",
    partOfSpeech: "verb",
    meaning: ["to fall sharply"],
    bengali: "হঠাৎ পড়ে যাওয়া / দ্রুত হ্রাস পাওয়া",
    example: ["Prices plummeted overnight."]
  },
  {
    word: "Malingerer",
    pronunciation: "muh-LING-ger-er",
    partOfSpeech: "noun",
    meaning: ["one who fakes illness to avoid duty"],
    bengali: "ভানকারী অসুস্থ ব্যক্তি",
    example: ["He was accused of being a malingerer."]
  },
  {
    word: "Savor",
    pronunciation: "SAY-ver",
    partOfSpeech: "verb",
    meaning: ["to enjoy fully"],
    bengali: "আনন্দ নেওয়া / উপভোগ করা",
    example: ["She savored the moment."]
  },
  {
    word: "Euphemism",
    pronunciation: "YOO-fuh-miz-um",
    partOfSpeech: "noun",
    meaning: ["a mild expression replacing a harsh one"],
    bengali: "মৃদু শব্দ / সৌজন্যমূলক শব্দ",
    example: ["'Passed away' is a euphemism for 'died'."]
  },
  {
    word: "Transgression",
    pronunciation: "trans-GRESH-un",
    partOfSpeech: "noun",
    meaning: ["a violation of law or moral code"],
    bengali: "অপরাধ / লঙ্ঘন",
    example: ["He was punished for his transgression."]
  },
  {
    word: "Stipulate",
    pronunciation: "STIP-yuh-layt",
    partOfSpeech: "verb",
    meaning: ["to specify as a condition"],
    bengali: "শর্ত নির্ধারণ করা",
    example: ["The contract stipulates payment terms."]
  },
  {
    word: "Caustic",
    pronunciation: "KAW-stik",
    partOfSpeech: "adjective",
    meaning: ["harsh or critical in tone", "corrosive"],
    bengali: "তিক্ত / কটাক্ষপূর্ণ",
    example: ["She made caustic remarks."]
  },
  {
    word: "Laud",
    pronunciation: "lawd",
    partOfSpeech: "verb",
    meaning: ["to praise highly"],
    bengali: "প্রশংসা করা",
    example: ["They lauded his achievements."]
  },
  {
    word: "Recondite",
    pronunciation: "REK-un-dyte",
    partOfSpeech: "adjective",
    meaning: ["difficult to understand"],
    bengali: "দুর্বোধ্য / জটিল",
    example: ["He studies recondite subjects."]
  },
  {
    word: "Apathy",
    pronunciation: "AP-uh-thee",
    partOfSpeech: "noun",
    meaning: ["lack of interest or emotion"],
    bengali: "উদাসীনতা",
    example: ["Voter apathy is a problem."]
  },
  {
    word: "Efficacy",
    pronunciation: "EF-i-kuh-see",
    partOfSpeech: "noun",
    meaning: ["effectiveness"],
    bengali: "কার্যকারিতা",
    example: ["The efficacy of the medicine was proven."]
  },
  {
    word: "Compliant",
    pronunciation: "kuhm-PLY-uhnt",
    partOfSpeech: "adjective",
    meaning: ["willing to obey"],
    bengali: "অনুগত / বাধ্য",
    example: ["The patient was compliant with treatment."]
  },
  {
    word: "Belie",
    pronunciation: "bih-LY",
    partOfSpeech: "verb",
    meaning: ["to contradict or give a false impression of"],
    bengali: "মিথ্যা প্রমাণ করা / অসত্য প্রতিপন্ন করা",
    example: ["His calm voice belied his anger."]
  },
  {
    word: "Precipitate",
    pronunciation: "pri-SIP-i-tayt",
    partOfSpeech: "verb",
    meaning: ["to cause to happen suddenly"],
    bengali: "ত্বরান্বিত করা / হঠাৎ ঘটানো",
    example: ["The crisis precipitated war."]
  },
  {
    word: "Supersede",
    pronunciation: "soo-per-SEED",
    partOfSpeech: "verb",
    meaning: ["to replace"],
    bengali: "প্রতিস্থাপন করা / বদলানো",
    example: ["New rules supersede old ones."]
  },
  {
    word: "Dissemble",
    pronunciation: "dih-SEM-bul",
    partOfSpeech: "verb",
    meaning: ["to conceal or disguise one's true feelings"],
    bengali: "গোপন করা / ভান করা",
    example: ["He dissembled his intentions."]
  },
  {
    word: "Resolution",
    pronunciation: "rez-uh-LOO-shun",
    partOfSpeech: "noun",
    meaning: ["determination", "solution"],
    bengali: "সঙ্কল্প / সমাধান",
    example: ["She showed great resolution."]
  },
  {
    word: "Satiate",
    pronunciation: "SAY-shee-ayt",
    partOfSpeech: "verb",
    meaning: ["to satisfy fully"],
    bengali: "পূর্ণ তৃপ্ত করা",
    example: ["The meal satiated his hunger."]
  },
  {
    word: "Impassive",
    pronunciation: "im-PAS-iv",
    partOfSpeech: "adjective",
    meaning: ["showing no emotion"],
    bengali: "নির্লিপ্ত / অনুভূতিহীন",
    example: ["He remained impassive during the trial."]
  },
  {
    word: "Coda",
    pronunciation: "KOH-duh",
    partOfSpeech: "noun",
    meaning: ["a concluding section"],
    bengali: "সমাপ্তি অংশ",
    example: ["The speech ended with a coda."]
  },
  {
    word: "Anarchy",
    pronunciation: "AN-ar-kee",
    partOfSpeech: "noun",
    meaning: ["absence of government or order"],
    bengali: "অরাজকতা",
    example: ["The country fell into anarchy."]
  },
  {
    word: "Profound",
    pronunciation: "pruh-FOUND",
    partOfSpeech: "adjective",
    meaning: ["very deep or intense"],
    bengali: "গভীর / গভীরতর",
    example: ["He made a profound statement."]
  },
  {
    word: "Viscous",
    pronunciation: "VIS-kus",
    partOfSpeech: "adjective",
    meaning: ["thick and sticky"],
    bengali: "ঘন / আঠালো",
    example: ["Honey is a viscous liquid."]
  },
  {
    word: "Prohibitive",
    pronunciation: "proh-HIB-i-tiv",
    partOfSpeech: "adjective",
    meaning: ["too expensive or restrictive"],
    bengali: "নিষিদ্ধমূলক / অত্যন্ত ব্যয়বহুল",
    example: ["Prices are prohibitive."]
  },
  {
    word: "Flag",
    pronunciation: "flag",
    partOfSpeech: "verb",
    meaning: ["to become weak or tired"],
    bengali: "দুর্বল হয়ে পড়া",
    example: ["His enthusiasm began to flag."]
  },
  {
    word: "Negate",
    pronunciation: "nih-GAYT",
    partOfSpeech: "verb",
    meaning: ["to nullify or deny"],
    bengali: "নাকচ করা / বাতিল করা",
    example: ["New evidence negates the claim."]
  },
  {
    word: "Buttress",
    pronunciation: "BUH-tris",
    partOfSpeech: "noun",
    meaning: ["a support or reinforcement"],
    bengali: "সমর্থন / ভিত্তি",
    example: ["Evidence serves as a buttress for his argument."]
  },
  {
    word: "Contention",
    pronunciation: "kuhn-TEN-shun",
    partOfSpeech: "noun",
    meaning: ["a point of argument or dispute"],
    bengali: "বিতর্ক / দাবি",
    example: ["His main contention is unclear."]
  },
  {
    word: "Secrete",
    pronunciation: "si-KREET",
    partOfSpeech: "verb",
    meaning: ["to produce and release"],
    bengali: "নিঃসরণ করা",
    example: ["Glands secrete hormones."]
  },
  {
    word: "Aggregate",
    pronunciation: "AG-ri-git",
    partOfSpeech: "noun",
    meaning: ["a whole formed by combining parts"],
    bengali: "সমষ্টি / মোট",
    example: ["The aggregate score was high."]
  },
  {
    word: "Autonomous",
    pronunciation: "aw-TON-uh-mus",
    partOfSpeech: "adjective",
    meaning: ["self-governing", "independent"],
    bengali: "স্বায়ত্তশাসিত / স্বাধীন",
    example: ["The university is autonomous."]
  },
  {
    word: "Exigency",
    pronunciation: "EK-si-jen-see",
    partOfSpeech: "noun",
    meaning: ["an urgent need or demand"],
    bengali: "জরুরি অবস্থা / প্রয়োজন",
    example: ["The exigency of war changed plans."]
  },
  {
    word: "Approbate",
    pronunciation: "AP-ruh-bayt",
    partOfSpeech: "verb",
    meaning: ["to approve officially"],
    bengali: "অনুমোদন করা",
    example: ["The committee approbated the proposal."]
  },
  {
    word: "Warranted",
    pronunciation: "WOR-uhn-tid",
    partOfSpeech: "adjective",
    meaning: ["justified", "authorized"],
    bengali: "যৌক্তিক / অনুমোদিত",
    example: ["His concern was warranted."]
  },
  {
    word: "Commensurate",
    pronunciation: "kuh-MEN-suh-rit",
    partOfSpeech: "adjective",
    meaning: ["in proportion to"],
    bengali: "সমানুপাতিক",
    example: ["Salary is commensurate with experience."]
  },
  {
    word: "Saturate",
    pronunciation: "SAT-yuh-rayt",
    partOfSpeech: "verb",
    meaning: ["to soak thoroughly"],
    bengali: "সম্পূর্ণ ভিজিয়ে দেওয়া",
    example: ["The rain saturated the ground."]
  },
  {
    word: "Foment",
    pronunciation: "foh-MENT",
    partOfSpeech: "verb",
    meaning: ["to stir up trouble or rebellion"],
    bengali: "উসকানি দেওয়া",
    example: ["He was accused of fomenting unrest."]
  },
  {
    word: "Malleable",
    pronunciation: "MAL-ee-uh-bul",
    partOfSpeech: "adjective",
    meaning: ["easily shaped or influenced"],
    bengali: "নমনীয় / প্রভাবিতযোগ্য",
    example: ["Gold is malleable."]
  },
  {
    word: "Deterrent",
    pronunciation: "dih-TAIR-uhnt",
    partOfSpeech: "noun",
    meaning: ["something that discourages action"],
    bengali: "প্রতিরোধক",
    example: ["Strict laws act as a deterrent."]
  },
  {
    word: "Heterogeneous",
    pronunciation: "het-uh-roh-JEE-nee-us",
    partOfSpeech: "adjective",
    meaning: ["diverse in kind or nature"],
    bengali: "বিভিন্নধর্মী",
    example: ["The group was heterogeneous."]
  },
  {
    word: "Subside",
    pronunciation: "sub-SYD",
    partOfSpeech: "verb",
    meaning: ["to become less intense"],
    bengali: "কমে যাওয়া",
    example: ["The storm subsided."]
  },
  {
    word: "Discerning",
    pronunciation: "dih-ZURN-ing",
    partOfSpeech: "adjective",
    meaning: ["showing good judgment"],
    bengali: "বিচক্ষণ",
    example: ["She is a discerning reader."]
  },
  {
    word: "Ameliorate",
    pronunciation: "uh-MEEL-yuh-rayt",
    partOfSpeech: "verb",
    meaning: ["to improve or make better"],
    bengali: "উন্নত করা",
    example: ["They tried to ameliorate conditions."]
  },
  {
    word: "Tirade",
    pronunciation: "TY-rayd",
    partOfSpeech: "noun",
    meaning: ["a long angry speech"],
    bengali: "কঠোর বক্তৃতা / গালমন্দ",
    example: ["He launched a tirade against corruption."]
  },
  {
    word: "Bland",
    pronunciation: "bland",
    partOfSpeech: "adjective",
    meaning: ["lacking strong flavor or interest"],
    bengali: "নিরস / স্বাদহীন",
    example: ["The food was bland."]
  },
  {
    word: "Apparition",
    pronunciation: "ap-uh-RISH-un",
    partOfSpeech: "noun",
    meaning: ["a ghostly figure or sudden appearance"],
    bengali: "ভূত / আকস্মিক দর্শন",
    example: ["They saw an apparition in the mirror."]
  },
  {
    word: "Buttress",
    pronunciation: "BUH-tris",
    partOfSpeech: "noun",
    meaning: ["a support or reinforcement"],
    bengali: "সমর্থন / ভিত্তি",
    example: ["The pillars act as a buttress."]
  },
  {
    word: "Contrite",
    pronunciation: "kuhn-TRYT",
    partOfSpeech: "adjective",
    meaning: ["feeling remorseful"],
    bengali: "অনুতপ্ত",
    example: ["He was contrite after the mistake."]
  },
  {
    word: "Insensible",
    pronunciation: "in-SEN-suh-bul",
    partOfSpeech: "adjective",
    meaning: ["unaware or unconscious"],
    bengali: "অচেতন / অনুভূতিহীন",
    example: ["He lay insensible after the accident."]
  },
  {
    word: "Vacillate",
    pronunciation: "VAS-uh-layt",
    partOfSpeech: "verb",
    meaning: ["to waver between choices"],
    bengali: "দ্বিধাগ্রস্ত হওয়া",
    example: ["He vacillated before deciding."]
  },
  {
    word: "Shard",
    pronunciation: "shahrd",
    partOfSpeech: "noun",
    meaning: ["a broken piece of something hard"],
    bengali: "ভাঙা টুকরো",
    example: ["A shard of glass lay on the floor."]
  },
  {
    word: "Repudiate",
    pronunciation: "ri-PYOO-dee-ayt",
    partOfSpeech: "verb",
    meaning: ["to reject or refuse"],
    bengali: "প্রত্যাখ্যান করা",
    example: ["He repudiated the accusation."]
  },
  {
    word: "Artless",
    pronunciation: "ART-lis",
    partOfSpeech: "adjective",
    meaning: ["simple and natural", "without deceit"],
    bengali: "সরল / কপটতাহীন",
    example: ["Her artless charm impressed everyone."]
  },
  {
    word: "Recant",
    pronunciation: "ri-KANT",
    partOfSpeech: "verb",
    meaning: ["to withdraw a statement or belief"],
    bengali: "প্রত্যাহার করা / মত পরিবর্তন করা",
    example: ["He recanted his earlier confession."]
  },
  {
    word: "Empirical",
    pronunciation: "em-PI-ri-kul",
    partOfSpeech: "adjective",
    meaning: ["based on observation or experience"],
    bengali: "প্রায়োগিক / অভিজ্ঞতালব্ধ",
    example: ["The theory is based on empirical evidence."]
  },
  {
    word: "Condescend",
    pronunciation: "kon-di-SEND",
    partOfSpeech: "verb",
    meaning: ["to behave as if one is superior"],
    bengali: "অহংকার করা / নিচু মানসিকতা দেখানো",
    example: ["He condescended to answer the question."]
  },
  {
    word: "Apropos",
    pronunciation: "ap-ruh-POH",
    partOfSpeech: "adverb",
    meaning: ["relevant or appropriate"],
    bengali: "প্রাসঙ্গিকভাবে / যথোপযুক্তভাবে",
    example: ["Her comment was apropos the discussion."]
  },
  {
    word: "Obviate",
    pronunciation: "OB-vee-ayt",
    partOfSpeech: "verb",
    meaning: ["to prevent or eliminate"],
    bengali: "রোধ করা / এড়িয়ে যাওয়া",
    example: ["The new system obviates the need for manual work."]
  },
  {
    word: "Allegory",
    pronunciation: "AL-uh-gor-ee",
    partOfSpeech: "noun",
    meaning: ["a symbolic story"],
    bengali: "রূপক কাহিনী",
    example: ["The novel is an allegory of society."]
  },
  {
    word: "Stint",
    pronunciation: "stint",
    partOfSpeech: "noun",
    meaning: ["a fixed period of work"],
    bengali: "নির্দিষ্ট সময়কাল",
    example: ["He did a stint in the army."]
  },
  {
    word: "Avarice",
    pronunciation: "AV-uh-ris",
    partOfSpeech: "noun",
    meaning: ["extreme greed"],
    bengali: "লোভ",
    example: ["His avarice ruined him."]
  },
  {
    word: "Quiescent",
    pronunciation: "kwee-ES-ent",
    partOfSpeech: "adjective",
    meaning: ["inactive or dormant"],
    bengali: "নিষ্ক্রিয় / সুপ্ত",
    example: ["The volcano remained quiescent."]
  },
  {
    word: "Inured",
    pronunciation: "in-YOORD",
    partOfSpeech: "verb",
    meaning: ["to become accustomed to something unpleasant"],
    bengali: "অভ্যস্ত হয়ে যাওয়া",
    example: ["He was inured to hardship."]
  },
  {
    word: "Pervasive",
    pronunciation: "per-VAY-siv",
    partOfSpeech: "adjective",
    meaning: ["spread widely"],
    bengali: "ব্যাপক / সর্বব্যাপী",
    example: ["Poverty is pervasive in the region."]
  },
  {
    word: "Alleviate",
    pronunciation: "uh-LEE-vee-ayt",
    partOfSpeech: "verb",
    meaning: ["to make less severe"],
    bengali: "লাঘব করা / হালকা করা",
    example: ["Medicine can alleviate pain."]
  },
  {
    word: "Approbation",
    pronunciation: "ap-ruh-BAY-shun",
    partOfSpeech: "noun",
    meaning: ["approval or praise"],
    bengali: "অনুমোদন / প্রশংসা",
    example: ["His work received approbation."]
  },
  {
    word: "Tractable",
    pronunciation: "TRAK-tuh-bul",
    partOfSpeech: "adjective",
    meaning: ["easily controlled or managed"],
    bengali: "বশে আনা সহজ",
    example: ["The students were tractable."]
  },
  {
    word: "Elaborate",
    pronunciation: "ih-LAB-uh-rit",
    partOfSpeech: "verb",
    meaning: ["to explain in detail"],
    bengali: "বিস্তারিত ব্যাখ্যা করা",
    example: ["He elaborated on his plan."]
  },
  {
    word: "Proliferate",
    pronunciation: "pruh-LIF-uh-rayt",
    partOfSpeech: "verb",
    meaning: ["to increase rapidly"],
    bengali: "বিস্তার লাভ করা",
    example: ["Viruses proliferate quickly."]
  },
  {
    word: "Abeyance",
    pronunciation: "uh-BAY-uhns",
    partOfSpeech: "noun",
    meaning: ["temporary suspension"],
    bengali: "স্থগিত অবস্থা",
    example: ["The project is in abeyance."]
  },
  {
    word: "Sanguine",
    pronunciation: "SANG-gwin",
    partOfSpeech: "adjective",
    meaning: ["optimistic or positive"],
    bengali: "আশাবাদী",
    example: ["She is sanguine about the future."]
  },
  {
    word: "Apathy",
    pronunciation: "AP-uh-thee",
    partOfSpeech: "noun",
    meaning: ["lack of interest or emotion"],
    bengali: "উদাসীনতা",
    example: ["There is apathy among voters."]
  },
  {
    word: "Sophistry",
    pronunciation: "SOF-uh-stree",
    partOfSpeech: "noun",
    meaning: ["deceptive reasoning"],
    bengali: "কূট যুক্তি / ভ্রান্ত যুক্তি",
    example: ["His argument was mere sophistry."]
  },
  {
    word: "Diverge",
    pronunciation: "dih-VURJ",
    partOfSpeech: "verb",
    meaning: ["to separate or move in different directions"],
    bengali: "বিচ্যুত হওয়া / ভিন্ন পথে যাওয়া",
    example: ["Their opinions diverge on this issue."]
  },
  {
    word: "Opprobrium",
    pronunciation: "uh-PROH-bree-um",
    partOfSpeech: "noun",
    meaning: ["public disgrace or criticism"],
    bengali: "লজ্জা / নিন্দা",
    example: ["He faced public opprobrium."]
  },
  {
    word: "Log",
    pronunciation: "log",
    partOfSpeech: "noun",
    meaning: ["a record of events or data"],
    bengali: "রেকর্ড / নথি",
    example: ["The pilot checked the flight log."]
  },
  {
    word: "Erudite",
    pronunciation: "AIR-yoo-dyte",
    partOfSpeech: "adjective",
    meaning: ["well educated and knowledgeable"],
    bengali: "পাণ্ডিত্যপূর্ণ",
    example: ["He is an erudite scholar."]
  },
  {
    word: "Tortuous",
    pronunciation: "TAWR-chu-uhs",
    partOfSpeech: "adjective",
    meaning: ["full of twists", "complex or complicated"],
    bengali: "ঘুরপাক খাওয়া / জটিল",
    example: ["The tortuous path was difficult."]
  },
  {
    word: "Escalate",
    pronunciation: "ES-kuh-layt",
    partOfSpeech: "verb",
    meaning: ["to increase rapidly"],
    bengali: "বাড়িয়ে তোলা / তীব্র হওয়া",
    example: ["The conflict escalated quickly."]
  },
  {
    word: "Adulterate",
    pronunciation: "uh-DUL-tuh-rayt",
    partOfSpeech: "verb",
    meaning: ["to make impure"],
    bengali: "ভেজাল করা",
    example: ["The milk was adulterated."]
  },
  {
    word: "Demeanor",
    pronunciation: "dih-MEE-nor",
    partOfSpeech: "noun",
    meaning: ["behavior or appearance"],
    bengali: "আচরণ / ব্যবহার",
    example: ["Her calm demeanor impressed all."]
  },
  {
    word: "Dissident",
    pronunciation: "DIS-uh-dent",
    partOfSpeech: "noun",
    meaning: ["one who opposes authority"],
    bengali: "বিরোধী ব্যক্তি",
    example: ["The dissident was arrested."]
  },
  {
    word: "Fortuitous",
    pronunciation: "for-TOO-i-tus",
    partOfSpeech: "adjective",
    meaning: ["happening by chance"],
    bengali: "সৌভাগ্যজনক / আকস্মিক",
    example: ["It was a fortuitous meeting."]
  },
  {
    word: "Apathetic",
    pronunciation: "ap-uh-THET-ik",
    partOfSpeech: "adjective",
    meaning: ["showing no interest"],
    bengali: "উদাসীন",
    example: ["Students were apathetic about politics."]
  },
  {
    word: "Abscond",
    pronunciation: "ab-SKOND",
    partOfSpeech: "verb",
    meaning: ["to run away secretly"],
    bengali: "পালিয়ে যাওয়া",
    example: ["He absconded with the money."]
  },
  {
    word: "Reprobate",
    pronunciation: "REP-ruh-bayt",
    partOfSpeech: "noun",
    meaning: ["a morally unprincipled person"],
    bengali: "অসৎ ব্যক্তি",
    example: ["He was called a reprobate."]
  },
  {
    word: "Placid",
    pronunciation: "PLAS-id",
    partOfSpeech: "adjective",
    meaning: ["calm and peaceful"],
    bengali: "শান্ত / স্থির",
    example: ["The lake is placid."]
  },
  {
    word: "Blandishment",
    pronunciation: "BLAN-dish-ment",
    partOfSpeech: "noun",
    meaning: ["flattering speech used to persuade"],
    bengali: "তোষামোদ / প্রলোভনমূলক কথা",
    example: ["He was swayed by blandishments."]
  },
  {
    word: "Dispel",
    pronunciation: "dih-SPEL",
    partOfSpeech: "verb",
    meaning: ["to make something go away"],
    bengali: "দূর করা / অপসারণ করা",
    example: ["The news dispelled rumors."]
  },
  {
    word: "Insidious",
    pronunciation: "in-SID-ee-us",
    partOfSpeech: "adjective",
    meaning: ["gradually harmful", "sneaky"],
    bengali: "ধীরে ধীরে ক্ষতিকর",
    example: ["Insidious disease spread quickly."]
  },
  {
    word: "Castigation",
    pronunciation: "kas-ti-GAY-shun",
    partOfSpeech: "noun",
    meaning: ["severe criticism or punishment"],
    bengali: "কঠোর সমালোচনা / শাস্তি",
    example: ["He faced public castigation."]
  },
  {
    word: "Verbose",
    pronunciation: "ver-BOHS",
    partOfSpeech: "adjective",
    meaning: ["using too many words"],
    bengali: "বহুলবর্ণনামূলক",
    example: ["The report was verbose."]
  },
  {
    word: "Antipathy",
    pronunciation: "an-TIP-uh-thee",
    partOfSpeech: "noun",
    meaning: ["strong dislike"],
    bengali: "ঘৃণা / তীব্র অপছন্দ",
    example: ["He felt antipathy toward corruption."]
  },
  {
    word: "Intransigence",
    pronunciation: "in-TRAN-si-jens",
    partOfSpeech: "noun",
    meaning: ["refusal to change one's views"],
    bengali: "অনমনীয়তা",
    example: ["His intransigence blocked the deal."]
  },
  {
    word: "Autonomous",
    pronunciation: "aw-TON-uh-mus",
    partOfSpeech: "adjective",
    meaning: ["self-governing", "independent"],
    bengali: "স্বায়ত্তশাসিত / স্বাধীন",
    example: ["The region is autonomous."]
  },
  {
    word: "Tactile",
    pronunciation: "TAK-tyl",
    partOfSpeech: "adjective",
    meaning: ["related to touch"],
    bengali: "স্পর্শ সম্পর্কিত",
    example: ["The fabric has a tactile quality."]
  },
  {
    word: "Satire",
    pronunciation: "SAT-ire",
    partOfSpeech: "noun",
    meaning: ["use of humor to criticize"],
    bengali: "বিদ্রূপ",
    example: ["The show is political satire."]
  },
  {
    word: "Suspend",
    pronunciation: "suh-SPEND",
    partOfSpeech: "verb",
    meaning: ["to stop temporarily"],
    bengali: "স্থগিত করা",
    example: ["The meeting was suspended."]
  },
  {
    word: "Disparate",
    pronunciation: "DIS-puh-rit",
    partOfSpeech: "adjective",
    meaning: ["essentially different"],
    bengali: "ভিন্নধর্মী",
    example: ["They have disparate views."]
  },
  {
    word: "Aberration",
    pronunciation: "ab-uh-RAY-shun",
    partOfSpeech: "noun",
    meaning: ["departure from normal"],
    bengali: "বিচ্যুতি / অস্বাভাবিকতা",
    example: ["The event was an aberration."]
  },
  {
    word: "Whimsical",
    pronunciation: "WIM-zi-kul",
    partOfSpeech: "adjective",
    meaning: ["playfully unusual"],
    bengali: "খেয়ালী / কল্পনাপ্রবণ",
    example: ["She has a whimsical style."]
  },
  {
    word: "Aver",
    pronunciation: "uh-VER",
    partOfSpeech: "verb",
    meaning: ["to state confidently"],
    bengali: "দৃঢ়ভাবে বলা",
    example: ["He averred his innocence."]
  },
  {
    word: "Venerate",
    pronunciation: "VEN-uh-rayt",
    partOfSpeech: "verb",
    meaning: ["to regard with great respect"],
    bengali: "শ্রদ্ধা করা",
    example: ["They venerate their ancestors."]
  },
  {
    word: "Taciturn",
    pronunciation: "TAS-ih-turn",
    partOfSpeech: "adjective",
    meaning: ["reserved or uncommunicative in speech"],
    bengali: "অল্পভাষী",
    example: ["A taciturn man, he said very little."]
  },
  {
    word: "Obdurate",
    pronunciation: "OB-dyoo-rit",
    partOfSpeech: "adjective",
    meaning: ["stubbornly refusing to change one's opinion"],
    bengali: "একগুঁয়ে",
    example: ["He remained obdurate, refusing to help."]
  },
  {
    word: "Garrulous",
    pronunciation: "GARE-uh-lus",
    partOfSpeech: "adjective",
    meaning: ["excessively talkative"],
    bengali: "বাচাল",
    example: ["The garrulous neighbor kept talking for hours."]
  },
  {
    word: "Misanthrope",
    pronunciation: "MIS-un-throhp",
    partOfSpeech: "noun",
    meaning: ["a person who dislikes humankind"],
    bengali: "মানুষ্যবিদ্বেষী",
    example: ["The old misanthrope lived alone in the forest."]
  },
  {
    word: "Equivocate",
    pronunciation: "ih-KWIV-uh-kayt",
    partOfSpeech: "verb",
    meaning: ["to use ambiguous language to hide the truth"],
    bengali: "ঝলকানো কথা বলা / সত্য গোপন করা",
    example: ["The politician continued to equivocate when asked about the budget."]
  },
  {
    word: "Desiccate",
    pronunciation: "DES-ih-kayt",
    partOfSpeech: "verb",
    meaning: ["to remove the moisture from", "to dry out"],
    bengali: "শুকানো / আর্দ্রতাহীন করা",
    example: ["The sun desiccated the land during the drought."]
  },
  {
    word: "Luminous",
    pronunciation: "LOO-muh-nus",
    partOfSpeech: "adjective",
    meaning: ["full of or shedding light", "bright"],
    bengali: "উজ্জ্বল",
    example: ["The luminous dial on his watch shone in the dark."]
  },
  {
    word: "Ossify",
    pronunciation: "OS-uh-fy",
    partOfSpeech: "verb",
    meaning: ["to turn into bone", "to become rigid or fixed"],
    bengali: "অনমনীয় হওয়া",
    example: ["His opinions have ossified over the years."]
  },
  {
    word: "Prevaricate",
    pronunciation: "pri-VAR-ih-kayt",
    partOfSpeech: "verb",
    meaning: ["to speak or act in an evasive way"],
    bengali: "প্রতারণা করা / কথা এড়িয়ে যাওয়া",
    example: ["He seemed to prevaricate when asked about his whereabouts."]
  },
  {
    word: "Plastic",
    pronunciation: "PLAS-tik",
    partOfSpeech: "adjective",
    meaning: ["easily shaped or molded"],
    bengali: "নমনীয় / রূপান্তরযোগ্য",
    example: ["The mind is more plastic in childhood."]
  },
  {
    word: "Stolidity",
    pronunciation: "stuh-LID-ih-tee",
    partOfSpeech: "noun",
    meaning: ["calmness and lack of emotion"],
    bengali: "গম্ভীরতা",
    example: ["He accepted the news with his usual stolidity."]
  },
  {
    word: "Vituperative",
    pronunciation: "vye-TOO-puh-ruh-tiv",
    partOfSpeech: "adjective",
    meaning: ["bitter and abusive"],
    bengali: "ভর্ৎসনামূলক",
    example: ["The vituperative speech targeted his critics."]
  },
  {
    word: "Ingenuous",
    pronunciation: "in-JEN-yoo-us",
    partOfSpeech: "adjective",
    meaning: ["innocent and unsuspecting"],
    bengali: "সরল",
    example: ["Her ingenuous nature made her easy to trick."]
  },
  {
    word: "Ebuliency",
    pronunciation: "ih-BOOL-yuhn-see",
    partOfSpeech: "noun",
    meaning: ["bubbling with enthusiasm"],
    bengali: "উদ্দীপনা",
    example: ["His ebuliency was contagious."]
  },
  {
    word: "Exculpate",
    pronunciation: "EK-skul-payt",
    partOfSpeech: "verb",
    meaning: ["to show or declare that someone is not guilty"],
    bengali: "দোষমুক্ত করা",
    example: ["New evidence served to exculpate the defendant."]
  },
  {
    word: "Fawning",
    pronunciation: "FAWN-ing",
    partOfSpeech: "adjective",
    meaning: ["displaying exaggerated flattery or affection"],
    bengali: "তোষামোদপূর্ণ",
    example: ["The fawning waiter annoyed the diners."]
  },
  {
    word: "Gregarious",
    pronunciation: "gri-GAIR-ee-us",
    partOfSpeech: "adjective",
    meaning: ["fond of company; sociable"],
    bengali: "মিশুক",
    example: ["He is a gregarious person who loves parties."]
  },
  {
    word: "Inundate",
    pronunciation: "IN-un-dayt",
    partOfSpeech: "verb",
    meaning: ["to overwhelm someone with things", "flood"],
    bengali: "প্লাবিত করা / ভারাক্রান্ত করা",
    example: ["We were inundated with complaints."]
  },
  {
    word: "Levity",
    pronunciation: "LEV-ih-tee",
    partOfSpeech: "noun",
    meaning: ["humor or frivolity", "lack of seriousness"],
    bengali: "হালকামনা",
    example: ["He added a touch of levity to the grim situation."]
  },
  {
    word: "Occlude",
    pronunciation: "uh-KLOOD",
    partOfSpeech: "verb",
    meaning: ["to stop, close up, or obstruct"],
    bengali: "বন্ধ করা / বাধা দেওয়া",
    example: ["The cloud occluded the sun."]
  },
];

const getTestWords = (testNum: number): Word[] => {
  const start = (testNum - 1) * 37;
  const end = start + 37;
  const words = ALL_WORDS.slice(start, end);
  
  // Fill with placeholders if less than 37
  if (words.length < 37) {
    const currentLen = words.length;
    const placeholdersCount = 37 - currentLen;
    for (let i = 0; i < placeholdersCount; i++) {
      words.push({
        word: `Word ${start + currentLen + i + 1}`,
        pronunciation: "---",
        partOfSpeech: "---",
        meaning: ["Pending update..."],
        bengali: "অপেক্ষমান...",
        example: ["Wait for upcoming data batches."]
      });
    }
  }
  return words;
};

export const HIGH_FREQ_TESTS = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: `Module ${i + 1}`,
  words: getTestWords(i + 1)
}));

export const ELEGANT_WORDS: ElegantWord[] = [
{
  mainWord: "Important",
  insteadWords: ["salient", "crucial", "pivotal"],
  examples: [
    {
      weak: "The most important part of the report is the conclusion.",
      better: "The most salient part of the report is the conclusion."
    },
    {
      weak: "Time is important when treating a heart attack.",
      better: "Time is crucial when treating a heart attack."
    },
    {
      weak: "This was an important moment in the history of the company.",
      better: "This was a pivotal moment in the history of the company."
    }
  ]
},
{
  mainWord: "Say",
  insteadWords: ["assert", "claim", "cite"],
  examples: [
    {
      weak: "He said that he was innocent.",
      better: "He asserted that he was innocent."
    },
    {
      weak: "The company says that the product is safe.",
      better: "The company claims that the product is safe."
    },
    {
      weak: "The author said many studies to support his argument.",
      better: "The author cited many studies to support his argument."
    }
  ]
},
{
  mainWord: "Environment",
  insteadWords: ["atmosphere", "surroundings", "milieu"],
  examples: [
    {
      weak: "The restaurant had a nice environment.",
      better: "The restaurant had a pleasant atmosphere."
    },
    {
      weak: "The hotel is in a beautiful natural environment.",
      better: "The hotel is nestled in beautiful natural surroundings."
    },
    {
      weak: "He grew up in a literary environment.",
      better: "He grew up in a literary milieu."
    }
  ]
},
{
  mainWord: "Problem",
  insteadWords: ["challenge", "obstacle", "complication"],
  examples: [
    {
      weak: "Finding a job can be a problem for many people.",
      better: "Finding a job can be a significant challenge for many people."
    },
    {
      weak: "Language was a problem to their communication.",
      better: "Language was an obstacle to their communication."
    },
    {
      weak: "The surgery was successful, but there was a small problem.",
      better: "The surgery was successful, but there was a minor complication."
    }
  ]
},
{
  mainWord: "Increase",
  insteadWords: ["surge", "skyrocket", "proliferate"],
  examples: [
    {
      weak: "There was a big increase in demand for the product.",
      better: "There was a surge in demand for the product."
    },
    {
      weak: "The cost of living has increased in recent years.",
      better: "The cost of living has skyrocketed in recent years."
    },
    {
      weak: "Information has increased with the rise of the internet.",
      better: "Information has proliferated with the rise of the internet."
    }
  ]
},
{
  mainWord: "Decrease",
  insteadWords: ["plunge", "plummet", "slump"],
  examples: [
    {
      weak: "The temperature decreased overnight.",
      better: "The temperature plunged overnight."
    },
    {
      weak: "The stock prices decreased after the bad news.",
      better: "The stock prices plummeted after the bad news."
    },
    {
      weak: "Sales decreased during the winter months.",
      better: "Sales slumped during the winter months."
    }
  ]
},
{
  mainWord: "Firstly",
  insteadWords: ["to begin with", "first and foremost", "initially"],
  examples: [
    {
      weak: "Firstly, I would like to thank you for coming.",
      better: "To begin with, I would like to thank you for coming."
    },
    {
      weak: "Firstly, we must solve the safety issues.",
      better: "First and foremost, we must solve the safety issues."
    },
    {
      weak: "Firstly, the plan seemed like a good idea.",
      better: "Initially, the plan seemed like a good idea."
    }
  ]
},
{
  mainWord: "Suggestion",
  insteadWords: ["recommendation", "proposition"],
  examples: [
    {
      weak: "The committee gave several suggestions.",
      better: "The committee gave several recommendations."
    },
    {
      weak: "He made a suggestion for the merger.",
      better: "He made a proposition for the merger."
    }
  ]
},
{
  mainWord: "Describe",
  insteadWords: ["delineate", "depict", "portray"],
  examples: [
    {
      weak: "He described the new policy clearly.",
      better: "He delineated the new policy clearly."
    },
    {
      weak: "The painting describes a rural scene.",
      better: "The painting depicts a rural scene."
    },
    {
      weak: "The movie describes him as a hero.",
      better: "The movie portrays him as a hero."
    }
  ]
},
{
  mainWord: "Country",
  insteadWords: ["nation", "territory", "realm"],
  examples: [
    {
      weak: "The country is celebrating its independence.",
      better: "The nation is celebrating its independence."
    },
    {
      weak: "The country was expanded after the war.",
      better: "The territory was expanded after the war."
    },
    {
      weak: "He is famous throughout the country.",
      better: "He is famous throughout the realm."
    }
  ]
},
{
  mainWord: "People",
  insteadWords: ["populace", "stakeholders", "residents"],
  examples: [
    {
      weak: "The people demanded justice.",
      better: "The populace demanded justice."
    },
    {
      weak: "The project involves many people from the community.",
      better: "The project involves many stakeholders from the community."
    },
    {
      weak: "The people living in the area are concerned.",
      better: "The residents living in the area are concerned."
    }
  ]
},
{
  mainWord: "Come From",
  insteadWords: ["derive from", "stem from", "emanate from"],
  examples: [
    {
      weak: "Many words come from Latin.",
      better: "Many words derive from Latin."
    },
    {
      weak: "Many social issues come from poverty.",
      better: "Many social issues stem from poverty."
    },
    {
      weak: "A feeling of peace came from her presence.",
      better: "A feeling of peace emanated from her presence."
    }
  ]
},
{
  mainWord: "Beautiful",
  insteadWords: ["breathtaking", "picturesque", "scenic"],
  examples: [
    {
      weak: "The view from the top is very beautiful.",
      better: "The view from the top is breathtaking."
    },
    {
      weak: "The village is very beautiful.",
      better: "The village is picturesque."
    },
    {
      weak: "We took the beautiful route home.",
      better: "We took the scenic route home."
    }
  ]
},
{
  mainWord: "Proper",
  insteadWords: ["appropriate", "compliant", "commensurate"],
  examples: [
    {
      weak: "Dress in a proper way for the interview.",
      better: "Dress in an appropriate way for the interview."
    },
    {
      weak: "The company was proper with the regulations.",
      better: "The company was compliant with the regulations."
    },
    {
      weak: "His salary is proper with his experience.",
      better: "His salary is commensurate with his experience."
    }
  ]
},
{
  mainWord: "Feature",
  insteadWords: ["characteristic", "trait"],
  examples: [
    {
      weak: "Honesty is an important feature of leadership.",
      better: "Honesty is a key characteristic of leadership."
    },
    {
      weak: "Kindness is a good feature in a person.",
      better: "Kindness is a desirable trait in a person."
    }
  ]
},
{
  mainWord: "Necessary",
  insteadWords: ["prerequisite", "requisite", "inherent"],
  examples: [
    {
      weak: "Experience is necessary for this job.",
      better: "Experience is a prerequisite for this job."
    },
    {
      weak: "He has the necessary skills.",
      better: "He has the requisite skills."
    },
    {
      weak: "Risk is a necessary part of the business.",
      better: "Risk is an inherent part of the business."
    }
  ]
},
{
  mainWord: "War",
  insteadWords: ["conflict", "skirmish"],
  examples: [
    {
      weak: "The war caused severe destruction.",
      better: "The conflict caused severe destruction."
    },
    {
      weak: "There was a small war at the border.",
      better: "There was a minor skirmish at the border."
    }
  ]
},
{
  mainWord: "Relation",
  insteadWords: ["alliance", "ties"],
  examples: [
    {
      weak: "The two countries formed a strong relation.",
      better: "The two countries formed a strong alliance."
    },
    {
      weak: "Bangladesh has good relations with Japan.",
      better: "Bangladesh has strong ties with Japan."
    }
  ]
},
{
  mainWord: "Advantage",
  insteadWords: ["leverage", "virtue"],
  examples: [
    {
      weak: "Technology gives businesses an advantage.",
      better: "Technology gives businesses leverage."
    },
    {
      weak: "Patience is a great advantage.",
      better: "Patience is a great virtue."
    }
  ]
},
{
  mainWord: "Disadvantage",
  insteadWords: ["drawback", "detriment", "pitfall"],
  examples: [
    {
      weak: "Lack of experience is a disadvantage.",
      better: "Lack of experience is a major drawback."
    },
    {
      weak: "Smoking is a disadvantage to your health.",
      better: "Smoking is a detriment to your health."
    },
    {
      weak: "Avoid the common disadvantages of starting a business.",
      better: "Avoid the common pitfalls of starting a business."
    }
  ]
},
{
  mainWord: "Reason",
  insteadWords: ["catalyst", "rationale", "determinant"],
  examples: [
    {
      weak: "Poverty is a major reason behind crime.",
      better: "Poverty is a major catalyst behind crime."
    },
    {
      weak: "The author provided the reason for his study.",
      better: "The author provided the rationale for his study."
    },
    {
      weak: "Level of education is a major reason of income.",
      better: "Level of education is a major determinant of income."
    }
  ]
},
{
  mainWord: "Temporary",
  insteadWords: ["provisional", "transient", "ephemeral"],
  examples: [
    {
      weak: "The government introduced a temporary policy.",
      better: "The government introduced a provisional policy."
    },
    {
      weak: "Fashion trends are usually temporary.",
      better: "Fashion trends are usually transient."
    },
    {
      weak: "The beauty of the sunset is temporary.",
      better: "The beauty of the sunset is ephemeral."
    }
  ]
},
{
  mainWord: "Condition",
  insteadWords: ["status", "status quo"],
  examples: [
    {
      weak: "The economic condition is improving.",
      better: "The economic status is improving."
    },
    {
      weak: "Some people want to maintain the current condition.",
      better: "Some people want to maintain the status quo."
    }
  ]
},
{
  mainWord: "Society",
  insteadWords: ["community", "populace"],
  examples: [
    {
      weak: "Society must protect children's rights.",
      better: "The community must protect children's rights."
    },
    {
      weak: "The new law affects the whole society.",
      better: "The new law affects the whole populace."
    }
  ]
},
{
  mainWord: "Supported By",
  insteadWords: ["fortified by", "backed by", "buttressed by"],
  examples: [
    {
      weak: "The walls were supported by extra stones.",
      better: "The walls were fortified by extra stones."
    },
    {
      weak: "The proposal was supported by experts.",
      better: "The proposal was backed by experts."
    },
    {
      weak: "His argument was supported by data.",
      better: "His argument was buttressed by data."
    }
  ]
},
{
  mainWord: "Control",
  insteadWords: ["curb", "subdue", "rein"],
  examples: [
    {
      weak: "The government tried to control inflation.",
      better: "The government tried to curb inflation."
    },
    {
      weak: "The police managed to control the rioters.",
      better: "The police managed to subdue the rioters."
    },
    {
      weak: "Management needs to control spending.",
      better: "Management needs to rein in spending."
    }
  ]
},
{
  mainWord: "Step",
  insteadWords: ["initiative", "maneuver", "threshold"],
  examples: [
    {
      weak: "The authority took an important step.",
      better: "The authority took an important initiative."
    },
    {
      weak: "The company made a clever step to gain market share.",
      better: "The company made a clever maneuver to gain market share."
    },
    {
      weak: "We are on the step of a new era.",
      better: "We are on the threshold of a new era."
    }
  ]
},
{
  mainWord: "Understand",
  insteadWords: ["comprehend", "discern", "perceive"],
  examples: [
    {
      weak: "Students should understand the concept clearly.",
      better: "Students should comprehend the concept clearly."
    },
    {
      weak: "It is difficult to understand the truth sometimes.",
      better: "It is difficult to discern the truth sometimes."
    },
    {
      weak: "How do you understand the current situation?",
      better: "How do you perceive the current situation?"
    }
  ]
},
{
  mainWord: "Uncertainties",
  insteadWords: ["ambiguities", "fluctuations", "dubiety"],
  examples: [
    {
      weak: "The market faces many uncertainties.",
      better: "The market faces many ambiguities."
    },
    {
      weak: "Currency uncertainties are common in this region.",
      better: "Currency fluctuations are common in this region."
    },
    {
      weak: "There is some uncertainty about the final result.",
      better: "There is some dubiety about the final result."
    }
  ]
},
{
  mainWord: "Prepare",
  insteadWords: ["orchestrate", "devise", "fortify"],
  examples: [
    {
      weak: "They prepared a large-scale event.",
      better: "They orchestrated a large-scale event."
    },
    {
      weak: "The team prepared a strategic plan.",
      better: "The team devised a strategic plan."
    },
    {
      weak: "The city was prepared against potential attack.",
      better: "The city was fortified against potential attack."
    }
  ]
},
{
  mainWord: "Difficult",
  insteadWords: ["demanding", "perplexing", "burdensome"],
  examples: [
    {
      weak: "The exam was very difficult.",
      better: "The exam was extremely demanding."
    },
    {
      weak: "It was a difficult problem for the students.",
      better: "It was a perplexing problem for the students."
    },
    {
      weak: "High taxes are difficult for small businesses.",
      better: "High taxes are burdensome for small businesses."
    }
  ]
},
{
  mainWord: "Dealing with",
  insteadWords: ["grappling with", "contending with"],
  examples: [
    {
      weak: "The country is dealing with inflation.",
      better: "The country is grappling with inflation."
    },
    {
      weak: "The team is dealing with a difficult schedule.",
      better: "The team is contending with a difficult schedule."
    }
  ]
},
{
  mainWord: "In The Middle of",
  insteadWords: ["amid", "amidst"],
  examples: [
    {
      weak: "The nation suffered in the middle of political unrest.",
      better: "The nation suffered amid political unrest."
    },
    {
      weak: "He remained calm in the middle of the chaos.",
      better: "He remained calm amidst the chaos."
    }
  ]
},
{
  mainWord: "Effect",
  insteadWords: ["repercussion", "impact"],
  examples: [
    {
      weak: "The policy had a negative effect.",
      better: "The policy had a negative repercussion."
    },
    {
      weak: "The movie had a profound effect on me.",
      better: "The movie had a profound impact on me."
    }
  ]
},
{
  mainWord: "Result",
  insteadWords: ["consequence", "aftermath", "ripple effect"],
  examples: [
    {
      weak: "Corruption is the result of weak governance.",
      better: "Corruption is the consequence of weak governance."
    },
    {
      weak: "The town was rebuilt in the result of the storm.",
      better: "The town was rebuilt in the aftermath of the storm."
    },
    {
      weak: "The crisis had a result across the entire region.",
      better: "The crisis had a ripple effect across the entire region."
    }
  ]
},
{
  mainWord: "Attempt",
  insteadWords: ["strive", "endeavor"],
  examples: [
    {
      weak: "We must attempt for excellence in our work.",
      better: "We must strive for excellence in our work."
    },
    {
      weak: "The students attempted to solve the problem.",
      better: "The students endeavored to solve the problem."
    }
  ]
},
{
  mainWord: "Damage",
  insteadWords: ["impair", "jeopardize"],
  examples: [
    {
      weak: "Alcohol can damage your judgment.",
      better: "Alcohol can impair your judgment."
    },
    {
      weak: "Pollution damages public health.",
      better: "Pollution jeopardizes public health."
    }
  ]
},
{
  mainWord: "Stop",
  insteadWords: ["cease", "halt"],
  examples: [
    {
      weak: "The rain stopped suddenly.",
      better: "The rain ceased suddenly."
    },
    {
      weak: "The factory stopped production due to lack of power.",
      better: "The factory halted production due to lack of power."
    }
  ]
},
{
  mainWord: "Change",
  insteadWords: ["shift", "evolve", "transform"],
  examples: [
    {
      weak: "There was a change in public opinion.",
      better: "There was a shift in public opinion."
    },
    {
      weak: "The project changed significantly over time.",
      better: "The project evolved significantly over time."
    },
    {
      weak: "Technology changed communication systems forever.",
      better: "Technology transformed communication systems forever."
    }
  ]
},
{
  mainWord: "Dream",
  insteadWords: ["envisage", "visualize"],
  examples: [
    {
      weak: "Young people dream of success.",
      better: "Young people envisage success."
    },
    {
      weak: "He dreamed his future career.",
      better: "He visualized his future career."
    }
  ]
},
{
  mainWord: "Hidden",
  insteadWords: ["clandestine", "surreptitious", "concealed"],
  examples: [
    {
      weak: "The group carried out hidden activities.",
      better: "The group carried out clandestine activities."
    },
    {
      weak: "She made a hidden glance at her watch.",
      better: "She made a surreptitious glance at her watch."
    },
    {
      weak: "The weapon was hidden under his coat.",
      better: "The weapon was concealed under his coat."
    }
  ]
},
{
  mainWord: "Dormant",
  insteadWords: ["latent", "hibernating"],
  examples: [
    {
      weak: "The virus remained dormant for years.",
      better: "The virus remained latent for years."
    },
    {
      weak: "The bear was dormant during the winter months.",
      better: "The bear was hibernating during the winter months."
    }
  ]
},
{
  mainWord: "Skill",
  insteadWords: ["aptness", "dexterity"],
  examples: [
    {
      weak: "His skill for mathematics was evident from a young age.",
      better: "His aptness for mathematics was evident from a young age."
    },
    {
      weak: "Her communication skill impressed everyone.",
      better: "Her communication dexterity impressed everyone."
    }
  ]
},
{
  mainWord: "Strengthen",
  insteadWords: ["bolster", "reinforce", "fortify"],
  examples: [
    {
      weak: "The policy will strengthen the economy.",
      better: "The policy will bolster the economy."
    },
    {
      weak: "We need to strengthen the bridge structure.",
      better: "We need to reinforce the bridge structure."
    },
    {
      weak: "The food is strengthened with essential vitamins.",
      better: "The food is fortified with essential vitamins."
    }
  ]
},
{
  mainWord: "Negative",
  insteadWords: ["dire", "devastating", "catastrophic"],
  examples: [
    {
      weak: "Climate change will have negative consequences.",
      better: "Climate change will have dire consequences."
    },
    {
      weak: "The news had a negative impact on the community.",
      better: "The news had a devastating impact on the community."
    },
    {
      weak: "Climate change may have negative effects.",
      better: "Climate change may have catastrophic effects."
    }
  ]
},
{
  mainWord: "Admit",
  insteadWords: ["acknowledge", "concede"],
  examples: [
    {
      weak: "The authority admitted the mistake.",
      better: "The authority acknowledged the mistake."
    },
    {
      weak: "He admitted that his opponent had won.",
      better: "He conceded that his opponent had won."
    }
  ]
},
{
  mainWord: "Deficiency",
  insteadWords: ["lack", "scarcity", "devoid of"],
  examples: [
    {
      weak: "There is a deficiency of common sense here.",
      better: "There is a distinct lack of common sense here."
    },
    {
      weak: "There is a deficiency of skilled workers in the tech sector.",
      better: "There is a scarcity of skilled workers in the tech sector."
    },
    {
      weak: "The land is deficiency of vegetation.",
      better: "The land is devoid of vegetation."
    }
  ]
},
{
  mainWord: "Fascinating",
  insteadWords: ["captivating", "intriguing", "spellbinding"],
  examples: [
    {
      weak: "The documentary was fascinating.",
      better: "The documentary was captivating."
    },
    {
      weak: "The book has a fascinating plot with many twists.",
      better: "The book has an intriguing plot with many twists."
    },
    {
      weak: "The speaker gave a fascinating performance.",
      better: "The speaker gave a spellbinding performance."
    }
  ]
},
{
  mainWord: "Story",
  insteadWords: ["narrative", "account"],
  examples: [
    {
      weak: "The book tells an inspiring story.",
      better: "The book presents an inspiring narrative."
    },
    {
      weak: "He gave a detailed story of the trip.",
      better: "He gave a detailed account of the trip."
    }
  ]
},
{
  mainWord: "Activities",
  insteadWords: ["pursuits", "tasks"],
  examples: [
    {
      weak: "Students participated in extracurricular activities.",
      better: "Students participated in extracurricular pursuits."
    },
    {
      weak: "The office is busy with daily activities.",
      better: "The office is busy with daily tasks."
    }
  ]
},
{
  mainWord: "Many",
  insteadWords: ["multifaceted", "manifold", "myriad"],
  examples: [
    {
      weak: "The problem has many layers.",
      better: "The problem is multifaceted."
    },
    {
      weak: "The reasons for the failure are many.",
      better: "The reasons for the failure are manifold."
    },
    {
      weak: "The city faces many problems.",
      better: "The city faces myriad problems."
    }
  ]
},
{
  mainWord: "Small/Little",
  insteadWords: ["marginal", "minimal", "negligible"],
  examples: [
    {
      weak: "The increase in profit was small.",
      better: "The increase in profit was marginal."
    },
    {
      weak: "We need to keep costs small to stay competitive.",
      better: "We need to keep costs minimal to stay competitive."
    },
    {
      weak: "The project made a small impact.",
      better: "The project made a negligible impact."
    }
  ]
},
{
  mainWord: "Huge/Large",
  insteadWords: ["substantial", "immense", "colossal"],
  examples: [
    {
      weak: "The company suffered a huge loss.",
      better: "The company suffered a substantial loss."
    },
    {
      weak: "The ocean is huge and mysterious.",
      better: "The ocean is immense and mysterious."
    },
    {
      weak: "The construction was a huge project.",
      better: "The construction was a colossal project."
    }
  ]
},
{
  mainWord: "Fast",
  insteadWords: ["expeditious", "precipitous"],
  examples: [
    {
      weak: "The government took fast action.",
      better: "The government took expeditious action."
    },
    {
      weak: "There was a fast drop in temperature overnight.",
      better: "There was a precipitous drop in temperature overnight."
    }
  ]
},
{
  mainWord: "Enough",
  insteadWords: ["adequate", "suffice"],
  examples: [
    {
      weak: "The food was enough for everyone.",
      better: "The food was adequate for everyone."
    },
    {
      weak: "A plain explanation will be enough for now.",
      better: "A plain explanation will suffice for now."
    }
  ]
},
{
  mainWord: "Influence",
  insteadWords: ["leverage", "clout", "dominance"],
  examples: [
    {
      weak: "Social media has great influence on youth.",
      better: "Social media has great leverage over youth."
    },
    {
      weak: "He has a lot of political influence in the city.",
      better: "He has a lot of political clout in the city."
    },
    {
      weak: "The company has an influence in the global market.",
      better: "The company has a dominance in the global market."
    }
  ]
},
{
  mainWord: "Harmful",
  insteadWords: ["deleterious", "inimical", "pernicious"],
  examples: [
    {
      weak: "Smoking is harmful to health.",
      better: "Smoking is deleterious to health."
    },
    {
      weak: "The policy is harmful to progress.",
      better: "The policy is inimical to progress."
    },
    {
      weak: "The spread of lies has a harmful effect.",
      better: "The spread of lies has a pernicious effect."
    }
  ]
},
{
  mainWord: "Helpful",
  insteadWords: ["conducive", "advantageous", "salutary"],
  examples: [
    {
      weak: "The quiet environment is helpful for study.",
      better: "The quiet environment is conducive to study."
    },
    {
      weak: "The new rule is helpful for young students.",
      better: "The new rule is advantageous for young students."
    },
    {
      weak: "Regular exercise is helpful for health.",
      better: "Regular exercise is salutary for health."
    }
  ]
},
{
  mainWord: "Start",
  insteadWords: ["commence", "inaugurate", "trigger"],
  examples: [
    {
      weak: "The meeting will start soon.",
      better: "The meeting will commence soon."
    },
    {
      weak: "The university will start a new program.",
      better: "The university will inaugurate a new program."
    },
    {
      weak: "The spark started a massive fire.",
      better: "The spark triggered a massive fire."
    }
  ]
},
{
  mainWord: "End",
  insteadWords: ["terminate", "culminate", "cessation"],
  examples: [
    {
      weak: "The meeting ended at noon.",
      better: "The meeting terminated at noon."
    },
    {
      weak: "The project ended in success.",
      better: "The project culminated in success."
    },
    {
      weak: "There was an end to the fighting.",
      better: "There was a cessation of hostilities."
    }
  ]
},
{
  mainWord: "Improve",
  insteadWords: ["ameliorate", "refine", "enhance"],
  examples: [
    {
      weak: "They want to improve social conditions.",
      better: "They want to ameliorate social conditions."
    },
    {
      weak: "The engineer improved the design.",
      better: "The engineer refined the design."
    },
    {
      weak: "The government wants to improve healthcare.",
      better: "The government wants to enhance healthcare."
    }
  ]
},
{
  mainWord: "Worsen",
  insteadWords: ["exacerbate", "aggravate", "deteriorate"],
  examples: [
    {
      weak: "Corruption worsens economic inequality.",
      better: "Corruption exacerbates economic inequality."
    },
    {
      weak: "Cold weather can worsen your injury.",
      better: "Cold weather can aggravate your injury."
    },
    {
      weak: "His health worsened over the weekend.",
      better: "His health deteriorated over the weekend."
    }
  ]
},
{
  mainWord: "Agree",
  insteadWords: ["concur", "assent", "unanimous"],
  examples: [
    {
      weak: "Most experts agree with the proposal.",
      better: "Most experts concur with the proposal."
    },
    {
      weak: "The director agreed to the request.",
      better: "The director assented to the request."
    },
    {
      weak: "The jury agreed on the verdict.",
      better: "The jury was unanimous on the verdict."
    }
  ]
},
{
  mainWord: "Dispute",
  insteadWords: ["contention", "discord", "ambivalence"],
  examples: [
    {
      weak: "The border dispute continues.",
      better: "The border contention continues."
    },
    {
      weak: "There was a dispute between the two groups.",
      better: "There was discord between the two groups."
    },
    {
      weak: "There is some dispute about the new policy.",
      better: "There is some ambivalence about the new policy."
    }
  ]
},
{
  mainWord: "Think/Plan",
  insteadWords: ["contemplate", "deliberate", "formulate"],
  examples: [
    {
      weak: "He is thinking about changing jobs.",
      better: "He is contemplating changing jobs."
    },
    {
      weak: "The jury thought for hours.",
      better: "The jury deliberated for hours."
    },
    {
      weak: "The committee plans to reform the system.",
      better: "The committee formulates plans to reform the system."
    }
  ]
},
{
  mainWord: "Focus on",
  insteadWords: ["emphasize", "prioritize", "accentuate"],
  examples: [
    {
      weak: "The policy focuses on renewable energy.",
      better: "The policy emphasizes renewable energy."
    },
    {
      weak: "We must focus on safety first.",
      better: "We must prioritize safety first."
    },
    {
      weak: "The dress focuses on her figure.",
      better: "The dress accentuates her figure."
    }
  ]
},
{
  mainWord: "Clearly",
  insteadWords: ["manifestly", "evidently", "unequivocally"],
  examples: [
    {
      weak: "The plan is clearly flawed.",
      better: "The plan is manifestly flawed."
    },
    {
      weak: "The problem is clearly visible.",
      better: "The problem is evidently visible."
    },
    {
      weak: "He clearly stated his opposition.",
      better: "He unequivocally stated his opposition."
    }
  ]
},
{
  mainWord: "Brief",
  insteadWords: ["concise", "succinct", "pithy"],
  examples: [
    {
      weak: "His speech was brief and effective.",
      better: "His speech was concise and effective."
    },
    {
      weak: "She gave a brief summary.",
      better: "She gave a succinct summary."
    },
    {
      weak: "The book is full of brief observations.",
      better: "The book is full of pithy observations."
    }
  ]
},
{
  mainWord: "Old",
  insteadWords: ["outdated", "obsolete", "archaic"],
  examples: [
    {
      weak: "The machinery is old.",
      better: "The machinery is outdated."
    },
    {
      weak: "The country still uses old methods.",
      better: "The country still uses obsolete methods."
    },
    {
      weak: "The library has many old books.",
      better: "The library has many archaic books."
    }
  ]
},
{
  mainWord: "Modern",
  insteadWords: ["contemporary", "state-of-the-art"],
  examples: [
    {
      weak: "Many people enjoy modern art.",
      better: "Many people enjoy contemporary art."
    },
    {
      weak: "The hospital has modern equipment.",
      better: "The hospital has state-of-the-art equipment."
    }
  ]
},
{
  mainWord: "Complex",
  insteadWords: ["intricate", "convoluted", "byzantine"],
  examples: [
    {
      weak: "The legal system is very complex.",
      better: "The legal system is highly intricate."
    },
    {
      weak: "His explanation was complex and hard to follow.",
      better: "His explanation was convoluted and hard to follow."
    },
    {
      weak: "The process is hidden in a complex bureaucracy.",
      better: "The process is hidden in a byzantine bureaucracy."
    }
  ]
},
{
  mainWord: "Permanent",
  insteadWords: ["perpetual", "indelible", "perennial"],
  examples: [
    {
      weak: "The city was in a state of permanent motion.",
      better: "The city was in a state of perpetual motion."
    },
    {
      weak: "The incident left a permanent impact.",
      better: "The incident left an indelible impact."
    },
    {
      weak: "This is a permanent problem.",
      better: "This is a perennial problem."
    }
  ]
},
{
  mainWord: "Common",
  insteadWords: ["ubiquitous", "prevalent", "pervasive"],
  examples: [
    {
      weak: "Cell phones are common today.",
      better: "Cell phones are ubiquitous today."
    },
    {
      weak: "Corruption is common in weak institutions.",
      better: "Corruption is prevalent in weak institutions."
    },
    {
      weak: "The influence of the internet is common.",
      better: "The influence of the internet is pervasive."
    }
  ]
},
{
  mainWord: "Different",
  insteadWords: ["disparate", "divergent", "distinctive"],
  examples: [
    {
      weak: "The two groups have different backgrounds.",
      better: "The two groups have disparate backgrounds."
    },
    {
      weak: "The two groups have different opinions.",
      better: "The two groups have divergent opinions."
    },
    {
      weak: "The birds have different songs.",
      better: "The birds have distinctive songs."
    }
  ]
},
{
  mainWord: "Strict",
  insteadWords: ["stringent", "rigorous", "draconian"],
  examples: [
    {
      weak: "The government imposed strict laws.",
      better: "The government imposed stringent laws."
    },
    {
      weak: "The training is very strict.",
      better: "The training is very rigorous."
    },
    {
      weak: "The country has strict punishments for minor crimes.",
      better: "The country has draconian punishments for minor crimes."
    }
  ]
},
{
  mainWord: "Flexible",
  insteadWords: ["versatile", "adaptable", "resilient"],
  examples: [
    {
      weak: "Leather is a very flexible material.",
      better: "Leather is a very versatile material."
    },
    {
      weak: "Employees need to be flexible.",
      better: "Employees need to be adaptable."
    },
    {
      weak: "The system is flexible enough to survive a crash.",
      better: "The system is resilient enough to survive a crash."
    }
  ]
},
{
  mainWord: "Use",
  insteadWords: ["utilize", "employ", "harness"],
  examples: [
    {
      weak: "We should use modern technology.",
      better: "We should utilize modern technology."
    },
    {
      weak: "The company uses several methods.",
      better: "The company employs several methods."
    },
    {
      weak: "We must use the power of the sun.",
      better: "We must harness the power of the sun."
    }
  ]
},
{
  mainWord: "Avoid",
  insteadWords: ["eschew", "bypass", "circumvent"],
  examples: [
    {
      weak: "He tried to avoid political debate.",
      better: "He tried to eschew political debate."
    },
    {
      weak: "The road was blocked, so we had to avoid it.",
      better: "The road was blocked, so we had to bypass it."
    },
    {
      weak: "They found a way to avoid the new rules.",
      better: "They found a way to circumvent the new rules."
    }
  ]
},
{
  mainWord: "Choose",
  insteadWords: ["opt for", "select", "designate"],
  examples: [
    {
      weak: "Many students choose to study abroad.",
      better: "Many students opt for studying abroad."
    },
    {
      weak: "The committee will choose the best candidate.",
      better: "The committee will select the best candidate."
    },
    {
      weak: "The government will choose a special zone for the project.",
      better: "The government will designate a special zone for the project."
    }
  ]
},
{
  mainWord: "Carry out",
  insteadWords: ["implement", "execute", "discharge"],
  examples: [
    {
      weak: "The government failed to carry out the plan.",
      better: "The government failed to implement the plan."
    },
    {
      weak: "He carried out the orders perfectly.",
      better: "He executed the orders perfectly."
    },
    {
      weak: "Soldiers must carry out their duties.",
      better: "Soldiers must discharge their duties."
    }
  ]
},
{
  mainWord: "Gap",
  insteadWords: ["disparity", "lacuna", "hiatus"],
  examples: [
    {
      weak: "There is a big gap between rich and poor.",
      better: "There is a major disparity between rich and poor."
    },
    {
      weak: "There is a gap in the historical records.",
      better: "There is a lacuna in the historical records."
    },
    {
      weak: "There was a gap in his career for two years.",
      better: "There was a hiatus in his career for two years."
    }
  ]
},
{
  mainWord: "Duty/Task",
  insteadWords: ["obligation", "liability", "prerogative"],
  examples: [
    {
      weak: "It is our duty to protect nature.",
      better: "It is our obligation to protect nature."
    },
    {
      weak: "The company has a duty to its employees.",
      better: "The company has a liability to its employees."
    },
    {
      weak: "It is the king's duty to declare war.",
      better: "It is the king's prerogative to declare war."
    }
  ]
},
{
  mainWord: "Waste",
  insteadWords: ["squander", "deplete", "dissipate"],
  examples: [
    {
      weak: "Many countries waste natural resources.",
      better: "Many countries squander natural resources."
    },
    {
      weak: "War wastes the national budget.",
      better: "War depletes the national budget."
    },
    {
      weak: "His energy was wasted on useless talk.",
      better: "His energy was dissipated on useless talk."
    }
  ]
},
{
  mainWord: "Evidence",
  insteadWords: ["corroboration", "substantiation", "testament"],
  examples: [
    {
      weak: "The police found strong evidence.",
      better: "The police found strong corroboration."
    },
    {
      weak: "We need more evidence for this theory.",
      better: "We need more substantiation for this theory."
    },
    {
      weak: "The building is evidence of the city's golden age.",
      better: "The building is a testament to the city's golden age."
    }
  ]
},
{
  mainWord: "Check",
  insteadWords: ["scrutinize", "audit", "vet"],
  examples: [
    {
      weak: "The authority checked the documents carefully.",
      better: "The authority scrutinized the documents carefully."
    },
    {
      weak: "The company needs to check its accounts.",
      better: "The company needs to audit its accounts."
    },
    {
      weak: "The committee will check all the candidates.",
      better: "The committee will vet all the candidates."
    }
  ]
},
{
  mainWord: "Risk",
  insteadWords: ["peril", "jeopardy", "vulnerability"],
  examples: [
    {
      weak: "Investing without research is a major risk.",
      better: "Investing without research is a major peril."
    },
    {
      weak: "The environment is at risk due to pollution.",
      better: "The environment is in jeopardy due to pollution."
    },
    {
      weak: "The system has many risks to cyber attacks.",
      better: "The system has many vulnerabilities to cyber attacks."
    }
  ]
},
{
  mainWord: "Stability",
  insteadWords: ["equilibrium", "stasis", "steadfastness"],
  examples: [
    {
      weak: "Political stability is necessary for growth.",
      better: "Political equilibrium is necessary for growth."
    },
    {
      weak: "The market reached a state of stability.",
      better: "The market reached a state of stasis."
    },
    {
      weak: "His stability in the face of crisis was admirable.",
      better: "His steadfastness in the face of crisis was admirable."
    }
  ]
},
{
  mainWord: "Competition",
  insteadWords: ["rivalry", "contention", "strife"],
  examples: [
    {
      weak: "Competition among companies is increasing.",
      better: "Rivalry among companies is increasing."
    },
    {
      weak: "The land was a source of competition between tribes.",
      better: "The land was a source of contention between tribes."
    },
    {
      weak: "Endless competition leads to social problems.",
      better: "Endless strife leads to social problems."
    }
  ]
},
{
  mainWord: "Profit",
  insteadWords: ["remuneration", "yield", "dividend"],
  examples: [
    {
      weak: "The doctor received a small profit for his service.",
      better: "The doctor received a small remuneration for his service."
    },
    {
      weak: "The investment gave a high profit.",
      better: "The investment gave a high yield."
    },
    {
      weak: "The business earned huge profits.",
      better: "The business earned huge dividends."
    }
  ]
},
{
  mainWord: "Limit",
  insteadWords: ["threshold", "constraint", "stipulation"],
  examples: [
    {
      weak: "He has a low limit for pain.",
      better: "He has a low threshold for pain."
    },
    {
      weak: "Every system has its limits.",
      better: "Every system has its constraints."
    },
    {
      weak: "We must follow the limits of the contract.",
      better: "We must follow the stipulations of the contract."
    }
  ]
},
{
  mainWord: "Therefore",
  insteadWords: ["hence", "consequently", "thus"],
  examples: [
    {
      weak: "The weather was bad; therefore, the flight was canceled.",
      better: "The weather was bad; hence, the flight was canceled."
    },
    {
      weak: "The roads were flooded; therefore, schools remained closed.",
      better: "The roads were flooded; consequently, schools remained closed."
    },
    {
      weak: "He studied hard; therefore, he passed the exam.",
      better: "He studied hard; thus, he passed the exam."
    }
  ]
},
{
  mainWord: "In short",
  insteadWords: ["in essence", "briefly put", "to sum up"],
  examples: [
    {
      weak: "In short, the project was successful.",
      better: "In essence, the project was successful."
    },
    {
      weak: "In short, we need more funding.",
      better: "Briefly put, we need more funding."
    },
    {
      weak: "In short, the results were mixed.",
      better: "To sum up, the results were mixed."
    }
  ]
},
{
  mainWord: "However",
  insteadWords: ["nevertheless", "notwithstanding", "conversely"],
  examples: [
    {
      weak: "The policy seemed effective; however, it failed later.",
      better: "The policy seemed effective; nevertheless, it failed later."
    },
    {
      weak: "The cost is high; however, we must buy it.",
      better: "The cost is high; notwithstanding, we must buy it."
    },
    {
      weak: "Some people like tea; however, others prefer coffee.",
      better: "Some people like tea; conversely, others prefer coffee."
    }
  ]
},
{
  mainWord: "In addition",
  insteadWords: ["furthermore", "moreover", "additionally"],
  examples: [
    {
      weak: "In addition, the report highlighted corruption.",
      better: "Furthermore, the report highlighted corruption."
    },
    {
      weak: "The car is fast; in addition, it is safe.",
      better: "The car is fast; moreover, it is safe."
    },
    {
      weak: "He is a doctor; in addition, he is a writer.",
      better: "He is a doctor; additionally, he is a writer."
    }
  ]
},
{
  mainWord: "Actually",
  insteadWords: ["in effect", "virtually", "de facto"],
  examples: [
    {
      weak: "The law was actually useless.",
      better: "The law was in effect useless."
    },
    {
      weak: "The company actually controls the market.",
      better: "The company virtually controls the market."
    },
    {
      weak: "He is actually the leader of the group.",
      better: "He is the de facto leader of the group."
    }
  ]
},
{
  mainWord: "Fake",
  insteadWords: ["spurious", "counterfeit", "fabricated"],
  examples: [
    {
      weak: "His argument was based on fake logic.",
      better: "His argument was based on spurious logic."
    },
    {
      weak: "Police seized fake currency notes.",
      better: "Police seized counterfeit currency notes."
    },
    {
      weak: "The whole story was fake.",
      better: "The whole story was fabricated."
    }
  ]
},
{
  mainWord: "Real/True",
  insteadWords: ["authentic", "veritable", "legitimate"],
  examples: [
    {
      weak: "The museum displayed real artifacts.",
      better: "The museum displayed authentic artifacts."
    },
    {
      weak: "The desert is a real ocean of sand.",
      better: "The desert is a veritable ocean of sand."
    },
    {
      weak: "He has a real claim to the throne.",
      better: "He has a legitimate claim to the throne."
    }
  ]
},
{
  mainWord: "Likely",
  insteadWords: ["plausible", "probable", "in all likelihood"],
  examples: [
    {
      weak: "The explanation seems likely.",
      better: "The explanation seems plausible."
    },
    {
      weak: "Rain is likely tomorrow.",
      better: "Rain is probable tomorrow."
    },
    {
      weak: "He is likely to win.",
      better: "In all likelihood, he will win."
    }
  ]
},
{
  mainWord: "Warning",
  insteadWords: ["admonition", "caveat", "premonition"],
  examples: [
    {
      weak: "The teacher gave a warning to the boy.",
      better: "The teacher gave an admonition to the boy."
    },
    {
      weak: "The scientist gave a warning about climate change.",
      better: "The scientist gave a caveat about climate change."
    },
    {
      weak: "He had a warning that something bad would happen.",
      better: "He had a premonition that something bad would happen."
    }
  ]
},
{
  mainWord: "Balance",
  insteadWords: ["symmetry", "parity", "poise"],
  examples: [
    {
      weak: "The garden has a perfect balance.",
      better: "The garden has a perfect symmetry."
    },
    {
      weak: "A good balance between work and life is necessary.",
      better: "A good parity between work and life is necessary."
    },
    {
      weak: "She maintained her balance during the speech.",
      better: "She maintained her poise during the speech."
    }
  ]
},
];
