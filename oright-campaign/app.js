const quizData = [
    {
        q: "凌晨一點鐘，你通常在...？",
        options: [
            { text: "跟被窩融為一體，夢到發大財。", score: 3, id: 'A' },
            { text: "靈魂被手機吸走，小紅書停不下來。", score: 1, id: 'B' },
            { text: "咖啡就是我的血，正在趕報告/工作。", score: 0, id: 'C' }
        ]
    },
    {
        q: "你的「靈魂糧食」（宵夜/飲食）通常是哪一派？",
        options: [
            { text: "溫熱牛奶或低卡水果，我是養生小仙女。", score: 3, id: 'A' },
            { text: "鹹酥雞加珍珠奶茶，那是壓力大時的救贖。", score: 1, id: 'B' },
            { text: "忙到忘記吃飯，只好隨便抓個泡麵墊肚子。", score: 0, id: 'C' }
        ]
    },
    {
        q: "洗完頭撐到隔天下午，你的髮根感覺是...？",
        options: [
            { text: "乾乾爽爽，像剛曬過的被子。", score: 3, id: 'A' },
            { text: "開始有存在感，扁塌預警中。", score: 1, id: 'B' },
            { text: "已經可以炸薯條了，油光閃閃。", score: 0, id: 'C' }
        ]
    },
    {
        q: "洗完頭髮後的「排水孔景象」看起來像？",
        options: [
            { text: "清爽乾淨，只有三兩根，它們很愛我。", score: 3, id: 'A' },
            { text: "集合了一小團，大概是正常代謝吧？", score: 1, id: 'B' },
            { text: "像有一隻黑色小貓在那裡溺水，慘不忍睹。", score: 0, id: 'C' }
        ]
    },
    {
        q: "關於「染髮與燙髮」，你的頭毛最近經歷了什麼？",
        options: [
            { text: "它們是清白之身，健康得很。", score: 3, id: 'A' },
            { text: "為了跟上潮流，剛換了個亮色或大波浪。", score: 1, id: 'B' },
            { text: "漂了又染、染了又燙，現在是「稻草模式」。", score: 0, id: 'C' }
        ]
    },
    {
        q: "關於「吹乾頭髮」這件事，你的風格是？",
        options: [
            { text: "馬上吹乾！不然頭會痛，對髮質也不好。", score: 3, id: 'A' },
            { text: "包著毛巾當印度阿三，等心情好再吹。", score: 1, id: 'B' },
            { text: "自然風萬歲！直接躺平睡覺去。", score: 0, id: 'C' }
        ]
    },
    {
        q: "早上出門前，你願意花多少時間在頭髮上？",
        options: [
            { text: "半小時！吹整、電捲棒樣樣來，要美美的。", score: 3, id: 'A' },
            { text: "五分鐘，噴個保濕霧、隨手抓兩下就極限了。", score: 1, id: 'B' },
            { text: "零分鐘，起床長怎樣就出門。", score: 0, id: 'C' }
        ]
    },
    {
        q: "看到網紅大推一款「評價超高但偏貴的護髮油」？",
        options: [
            { text: "只要能讓頭髮發光，錢錢變成喜歡的樣子也沒關係！", score: 3, id: 'A' },
            { text: "先存起來，等藥妝店「買一送一」或特價再衝。", score: 1, id: 'B' },
            { text: "護髮油是什麼？我連洗面乳都在順便洗頭了。", score: 0, id: 'C' }
        ]
    },
    {
        q: "當有人推薦你用「頭皮精華」或「養髮液」時？",
        options: [
            { text: "感覺很高級！頭皮也是臉的延伸，保養要到位。", score: 3, id: 'A' },
            { text: "那不是快禿頭的人才在用的嗎？離我還很遠啦。", score: 1, id: 'B' },
            { text: "太麻煩了吧，這錢我拿去買飲料還比較快樂。", score: 0, id: 'C' }
        ]
    },
    {
        q: "假日出門跟朋友聚會，你最在意哪部分？",
        options: [
            { text: "整體氛圍感！頭髮要有捲度，妝容也要精緻。", score: 3, id: 'A' },
            { text: "只要拍照好看就好，局部補個口紅我就能出發。", score: 1, id: 'B' },
            { text: "戴個帽子就出門，臉上有防曬就好。", score: 0, id: 'C' }
        ]
    },
    {
        q: "如果現在要拍美照，你覺得你的頭髮會幫你加分還是扣分？",
        options: [
            { text: "當然加分，它是我最亮眼的配件！", score: 3, id: 'A' },
            { text: "勉強及格，但如果有更強的修護感會更好。", score: 1, id: 'B' },
            { text: "拜託別拍到頭髮，那是一場災難。", score: 0, id: 'C' }
        ]
    },
    {
        q: "如果頭髮現在會說話，它最想對你說的「真心話」是？",
        options: [
            { text: "謝謝主人，我覺得我現在閃閃發亮～", score: 3, id: 'A' },
            { text: "主人，可以給我一點好喝的水分嗎？我好渴...", score: 1, id: 'B' },
            { text: "別再熬夜了，我要打包行李搬家（掉落）了！", score: 0, id: 'C' }
        ]
    }
];

