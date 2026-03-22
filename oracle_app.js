// ============================================
// oracle_app.js
// おてがみオラクル メインアプリ
// 44枚のオリジナルオラクルカード
// ============================================

const CATEGORIES = [
  { id: 'love', name: '恋愛', emoji: '💕' },
  { id: 'work', name: '仕事', emoji: '💼' },
  { id: 'relationship', name: '人間関係', emoji: '🤝' },
  { id: 'life', name: '人生', emoji: '🌈' },
  { id: 'now', name: '今のあなたへ', emoji: '✨' }
];

const ORACLE_CARDS = [
  { id: 1, nameJa: '月からの手紙', nameEn: 'Letter from the Moon', image: 'images/01_moon.jpg', keyword: '直感・内なる声・静かな導き' },
  { id: 2, nameJa: '太陽からの手紙', nameEn: 'Letter from the Sun', image: 'images/02_sun.jpg', keyword: '喜び・活力・輝き' },
  { id: 3, nameJa: '星からの手紙', nameEn: 'Letter from the Stars', image: 'images/03_stars.jpg', keyword: '希望・夢・天からの祝福' },
  { id: 4, nameJa: '海からの手紙', nameEn: 'Letter from the Sea', image: 'images/04_sea.jpg', keyword: '感情の深さ・浄化・受容' },
  { id: 5, nameJa: '森からの手紙', nameEn: 'Letter from the Forest', image: 'images/05_forest.jpg', keyword: '成長・癒し・自然な流れ' },
  { id: 6, nameJa: '風からの手紙', nameEn: 'Letter from the Wind', image: 'images/06_wind.jpg', keyword: '変化・自由・新しい風' },
  { id: 7, nameJa: '虹からの手紙', nameEn: 'Letter from the Rainbow', image: 'images/07_rainbow.jpg', keyword: '約束・希望・嵐の後の光' },
  { id: 8, nameJa: '雨からの手紙', nameEn: 'Letter from the Rain', image: 'images/08_rain.jpg', keyword: '浄化・恵み・静かな再生' },
  { id: 9, nameJa: '花からの手紙', nameEn: 'Letter from the Flowers', image: 'images/09_flowers.jpg', keyword: '美しさ・開花・愛情' },
  { id: 10, nameJa: '大地からの手紙', nameEn: 'Letter from the Earth', image: 'images/10_earth.jpg', keyword: '安定・グラウンディング・基盤' },
  { id: 11, nameJa: '夜明けからの手紙', nameEn: 'Letter from the Dawn', image: 'images/11_dawn.jpg', keyword: '新しい始まり・目覚め・光の到来' },
  { id: 12, nameJa: '黄昏からの手紙', nameEn: 'Letter from the Twilight', image: 'images/12_twilight.jpg', keyword: '振り返り・手放し・境界' },
  { id: 13, nameJa: '春からの手紙', nameEn: 'Letter from Spring', image: 'images/13_spring.jpg', keyword: '芽吹き・再生・フレッシュスタート' },
  { id: 14, nameJa: '夏からの手紙', nameEn: 'Letter from Summer', image: 'images/14_summer.jpg', keyword: '情熱・エネルギー・実り' },
  { id: 15, nameJa: '秋からの手紙', nameEn: 'Letter from Autumn', image: 'images/15_autumn.jpg', keyword: '収穫・感謝・成熟' },
  { id: 16, nameJa: '冬からの手紙', nameEn: 'Letter from Winter', image: 'images/16_winter.jpg', keyword: '休息・内省・静けさの力' },
  { id: 17, nameJa: '満月からの手紙', nameEn: 'Letter from the Full Moon', image: 'images/17_full_moon.jpg', keyword: '完成・達成・手放し' },
  { id: 18, nameJa: '新月からの手紙', nameEn: 'Letter from the New Moon', image: 'images/18_new_moon.jpg', keyword: '始まり・願い・種まき' },
  { id: 19, nameJa: '未来のあなたからの手紙', nameEn: 'Letter from Your Future Self', image: 'images/19_future_self.jpg', keyword: '可能性・ビジョン・信頼' },
  { id: 20, nameJa: '過去のあなたからの手紙', nameEn: 'Letter from Your Past Self', image: 'images/20_past_self.jpg', keyword: '記憶・学び・統合' },
  { id: 21, nameJa: '守護霊さまからの手紙', nameEn: 'Letter from Your Guardian Spirit', image: 'images/21_guardian_spirit.jpg', keyword: '見守り・導き・安心' },
  { id: 22, nameJa: '天使からの手紙', nameEn: 'Letter from the Angel', image: 'images/22_angel.jpg', keyword: '祝福・奇跡・天からの贈り物' },
  { id: 23, nameJa: '小さなあなたからの手紙', nameEn: 'Letter from Your Inner Child', image: 'images/23_inner_child.jpg', keyword: '純粋さ・遊び心・本当の願い' },
  { id: 24, nameJa: '魂からの手紙', nameEn: 'Letter from Your Soul', image: 'images/24_soul.jpg', keyword: '本質・使命・魂の声' },
  { id: 25, nameJa: 'ご先祖さまからの手紙', nameEn: 'Letter from Your Ancestors', image: 'images/25_ancestors.jpg', keyword: 'ルーツ・守護・受け継がれる力' },
  { id: 26, nameJa: '宇宙からの手紙', nameEn: 'Letter from the Universe', image: 'images/26_universe.jpg', keyword: 'シンクロニシティ・信頼・大いなる計画' },
  { id: 27, nameJa: '涙からの手紙', nameEn: 'Letter from Tears', image: 'images/27_tears.jpg', keyword: '浄化・解放・やさしさ' },
  { id: 28, nameJa: '笑顔からの手紙', nameEn: 'Letter from Smiles', image: 'images/28_smiles.jpg', keyword: '幸福・つながり・共鳴' },
  { id: 29, nameJa: '沈黙からの手紙', nameEn: 'Letter from Silence', image: 'images/29_silence.jpg', keyword: '静寂・答え・内なる平和' },
  { id: 30, nameJa: '勇気からの手紙', nameEn: 'Letter from Courage', image: 'images/30_courage.jpg', keyword: '一歩踏み出す力・決断・強さ' },
  { id: 31, nameJa: 'やすらぎからの手紙', nameEn: 'Letter from Serenity', image: 'images/31_serenity.jpg', keyword: '安らぎ・受容・穏やかさ' },
  { id: 32, nameJa: '希望からの手紙', nameEn: 'Letter from Hope', image: 'images/32_hope.jpg', keyword: '光・信じる力・明日への扉' },
  { id: 33, nameJa: '感謝からの手紙', nameEn: 'Letter from Gratitude', image: 'images/33_gratitude.jpg', keyword: 'ありがとう・豊かさ・循環' },
  { id: 34, nameJa: '許しからの手紙', nameEn: 'Letter from Forgiveness', image: 'images/34_forgiveness.jpg', keyword: '解放・癒し・自由' },
  { id: 35, nameJa: '祈りからの手紙', nameEn: 'Letter from Prayer', image: 'images/35_prayer.jpg', keyword: '祈り・つながり・委ねる' },
  { id: 36, nameJa: '情熱からの手紙', nameEn: 'Letter from Passion', image: 'images/36_passion.jpg', keyword: '燃える想い・情熱・生きる力' },
  { id: 37, nameJa: '灯台からの手紙', nameEn: 'Letter from the Lighthouse', image: 'images/37_lighthouse.jpg', keyword: '道しるべ・帰る場所・導きの光' },
  { id: 38, nameJa: '泉からの手紙', nameEn: 'Letter from the Spring', image: 'images/38_spring_water.jpg', keyword: '湧き出る力・源泉・再生' },
  { id: 39, nameJa: '扉からの手紙', nameEn: 'Letter from the Door', image: 'images/39_door.jpg', keyword: '新しい世界・選択・踏み出す' },
  { id: 40, nameJa: '窓からの手紙', nameEn: 'Letter from the Window', image: 'images/40_window.jpg', keyword: '視点・気づき・外の世界' },
  { id: 41, nameJa: '橋からの手紙', nameEn: 'Letter from the Bridge', image: 'images/41_bridge.jpg', keyword: 'つなぐ・乗り越える・前へ進む' },
  { id: 42, nameJa: '庭からの手紙', nameEn: 'Letter from the Garden', image: 'images/42_garden.jpg', keyword: '育てる・日々の積み重ね・実り' },
  { id: 43, nameJa: '鍵からの手紙', nameEn: 'Letter from the Key', image: 'images/43_key.jpg', keyword: '答え・開く・可能性' },
  { id: 44, nameJa: 'ゆりかごからの手紙', nameEn: 'Letter from the Cradle', image: 'images/44_cradle.jpg', keyword: '安心・守られている・原点' }
];

