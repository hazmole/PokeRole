var Pokedex;
if(!Pokedex) Pokedex = [];

Array.prototype.push.apply(Pokedex, [
{
  "id": "661",
  "region": "kalos",
  "name": "小箭雀",
  "alias": "Fletchling",
  "type": [
    "Normal",
    "Flying"
  ],
  "info": {
    "image": "images/pokedex/661.png",
    "height": "0.3",
    "weight": "1",
    "category": "知更鳥寶可夢",
    "text": "這些可愛的寶可夢會用婉轉美麗的叫聲和揮動尾羽的動作向夥伴發送信號。儘管叫聲美麗，但牠對於入侵領地的對手會毫不留情地粗暴對待。"
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
    "vit": { "value": 1, "max": 3 },
    "spe": { "value": 1, "max": 3 },
    "ins": { "value": 1, "max": 3 }
  },
  "ability": [
    "健壯胸肌"
  ],
  "moves": [
    { "rank": 0, "type": "Normal", "name": "撞擊"},
    { "rank": 0, "type": "Normal", "name": "叫聲"},
    { "rank": 1, "type": "Normal", "name": "電光一閃"},
    { "rank": 1, "type": "Flying", "name": "啄"},
    { "rank": 2, "type": "Psychic", "name": "高速移動"},
    { "rank": 2, "type": "Normal", "name": "抓狂"},
    { "rank": 2, "type": "Flying", "name": "羽棲"},
    { "rank": 2, "type": "Normal", "name": "旋風刀"},
    { "rank": 2, "type": "Normal", "name": "自然之恩" },
    { "rank": 2, "type": "Fire", "name": "蓄能焰襲" },
    { "rank": 3, "type": "Flying", "name": "雜耍"},
    { "rank": 3, "type": "Normal", "name": "搶先一步"},
    { "rank": 3, "type": "Flying", "name": "順風"},
    { "rank": 3, "type": "Steel", "name": "鋼翼"},
    { "rank": 4, "type": "Dark", "name": "搶奪"},
    { "rank": 4, "type": "Fight", "name": "快速防守"},
    { "rank": 4, "type": "Flying", "name": "空氣利刃"}
  ],
  "isNovice": true
},
{
  "id": "662",
  "region": "kalos",
  "name": "火箭雀",
  "alias": "Fletchinder",
  "type": [
    "Fire",
    "Flying"
  ],
  "info": {
    "image": "images/pokedex/662.png",
    "height": "0.7",
    "weight": "16",
    "category": "火花寶可夢",
    "text": "牠會從鳥嘴裡噴出火花來燒焦草叢，接著撲向因為受到驚嚇而逃出來的獵物。牠的身體會在開始戰鬥的時候被火焰纏繞，是隻性情好戰的寶可夢。"
  },
  "evolution": {
    "stage": "second",
    "time": "medium"
  },
  "baseHP": 4,
  "rank": 1,
  "attr": {
    "str": { "value": 2, "max": 5 },
    "dex": { "value": 2, "max": 5 },
    "vit": { "value": 2, "max": 4 },
    "spe": { "value": 2, "max": 4 },
    "ins": { "value": 2, "max": 4 }
  },
  "ability": [
    "火焰之軀"
  ],
  "moves": [
    { "rank": 0, "type": "Normal", "name": "撞擊" },
    { "rank": 0, "type": "Normal", "name": "叫聲" },
    { "rank": 1, "type": "Normal", "name": "電光一閃" },
    { "rank": 1, "type": "Flying", "name": "啄" },
    { "rank": 2, "type": "Psychic", "name": "高速移動" },
    { "rank": 2, "type": "Normal", "name": "抓狂" },
    { "rank": 2, "type": "Fire", "name": "火花" },
    { "rank": 2, "type": "Flying", "name": "羽棲" },
    { "rank": 2, "type": "Normal", "name": "旋風刀" },
    { "rank": 2, "type": "Normal", "name": "自然之恩" },
    { "rank": 2, "type": "Fire", "name": "蓄能焰襲" },
    { "rank": 3, "type": "Flying", "name": "雜耍" },
    { "rank": 3, "type": "Normal", "name": "搶先一步" },
    { "rank": 3, "type": "Flying", "name": "順風" },
    { "rank": 3, "type": "Steel", "name": "鋼翼" },
    { "rank": 4, "type": "Dark", "name": "搶奪" },
    { "rank": 4, "type": "Fight", "name": "快速防守" },
    { "rank": 4, "type": "Fire", "name": "熱風" },
    
  ]
},
{
  "id": "663",
  "region": "kalos",
  "name": "烈箭鷹",
  "alias": "Talonflame",
  "type": [
    "Fire",
    "Flying"
  ],
  "info": {
    "image": "images/pokedex/663.png",
    "height": "1.2",
    "weight": "24",
    "category": "烈火寶可夢",
    "text": "牠們翱翔於沙漠峽谷上空。如果發現了獵物，牠們會急速俯衝並給予致命一擊。牠們是傑出的獵手，每一次振翅都會在身後留下火焰的軌跡。"
  },
  "evolution": {
    "stage": "final"
  },
  "baseHP": 5,
  "rank": 2,
  "attr": {
    "str": { "value": 2, "max": 5 },
    "dex": { "value": 3, "max": 7 },
    "vit": { "value": 2, "max": 5 },
    "spe": { "value": 2, "max": 5 },
    "ins": { "value": 2, "max": 4 }
  },
  "ability": [
    "火焰之軀"
  ],
  "moves": [
    { "rank": 0, "type": "Normal", "name": "撞擊" },
    { "rank": 0, "type": "Normal", "name": "叫聲" },
    { "rank": 1, "type": "Normal", "name": "電光一閃" },
    { "rank": 1, "type": "Flying", "name": "啄" },
    { "rank": 2, "type": "Psychic", "name": "高速移動" },
    { "rank": 2, "type": "Normal", "name": "抓狂" },
    { "rank": 2, "type": "Flying", "name": "羽棲" },
    { "rank": 2, "type": "Normal", "name": "旋風刀" },
    { "rank": 2, "type": "Normal", "name": "自然之恩" },
    { "rank": 2, "type": "Fire", "name": "蓄能焰襲" },
    { "rank": 2, "type": "Fire", "name": "火花" },
    { "rank": 3, "type": "Fire", "name": "閃焰衝鋒" },
    { "rank": 3, "type": "Flying", "name": "雜耍" },
    { "rank": 3, "type": "Normal", "name": "搶先一步" },
    { "rank": 3, "type": "Flying", "name": "順風" },
    { "rank": 3, "type": "Steel", "name": "鋼翼" },
    { "rank": 3, "type": "Flying", "name": "勇鳥猛攻" },
    { "rank": 4, "type": "Dark", "name": "搶奪" },
    { "rank": 4, "type": "Fight", "name": "快速防守" },
    { "rank": 4, "type": "Fire", "name": "熱風" }
  ]
},
{
  "id": "664",
  "region": "kalos",
  "name": "粉蝶蟲",
  "alias": "Scatterbug",
  "type": [
    "Bug"
  ],
  "info": {
    "image": "images/pokedex/664.png",
    "height": "0.3",
    "weight": "2",
    "category": "噴粉寶可夢",
    "text": "覆蓋身體的粉末能夠調節體溫，讓牠無論在任何氣候或地區下都能生活。每當受到襲擊時，牠會撒出一旦接觸就會麻痺的黑色粉末。"
  },
  "evolution": {
    "stage": "first",
    "time": "fast"
  },
  "baseHP": 3,
  "rank": 0,
  "attr": {
    "str": { "value": 1, "max": 3 },
    "dex": { "value": 1, "max": 3 },
    "vit": { "value": 1, "max": 3 },
    "spe": { "value": 1, "max": 3 },
    "ins": { "value": 1, "max": 3 }
  },
  "ability": [
    "鱗粉",
    "複眼"
  ],
  "moves": [
    { "rank": 0, "type": "Normal", "name": "撞擊" },
    { "rank": 0, "type": "Bug", "name": "吐絲" },
    { "rank": 1, "type": "Grass", "name": "麻痺粉" },
    { "rank": 2, "type": "Bug", "name": "蟲咬" },
    { "rank": 3, "type": "Bug", "name": "憤怒粉" }
  ],
  "isNovice": true
},
{
  "id": "665",
  "region": "kalos",
  "name": "粉蝶蛹",
  "alias": "Spewpa",
  "type": [
    "Bug"
  ],
  "info": {
    "image": "images/pokedex/665.png",
    "height": "0.3",
    "weight": "8",
    "category": "噴粉寶可夢",
    "text": "牠躲藏在老舊原木裏頭。當被獵食者襲擊時，牠就會將體毛尖尖豎起威嚇敵人。牠為了防守而釋放的粉塵，讓鳥寶可夢很難吃掉牠們。"
  },
  "evolution": {
    "stage": "second",
    "time": "fast"
  },
  "baseHP": 4,
  "rank": 1,
  "attr": {
    "str": { "value": 1, "max": 3 },
    "dex": { "value": 1, "max": 3 },
    "vit": { "value": 2, "max": 4 },
    "spe": { "value": 1, "max": 3 },
    "ins": { "value": 1, "max": 3 }
  },
  "ability": [
    "蛻皮"
  ],
  "moves": [
    { "rank": 0, "type": "Normal", "name": "變硬" },
    { "rank": 1, "type": "Normal", "name": "守住" },
    { "rank": 3, "type": "Steel", "name": "鐵壁" },
    { "rank": 3, "type": "Electric", "name": "電網" }
  ],
  "isNovice": true
},
{
  "id": "666",
  "region": "kalos",
  "name": "彩粉蝶",
  "alias": "Vivillon",
  "type": [
    "Bug",
    "Flying"
  ],
  "info": {
    "image": "images/pokedex/666.png",
    "height": "1.2",
    "weight": "17",
    "category": "鱗粉寶可夢",
    "text": "這隻寶可夢的花紋似乎是受到棲息地的氣候和花朵的影響。曾有位有名的寶可夢飼育家培育出了精靈球造型花紋的品種，並以一百萬元的高價出售。"
  },
  "evolution": {
    "stage": "final"
  },
  "baseHP": 5,
  "rank": 2,
  "attr": {
    "str": { "value": 2, "max": 4 },
    "dex": { "value": 2, "max": 5 },
    "vit": { "value": 2, "max": 4 },
    "spe": { "value": 2, "max": 5 },
    "ins": { "value": 2, "max": 4 }
  },
  "ability": [
    "鱗粉",
    "複眼"
  ],
  "moves": [
    { "rank": 0, "type": "Bug", "name": "粉塵" },
    { "rank": 0, "type": "Flying", "name": "起風" },
    { "rank": 1, "type": "Poison", "name": "毒粉" },
    { "rank": 1, "type": "Grass", "name": "麻痺粉" },
    { "rank": 1, "type": "Grass", "name": "催眠粉" },
    { "rank": 2, "type": "Psychic", "name": "光牆" },
    { "rank": 2, "type": "Bug", "name": "蟲之抵抗" },
    { "rank": 2, "type": "Psychic", "name": "幻象光線" },
    { "rank": 2, "type": "Normal", "name": "超音波" },
    { "rank": 2, "type": "Fairy", "name": "吸取之吻" },
    { "rank": 2, "type": "Grass", "name": "芳香治療" },
    { "rank": 3, "type": "Bug", "name": "蟲鳴" },
    { "rank": 3, "type": "Normal", "name": "神秘守護" },
    { "rank": 3, "type": "Bug", "name": "蝶舞" },
    { "rank": 3, "type": "Flying", "name": "暴風" },
    { "rank": 4, "type": "Grass", "name": "終極吸取" },
    { "rank": 4, "type": "Electric", "name": "電網" },
    { "rank": 4, "type": "Flying", "name": "順風" }
  ]
},
{
  "id": "698",
  "region": "kalos",
  "name": "冰雪龍",
  "alias": "Amaura",
  "type": [
    "Rock",
    "Ice"
  ],
  "info": {
    "image": "images/pokedex/698.png",
    "height": "1.3",
    "weight": "50",
    "category": "凍原寶可夢",
    "text": "從１億年前陷入冰封狀態的身體的一部分復活而來的古代寶可夢。這種性格溫和的寶可夢居住在沒有怪顎龍等凶暴敵人棲息的寒冷土地上。"
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
    "冰凍皮膚"
  ],
  "moves": [
    { "rank": 0, "type": "Normal", "name": "叫聲" },
    { "rank": 0, "type": "Ice", "name": "細雪" },
    { "rank": 1, "type": "Electric", "name": "電磁波" },
    { "rank": 1, "type": "Rock", "name": "落石" },
    { "rank": 1, "type": "Ice", "name": "冰凍之風" },
    { "rank": 2, "type": "Normal", "name": "猛撞" },
    { "rank": 2, "type": "Ice", "name": "白霧" },
    { "rank": 2, "type": "Ice", "name": "極光束" },
    { "rank": 2, "type": "Rock", "name": "原始之力" },
    { "rank": 2, "type": "Normal", "name": "輪唱" },
    { "rank": 2, "type": "Ice", "name": "雪崩" },
    { "rank": 2, "type": "Ice", "name": "冰雹" },
    { "rank": 2, "type": "Normal", "name": "自然之力" },
    { "rank": 3, "type": "Normal", "name": "再來一次" },
    { "rank": 3, "type": "Psychic", "name": "光牆" },
    { "rank": 3, "type": "Ice", "name": "冰凍光束" },
    { "rank": 3, "type": "Normal", "name": "破壞光線" },
    { "rank": 3, "type": "Ice", "name": "暴風雪" },
    { "rank": 4, "type": "Ground", "name": "大地之力" },
    { "rank": 4, "type": "Rock", "name": "隱形岩" },
    { "rank": 4, "type": "Water", "name": "水之波動" }
  ]
},
{
  "id": "700",
  "region": "kalos",
  "name": "仙子伊布",
  "alias": "Sylveon",
  "type": [
    "Fairy"
  ],
  "info": {
    "image": "images/pokedex/700.png",
    "height": "1",
    "weight": "23.5",
    "category": "連結寶可夢",
    "text": "這隻罕見且討人喜歡的寶可夢會釋放出消除敵意的波動，藉此平息紛爭。據說只有和伊布締結了牢不可破羈絆的訓練家能見到這種寶可夢。"
  },
  "evolution": {
    "stage": "final",
    "by": "忠誠度5時"
  },
  "baseHP": "4",
  "rank": 2,
  "attr": {
    "str": { "value": 2, "max": 4 },
    "dex": { "value": 2, "max": 4 },
    "vit": { "value": 2, "max": 4 },
    "spe": { "value": 3, "max": 6 },
    "ins": { "value": 3, "max": 7 }
  },
  "ability": [
    "迷人之軀"
  ],
  "moves": [
    { "rank": 0, "type": "Normal", "name": "撞擊" },
    { "rank": 0, "type": "Normal", "name": "搖尾巴" },
    { "rank": 1, "type": "Ground", "name": "潑沙" },
    { "rank": 1, "type": "Normal", "name": "幫助" },
    { "rank": 1, "type": "Fairy", "name": "妖精之風" },
    { "rank": 2, "type": "Fairy", "name": "魅惑之聲" },
    { "rank": 2, "type": "Normal", "name": "電光一閃" },
    { "rank": 2, "type": "Normal", "name": "高速星星" },
    { "rank": 2, "type": "Fairy", "name": "吸取之吻" },
    { "rank": 2, "type": "Psychic", "name": "特性互換" },
    { "rank": 2, "type": "Fairy", "name": "薄霧場地" },
    { "rank": 2, "type": "Psychic", "name": "光牆" },
    { "rank": 3, "type": "Fairy", "name": "月亮之力" },
    { "rank": 3, "type": "Normal", "name": "珍藏" },
    { "rank": 3, "type": "Normal", "name": "自我暗示" },
    { "rank": 4, "type": "Normal", "name": "祈願" },
    { "rank": 4, "type": "Normal", "name": "巨聲" },
    { "rank": 4, "type": "Normal", "name": "誘惑" }
  ]
},
{
  "id": "701",
  "region": "kalos",
  "name": "摔角鷹人",
  "alias": "Hawlucha",
  "type": [
    "Fight",
    "Flying"
  ],
  "info": {
    "image": "images/pokedex/701.png",
    "height": "0.8",
    "weight": "21",
    "category": "摔角寶可夢",
    "text": "牠的體型雖小，但卻是個能與怪力或鐵掌力士等大型寶可夢打得不相上下的技術高手。利用翅膀從高處攻擊讓牠能在戰鬥中大大取得優勢。"
  },
  "evolution": {
    "stage": "final"
  },
  "baseHP": "4",
  "rank": 2,
  "attr": {
    "str": { "value": 2, "max": 5 },
    "dex": { "value": 3, "max": 6 },
    "vit": { "value": 2, "max": 5 },
    "spe": { "value": 2, "max": 5 },
    "ins": { "value": 2, "max": 4 }
  },
  "ability": [
    "柔軟",
    "輕裝"
  ],
  "moves": [
    { "rank": 0, "type": "Fight", "name": "看穿" },
    { "rank": 0, "type": "Normal", "name": "撞擊" },
    { "rank": 0, "type": "Dark", "name": "磨爪" },
    { "rank": 1, "type": "Fight", "name": "空手劈" },
    { "rank": 1, "type": "Flying", "name": "翅膀攻擊" },
    { "rank": 2, "type": "Flying", "name": "羽棲" },
    { "rank": 2, "type": "Flying", "name": "燕返" },
    { "rank": 2, "type": "Normal", "name": "再來一次" },
    { "rank": 2, "type": "Dark", "name": "投擲" },
    { "rank": 2, "type": "Fight", "name": "飛身重壓" },
    { "rank": 2, "type": "Flying", "name": "彈跳" },
    { "rank": 2, "type": "Normal", "name": "蠻幹" },
    { "rank": 2, "type": "Flying", "name": "羽毛舞" },
    { "rank": 3, "type": "Fight", "name": "飛膝踢" },
    { "rank": 3, "type": "Flying", "name": "神鳥猛擊" },
    { "rank": 3, "type": "Flying", "name": "自由落體" },
    { "rank": 3, "type": "Normal", "name": "劍舞" },
    { "rank": 4, "type": "Electric", "name": "雷電拳" },
    { "rank": 4, "type": "Dragon", "name": "二連劈" },
    { "rank": 4, "type": "Flying", "name": "順風" }
  ]
},

]);
console.log(Pokedex);