const personalities = [
    {
        id: 1,
        name: "【髮界富養貴婦人】",
        scoreRange: [30, 36],
        condition: (answers) => answers[8] === 'A',
        health: 95,
        quote: "「主人，感謝你的精緻護理，我很閃亮！請繼續維持這份五星級的寵愛。」",
        desc: "你的髮絲活在五星級飯店裡。你有極佳的護理觀念，將頭皮視為臉部的延伸，追求原生髮質的極致光澤與健康質感。",
        tips: "洗頭前先用梳子輕柔按摩頭皮，洗完頭後務必先塗抹護髮油再吹乾，鎖住髮絲水分。",
        emoji: "👑",
        faceX: 149.5, faceY: 188.5, faceW: 75, faceH: 95,
        products: [
            { name: "咖啡因養髮液", desc: "強效活絡頭皮環境，維持頂級質感", price: "$4,930", imgUrl: "images/咖啡因養髮液.png", img: "🧴" },
            { name: "曠野玫瑰洗髮精", desc: "針對追求極致柔順的精緻族群", price: "$1,080", imgUrl: "images/曠野玫瑰洗髮精.png", img: "🌹" }
        ]
    },
    {
        id: 2,
        name: "【氛圍感百變魔法師】",
        scoreRange: [15, 30],
        condition: (answers) => answers[6] === 'A' && answers[9] === 'A',
        health: 55,
        quote: "「雖然我現在看起來很美，但我的毛鱗片在吶喊救命！染燙的熱能真的讓我很累。」",
        desc: "頭髮是你的命，造型是你的魂！即使因頻繁染燙稍有受損，你也會花半小時打造完美氛圍感。你是視覺至上主義，只要拍照漂亮，一切都值得。",
        tips: "使用電棒或造型工具前必噴抗熱噴霧，每週至少進行一次 15 分鐘的深層髮膜修護。",
        emoji: "✨",
        faceX: 149.5, faceY: 188.5, faceW: 75, faceH: 95,
        products: [
            { name: "曠野玫瑰護髮油", desc: "染燙受損髮專屬的彈韌潤澤", price: "$1,330", imgUrl: "images/曠野玫瑰護髮油.png", img: "💧" },
            { name: "紫玫瑰護色洗髮精", desc: "保護髮色並修護脆弱髮絲", price: "$980", imgUrl: "images/紫玫瑰護色洗髮精.png", img: "🌸" }
        ]
    },
    {
        id: 3,
        name: "【爆肝脫髮守夜人】",
        scoreRange: [0, 17],
        condition: (answers) => answers[0] === 'C',
        health: 25,
        quote: "「主人，如果你再不睡覺，我要打包行李搬家（掉髮）了！咖啡是你的血，但不是我的水。」",
        desc: "你的頭髮正在寫辭職信。你是典型的都市高壓族，熬夜是常態，排水孔是你最害怕的風景。你的毛囊正處於極度生存危機中。",
        tips: "盡量在 11 點前關燈，讓頭皮微循環有時間重啟；頭皮緊繃時可隨手噴灑茶樹噴霧降溫。",
        emoji: "🦉",
        faceX: 149.5, faceY: 191.5, faceW: 75, faceH: 95,
        products: [
            { name: "咖啡因養髮液", desc: "這是救命級的最後停損點", price: "$4,930", imgUrl: "images/咖啡因養髮液.png", img: "☕" },
            { name: "茶樹洗髮精", desc: "解決出油與敏感問題，維持舒爽", price: "$980", imgUrl: "images/茶樹洗髮精.png", img: "🌿" }
        ]
    },
    {
        id: 4,
        name: "【省錢小資護髮戰士】",
        scoreRange: [18, 29],
        condition: (answers) => answers[7] === 'B',
        health: 70,
        quote: "「我的命不只 100 塊！與其買便宜化學洗劑，不如給我一罐成分天然的，我會報答你的。」",
        desc: "你很愛美，但更愛聰明消費。你會在折扣季掃貨，追求高 CP 值的護理方案。「買一送一」對你來說才是最美的風景。",
        tips: "選對成分比容量更重要，減少洗頭次數並挑選無矽靈產品，保護毛囊不被阻塞。",
        emoji: "💰",
        faceX: 149.5, faceY: 191.5, faceW: 75, faceH: 95,
        products: [
            { name: "咖啡因洗髮精", desc: "單價雖高但成分天然，是對抗掉髮的長遠投資", price: "$1,080", img: "🧴" }
        ]
    },
    {
        id: 5,
        name: "【天生麗質幸運兒】",
        scoreRange: [25, 29],
        condition: (answers) => answers[6] === 'C' && answers[8] === 'C',
        health: 85,
        quote: "「雖然我天生好命，但你也不能完全不理我，偶爾給我喝點營養的水好嗎？」",
        desc: "擁有強大基因的優勢，即使不特別費心保養，髮絲依舊強韌亮眼。你就是那種「起床就長這樣」的幸運兒。",
        tips: "即使懶得保養，洗完頭也請 100% 吹乾，避免濕氣讓頭皮滋生細菌造成異味。",
        emoji: "🍀",
        faceX: 149.5, faceY: 196.5, faceW: 75, faceH: 95,
        products: [
            { name: "桃花豐盈洗髮精", desc: "讓原本就好的髮質更蓬鬆有彈性", price: "$980", imgUrl: "images/桃花豐盈洗髮精.png", img: "🍑" }
        ]
    },
    {
        id: 6,
        name: "【隨緣放鬆佛系毛囊】",
        scoreRange: [0, 18],
        condition: (answers) => answers[6] === 'C',
        health: 45,
        quote: "「雖然我隨緣，但你再不理我，我就要隨風而去了（掉落地上）。」",
        desc: "自然就是美（其實是懶）。你拒絕複雜步驟與瓶瓶罐罐，追求「一瓶搞定」的極簡護理。",
        tips: "懶得保養也沒關係，但洗髮精要選大容量、成分天然的，至少確保清潔力到位。",
        emoji: "🧘",
        faceX: 149.5, faceY: 179.5, faceW: 75, faceH: 95,
        products: [
            { name: "綠茶洗髮精 1000mL", desc: "大容量最划算，適合追求簡單不麻煩的使用者", price: "$1,780", imgUrl: "images/綠茶洗髮精1000ml.png", img: "🍵" },
            { name: "咖啡因護髮素 1000mL", desc: "大罐用更久", price: "$2,280", imgUrl: "images/咖啡因護髮素1000ml.png", img: "🌿" }
        ]
    },
    {
        id: 7,
        name: "【穩定發揮模範生】",
        scoreRange: [0, 99], // Fallback
        condition: () => true,
        health: 75,
        quote: "「一切都很穩定，請繼續維持這個保養節奏，不要隨便亂換不適合的產品。」",
        desc: "生活規律、適度護理，你是最穩定的中堅份子。髮質狀態穩定，維持目前的平衡就是你的勝利。",
        tips: "每天洗澡時花 1 分鐘按摩頭皮促進血液循環，幫助頭髮獲取充足營養。",
        emoji: "📚",
        faceX: 149.5, faceY: 202.5, faceW: 75, faceH: 95,
        products: [
            { name: "綠茶洗髮精", desc: "清新舒暢，適合一般髮質長期穩定使用", price: "$980", imgUrl: "images/綠茶洗髮精.png", img: "🍵" },
            { name: "頭皮清新噴霧", desc: "隨手噴灑維持整天清新", price: "$330", imgUrl: "images/頭皮清新噴霧.png", img: "💨" }
        ]
    }
];