// ============================================
// アプリロジック
// ============================================

let selectedCategory = null;

function init() {
  renderCategories();
  document.getElementById('draw-btn').addEventListener('click', drawCard);
  document.getElementById('reset-btn').addEventListener('click', resetAll);
}

function renderCategories() {
  const grid = document.getElementById('cat-grid');
  grid.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'cat-btn';
    btn.innerHTML = `<span class="cat-emoji">${cat.emoji}</span><span class="cat-label">${cat.name}</span>`;
    btn.addEventListener('click', () => selectCategory(cat, btn));
    grid.appendChild(btn);
  });
}

function selectCategory(cat, btn) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedCategory = cat;

  const drawSection = document.getElementById('draw-section');
  drawSection.classList.remove('hidden');
  document.getElementById('selected-label').textContent = cat.name;
}

function drawCard() {
  if (!selectedCategory) return;

  const drawBtn = document.getElementById('draw-btn');
  drawBtn.disabled = true;

  // カテゴリエリアを非表示
  document.getElementById('category-area').classList.add('hidden');

  // シャッフルアニメーション表示
  const envelopeArea = document.getElementById('envelope-area');
  envelopeArea.classList.remove('hidden');
  envelopeArea.innerHTML = `
    <div class="shuffle-container">
      <div class="shuffle-envelope" style="animation-delay: 0s"></div>
      <div class="shuffle-envelope" style="animation-delay: 0.15s"></div>
      <div class="shuffle-envelope" style="animation-delay: 0.3s"></div>
      <div class="shuffle-envelope" style="animation-delay: 0.45s"></div>
      <div class="shuffle-envelope" style="animation-delay: 0.6s"></div>
    </div>
    <p class="shuffle-text">あなたへの手紙を選んでいます...</p>
  `;

  // ランダムにカード選択
  const randomIndex = Math.floor(Math.random() * ORACLE_CARDS.length);
  const card = ORACLE_CARDS[randomIndex];

  // 1.5秒後にカード表示
  setTimeout(() => {
    envelopeArea.classList.add('hidden');
    showCard(card);
  }, 1500);
}

