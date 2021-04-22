var Pokedex;
if(!Pokedex) Pokedex = [];

Array.prototype.push.apply(Pokedex, [
  {
	"id": 415,
	"region": "sinnoh",
	"name": "三蜜蜂", "alias": "ミツハニー|Combee",
	"type": ["Bug", "Flying"],
	"info": {
		"image": "images/pokedex/415.png",
		"height": "0.3",
		"weight": "5",
		"category": "幼蜂寶可夢",
		"text": "It forms hives around trees. It flies all day sipping the nectar from flowers to make honey. It is usually born a male. If a female is born, it will grow into a Vespiqueen and start its own Hive."
	},
	"evolution": {
		"stage": "first",
		"time": "slow",
        "note": "限定雌性"
	},
	"baseHP": 3,
	"rank": 0,
	"attr": {
		"str": { "value": 1, "max": 3 },
		"dex": { "value": 2, "max": 5 },
		"vit": { "value": 1, "max": 3 },
		"spe": { "value": 1, "max": 3 },
		"ins": { "value": 1, "max": 3 }
	},
	"ability": ["採蜜"],
	"moves": [
		{ "rank": 0, "type": "Normal", "name": "Sweet Scent" },
        { "rank": 0, "type": "Flying", "name": "Gust" },
        { "rank": 2, "type": "Bug", "name": "蟲咬" },
        { "rank": 2, "type": "Bug", "name": "蟲鳴" },
        { "rank": 4, "type": "Normal", "name": "Swift" },
        { "rank": 4, "type": "Normal", "name": "蠻幹" },
        { "rank": 4, "type": "Flying", "name": "Tailwind" },
	],
	"isNovice": true,
  },
  {
    "id": 416,
    "region": "sinnoh",
    "name": "蜂女王", "alias": "ビークイン|Vespiquen",
    "type": ["Bug", "Flying"],
    "info": {
        "image": "images/pokedex/416.png",
        "height": "1.2",
        "weight": "38",
        "category": "蜂巢寶可夢",
        "text": "This Pokémon is female only. It raises grubs in the holes in its body and secretes pheromones to control Combee to fight and gather honey for her. It is a royal Pokémon that won’t take orders from anyone."
    },
    "evolution": {
        "stage": "final"
    },
    "baseHP": 4,
    "rank": 3,
    "attr": {
        "str": { "value": 2, "max": 5 },
        "dex": { "value": 2, "max": 4 },
        "vit": { "value": 3, "max": 6 },
        "spe": { "value": 2, "max": 5 },
        "ins": { "value": 3, "max": 6 }
    },
    "ability": ["壓迫感"],
    "moves": [
        { "rank": 0, "type": "Normal", "name": "Sweet Scent" },
        { "rank": 0, "type": "Flying", "name": "Gust" },
        { "rank": 1, "type": "Bug", "name": "連斬" },
        { "rank": 1, "type": "Dark", "name": "追打" },
        { "rank": 1, "type": "Ghost", "name": "Confuse Ray" },
        { "rank": 1, "type": "Poison", "name": "Poison Sting" },
        { "rank": 2, "type": "Normal", "name": "亂抓" },
        { "rank": 2, "type": "Normal", "name": "Slash" },
        { "rank": 2, "type": "Bug", "name": "致命針刺" },
        { "rank": 2, "type": "Bug", "name": "攻擊指令" },
        { "rank": 2, "type": "Bug", "name": "防禦指令" },
        { "rank": 2, "type": "Bug", "name": "回復指令" },
        { "rank": 2, "type": "Poison", "name": "Toxic" },
        { "rank": 2, "type": "Rock", "name": "Power Gem" },
        { "rank": 3, "type": "Normal", "name": "誘惑" },
        { "rank": 3, "type": "Normal", "name": "Swagger" },
        { "rank": 3, "type": "Flying", "name": "Air Slash" },
        { "rank": 3, "type": "Ghost", "name": "Destiny Bond" },
        { "rank": 4, "type": "Normal", "name": "挺住" },
        { "rank": 4, "type": "Bug", "name": "信號光束" },
        { "rank": 4, "type": "Ghost", "name": "Ominous Wind" },
    ],
    "isNovice": false,
  },

]);