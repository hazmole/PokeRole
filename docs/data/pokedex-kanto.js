var Pokedex;
if(!Pokedex) Pokedex = [];

Array.prototype.push.apply(Pokedex, [
  {
	"id": 1,
	"region": "kanto",
	"display_name": "妙蛙種子", "name": "Bulbasaur",
	"type": ["Grass", "Poison"],
	"info": {
		"image": "images/pokedex/001.png",
		"height": "0.7",
		"weight": "7",
		"category": "種子寶可夢",
		"text": "牠出生的時候背上就有一個奇怪的種子。這種子跟隨牠發芽成長。牠以做為乖巧且忠誠的寶可夢聞名，但在野外相當罕見。"
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
	"ability": ["茂盛"],
	"moves": [
		{ "rank": 0, "type": "Normal", "name": "撞擊" },
		{ "rank": 0, "type": "Normal", "name": "叫聲" },
		{ "rank": 1, "type": "Grass", "name": "寄生種子" },
		{ "rank": 1, "type": "Grass", "name": "藤鞭" },
        { "rank": 2, "type": "Normal", "name": "猛撞" },
        { "rank": 2, "type": "Normal", "name": "甜甜香氣" },
        { "rank": 2, "type": "Normal", "name": "生長" },
		{ "rank": 2, "type": "Grass", "name": "催眠粉" },
		{ "rank": 2, "type": "Grass", "name": "飛葉快刀" },
		{ "rank": 2, "type": "Poison", "name": "毒粉" },
        { "rank": 3, "type": "Normal", "name": "捨身衝撞" },
		{ "rank": 3, "type": "Grass", "name": "煩惱種子" },
		{ "rank": 3, "type": "Grass", "name": "光合作用" },
		{ "rank": 4, "type": "Grass", "name": "日光束" },
		{ "rank": 4, "type": "Grass", "name": "青草場地" },
		{ "rank": 4, "type": "Grass", "name": "草之誓約" },
		{ "rank": 4, "type": "Psychic", "name": "瞬間失憶" }
	],
	"isNovice": true,
  },
  {
	"id": 2,
	"region": "kanto",
	"display_name": "妙蛙草", "name": "Ivysaur",
	"type": ["Grass", "Poison"],
	"info": {
		"image": "images/pokedex/002.png",
		"height": "1.0",
		"weight": "25",
		"category": "種子寶可夢",
		"text": "這隻寶可夢的背上生長著花蕾，為了支撐它的重量，妙蛙草的下盤變得強韌。牠在進化後變得較為孤僻，且會遠離群體去做日光浴。"
	},
	"evolution": {
		"stage": "second",
		"time": "medium"
	},
	"baseHP": 4,
	"rank": 2,
	"attr": {
		"str": { "value": 2, "max": 4 },
		"dex": { "value": 2, "max": 4 },
		"vit": { "value": 2, "max": 4 },
		"spe": { "value": 2, "max": 5 },
		"ins": { "value": 2, "max": 5 }
	},
	"ability": ["茂盛"],
	"moves": [
        { "rank": 0, "type": "Normal", "name": "撞擊" },
        { "rank": 0, "type": "Normal", "name": "叫聲" },
        { "rank": 1, "type": "Grass", "name": "寄生種子" },
        { "rank": 1, "type": "Grass", "name": "藤鞭" },
        { "rank": 2, "type": "Normal", "name": "猛撞" },
        { "rank": 2, "type": "Normal", "name": "甜甜香氣" },
        { "rank": 2, "type": "Normal", "name": "生長" },
        { "rank": 2, "type": "Grass", "name": "催眠粉" },
        { "rank": 2, "type": "Grass", "name": "飛葉快刀" },
        { "rank": 2, "type": "Poison", "name": "毒粉" },
        { "rank": 3, "type": "Normal", "name": "捨身衝撞" },
        { "rank": 3, "type": "Grass", "name": "煩惱種子" },
        { "rank": 3, "type": "Grass", "name": "光合作用" },
        { "rank": 4, "type": "Grass", "name": "日光束" },
        { "rank": 4, "type": "Grass", "name": "青草場地" },
        { "rank": 4, "type": "Grass", "name": "草之誓約" },
        { "rank": 4, "type": "Psychic", "name": "瞬間失憶" }
	],
	"isNovice": false,
  },
  {
    "id": 3,
    "region": "kanto",
    "display_name": "妙蛙花", "name": "Venusaur",
    "type": ["Grass", "Poison"],
    "info": {
        "image": "images/pokedex/003.png",
        "height": "2.0",
        "weight": "200",
        "category": "種子寶可夢",
        "text": "據說妙蛙花的花朵會在充足的陽光下展現出鮮豔的顏色。花朵散發的香氣能夠療癒人心。如果你在野外遇到一隻妙蛙花，那牠一定是這個區域的守護者。"
    },
    "evolution": {
        "stage": "final"
    },
    "baseHP": 5,
    "rank": 3,
    "attr": {
        "str": { "value": 2, "max": 5 },
        "dex": { "value": 2, "max": 5 },
        "vit": { "value": 2, "max": 5 },
        "spe": { "value": 3, "max": 6 },
        "ins": { "value": 3, "max": 6 }
    },
    "ability": ["茂盛"],
    "moves": [
        { "rank": 0, "type": "Normal", "name": "撞擊" },
        { "rank": 0, "type": "Normal", "name": "叫聲" },
        { "rank": 1, "type": "Grass", "name": "寄生種子" },
        { "rank": 1, "type": "Grass", "name": "藤鞭" },
        { "rank": 2, "type": "Normal", "name": "猛撞" },
        { "rank": 2, "type": "Normal", "name": "甜甜香氣" },
        { "rank": 2, "type": "Normal", "name": "生長" },
        { "rank": 2, "type": "Normal", "name": "捨身衝撞" },
        { "rank": 2, "type": "Grass", "name": "催眠粉" },
        { "rank": 2, "type": "Grass", "name": "飛葉快刀" },
        { "rank": 2, "type": "Grass", "name": "煩惱種子" },
        { "rank": 2, "type": "Grass", "name": "花瓣舞" },
        { "rank": 2, "type": "Poison", "name": "毒粉" },
        { "rank": 3, "type": "Grass", "name": "光合作用" },
        { "rank": 3, "type": "Grass", "name": "落英繽紛" },
        { "rank": 3, "type": "Grass", "name": "日光束" },
        { "rank": 4, "type": "Dragon", "name": "逆鱗" },
        { "rank": 4, "type": "Ghost", "name": "詛咒" },
        { "rank": 4, "type": "Grass", "name": "瘋狂植物" },
    ],
    "isNovice": false,
  },
  {
    "id": 3,
    "region": "kanto",
    "display_name": "超級妙蛙花", "name": "Mega-Venusaur",
    "type": ["Grass", "Poison"],
    "info": {
        "image": "images/pokedex/003-M.png",
        "height": "2.4",
        "weight": "300",
        "category": "種子寶可夢",
        "text": "藉著超級石的力量，這隻寶可夢變得更高更重。牠的厚皮現在不會受到元素所傷，牠的行為舉止也變得更加嚴肅和堅定。"
    },
    "evolution": {
        "stage": "mega"
    },
    "baseHP": 6,
    "rank": 4,
    "attr": {
        "str": { "value": 3, "max": 6 },
        "dex": { "value": 2, "max": 5 },
        "vit": { "value": 3, "max": 7 },
        "spe": { "value": 3, "max": 6 },
        "ins": { "value": 3, "max": 6 }
    },
    "ability": ["厚脂肪"],
    "moves": [
        { "rank": 0, "type": "Normal", "name": "撞擊" },
        { "rank": 0, "type": "Normal", "name": "叫聲" },
        { "rank": 1, "type": "Grass", "name": "寄生種子" },
        { "rank": 1, "type": "Grass", "name": "藤鞭" },
        { "rank": 2, "type": "Normal", "name": "猛撞" },
        { "rank": 2, "type": "Normal", "name": "甜甜香氣" },
        { "rank": 2, "type": "Normal", "name": "生長" },
        { "rank": 2, "type": "Normal", "name": "捨身衝撞" },
        { "rank": 2, "type": "Grass", "name": "催眠粉" },
        { "rank": 2, "type": "Grass", "name": "飛葉快刀" },
        { "rank": 2, "type": "Grass", "name": "煩惱種子" },
        { "rank": 2, "type": "Grass", "name": "花瓣舞" },
        { "rank": 2, "type": "Poison", "name": "毒粉" },
        { "rank": 3, "type": "Grass", "name": "光合作用" },
        { "rank": 3, "type": "Grass", "name": "落英繽紛" },
        { "rank": 3, "type": "Grass", "name": "日光束" },
        { "rank": 4, "type": "Dragon", "name": "逆鱗" },
        { "rank": 4, "type": "Ghost", "name": "詛咒" },
        { "rank": 4, "type": "Grass", "name": "瘋狂植物" },
    ],
    "isNovice": false,
  },

]);