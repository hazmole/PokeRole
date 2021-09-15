var Pokedex;
if(!Pokedex) Pokedex = [];

Array.prototype.push.apply(Pokedex, [
{
  "id": "810",
  "region": "galar",
  "name": "敲音猴",
  "alias": "Grookey",
  "type": [ "Grass" ],
  "info": {
    "image": "images/pokedex/810.png",
    "height": "0.3",
    "weight": "5",
    "category": "小猴寶可夢",
    "text": "牠們年輕的時候都在尋找能發出特定聲音的木棒，且之後會用這根木棒來敲奏出能夠使花草生長的節奏。敲音猴是一種熱情、善良、且熱愛音樂的生物。"
  },
  "evolution": {
    "stage": "first",
    "time": "medium"
  },
  "baseHP": 3,
  "rank": 0,
  "attr": {
    "str": { "value": 2, "max": 4 },
    "dex": { "value": 2, "max": 4 },
    "vit": { "value": 2, "max": 4 },
    "spe": { "value": 1, "max": 3 },
    "ins": { "value": 1, "max": 3 }
  },
  "ability": [
    "茂盛"
  ],
  "moves": [
    { "rank": 0, "type": "Normal", "name": "抓" },
    { "rank": 0, "type": "Normal", "name": "叫聲" },
    { "rank": 1, "type": "Grass", "name": "木枝突刺" },
    { "rank": 1, "type": "Dark", "name": "挑釁" },
    { "rank": 2, "type": "Grass", "name": "飛葉快刀" },
    { "rank": 2, "type": "Normal", "name": "刺耳聲" },
    { "rank": 2, "type": "Dark", "name": "拍落" },
    { "rank": 2, "type": "Normal", "name": "摔打" },
    { "rank": 3, "type": "Normal", "name": "吵鬧" },
    { "rank": 3, "type": "Grass", "name": "木槌" },
    { "rank": 3, "type": "Normal", "name": "蠻幹" },
    { "rank": 4, "type": "Grass", "name": "草之誓約" },
    { "rank": 4, "type": "Normal", "name": "擊掌奇襲" },
    { "rank": 4, "type": "Grass", "name": "寄生種子" }
  ],
  "isNovice": true
},
{
  "id": "811",
  "region": "galar",
  "name": "啪咚猴",
  "alias": "Thwackey",
  "type": [
    "Grass"
  ],
  "info": {
    "image": "images/pokedex/811.png",
    "height": "0.7",
    "weight": "14",
    "category": "節拍寶可夢",
    "text": "啪咚猴相當熱衷於牠的節拍，牠們可能會過於沉浸在音樂中而甚至不會意識到戰鬥已經結束。牠們敲奏的速度越快，越是能獲得夥伴們的尊敬。"
  },
  "evolution": {
    "stage": "second",
    "time": "medium"
  },
  "baseHP": 4,
  "rank": 2,
  "attr": {
    "str": { "value": 2, "max": 5 },
    "dex": { "value": 2, "max": 5 },
    "vit": { "value": 2, "max": 5 },
    "spe": { "value": 2, "max": 4 },
    "ins": { "value": 2, "max": 4 }
  },
  "ability": [
    "茂盛"
  ],
  "moves": [
    { "rank": 0, "type": "Normal", "name": "二連擊" },
    { "rank": 0, "type": "Normal", "name": "抓" },
    { "rank": 0, "type": "Normal", "name": "叫聲" },
    { "rank": 1, "type": "Grass", "name": "木枝突刺" },
    { "rank": 2, "type": "Dark", "name": "挑釁" },
    { "rank": 2, "type": "Grass", "name": "飛葉快刀" },
    { "rank": 2, "type": "Normal", "name": "刺耳聲" },
    { "rank": 2, "type": "Dark", "name": "拍落" },
    { "rank": 2, "type": "Normal", "name": "摔打" },
    { "rank": 3, "type": "Normal", "name": "吵鬧" },
    { "rank": 3, "type": "Grass", "name": "木槌" },
    { "rank": 3, "type": "Normal", "name": "蠻幹" },
    { "rank": 4, "type": "Flying", "name": "雜耍" },
    { "rank": 4, "type": "Normal", "name": "擊掌奇襲" },
    { "rank": 4, "type": "Grass", "name": "寄生種子" }
  ]
},
{
  "id": "812",
  "region": "galar",
  "name": "轟擂金剛猩",
  "alias": "Rillaboom",
  "type": [
    "Grass"
  ],
  "info": {
    "image": "images/pokedex/812.png",
    "height": "2.1",
    "weight": "90",
    "category": "鼓手寶可夢",
    "text": "牠們的首領擁有族群中最大的鼓，並有著最高超的打鼓技巧，能操縱樹根去攻擊牠的敵人。但牠們其實是性情溫和，重視族群和諧相處的生物。"
  },
  "evolution": {
    "stage": "final"
  },
  "baseHP": 6,
  "rank": 3,
  "attr": {
    "str": { "value": 3, "max": 7 },
    "dex": { "value": 2, "max": 5 },
    "vit": { "value": 2, "max": 5 },
    "spe": { "value": 2, "max": 4 },
    "ins": { "value": 2, "max": 5 }
  },
  "ability": [
    "茂盛"
  ],
  "moves": [
    { "rank": 0, "type": "Normal", "name": "二連擊" },
    { "rank": 0, "type": "Grass", "name": "鼓擊" },
    { "rank": 1, "type": "Grass", "name": "青草場地" },
    { "rank": 1, "type": "Normal", "name": "戰吼" },
    { "rank": 2, "type": "Normal", "name": "抓" },
    { "rank": 2, "type": "Normal", "name": "叫聲" },
    { "rank": 2, "type": "Grass", "name": "木枝突刺" },
    { "rank": 2, "type": "Dark", "name": "挑釁" },
    { "rank": 2, "type": "Grass", "name": "飛葉快刀" },
    { "rank": 2, "type": "Normal", "name": "刺耳聲" },
    { "rank": 3, "type": "Dark", "name": "拍落" },
    { "rank": 3, "type": "Normal", "name": "摔打" },
    { "rank": 3, "type": "Normal", "name": "吵鬧" },
    { "rank": 3, "type": "Grass", "name": "木槌" },
    { "rank": 3, "type": "Normal", "name": "蠻幹" },
    { "rank": 3, "type": "Normal", "name": "爆音波" },
    { "rank": 4, "type": "Normal", "name": "生長" },
    { "rank": 4, "type": "Normal", "name": "自然之力" },
    { "rank": 4, "type": "Grass", "name": "瘋狂植物" }
  ]
},
  {
    "id": "813",
    "region": "galar",
    "name": "炎兔兒",
    "alias": "Scorbunny",
    "type": [ "Fire" ],
    "info": {
      "image": "images/pokedex/813.png",
      "height": "0.3",
      "weight": "4.5",
      "category": "兔子寶可夢",
      "text": "炎兔兒體型小巧且充滿活力，牠們喜歡從寬廣場地的其中一邊跑到另一邊，持續好幾個小時並樂此不疲。牠腳底和鼻頭上的肉球會在牠戰鬥或奔跑的時後散發出極度的高溫。"
    },
    "evolution": {
      "stage": "first",
      "time": "medium"
    },
    "baseHP": 3,
    "rank": 0,
    "attr": {
      "str": { "value": 2, "max": 5 },
      "dex": { "value": 2, "max": 4 },
      "vit": { "value": 1, "max": 3 },
      "spe": { "value": 1, "max": 3 },
      "ins": { "value": 1, "max": 3 }
    },
    "ability": [
      "猛火"
    ],
    "moves": [
      { "rank": 0, "type": "Normal", "name": "撞擊" },
      { "rank": 0, "type": "Normal", "name": "叫聲" },
      { "rank": 1, "type": "Fire", "name": "火花" },
      { "rank": 1, "type": "Normal", "name": "電光一閃" },
      { "rank": 2, "type": "Fight", "name": "二連踢" },
      { "rank": 2, "type": "Fire", "name": "蓄能焰襲" },
      { "rank": 2, "type": "Psychic", "name": "高速移動" },
      { "rank": 2, "type": "Normal", "name": "頭鎚" },
      { "rank": 2, "type": "Fight", "name": "雙倍奉還" },
      { "rank": 3, "type": "Flying", "name": "彈跳" },
      { "rank": 3, "type": "Normal", "name": "捨身衝撞" },
      { "rank": 4, "type": "Fire", "name": "火之誓約" },
      { "rank": 4, "type": "Ground", "name": "潑沙" },
      { "rank": 4, "type": "Normal", "name": "憤怒門牙" }
    ],
    "isNovice": true
  },
  {
    "id": "814",
    "region": "galar",
    "name": "騰蹴小將",
    "alias": "Raboot",
    "type": [ "Fire" ],
    "info": {
      "image": "images/pokedex/814.png",
      "height": "0.6",
      "weight": "9",
      "category": "兔子寶可夢",
      "text": "這隻寶可夢熱愛踢東西，並會每天訓練來鍛鍊自己的腳法。牠的體毛變得相當蓬鬆，有些人認為這是為了幫助牠抵禦寒冷氣候，也有人說這是為了讓牠產生出溫度更高的火焰。"
    },
    "evolution": {
      "stage": "second",
      "time": "medium"
    },
    "baseHP": 4,
    "rank": 2,
    "attr": {
      "str": { "value": 2, "max": 5 },
      "dex": { "value": 2, "max": 5 },
      "vit": { "value": 2, "max": 4 },
      "spe": { "value": 2, "max": 4 },
      "ins": { "value": 2, "max": 4 }
    },
    "ability": [ "猛火" ],
    "moves": [
      { "rank": 0, "type": "Normal", "name": "撞擊" },
      { "rank": 0, "type": "Normal", "name": "叫聲" },
      { "rank": 1, "type": "Fire", "name": "火花" },
      { "rank": 1, "type": "Normal", "name": "電光一閃" },
      { "rank": 2, "type": "Fight", "name": "二連踢" },
      { "rank": 2, "type": "Fire", "name": "蓄能焰襲" },
      { "rank": 2, "type": "Psychic", "name": "高速移動" },
      { "rank": 2, "type": "Normal", "name": "頭鎚" },
      { "rank": 2, "type": "Fight", "name": "雙倍奉還" },
      { "rank": 3, "type": "Flying", "name": "彈跳" },
      { "rank": 3, "type": "Normal", "name": "捨身衝撞" },
      { "rank": 4, "type": "Normal", "name": "自我激勵" },
      { "rank": 4, "type": "Fight", "name": "飛膝踢" },
      { "rank": 4, "type": "Dark", "name": "突襲" }
    ]
  },
  {
    "id": "815",
    "region": "galar",
    "name": "閃焰王牌",
    "alias": "Cinderace",
    "type": [ "Fire" ],
    "info": {
      "image": "images/pokedex/815.png",
      "height": "1.4",
      "weight": "33",
      "category": "前鋒寶可夢",
      "text": "牠們對自己的能力相當自信且自負。牠們會將小石頭用腳挑起並點火，製造出纏繞著火焰的武器來踢向牠們的對手。如果聽到聲援，牠們就會變得很自大。"
    },
    "evolution": {
      "stage": "final"
    },
    "baseHP": 5,
    "rank": 3,
    "attr": {
      "str": { "value": 3, "max": 6 },
      "dex": { "value": 3, "max": 7 },
      "vit": { "value": 2, "max": 5 },
      "spe": { "value": 2, "max": 4 },
      "ins": { "value": 2, "max": 5 }
    },
    "ability": [ "猛火" ],
    "moves": [
      { "rank": 0, "type": "Fire", "name": "火焰球" },
      { "rank": 0, "type": "Normal", "name": "佯攻" },
      { "rank": 1, "type": "Normal", "name": "撞擊" },
      { "rank": 1, "type": "Normal", "name": "叫聲" },
      { "rank": 2, "type": "Fight", "name": "二連踢" },
      { "rank": 2, "type": "Fire", "name": "蓄能焰襲" },
      { "rank": 2, "type": "Psychic", "name": "高速移動" },
      { "rank": 2, "type": "Fire", "name": "火花" },
      { "rank": 2, "type": "Normal", "name": "電光一閃" },
      { "rank": 3, "type": "Normal", "name": "頭鎚" },
      { "rank": 3, "type": "Fight", "name": "雙倍奉還" },
      { "rank": 3, "type": "Flying", "name": "彈跳" },
      { "rank": 3, "type": "Normal", "name": "捨身衝撞" },
      { "rank": 3, "type": "Normal", "name": "換場" },
      { "rank": 4, "type": "Fight", "name": "飛膝踢" },
      { "rank": 4, "type": "Normal", "name": "百萬噸重踢" },
      { "rank": 4, "type": "Fire", "name": "爆炸烈焰" }
    ]
  },
  {
    "id": "816",
    "region": "galar",
    "name": "淚眼蜥",
    "alias": "Sobble",
    "type": [ "Water" ],
    "info": {
      "image": "images/pokedex/816.png",
      "height": "0.3",
      "weight": "4",
      "category": "水蜥寶可夢",
      "text": "這隻害羞的寶可夢並不喜歡引來太多的注意。牠會躲在淺淺的水池中……當牠覺得受到威脅，牠會大哭且牠的淚水會釋放出能夠讓對手淚流不止的催淚成分。"
    },
    "evolution": {
      "stage": "first",
      "time": "medium"
    },
    "baseHP": 3,
    "rank": 1,
    "attr": {
      "str": { "value": 1, "max": 3 },
      "dex": { "value": 2, "max": 5 },
      "vit": { "value": 1, "max": 3 },
      "spe": { "value": 2, "max": 5 },
      "ins": { "value": 1, "max": 3 }
    },
    "ability": [ "激流" ],
    "moves": [
      { "rank": 0, "type": "Normal", "name": "拍擊" },
      { "rank": 0, "type": "Normal", "name": "叫聲" },
      { "rank": 1, "type": "Water", "name": "水槍" },
      { "rank": 1, "type": "Normal", "name": "綁緊" },
      { "rank": 2, "type": "Water", "name": "水之波動" },
      { "rank": 2, "type": "Normal", "name": "淚眼汪汪" },
      { "rank": 2, "type": "Dark", "name": "突襲" },
      { "rank": 2, "type": "Bug", "name": "急速折返" },
      { "rank": 3, "type": "Water", "name": "水流裂破" },
      { "rank": 3, "type": "Water", "name": "浸水" },
      { "rank": 3, "type": "Water", "name": "求雨" },
      { "rank": 4, "type": "Normal", "name": "影子分身" },
      { "rank": 4, "type": "Ice", "name": "白霧" },
      { "rank": 4, "type": "Water", "name": "水之誓約" }
    ],
    "isNovice": true
  },
  {
    "id": "817",
    "region": "galar",
    "name": "變澀蜥",
    "alias": "Drizzile",
    "type": [ "Water" ],
    "info": {
      "image": "images/pokedex/817.png",
      "height": "0.7",
      "weight": "12",
      "category": "水蜥寶可夢",
      "text": "牠的態度發生了劇烈變化，從害羞變得冷漠且懶散。牠能夠從手掌分泌出的水分做成水彈。牠的頭腦相當聰明，並以會在野外設下陷阱來對付敵人而聞名。"
    },
    "evolution": {
      "stage": "second",
      "time": "medium"
    },
    "baseHP": 4,
    "rank": 2,
    "attr": {
      "str": { "value": 2, "max": 4 },
      "dex": { "value": 2, "max": 5 },
      "vit": { "value": 2, "max": 4 },
      "spe": { "value": 3, "max": 6 },
      "ins": { "value": 2, "max": 4 }
    },
    "ability": [ "激流" ],
    "moves": [
      { "rank": 0, "type": "Normal", "name": "拍擊" },
      { "rank": 0, "type": "Normal", "name": "叫聲" },
      { "rank": 1, "type": "Water", "name": "水槍" },
      { "rank": 1, "type": "Normal", "name": "綁緊" },
      { "rank": 2, "type": "Water", "name": "水之波動" },
      { "rank": 2, "type": "Normal", "name": "淚眼汪汪" },
      { "rank": 2, "type": "Dark", "name": "突襲" },
      { "rank": 2, "type": "Bug", "name": "急速折返" },
      { "rank": 3, "type": "Water", "name": "水流裂破" },
      { "rank": 3, "type": "Water", "name": "浸水" },
      { "rank": 3, "type": "Water", "name": "求雨" },
      { "rank": 4, "type": "Normal", "name": "影子分身" },
      { "rank": 4, "type": "Ice", "name": "黑霧" },
      { "rank": 4, "type": "Water", "name": "水流噴射" }
    ]
  },
  {
    "id": "818",
    "region": "galar",
    "name": "千面避役",
    "alias": "Inteleon",
    "type": [
      "Water"
    ],
    "info": {
      "image": "images/pokedex/818.png",
      "height": "1.9",
      "weight": "45.2",
      "category": "特工寶可夢",
      "text": "牠的指尖能夠射出快得不可思議的水槍，這道水流甚至能夠射穿鐵板。牠通常會在高處狩獵，射擊，然後滑翔而下去享用牠的獵物。"
    },
    "evolution": {
      "stage": "final"
    },
    "baseHP": 5,
    "rank": 4,
    "attr": {
      "str": { "value": 2, "max": 5 },
      "dex": { "value": 3, "max": 7 },
      "vit": { "value": 2, "max": 4 },
      "spe": { "value": 3, "max": 7 },
      "ins": { "value": 2, "max": 4 }
    },
    "ability": [
      "激流"
    ],
    "moves": [
      { "rank": 0, "type": "Water", "name": "狙擊" },
      { "rank": 0, "type": "Flying", "name": "雜耍" },
      { "rank": 1, "type": "Normal", "name": "拍擊" },
      { "rank": 1, "type": "Normal", "name": "叫聲" },
      { "rank": 2, "type": "Water", "name": "水槍" },
      { "rank": 2, "type": "Normal", "name": "綁緊" },
      { "rank": 2, "type": "Water", "name": "水之波動" },
      { "rank": 2, "type": "Normal", "name": "淚眼汪汪" },
      { "rank": 2, "type": "Dark", "name": "突襲" },
      { "rank": 3, "type": "Bug", "name": "急速折返" },
      { "rank": 3, "type": "Water", "name": "水流裂破" },
      { "rank": 3, "type": "Water", "name": "浸水" },
      { "rank": 3, "type": "Water", "name": "求雨" },
      { "rank": 3, "type": "Water", "name": "水砲" },
      { "rank": 4, "type": "Ice", "name": "冰礫" },
      { "rank": 4, "type": "Bug", "name": "致命針刺" },
      { "rank": 4, "type": "Water", "name": "加農水炮" }
    ]
  },
  {
    "id": "821",
    "region": "galar",
    "name": "稚山雀",
    "alias": "Rookidee",
    "type": [
      "Flying"
    ],
    "info": {
      "image": "images/pokedex/821.png",
      "height": "0.2",
      "weight": "1.8",
      "category": "小鳥寶可夢",
      "text": "勇敢好鬥的小東西，稚山雀以會勇於對體型比自己巨大的對手發起挑戰而知名，且就算牠們被打敗，牠們也不會放棄，並會在之後再試一次。牠們會利用自己的嬌小體型來取得優勢。"
    },
    "evolution": {
      "stage": "first",
      "time": "medium"
    },
    "baseHP": 3,
    "rank": 1,
    "attr": {
      "str": { "value": 2, "max": 4 },
      "dex": { "value": 2, "max": 4 },
      "vit": { "value": 1, "max": 3 },
      "spe": { "value": 1, "max": 3 },
      "ins": { "value": 1, "max": 3 }
    },
    "ability": [
      "銳利目光",
      "緊張感"
    ],
    "moves": [
      { "rank": 0, "type": "Flying", "name": "啄" },
      { "rank": 0, "type": "Normal", "name": "瞪眼" },
      { "rank": 1, "type": "Dark", "name": "囂張" },
      { "rank": 1, "type": "Dark", "name": "磨爪" },
      { "rank": 2, "type": "Normal", "name": "亂擊" },
      { "rank": 2, "type": "Flying", "name": "啄食" },
      { "rank": 2, "type": "Dark", "name": "挑釁" },
      { "rank": 2, "type": "Normal", "name": "鬼面" },
      { "rank": 3, "type": "Flying", "name": "啄鑽" },
      { "rank": 3, "type": "Normal", "name": "虛張聲勢" },
      { "rank": 3, "type": "Flying", "name": "勇鳥猛攻" },
      { "rank": 4, "type": "Ghost", "name": "怨恨" },
      { "rank": 4, "type": "Flying", "name": "清除濃霧" },
      { "rank": 4, "type": "Ground", "name": "潑沙" }
    ],
    "isNovice": true
  },
  {
    "id": "822",
    "region": "galar",
    "name": "藍鴉",
    "alias": "Corvisquire",
    "type": [
      "Flying"
    ],
    "info": {
      "image": "images/pokedex/822.png",
      "height": "0.8",
      "weight": "16.0",
      "category": "烏鴉寶可夢",
      "text": "牠們頭腦聰明，懂得在戰鬥中使用工具。曾有人目擊這些寶可夢撿起石頭投向敵人、或用繩子將敵人捆住。牠們懂得謹慎地選擇戰鬥，且不會輕言撤退。"
    },
    "evolution": {
      "stage": "second",
      "time": "medium"
    },
    "baseHP": 4,
    "rank": 2,
    "attr": {
      "str": { "value": 2, "max": 4 },
      "dex": { "value": 2, "max": 5 },
      "vit": { "value": 2, "max": 4 },
      "spe": { "value": 1, "max": 3 },
      "ins": { "value": 2, "max": 4 }
    },
    "ability": [
      "銳利目光",
      "緊張感"
    ],
    "moves": [
      { "rank": 0, "type": "Flying", "name": "啄" },
      { "rank": 1, "type": "Normal", "name": "瞪眼" },
      { "rank": 1, "type": "Dark", "name": "囂張" },
      { "rank": 1, "type": "Dark", "name": "磨爪" },
      { "rank": 2, "type": "Normal", "name": "亂擊" },
      { "rank": 2, "type": "Flying", "name": "啄食" },
      { "rank": 2, "type": "Dark", "name": "挑釁" },
      { "rank": 2, "type": "Normal", "name": "鬼面" },
      { "rank": 3, "type": "Flying", "name": "啄鑽" },
      { "rank": 3, "type": "Normal", "name": "虛張聲勢" },
      { "rank": 3, "type": "Flying", "name": "勇鳥猛攻" },
      { "rank": 4, "type": "Flying", "name": "羽棲" },
      { "rank": 4, "type": "Flying", "name": "順風" },
      { "rank": 4, "type": "Fight", "name": "碎岩" }
    ]
  },
  {
    "id": "823",
    "region": "galar",
    "name": "鋼鎧鴉",
    "alias": "Corviknight",
    "type": [
      "Flying",
      "Steel"
    ],
    "info": {
      "image": "images/pokedex/823.png",
      "height": "2.2",
      "weight": "75.0",
      "category": "烏鴉寶可夢",
      "text": "靠著牠們優秀的飛行能力和極度聰明的頭腦，這些寶可夢在伽勒爾地區的空中所向無敵。當牠們飛行時，牠們會在地面投下巨大的影子，使敵友雙方都不禁畏懼三分。"
    },
    "evolution": {
      "stage": "final"
    },
    "baseHP": 6,
    "rank": 3,
    "attr": {
      "str": { "value": 2, "max": 5 },
      "dex": { "value": 2, "max": 4 },
      "vit": { "value": 3, "max": 6 },
      "spe": { "value": 2, "max": 4 },
      "ins": { "value": 2, "max": 5 }
    },
    "ability": [
      "壓迫感",
      "鏡甲"
    ],
    "moves": [
      { "rank": 1, "type": "Flying", "name": "啄" },
      { "rank": 1, "type": "Normal", "name": "瞪眼" },
      { "rank": 2, "type": "Steel", "name": "鋼翼" },
      { "rank": 2, "type": "Steel", "name": "鐵壁" },
      { "rank": 2, "type": "Steel", "name": "金屬音" },
      { "rank": 2, "type": "Dark", "name": "囂張" },
      { "rank": 2, "type": "Dark", "name": "磨爪" },
      { "rank": 2, "type": "Normal", "name": "亂擊" },
      { "rank": 2, "type": "Flying", "name": "啄食" },
      { "rank": 3, "type": "Dark", "name": "挑釁" },
      { "rank": 3, "type": "Normal", "name": "鬼面" },
      { "rank": 3, "type": "Flying", "name": "啄鑽" },
      { "rank": 3, "type": "Normal", "name": "虛張聲勢" },
      { "rank": 3, "type": "Flying", "name": "勇鳥猛攻" },
      { "rank": 4, "type": "Flying", "name": "羽棲" },
      { "rank": 4, "type": "Flying", "name": "神鳥猛擊" },
      { "rank": 4, "type": "Steel", "name": "鐵蹄光線" }
    ]
  },
  {
    "id": "829",
    "region": "galar",
    "name": "幼棉棉",
    "alias": "",
    "type": [
      "Grass"
    ],
    "info": {
      "image": "images/pokedex/829.png",
      "height": "0.4",
      "weight": "2.2",
      "category": "花飾寶可夢",
      "text": "你能在野外發現牠們沐浴在陽光下，隨著微風一邊轉圈圈一邊愉快地歌唱。牠們的花朵將在這之後成長綻放。這討人喜歡的表現讓牠在訓練家之中相當受歡迎。"
    },
    "evolution": {
      "stage": "first",
      "time": "medium"
    },
    "baseHP": 3,
    "rank": 1,
    "attr": {
      "str": { "value": 1, "max": 3 },
      "dex": { "value": 1, "max": 2 },
      "vit": { "value": 2, "max": 4 },
      "spe": { "value": 1, "max": 3 },
      "ins": { "value": 2, "max": 4 }
    },
    "ability": [
      "棉絮", "再生力"
    ],
    "moves": [
      { "rank": 0, "type": "Grass", "name": "樹葉" },
      { "rank": 0, "type": "Normal", "name": "唱歌" },
      { "rank": 1, "type": "Normal", "name": "高速旋轉" },
      { "rank": 1, "type": "Normal", "name": "甜甜香氣" },
      { "rank": 2, "type": "Grass", "name": "飛葉快刀" },
      { "rank": 2, "type": "Normal", "name": "輪唱" },
      { "rank": 2, "type": "Grass", "name": "青草攪拌器" },
      { "rank": 2, "type": "Grass", "name": "光合作用" },
      { "rank": 3, "type": "Normal", "name": "巨聲" },
      { "rank": 3, "type": "Grass", "name": "芳香治療" },
      { "rank": 3, "type": "Grass", "name": "飛葉風暴" },
      { "rank": 4, "type": "Normal", "name": "生長" },
      { "rank": 4, "type": "Grass", "name": "寄生種子" },
      { "rank": 4, "type": "Poison", "name": "毒粉" }
    ],
    "isNovice": true
  },
  {
    "id": "830",
    "region": "galar",
    "name": "白蓬蓬",
    "alias": "",
    "type": [
      "Grass"
    ],
    "info": {
      "image": "images/pokedex/830.png",
      "height": "0.5",
      "weight": "2.5",
      "category": "棉飾寶可夢",
      "text": "牠產生的棉絮有著相當動人的光澤，因此用其製成的服裝都貴的嚇人。在自然界中，牠們是溫和且無私的寶可夢，願意讓其他人從牠們頭上的棉絮種子中獲取營養。"
    },
    "evolution": {
      "stage": "final"
    },
    "baseHP": 4,
    "rank": 2,
    "attr": {
      "str": { "value": 2, "max": 4 },
      "dex": { "value": 2, "max": 4 },
      "vit": { "value": 2, "max": 5 },
      "spe": { "value": 2, "max": 5 },
      "ins": { "value": 3, "max": 7 }
    },
    "ability": [
      "棉絮", "再生力"
    ],
    "moves": [
      { "rank": 0, "type": "Grass", "name": "樹葉" },
      { "rank": 1, "type": "Grass", "name": "棉孢子" },
      { "rank": 1, "type": "Normal", "name": "唱歌" },
      { "rank": 1, "type": "Normal", "name": "高速旋轉" },
      { "rank": 2, "type": "Normal", "name": "甜甜香氣" },
      { "rank": 2, "type": "Grass", "name": "飛葉快刀" },
      { "rank": 2, "type": "Normal", "name": "輪唱" },
      { "rank": 3, "type": "Grass", "name": "青草攪拌器" },
      { "rank": 3, "type": "Grass", "name": "光合作用" },
      { "rank": 3, "type": "Normal", "name": "巨聲" },
      { "rank": 3, "type": "Grass", "name": "芳香治療" },
      { "rank": 3, "type": "Grass", "name": "飛葉風暴" },
      { "rank": 3, "type": "Grass", "name": "棉花防守" },
      { "rank": 4, "type": "Grass", "name": "青草場地" },
      { "rank": 4, "type": "Fairy", "name": "撒嬌" },
      { "rank": 4, "type": "Grass", "name": "寄生種子" }
    ]
  },
  {
    "id": "835",
    "region": "galar",
    "name": "來電汪",
    "alias": "Yamper|ワンパチ",
    "type": [
      "Electric"
    ],
    "info": {
      "image": "images/pokedex/835.png",
      "height": "0.3",
      "weight": "13.5",
      "category": "小狗寶可夢",
      "text": "牠的活力和大大的笑容讓這隻寶可夢成為了相當受歡迎的牧羊犬。牠在奔跑的時候會從尾巴的根部製造出電能。牠熱愛接球，且如果你餵給牠一些零食的話牠就會愛你一輩子。"
    },
    "evolution": {
      "stage": "first",
      "time": "medium"
    },
    "baseHP": 3,
    "rank": 1,
    "attr": {
      "str": { "value": 2, "max": 4 },
      "dex": { "value": 2, "max": 4 },
      "vit": { "value": 2, "max": 4 },
      "spe": { "value": 2, "max": 4 },
      "ins": { "value": 2, "max": 4 }
    },
    "ability": [
      "撿球"
    ],
    "moves": [
      { "rank": 0, "type": "Normal", "name": "撞擊" },
      { "rank": 0, "type": "Normal", "name": "搖尾巴" },
      { "rank": 1, "type": "Electric", "name": "蹭蹭臉頰" },
      { "rank": 1, "type": "Dark", "name": "咬住" },
      { "rank": 2, "type": "Normal", "name": "吼叫" },
      { "rank": 2, "type": "Electric", "name": "電光" },
      { "rank": 2, "type": "Fairy", "name": "撒嬌" },
      { "rank": 2, "type": "Dark", "name": "咬碎" },
      { "rank": 2, "type": "Electric", "name": "充電" },
      { "rank": 3, "type": "Electric", "name": "瘋狂伏特" },
      { "rank": 3, "type": "Fairy", "name": "嬉鬧" },
      { "rank": 4, "type": "Ground", "name": "潑沙" },
      { "rank": 4, "type": "Fire", "name": "蓄能焰襲" },
      { "rank": 4, "type": "Normal", "name": "長嚎" }
    ]
  },
  {
    "id": "836",
    "region": "galar",
    "name": "逐電犬",
    "alias": "Boltund",
    "type": [
      "Electric"
    ],
    "info": {
      "image": "images/pokedex/836.png",
      "height": "1",
      "weight": "34",
      "category": "狗寶可夢",
      "text": "牠會將電能傳送到腳上來提升自己的速度，時速能夠輕易超過９０公里。如果你每天不帶牠們出去奔跑，牠們就會累積壓力並變得有破壞性，除卻這一點，牠們是相當隨和好親近的寶可夢。"
    },
    "evolution": {
      "stage": "final"
    },
    "baseHP": 4,
    "rank": 2,
    "attr": {
      "str": { "value": 2, "max": 5 },
      "dex": { "value": 3, "max": 7 },
      "vit": { "value": 2, "max": 4 },
      "spe": { "value": 2, "max": 5 },
      "ins": { "value": 2, "max": 4 }
    },
    "ability": [
      "強壯之顎", "好勝"
    ],
    "moves": [
      { "rank": 0, "type": "Electric", "name": "輸電" },
      { "rank": 0, "type": "Normal", "name": "撞擊" },
      { "rank": 1, "type": "Normal", "name": "搖尾巴" },
      { "rank": 1, "type": "Electric", "name": "蹭蹭臉頰" },
      { "rank": 2, "type": "Dark", "name": "咬住" },
      { "rank": 2, "type": "Normal", "name": "吼叫" },
      { "rank": 2, "type": "Electric", "name": "電光" },
      { "rank": 2, "type": "Fairy", "name": "撒嬌" },
      { "rank": 2, "type": "Dark", "name": "咬碎" },
      { "rank": 3, "type": "Electric", "name": "充電" },
      { "rank": 3, "type": "Electric", "name": "瘋狂伏特" },
      { "rank": 3, "type": "Fairy", "name": "嬉鬧" },
      { "rank": 4, "type": "Electric", "name": "電氣場地" },
      { "rank": 4, "type": "Psychic", "name": "精神之牙" },
      { "rank": 4, "type": "Ground", "name": "挖洞" },
      { "rank": 4, "type": "Electric", "name": "雷電牙" }
    ]
  },
  {
    "id": "856",
    "region": "galar",
    "name": "迷布莉姆",
    "alias": "",
    "type": [
      "Psychic"
    ],
    "info": {
      "image": "images/pokedex/856.png",
      "height": "0.4",
      "weight": "3.4",
      "category": "寧靜寶可夢",
      "text": "Though the protrusion on its head it senses other creatures’ emotions. If  you don’t have a calm disposition, it will never warm up to you. They get overwhelmed in places with many people, prefering to hide alone."
    },
    "evolution": {
      "stage": "first",
      "time": "medium"
    },
    "baseHP": 3,
    "rank": 1,
    "attr": {
      "str": { "value": 1, "max": 3 },
      "dex": { "value": 1, "max": 3 },
      "vit": { "value": 2, "max": 4 },
      "spe": { "value": 2, "max": 4 },
      "ins": { "value": 2, "max": 4 }
    },
    "ability": [
      "治癒之心",
      "危險預知"
    ],
    "moves": [
      { "rank": 0, "type": "Psychic", "name": "念力" },
      { "rank": 0, "type": "Normal", "name": "和睦相處" },
      { "rank": 1, "type": "Water", "name": "生命水滴" },
      { "rank": 1, "type": "Fairy", "name": "魅惑之聲" },
      { "rank": 2, "type": "Grass", "name": "芳香治療" },
      { "rank": 2, "type": "Psychic", "name": "幻象光線" },
      { "rank": 2, "type": "Psychic", "name": "治癒波動" },
      { "rank": 2, "type": "Fairy", "name": "魔法閃耀" },
      { "rank": 2, "type": "Psychic", "name": "冥想" },
      { "rank": 3, "type": "Psychic", "name": "精神強念" },
      { "rank": 3, "type": "Psychic", "name": "治癒之願" },
      { "rank": 4, "type": "Electric", "name": "蹭蹭臉頰" },
      { "rank": 4, "type": "Normal", "name": "您先請" },
      { "rank": 4, "type": "Fairy", "name": "芳香薄霧" }
    ],
    "isNovice": true
  },
  {
    "id": "857",
    "region": "galar",
    "name": "提布莉姆",
    "alias": "",
    "type": [
      "Psychic"
    ],
    "info": {
      "image": "images/pokedex/857.png",
      "height": "0.6",
      "weight": "4.8",
      "category": "肅靜寶可夢",
      "text": "It may seem friendly but it is actually quite the loner. No matter who you are, if you bring strong emotions near it, it will silence you violently by hitting you with its braids. It dislikes crowded places."
    },
    "evolution": {
      "stage": "second",
      "time": "medium"
    },
    "baseHP": 4,
    "rank": 2,
    "attr": {
      "str": { "value": 1, "max": 3 },
      "dex": { "value": 2, "max": 4 },
      "vit": { "value": 2, "max": 4 },
      "spe": { "value": 2, "max": 5 },
      "ins": { "value": 2, "max": 5 }
    },
    "ability": [
      "治癒之心",
      "危險預知"
    ],
    "moves": [
      { "rank": 0, "type": "Psychic", "name": "念力" },
      { "rank": 0, "type": "Normal", "name": "和睦相處" },
      { "rank": 1, "type": "Water", "name": "生命水滴" },
      { "rank": 1, "type": "Fairy", "name": "魅惑之聲" },
      { "rank": 2, "type": "Grass", "name": "芳香治療" },
      { "rank": 2, "type": "Psychic", "name": "幻象光線" },
      { "rank": 2, "type": "Psychic", "name": "治癒波動" },
      { "rank": 2, "type": "Fairy", "name": "魔法閃耀" },
      { "rank": 2, "type": "Psychic", "name": "冥想" },
      { "rank": 2, "type": "Dark", "name": "狂舞揮打" },
      { "rank": 2, "type": "Psychic", "name": "治癒之願" },
      { "rank": 3, "type": "Psychic", "name": "精神強念" },
      { "rank": 4, "type": "Dark", "name": "延後" },
      { "rank": 4, "type": "Electric", "name": "蹭蹭臉頰" },
      { "rank": 4, "type": "Normal", "name": "挺住" }
    ]
  },
  {
    "id": "858",
    "region": "galar",
    "name": "布莉姆溫",
    "alias": "",
    "type": [
      "Psychic",
      "Fairy"
    ],
    "info": {
      "image": "images/pokedex/858.png",
      "height": "2.1",
      "weight": "5.1",
      "category": "寂靜寶可夢",
      "text": "If you’re too loud around it, you risk being torn apart by the claws on its tentacle. This Pokémon is also known as the Forest Witch. It is very sensitive to the emotions of others if it senses doubt, fear or anger it will attack you."
    },
    "evolution": {
      "stage": "final"
    },
    "baseHP": 5,
    "rank": 3,
    "attr": {
      "str": { "value": 2, "max": 5 },
      "dex": { "value": 1, "max": 3 },
      "vit": { "value": 3, "max": 6 },
      "spe": { "value": 3, "max": 7 },
      "ins": { "value": 3, "max": 6 }
    },
    "ability": [
      "治癒之心",
      "危險預知"
    ],
    "moves": [
      { "rank": 0, "type": "Psychic", "name": "念力" },
      { "rank": 0, "type": "Normal", "name": "和睦相處" },
      { "rank": 1, "type": "Water", "name": "生命水滴" },
      { "rank": 1, "type": "Fairy", "name": "魅惑之聲" },
      { "rank": 2, "type": "Grass", "name": "芳香治療" },
      { "rank": 2, "type": "Psychic", "name": "幻象光線" },
      { "rank": 2, "type": "Psychic", "name": "治癒波動" },
      { "rank": 2, "type": "Fairy", "name": "魔法閃耀" },
      { "rank": 2, "type": "Psychic", "name": "冥想" },
      { "rank": 3, "type": "Dark", "name": "狂舞揮打" },
      { "rank": 3, "type": "Psychic", "name": "精神利刃" },
      { "rank": 3, "type": "Psychic", "name": "精神強念" },
      { "rank": 3, "type": "Psychic", "name": "治癒之願" },
      { "rank": 3, "type": "Psychic", "name": "魔法粉" },
      { "rank": 4, "type": "Dark", "name": "惡之波動" },
      { "rank": 4, "type": "Fire", "name": "魔法火焰" },
      { "rank": 4, "type": "Psychic", "name": "光牆" }
    ]
  },
  {
    "id": "868",
    "region": "galar",
    "name": "小仙奶",
    "alias": "Milcery",
    "type": [
      "Fairy"
    ],
    "info": {
      "image": "images/pokedex/868.png",
      "height": "0.2",
      "weight": "0.3",
      "category": "鮮奶油寶可夢",
      "text": "This Pokémon was born from sweetsmelling particles in the air, its body is made of cream, Finding one in your kitchen means Good Fortune. Give them berries and whip them with a whisk so they can evolve."
    },
    "evolution": {
      "stage": "first",
      "with": "樹果&糖飾"
    },
    "baseHP": 3,
    "rank": 0,
    "attr": {
      "str": { "value": 1, "max": 3 },
      "dex": { "value": 1, "max": 3 },
      "vit": { "value": 1, "max": 3 },
      "spe": { "value": 2, "max": 4 },
      "ins": { "value": 2, "max": 4 }
    },
    "ability": [
      "甜幕", "芳香幕"
    ],
    "moves": [
      { "rank": 0, "type": "Normal", "name": "撞擊" },
      { "rank": 0, "type": "Fairy", "name": "芳香薄霧" },
      { "rank": 1, "type": "Fairy", "name": "天使之吻" },
      { "rank": 1, "type": "Normal", "name": "甜甜香氣" },
      { "rank": 2, "type": "Fairy", "name": "吸取之吻" },
      { "rank": 2, "type": "Grass", "name": "芳香治療" },
      { "rank": 2, "type": "Normal", "name": "迷人" },
      { "rank": 2, "type": "Poison", "name": "溶化" },
      { "rank": 2, "type": "Fairy", "name": "魔法閃耀" },
      { "rank": 3, "type": "Normal", "name": "自我再生" },
      { "rank": 3, "type": "Fairy", "name": "薄霧場地" },
      { "rank": 3, "type": "Normal", "name": "找夥伴" },
      { "rank": 4, "type": "Fairy", "name": "撒嬌" },
      { "rank": 4, "type": "Normal", "name": "幫助" },
      { "rank": 4, "type": "Dark", "name": "投擲" }
    ],
    "isNovice": true
  },
  {
    "id": "869",
    "region": "galar",
    "name": "霜奶仙",
    "alias": "Alcremie",
    "type": [
      "Fairy"
    ],
    "info": {
      "image": "images/pokedex/869.png",
      "height": "0.3",
      "weight": "0.5",
      "category": "鮮奶油寶可夢",
      "text": "There is a vast number of recipes to evolve an Alcremie, changing their color and flavor, some are sweet, some are sour but they are all delicious. Cakes baked with its help can be sold for a lot of money."
    },
    "evolution": {
      "stage": "final"
    },
    "baseHP": 4,
    "rank": 1,
    "attr": {
      "str": { "value": 2, "max": 4 },
      "dex": { "value": 2, "max": 4 },
      "vit": { "value": 2, "max": 5 },
      "spe": { "value": 3, "max": 6 },
      "ins": { "value": 3, "max": 7 }
    },
    "ability": [
      "甜幕", "芳香幕"
    ],
    "moves": [
      { "rank": 0, "type": "Normal", "name": "撞擊" },
      { "rank": 0, "type": "Fairy", "name": "芳香薄霧" },
      { "rank": 1, "type": "Normal", "name": "甜甜香氣" },
      { "rank": 1, "type": "Fairy", "name": "裝飾" },
      { "rank": 2, "type": "Fairy", "name": "天使之吻" },
      { "rank": 2, "type": "Grass", "name": "芳香治療" },
      { "rank": 2, "type": "Fairy", "name": "吸取之吻" },
      { "rank": 2, "type": "Poison", "name": "溶化" },
      { "rank": 2, "type": "Normal", "name": "迷人" },
      { "rank": 3, "type": "Normal", "name": "自我再生" },
      { "rank": 3, "type": "Fairy", "name": "魔法閃耀" },
      { "rank": 3, "type": "Normal", "name": "找夥伴" },
      { "rank": 3, "type": "Fairy", "name": "薄霧場地" },
      { "rank": 4, "type": "Fire", "name": "魔法火焰" },
      { "rank": 4, "type": "Normal", "name": "替身" },
      { "rank": 4, "type": "Dark", "name": "假哭" }
    ]
  },
  {
    "id": "885",
    "region": "galar",
    "name": "多龍梅西亞",
    "alias": "Dreepy",
    "type": [
      "Dragon",
      "Ghost"
    ],
    "info": {
      "image": "images/pokedex/885.png",
      "height": "0.5",
      "weight": "2",
      "category": "哀怨寶可夢",
      "text": "After being reborn as a ghost, Dreepy wanders the areas it used to inhabit back when it was alive in prehistoric seas. Alone they do not pose much of a threat but if they gather in packs you’ll be in trouble."
    },
    "evolution": {
      "stage": "first",
      "time": "slow"
    },
    "baseHP": 3,
    "rank": 0,
    "attr": {
      "str": { "value": 2, "max": 4 },
      "dex": { "value": 2, "max": 5 },
      "vit": { "value": 1, "max": 3 },
      "spe": { "value": 1, "max": 3 },
      "ins": { "value": 1, "max": 3 }
    },
    "ability": [
      "恆淨之軀",
      "穿透"
    ],
    "moves": [
      { "rank": 0, "type": "Ghost", "name": "驚嚇" },
      { "rank": 0, "type": "Bug", "name": "死纏爛打" },
      { "rank": 1, "type": "Normal", "name": "電光一閃" },
      { "rank": 2, "type": "Dark", "name": "咬住" },
      { "rank": 4, "type": "Normal", "name": "替身" },
      { "rank": 4, "type": "Dragon", "name": "龍尾" },
      { "rank": 4, "type": "Normal", "name": "影子分身" }
    ],
    "isNovice": true
  },
  {
    "id": "886",
    "region": "galar",
    "name": "多龍奇",
    "alias": "Drakloak",
    "type": [
      "Dragon",
      "Ghost"
    ],
    "info": {
      "image": "images/pokedex/886.png",
      "height": "1.4",
      "weight": "11",
      "category": "保母寶可夢",
      "text": "It battles alongside Dreepy and dotes on them until they evolve. Without a Dreepy to place on its head and care for, it gets so uneasy it’ll try to  substitute it with any Pokémon it finds."
    },
    "evolution": {
      "stage": "second",
      "time": "slow"
    },
    "baseHP": 4,
    "rank": 3,
    "attr": {
      "str": { "value": 2, "max": 5 },
      "dex": { "value": 3, "max": 6 },
      "vit": { "value": 2, "max": 4 },
      "spe": { "value": 2, "max": 4 },
      "ins": { "value": 2, "max": 4 }
    },
    "ability": [
      "恆淨之軀",
      "穿透"
    ],
    "moves": [
      { "rank": 0, "type": "Ghost", "name": "驚嚇" },
      { "rank": 0, "type": "Bug", "name": "死纏爛打" },
      { "rank": 1, "type": "Normal", "name": "電光一閃" },
      { "rank": 1, "type": "Dark", "name": "咬住" },
      { "rank": 2, "type": "Normal", "name": "鎖定" },
      { "rank": 2, "type": "Dark", "name": "惡意追擊" },
      { "rank": 2, "type": "Ghost", "name": "禍不單行" },
      { "rank": 2, "type": "Psychic", "name": "高速移動" },
      { "rank": 2, "type": "Normal", "name": "二連擊" },
      { "rank": 2, "type": "Bug", "name": "急速折返" },
      { "rank": 2, "type": "Dragon", "name": "龍之舞" },
      { "rank": 2, "type": "Dragon", "name": "龍之波動" },
      { "rank": 3, "type": "Ghost", "name": "潛靈奇襲" },
      { "rank": 3, "type": "Normal", "name": "猛撞" },
      { "rank": 3, "type": "Dragon", "name": "龍之俯衝" },
      { "rank": 3, "type": "Normal", "name": "捨身衝撞" },
      { "rank": 3, "type": "Normal", "name": "珍藏" },
      { "rank": 4, "type": "Ghost", "name": "奇異之光" },
      { "rank": 4, "type": "Dark", "name": "突襲" },
      { "rank": 4, "type": "Dragon", "name": "流星群" }
    ]
  },
  {
    "id": "887",
    "region": "galar",
    "name": "多龍巴魯托",
    "alias": "Dragapult",
    "type": [ "Dragon", "Ghost" ],
    "info": {
      "image": "images/pokedex/887.png",
      "height": "3",
      "weight": "50",
      "category": "隱形寶可夢",
      "text": "When it isn’t battling, it keeps Dreepy in the holes on its horns. Once a fight starts, it launches the Dreepy like supersonic missiles. The smaller Pokémon appear happy to be shot and will reload themselves."
    },
    "evolution": {
      "stage": "final"
    },
    "baseHP": 6,
    "rank": 4,
    "attr": {
      "str": { "value": 3, "max": 7 },
      "dex": { "value": 3, "max": 7 },
      "vit": { "value": 2, "max": 5 },
      "spe": { "value": 3, "max": 6 },
      "ins": { "value": 2, "max": 5 }
    },
    "ability": [ "恆淨之軀", "穿透" ],
    "moves": [
      { "rank": 0, "type": "Ghost", "name": "驚嚇" },
      { "rank": 0, "type": "Bug", "name": "死纏爛打" },
      { "rank": 1, "type": "Normal", "name": "電光一閃" },
      { "rank": 1, "type": "Dark", "name": "咬住" },
      { "rank": 2, "type": "Normal", "name": "鎖定" },
      { "rank": 2, "type": "Normal", "name": "二連擊" },
      { "rank": 2, "type": "Bug", "name": "急速折返" },
      { "rank": 2, "type": "Dark", "name": "惡意追擊" },
      { "rank": 2, "type": "Dragon", "name": "龍息" },
      { "rank": 2, "type": "Dragon", "name": "龍之舞" },
      { "rank": 2, "type": "Dragon", "name": "龍箭" },
      { "rank": 2, "type": "Ghost", "name": "禍不單行" },
      { "rank": 2, "type": "Psychic", "name": "高速移動" },
      { "rank": 3, "type": "Normal", "name": "捨身衝撞" },
      { "rank": 3, "type": "Normal", "name": "猛撞" },
      { "rank": 3, "type": "Normal", "name": "珍藏" },
      { "rank": 3, "type": "Dark", "name": "突襲" },
      { "rank": 3, "type": "Dragon", "name": "龍之俯衝" },
      { "rank": 3, "type": "Ghost", "name": "潛靈奇襲" },
      { "rank": 4, "type": "Dragon", "name": "流星群" },
      { "rank": 4, "type": "Psychic", "name": "光牆" },
      { "rank": 4, "type": "Psychic", "name": "反射壁" },
    ]
  },
]);
console.log(Pokedex);