// App State
let currentQuestionIndex = 0;
let userAnswers = [];
let totalScore = 0;
let stream = null;
let capturedPhoto = null;
let videoElement = null;
let matchedPersonality = null;

// DOM Elements
const screens = document.querySelectorAll('.screen');
const startBtn = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');
const progressFill = document.getElementById('progress-fill');
const currentQText = document.getElementById('current-q');
const captureBtn = document.getElementById('capture-btn');
const uploadBtn = document.getElementById('upload-btn');
const cameraStreamPlaceholder = document.querySelector('.camera-stream-placeholder');
const countdownOverlay = document.getElementById('countdown');
const flashOverlay = document.getElementById('flash');
const restartBtn = document.getElementById('restart-btn');
const submitEmailBtn = document.getElementById('submit-email');
const emailInput = document.getElementById('email-input');
const retakeBtn = document.getElementById('retake-btn');

// Navigation
function showScreen(id) {
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

// Start Quiz
startBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    userAnswers = [];
    totalScore = 0;
    showScreen('quiz');
    renderQuestion(currentQuestionIndex);
    updateProgress();
});

// Render Question
function renderQuestion(index) {
    const qData = quizData[index];
    
    const card = document.createElement('div');
    card.className = 'quiz-card incoming';
    
    // Create mascot container above the question
    const mascotContainer = document.createElement('div');
    mascotContainer.className = 'quiz-mascot-container';
    const mascotImg = document.createElement('img');
    mascotImg.src = 'images/quiz_mascot.png';
    mascotImg.className = 'quiz-mascot-image';
    mascotImg.alt = 'Mascot';
    mascotContainer.appendChild(mascotImg);
    
    const qTitle = document.createElement('h2');
    qTitle.className = 'quiz-question';
    qTitle.textContent = `${index + 1}. ${qData.q}`;
    
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'quiz-options';
    
    qData.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = opt.text;
        btn.addEventListener('click', () => handleOptionSelect(btn, opt, card));
        optionsContainer.appendChild(btn);
    });
    
    card.appendChild(mascotContainer);
    card.appendChild(qTitle);
    card.appendChild(optionsContainer);
    
    quizContainer.appendChild(card);
    
    // Trigger reflow to animate in
    setTimeout(() => {
        card.classList.remove('incoming');
        card.classList.add('active');
    }, 50);
}

