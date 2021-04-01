var Pokedex;
if(!Pokedex) Pokedex = [];

Array.prototype.push.apply(Pokedex, [
  {
    "id": 1
    "region": "kanto"
    "display_name": "妙蛙種子", "name": "Bulbasaur",
    "type": ["Grass", "Poison"],
    "info": {
    	"height": "0.7/2'04",
    	"weight": "7/15",
    	"category": "Seed Pokémon",
    	"text": "It carries a seed on its back since birth. As it grows older the seed also grows larger. It is known to be a well-behaved and loyal Pokémon, but pretty rare to find in the wild."
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
    "ability": ["Overgrow"],
    "moves": [
    	{ "rank": 0, "type": "Normal", "name": "Tackle" },
    	{ "rank": 0, "type": "Normal", "name": "Growl" },
    	{ "rank": 1, "type": "Grass", "name": "Leech Seed" },
    	{ "rank": 1, "type": "Grass", "name": "Vine Whip" },
    	{ "rank": 2, "type": "Grass", "name": "Sleep Powder" },
    	{ "rank": 2, "type": "Grass", "name": "Razor Leaf" },
    	{ "rank": 2, "type": "Normal", "name": "Take Down" },
    	{ "rank": 2, "type": "Normal", "name": "Sweet Scent" },
    	{ "rank": 2, "type": "Normal", "name": "Growth" },
    	{ "rank": 2, "type": "Poison", "name": "Poison Powder" },
    	{ "rank": 3, "type": "Grass", "name": "Worry Seed" },
    	{ "rank": 3, "type": "Grass", "name": "Synthesis" },
    	{ "rank": 3, "type": "Normal", "name": "Double-Edge" },
    	{ "rank": 4, "type": "Grass", "name": "Solar Beam" },
    	{ "rank": 4, "type": "Grass", "name": "Grassy Terrain" },
    	{ "rank": 4, "type": "Grass", "name": "Grass Pledge" },
    	{ "rank": 4, "type": "Psychic", "name": "Amnesia" }
    ],
    "isNovice": true,
  },
]);