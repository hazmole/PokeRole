var MoveList;
if(!MoveList) MoveList = [];

Array.prototype.push.apply(MoveList, [
	{
		"name": "擲錨", "alias": "アンカーショット|Anchor Shot",
		"power": "",
		"category": "",
		"type": "Steel",
		"tags": ["target|l|"],
		"accuracy": " + ",
		"damage": "",
		"effect": "",
		"desc": ""
	},
	{
		"name": "身體輕量化", "alias": "ボディパージ|Autotomize",
		"power": "",
		"category": "",
		"type": "Steel",
		"tags": ["target|l|"],
		"accuracy": " + ",
		"damage": "",
		"effect": "",
		"desc": ""
	},
	{
		"name": "巨獸彈", "alias": "きょじゅうだん|Behemoth Bash",
		"power": "",
		"category": "",
		"type": "Steel",
		"tags": ["target|l|"],
		"accuracy": " + ",
		"damage": "",
		"effect": "",
		"desc": ""
	},
	{
		"name": "巨獸斬", "alias": "きょじゅうざん|Behemoth Blade",
		"power": "",
		"category": "",
		"type": "Steel",
		"tags": ["target|l|"],
		"accuracy": " + ",
		"damage": "",
		"effect": "",
		"desc": ""
	},
	{
		"name": "子彈拳", "alias": "バレットパンチ|Bullet Punch",
		"power": "",
		"category": "",
		"type": "Steel",
		"tags": ["target|l|"],
		"accuracy": " + ",
		"damage": "",
		"effect": "",
		"desc": ""
	},
	{
		"name": "破滅之願", "alias": "はめつのねがい|Doom Desire",
		"power": "",
		"category": "",
		"type": "Steel",
		"tags": ["target|l|"],
		"accuracy": " + ",
		"damage": "",
		"effect": "",
		"desc": ""
	},
	{
		"name": "鋼拳雙擊", "alias": "ダブルパンツァー|Double Iron Bash",
		"power": "",
		"category": "",
		"type": "Steel",
		"tags": ["target|l|"],
		"accuracy": " + ",
		"damage": "",
		"effect": "",
		"desc": ""
	},
	{
		"name": "加農光炮", "alias": "ラスターカノン|Flash Cannon",
		"power": "",
		"category": "",
		"type": "Steel",
		"tags": ["target|l|"],
		"accuracy": " + ",
		"damage": "",
		"effect": "",
		"desc": ""
	},
	{
		"name": "齒輪飛盤", "alias": "ギアソーサー|Gear Grind",
		"power": "",
		"category": "",
		"type": "Steel",
		"tags": ["target|l|"],
		"accuracy": " + ",
		"damage": "",
		"effect": "",
		"desc": ""
	},
	{
		"name": "輔助齒輪", "alias": "アシストギア|Gear Up",
		"power": "",
		"category": "",
		"type": "Steel",
		"tags": ["target|l|"],
		"accuracy": " + ",
		"damage": "",
		"effect": "",
		"desc": ""
	},
	{
		"name": "陀螺球", "alias": "ジャイロボール|Gyro Ball",
		"power": "",
		"category": "",
		"type": "Steel",
		"tags": ["target|l|"],
		"accuracy": " + ",
		"damage": "",
		"effect": "",
		"desc": ""
	},
	{
		"name": "重磅衝撞", "alias": "ヘビーボンバー|Heavy Slam",
		"power": "",
		"category": "",
		"type": "Steel",
		"tags": ["target|l|"],
		"accuracy": " + ",
		"damage": "",
		"effect": "",
		"desc": ""
	},
	{
		"name": "鐵壁", "alias": "てっぺき|Iron Defense",
		"power": "",
		"category": "",
		"type": "Steel",
		"tags": ["target|l|"],
		"accuracy": " + ",
		"damage": "",
		"effect": "",
		"desc": ""
	},
	{
		"name": "鐵頭", "alias": "アイアンヘッド|Iron Head",
		"power": "",
		"category": "",
		"type": "Steel",
		"tags": ["target|l|"],
		"accuracy": " + ",
		"damage": "",
		"effect": "",
		"desc": ""
	},
	{
		"name": "鐵尾", "alias": "アイアンテール|Iron Tail",
		"power": "",
		"category": "",
		"type": "Steel",
		"tags": ["target|l|"],
		"accuracy": " + ",
		"damage": "",
		"effect": "",
		"desc": ""
	},
	{
		"name": "王者盾牌", "alias": "キングシールド|King's Shield",
		"power": "",
		"category": "",
		"type": "Steel",
		"tags": ["target|l|"],
		"accuracy": " + ",
		"damage": "",
		"effect": "",
		"desc": ""
	},
	{
		"name": "磁鐵炸彈", "alias": "マグネットボム|Magnet Bomb",
		"power": "",
		"category": "",
		"type": "Steel",
		"tags": ["target|l|"],
		"accuracy": " + ",
		"damage": "",
		"effect": "",
		"desc": ""
	},
	{
		"name": "金屬爆炸", "alias": "メタルバースト|Metal Burst",
		"power": "*",
		"category": "physical",
		"type": "Steel",
		"tags": ["target|l|foe"],
		"accuracy": "靈巧 + 鬥毆",
		"damage": "不定",
		"effect": "這個招式只能在敵人剛剛進行了攻擊後才能夠發揮作用。這個招式的傷害骰池等同於你敵人上次攻擊的傷害骰池再額外增加 2 顆骰子。無視敵人的防禦。",
		"desc": "在承受傷害之後，因為敵人攻擊而脫落，使用者爆發出無數細小而尖銳的金屬碎片。牠承受的衝擊越大，射出的金屬碎片就越多。"
	},
	{
		"name": "金屬爪", "alias": "メタルクロー|Metal Claw",
		"power": "2",
		"category": "physical",
		"type": "Steel",
		"tags": ["target|l|foe", "frame|accuracy||down|1", "dice|l|1", "frame|self|力量|up|1"],
		"accuracy": "靈巧 + 鬥毆",
		"damage": "力量 + 2",
		"effect": "骰 1 顆機率骰以提升使用者的力量。",
		"desc": "寶可夢使用牠鋒利的利爪攻擊，摩擦撞擊的過程可能會使它變得更加鋒利。"
	},
	{
		"name": "金屬音", "alias": "きんぞくおん|Metal Sound",
		"power": "-",
		"category": "support",
		"type": "Steel",
		"tags": ["target|l|foe", "effect|l|sound", "frame|target|特防|down|2"],
		"accuracy": "強壯 + 表演",
		"damage": "-",
		"effect": "聲音類招式。降低敵人的特防。",
		"desc": "使用者製造出可怕的噪音，妨礙敵人在戰鬥中專注，並使其在面對攻擊時更加脆弱。"
	},
	{
		"name": "彗星拳", "alias": "コメットパンチ|Meteor Mash",
		"power": "3",
		"category": "physical",
		"type": "Steel",
		"tags": ["target|l|foe", "frame|accuracy||down|1", "effect|l|fist", "dice|l|2", "frame|self|力量|up|1"],
		"accuracy": "靈巧 + 鬥毆",
		"damage": "力量 + 3",
		"effect": "拳頭類招式。骰 2 顆機率骰以提升使用者的力量。",
		"desc": "使用者舉起強勁的拳頭衝刺，彷彿彗星一般襲來。"
	},
	{
		"name": "鏡光射擊", "alias": "ミラーショット|Mirror Shot",
		"power": "2",
		"category": "special",
		"type": "Steel",
		"tags": ["target|l|foe", "frame|accuracy||down|2", "frame|confuse||number|d3"],
		"accuracy": "靈巧 + 導引",
		"damage": "特殊 + 2",
		"effect": "骰 2 顆機率骰以使敵人陷入「混亂」狀態。",
		"desc": "使用者射出一道光束使敵人頭暈目眩。那些體驗過這一擊的受害者會把這個經歷形容為「被困在鏡子迷宮之中」。"
	},
	{
		"name": "換檔", "alias": "ギアチェンジ|Shift Gear",
		"power": "-",
		"category": "support",
		"type": "Steel",
		"tags": ["target|l|self", "frame|self|力量|up|1", "frame|self|靈巧|up|2"],
		"accuracy": "靈巧 + 導引",
		"damage": "-",
		"effect": "提升使用者的力量和靈巧。",
		"desc": "寶可夢讓牠的齒輪高速旋轉，如同高功率的機器一樣運轉。"
	},
	{
		"name": "修長之角", "alias": "スマートホーン|Smart Strike",
		"power": "3",
		"category": "physical",
		"type": "Steel",
		"tags": ["target|l|foe", "effect|l|lethal", "effect|l|neverfail"],
		"accuracy": "靈巧 + 鬥毆",
		"damage": "力量 + 3",
		"effect": "致命傷害。必中。",
		"desc": "使用者運用其中一個牠銳利的尖角以驚人的準確度刺向敵人，這一擊留下的傷口相當深刻，且必須被立即治療。"
	},
	{
		"name": "鐵蹄光線", "alias": "てっていこうせん|Steel Beam",
		"power": "6",
		"category": "special",
		"type": "Steel",
		"tags": ["target|l|foe", "effect|l|recoil"],
		"accuracy": "特殊 + 導引",
		"damage": "特殊 + 6",
		"effect": "反作用力傷害。",
		"desc": "一道凝聚濃縮的光束，足以熔毀哪怕最厚實的鋼板。不幸的是，使用者在制御這股力量時同樣會受到傷害。"
	},
	{
		"name": "鋼翼", "alias": "はがねのつばさ|Steel Wing",
		"power": "3",
		"category": "physical",
		"type": "Steel",
		"tags": ["target|l|foe", "frame|accuracy||down|1", "dice|l|1", "frame|self|防禦|up|1"],
		"accuracy": "靈巧 + 鬥毆",
		"damage": "力量 + 3",
		"effect": "骰 1 顆機率骰以提升使用者的防禦。",
		"desc": "寶可夢使用牠鋒利的翅羽，就彷彿它們是剃刀一般。"
	},
	{
		"name": "流星閃衝", "alias": "メテオドライブ|Sunsteel Strike",
		"power": "4",
		"category": "physical",
		"type": "Steel",
		"tags": ["target|l|foe", "effect|l|lethal"],
		"accuracy": "力量 + 鬥毆",
		"damage": "力量 + 4",
		"effect": "如果敵方有任何事物將阻止這個招式造成傷害（例如寶可夢屬性、特性、護盾招式、天氣、或屏障），將其忽略。這個招式無法被對抗。",
		"desc": "你突然停下腳步，看見一道明亮刺眼的強光正以高速衝著你而來。你看不見是什麼擊中了你，接著便陷入了一片黑暗。"
	}
]);