// Handle Selection
function handleOptionSelect(btn, opt, currentCard) {
    // Prevent multiple clicks on the same card
    if (currentCard.classList.contains('answered')) return;
    currentCard.classList.add('answered');
    
    btn.classList.add('selected');
    userAnswers.push(opt.id);
    totalScore += opt.score;
    
    setTimeout(() => {
        currentCard.classList.remove('active');
        currentCard.classList.add('outgoing');
        
        currentQuestionIndex++;
        updateProgress();
        
        if (currentQuestionIndex < quizData.length) {
            renderQuestion(currentQuestionIndex);
        } else {
            // Quiz finished
            matchedPersonality = calculatePersonality();
            setTimeout(() => {
                showScreen('camera');
                initCamera();
            }, 400);
        }
        
        // Clean up old card
        setTimeout(() => {
            currentCard.remove();
        }, 400);
        
    }, 500); // Wait for checkmark animation
}

function updateProgress() {
    const percent = (currentQuestionIndex / quizData.length) * 100;
    progressFill.style.width = `${percent}%`;
    currentQText.textContent = Math.min(currentQuestionIndex + 1, quizData.length);
}

// Camera Logic
async function initCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
        const video = document.createElement('video');
        video.srcObject = stream;
        video.autoplay = true;
        video.playsInline = true;
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'cover';
        video.style.transform = 'scaleX(-1)'; // Fix mirror effect
        videoElement = video;
        
        cameraStreamPlaceholder.innerHTML = '';
        cameraStreamPlaceholder.appendChild(video);
        
        cameraStreamPlaceholder.innerHTML = '';
        cameraStreamPlaceholder.appendChild(video);
        
    } catch (err) {
        console.warn('Camera access denied or unavailable', err);
        cameraStreamPlaceholder.innerHTML = '<div style="display:flex;height:100%;align-items:center;justify-content:center;color:#888;">📷 模擬相機畫面</div>';
    }
}





function stopCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
}

captureBtn.addEventListener('click', () => {
    let count = 3;
    countdownOverlay.textContent = count;
    countdownOverlay.classList.remove('hidden');
    
    const interval = setInterval(async () => {
        count--;
        if (count > 0) {
            countdownOverlay.textContent = count;
        } else {
            clearInterval(interval);
            countdownOverlay.classList.add('hidden');
            
            // Flash effect
            flashOverlay.classList.remove('hidden');
            setTimeout(() => flashOverlay.classList.add('active'), 10);
            
            // 1. Immediately capture the canvas while video is still playing
            const canvas = document.createElement('canvas');
            if (videoElement) {
                canvas.width = videoElement.videoWidth || 640;
                canvas.height = videoElement.videoHeight || 480;
                const ctx = canvas.getContext('2d');
                ctx.translate(canvas.width, 0);
                ctx.scale(-1, 1);
                ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                capturedPhoto = canvas.toDataURL('image/jpeg');
            }
            
            // 2. Stop camera and hide flash
            stopCamera();
            setTimeout(() => {
                flashOverlay.classList.remove('active');
                setTimeout(() => flashOverlay.classList.add('hidden'), 100);
            }, 100);
            
            // 3. Immediately show loading screen
            showScreen('loading');
            startLoadingSequence();
        }
    }, 1000);
});

uploadBtn.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = async (event) => {
                const img = new Image();
                img.onload = async () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    capturedPhoto = canvas.toDataURL('image/jpeg');
                    
                    stopCamera();
                    showScreen('loading');
                    startLoadingSequence();
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    input.click();
});

// Loading Sequence
function startLoadingSequence() {
    const textEl = document.getElementById('loading-text');
    const texts = [
        "正在分析生活作息...",
        "正在診斷頭皮健康度...",
        "為你生成專屬毛囊寶寶..."
    ];
    let i = 0;
    
    const textInterval = setInterval(() => {
        i++;
        if (i < texts.length) {
            textEl.textContent = texts[i];
        } else {
            clearInterval(textInterval);
            generateResult();
            const resultScreen = document.getElementById('result');
            resultScreen.scrollTop = 0; // Ensure scroll is at the top
            showScreen('result');
        }
    }, 1500);
}

// Calculate Result Logic
function calculatePersonality() {
    let matchedResult = null;
    for (let p of personalities) {
        if (p.id === 7) { // Fallback
            matchedResult = p;
            break;
        }
        
        const inScoreRange = totalScore >= p.scoreRange[0] && totalScore <= p.scoreRange[1];
        if (inScoreRange || (p.id === 3 && userAnswers[0] === 'C')) {
            if (p.condition(userAnswers)) {
                matchedResult = p;
                break;
            }
        }
    }
    return matchedResult;
}

