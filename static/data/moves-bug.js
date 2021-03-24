var MoveList;
if(!MoveList) MoveList = [];

Array.prototype.push.apply(MoveList, [
	{
		"name": "Attack Order",
		"power": "3",
		"category": "physical",
		"type": "Bug",
		"accuracy": "Tough + Nature",
		"damage": "Strength + 3",
		"effect": "High Critical. Ranged.",
		"tags": ["target|l|foe", "effect|l|crit"],
		"desc": "The user calls upon her swarm and heeds them to charge against you. No matter where you run, they will surround you. Hope you are not allergic to bees."
	},
	{
		"name": "Bug Bite",
		"power": "2",
		"category": "physical",
		"type": "Bug",
		"accuracy": "Dexterity + Brawl",
		"damage": "Strength + 2",
		"effect": "If the Target Pokémon is holding a berry, the user eats it and gains its effects.",
		"tags": ["target|l|foe"],
		"desc": "The Pokemon nibbles its foe, if it finds something tasty it will eat it in an instant. It may try to eat almost anything."
	},
]);