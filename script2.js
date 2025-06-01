const transformationExercises = [
    {
        id: 0, // Example exercise (Same as Phrase Forge 1)
        sentence1: "Do you mind if I watch you while you paint?",
        givenWord: "objection",
        prefix: "Do you ",
        suffix: " you while you paint?",
        correctAnswer: ["have any objection to my watching", "have any objection to me watching"],
        minWords: 3,
        maxWords: 8,
        isExample: true, // Flag for example
        status: 'pending' // NEW: Initial status for progress tracking
    },
    // --- Exercises for Phrase Forge 2 (Re-numbered ID 1 to 50 from previous batch) ---
    {
        id: 1, // Was ID 51 in previous script
        sentence1: "She accepted the job immediately without any hesitation.",
        givenWord: "second",
        prefix: "She didn't ",
        suffix: " the job.",
        correctAnswer: ["give a second thought to taking"],
        minWords: 3,
        maxWords: 8,
        status: 'pending' // NEW: Initial status for progress tracking
    },
    {
        id: 2, // Was ID 52
        sentence1: "You shouldn't take his comments seriously.",
        givenWord: "grain",
        prefix: "You should take his comments with ",
        suffix: ".",
        correctAnswer: ["a grain of salt"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 3, // Was ID 53
        sentence1: "The company ceased trading after three consecutive years of losses.",
        givenWord: "went",
        prefix: "The company ",
        suffix: " after three consecutive years of losses.",
        correctAnswer: ["went out of business"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 4, // Was ID 54
        sentence1: "He is always exaggerating his achievements.",
        givenWord: "prone",
        prefix: "He is ",
        suffix: " his achievements.",
        correctAnswer: ["prone to exaggerating"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 5, // Was ID 55
        sentence1: "I wish I had brought a warmer coat.",
        givenWord: "only",
        prefix: "If ",
        suffix: " a warmer coat.",
        correctAnswer: ["only I had brought"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 6, // Was ID 56
        sentence1: "It's quite common for students to feel anxious before exams.",
        givenWord: "tend",
        prefix: "Students ",
        suffix: " anxious before exams.",
        correctAnswer: ["tend to feel"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 7, // Was ID 57
        sentence1: "She is determined to succeed as a fashion designer.",
        givenWord: "set",
        prefix: "She is ",
        suffix: " succeed as a fashion designer.",
        correctAnswer: ["set on becoming a"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 8, // Was ID 58
        sentence1: "The committee decided to postpone the meeting until next month.",
        givenWord: "off",
        prefix: "The committee decided to ",
        suffix: " until next month.",
        correctAnswer: ["put the meeting off"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 9, // Was ID 59
        sentence1: "His rude remarks were completely out of character.",
        givenWord: "like",
        prefix: "It was ",
        suffix: " rude remarks.",
        correctAnswer: ["not like him to make"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 10, // Was ID 60
        sentence1: "She recovered quickly from her illness.",
        givenWord: "made",
        prefix: "She ",
        suffix: " her illness.",
        correctAnswer: ["made a quick recovery from"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 11, // Was ID 61
        sentence1: "I never imagined that I would win the lottery.",
        givenWord: "occurred",
        prefix: "It never ",
        suffix: " that I would win the lottery.",
        correctAnswer: ["occurred to me"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 12, // Was ID 62
        sentence1: "He finds it hard to accept criticism.",
        givenWord: "difficult",
        prefix: "He has ",
        suffix: " criticism.",
        correctAnswer: ["great difficulty accepting"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 13, // Was ID 63
        sentence1: "This car is more economical than the previous model.",
        givenWord: "less",
        prefix: "The previous model ",
        suffix: " this one.",
        correctAnswer: ["was less economical than"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 14, // Was ID 64
        sentence1: "The news of the merger came as a complete surprise to everyone.",
        givenWord: "took",
        prefix: "The news of the merger ",
        suffix: " everyone by surprise.",
        correctAnswer: ["took"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 15, // Was ID 65
        sentence1: "He arrived late because he got stuck in traffic.",
        givenWord: "held",
        prefix: "He was ",
        suffix: " so he arrived late.",
        correctAnswer: ["held up in traffic"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 16, // Was ID 66
        sentence1: "My sister is often rude to people.",
        givenWord: "tendency",
        prefix: "My sister has a ",
        suffix: " to people.",
        correctAnswer: ["tendency to be rude"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 17, // Was ID 67
        sentence1: "The company is famous for its innovative designs.",
        givenWord: "reputation",
        prefix: "The company has a ",
        suffix: " its innovative designs.",
        correctAnswer: ["reputation for"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 18, // Was ID 68
        sentence1: "I don't feel like eating anything right now.",
        givenWord: "appetite",
        prefix: "I have no ",
        suffix: " right now.",
        correctAnswer: ["appetite for anything"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 19, // Was ID 69
        sentence1: "He prefers to work on his own.",
        givenWord: "rather",
        prefix: "He would ",
        suffix: " on his own.",
        correctAnswer: ["rather work"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 20, // Was ID 70
        sentence1: "The project would have been completed sooner if they had had more resources.",
        givenWord: "absence",
        prefix: "In the ",
        suffix: " the project was not completed sooner.",
        correctAnswer: ["absence of more resources"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 21, // Was ID 71
        sentence1: "She didn't want to get involved in the argument.",
        givenWord: "clear",
        prefix: "She wanted to ",
        suffix: " the argument.",
        correctAnswer: ["steer clear of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 22,
        sentence1: "People generally believe that he is innocent.",
        givenWord: "widely",
        prefix: "It is ",
        suffix: " that he is innocent.",
        correctAnswer: ["widely believed"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 23,
        sentence1: "I'm not familiar with the local customs.",
        givenWord: "acquainted",
        prefix: "I'm not ",
        suffix: " the local customs.",
        correctAnswer: ["acquainted with"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 24,
        sentence1: "He was so angry that he couldn't speak.",
        givenWord: "too",
        prefix: "He was ",
        suffix: " speak.",
        correctAnswer: ["too angry to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 25,
        sentence1: "The manager promised to look into the matter.",
        givenWord: "investigate",
        prefix: "The manager promised to ",
        suffix: " the matter.",
        correctAnswer: ["investigate"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 26,
        sentence1: "He finds it annoying when people interrupt him.",
        givenWord: "gets",
        prefix: "He ",
        suffix: " people interrupt him.",
        correctAnswer: ["gets annoyed when"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 27,
        sentence1: "You should be more careful about what you say.",
        givenWord: "mind",
        prefix: "You should ",
        suffix: " what you say.",
        correctAnswer: ["mind what you say"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 28,
        sentence1: "She was visibly upset by his harsh words.",
        givenWord: "clear",
        prefix: "It was ",
        suffix: " by his harsh words.",
        correctAnswer: ["clear she was upset"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 29,
        sentence1: "It's my opinion that she should resign.",
        givenWord: "view",
        prefix: "In my ",
        suffix: " she should resign.",
        correctAnswer: ["view, I think"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 30,
        sentence1: "His explanation made no sense at all.",
        givenWord: "make",
        prefix: "His explanation did ",
        suffix: " at all.",
        correctAnswer: ["not make sense"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 31,
        sentence1: "I can't wait to see the new movie.",
        givenWord: "forward",
        prefix: "I'm really looking ",
        suffix: " the new movie.",
        correctAnswer: ["forward to seeing"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 32,
        sentence1: "She was completely absorbed in her book.",
        givenWord: "lost",
        prefix: "She was ",
        suffix: " her book.",
        correctAnswer: ["lost in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 33,
        sentence1: "He rarely goes out nowadays.",
        givenWord: "occasions",
        prefix: "He only goes out ",
        suffix: " these days.",
        correctAnswer: ["on rare occasions"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 34,
        sentence1: "The manager will address your concerns.",
        givenWord: "dealt",
        prefix: "Your concerns will ",
        suffix: " the manager.",
        correctAnswer: ["be dealt with by"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 35,
        sentence1: "I deeply regret having offended her.",
        givenWord: "wish",
        prefix: "I ",
        suffix: " her.",
        correctAnswer: ["wish I hadn't offended"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 36,
        sentence1: "They were determined to reach the summit, come what may.",
        givenWord: "bent",
        prefix: "They were ",
        suffix: " reach the summit.",
        correctAnswer: ["bent on reaching"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 37,
        sentence1: "He was on the point of leaving when the phone rang.",
        givenWord: "about",
        prefix: "He was ",
        suffix: " when the phone rang.",
        correctAnswer: ["about to leave"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 38,
        sentence1: "It's impossible to deny that he was involved.",
        givenWord: "no",
        prefix: "There's ",
        suffix: " that he was involved.",
        correctAnswer: ["no denying the fact"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 39,
        sentence1: "She has absolutely no idea about the plans.",
        givenWord: "whatsoever",
        prefix: "She has no idea ",
        suffix: " the plans.",
        correctAnswer: ["whatsoever about"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 40,
        sentence1: "His health deteriorated rapidly after the accident.",
        givenWord: "decline",
        prefix: "There was a ",
        suffix: " his health after the accident.",
        correctAnswer: ["rapid decline in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 41,
        sentence1: "I'm having difficulty understanding this concept.",
        givenWord: "hard",
        prefix: "I'm finding it ",
        suffix: " this concept.",
        correctAnswer: ["hard to understand"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 42,
        sentence1: "He was criticized for his poor performance.",
        givenWord: "came",
        prefix: "His poor performance ",
        suffix: " for criticism.",
        correctAnswer: ["came in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 43,
        sentence1: "The manager decided to abolish the old rules.",
        givenWord: "away",
        prefix: "The manager decided to ",
        suffix: " the old rules.",
        correctAnswer: ["do away with"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 44,
        sentence1: "She finally succeeded in solving the puzzle.",
        givenWord: "managed",
        prefix: "She finally ",
        suffix: " the puzzle.",
        correctAnswer: ["managed to solve"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 45,
        sentence1: "It is believed that the suspect is still in the country.",
        givenWord: "thought",
        prefix: "The suspect is ",
        suffix: " still in the country.",
        correctAnswer: ["thought to be"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 46,
        sentence1: "He has always been very good at mathematics.",
        givenWord: "flair",
        prefix: "He has always had ",
        suffix: " mathematics.",
        correctAnswer: ["a flair for"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 47,
        sentence1: "She was extremely relieved to hear the good news.",
        givenWord: "great",
        prefix: "It was ",
        suffix: " hear the good news.",
        correctAnswer: ["a great relief to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 48,
        sentence1: "He apologized for having arrived late.",
        givenWord: "arriving",
        prefix: "He apologized ",
        suffix: " late.",
        correctAnswer: ["for arriving"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 49,
        sentence1: "She is unlikely to change her mind.",
        givenWord: "probability",
        prefix: "There is little ",
        suffix: " her mind.",
        correctAnswer: ["probability of her changing"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 50,
        sentence1: "The company regrets announcing that the concert has been cancelled.",
        givenWord: "to",
        prefix: "The company regrets ",
        suffix: " that the concert has been cancelled.",
        correctAnswer: ["to announce"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    // --- New 50 Exercises (ID 51 to 100 for Phrase Forge 2) ---
    {
        id: 51,
        sentence1: "It's often difficult to distinguish between fact and fiction.",
        givenWord: "telling",
        prefix: "There's often no ",
        suffix: " fact from fiction.",
        correctAnswer: ["telling the difference between"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 52,
        sentence1: "His rude comments caused a lot of anger.",
        givenWord: "gave",
        prefix: "His rude comments ",
        suffix: " anger.",
        correctAnswer: ["gave rise to a lot of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 53,
        sentence1: "She didn't want to get involved in any scandalous behaviour.",
        givenWord: "clear",
        prefix: "She wanted to steer ",
        suffix: " any scandalous behaviour.",
        correctAnswer: ["clear of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 54,
        sentence1: "I wish I had paid more attention during the lecture.",
        givenWord: "regretting",
        prefix: "I'm ",
        suffix: " more attention during the lecture.",
        correctAnswer: ["regretting not having paid"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 55,
        sentence1: "The bad weather meant that the flight was delayed.",
        givenWord: "resulted",
        prefix: "The bad weather ",
        suffix: " in the flight's delay.",
        correctAnswer: ["resulted"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 56,
        sentence1: "You must follow these instructions carefully.",
        givenWord: "adherence",
        prefix: "Strict ",
        suffix: " these instructions is required.",
        correctAnswer: ["adherence to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 57,
        sentence1: "He was completely unaware of the dangers.",
        givenWord: "conscious",
        prefix: "He was not at all ",
        suffix: " the dangers.",
        correctAnswer: ["conscious of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 58,
        sentence1: "She rarely takes holidays these days.",
        givenWord: "few",
        prefix: "She takes ",
        suffix: " holidays these days.",
        correctAnswer: ["very few"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 59,
        sentence1: "The company is unwilling to negotiate on the price.",
        givenWord: "prepared",
        prefix: "The company is not ",
        suffix: " on the price.",
        correctAnswer: ["prepared to negotiate"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 60,
        sentence1: "It's important to keep abreast of the latest developments.",
        givenWord: "informed",
        prefix: "It's important to keep ",
        suffix: " the latest developments.",
        correctAnswer: ["informed about"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 61,
        sentence1: "His arrogance makes him unpopular with his colleagues.",
        givenWord: "puts",
        prefix: "His arrogance ",
        suffix: " his colleagues.",
        correctAnswer: ["puts him off with"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 62,
        sentence1: "I really don't feel like celebrating tonight.",
        givenWord: "mood",
        prefix: "I'm not in the ",
        suffix: " tonight.",
        correctAnswer: ["mood for celebrating"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 63,
        sentence1: "They only got to the top because of favourable weather conditions.",
        givenWord: "it",
        prefix: "Had ",
        suffix: " been for favourable weather conditions, they wouldn't have got to the top.",
        correctAnswer: ["it not"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 64,
        sentence1: "She couldn't stop thinking about the accident.",
        givenWord: "mind",
        prefix: "The accident weighed heavily ",
        suffix: ".",
        correctAnswer: ["on her mind"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 65,
        sentence1: "I never had any doubt that he would succeed.",
        givenWord: "never",
        prefix: "It ",
        suffix: " his success.",
        correctAnswer: ["never crossed my mind that he would fail to achieve"], // Word count is 9, adjust if strict.
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 66,
        sentence1: "It's not worth trying to convince him.",
        givenWord: "point",
        prefix: "There's no ",
        suffix: " trying to convince him.",
        correctAnswer: ["point in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 67,
        sentence1: "They accused him of being responsible for the damage. ",
        givenWord: "blame",
        prefix: "They placed the ",
        suffix: " for the damage.",
        correctAnswer: ["blame on him"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 68,
        sentence1: "He is extremely pessimistic about the future.",
        givenWord: "gloomy",
        prefix: "He takes a ",
        suffix: " the future.",
        correctAnswer: ["gloomy view of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 69,
        sentence1: "You can rely on him to cause trouble.",
        givenWord: "count",
        prefix: "You can ",
        suffix: " trouble.",
        correctAnswer: ["count on him to cause"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 70,
        sentence1: "She didn't want to leave until she had finished her work.",
        givenWord: "reluctance",
        prefix: "It was with ",
        suffix: " she left before finishing her work.",
        correctAnswer: ["reluctance that"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 71,
        sentence1: "I couldn't help but admire her courage.",
        givenWord: "but",
        prefix: "I could do ",
        suffix: " admire her courage.",
        correctAnswer: ["nothing but"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 72,
        sentence1: "He promised to return my book as soon as possible.",
        givenWord: "word",
        prefix: "He ",
        suffix: " return my book as soon as possible.",
        correctAnswer: ["gave me his word he would"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 73,
        sentence1: "It is said that he is a brilliant scientist.",
        givenWord: "believed",
        prefix: "He is ",
        suffix: " a brilliant scientist.",
        correctAnswer: ["believed to be"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 74,
        sentence1: "She paid no attention to my warnings.",
        givenWord: "took",
        prefix: "She ",
        suffix: " my warnings.",
        correctAnswer: ["took no notice of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 75,
        sentence1: "He was so angry that he couldn't speak.",
        givenWord: "loss",
        prefix: "He was ",
        suffix: " words due to his anger.",
        correctAnswer: ["at a loss for"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 76,
        sentence1: "The government has introduced new measures to control inflation.",
        givenWord: "brought",
        prefix: "New measures have been ",
        suffix: " to control inflation.",
        correctAnswer: ["brought in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 77,
        sentence1: "Her success was unexpected.",
        givenWord: "by",
        prefix: "Her success came ",
        suffix: " to everyone.",
        correctAnswer: ["by surprise"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 78,
        sentence1: "I would rather you didn't smoke in here.",
        givenWord: "prefer",
        prefix: "I would ",
        suffix: " smoke in here.",
        correctAnswer: ["prefer it if you didn't"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 79,
        sentence1: "He didn't want to take sides in the dispute.",
        givenWord: "neutral",
        prefix: "He wanted to remain ",
        suffix: " the dispute.",
        correctAnswer: ["neutral in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 80,
        sentence1: "It's possible that he will arrive late.",
        givenWord: "chances",
        prefix: "The ",
        suffix: " he will arrive late.",
        correctAnswer: ["chances are that"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 81,
        sentence1: "She is constantly criticising my work.",
        givenWord: "finding",
        prefix: "She is always ",
        suffix: " my work.",
        correctAnswer: ["finding fault with"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 82,
        sentence1: "He's highly unlikely to win the election.",
        givenWord: "little",
        prefix: "There's ",
        suffix: " win the election.",
        correctAnswer: ["little chance that he'll"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 83,
        sentence1: "I regret not having studied harder for the exam.",
        givenWord: "wished",
        prefix: "I ",
        suffix: " harder for the exam.",
        correctAnswer: ["wished I had studied"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 84,
        sentence1: "She has been trying to finish the report all week.",
        givenWord: "efforts",
        prefix: "She has been making ",
        suffix: " the report all week.",
        correctAnswer: ["every effort to finish"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 85,
        sentence1: "You should make an effort to integrate with the team.",
        givenWord: "play",
        prefix: "You should ",
        suffix: " the team.",
        correctAnswer: ["play your part in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 86,
        sentence1: "The manager's decision was heavily criticized.",
        givenWord: "subject",
        prefix: "The manager's decision was ",
        suffix: " criticism.",
        correctAnswer: ["subject to heavy"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 87,
        sentence1: "He was surprised by the sudden increase in his salary.",
        givenWord: "caught",
        prefix: "He was ",
        suffix: " the sudden increase in his salary.",
        correctAnswer: ["caught by surprise by"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 88,
        sentence1: "She finally accepted the offer after much persuasion.",
        givenWord: "eventually",
        prefix: "She ",
        suffix: " to the offer after much persuasion.",
        correctAnswer: ["eventually agreed"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 89,
        sentence1: "I strongly advise you to reconsider your decision.",
        givenWord: "well",
        prefix: "You would ",
        suffix: " your decision.",
        correctAnswer: ["do well to reconsider"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 90,
        sentence1: "He found it hard to concentrate on his work.",
        givenWord: "difficulty",
        prefix: "He had ",
        suffix: " on his work.",
        correctAnswer: ["difficulty concentrating"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 91,
        sentence1: "His behaviour was totally out of character.",
        givenWord: "like",
        prefix: "It was not ",
        suffix: " so.",
        correctAnswer: ["like him to behave"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 92,
        sentence1: "They decided to get rid of the old furniture.",
        givenWord: "away",
        prefix: "They decided to ",
        suffix: " the old furniture.",
        correctAnswer: ["do away with"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 93,
        sentence1: "She is completely indifferent to his problems.",
        givenWord: "takes",
        prefix: "She ",
        suffix: " his problems.",
        correctAnswer: ["takes no interest in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 94,
        sentence1: "I can't stand noisy neighbours.",
        givenWord: "put",
        prefix: "I can't ",
        suffix: " noisy neighbours.",
        correctAnswer: ["put up with"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 95,
        sentence1: "He tried very hard to win the competition.",
        givenWord: "best",
        prefix: "He did ",
        suffix: " the competition.",
        correctAnswer: ["his best to win"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 96,
        sentence1: "It's my opinion that she should resign immediately.",
        givenWord: "view",
        prefix: "In my ",
        suffix: " she should resign immediately.",
        correctAnswer: ["view, I believe"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 97,
        sentence1: "The company decided to make a fresh start.",
        givenWord: "wipe",
        prefix: "The company decided to ",
        suffix: " and make a fresh start.",
        correctAnswer: ["wipe the slate clean"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 98,
        sentence1: "His efforts were ultimately unsuccessful.",
        givenWord: "no",
        prefix: "His efforts were ",
        suffix: " the end. ",
        correctAnswer: ["of no avail in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 99,
        sentence1: "I deeply regret having offended her.",
        givenWord: "wished",
        prefix: "I ",
        suffix: " her.",
        correctAnswer: ["wished I hadn't offended"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 100,
        sentence1: "People generally believe that he is a genius.",
        givenWord: "widely",
        prefix: "It is ",
        suffix: " that he is a genius.",
        correctAnswer: ["widely believed"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    }
];

let currentExerciseIndex = 0;
let score = 0;
let exercisesCompleted = 0;

const questionsContainer = document.getElementById('questionsContainer');
const checkAnswersBtn = document.getElementById('checkAnswersBtn');
const skipExerciseBtn = document.getElementById('skipExerciseBtn'); // NEW: Get the skip button
const nextExerciseBtn = document.getElementById('nextExerciseBtn');
const exerciseFeedback = document.getElementById('exerciseFeedback');
const currentScoreSpan = document.getElementById('currentScore');
const exercisesCompletedSpan = document.getElementById('exercisesCompleted');
const totalExercisesSpan = document.getElementById('totalExercises');
const exerciseProgressList = document.getElementById('exerciseProgressList');
const failSound = document.getElementById('failSound');
const successSound = document.getElementById('successSound');
const externalWordLookupInput = document.getElementById('externalWordLookupInput');
const searchExternalDictionaryBtn = document.getElementById('searchExternalDictionaryBtn');
const dictionaryIframe = document.getElementById('dictionaryIframe');
const showExampleAnswerBtn = document.getElementById('showExampleAnswerBtn');

// Set total exercises count, excluding the example (id: 0)
totalExercisesSpan.textContent = transformationExercises.length - 1;

function updateWordCount(inputId, countSpanId) {
    const inputField = document.getElementById(inputId);
    const countSpan = document.getElementById(countSpanId);
    if (inputField && countSpan) {
        const text = inputField.value.trim();
        const words = text === "" ? 0 : text.split(/\s+/).filter(word => word !== '').length;
        countSpan.textContent = `${words} words`;
    }
}

// Modified updateExerciseProgress to handle different statuses
function updateExerciseProgress(exerciseId, newStatus) { // newStatus can be 'correct', 'incorrect', 'skipped', 'pending'
    let listItem = document.getElementById(`progress-q${exerciseId}`);
    const exercise = transformationExercises.find(ex => ex.id === exerciseId);

    if (exercise) {
        // Only update if the new status is 'correct', or if the current status is 'pending' or 'incorrect'.
        // This prevents 'incorrect'/'skipped' from overwriting a 'correct' status if the user revisits.
        if (newStatus === 'correct' || exercise.status === 'pending' || exercise.status === 'incorrect' || exercise.status === 'skipped') {
             exercise.status = newStatus; // Update the internal status on the exercise object
        }
    }

    if (!listItem) {
        listItem = document.createElement('li');
        listItem.id = `progress-q${exerciseId}`;
        exerciseProgressList.appendChild(listItem);
    }

    // Update text content and class based on the exercise's *current* status
    switch (exercise.status) {
        case 'correct':
            listItem.textContent = `Question ${exerciseId}: ✔`;
            listItem.className = 'correct-progress';
            break;
        case 'incorrect':
            listItem.textContent = `Question ${exerciseId}: ✖`;
            listItem.className = 'incorrect-progress';
            break;
        case 'skipped':
            listItem.textContent = `Question ${exerciseId}: ↷ (Skipped)`; // Using Unicode arrow for skipped
            listItem.className = 'skipped-progress';
            break;
        case 'pending':
        default:
            listItem.textContent = `Question ${exerciseId}: Pending`;
            listItem.className = ''; // Or 'pending-progress' if you define one
            break;
    }
}

function loadExercise() {
    // Handle the example exercise first (ID 0)
    const example = transformationExercises[0];
    const exampleInput = document.getElementById('exampleInput');
    const exampleFeedback = document.getElementById('exampleFeedback');
    const exampleWordCount = document.getElementById('exampleWordCount');

    // Reset example
    if (exampleInput) {
        exampleInput.value = "";
        exampleInput.disabled = false;
    }
    if (exampleFeedback) {
        exampleFeedback.style.display = 'none';
        exampleFeedback.classList.remove('correct', 'incorrect');
    }
    updateWordCount('exampleInput', 'exampleWordCount');
    if (showExampleAnswerBtn) {
        showExampleAnswerBtn.style.display = 'inline-block';
    }

    // Determine which exercise to load:
    if (currentExerciseIndex === 0) {
        currentExerciseIndex = 1; // Start with the first *actual* exercise (ID 1)
    }

    const exercise = transformationExercises[currentExerciseIndex];

    if (!exercise) {
        questionsContainer.innerHTML = "<p>All exercises completed! Great job!</p>";
        checkAnswersBtn.style.display = 'none';
        skipExerciseBtn.style.display = 'none'; // Hide skip button on completion
        nextExerciseBtn.style.display = 'none';
        exerciseFeedback.textContent = "You've finished all exercises!";
        exerciseFeedback.className = 'feedback-message correct';
        exerciseFeedback.style.display = 'block';
        return;
    }

    questionsContainer.innerHTML = `
        <div class="transformation-question" data-id="${exercise.id}">
            <p>${exercise.id}. ${exercise.sentence1}</p>
            <p class="given-word">Word Given: ${exercise.givenWord}</p>
            <p><span class="input-sentence-part">${exercise.prefix}</span><input type="text" id="q${exercise.id}Input" class="transformation-input" placeholder="Enter your answer" onkeyup="updateWordCount('q${exercise.id}Input', 'q${exercise.id}WordCount')"><span class="input-sentence-part">${exercise.suffix}</span></p>
            <span class="word-count" id="q${exercise.id}WordCount">0 words</span>
            <div class="feedback-line" id="q${exercise.id}Feedback"></div>
        </div>
    `;

    updateWordCount(`q${exercise.id}Input`, `q${exercise.id}WordCount`);

    exerciseFeedback.style.display = 'none';
    checkAnswersBtn.style.display = 'inline-block';
    skipExerciseBtn.style.display = 'inline-block'; // Show skip button for new questions
    nextExerciseBtn.style.display = 'none'; // Hide next until check or skip
}


function checkAnswers() {
    // Check the example first
    const exampleInput = document.getElementById('exampleInput');
    const exampleFeedback = document.getElementById('exampleFeedback');
    const example = transformationExercises[0]; // The example exercise
    const exampleUserAnswer = exampleInput.value.trim().toLowerCase();
    const exampleUserWords = exampleUserAnswer.split(/\s+/).filter(word => word !== '');

    exampleFeedback.style.display = 'block';

    let isExampleCorrect = false;
    for (const correctOpt of example.correctAnswer) {
        if (exampleUserAnswer === correctOpt.toLowerCase() &&
            exampleUserWords.length >= example.minWords &&
            exampleUserWords.length <= example.maxWords &&
            exampleUserAnswer.includes(example.givenWord.toLowerCase())) {
            isExampleCorrect = true;
            break;
        }
    }

    if (isExampleCorrect) {
        exampleFeedback.textContent = `Correct! (${exampleUserWords.length} words)`;
        exampleFeedback.className = 'feedback-line correct';
        exampleInput.disabled = true;
        showExampleAnswerBtn.style.display = 'none';
    } else {
        let exampleFeedbackMessage = `Incorrect. `;
        if (!exampleUserAnswer.includes(example.givenWord.toLowerCase())) {
            exampleFeedbackMessage += `You must use the word "${example.givenWord}". `;
        }
        if (exampleUserWords.length < example.minWords || exampleUserWords.length > example.maxWords) {
            exampleFeedbackMessage += `You must use between ${example.minWords} and ${example.maxWords} words. You used ${exampleUserWords.length}. `;
        }
        if (exampleFeedbackMessage === `Incorrect. `) {
             exampleFeedbackMessage += `Review instructions or use "Show Answer".`;
        }
        exampleFeedback.textContent = exampleFeedbackMessage;
        exampleFeedback.className = 'feedback-line incorrect';
    }


    // Now check the current actual exercise
    const exercise = transformationExercises[currentExerciseIndex];
    if (!exercise) return;

    const inputField = document.getElementById(`q${exercise.id}Input`);
    const feedbackLine = document.getElementById(`q${exercise.id}Feedback`);

    const userAnswer = inputField.value.trim();
    const normalizedUserAnswer = userAnswer.toLowerCase();
    const givenWord = exercise.givenWord.toLowerCase();

    const userWords = userAnswer.split(/\s+/).filter(word => word !== '');
    const wordCount = userWords.length;

    feedbackLine.style.display = 'block';

    let isCurrentExerciseCorrect = false;
    // Check for "never crossed my mind that he would fail to achieve" (9 words)
    // If you want to strictly enforce 8 words max, then check length *before* this loop,
    // and if over 8, mark as incorrect immediately.
    if (wordCount >= exercise.minWords && wordCount <= exercise.maxWords) {
        for (const correctOpt of exercise.correctAnswer) {
            if (normalizedUserAnswer === correctOpt.toLowerCase() &&
                normalizedUserAnswer.includes(givenWord)) { // Given word check is already included in correct answer string
                isCurrentExerciseCorrect = true;
                break;
            }
        }
    }


    if (isCurrentExerciseCorrect) {
        currentExerciseFeedbackMessage = `Correct! (${wordCount} words)`;
        feedbackLine.className = 'feedback-line correct';
        successSound.play();
        if (exercise.status !== 'correct') { // Only increment if not already marked correct
            score++;
            exercisesCompleted++;
            // Update the progress in the sidebar
            updateExerciseProgress(exercise.id, 'correct');
        }
    } else {
        currentExerciseFeedbackMessage = "Incorrect. ";
        // Provide specific feedback if possible
        if (wordCount < exercise.minWords || wordCount > exercise.maxWords) {
            currentExerciseFeedbackMessage += `You must use between ${exercise.minWords} and ${exercise.maxWords} words. You used ${wordCount}. `;
        } else if (!normalizedUserAnswer.includes(givenWord)) {
            currentExerciseFeedbackMessage += `You must use the word "${exercise.givenWord}". `;
        }
        if (currentExerciseFeedbackMessage === "Incorrect. ") {
            currentExerciseFeedbackMessage += `Please review the instructions and try again.`;
        }
        feedbackLine.className = 'feedback-line incorrect';
        failSound.play();
        // Update the progress in the sidebar as incorrect
        if (exercise.status !== 'correct') { // Don't overwrite 'correct' if already correct
            updateExerciseProgress(exercise.id, 'incorrect');
        }
    }
    feedbackLine.textContent = currentExerciseFeedbackMessage;


    currentScoreSpan.textContent = score;
    exercisesCompletedSpan.textContent = exercisesCompleted;

    // After checking, allow navigation via Next or Skip
    nextExerciseBtn.style.display = 'inline-block';
    // Keep Check Answers visible if incorrect for re-attempts, hide if correct
    checkAnswersBtn.style.display = isCurrentExerciseCorrect ? 'none' : 'inline-block';
    skipExerciseBtn.style.display = 'inline-block'; // Keep skip visible
}

function showExampleAnswer() {
    const example = transformationExercises[0];
    const exampleInput = document.getElementById('exampleInput');
    const exampleFeedback = document.getElementById('exampleFeedback');

    if (exampleInput && exampleFeedback) {
        exampleInput.value = example.correctAnswer[0];
        updateWordCount('exampleInput', 'exampleWordCount');
        exampleFeedback.textContent = `Correct Answer: "${example.correctAnswer[0]}"`;
        exampleFeedback.className = 'feedback-line correct';
        exampleFeedback.style.display = 'block';
        exampleInput.disabled = true;
        showExampleAnswerBtn.style.display = 'none';
        // Mark example as correct in sidebar too
        updateExerciseProgress(example.id, 'correct');
    }
}

// NEW: Function to handle skipping an exercise
function skipExercise() {
    const exercise = transformationExercises[currentExerciseIndex];
    if (exercise && exercise.status !== 'correct') { // Don't overwrite if already correct
        updateExerciseProgress(exercise.id, 'skipped');
    }
    nextExercise(); // Move to the next exercise
}


function nextExercise() {
    currentExerciseIndex++;
    if (currentExerciseIndex < transformationExercises.length) {
        loadExercise();
    } else {
        questionsContainer.innerHTML = "<p>All exercises completed! Great job!</p>";
        checkAnswersBtn.style.display = 'none';
        skipExerciseBtn.style.display = 'none'; // Hide skip button on completion
        nextExerciseBtn.style.display = 'none';
        exerciseFeedback.textContent = "You've finished all exercises!";
        exerciseFeedback.className = 'feedback-message correct';
        exerciseFeedback.style.display = 'block';
    }
}

// Event Listeners
checkAnswersBtn.addEventListener('click', checkAnswers);
skipExerciseBtn.addEventListener('click', skipExercise); // NEW: Event listener for skip button
nextExerciseBtn.addEventListener('click', nextExercise);
showExampleAnswerBtn.addEventListener('click', showExampleAnswer);


searchExternalDictionaryBtn.addEventListener('click', () => {
    const word = externalWordLookupInput.value.trim();
    if (word) {
        dictionaryIframe.src = `https://www.merriam-webster.com/dictionary/${word}`;
    }
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM content loaded. Initializing progress list.");
    // Ensure the list is cleared before re-populating to prevent duplicates on some reloads
    exerciseProgressList.innerHTML = '';

    // Initialize progress list for all exercises (including example)
    // We iterate over the entire array now to set initial 'pending' status for all.
    transformationExercises.forEach(exercise => {
        // Ensure each exercise object has a status property initialized to 'pending' if not already set
        if (!exercise.status) {
            exercise.status = 'pending';
        }
        // Use the new updateExerciseProgress function to set initial state in the sidebar
        updateExerciseProgress(exercise.id, exercise.status);
        console.log(`Initialized Question ${exercise.id} with status: ${exercise.status}.`);
    });

    loadExercise();
    console.log("loadExercise called.");
});