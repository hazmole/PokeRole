var AbilityList;
if(!AbilityList) AbilityList = [];

Array.prototype.push.apply(AbilityList, [
	{
		"name": "Adaptability", "display_name": "適應力",
		"tags": ["target|l|self", "text|l|相同屬性", "frame|self|傷害|plus|d1"],
		"effect": "每當這隻寶可夢使用了屬性與自己相同的傷害招式，該攻擊的傷害骰池額外增加 1 顆骰子。",
		"desc": "寶可夢可以輕易適應周遭環境，牠能夠輕易穿越任何地形。"
	},
	{
		"name": "Aerilate", "display_name": "飛行皮膚",
		"tags": ["target|l|self", "text|l|一般招式|Normal", "text|l|飛行招式|Flying", "frame|self|傷害|plus|d1"],
		"effect": "這隻寶可夢使用的一般屬性攻擊將會如同它是飛行屬性的招式一樣造成傷害，並適用屬性一致加成、弱點和抗性。飛行屬性招式的傷害骰池額外增加 1 顆骰子。",
		"desc": "這隻寶可夢永不落地，可以感覺到一陣永不止息的旋風環繞在牠的身邊。"
	},
	{
		"name": "Aftermath", "display_name": "引爆",
		"tags": ["target|l|foe", "frame|target|傷害|number|2"],
		"effect": "如果這隻寶可夢因為非遠程的物理攻擊而陷入瀕死狀態，則該攻擊的使用者將會受到 2 點傷害。",
		"desc": "當受傷或生氣時，這隻寶可夢會準備爆發。如果受到足夠的打擊，牠將會在接觸時爆炸。"
	},
	{
		"name": "Air Lock", "display_name": "氣閘",
		"tags": ["target|l|field", "text|l|無效天氣"],
		"effect": "無效戰場上所有天氣狀態的效果。如果戰場上沒有任何天氣狀態，則天氣狀態將無法透過任何招式或特性而被發動。如果已經有正在發動的天氣狀態，則它不會消失不見，只是不會發揮任何效果。",
		"desc": "這隻寶可夢的身邊環繞著真空空間。雨天、沙塵、或冰雹的粒子都會靜止懸浮在牠身邊，就連熱氣都無法穿過。"
	},
	{
		"name": "Analytic", "display_name": "分析",
		"tags": ["target|l|self", "frame|self|傷害|plus|d1"],
		"effect": "如果這隻寶可夢的先攻順序比牠的目標還要後面，則牠的所有傷害骰池額外增加 1 顆骰子。",
		"desc": "這隻寶可夢永遠不會魯莽衝鋒，牠會花點時間思考如何在任何情境下採取最佳決策。"
	},
	{
		"name": "", "display_name": "",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "", "display_name": "",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "Gluttony", "display_name": "貪吃鬼",
		"tags": ["target|l|self"],
		"effect": "這隻寶可夢可以食用任何類型的食物、藥物、或草藥，而不會承受任何負面效果。這隻寶可夢可以在戰鬥中的任何時候以一個自由動作吃掉牠所持有的樹果。",
		"desc": "這隻寶可夢可以吃上一整天，牠完全不用擔心找不到食物來源，因為牠超級不挑食。"
	},
	{
		"name": "", "display_name": "",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "Pick Up", "display_name": "撿拾",
		"tags": ["target|l|self"],
		"effect": "如果這隻寶可夢待在精靈球外面，則在該場景結束時，看看牠為你找到了什麼東西（由說書人決定）。",
		"desc": "這隻寶可夢會經常收集東西，並堆成一個可能會與你分享的小寶物堆。"
	},
	{
		"name": "", "display_name": "",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "Overgrow", "display_name": "茂盛",
		"tags": ["target|l|self", "text|l|草系招式|Grass", "frame|self|傷害|plus|d1"],
		"effect": "當這隻寶可夢的HP剩一半或以下，牠草屬性招式的傷害骰池並不會因為疼痛懲罰而被扣除成功骰，且牠草屬性招式的傷害骰池會額外增加 1 顆骰子。",
		"desc": "當這隻寶可夢受傷時，牠的體內會長出巨大的植物來保衛自己；這個植物相當強勁但凋萎很快。"
	}
]);