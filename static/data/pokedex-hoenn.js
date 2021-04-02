var Pokedex;
if(!Pokedex) Pokedex = [];

Array.prototype.push.apply(Pokedex, [
  {
	"id": 263,
	"region": "hoenn",
	"display_name": "蛇紋熊", "name": "Zigzagoon",
	"type": ["Normal"],
	"info": {
		"image": "images/pokedex/263.png",
		"height": "0.4",
		"weight": "17",
		"category": "豆狸寶可夢",
		"text": "牠們的好奇心旺盛，對看到的各種東西都充滿興趣，因此牠們十分擅長找東西。有時牠們會裝死來避免被攻擊。"
	},
	"evolution": {
		"stage": "first",
		"time": "medium"
	},
	"baseHP": 3,
	"rank": 1,
	"attr": {
		"str": { "value": 1, "max": 3 },
		"dex": { "value": 2, "max": 4 },
		"vit": { "value": 1, "max": 3 },
		"spe": { "value": 1, "max": 3 },
		"ins": { "value": 1, "max": 3 },
	},
	"ability": ["撿拾", "貪吃鬼"],
	"moves": [
        { "rank": 0, "type": "Normal", "name": "撞擊" },
        { "rank": 0, "type": "Normal", "name": "叫聲" },
        { "rank": 1, "type": "Normal", "name": "搖尾巴" },
        { "rank": 1, "type": "Normal", "name": "猛撞" },
        { "rank": 1, "type": "Fairy", "name": "圓瞳" },
        { "rank": 2, "type": "Normal", "name": "頭錘" },
        { "rank": 2, "type": "Normal", "name": "氣味偵測" },
        { "rank": 2, "type": "Normal", "name": "渴望" },
        { "rank": 2, "type": "Normal", "name": "傳遞禮物" },
        { "rank": 2, "type": "Bug", "name": "飛彈針" },
        { "rank": 2, "type": "Ground", "name": "潑沙" },
        { "rank": 2, "type": "Ground", "name": "玩泥巴" },
        { "rank": 3, "type": "Normal", "name": "抓狂" },
        { "rank": 3, "type": "Normal", "name": "腹鼓" },
        { "rank": 3, "type": "Dark", "name": "投擲" },
        { "rank": 3, "type": "Psychic", "name": "睡覺" },
        { "rank": 4, "type": "Normal", "name": "幫助" },
        { "rank": 4, "type": "Grass", "name": "種子炸彈" },
        { "rank": 4, "type": "Psychic", "name": "戲法" },
	],
	"isNovice": true,
  },
  {
    "id": 264,
    "region": "hoenn",
    "display_name": "直衝熊", "name": "Linoone",
    "type": ["Normal"],
    "info": {
        "image": "images/pokedex/264.png",
        "height": "0.5",
        "weight": "32",
        "category": "猛衝寶可夢",
        "text": "直衝熊總是以全速衝刺，但只能夠直線奔跑，非常不擅長應付彎道。牠們擅長狩獵，但也會需要吃很多東西才能從奔跑的疲累中恢復過來。"
    },
    "evolution": {
        "stage": "final"
    },
    "baseHP": 4,
    "rank": 2,
    "attr": {
        "str": { "value": 2, "max": 5 },
        "dex": { "value": 3, "max": 6 },
        "vit": { "value": 2, "max": 4 },
        "spe": { "value": 2, "max": 4 },
        "ins": { "value": 2, "max": 4 },
    },
    "ability": ["撿拾", "貪吃鬼"],
    "moves": [
        { "rank": 0, "type": "Normal", "name": "撞擊" },
        { "rank": 0, "type": "Normal", "name": "叫聲" },
        { "rank": 1, "type": "Normal", "name": "搖尾巴" },
        { "rank": 1, "type": "Dark", "name": "掉包" },
        { "rank": 1, "type": "Ground", "name": "潑沙" },
        { "rank": 2, "type": "Normal", "name": "頭錘" },
        { "rank": 2, "type": "Normal", "name": "亂抓" },
        { "rank": 2, "type": "Normal", "name": "氣味偵測" },
        { "rank": 2, "type": "Normal", "name": "渴望" },
        { "rank": 2, "type": "Normal", "name": "傳遞禮物" },
        { "rank": 2, "type": "Fairy", "name": "嬉鬧" },
        { "rank": 2, "type": "Ground", "name": "耕地" },
        { "rank": 2, "type": "Ground", "name": "玩泥巴" },
        { "rank": 3, "type": "Normal", "name": "捨身衝撞" },
        { "rank": 3, "type": "Normal", "name": "劈開" },
        { "rank": 3, "type": "Normal", "name": "腹鼓" },
        { "rank": 3, "type": "Dark", "name": "投擲" },
        { "rank": 3, "type": "Psychic", "name": "睡覺" },
        { "rank": 4, "type": "Normal", "name": "神速" },
        { "rank": 4, "type": "Normal", "name": "憤怒門牙" },
        { "rank": 4, "type": "Grass", "name": "種子炸彈" },
    ],
  },

]);