// Generate Result
function generateResult() {
    // If somehow matchedPersonality isn't set, calculate it
    if (!matchedPersonality) {
        matchedPersonality = calculatePersonality();
    }
    let matchedResult = matchedPersonality;
    
    // Populate UI
    document.getElementById('result-title').textContent = matchedResult.name;
    document.getElementById('result-quote').textContent = matchedResult.quote;
    document.getElementById('result-desc').textContent = matchedResult.desc;
    document.getElementById('result-tips').textContent = matchedResult.tips;
    
    const avatarImg = document.getElementById('result-avatar');
    
    if (capturedPhoto) {
        const imageName = 'images/頭相框/' + matchedResult.name.replace('【', '').replace('】', '') + '.png';
        const sourceImg = new Image();
        
        sourceImg.onload = () => {
            // Final canvas where we merge photo and illustration
            const finalCanvas = document.createElement('canvas');
            finalCanvas.width = 300; 
            finalCanvas.height = 300;
            const ctx = finalCanvas.getContext('2d');
            
            // 1. Define the face area using the detected hole parameters for the matched follicle baby
            const targetFaceW = matchedResult.faceW || 75;
            const targetFaceH = matchedResult.faceH || 95;
            const targetFaceX = matchedResult.faceX || 149.5;
            const targetFaceY = matchedResult.faceY || 191.5;
            
            // 2. Draw the user's photo only inside the face area (removes background)
            const userImg = new Image();
            userImg.onload = () => {
                ctx.save();
                ctx.beginPath();
                ctx.ellipse(targetFaceX, targetFaceY, targetFaceW/2, targetFaceH/2, 0, 0, 2 * Math.PI);
                ctx.clip();
                
                // Map the face from the viewfinder to the final canvas perfectly
                const viewfinderW = 280;
                const viewfinderH = 380;
                const guideCx = viewfinderW * 0.5;
                const guideCy = viewfinderH * 0.55;
                const guideW = 120;
                
                // How the video was scaled and positioned in the viewfinder preview
                const scaleViewfinder = Math.max(viewfinderW / userImg.width, viewfinderH / userImg.height);
                const videoX = (viewfinderW - userImg.width * scaleViewfinder) / 2;
                const videoY = (viewfinderH - userImg.height * scaleViewfinder) / 2;
                
                // The center of the face in the original captured image
                const faceOrigCx = (guideCx - videoX) / scaleViewfinder;
                const faceOrigCy = (guideCy - videoY) / scaleViewfinder;
                
                // The scale needed to make the face fit targetFaceW precisely
                const scaleFinal = (targetFaceW / guideW) * scaleViewfinder;
                
                const w = userImg.width * scaleFinal;
                const h = userImg.height * scaleFinal;
                const x = targetFaceX - faceOrigCx * scaleFinal;
                const y = targetFaceY - faceOrigCy * scaleFinal;
                
                ctx.drawImage(userImg, x, y, w, h);
                ctx.restore();
                
                // 3. Prepare the illustration layer with a hole punched out for the face
                const overlayCanvas = document.createElement('canvas');
                overlayCanvas.width = finalCanvas.width;
                overlayCanvas.height = finalCanvas.height;
                const oCtx = overlayCanvas.getContext('2d');
                
                const cropX = 224;
                const cropY = 92;
                const cropW = 1600;
                const cropH = 1600;
                
                // Draw illustration
                oCtx.drawImage(sourceImg, cropX, cropY, cropW, cropH, 0, 0, overlayCanvas.width, overlayCanvas.height);
                
                // Punch a hole
                oCtx.globalCompositeOperation = 'destination-out';
                oCtx.beginPath();
                oCtx.ellipse(targetFaceX, targetFaceY, targetFaceW/2, targetFaceH/2, 0, 0, 2 * Math.PI);
                oCtx.fill();
                oCtx.globalCompositeOperation = 'source-over';
            
                // 3. Draw the illustration layer over the base photo
                ctx.drawImage(overlayCanvas, 0, 0);
                
                // Bypass toDataURL SecurityError by directly appending the canvas!
                avatarImg.style.backgroundImage = 'none';
                avatarImg.innerHTML = ''; // Remove any old canvas or text
                
                // Style the canvas to fill the container without forcing a circle shape
                finalCanvas.style.width = '100%';
                finalCanvas.style.height = '100%';
                finalCanvas.style.objectFit = 'contain'; // Changed to contain so full shape is visible
                // Removed border-radius so the character's natural shape acts as the frame
                
                avatarImg.appendChild(finalCanvas);
            };
            userImg.src = capturedPhoto;
        };
        sourceImg.src = imageName;
    } else {
        avatarImg.style.backgroundImage = 'none';
        avatarImg.textContent = matchedResult.emoji;
    }
    
    // Animate Score
    setTimeout(() => {
        document.getElementById('result-score-fill').style.width = `${matchedResult.health}%`;
        
        // Number counter animation
        let currentNum = 0;
        const scoreEl = document.getElementById('result-score');
        const numInterval = setInterval(() => {
            currentNum += 2;
            if (currentNum >= matchedResult.health) {
                currentNum = matchedResult.health;
                clearInterval(numInterval);
            }
            scoreEl.textContent = `${currentNum}%`;
        }, 30);
    }, 500);
    
    // Populate Products
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    matchedResult.products.forEach(prod => {
        const imgContent = prod.imgUrl ? `<img src="${prod.imgUrl}" alt="${prod.name}">` : prod.img;
        productList.innerHTML += `
            <div class="product-card">
                <div class="product-img">${imgContent}</div>
                <div class="product-info">
                    <h4>${prod.name}</h4>
                    <p>${prod.desc}</p>
                    <div class="price">${prod.price}</div>
                </div>
            </div>
        `;
    });
}

