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
		"tags": ["target|l|self"],
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
		"tags": ["target|l|self", "frame|self|特質|down|x", "nftext|l|兩者互換", "frame|self|特質|up|x"],
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "怪藥", "alias": "きみょうなくすり|Curious Medicine",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "詛咒之軀", "alias": "のろわれボディ|Cursed Body",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "迷人之軀", "alias": "メロメロボディ|Cute Charm",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "濕氣", "alias": "しめりけ|Damp",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "舞者", "alias": "おどりこ|Dancer",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "暗黑氣場", "alias": "ダークオーラ|Dark Aura",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "不屈之盾", "alias": "ふくつのたて|Dauntless Shield",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "鮮艷之軀", "alias": "ビビッドボディ|Dazzling",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "軟弱", "alias": "よわき|Defeatist",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "不服輸", "alias": "まけんき|Defiant",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "德爾塔氣流", "alias": "デルタストリーム|Delta Stream",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "終結之地", "alias": "おわりのだいち|Desolate Land",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "畫皮", "alias": "ばけのかわ|Disguise",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "下載", "alias": "ダウンロード|Download",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "龍顎", "alias": "りゅうのあぎと|Dragon's Maw",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "早起", "alias": "はやおき|Early Bird",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "孢子", "alias": "ほうし|Effect Spore",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "電氣製造者", "alias": "エレキメイカー|Electric Surge",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "危險迴避", "alias": "ききかいひ|Emergency Exit",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "妖精氣場", "alias": "フェアリーオーラ|Fairy Aura",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "過濾", "alias": "フィルター|Filter",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "火焰之軀", "alias": "ほのおのからだ|Flame Body",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "受熱激升", "alias": "ねつぼうそう|Flare Boost",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "引火", "alias": "もらいび|Flash Fire",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "花之禮", "alias": "フラワーギフト|Flower Gift",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "花幕", "alias": "フラワーベール|Flower Veil",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "毛茸茸", "alias": "もふもふ|Fluffy",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "陰晴不定", "alias": "てんきや|Forecast",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "預知夢", "alias": "よちむ|Forewarn",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "友情防守", "alias": "フレンドガード|Friend Guard",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "察覺", "alias": "おみとおし|Frisk",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "金屬防護", "alias": "メタルプロテクト|Full Metal Body",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "毛皮大衣", "alias": "ファーコート|Fur Coat",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "疾風之翼", "alias": "はやてのつばさ|Gale Wings",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "電氣皮膚", "alias": "エレキスキン|Galvanize",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "貪吃鬼", "alias": "くいしんぼう|Gluttony",
		"tags": ["target|l|self"],
		"effect": "這隻寶可夢可以食用任何類型的食物、藥物、或草藥，而不會承受任何負面效果。這隻寶可夢可以在戰鬥中的任何時候以一個自由動作吃掉牠所持有的樹果。",
		"desc": "這隻寶可夢可以吃上一整天，牠完全不用擔心找不到食物來源，因為牠超級不挑食。"
	},
	{
		"name": "黏滑", "alias": "ぬめぬめ	Gooey",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "一猩一意", "alias": "ごりむちゅう	Gorilla Tactics",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "草之毛皮", "alias": "くさのけがわ	Grass Pelt",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "青草製造者", "alias": "グラスメイカー	Grassy Surge",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "一口飛彈", "alias": "うのミサイル	Gulp Missile",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "毅力", "alias": "こんじょう	Guts",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "收穫", "alias": "しゅうかく	Harvest",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "治癒之心", "alias": "いやしのこころ	Healer",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "耐熱", "alias": "たいねつ	Heatproof",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "重金屬", "alias": "ヘヴィメタル	Heavy Metal",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "採蜜", "alias": "みつあつめ	Honey Gather",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "大力士", "alias": "ちからもち	Huge Power",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "飽了又餓", "alias": "はらぺこスイッチ	Hunger Switch",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "活力", "alias": "はりきり	Hustle",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "不撓之劍", "alias": "ふとうのけん|Intrepid Sword",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "鐵刺", "alias": "てつのトゲ|Iron Barbs",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "鐵拳", "alias": "てつのこぶし|Iron Fist",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "正義之心", "alias": "せいぎのこころ|Justified",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "銳利目光", "alias": "するどいめ|Keen Eye",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "笨拙", "alias": "ぶきよう|Klutz",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "葉子防守", "alias": "リーフガード|Leaf Guard",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "飄浮", "alias": "ふゆう|Levitate",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "自由者", "alias": "リベロ|Libero",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "輕金屬", "alias": "ライトメタル|Light Metal",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "避雷針", "alias": "ひらいしん|Lightning Rod",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "柔軟", "alias": "じゅうなん|Limber",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "破格", "alias": "かたやぶり|Mold Breaker",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "一般皮膚", "alias": "ノーマルスキン|Normalize",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "遲鈍", "alias": "どんかん|Oblivious",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "防塵", "alias": "ぼうじん|Overcoat",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "茂盛", "alias": "しんりょく|Overgrow",
		"tags": ["target|l|self", "nftext|l|HP降到一半或以下時", "text|l|草系招式|Grass", "frame|self|傷害|plus|d1"],
		"effect": "當這隻寶可夢的HP剩一半或以下，牠草屬性招式的傷害骰池並不會因為疼痛懲罰而被扣除成功骰，且牠草屬性招式的傷害骰池會額外增加 1 顆骰子。",
		"desc": "當這隻寶可夢受傷時，牠的體內會長出巨大的植物來保衛自己；這個植物相當強勁但凋萎很快。"
	},
	{
		"name": "我行我素", "alias": "マイペース|Own Tempo",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "親子愛", "alias": "おやこあい|Parental Bond",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"name": "順手牽羊", "alias": "わるいてぐせ|Pickpocket",
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
		"name": "妖精皮膚", "alias": "フェアリースキン|Pixilate",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "膽怯", "alias": "びびり|Rattled",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "粗糙皮膚", "alias": "さめはだ|Rough Skin",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "逃跑", "alias": "にげあし|Run Away",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "沙之力", "alias": "すなのちから|Sand Force",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "撥沙", "alias": "すなかき|Sand Rush",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "吐沙", "alias": "すなはき|Sand Spit",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "揚沙", "alias": "すなおこし|Sand Stream",
		"tags": ["target|l|field", "weather|l|sand"],
		"effect": "當這隻寶可夢出場時，天氣狀態將會自動變為沙暴。這個效果將會在這隻寶可夢退場時結束。（若效果互相衝突，則由意志較高的寶可夢影響天氣狀態。）",
		"desc": "這隻寶可夢能夠讓牠周圍颳起可怕的沙塵暴，且只要牠想要就能不斷持續下去。"
	},
	{
		"name": "沙隱", "alias": "すながくれ|Sand Veil",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "食草", "alias": "そうしょく|Sap Sipper",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "魚群", "alias": "ぎょぐん|Schooling",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "膽量", "alias": "きもったま|Scrappy",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "除障", "alias": "バリアフリー|Screen Cleaner",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "天恩", "alias": "てんのめぐみ|Serene Grace",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "幻影防守", "alias": "ファントムガード|Shadow Shield",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "踩影", "alias": "かげふみ|Shadow Tag",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "蛻皮", "alias": "だっぴ|Shed Skin",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "強行", "alias": "ちからずく|Sheer Force",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "硬殼盔甲", "alias": "シェルアーマー|Shell Armor",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "鱗粉", "alias": "りんぷん|Shield Dust",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "界限盾殼", "alias": "リミットシールド|Shields Down",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "單純", "alias": "たんじゅん|Simple",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "連續攻擊", "alias": "スキルリンク|Skill Link",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "慢啟動", "alias": "スロースタート|Slow Start",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "撥雪", "alias": "ゆきかき|Slush Rush",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "狙擊手", "alias": "スナイパー|Sniper",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "雪隱", "alias": "ゆきがくれ|Snow Cloak",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "降雪", "alias": "ゆきふらし|Snow Warning",
		"tags": ["target|l|field", "weather|l|hail"],
		"effect": "當這隻寶可夢出場時，天氣狀態將會自動變為冰雹。這個效果將會在這隻寶可夢退場時結束。（若效果互相衝突，則由意志較高的寶可夢影響天氣狀態。）",
		"desc": "這隻寶可夢能夠憑意志換來可怕的雹暴。白雪將覆蓋整個戰場，尖銳的冰雹塊將從天空傾盆而下。"
	},
	{
		"name": "太陽之力", "alias": "サンパワー|Solar Power",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "靜電", "alias": "せいでんき|Static",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "不屈之心", "alias": "ふくつのこころ|Steadfast",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "蒸汽機", "alias": "じょうききかん|Steam Engine",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "鋼能力者", "alias": "はがねつかい|Steelworker",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "鋼之意志", "alias": "はがねのせいしん|Steely Spirit",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "惡臭", "alias": "あくしゅう|Stench",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "黏著", "alias": "ねんちゃく|Sticky Hold",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "引水", "alias": "よびみず|Storm Drain",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "強壯之顎", "alias": "がんじょうあご|Strong Jaw",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "結實", "alias": "がんじょう|Sturdy",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "吸盤", "alias": "きゅうばん|Suction Cups",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "超幸運", "alias": "きょううん|Super Luck",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "衝浪之尾", "alias": "サーフテール|Surge Surfer",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "蟲之預感", "alias": "むしのしらせ|Swarm",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "甜幕", "alias": "スイートベール|Sweet Veil",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "悠遊自如", "alias": "すいすい|Swift Swim",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "複製", "alias": "トレース|Trace",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "電晶體", "alias": "トランジスタ|Transistor",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "先行治療", "alias": "ヒーリングシフト|Triage",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "懶惰", "alias": "なまけ|Truant",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
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
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "奇跡皮膚", "alias": "ミラクルスキン|Wonder Skin",
		"tags": ["unknown|l"],
		"effect": "",
		"desc": ""
	},
	{
		"name": "達摩模式", "alias": "ダルマモード|Zen Mode",
		"tags": ["target|l|self", "text|l|型態變化"],
		"effect": "只有達摩狒狒能夠使用這個特性。當牠的HP剩一半或以下，牠將會在該戰鬥輪結束時變化成「達摩形態」，在這之後，使用牠達摩形態的數據，並根據階級和特質上限調整牠各個形態的特質。",
		"desc": "在極端壓力下，這隻寶可夢將會透過冥想解放牠隱藏的超能力。牠會在隔天變回原本的模樣。"
	}
]);