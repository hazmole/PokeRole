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
		"name": "Anger Point", "display_name": "憤怒穴位",
		"tags": ["target|l|self", "frame|self|力量|up|3"],
		"effect": "如果敵人對這隻寶可夢造成擊中要害，則這隻寶可夢的力量提升 3 點。",
		"desc": "這隻寶可夢會輕易地變得兇猛侵略。幾乎不用多加挑釁，牠就會開始大發脾氣，把所有一切都撕成碎片。"
	},
	{
		"name": "Anticipation", "display_name": "危險預知",
		"tags": ["target|l|self"],
		"effect": "如果敵人擁有能夠造成致命傷害、或對這隻寶可夢效果絕佳的招式，那牠會警告牠的訓練家。",
		"desc": "這隻寶可夢總是警界著威脅，並鮮少坐下來放鬆。如果牠察覺到了潛在的危險，牠將會變得焦躁並開始顫抖。"
	},
	{
		"name": "Arena Trap", "display_name": "沙穴",
		"tags": ["target|l|allfoe", "effect|l|block"],
		"effect": "位於地面的敵方寶可夢被阻擋，只要這隻寶可夢仍在戰場上，牠們就無法逃跑或被替換。",
		"desc": "這隻寶可夢的周遭地面變得相當鬆軟且難以行走。當遭遇危險時，牠會使周遭的地面下沉，創造出一個流沙坑。"
	},
	{
		"name": "Aroma Veil", "display_name": "芳香幕",
		"tags": ["target|l|allally"],
		"effect": "使用者和範圍內的隊友將免疫於這些招式的效果：挑釁、無理取鬧、迷人、定身法、再來一次、回復封鎖。",
		"desc": "這隻寶可夢會釋放出一種美妙的氣味，讓你們即使在緊張情勢下仍能保持放鬆。"
	},
	{
		"name": "Aura Break", "display_name": "氣場破壞",
		"tags": ["text|l|反轉氣場"],
		"effect": "反轉「暗黑氣場」和「妖精氣場」特性對牠們使用者的效果。如果該特性會增加牠們使用者的傷害骰池，那麼它將改為減少骰池。",
		"desc": "當接近這隻寶可夢時，任何散發出特別邪惡氣場的人將會被淨化，任何有著純淨氣場的人也將被邪惡腐化。"
	},
	{
		"name": "Bad Dreams", "display_name": "夢魘",
		"tags": ["target|l|area", "frame|sleep|睡眠|always", "frame|target|傷害|number|1"],
		"effect": "在每個戰鬥輪結束時，對戰場上任何處於「睡眠」狀態的對象造成 1 點傷害。",
		"desc": "這隻寶可夢能夠透過夢境世界傳送牠邪惡的意圖，造成破壞，並將恐懼帶到那些陷入沉睡的人們心中。"
	},
	{
		"name": "Ball Fetch", "display_name": "撿球",
		"tags": ["target|l|self"],
		"effect": "每當你向野生寶可夢丟出精靈球，如果收服判定失敗，則該精靈球不會壞掉，而是改為讓這隻寶可夢在該場景結束時把它帶回給你。",
		"desc": "這隻寶可夢有些沉迷於「丟接球」的遊戲中，牠可以玩上好幾個小時，樂此不疲。"
	},
	{
		"name": "Battery", "display_name": "蓄電池",
		"tags": ["target|l|allally", "frame|self|特殊|up|1", "frame|self|傷害|plus|d1"],
		"effect": "使範圍內所有隊友寶可夢的特殊提升 1 點。所有隊友寶可夢的特殊招式的傷害骰池也會額外增加 1 顆骰子。",
		"desc": "這隻寶可夢的存在創造了一股電力場，能使電子產品充能，並甚至讓他人感到精力充沛。"
	},
	{
		"name": "Battle Armor", "display_name": "戰鬥盔甲",
		"tags": ["target|l|foe", "frame|target|要害獎勵|never"],
		"effect": "如果敵人對這隻寶可夢造成了擊中要害，則牠不會因為擊中要害而獲得任何額外的獎勵骰。",
		"desc": "這隻寶可夢的表面被被堅韌材質構成的盔甲給包覆，像是岩石、鋼鐵、或外骨骼。"
	},
	{
		"name": "Battle Bond", "display_name": "牽絆變身",
		"tags": ["target|l|self"],
		"effect": "在敵人被這隻寶可夢給擊敗<b>之後</b>，如果牠的忠誠度為 5 點，則牠會變化為「戰鬥牽絆型態」持續直到該場景結束，或直到牠或牠的訓練家陷入拚死狀態。每個隊伍只能有一個擁有這個特性的寶可夢。擁有這個特性的寶可夢不能持有超級石。<br><b>戰鬥牽絆型態：</b><ul><li>寶可夢的力量和特殊的上限增加 2 點。</li><li>依照你的判斷為戰鬥牽絆型態重新分配階級給予的特質點數。</li><li>你所選擇的一個招式的威力增加 1 點。</li><li>讓HP和意志點回復至全滿，並解除所有異常狀態。</li><li>當處於戰鬥牽絆型態時，所有該寶可夢受到的戰鬥傷害也都會傷害到牠的訓練家。</li></ul>",
		"desc": "這隻寶可夢與那跟牠一起經歷過最激烈戰鬥的夥伴建立了緊密的聯繫。在贏得勝利之後，因為他們之間的友誼，一股強大的力量湧現了。"
	},
	{
		"name": "Beast Boost", "display_name": "異獸提升",
		"tags": ["target|l|self", "frame|self|特質|up|1"],
		"effect": "如果敵人因為這隻異獸的攻擊而陷入瀕死狀態，將這隻異獸上限最高的特質提升 1 點。你最多可以透過這個方式提升 3 點。只有異獸能夠擁有這個特性。異獸提升特性無法被交換或複製。",
		"desc": "一種可怕的滿足感會在這隻生物造成破壞時湧現，讓牠隨著每一個倒下的敵人而變得越來越野蠻。"
	},
	{
		"name": "Berserk", "display_name": "怒火沖天",
		"tags": ["target|l|self", "frame|self|特殊|up|1"],
		"effect": "當這隻寶可夢的HP剩一半或以下，牠的特殊特質提升 1 點。",
		"desc": "這隻寶可夢的行為舉止通常相當冷靜，但當牠的性命或牠在乎的對象陷入危險，腎上腺素的衝擊將把牠變成一頭狂怒的野獸。"
	},
	{
		"name": "Big Pecks", "display_name": "健壯胸肌",
		"tags": ["target|l|self", "frame|self|防禦|down|never"],
		"effect": "這隻寶可夢的防禦特質不會被降低。",
		"desc": "這隻頑強的寶可夢利用牠的胸肌來彌補牠的弱點。"
	},
	{
		"name": "Blaze", "display_name": "猛火",
		"tags": ["target|l|self", "text|l|火系招式|Fire", "frame|self|傷害|plus|d1"],
		"effect": "當這隻寶可夢的HP剩一半或以下，牠火屬性招式的傷害骰池並不會因為疼痛懲罰而被扣除成功骰，且牠火屬性招式的傷害骰池會額外增加 1 顆骰子。",
		"desc": "這隻寶可夢身上的火焰會在消散前更猛烈地熊熊燃燒。"
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
	},
	{
		"name": "", "display_name": "",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "Zen Mode", "display_name": "達摩模式",
		"tags": ["target|l|self", "text|l|型態變化"],
		"effect": "只有達摩狒狒能夠使用這個特性。當牠的HP剩一半或以下，牠將會在該戰鬥輪結束時變化成「達摩形態」，在這之後，使用牠達摩形態的數據，並根據階級和特質上限調整牠各個形態的特質。",
		"desc": "在極端壓力下，這隻寶可夢將會透過冥想解放牠隱藏的超能力。牠會在隔天變回原本的模樣。"
	}
]);