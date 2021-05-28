var Pokedex;
if(!Pokedex) Pokedex = [];

Array.prototype.push.apply(Pokedex, [
  {
    "id": "887",
    "region": "galar",
    "name": "多龍巴魯托",
    "alias": "Dragapult",
    "type": [ "Dragon", "Ghost" ],
    "info": {
      "image": "images/pokedex/887.png",
      "height": "3",
      "weight": "50",
      "category": "隱形寶可夢",
      "text": "When it isn’t battling, it keeps Dreepy in the holes on its horns. Once a fight starts, it launches the Dreepy like supersonic missiles. The smaller Pokémon appear happy to be shot and will reload themselves."
    },
    "evolution": {
      "stage": "final"
    },
    "baseHP": 6,
    "rank": 4,
    "attr": {
      "str": { "value": 3, "max": 7 },
      "dex": { "value": 3, "max": 7 },
      "vit": { "value": 2, "max": 5 },
      "spe": { "value": 3, "max": 6 },
      "ins": { "value": 2, "max": 5 }
    },
    "ability": [ "恆淨之軀", "穿透" ],
    "moves": [
      { "rank": 0, "type": "Ghost", "name": "驚嚇" },
      { "rank": 0, "type": "Bug", "name": "死纏爛打" },
      { "rank": 1, "type": "Normal", "name": "電光一閃" },
      { "rank": 1, "type": "Dark", "name": "咬住" },
      { "rank": 2, "type": "Normal", "name": "鎖定" },
      { "rank": 2, "type": "Normal", "name": "二連擊" },
      { "rank": 2, "type": "Bug", "name": "急速折返" },
      { "rank": 2, "type": "Dark", "name": "惡意追擊" },
      { "rank": 2, "type": "Dragon", "name": "龍息" },
      { "rank": 2, "type": "Dragon", "name": "龍之舞" },
      { "rank": 2, "type": "Dragon", "name": "龍箭" },
      { "rank": 2, "type": "Ghost", "name": "禍不單行" },
      { "rank": 2, "type": "Psychic", "name": "高速移動" },
      { "rank": 3, "type": "Normal", "name": "捨身衝撞" },
      { "rank": 3, "type": "Normal", "name": "猛撞" },
      { "rank": 3, "type": "Normal", "name": "珍藏" },
      { "rank": 3, "type": "Dark", "name": "突襲" },
      { "rank": 3, "type": "Dragon", "name": "龍之俯衝" },
      { "rank": 3, "type": "Ghost", "name": "潛靈奇襲" },
      { "rank": 4, "type": "Dragon", "name": "流星群" },
      { "rank": 4, "type": "Psychic", "name": "光牆" },
      { "rank": 4, "type": "Psychic", "name": "反射壁" },
    ]
  },
]);
console.log(Pokedex);