var AbilityList;
if(!AbilityList) AbilityList = [];

Array.prototype.push.apply(AbilityList, [
	{
		"name": "適應力", "alias": "てきおうりょく|Adaptability",
		"tags": ["target|l|self", "nftext|l|使用同屬性攻擊時", "frame|self|傷害|plus|d1"],
		"effect": "每當這隻寶可夢使用了屬性與自己相同的傷害招式，該攻擊的傷害骰池額外增加 1 顆骰子。",
		"desc": "寶可夢可以輕易適應周遭環境，牠能夠輕易穿越任何地形。"
	},
	{
		"name": "飛行皮膚", "alias": "スカイスキン|Aerilate",
		"tags": ["target|l|self", "text|l|一般招式|Normal", "text|l|飛行招式|Flying", "frame|self|傷害|plus|d1"],
		"effect": "這隻寶可夢使用的一般屬性攻擊將會如同它是飛行屬性的招式一樣造成傷害，並適用屬性一致加成、弱點和抗性。飛行屬性招式的傷害骰池額外增加 1 顆骰子。",
		"desc": "這隻寶可夢永不落地，可以感覺到一陣永不止息的旋風環繞在牠的身邊。"
	},
	{
		"name": "引爆", "alias": "ゆうばく|Aftermath",
		"tags": ["nftext|l|因為物理攻擊而瀕死時", "target|l|foe", "frame|target|傷害|number|2"],
		"effect": "如果這隻寶可夢因為非遠程的物理攻擊而陷入瀕死狀態，則該攻擊的使用者將會受到 2 點傷害。",
		"desc": "當受傷或生氣時，這隻寶可夢會準備爆發。如果受到足夠的打擊，牠將會在接觸時爆炸。"
	},
	{
		"name": "氣閘", "alias": "エアロック|Air Lock",
		"tags": ["target|l|field", "text|l|無效天氣"],
		"effect": "無效戰場上所有天氣狀態的效果。如果戰場上沒有任何天氣狀態，則天氣狀態將無法透過任何招式或特性而被發動。如果已經有正在發動的天氣狀態，則它不會消失不見，只是不會發揮任何效果。",
		"desc": "這隻寶可夢的身邊環繞著真空空間。雨天、沙塵、或冰雹的粒子都會靜止懸浮在牠身邊，就連熱氣都無法穿過。"
	},
	{
		"name": "分析", "alias": "アナライズ|Analytic",
		"tags": ["target|l|self", "nftext|l|先攻順序低於敵人時", "frame|self|傷害|plus|d1"],
		"effect": "如果這隻寶可夢的先攻順序比牠的目標還要後面，則牠的所有傷害骰池額外增加 1 顆骰子。",
		"desc": "這隻寶可夢永遠不會魯莽衝鋒，牠會花點時間思考如何在任何情境下採取最佳決策。"
	},
	{
		"name": "憤怒穴位", "alias": "いかりのつぼ|Anger Point",
		"tags": ["target|l|self", "nftext|l|被擊中要害之後", "frame|self|力量|up|3"],
		"effect": "如果敵人對這隻寶可夢造成擊中要害，則這隻寶可夢的力量提升 3 點。",
		"desc": "這隻寶可夢會輕易地變得兇猛侵略。幾乎不用多加挑釁，牠就會開始大發脾氣，把所有一切都撕成碎片。"
	},
	{
		"name": "危險預知", "alias": "きけんよち|Anticipation",
		"tags": ["target|l|self", "nftext|l|發出警告:", "effect|l|lethal", "text|l|效果絕佳"],
		"effect": "如果敵人擁有能夠造成致命傷害、或對這隻寶可夢效果絕佳的招式，那牠會警告牠的訓練家。",
		"desc": "這隻寶可夢總是警界著威脅，並鮮少坐下來放鬆。如果牠察覺到了潛在的危險，牠將會變得焦躁並開始顫抖。"
	},
	{
		"name": "沙穴", "alias": "ありじごく|Arena Trap",
		"tags": ["target|l|allfoe", "effect|l|block"],
		"effect": "位於地面的敵方寶可夢被阻擋，只要這隻寶可夢仍在戰場上，牠們就無法逃跑或被替換。",
		"desc": "這隻寶可夢的周遭地面變得相當鬆軟且難以行走。當遭遇危險時，牠會使周遭的地面下沉，創造出一個流沙坑。"
	},
	{
		"name": "芳香幕", "alias": "アロマベール|Aroma Veil",
		"tags": ["target|l|allally"],
		"effect": "使用者和範圍內的隊友將免疫於這些招式的效果：〈挑釁〉、〈無理取鬧〉、〈迷人〉、〈定身法〉、〈再來一次〉、〈回復封鎖〉。",
		"desc": "這隻寶可夢會釋放出一種美妙的氣味，讓你們即使在緊張情勢下仍能保持放鬆。"
	},
	{
		"name": "氣場破壞","alias": "オーラブレイク|Aura Break",
		"tags": ["nftext|l|反轉暗黑氣場和妖精氣場的效果"],
		"effect": "反轉「暗黑氣場」和「妖精氣場」特性對牠們使用者的效果。如果該特性會增加牠們使用者的傷害骰池，那麼它將改為減少骰池。",
		"desc": "當接近這隻寶可夢時，任何散發出特別邪惡氣場的人將會被淨化，任何有著純淨氣場的人也將被邪惡腐化。"
	},
	{
		"name": "夢魘", "alias": "ナイトメア|Bad Dreams",
		"tags": ["target|l|area", "nftext|l|對處於睡眠狀態的目標", "frame|target|傷害|number|1"],
		"effect": "在每個戰鬥輪結束時，對戰場上任何處於「睡眠」狀態的對象造成 1 點傷害。",
		"desc": "這隻寶可夢能夠透過夢境世界傳送牠邪惡的意圖，造成破壞，並將恐懼帶到那些陷入沉睡的人們心中。"
	},
	{
		"name": "撿球", "alias": "たまひろい|Ball Fetch",
		"tags": ["target|l|self"],
		"effect": "每當你向野生寶可夢丟出精靈球，如果收服判定失敗，則該精靈球不會壞掉，而是改為讓這隻寶可夢在該場景結束時把它帶回給你。",
		"desc": "這隻寶可夢有些沉迷於「丟接球」的遊戲中，牠可以玩上好幾個小時，樂此不疲。"
	},
	{
		"name": "蓄電池", "alias": "バッテリー|Battery",
		"tags": ["target|l|allally", "frame|self|特殊|up|1", "nftext|l|使用特殊攻擊時", "frame|self|傷害|plus|d1"],
		"effect": "使範圍內所有隊友寶可夢的特殊提升 1 點。所有隊友寶可夢的特殊招式的傷害骰池也會額外增加 1 顆骰子。",
		"desc": "這隻寶可夢的存在創造了一股電力場，能使電子產品充能，並甚至讓他人感到精力充沛。"
	},
	{
		"name": "戰鬥盔甲", "alias": "カブトアーマー|Battle Armor",
		"tags": ["target|l|foe", "frame|target|要害獎勵|never"],
		"effect": "如果敵人對這隻寶可夢造成了擊中要害，則牠不會因為擊中要害而獲得任何額外的獎勵骰。",
		"desc": "這隻寶可夢的表面被被堅韌材質構成的盔甲給包覆，像是岩石、鋼鐵、或外骨骼。"
	},
	{
		"name": "牽絆變身", "alias": "きずなへんげ|Battle Bond",
		"tags": ["target|l|self"],
		"effect": "在敵人被這隻寶可夢給擊敗<b>之後</b>，如果牠的忠誠度為 5 點，則牠會變化為「戰鬥牽絆型態」持續直到該場景結束，或直到牠或牠的訓練家陷入拚死狀態。每個隊伍只能有一個擁有這個特性的寶可夢。擁有這個特性的寶可夢不能持有超級石。<br><b>戰鬥牽絆型態：</b><ul><li>寶可夢的力量和特殊的上限增加 2 點。</li><li>依照你的判斷為戰鬥牽絆型態重新分配階級給予的特質點數。</li><li>你所選擇的一個招式的威力增加 1 點。</li><li>讓HP和意志點回復至全滿，並解除所有異常狀態。</li><li>當處於戰鬥牽絆型態時，所有該寶可夢受到的戰鬥傷害也都會傷害到牠的訓練家。</li></ul>",
		"desc": "這隻寶可夢與那跟牠一起經歷過最激烈戰鬥的夥伴建立了緊密的聯繫。在贏得勝利之後，因為他們之間的友誼，一股強大的力量湧現了。"
	},
	{
		"name": "異獸提升", "alias": "ビーストブースト|Beast Boost",
		"tags": ["target|l|self", "nftext|l|讓敵人陷入瀕死狀態後", "frame|self|特質|up|1"],
		"effect": "如果敵人因為這隻異獸的攻擊而陷入瀕死狀態，將這隻異獸上限最高的特質提升 1 點。你最多可以透過這個方式提升 3 點。只有異獸能夠擁有這個特性。異獸提升特性無法被交換或複製。",
		"desc": "一種可怕的滿足感會在這隻生物造成破壞時湧現，讓牠隨著每一個倒下的敵人而變得越來越野蠻。"
	},
	{
		"name": "怒火沖天", "alias": "ぎゃくじょう|Berserk",
		"tags": ["target|l|self", "nftext|l|HP降到一半或以下時", "frame|self|特殊|up|1"],
		"effect": "當這隻寶可夢的HP剩一半或以下，牠的特殊特質提升 1 點。",
		"desc": "這隻寶可夢的行為舉止通常相當冷靜，但當牠的性命或牠在乎的對象陷入危險，腎上腺素的衝擊將把牠變成一頭狂怒的野獸。"
	},
	{
		"name": "健壯胸肌", "alias": "はとむね|Big Pecks",
		"tags": ["target|l|self", "frame|self|防禦|down|never"],
		"effect": "這隻寶可夢的防禦特質不會被降低。",
		"desc": "這隻頑強的寶可夢利用牠的胸肌來彌補牠的弱點。"
	},
	{
		"name": "猛火", "alias": "もうか|Blaze",
		"tags": ["target|l|self", "nftext|l|HP降到一半或以下時", "text|l|火系招式|Fire", "frame|self|傷害|plus|d1"],
		"effect": "當這隻寶可夢的HP剩一半或以下，牠火屬性招式的傷害骰池並不會因為疼痛懲罰而被扣除成功骰，且牠火屬性招式的傷害骰池會額外增加 1 顆骰子。",
		"desc": "這隻寶可夢身上的火焰會在消散前更猛烈地熊熊燃燒。"
	},
	{
		"name": "防彈", "alias": "ぼうだん|Bulletproof",
		"tags": ["target|l|self", "text|l|遠程攻擊", "frame|self|受傷|minus|1"],
		"effect": "所有特殊攻擊和遠程物理攻擊對這隻寶可夢造成的傷害減少 1 點。",
		"desc": "這隻寶可夢身上的護甲能保護牠不受投射物或小型爆炸的傷害。"
	},
	{
		"name": "頰囊", "alias": "ほおぶくろ|Cheek Pouch",
		"tags": ["target|l|self", "nftext|l|使用樹果解除異常狀態時", "frame|heal||heal|2"],
		"effect": "每當這隻寶可夢吃掉一個不具有回復HP效果的樹果時（例如桃桃果、利木果），這隻寶可夢可以額外回復 2 HP。",
		"desc": "這隻寶可夢能把食物和物品儲存在牠彈性十足的頰囊中，以便日後使用。"
	},
	{
		"name": "葉綠素", "alias": "ようりょくそ|Chlorophyll",
		"tags": ["target|l|self", "weather|l|sun", "frame|self|靈巧|up|2"],
		"effect": "如果當前天氣狀態為大晴天，則這隻寶可夢的靈巧特質提升 2 點。",
		"desc": "這隻寶可夢能夠行光合作用來獲得能量。如果牠持續待在日照充足的環境，牠將變得很少需要進食。"
	},
	{
		"name": "恆淨之軀", "alias": "クリアボディ|Clear Body",
		"tags": ["target|l|foe", "frame|self|特質|up|never", "frame|self|特質|down|never"],
		"effect": "其他寶可夢將無法提升或降低這隻寶可夢的特質。這隻寶可夢仍然能夠提升或降低自己的特質。",
		"desc": "這隻寶可夢極度注意牠身邊的整個環境，想要偷偷接近牠將會變得極度困難。"
	},
	{
		"name": "無關天氣", "alias": "ノーてんき|Cloud Nine",
		"tags": ["target|l|self", "text|l|免疫天氣"],
		"effect": "無效任何作用於這隻寶可夢的天氣狀態效果。",
		"desc": "這隻寶可夢很容易被滿足，且牠往往表現得比其他人還要快樂。無論晴天雨天，牠都不會感到陰鬱。"
	},
	{
		"name": "變色", "alias": "へんしょく|Color Change",
		"tags": ["target|l|self", "text|l|改變屬性"],
		"effect": "當這隻寶可夢受到傷害時，牠將暫時把自己的屬性改變成與剛剛命中自己招式相同的屬性。這個效果會在寶可夢退出戰場時結束。",
		"desc": "這隻寶可夢能夠改變自己的體色和能量來偽裝並融入周遭環境。"
	},
	{
		"name": "絕對睡眠", "alias": "ぜったいねむり|Comatose",
		"tags": ["target|l|self", "frame|sleep||always", "text|l|免疫異常"],
		"effect": "這隻寶可夢永遠處於「睡眠」狀態，但牠免疫於該狀態的效果。這隻寶可夢不會陷入其他異常狀態。能夠影響處於「睡眠」狀態寶可夢的招式和特性仍然能如常作用於這隻寶可夢。",
		"desc": "出於某些原因，這隻寶可夢永遠處於沉睡狀態且完全不會醒來。然而，牠仍然能夠理解訓練家的命令，並能如同牠在夢遊一般採取行動。"
	},
	{
		"name": "好勝", "alias": "かちき|Competitive",
		"tags": ["target|l|self", "nftext|l|當特質降低時", "frame|self|特殊|up|2"],
		"effect": "當這隻寶可夢在戰鬥中第一次被敵人降低特質時，使牠自己的特殊特質提升 2 點。",
		"desc": "這隻寶可夢的決心會在逆境中成長，牠總是嘗試與周圍的所有人競爭。"
	},
	{
		"name": "複眼", "alias": "ふくがん|Compound Eyes",
		"tags": ["target|l|self", "frame|accuracy||down|x", "frame|self|命中|plus|d2"],
		"effect": "這隻寶可夢在使用任何帶有「降低命中率」標誌的招式時，其命中判定將額外獲得 2 顆骰子。",
		"desc": "這隻寶可夢有著環繞式視覺,讓牠能夠以更好的精確度來鎖定目標的位置。"
	},
	{
		"name": "唱反調", "alias": "あまのじゃく|Contrary",
		"tags": ["target|l|self", "nftext|l|兩者互換", "frame|self|特質|down|x", "frame|self|特質|up|x"],
		"effect": "如果有任何效果會降低這隻寶可夢的特質，改為將其提升；如果有任何效果會提升這隻寶可夢的特質，改為將其降低。",
		"desc": "在大部分情況下，這隻寶可夢會想要去做那些與你所想相反的事情。有時牠甚至會因此做出自相矛盾的行為。"
	},
	{
		"name": "腐蝕", "alias": "ふしょく|Corrosion",
		"tags": ["target|l|self", "nftext|l|忽略其他寶可夢對毒屬性的免疫"],
		"effect": "忽略任何敵人身上任何對毒屬性傷害以及「中毒」和「劇毒」狀態的免疫。",
		"desc": "這隻寶可夢的毒液能夠腐蝕金屬、木頭、和大部分有機無機的物質。小心不要碰到它！"
	},
	{
		"name": "棉絮", "alias": "わたげ|Cotton Down",
		"tags": ["target|l|area", "frame|target|靈巧|down|1"],
		"effect": "如果這隻寶可夢被非遠程的物理攻擊給命中，則降低附近所有寶可夢的靈巧 1 點。",
		"desc": "這隻寶可夢身上的棉絨經常會脫落飄散，這些棉絮可以被拿來製作漂亮的衣物，但沾上它們也將妨礙行動。"
	},
	{
		"name": "詛咒之軀", "alias": "のろわれボディ|Cursed Body",
		"tags": ["target|l|foe", "frame|disabled||number|d3"],
		"effect": "每當這隻寶可夢因某個招式而受到傷害，骰 3 顆機率骰以使對方陷入「定身法」狀態。這個方式可以禁用一個以上的招式。",
		"desc": "這隻寶可夢的體內帶有一種詛咒。跟這隻寶可夢作對可不是什麼好主意。"
	},
	{
		"name": "迷人之軀", "alias": "メロメロボディ|Cute Charm",
		"tags": ["target|l|foe", "nftext|l|當被物理攻擊命中時", "frame|love||number|d3"],
		"effect": "當這隻寶可夢被敵人以非遠程物理攻擊給命中時，骰 3 顆機率骰以使敵人陷入「著迷」狀態。",
		"desc": "也許是因為牠動人的雙眸、或是牠紅潤的臉頰，但無論如何，其他人和寶可夢都會為了贏得這隻寶可夢的芳心而努力。"
	},
	{
		"name": "濕氣", "alias": "しめりけ|Damp",
		"tags": ["target|l|area"],
		"effect": "在這隻寶可夢周圍，沒有任何隊友或敵人能夠使用〈自爆〉和〈大爆炸〉招式。",
		"desc": "這隻寶可夢會將空氣中的水氣聚集在牠身邊。在牠附近要點燃火花或讓火焰持續燃燒都會變得相當困難。"
	},
	{
		"name": "舞者", "alias": "おどりこ|Dancer",
		"tags": ["target|l|self"],
		"effect": "每當其他寶可夢使用了名字帶有「舞」關鍵字的招式（例如〈龍之舞〉、〈花瓣舞〉）時，這隻寶可夢能夠馬上緊接著以一個自由動作使用相同的招式，並自動成功（仍必須擲傷害骰）。",
		"desc": "每當有人起舞，這隻寶可夢也會隨之舞蹈。牠透過這小巧的舞蹈表達自己的感情和交流。"
	},
	{
		"name": "暗黑氣場", "alias": "ダークオーラ|Dark Aura",
		"tags": ["target|l|field", "text|l|惡系招式|Dark", "frame|self|傷害|plus|d2"],
		"effect": "場上所有寶可夢的惡屬性招式的傷害骰池全都額外增加 2 顆骰子。這個效果不會疊加。場上的寶可夢和訓練家將不會彼此合作。",
		"desc": "一股強大的黑色氣場從這隻寶可夢身上湧出，讓黑暗籠罩戰場，並使邪惡、自私、和腐化滲入所有人的心中。"
	},
	{
		"name": "不屈之盾", "alias": "ふくつのたて|Dauntless Shield",
		"tags": ["target|l|self", "frame|self|防禦|up|2"],
		"effect": "當這隻寶可夢進入戰鬥時，使牠自己的防禦提升 2 點。在戰鬥之外的情況，這隻寶可夢免疫物理傷害。",
		"desc": "這隻寶可夢的英勇決心讓牠能透過純粹的意志使自己不受物理傷害。牠的存在本身可能會使人膽怯不安。"
	},
	{
		"name": "鮮艷之軀", "alias": "ビビッドボディ|Dazzling",
		"tags": ["target|l|foe", "frame|priority||up|never"],
		"effect": "敵人無法對這隻寶可夢使用先制招式。",
		"desc": "牠美麗的鱗片能如同鏡子一樣反射光輝。一旦瞥見這隻寶可夢，就沒有人能夠移開他們的視線。"
	},
	{
		"name": "軟弱", "alias": "よわき|Defeatist",
		"tags": ["target|l|self", "nftext|l|HP降到一半或以下時", "frame|self|力量|down|2", "frame|self|特殊|down|2"],
		"effect": "當這隻寶可夢的HP降到一半或以下時，為這隻寶可夢的每個行動進行忠誠度的判定。若判定失敗，則這隻寶可夢在該行動的力量和特殊特質將被視作降低 2 點。若判定成功，則牠的特質保持不變。",
		"desc": "這隻寶可夢是個天生的悲觀主義者。當情況變得艱難，牠將會第一個放棄。"
	},
	{
		"name": "不服輸", "alias": "まけんき|Defiant",
		"tags": ["target|l|self", "nftext|l|當特質降低時", "frame|self|力量|up|2"],
		"effect": "當這隻寶可夢在戰鬥中第一次被敵人降低特質時，使牠自己的力量特質提升 2 點。",
		"desc": "這隻寶可夢絕不會屈服，情況變得越艱難，牠的鬥志就會變得更高昂。然而，這也可能使牠表現的有點叛逆。"
	},
	{
		"name": "德爾塔氣流", "alias": "デルタストリーム|Delta Stream",
		"tags": ["target|l|field", "weather|l|wind"],
		"effect": "當這隻寶可夢出場時，天氣狀態將會自動變為亂流。這個效果將會在這隻寶可夢退場時結束。（若效果互相衝突，則由意志較高的寶可夢影響天氣狀態。）",
		"desc": "整個戰場颳起強風亂流，不知道如何飛行的寶可夢可能會被遠遠吹飛出去。"
	},
	{
		"name": "終結之地", "alias": "おわりのだいち|Desolate Land",
		"tags": ["target|l|field", "weather|l|sun2"],
		"effect": "當這隻寶可夢出場時，天氣狀態將會自動變為大日照。這個效果將會在這隻寶可夢退場時結束。（若效果互相衝突，則由意志較高的寶可夢影響天氣狀態。）",
		"desc": "烈日焦灼是如此酷熱，你的皮膚開始發紅起泡，所有的水分都被蒸發殆盡，且這隻寶可夢的每一步都會使地表熔化成岩漿。"
	},
	{
		"name": "畫皮", "alias": "ばけのかわ|Disguise",
		"tags": ["target|l|self", "nftext|l|第一次受到的攻擊只會造成", "frame|target|傷害|number|0"],
		"effect": "這隻寶可夢在戰鬥中第一次要受到傷害時，將該傷害降低到零。入場危害、天氣狀態、和異常狀態並不會觸發這個特性。",
		"desc": "這隻寶可夢穿著一件其他寶可夢外觀的可信偽裝。當牠受到傷害時，偽裝將會被破壞，看起來就像是牠承受了致命傷勢一樣。"
	},
	{
		"name": "下載", "alias": "ダウンロード|Download",
		"tags": ["target|l|self", "frame|self|力量|up|1", "nftext|l|或", "frame|self|特殊|up|1"],
		"effect": "當這隻寶可夢出場時，牠將會掃描牠的敵人並提供關於對方的情報。接著牠將會在說書人的裁斷下提升 1 點力量或 1 點特殊特質。",
		"desc": "這隻寶可夢能夠掃描敵人，連上電腦中的數據並將其下載到牠自己體內。太過大量的資料可能會讓牠感到有些沉重。"
	},
	{
		"name": "降雨", "alias": "あめふらし|Drizzle",
		"tags": ["target|l|field", "weather|l|rain"],
		"effect": "當這隻寶可夢出場時，天氣狀態將會自動變為下雨。這個效果將會在這隻寶可夢退場時結束。（若效果互相衝突，則由意志較高的寶可夢影響天氣狀態。）",
		"desc": "只要這隻寶可夢這麼希望，天空就會在彷彿永不停息的風暴中持續不斷降雨。"
	},
	{
		"name": "日照", "alias": "ひでり|Drought",
		"tags": ["target|l|field", "weather|l|sun"],
		"effect": "當這隻寶可夢出場時，天氣狀態將會自動變為大晴天。這個效果將會在這隻寶可夢退場時結束。（若效果互相衝突，則由意志較高的寶可夢影響天氣狀態。）",
		"desc": "只要這隻寶可夢這麼希望，日照將會變得無比猛烈並提升場上的溫度。"
	},
	{
		"name": "乾燥皮膚", "alias": "かんそうはだ|Dry Skin",
		"tags": ["target|l|self", "weather|l|sun", "frame|self|傷害|number|1", "text|l|火系招式|Fire", "frame|self|受傷|plus|1", "text|l|水系招式|Water", "frame|heal||heal|1"],
		"effect": "如果當前天氣狀態為大晴天，則這隻寶可夢將在每個戰鬥輪結束時受到 1 點傷害。火屬性招式對這隻寶可夢將造成額外 1 點傷害。水屬性招式可能會使這隻寶可夢回復 1 點HP，而非造成傷害。",
		"desc": "這隻寶可夢的肌膚需要特別的照料，它需要持續保濕並防範高溫。"
	},
	{
		"name": "早起", "alias": "はやおき|Early Bird",
		"tags": ["target|l|self", "frame|sleep||number|½"],
		"effect": "這隻寶可夢處於「睡眠」狀態的時間減少一半，牠只需要在洞察擲骰判定中累積獲得 2 顆或以上的成功骰就能在戰鬥中從「睡眠」狀態下清醒過來。這個效果並不適用於招式〈睡覺〉造成的「睡眠」狀態。",
		"desc": "擁有這個特性的寶可夢是個很容易從沉睡中清醒的淺眠者。牠們只需要數個小時的睡眠時間就能充滿精神的醒過來。"
	},
	{
		"name": "孢子", "alias": "ほうし|Effect Spore",
		"tags": ["target|l|foe", "nftext|l|當被物理攻擊命中時，隨機造成", "frame|poison||number|d3", "frame|paralysis||number|d3", "frame|sleep||number|d3"],
		"effect": "當被非遠程攻擊的物理攻擊給命中時，這隻寶可夢將骰 3 顆機率骰以隨機使敵人陷入「中毒」、「麻痺」、或「睡眠」狀態。",
		"desc": "當遭受壓力時，這隻寶可夢將透過身體釋放出孢子，使其遍布四周並導致嚴重的過敏反應。"
	},
	{
		"name": "電氣製造者", "alias": "エレキメイカー|Electric Surge",
		"tags": ["target|l|field", "text|l|電氣場地|Electric"],
		"effect": "當這隻寶可夢出場時，牠將自動發動招式〈電氣場地〉的效果。（若效果互相衝突，則由意志較高的寶可夢勝出。）",
		"desc": "這隻寶可夢能夠創造出環繞自己的電氣場地，使空氣充滿緊繃的氛圍，也讓每個人都感到緊張不安。"
	},
	{
		"name": "危險迴避", "alias": "ききかいひ|Emergency Exit",
		"tags": ["target|l|self", "nftext|l|HP降到一半或以下時", "effect|l|switcher", "target|l|ally"],
		"effect": "每當這隻寶可夢的HP降到一半或以下時，牠將會回到自己的精靈球，並換上一名隊友來代替牠。如果沒有其他隊友，則戰鬥直接結束。這個特性的效果不會被「阻擋」給影響。",
		"desc": "這隻寶可夢會在情勢升級失控時採取戰術性撤退，儘管你可以強迫牠進行戰鬥，但牠可不會喜歡這麼做。"
	},
	{
		"name": "妖精氣場", "alias": "フェアリーオーラ|Fairy Aura",
		"tags": ["target|l|field", "text|l|妖精招式|Fairy", "frame|self|傷害|plus|d2"],
		"effect": "場上所有寶可夢的妖精屬性招式的傷害骰池全都額外增加 2 顆骰子。這個效果不會疊加。場上的寶可夢和訓練家將不會攻擊這個特性的使用者。",
		"desc": "一股強大的粉紅色氣場從這隻寶可夢身上散發而出，使搖曳的微光籠罩著戰場，讓所有人的心中充滿和平、希望、和愛。"
	},
	{
		"name": "過濾", "alias": "フィルター|Filter",
		"tags": ["target|l|self", "nftext|l|當被效果絕佳的攻擊命中時", "frame|self|受傷|minus|1"],
		"effect": "如果敵人對這隻寶可夢使用了會造成效果絕佳的傷害的招式，則使該攻擊造成的總傷害減少 1 點。",
		"desc": "這隻寶可夢運用著一股看不見的能量力場來過濾任何傷害性的能量和物質。"
	},
	{
		"name": "火焰之軀", "alias": "ほのおのからだ|Flame Body",
		"tags": ["target|l|foe", "nftext|l|當被物理攻擊命中時", "frame|burn1||number|d3"],
		"effect": "當這隻寶可夢被非遠程攻擊的物理攻擊給命中時，骰 3 顆機率骰以使敵人陷入「灼傷 1 級」狀態。",
		"desc": "這隻寶可夢可以隨心所欲點燃自己的身軀，且不會因此受到任何傷害。接觸到這隻寶可夢的物體可能會起火燃燒。"
	},
	{
		"name": "受熱激升", "alias": "ねつぼうそう|Flare Boost",
		"tags": ["target|l|self", "frame|burn1||always", "frame|burn2||always", "frame|burn3||always", "frame|self|特殊|up|2"],
		"effect": "如果這隻寶可夢陷入任何「灼傷」狀態，則牠的特殊特質提升 2 點。",
		"desc": "擁有這個特性的寶可夢能從火焰產生的極端高熱中受益，這可能會讓牠有點像是縱火狂。"
	},
	{
		"name": "引火", "alias": "もらいび|Flash Fire",
		"tags": ["target|l|self", "nftext|l|免疫", "text|l|火系招式|Fire", "nftext|l|的傷害", "frame|self|傷害|plus|d1"],
		"effect": "當這隻寶可夢第一次被火屬性招式命中，則直到該場景結束前，這隻寶可夢所使用的火屬性招式的傷害骰池都將額外增加 1 顆骰子。火屬性招式不會對這隻寶可夢造成傷害。",
		"desc": "這隻寶可夢能夠吸收其他火源並將其化為己用。對牠來說，走過餘燼、火焰、岩漿、和煉獄都只不過像是清風吹拂。"
	},
	{
		"name": "花之禮", "alias": "フラワーギフト|Flower Gift",
		"tags": ["target|l|allally", "text|l|型態變化", "weather|l|sun", "frame|self|力量|up|2", "frame|self|特防|up|2"],
		"effect": "如果當前天氣狀態為大晴天，則這隻寶可夢和牠隊友的力量和特防特質都將提升 2 點。",
		"desc": "這隻寶可夢的花瓣將在陽光普照時散發出滿滿的能量，這股能量能讓周遭的人們感到更強大。"
	},
	{
		"name": "花幕", "alias": "フラワーベール|Flower Veil",
		"tags": ["target|l|allally", "frame|self|特質|down|never", "text|l|免疫異常"],
		"effect": "使用者和隊友的特質不會被降低，且不會陷入任何異常狀態。在這之前被影響的特質或異常狀態仍會保留。",
		"desc": "這隻寶可夢能使花朵盛開，並保護周遭的其他寶可夢不受傷害。"
	},
	{
		"name": "毛茸茸", "alias": "もふもふ|Fluffy",
		"tags": ["target|l|self", "text|l|物理攻擊", "frame|self|受傷|minus|2", "text|l|火系招式", "frame|self|受傷|plus|2"],
		"effect": "所有物理攻擊對這隻寶可夢造成的傷害降低 2 點。所有火屬性攻擊對這隻寶可夢造成的傷害增加 2 點。",
		"desc": "這隻寶可夢的毛皮蓬鬆到能讓人溺死在裡面。它是如此柔軟而舒適，彷彿在邀請你擁抱它一樣。請使用無溫烘乾機乾燥，不可熨燙。"
	},
	{
		"name": "陰晴不定", "alias": "てんきや|Forecast",
		"tags": ["target|l|self", "text|l|型態變化"],
		"effect": "這隻寶可夢的屬性會根據當前的天氣狀態而改變：大晴天時變為火屬性、下雨時變為水屬性、冰雹時變為冰屬性、沙暴時變為岩石屬性。",
		"desc": "這隻寶可夢能夠吸收周遭環境的元素而適應變化，讓牠甚至能在極端環境下生存。"
	},
	{
		"name": "預知夢", "alias": "よちむ|Forewarn",
		"tags": ["target|l|rfoe", "nftext|l|發出警告:", "effect|l|lethal", "text|l|高威力"],
		"effect": "在戰鬥中，這隻寶可夢會警告牠的訓練家關於其中一個敵人所擁有的最強招式的情報。說書人必須秘密地將情報告知這隻寶可夢的訓練家。",
		"desc": "當這隻寶可夢感覺到惡意或災難的接近，牠將會透過心靈感應警告牠的訓練家。訓練家必須使用洞察進行判定來接收這個訊息。"
	},
	{
		"name": "友情防守", "alias": "フレンドガード|Friend Guard",
		"tags": ["target|l|self", "nftext|l|當被隊友命中時", "frame|self|受傷|minus|2"],
		"effect": "如果這隻寶可夢被隊友施展的招式給命中，則降低 2 點自己受到的傷害。",
		"desc": "這隻寶可夢相當可愛，並能喚醒他人心中的母性。牠的每個同伴都會試圖保護好牠。"
	},
	{
		"name": "察覺", "alias": "おみとおし|Frisk",
		"tags": ["target|l|rfoe", "nftext|l|揭露持有的物品"],
		"effect": "當這隻寶可夢進入戰場時，說書人必須把牠其中一個敵人持有的物品告訴這隻寶可夢的訓練家。",
		"desc": "這隻寶可夢能夠看穿其他人攜帶的道具，即使對方試圖把它藏起來也一樣。"
	},
	{
		"name": "金屬防護", "alias": "メタルプロテクト|Full Metal Body",
		"tags": ["target|l|self", "frame|self|特質|down|never"],
		"effect": "其他寶可夢將無法使這隻寶可夢的特質降低。然而，這隻寶可夢仍然能夠降低自己的特質。",
		"desc": "這隻寶可夢的身體就是厚重的金屬護甲，閃亮的外殼沒有一點污瑕。如果往裏面注視，那麼你可能會被那烈日般的光輝給照瞎。"
	},
	{
		"name": "毛皮大衣", "alias": "ファーコート|Fur Coat",
		"tags": ["target|l|self", "nftext|l|當被物理攻擊命中時", "frame|self|受傷|minus|2"],
		"effect": "所有物理攻擊對這隻寶可夢造成的傷害降低 2 點。",
		"desc": "這隻寶可夢毛絨絨的外在相當柔軟、可愛想抱、且不會讓人過敏，它同時還能做為抵禦強大打擊的緩衝。"
	},
	{
		"name": "疾風之翼", "alias": "はやてのつばさ|Gale Wings",
		"tags": ["target|l|self", "text|l|飛行招式|Flying", "frame|priority||up|1"],
		"effect": "這隻寶可夢的所有飛行屬性招式全都獲得「先制度+1」的效果。",
		"desc": "這隻寶可夢的羽翼構造經過完美設計，讓牠能輕鬆駕馭最惡劣的狂風。"
	},
	{
		"name": "電氣皮膚", "alias": "エレキスキン|Galvanize",
		"tags": ["target|l|self", "text|l|一般招式|Normal", "text|l|電系招式|Electric", "frame|self|傷害|plus|d1"],
		"effect": "這隻寶可夢使用的一般屬性攻擊將會如同它是電屬性的招式一樣造成傷害，並適用屬性一致加成、弱點和抗性。電屬性招式的傷害骰池額外增加 1 顆骰子。",
		"desc": "這隻寶可夢的身軀環繞著電流，這讓牠無論做什麼事都顯得充滿能量。"
	},
	{
		"name": "貪吃鬼", "alias": "くいしんぼう|Gluttony",
		"tags": ["target|l|self"],
		"effect": "這隻寶可夢可以食用任何類型的食物、藥物、或草藥，而不會承受任何負面效果。這隻寶可夢可以在戰鬥中的任何時候以一個自由動作吃掉牠所持有的樹果。",
		"desc": "這隻寶可夢可以吃上一整天，牠完全不用擔心找不到食物來源，因為牠超級不挑食。"
	},
	{
		"name": "黏滑", "alias": "ぬめぬめ|Gooey",
		"tags": ["target|l|foe", "nftext|l|當被物理攻擊命中時", "frame|target|靈巧|down|1"],
		"effect": "當敵人第一次以非遠程攻擊的物理攻擊命中這隻寶可夢時，使敵人的靈巧特質降低 1 點。",
		"desc": "這隻寶可夢的黏性分泌物會黏在任何接觸牠的人身上，並可能會在行動上造成相當程度的負擔。往好處想，這可是純天然的有機膠水耶！"
	},
	{
		"name": "一猩一意", "alias": "ごりむちゅう|Gorilla Tactics",
		"tags": ["target|l|self", "frame|self|力量|up|1", "nftext|l|只能進行閃避和使用一個招式"],
		"effect": "在戰鬥開始時，選擇一個招式。這隻寶可夢的力量特質提升 1 點，且牠每個戰鬥輪都只能使用所選擇的招式或進行閃避。這個效果會在這隻寶可夢被從戰鬥中收回時重置。",
		"desc": "這隻寶可夢的儀態有許多待改進的空間，牠野蠻而粗俗，且面對難題的唯一手段就是「砸了它！」"
	},
	{
		"name": "草之毛皮", "alias": "くさのけがわ|Grass Pelt",
		"tags": ["target|l|self", "text|l|青草場地|Grass", "frame|self|防禦|up|2"],
		"effect": "如果〈青草場地〉正在發揮效果，則這隻寶可夢的防禦提升 2 點。",
		"desc": "這隻寶可夢披著一層茂盛的草皮來保護自己的身體，即使你將其割除，它也會在幾天內就重新長回來。"
	},
	{
		"name": "青草製造者", "alias": "グラスメイカー|Grassy Surge",
		"tags": ["target|l|field", "text|l|青草場地|Grass"],
		"effect": "當這隻寶可夢出場時，牠將自動發動招式〈青草場地〉的效果。（若效果互相衝突，則由意志較高的寶可夢勝出。）",
		"desc": "這隻寶可夢能夠創造出環繞自己的青草場地，讓牠更容易在陽光下放鬆發懶。"
	},
	{
		"name": "一口飛彈", "alias": "うのミサイル|Gulp Missile",
		"tags": ["target|l|self", "text|l|型態變化", "frame|target|傷害|number|d2", "frame|target|防禦|down|1", "frame|paralysis||always"],
		"effect": "如果這隻寶可夢使用了招式〈衝浪〉或〈潛水〉，則牠會在造成傷害後改變型態。如果牠的HP還剩下超過一半，則變為「一口吞型態」；如果牠的HP還剩下一半或以下，則變為「大口吞型態」。當這隻寶可夢在處於其中任意一個型態期間受到敵人造成的傷害，牠將骰 2 顆傷害骰以對敵人造成傷害，並根據型態造成額外效果（「一口吞型態」將使敵人的防禦降低 1 點；「大口吞型態」將使敵人陷入「麻痺」狀態），在這之後，這隻寶可夢將會恢復原本的型態。",
		"desc": "這隻寶可夢是個出色的獵手，牠總是能在潛入水池後帶著獵物飛翔而出，且牠有時候會把獵物當作武器使用……"
	},
	{
		"name": "毅力", "alias": "こんじょう|Guts",
		"tags": ["target|l|self", "nftext|l|處於異常狀態時", "frame|self|力量|up|2"],
		"effect": "當處於異常狀態時，這隻寶可夢的力量特質提升 2 點。",
		"desc": "這隻寶可夢敢於做出所有他人不敢為之的行動，且不會輕易失去牠的決心，儘管這可能會讓牠顯得有些魯莽。"
	},
	{
		"name": "收穫", "alias": "しゅうかく|Harvest",
		"tags": ["target|l|self", "nftext|l|重新長出樹果"],
		"effect": "如果這隻寶可夢在戰鬥期間以持有物品的形式消耗了一顆樹果，則該樹果會在該日結束時重新長回來。",
		"desc": "這隻寶可夢天生就能夠在短時間內生長出可食用的水果，如果牠被餵食了樹果，那牠也將能夠生長出它們。"
	},
	{
		"name": "治癒之心", "alias": "いやしのこころ|Healer",
		"tags": ["target|l|ally", "frame|heal|治療狀態|number|d3"],
		"effect": "如果戰場上的某個隊友處於異常狀態，則在該戰鬥輪結束時，這隻寶可夢可以骰 3 顆機率骰以治療該狀態。",
		"desc": "這隻寶可夢擁有治療之力，且牠會毫不猶豫地運用這股力量來幫助他人。"
	},
	{
		"name": "耐熱", "alias": "たいねつ|Heatproof",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "重金屬", "alias": "ヘヴィメタル|Heavy Metal",
		"tags": ["target|l|self", "nftext|l|體重變為兩倍"],
		"effect": "這隻寶可夢的重量變為原本的兩倍。基於寶可夢體重的招式的傷害將根據這個變化產生相應的調整。",
		"desc": "包裹著這隻寶可夢身體的金屬是如此厚重，以至於它能輕易使這隻寶可夢的重量變為原本的兩倍。"
	},
	{
		"name": "採蜜", "alias": "みつあつめ|Honey Gather",
		"tags": ["target|l|self", "nftext|l|讓你獲得甜甜蜜"],
		"effect": "一小罐甜甜蜜能夠賣到最高 $100 的價錢。甜甜蜜能夠吸引野生的寶可夢，且把甜甜蜜餵食給寶可夢將能讓牠快樂。",
		"desc": "這隻寶可夢能夠自己製造出蜂蜜，你每天都能夠得到一小罐高品質的甜蜜蜜。"
	},
	{
		"name": "大力士", "alias": "ちからもち|Huge Power",
		"tags": ["target|l|self", "frame|self|力量|up|1"],
		"effect": "這隻寶可夢的力量特質永久提升 1 點。",
		"desc": "除了牠的身體外表，這隻寶可夢還擁有著一股超自然的力量之源。"
	},
	{
		"name": "飽了又餓", "alias": "はらぺこスイッチ|Hunger Switch",
		"tags": ["target|l|self", "text|l|型態變化"],
		"effect": "只有莫魯貝可能夠使用這個特性。這個特性無法被複製或交換。在戰鬥輪結束時，切換這隻寶可夢的型態（「滿腹型態」／「空腹型態」）。",
		"desc": "這隻寶可夢會在感到飢餓時變得相當暴躁，除非你經常給牠零食，否則牠將會抓狂咬人。"
	},
	{
		"name": "活力", "alias": "はりきり|Hustle",
		"tags": ["target|l|self", "nftext|l|物理攻擊獲得", "frame|accuracy||down|1", "frame|self|傷害|plus|d2"],
		"effect": "這隻寶可夢的所有物理攻擊都將獲得額外的「降低命中率」標誌，且傷害骰池獲得額外 2 顆骰子。",
		"desc": "這隻寶可夢會興沖沖的採取所有行動，這通常會讓牠的行為變得有些草率。"
	},
	{
		"name": "濕潤之軀", "alias": "うるおいボディ|Hydration",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "怪力鉗", "alias": "かいりきバサミ|Hyper Cutter",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "冰凍之軀", "alias": "アイスボディ|Ice Body",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "結凍頭", "alias": "アイスフェイス|Ice Face",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "冰鱗粉", "alias": "こおりのりんぷん|Ice Scales",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "發光", "alias": "はっこう|Illuminate",
		"tags": ["target|l|self"],
		"effect": "提升遭遇野生寶可夢的機率。如果存在任何會降低能見度的環境挑戰，則這隻寶可夢和牠的隊友將免疫其效果。",
		"desc": "這隻寶可夢能夠自然地讓牠的身體發出光芒。其他寶可夢會在看見這道光芒時好奇地接近。"
	},
	{
		"name": "幻覺", "alias": "イリュージョン|Illusion",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "免疫", "alias": "めんえき|Immunity",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "變身者", "alias": "かわりもの|Imposter",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "穿透", "alias": "すりぬけ|Infiltrator",
		"tags": ["target|l|self"],
		"effect": "這隻寶可夢能夠忽略護盾招式、〈神秘守護〉、〈替身〉、〈光牆〉、和〈反射壁〉的效果。",
		"desc": "這隻寶可夢的行動相當隱匿，牠天生就比其他人還要更難以被察覺。"
	},
	{
		"name": "飛出的內在物", "alias": "とびだすなかみ|Innards Out",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "精神力", "alias": "せいしんりょく|Inner Focus",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "不眠", "alias": "ふみん|Insomnia",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "威嚇", "alias": "いかく|Intimidate",
		"tags": ["target|l|allfoe", "frame|target|力量|down|1"],
		"effect": "當這隻寶可夢出場時，使範圍內所有敵人的力量降低 1 點。只要這隻寶可夢在場上，這個效果就會持續。降低遭遇野生寶可夢的機率。",
		"desc": "這隻寶可夢散發著壓倒性的存在威壓，能激起他人的恐懼和敬重。"
	},
	{
		"name": "不撓之劍", "alias": "ふとうのけん|Intrepid Sword",
		"tags": ["target|l|self", "frame|self|力量|up|2"],
		"effect": "當這隻寶可夢進入戰鬥時，使牠自己的力量提升 2 點。在戰鬥之外的情況，這隻寶可夢可以切穿任何表面。",
		"desc": "這隻大膽的寶可夢無懼於任何挑戰，牠的力量能透過純粹的意志來增長。牠的存在本身可能就相當危險。"
	},
	{
		"name": "鐵刺", "alias": "てつのトゲ|Iron Barbs",
		"tags": ["target|l|foe", "nftext|l|當被物理攻擊命中時", "frame|target|傷害|number|d1"],
		"effect": "每當這隻寶可夢被非遠程攻擊的物理攻擊給命中時，骰 1 顆傷害骰以對攻擊者造成傷害。",
		"desc": "這隻寶可夢覆有尖銳的鐵棘，能刺傷任何粗魯碰觸牠的傢伙。"
	},
	{
		"name": "鐵拳", "alias": "てつのこぶし|Iron Fist",
		"tags": ["target|l|self", "effect|l|fist", "frame|self|傷害|plus|d1"],
		"effect": "拳頭類招式的傷害骰池額外增加 1 顆骰子。",
		"desc": "這隻寶可夢的雙手相當強壯且沉重，當握緊成拳，它們可以擊穿幾乎所有一切。"
	},
	{
		"name": "正義之心", "alias": "せいぎのこころ|Justified",
		"tags": ["target|l|self", "text|l|惡系招式|Dark", "frame|self|力量|up|1"],
		"effect": "當這隻寶可夢第一次被惡屬性攻擊命中、或當牠目睹了某個牠認為不公義的事件時，這隻寶可夢的力量特質提升 1 點。",
		"desc": "這隻寶可夢有著天生的正義感，惡行將會使牠感到非常憤怒。"
	},
	{
		"name": "銳利目光", "alias": "するどいめ|Keen Eye",
		"tags": ["target|l|self", "frame|self|命中|down|never"],
		"effect": "這隻寶可夢的命中判定的成功骰不會因為招式、道具、或特性的影響而被扣除。但疼痛懲罰和難度懲罰仍會適用。",
		"desc": "這隻寶可夢擁有卓越的視覺，鎖定渺小或位於遙遠距離外的目標將會變得容易許多。"
	},
	{
		"name": "笨拙", "alias": "ぶきよう|Klutz",
		"tags": ["target|l|self", "nftext|l|免疫持有物品的效果"],
		"effect": "這隻寶可夢的持有物品不會對自己造成任何效果。",
		"desc": "這隻寶可夢不懂得如何正確的使用工具，且通常會以意想不到的方式使用它們。"
	},
	{
		"name": "葉子防守", "alias": "リーフガード|Leaf Guard",
		"tags": ["target|l|self", "weather|l|sun", "text|l|免疫異常"],
		"effect": "如果當前天氣狀態為大晴天，則這隻寶可夢不會陷入任何異常狀態。在這之前陷入的異常狀態仍會保留。",
		"desc": "這隻寶可夢身上的葉片隨著陽光延展以遮蓋自己的身體。"
	},
	{
		"name": "飄浮", "alias": "ふゆう|Levitate",
		"tags": ["target|l|self", "nftext|l|免疫", "text|l|地面招式|Ground"],
		"effect": "地面屬性的招式和地面上的效果都不會影響這隻寶可夢。如果這隻寶可夢使用了會把牠自己束縛在地面上的招式，則這個效果將會消失，直到牠再次脫離地表。",
		"desc": "這隻寶可夢飄浮在空中四處移動而無須接觸地表。"
	},
	{
		"name": "自由者", "alias": "リベロ|Libero",
		"tags": ["target|l|self", "text|l|改變屬性"],
		"effect": "每當這隻寶可夢使用了一個招式，把牠的屬性先改變為該招式的屬性。若該招式為攻擊招式且會造成傷害，則適用屬性一致加成。",
		"desc": "這隻寶可夢在比賽中總有自己的計畫。牠喜歡居於守勢，並在最後進攻時做出最棒的特殊傳球。"
	},
	{
		"name": "輕金屬", "alias": "ライトメタル|Light Metal",
		"tags": ["target|l|self", "nftext|l|體重變輕"],
		"effect": "這隻寶可夢的重量變為原本的50%~75%。基於寶可夢體重的招式的傷害將根據這個變化產生相應的調整。",
		"desc": "包裹著這隻寶可夢身體的金屬彷彿羽毛一樣輕盈，使這隻寶可夢的體重變為原本的 50% 到 75%。"
	},
	{
		"name": "避雷針", "alias": "ひらいしん|Lightning Rod",
		"tags": ["target|l|self", "nftext|l|吸引並免疫", "text|l|電系招式|Electric", "frame|self|傷害|plus|d1"],
		"effect": "如果有任何人使用了單一目標的電屬性招式，則該招式的目標將會引導變更為這隻寶可夢；這隻寶可夢免疫任何電屬性招式的傷害。當這隻寶可夢第一次被電屬性招式命中，這隻寶可夢的特殊特質提升 1 點。",
		"desc": "這隻寶可夢能夠把閃電和電流吸引到自身，以供自己充能。"
	},
	{
		"name": "柔軟", "alias": "じゅうなん|Limber",
		"tags": ["target|l|self", "frame|paralysis||never"],
		"effect": "這隻寶可夢不會受到「麻痺」狀態的影響。",
		"desc": "這隻寶可夢的肌肉靈活地令人驚異且有彈性，使牠能輕鬆地行動，迅捷且優雅。"
	},
	{
		"name": "污泥漿", "alias": "ヘドロえき|Liquid Ooze",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "濕潤之聲", "alias": "うるおいボイス|Liquid Voice",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "遠隔", "alias": "えんかく|Long Reach",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "魔法鏡", "alias": "マジックミラー|Magic Bounce",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "魔法防守", "alias": "マジックガード|Magic Guard",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "魔術師", "alias": "マジシャン|Magician",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "熔岩鎧甲", "alias": "マグマのよろい|Magma Armor",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "磁力", "alias": "じりょく|Magnet Pull",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "神奇鱗片", "alias": "ふしぎなうろこ|Marvel Scale",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "超級發射器", "alias": "メガランチャー|Mega Launcher",
		"tags": ["target|l|self", "frame|self|傷害|plus|d2"],
		"effect": "這隻寶可夢使用的每個名字帶有「波動」或「波導」關鍵字的招式，其傷害骰池／治療骰池都將額外增加 2 顆骰子。",
		"desc": "這隻寶可夢身上的大砲能讓牠發射出極端猛烈的砲火。"
	},
	{
		"name": "不仁不義", "alias": "ひとでなし|Merciless",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "擬態", "alias": "ぎたい|Mimicry",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "負電", "alias": "マイナス|Minus",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "鏡甲", "alias": "ミラーアーマー|Mirror Armor",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "薄霧製造者", "alias": "ミストメイカー|Misty Surge",
		"tags": ["target|l|field", "text|l|薄霧場地|Fairy"],
		"effect": "當這隻寶可夢出場時，牠將自動發動招式〈薄霧場地〉的效果。（若效果互相衝突，則由意志較高的寶可夢勝出。）",
		"desc": "這隻寶可夢能夠創造出環繞自己的薄霧場地，這裡異常寧靜，使人感覺和平且舒緩，但也同時寂寞與孤獨。"
	},
	{
		"name": "破格", "alias": "かたやぶり|Mold Breaker",
		"tags": ["target|l|self", "nftext|l|忽略其他寶可夢的免疫能力"],
		"effect": "如果敵人擁有任何屬性、特性、或其他免疫能力能阻止這隻寶可夢使用某個招式對其進行攻擊，將其忽略。",
		"desc": "這隻寶可夢將找出不尋常的手段來達成牠的目的。牠們善於創新，繞過難題。"
	},
	{
		"name": "心情不定", "alias": "ムラっけ|Moody",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "電氣引擎", "alias": "でんきエンジン|Motor Drive",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "自信過度", "alias": "じしんかじょう|Moxie",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "多重鱗片", "alias": "マルチスケイル|Multiscale",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "多屬性", "alias": "マルチタイプ|Multitype",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "木乃伊", "alias": "ミイラ|Mummy",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "自然回復", "alias": "しぜんかいふく|Natural Cure",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "腦核之力", "alias": "ブレインフォース|Neuroforce",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "化學變化氣體", "alias": "かがくへんかガス|Neutralizing Gas",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "無防守", "alias": "ノーガード|No Guard",
		"tags": ["target|l|self", "nftext|l|忽略", "frame|accuracy||down|X", "nftext|l|但無法閃避"],
		"effect": "你可以在戰鬥輪開始時宣告自己不會進行任何閃避動作。如果你這麼做，則這隻寶可夢在為牠的所有招式進行命中判定時將視作沒有任何「降低命中率」標誌。",
		"desc": "這隻寶可夢能夠完美地專注於攻擊，但同時也對牠的敵人門戶大開，就彷彿牠除了專注於精準命中之外完全不在乎其他事情。。"
	},
	{
		"name": "一般皮膚", "alias": "ノーマルスキン|Normalize",
		"tags": ["target|l|self", "text|l|所有屬性", "text|l|一般招式|Normal", "frame|self|傷害|plus|d1"],
		"effect": "這隻寶可夢的所有招式都被視為一般屬性，並適用屬性一致加成、弱點和抗性。一般屬性招式的傷害骰池額外增加 1 顆骰子。",
		"desc": "這隻寶可夢的行動從來不會讓人驚艷，總是枯燥無華，且似乎從來沒完成過任何出乎意料的事情。"
	},
	{
		"name": "遲鈍", "alias": "どんかん|Oblivious",
		"tags": ["target|l|self", "frame|love||never"],
		"effect": "這隻寶可夢不會受到「著迷」狀態的影響，且牠免疫任何會影響牠情緒的招式的效果，像是〈挑釁〉、〈撒嬌〉、〈誘惑〉等等",
		"desc": "這隻寶可夢很少會做出令人滿意的社交互動，牠太只顧自己，以至於會忽略掉任何期待牠做出什麼反應的暗示。"
	},
	{
		"name": "防塵", "alias": "ぼうじん|Overcoat",
		"tags": ["target|l|self", "nftext|l|免疫天氣狀態造成的傷害"],
		"effect": "這隻寶可夢不會被天氣狀態所傷害。",
		"desc": "這隻寶可夢有著一層環繞牠身體的防護性外殼，能讓牠在最極端的天氣狀態下存活下來。"
	},
	{
		"name": "茂盛", "alias": "しんりょく|Overgrow",
		"tags": ["target|l|self", "nftext|l|HP降到一半或以下時", "text|l|草系招式|Grass", "frame|self|傷害|plus|d1"],
		"effect": "當這隻寶可夢的HP剩一半或以下，牠草屬性招式的傷害骰池並不會因為疼痛懲罰而被扣除成功骰，且牠草屬性招式的傷害骰池會額外增加 1 顆骰子。",
		"desc": "當這隻寶可夢受傷時，牠的體內會長出巨大的植物來保衛自己；這個植物相當強勁但凋萎很快。"
	},
	{
		"name": "我行我素", "alias": "マイペース|Own Tempo",
		"tags": ["target|l|self", "frame|confuse||never"],
		"effect": "這隻寶可夢不會受到「混亂」狀態的影響。",
		"desc": "這隻寶可夢以自己的步調做事，忽略所有同儕壓力。牠的行為舉止出於本能，且相當冷靜……或許有點太冷靜了。"
	},
	{
		"name": "親子愛", "alias": "おやこあい|Parental Bond",
		"tags": ["target|l|self", "nftext|l|骰二次傷害骰並取高"],
		"effect": "這隻寶可夢的所有傷害骰池都可以骰二次。選擇較好的擲骰結果以對敵人造成傷害。",
		"desc": "這隻寶可夢與牠幼崽的關係相當緊密，牠們所有事情都會一起做。做母親的非常保護牠的孩子。"
	},
	{
		"name": "粉彩護幕", "alias": "パステルベール|Pastel Veil",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "滅亡之軀", "alias": "ほろびのボディ|Perish Body",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "撿拾", "alias": "ものひろい|Pick up",
		"tags": ["target|l|self"],
		"effect": "如果這隻寶可夢待在精靈球外面，則在該場景結束時，看看牠為你找到了什麼東西（由說書人決定）。",
		"desc": "這隻寶可夢會經常收集東西，並堆成一個可能會與你分享的小寶物堆。"
	},
	{
		"name": "順手牽羊", "alias": "わるいてぐせ|Pickpocket",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "妖精皮膚", "alias": "フェアリースキン|Pixilate",
		"tags": ["target|l|self", "text|l|一般招式|Normal", "text|l|妖精招式|Fairy", "frame|self|傷害|plus|d1"],
		"effect": "這隻寶可夢使用的一般屬性攻擊將會如同它是妖精屬性的招式一樣造成傷害，並適用屬性一致加成、弱點和抗性。妖精屬性招式的傷害骰池額外增加 1 顆骰子。",
		"desc": "這隻寶可夢散撒著能為心靈帶來快樂想法的妖精塵。牠所做的一切行為看起來都非常可愛。"
	},
	{
		"name": "正電", "alias": "プラス|Plus",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "毒療", "alias": "ポイズンヒール|Poison Heal",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "毒刺", "alias": "どくのトゲ|Poison Point",
		"tags": ["target|l|foe", "frame|poison||number|d3"],
		"effect": "當這隻寶可夢被非遠程攻擊的物理攻擊給命中時，骰 3 顆機率骰以使對方陷入「中毒」狀態。",
		"desc": "這隻寶可夢身上的棘刺或鱗片能夠釋放毒素，感染任何膽敢粗魯碰觸牠們的傢伙。對付牠們時最好戴上手套。"
	},
	{
		"name": "毒手", "alias": "どくしゅ|Poison Touch",
		"tags": ["target|l|foe", "frame|poison||number|d2"],
		"effect": "當這隻寶可夢使用非遠程攻擊的物理攻擊命中敵人時，骰 2 顆機率骰以使對方陷入「中毒」狀態。",
		"desc": "有毒物質會從這隻寶可夢的身體表面滲出，如果不小心讓牠碰到了你，你將會變得病懨懨的。"
	},
	{
		"name": "群聚變形", "alias": "スワームチェンジ|Power Construct",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "化學之力", "alias": "かがくのちから|Power of Alchemy",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "能量點", "alias": "パワースポット|Power Spot",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "惡作劇之心", "alias": "いたずらごころ|Prankster",
		"tags": ["target|l|self", "text|l|變化招式", "frame|priority||up|1"],
		"effect": "這隻寶可夢的所有變化類招式的先制+1。",
		"desc": "這隻寶可夢的雙眼總是閃爍著調皮的光芒，這附近沒有任何人能夠逃過牠的惡作劇。"
	},
	{
		"name": "壓迫感", "alias": "プレッシャー|Pressure",
		"tags": ["target|l|allfoe", "frame|target|意志|down|½"],
		"effect": "當這隻寶可夢出場時，將所有敵人的意志點減半（尾數捨去）。",
		"desc": "待在這隻寶可夢附近會讓人感到壓迫而緊張，即使是最勇敢的人都會不由得感到猶豫。"
	},
	{
		"name": "始源之海", "alias": "はじまりのうみ|Primordial Sea",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "稜鏡裝甲", "alias": "プリズムアーマー|Prism Armor",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "螺旋尾鰭", "alias": "スクリューおびれ|Propeller Tail",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "變幻自如", "alias": "へんげんじざい|Protean",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "精神製造者", "alias": "サイコメイカー|Psychic Surge",
		"tags": ["target|l|field", "text|l|精神場地|Psychic"],
		"effect": "當這隻寶可夢出場時，牠將自動發動招式〈精神場地〉的效果。（若效果互相衝突，則由意志較高的寶可夢勝出。）",
		"desc": "這隻寶可夢能夠創造出環繞自己的精神場地，這將使所有人停下動作，聽見不存在此處的事物。"
	},
	{
		"name": "龐克搖滾", "alias": "パンクロック|Punk Rock",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "瑜伽之力", "alias": "ヨガパワー|Pure Power",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "女王的威嚴", "alias": "じょおうのいげん|Queenly Majesty",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "速擊", "alias": "クイックドロウ|Quick Draw",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "飛毛腿", "alias": "はやあし|Quick Feet",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "雨盤", "alias": "あめうけざら|Rain Dish",
		"tags": ["target|l|self", "weather|l|rain", "frame|heal||heal|1"],
		"effect": "如果當前天氣狀態為下雨，則這隻寶可夢可以在每輪結束時回復 1 點HP。",
		"desc": "這隻寶可夢會儲存雨水以供飲用或滋養所需。"
	},
	{
		"name": "膽怯", "alias": "びびり|Rattled",
		"tags": ["target|l|self", "nftext|l|當被", "text|l|蟲系招式|Bug", "text|l|惡系招式|Dark", "text|l|幽靈招式|Ghost", "nftext|l|命中時", "frame|self|靈巧|up|1"],
		"effect": "當這隻寶可夢第一次被蟲、惡、或幽靈屬性的攻擊命中時，這隻寶可夢的靈巧特質將提升 1 點。",
		"desc": "當這隻膽戰心驚的寶可夢感到害怕或受驚嚇時，牠將加速以匆忙逃離危險。"
	},
	{
		"name": "接球手", "alias": "レシーバー|Receiver",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "捨身", "alias": "すてみ|Reckless",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "冰凍皮膚", "alias": "フリーズスキン|Refrigerate",
		"tags": ["target|l|self", "text|l|一般招式|Normal", "text|l|冰系招式|Ice", "frame|self|傷害|plus|d1"],
		"effect": "這隻寶可夢使用的一般屬性攻擊將會如同它是冰屬性的招式一樣造成傷害，並適用屬性一致加成、弱點和抗性。冰屬性招式的傷害骰池額外增加 1 顆骰子。",
		"desc": "這隻寶可夢的身體就如同冷凍裝置一樣，牠能透過單純的觸碰來使東西凍結。"
	},
	{
		"name": "再生力", "alias": "さいせいりょく|Regenerator",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "熟成", "alias": "じゅくせい|Ripen",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "鬥爭心", "alias": "とうそうしん|Rivalry",
		"tags": ["target|l|self", "frame|self|力量|up|1", "frame|self|力量|down|1"],
		"effect": "如果這隻寶可夢的敵人為同性，則牠的力量提升 1 點。如果這隻寶可夢的敵人為異性，則牠的力量降低 1 點。",
		"desc": "為了證明自己是群體中的老大，這隻寶可夢會與其他同性進行相當激烈的競爭。然而，牠會試圖贏得每一個配偶候選人的青睞。"
	},
	{
		"name": "ＡＲ系統", "alias": "ＡＲシステム|RKS System",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "堅硬腦袋", "alias": "いしあたま|Rock Head",
		"tags": ["target|l|self", "nftext|l|免疫", "effect|l|recoil", "nftext|l|的傷害"],
		"effect": "這隻寶可夢不會受到反作用力傷害。",
		"desc": "這隻寶可夢的頭和身體是如此堅硬，以至於牠們幾乎感覺不到任何痛楚。小心點，牠們可能甚至不會意識到自己有撞到東西。"
	},
	{
		"name": "粗糙皮膚", "alias": "さめはだ|Rough Skin",
		"tags": ["target|l|foe", "nftext|l|當被物理攻擊命中時", "frame|target|傷害|number|d1"],
		"effect": "當這隻寶可夢被非遠程攻擊的物理攻擊給命中時，骰 1 顆傷害骰以對敵人造成傷害。",
		"desc": "在觸碰這隻寶可夢時請務必保護好你的雙手，因為牠的身體覆蓋著能夠割傷肌膚的鋒利鱗片或棘刺。"
	},
	{
		"name": "逃跑", "alias": "にげあし|Run Away",
		"tags": ["target|l|self", "nftext|l|免疫於", "effect|l|block"],
		"effect": "這隻寶可夢不會被阻擋。根據說書人的判斷，牠在為從戰鬥中逃跑或逃離囚禁時進行的判定也可能會得到額外的獎勵骰。",
		"desc": "這隻寶可夢是逃跑大師，牠相當難以捕捉，且甚至能夠鑽進最狹窄的隙縫來逃出生天。"
	},
	{
		"name": "沙之力", "alias": "すなのちから|Sand Force",
		"tags": ["target|l|self", "weather|l|sand", "text|l|地系招式|Ground", "text|l|岩系招式|Rock", "text|l|鋼系招式|Steel", "frame|self|傷害|plus|d1", "nftext|l|免疫沙暴傷害"],
		"effect": "如果當前天氣狀態為沙暴，則這隻寶可夢地面、岩石、和鋼屬性招式的傷害骰池都會額外增加 1 顆骰子。這隻寶可夢免疫沙暴天氣造成的傷害。",
		"desc": "這隻寶可夢能控制戰場周遭的沙塵微粒以增強牠的攻擊。"
	},
	{
		"name": "撥沙", "alias": "すなかき|Sand Rush",
		"tags": ["target|l|self", "weather|l|sand", "frame|self|靈巧|up|1", "nftext|l|免疫沙暴傷害"],
		"effect": "如果當前天氣狀態為沙暴，則這隻寶可夢的靈巧特質提升 1 點。這隻寶可夢免疫沙暴天氣造成的傷害。",
		"desc": "當沙塵橫掃這個戰場，這隻寶可夢能夠穿梭其中，如魚得水。"
	},
	{
		"name": "吐沙", "alias": "すなはき|Sand Spit",
		"tags": ["target|l|field", "nftext|l|當被物理攻擊命中時", "weather|l|sand"],
		"effect": "當這隻寶可夢被非遠程攻擊的物理攻擊給命中時，牠將把天氣狀態變為沙暴。這個效果將持續 4 輪。",
		"desc": "這隻寶可夢蜿蜒穿過沙漠中的沙土，並在過程中吃掉一些沙子。如果牠被擊中（或打了個噴嚏），則牠將噴出一股沙塵暴。"
	},
	{
		"name": "揚沙", "alias": "すなおこし|Sand Stream",
		"tags": ["target|l|field", "weather|l|sand"],
		"effect": "當這隻寶可夢出場時，天氣狀態將會自動變為沙暴。這個效果將會在這隻寶可夢退場時結束。（若效果互相衝突，則由意志較高的寶可夢影響天氣狀態。）",
		"desc": "這隻寶可夢能夠讓牠周圍颳起可怕的沙塵暴，且只要牠想要就能不斷持續下去。"
	},
	{
		"name": "沙隱", "alias": "すながくれ|Sand Veil",
		"tags": ["target|l|self", "weather|l|sand", "frame|self|閃避|up|1", "nftext|l|免疫沙暴傷害"],
		"effect": "如果當前天氣狀態為沙暴，則這隻寶可夢的閃避技能提升 1 點。這隻寶可夢免疫沙暴天氣造成的傷害。",
		"desc": "這隻寶可夢的身體能輕易地被空氣中的沙塵粒子給遮蔽。"
	},
	{
		"name": "食草", "alias": "そうしょく|Sap Sipper",
		"tags": ["target|l|self", "nftext|l|免疫", "text|l|草系招式|Grass", "nftext|l|的傷害", "frame|self|力量|up|1"],
		"effect": "當這隻寶可夢第一次被草屬性招式命中，這隻寶可夢的力量將因此提升 1 點，而非造成傷害。草屬性招式不會對這隻寶可夢造成傷害。",
		"desc": "這隻寶可夢完全以植物為食，牠特別喜歡攝食植物的鮮甜汁液以獲取養分。"
	},
	{
		"name": "魚群", "alias": "ぎょぐん|Schooling",
		"tags": ["target|l|self", "text|l|型態變化"],
		"effect": "只有弱丁魚能夠使用這個特性。當牠的HP剩一半或以下，牠的魚群同伴將會在一段時間後抵達。當牠們抵達後，將弱丁魚的數據取代為滿HP的「弱丁魚（魚群型態）」，並將其階級提升到「專家」。在戰鬥結束後，弱丁魚將變回原本的型態。<br/>．若位於海洋/河流，魚群將在該輪結束時抵達。<br/>．若位於公路/城鎮，魚群將在第二輪結束時抵達。<br/>．若位於洞窟/城市，魚群將在第三輪結束時抵達。<br/>．若位於沙漠/雪地，魚群將在第四輪結束時抵達。<br/>．若位於火山，魚群將在第五輪結束時抵達。<br/>（治療／陷入瀕死／替換寶可夢將會阻礙魚群抵達的時間）",
		"desc": "當這隻寶可夢受到威脅時，牠會喚來數千名同伴以集合成一隻不受控的大怪物。牠越接近海洋，魚群就會越快抵達。"
	},
	{
		"name": "膽量", "alias": "きもったま|Scrappy",
		"tags": ["target|l|self", "text|l|一般招式|Normal", "text|l|格鬥招式|Fight", "nftext|l|可以命中", "text|l|幽靈屬性|Ghost"],
		"effect": "這隻寶可夢得到能以一般和格鬥屬性招式命中幽靈屬性寶可夢的能力，並無視其免疫能力以造成傷害。如果該寶可夢擁有第二屬性，則如常應用其抗性或弱點。",
		"desc": "這隻寶可夢完全不相信幽靈的存在。"
	},
	{
		"name": "除障", "alias": "バリアフリー|Screen Cleaner",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "天恩", "alias": "てんのめぐみ|Serene Grace",
		"tags": ["target|l|self", "pdice|l|2"],
		"effect": "這隻寶可夢造成的所有效果都將額外增加 2 顆機率骰。（例如：一個會骰 3 顆機率骰以使敵人陷入「畏縮」狀態的招式，將會變成骰 5 顆機率骰。）",
		"desc": "這隻寶可夢會帶來好運，就彷彿牠被上天祝福一樣。牠的存在能讓人感到撫慰，使你感到平靜且充滿喜悅。"
	},
	{
		"name": "幻影防守", "alias": "ファントムガード|Shadow Shield",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "踩影", "alias": "かげふみ|Shadow Tag",
		"tags": ["target|l|allfoe", "effect|l|block"],
		"effect": "所有敵人被阻擋。幽靈屬性和相同特性的寶可夢將免疫這個效果。",
		"desc": "這隻寶可夢踩住對手的影子，不讓對方離自己太遠。"
	},
	{
		"name": "蛻皮", "alias": "だっぴ|Shed Skin",
		"tags": ["target|l|self", "frame|heal|治療狀態|number|d3"],
		"effect": "在每個戰鬥輪結束時，如果這隻寶可夢正處於異常狀態，則骰 3 顆機率骰以治療自己的異常狀態。",
		"desc": "這隻寶可夢的身體總是不斷長出新的外皮，並在舊的表皮損壞時將其蛻去。"
	},
	{
		"name": "強行", "alias": "ちからずく|Sheer Force",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "硬殼盔甲", "alias": "シェルアーマー|Shell Armor",
		"tags": ["target|l|foe", "frame|target|要害獎勵|never"],
		"effect": "如果敵人對這隻寶可夢造成了擊中要害，則牠不會因為擊中要害而獲得任何額外的獎勵骰。",
		"desc": "這隻寶可夢的硬殼保護著牠的脆弱弱點不被對手所傷。"
	},
	{
		"name": "鱗粉", "alias": "りんぷん|Shield Dust",
		"tags": ["target|l|self", "nftext|l|免疫機率骰造成的額外效果"],
		"effect": "如果這隻寶可夢被帶有會造成額外效果的機率骰的攻擊給命中，則牠不會受到該額外效果的影響。",
		"desc": "這隻寶可夢總是不斷產生鱗粉來遮蔽並保護自己。"
	},
	{
		"name": "界限盾殼", "alias": "リミットシールド|Shields Down",
		"tags": ["target|l|self", "text|l|型態變化"],
		"effect": "只有小隕星能夠使用這個特性。當牠的HP剩一半或以下，將小隕星的數據取代為滿HP的「小隕星（核心型態）」。若要恢復其原本的型態，小隕星（核心型態）必須被放生，並在數天後等牠回來後再重新捕捉。",
		"desc": "這隻寶可夢的核心被一層堅硬的盾殼給保護，如果盾殼被擊碎，這隻寶可夢的行動將變得瘋狂起來。"
	},
	{
		"name": "單純", "alias": "たんじゅん|Simple",
		"tags": ["target|l|self", "frame|self|特質|down|-1", "frame|self|特質|up|+1"],
		"effect": "若這隻寶可夢的特質將被降低，則該特質額外降低 1 點。若這隻寶可夢的特質將被提升，則該特質額外提升 1 點。",
		"desc": "這隻寶可夢天真的心靈很容易被自己和外在的影響給動搖。牠總是能找到把事情簡單化的方法。"
	},
	{
		"name": "連續攻擊", "alias": "スキルリンク|Skill Link",
		"tags": ["target|l|self", "effect|l|sact_2", "effect|l|sact_5", "frame|self|命中|plus|d2"],
		"effect": "當使用雙重行動或連續行動招式時，該招式的命中判定將額外增加 2 顆骰子。",
		"desc": "這隻寶可夢可以熟練地連鎖施展一系列猛攻。牠同時也喜歡重複且連續的行動。"
	},
	{
		"name": "慢啟動", "alias": "スロースタート|Slow Start",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "撥雪", "alias": "ゆきかき|Slush Rush",
		"tags": ["target|l|self", "weather|l|hail", "frame|self|靈巧|up|1", "nftext|l|免疫冰雹傷害"],
		"effect": "如果當前天氣狀態為冰雹，則這隻寶可夢的靈巧特質提升 1 點。這隻寶可夢免疫冰雹天氣造成的傷害。",
		"desc": "這隻寶可夢相當習慣於在冰雪環境中奔跑狩獵，甚至能夠在狂風暴雪中於雪地迅速移動。"
	},
	{
		"name": "狙擊手", "alias": "スナイパー|Sniper",
		"tags": ["target|l|self", "frame|self|要害獎勵|plus|d1"],
		"effect": "當這隻寶可夢擊中要害時，牠地傷害骰池將會增加 3 顆骰子，而非原本的 2 顆骰子。",
		"desc": "這隻寶可夢將悄悄地讓自己位處優勢位置，好狠狠打擊敵人的弱點。"
	},
	{
		"name": "雪隱", "alias": "ゆきがくれ|Snow Cloak",
		"tags": ["target|l|self", "weather|l|hail", "frame|self|閃避|up|1", "nftext|l|免疫冰雹傷害"],
		"effect": "如果當前天氣狀態為冰雹，則這隻寶可夢的閃避技能提升 1 點。這隻寶可夢免疫冰雹天氣造成的傷害。",
		"desc": "這隻寶可夢的外表能很好地融入冰天雪地之中，你很難辨識出牠的身影。"
	},
	{
		"name": "降雪", "alias": "ゆきふらし|Snow Warning",
		"tags": ["target|l|field", "weather|l|hail"],
		"effect": "當這隻寶可夢出場時，天氣狀態將會自動變為冰雹。這個效果將會在這隻寶可夢退場時結束。（若效果互相衝突，則由意志較高的寶可夢影響天氣狀態。）",
		"desc": "這隻寶可夢能夠憑意志換來可怕的雹暴。白雪將覆蓋整個戰場，尖銳的冰雹塊將從天空傾盆而下。"
	},
	{
		"name": "太陽之力", "alias": "サンパワー|Solar Power",
		"tags": ["target|l|self", "weather|l|sun", "frame|self|傷害|1", "frame|self|特殊|up|2"],
		"effect": "在天氣狀態為大晴天的期間，這隻寶可夢的特殊提升 2 點，但這隻寶可夢也會在每個戰鬥輪結束時受到 1 點傷害。",
		"desc": "這隻寶可夢能夠運用來自太陽的能量使自己過載充能，使牠變得更強大，但也同時讓自己的身體遭受損傷。"
	},
	{
		"name": "堅硬岩石", "alias": "ハードロック|Solid Rock",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "魂心", "alias": "ソウルハート|Soul-Heart",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "隔音", "alias": "ぼうおん|Soundproof",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "加速", "alias": "かそく|Speed Boost",
		"tags": ["target|l|self", "frame|self|靈巧|up|1"],
		"effect": "在每個戰鬥輪結束時，這隻寶可夢的靈巧特質提升 1 點。你最多可以透過這個方式提升 3 點。",
		"desc": "這隻寶可夢將開始不斷加速的勢頭高速機動，牠將彷彿瞬間移動一般從這個地方移動到另一個地方。"
	},
	{
		"name": "監視", "alias": "はりこみ|Stakeout",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "慢出", "alias": "あとだし|Stall",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "堅毅", "alias": "すじがねいり|Stalwart",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "持久力", "alias": "じきゅうりょく|Stamina",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "戰鬥切換", "alias": "バトルスイッチ|Stance Change",
		"tags": ["target|l|self", "text|l|型態變化"],
		"effect": "只有堅盾劍怪能夠使用這個特性。在每個戰鬥輪開始時，從「劍型態」和「盾型態」中選擇一個型態。當處於「劍型態」時，牠只能使用攻擊招式；當處於「盾型態」時，牠只能使用變化類招式。根據階級和特質上限調整牠各個形態的特質。",
		"desc": "這隻寶可夢能夠改變型態，變成一面堅毅的盾牌或一把強力的寶劍，牠的特質屬性會隨著型態切換而改變。"
	},
	{
		"name": "靜電", "alias": "せいでんき|Static",
		"tags": ["target|l|foe", "nftext|l|當被物理攻擊命中時", "frame|paralysis||number|d3"],
		"effect": "當這隻寶可夢被非遠程攻擊的物理攻擊給命中時，骰 3 顆機率骰以使對方陷入「麻痺」狀態。",
		"desc": "這隻寶可夢的身體總是準備好在哪怕是最輕微的觸碰下釋放出一道靜電。"
	},
	{
		"name": "不屈之心", "alias": "ふくつのこころ|Steadfast",
		"tags": ["target|l|self", "frame|flinch||always", "frame|self|靈巧|up|1"],
		"effect": "當這隻寶可夢第一次陷入「畏縮」狀態時，牠的靈巧提升 1 點。",
		"desc": "當逆境來襲，這隻寶可夢將會變得更加可靠。"
	},
	{
		"name": "蒸汽機", "alias": "じょうききかん|Steam Engine",
		"tags": ["target|l|self", "nftext|l|當被", "text|l|火系招式|Fire", "text|l|水系招式|Water", "nftext|l|命中時", "frame|self|靈巧|up|3"],
		"effect": "當這隻寶可夢第一次被火或水屬性招式命中時，牠的靈巧提升 3 點。",
		"desc": "這隻寶可夢就如同一座蒸汽爐，只要一點點的火或水，牠就能以極快的速度移動任何東西。煤炭是牠最愛的食物。"
	},
	{
		"name": "鋼能力者", "alias": "はがねつかい|Steelworker",
		"tags": ["target|l|self", "text|l|鋼系招式|Steel", "frame|self|傷害|plus|d1"],
		"effect": "這隻寶可夢使用的鋼屬性招式的傷害骰池將額外增加 1 顆骰子。",
		"desc": "這隻寶可夢能夠融塑並吃食鋼鐵，賦予牠觸碰的任何金屬新的外型和更鋒利的邊緣。"
	},
	{
		"name": "鋼之意志", "alias": "はがねのせいしん|Steely Spirit",
		"tags": ["target|l|allally", "text|l|鋼系招式|Steel", "frame|self|傷害|plus|d1"],
		"effect": "這隻寶可夢和牠隊友使用的鋼屬性招式的傷害骰池都將額外增加 1 顆骰子。",
		"desc": "這隻寶可夢在大部分時候都有著執著倔強的表現。如果牠下定了決心去做某事，那牠就會去做，這個姿態將能激勵鼓舞他人。"
	},
	{
		"name": "惡臭", "alias": "あくしゅう|Stench",
		"tags": ["target|l|foe", "nftext|l|當被物理攻擊命中時", "frame|flinch||number|d1"],
		"effect": "當這隻寶可夢被非遠程攻擊的物理攻擊給命中時，骰 1 顆機率骰以使敵人陷入「畏縮」狀態。降低遭遇野生寶可夢的機率。",
		"desc": "這隻寶可夢能夠發出一股足以趕走其他人或寶可夢的可怕惡臭。"
	},
	{
		"name": "黏著", "alias": "ねんちゃく|Sticky Hold",
		"tags": ["target|l|self", "nftext|l|持有物品不會被偷走/交換"],
		"effect": "這隻寶可夢持有的物品不會被招式或特性的效果給移除、偷走、或交換。",
		"desc": "這隻寶可夢的身體總是分泌著黏性物質，如果有什麼東西被黏住，那要把它拔出來可會相當困難。"
	},
	{
		"name": "引水", "alias": "よびみず|Storm Drain",
		"tags": ["target|l|self", "nftext|l|吸引並免疫", "text|l|水系招式|Water", "frame|self|傷害|plus|d1"],
		"effect": "如果有任何人使用了單一目標的水屬性招式，則該招式的目標將會引導變更為這隻寶可夢；這隻寶可夢免疫任何水屬性招式的傷害。當這隻寶可夢第一次被水屬性招式命中，這隻寶可夢的特殊特質提升 1 點。",
		"desc": "這隻寶可夢能像海綿一樣吸收水分和液體，接著利用它們來增強自己的力量，並讓自己能在沒有水的環境下待上更長的時間。"
	},
	{
		"name": "強壯之顎", "alias": "がんじょうあご|Strong Jaw",
		"tags": ["target|l|self", "frame|self|傷害|plus|d1"],
		"effect": "如果這隻寶可夢使用了名字帶有「牙」或「咬」關鍵字的招式，則該招式的傷害骰池將額外增加 1 顆骰子。",
		"desc": "這隻寶可夢強壯的下顎賦予牠無與倫比的咬合力。牠的牙齒能夠撕開幾乎所有一切。"
	},
	{
		"name": "結實", "alias": "がんじょう|Sturdy",
		"tags": ["target|l|self"],
		"effect": "當這隻寶可夢第一次因為傷害類招式而將要陷入瀕死狀態時，改為將牠維持在 1 點HP的狀態。異常狀態和自己造成的傷害仍然會導致牠陷入瀕死狀態。這隻寶可夢必須休息至少一個小時才能夠再次使用這個特性的效果。",
		"desc": "這隻寶可夢的身體在面對傷害時能表現出極端強韌的性質，牠可以忍受幾乎所有一切。"
	},
	{
		"name": "吸盤", "alias": "きゅうばん|Suction Cups",
		"tags": ["target|l|self", "nftext|l|免疫", "effect|l|swither"],
		"effect": "這隻寶可夢免疫於強制替換寶可夢下場的效果。",
		"desc": "這隻寶可夢的肢體有著能幫助牠根植在原地的吸盤。牠可以吸附在任何表面上，甚至倒掛在天花板上。"
	},
	{
		"name": "超幸運", "alias": "きょううん|Super Luck",
		"tags": ["target|l|self", "effect|l|crit"],
		"effect": "這隻寶可夢使用的攻擊招式獲得「高要害率」效果。如果該招式已經擁有「高要害率」效果，則這隻寶可夢只需要比需求成功骰數還要多 1 顆成功骰的擲骰結果（而非原本的 2 顆）就能夠擊中要害。",
		"desc": "這隻寶可夢有著不可思議的好運，經常會有好事發生。"
	},
	{
		"name": "衝浪之尾", "alias": "サーフテール|Surge Surfer",
		"tags": ["target|l|self", "text|l|電氣場地|Electric", "frame|self|靈巧|up|2"],
		"effect": "如果〈電氣場地〉正在發揮效果，則這隻寶可夢的靈巧特質提升 2 點。",
		"desc": "這隻寶可夢的磁場使牠能夠乘著電流衝浪，就彷彿牠飄浮著一樣。"
	},
	{
		"name": "蟲之預感", "alias": "むしのしらせ|Swarm",
		"tags": ["target|l|self", "nftext|l|HP降到一半或以下時", "text|l|蟲系招式|Bug", "frame|self|傷害|plus|d1"],
		"effect": "當這隻寶可夢的HP剩一半或以下，牠蟲屬性招式的傷害骰池並不會因為疼痛懲罰而被扣除成功骰，且牠蟲屬性招式的傷害骰池會額外增加 1 顆骰子。",
		"desc": "這隻寶可夢將在命懸一線時進入蟲巢意志狀態，變得更兇猛且侵略性。"
	},
	{
		"name": "甜幕", "alias": "スイートベール|Sweet Veil",
		"tags": ["target|l|allally", "frame|sleep||never"],
		"effect": "這隻寶可夢和牠的隊友免疫於「睡眠」狀態。提升遭遇野生寶可夢的機率。",
		"desc": "這隻寶可夢甜美的香氣將喚醒所有附近寶可夢的食慾。"
	},
	{
		"name": "悠遊自如", "alias": "すいすい|Swift Swim",
		"tags": ["target|l|self", "weather|l|rain", "frame|self|靈巧|up|2"],
		"effect": "如果當前天氣狀態為下雨，則這隻寶可夢的靈巧特質提升 2 點。",
		"desc": "這隻寶可夢在水中能夠移動的比在陸地上還要快，即使是在道路中的水坑都能讓牠發揮全速。"
	},
	{
		"name": "共生", "alias": "きょうせい|Symbiosis",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "同步", "alias": "シンクロ|Synchronize",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "蹣跚", "alias": "ちどりあし|Tangled Feet",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "捲髮", "alias": "カーリーヘアー|Tangling Hair",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "技術高手", "alias": "テクニシャン|Technician",
		"tags": ["target|l|self", "nftext|l|使用威力1或2的招式時", "frame|self|傷害|plus|d1"],
		"effect": "所有威力為 2 或以下的招式的傷害骰池都將額外增加 1 顆骰子。",
		"desc": "在執行那些其他人會散漫粗略處理的任務時，這隻寶可夢會展現出精確而一絲不苟的態度。"
	},
	{
		"name": "心靈感應", "alias": "テレパシー|Telepathy",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "兆級電壓", "alias": "テラボルテージ|Teravolt",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "厚脂肪", "alias": "あついしぼう|Thick Fat",
		"tags": ["target|l|self", "text|l|火系招式|Fire", "text|l|冰系招式|Ice", "frame|self|受傷|minus|1"],
		"effect": "火屬性和冰屬性招式對這隻寶可夢造成的傷害減少 1 點。",
		"desc": "這隻寶可夢的體表包覆著一層厚重的脂肪層，能夠保護牠對抗嚴酷的溫度。"
	},
	{
		"name": "有色眼鏡", "alias": "いろめがね|Tinted Lens",
		"tags": ["target|l|self", "text|l|忽略抗性"],
		"effect": "如果敵人對這隻寶可夢使用的招式擁有抗性，則改為讓該攻擊如常造成傷害。如果敵人對這隻寶可夢使用的招式擁有雙重抗性，則改為視同對方只擁有一個抗性。",
		"desc": "這隻寶可夢護目鏡般的雙眼能夠在每個惡劣情境中找到好的那一面，就算完全沒有也一樣。"
	},
	{
		"name": "激流", "alias": "げきりゅう|Torrent",
		"tags": ["target|l|self", "nftext|l|HP降到一半或以下時", "text|l|水系招式|Water", "frame|self|傷害|plus|d1"],
		"effect": "當這隻寶可夢的HP剩一半或以下，牠水屬性招式的傷害骰池並不會因為疼痛懲罰而被扣除成功骰，且牠水屬性招式的傷害骰池會額外增加 1 顆骰子。",
		"desc": "這隻寶可夢能增強水壓來射出水柱。當這股壓力失去控制時，它將會透過無法控制的激流被釋放出來。"
	},
	{
		"name": "硬爪", "alias": "かたいツメ|Tough Claws",
		"tags": ["target|l|self", "text|l|物理招式", "frame|self|傷害|plus|d1"],
		"effect": "每當這隻寶可夢使用了非遠程攻擊的物理攻擊，該招式的傷害骰池將額外增加 1 顆骰子。",
		"desc": "這隻寶可夢的利爪是如此堅實，牠能夠把幾乎所有一切都撕成兩半。"
	},
	{
		"name": "中毒激升", "alias": "どくぼうそう|Toxic Boost",
		"tags": ["target|l|self", "frame|poison||always", "frame|poison2||always", "frame|self|力量|up|2"],
		"effect": "如果這隻寶可夢陷入「中毒」或「劇毒」狀態，則牠的力量特質提升 2 點。",
		"desc": "每當這隻寶可夢受到毒素折磨時，牠的血液將會沸騰並使他進入兇猛無比的狂暴狀態中。"
	},
	{
		"name": "複製", "alias": "トレース|Trace",
		"tags": ["target|l|self", "text|l|複製特性", "target|l|rfoe"],
		"effect": "這隻寶可夢會在出場時複製一個隨機敵人的特性。這個效果會在這隻寶可夢脫離戰鬥時終止。下列特性無法被複製：花之禮、幻覺、變身者、戰鬥切換、神奇守護、以及其他與形態變化有關的特性。",
		"desc": "這隻寶可夢模仿著他人的特殊性質，使牠們看起來就像是同類一樣。"
	},
	{
		"name": "先行治療", "alias": "ヒーリングシフト|Triage",
		"tags": ["target|l|self", "effect|l|heal", "frame|heal|治療狀態|always", "frame|priority||up|1"],
		"effect": "這隻寶可夢所有能夠回復HP或治療異常狀態的變化類招式的先制+1。",
		"desc": "這隻寶可夢感受到治療傷者的急迫性；牠同時能極快地完成縫紉和包紮這類經常用於快速處理傷勢的技能。"
	},
	{
		"name": "懶惰", "alias": "なまけ|Truant",
		"tags": ["target|l|self"],
		"effect": "每過兩個回合，骰這隻寶可夢的忠誠度進行擲骰判定，並取得至少 2 顆成功骰。若判定失敗，則這隻寶可夢將會拒絕行動。若判定成功，則牠將如常行動。",
		"desc": "這隻寶可夢極度懶惰，牠連最微小的努力都不會去嘗試，且即使在最激烈的戰鬥中也會偷懶。"
	},
	{
		"name": "渦輪火焰", "alias": "ターボブレイズ|Turboblaze",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "純樸", "alias": "てんねん|Unaware",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "輕裝", "alias": "かるわざ|Unburden",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "緊張感", "alias": "きんちょうかん|Unnerve",
		"tags": ["target|l|foe", "nftext|l|無法食用樹果"],
		"effect": "當這隻寶可夢在場上時，對手將無法吃掉牠持有的樹果。",
		"desc": "也許是因為牠迫力十足的瞪視、又或許是因為牠凶狠的存在，這隻寶可夢附近的其他人將變得相當緊張，甚至到失去食慾的程度。"
	},
	{
		"name": "無形拳", "alias": "ふかしのこぶし|Unseen Fist",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "勝利之星", "alias": "しょうりのほし|Victory Star",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "幹勁", "alias": "やるき|Vital Spirit",
		"tags": ["target|l|self", "frame|sleep||never"],
		"effect": "這隻寶可夢免疫於「睡眠」狀態。",
		"desc": "這隻寶可夢異常的活躍且充滿元氣。牠必須經常活動並鍛鍊，否則牠將做出破壞性的行動。牠從來不睡覺。"
	},
	{
		"name": "蓄電", "alias": "ちくでん|Volt Absorb",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "遊魂", "alias": "さまようたましい|Wandering Spirit",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "儲水", "alias": "ちょすい|Water Absorb",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "水泡", "alias": "すいほう|Water Bubble",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "遇水凝固", "alias": "みずがため|Water Compaction",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "水幕", "alias": "みずのベール|Water Veil",
		"tags": ["target|l|self", "frame|burn1||never", "frame|burn2||never", "frame|burn3||never"],
		"effect": "這隻寶可夢免疫於所有「灼傷」狀態。",
		"desc": "這隻寶可夢總是潮濕且會製造水分以讓牠保持濕潤。多虧於此，這隻寶可夢能夠長時期離開水體生活。"
	},
	{
		"name": "碎裂鎧甲", "alias": "くだけるよろい|Weak Armor",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "白色煙霧", "alias": "しろいけむり|White Smoke",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "躍躍欲逃", "alias": "にげごし|Wimp Out",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "神奇守護", "alias": "ふしぎなまもり|Wonder Guard",
		"tags": ["target|l|self", "nftext|l|免疫所有除了效果絕佳傷害以外的傷害源"],
		"effect": "這隻寶可夢只會受到來自異常狀態、以及能對牠造成效果絕佳傷害的招式的傷害。這隻寶可夢免疫於其他來源的傷害，像是天氣狀態和入場危害。",
		"desc": "這隻寶可夢的身體被一種神奇的超自然氣場給保護。大部分的東西都會穿過牠，就彷彿那裏什麼東西都沒有一樣。"
	},
	{
		"name": "奇跡皮膚", "alias": "ミラクルスキン|Wonder Skin",
		"tags": ["target|l|foe", "mdice|l|2"],
		"effect": "其他人對這隻寶可夢的所有效果都將減少 2 顆機率骰。（例如：招式〈火花〉會骰 1 顆機率骰以使敵人陷入「灼傷」狀態，在對這隻寶可夢使用時將會變成 0 顆機率骰。）",
		"desc": "這隻寶可夢的皮膚披覆著一層薄薄的保護膜，能夠幫助牠減輕危害的威脅。"
	},
	{
		"name": "達摩模式", "alias": "ダルマモード|Zen Mode",
		"tags": ["target|l|self", "text|l|型態變化"],
		"effect": "只有達摩狒狒能夠使用這個特性。當牠的HP剩一半或以下，牠將會在該戰鬥輪結束時變化成「達摩形態」，在這之後，使用牠達摩形態的數據，並根據階級和特質上限調整牠各個形態的特質。",
		"desc": "在極端壓力下，這隻寶可夢將會透過冥想解放牠隱藏的超能力。牠會在隔天變回原本的模樣。"
	}
]);
console.log(AbilityList.filter(a=>!(a.tags[0].indexOf("unknown"))).length, "remain..");