var MoveList;
if(!MoveList) MoveList = [];

Array.prototype.push.apply(MoveList, [
	{
		"name": "極巨蟲蠱", "alias": "ダイワーム|Max Flutterby",
		"power": "+2",
		"category": "hybrid",
		"type": "Bug",
		"tags": ["target|l|foe", "frame|target|特殊|down|1"],
		"gmax-tags": ["target|l|allfoe", "frame|sleep||number|d3", "frame|paralysis||number|d3", "frame|poison||number|d3", "pdice|l|2", "text|l|蟲系招式|Bug"],
		"accuracy": "原招式命中 + 2",
		"damage": "力量/特殊 + 原招式傷害 + 2",
		"effect": "降低目標的特殊。",
		"desc": "They say that the flutter of a butterfly can cause a hurricane in another part of the world. With this Max Move it can cause it right where it stands."
	},
	
]);