function showCard(card) {
  const cardDisplay = document.getElementById('card-display');
  cardDisplay.classList.remove('hidden');

  // カード画像をプリロード
  const img = new Image();
  img.onload = () => {
    cardDisplay.innerHTML = `
      <div class="oracle-card" id="oracle-card">
        <div class="card-inner">
          <div class="card-back">
            <span class="card-back-icon">💌</span>
            <span class="card-back-text">OTEGAMI ORACLE</span>
          </div>
          <div class="card-front">
            <img src="${card.image}" alt="${card.nameJa}">
          </div>
        </div>
      </div>
      <div class="card-name-area hidden" id="card-name-area">
        <p class="card-name-ja">${card.nameJa}</p>
        <p class="card-name-en">${card.nameEn}</p>
      </div>
    `;

    // 少し待ってからフリップ
    setTimeout(() => {
      document.getElementById('oracle-card').classList.add('flipped');
      document.getElementById('card-name-area').classList.remove('hidden');

      // リーディング表示
      setTimeout(() => {
        showReading(card);
      }, 800);
    }, 600);
  };
  img.src = card.image;
}

function showReading(card) {
  const readingArea = document.getElementById('reading-area');
  readingArea.classList.remove('hidden');

  // 鑑定文を取得（ORACLE_READINGS がなければデフォルト）
  let readingText = '';
  if (typeof ORACLE_READINGS !== 'undefined' &&
      ORACLE_READINGS[card.id] &&
      ORACLE_READINGS[card.id][selectedCategory.id]) {
    readingText = ORACLE_READINGS[card.id][selectedCategory.id];
  } else {
    readingText = generateDefaultReading(card);
  }

  readingArea.innerHTML = `
    <div class="reading-header">💌 ${card.nameJa}</div>
    <div class="reading-text">${readingText}</div>
  `;

  // リセットボタン・アフィリエイト表示
  document.getElementById('reset-btn').classList.remove('hidden');
  const affArea = document.getElementById('affiliate-area');
  affArea.classList.remove('hidden');
  updateAffiliateAd();

  // スクロール
  readingArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const DEFAULT_MESSAGES = {
  1: "月の光がそっとあなたを照らしています。答えを急がなくても大丈夫。静かに心の声に耳を傾けてみてね。",
  2: "太陽があなたに向かって微笑んでいますよ。あなたの中にある光を信じて、思いきり輝いてくださいね。",
  3: "星たちがあなたのために瞬いています。遠くに見える夢も、きっと届く場所にあるから安心してね。",
  4: "海からの手紙は、あなたの感情をそっと包み込んでくれます。涙も喜びも、全部大切なあなたの一部ですよ。",
  5: "森がそっと語りかけています。焦らなくていいよ、あなたは今ちゃんと育っているから。自然な流れを信じてね。",
  6: "風があなたに新しい風を運んできました。変化を恐れないで。その風に乗れば、素敵な場所に連れていってくれるよ。",
  7: "虹があなたに約束しています。今は雨の中にいても、必ず晴れる日が来るからね。もう少しだけ待っていて。",
  8: "雨がやさしくあなたを洗い流してくれています。心の中のもやもやも、この雨と一緒に流していいんですよ。",
  9: "花たちがあなたのために咲いています。あなた自身もまた、誰かにとっての美しい花なんですよ。",
  10: "大地がどっしりとあなたを支えています。不安なときは足の裏を地面につけて、その安定を感じてみてね。",
  11: "夜明けの光があなたに届いています。暗い夜はもう終わり。新しい一日があなたを待っていますよ。",
  12: "黄昏があなたに語りかけています。今日あったことをそっと振り返ってみて。手放していいものが見つかるかもしれないよ。",
  13: "春の息吹があなたを呼んでいます。何かを始めるなら今。あなたの中にも新しい芽が出ようとしていますよ。",
  14: "夏の太陽があなたにエネルギーを送っています。やりたいことに全力で飛び込んで大丈夫。今がそのときだよ。",
  15: "秋があなたに伝えています。これまでの頑張りが実を結ぶ時期が来ましたよ。自分をたくさん褒めてあげてね。",
  16: "冬がそっとあなたに囁いています。休んでいいんだよ。静かな時間こそ、次の春への準備なんだから。",
  17: "満月があなたを祝福しています。何かが完成する時期です。ここまでよく頑張りましたね。",
  18: "新月があなたに問いかけています。心の中で何を願っていますか？今この瞬間に種をまいてみてね。",
  19: "未来のあなたが微笑んでいます。大丈夫、ちゃんとたどり着くから。今のあなたの選択を信じていいよ。",
  20: "過去のあなたが話しかけています。あの頃の経験は全部、今のあなたの力になっているよ。忘れないでね。",
  21: "守護霊さまがそっと見守っています。あなたは一人じゃないよ。いつだって守られているからね。",
  22: "天使があなたに祝福を届けにきました。小さな奇跡に気づいてね。日常の中にたくさん隠れているから。",
  23: "小さなあなたが手を振っています。あの頃好きだったこと、覚えてる？たまには思い出してあげてね。",
  24: "あなたの魂が静かに語りかけています。本当はもうわかっているんじゃないかな。心の奥にある答えを信じてね。",
  25: "ご先祖さまからの温かい手紙です。あなたが今ここにいること自体が、受け継がれてきた奇跡なんですよ。",
  26: "宇宙があなたにウインクしています。偶然に見えることも、全部つながっているから。流れに身を任せてみてね。",
  27: "涙からの手紙は、あなたのやさしさの証です。泣いていいんだよ。涙のあとには必ず軽くなるからね。",
  28: "笑顔があなたに伝えています。あなたが笑うと周りも明るくなるよ。その笑顔は最高の贈り物だからね。",
  29: "沈黙が静かに語りかけています。何もしない時間も大切ですよ。そこにこそ本当の答えが眠っているから。",
  30: "勇気があなたの背中を押しています。怖くてもいいんだよ。怖いまま一歩踏み出せるのが本当の勇気だから。",
  31: "やすらぎがあなたを包んでいます。もう頑張らなくていい瞬間があってもいいんですよ。ゆっくり深呼吸してね。",
  32: "希望の光があなたに差し込んでいます。どんな暗闇にも必ず光はある。あなたはもう見つけ始めていますよ。",
  33: "感謝があなたに気づきを届けています。今あるもの、今いてくれる人。当たり前じゃないって知ってるよね。",
  34: "許しの手紙が届きました。自分のことも許してあげてね。完璧じゃなくていいんだから。",
  35: "祈りがあなたとつながっています。言葉にならなくても大丈夫。あなたの想いはちゃんと届いていますよ。",
  36: "情熱があなたの中で燃えています。その熱を大切にしてね。あなたが本気になれることは宝物だから。",
  37: "灯台の光があなたを照らしています。迷ったときはこの光を目印にしてね。帰る場所はちゃんとあるから。",
  38: "泉の水が静かに湧き出ています。あなたの中にも尽きない力の源がありますよ。そこから汲み上げてみてね。",
  39: "扉が少しだけ開いています。向こう側に何があるかは、開けてみないとわからない。でもきっと素敵な何かがあるよ。",
  40: "窓からの景色が変わり始めています。いつもと違う角度で見てみて。新しい気づきが待っているかもしれないよ。",
  41: "橋があなたを待っています。こちら側とあちら側をつなぐ道は、もうできているんだよ。渡ってみてね。",
  42: "庭からのやさしい便りです。毎日の小さな積み重ねが、やがて美しい花を咲かせますよ。焦らないでね。",
  43: "鍵があなたに届きました。ずっと開かなかった扉の鍵かもしれません。試してみる勇気はありますか？",
  44: "ゆりかごがあなたをやさしく揺らしています。安心していいんだよ。あなたはいつだって守られているから。"
};

function generateDefaultReading(card) {
  const msg = DEFAULT_MESSAGES[card.id] || "あなたに届いた大切なメッセージです。";
  return `<p>「${card.nameJa}」があなたに届きました。</p>
  <p style="margin-top:16px;">${msg}</p>
  <p style="margin-top:16px; font-size:13px; color:#b39dba;">キーワード：${card.keyword}</p>`;
}

function resetAll() {
  selectedCategory = null;
  document.getElementById('category-area').classList.remove('hidden');
  document.getElementById('envelope-area').classList.add('hidden');
  document.getElementById('card-display').classList.add('hidden');
  document.getElementById('card-display').innerHTML = '';
  document.getElementById('reading-area').classList.add('hidden');
  document.getElementById('reset-btn').classList.add('hidden');
  document.getElementById('affiliate-area').classList.add('hidden');
  document.getElementById('draw-section').classList.add('hidden');
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('draw-btn').disabled = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// アフィリエイト広告
const AFFILIATE_ADS = [
  {
    text: "もう、一人で悩まないで。ココナラの【電話占い】",
    url: "https://px.a8.net/svt/ejp?a8mat=4AZLSG+C7ZCTU+2PEO+BZGER",
    img: "https://www18.a8.net/0.gif?a8mat=4AZLSG+C7ZCTU+2PEO+BZGER"
  },
  {
    text: "幸せになれる電話占い【ココナラ】",
    url: "https://px.a8.net/svt/ejp?a8mat=4AZLSG+C7ZCTU+2PEO+BY642",
    img: "https://www19.a8.net/0.gif?a8mat=4AZLSG+C7ZCTU+2PEO+BY642"
  },
  {
    text: "電話占い【ココナラ】新規会員登録で3,000円無料クーポン",
    url: "https://px.a8.net/svt/ejp?a8mat=4AZLSG+C7ZCTU+2PEO+C3BAQ",
    img: "https://www19.a8.net/0.gif?a8mat=4AZLSG+C7ZCTU+2PEO+C3BAQ"
  }
];

function updateAffiliateAd() {
  const ad = AFFILIATE_ADS[Math.floor(Math.random() * AFFILIATE_ADS.length)];
  const slot = document.getElementById('affiliate-slot');
  if (slot) {
    slot.innerHTML = `<a href="${ad.url}" rel="nofollow" class="btn-affiliate">${ad.text}</a><img border="0" width="1" height="1" src="${ad.img}" alt="">`;
  }
}

// 起動
document.addEventListener('DOMContentLoaded', init);