// CRM Logic
submitEmailBtn.addEventListener('click', () => {
    if (emailInput.value && emailInput.value.includes('@')) {
        submitEmailBtn.textContent = '已送達！';
        submitEmailBtn.style.background = '#ddd';
        submitEmailBtn.style.color = '#666';
        fireConfetti();
    } else {
        alert('請輸入有效的 Email 哦！');
    }
});

restartBtn.addEventListener('click', () => {
    showScreen('landing');
    document.getElementById('result-score-fill').style.width = '0%';
    document.getElementById('result-score').textContent = '0%';
    capturedPhoto = null;
    userFaceFeatures = null;
    videoElement = null;
    const avatarImg = document.getElementById('result-avatar');
    if (avatarImg) {
        avatarImg.innerHTML = '';
        avatarImg.style.backgroundImage = 'none';
        avatarImg.textContent = '';
    }
    
    // Reset scroll position
    document.getElementById('result').scrollTop = 0;
});

retakeBtn.addEventListener('click', () => {
    capturedPhoto = null;
    const avatarImg = document.getElementById('result-avatar');
    if (avatarImg) {
        avatarImg.innerHTML = '';
        avatarImg.style.backgroundImage = 'none';
        avatarImg.textContent = '';
    }
    showScreen('camera');
    initCamera();
});

// Simple Confetti Effect
function fireConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#8CC63F', '#DFF0D8', '#FDE8E9', '#FDFBF7'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.opacity = Math.random() + 0.5;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        container.appendChild(confetti);
        
        const animation = confetti.animate([
            { transform: `translate3d(0,0,0) rotate(0deg)`, opacity: 1 },
            { transform: `translate3d(${Math.random()*200 - 100}px, 100vh, 0) rotate(${Math.random()*720}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 2000 + 1000,
            easing: 'cubic-bezier(.37,0,.63,1)'
        });
        
        animation.onfinish = () => confetti.remove();
    }
}
