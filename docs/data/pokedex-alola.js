var Pokedex;
if(!Pokedex) Pokedex = [];

Array.prototype.push.apply(Pokedex, [
  {
    "id": "778",
    "region": "alola",
    "name": "謎擬Q",
    "alias": "Mimikyu",
    "type": [ "Ghost", "Fairy" ],
    "info": {
      "image": "images/pokedex/778.png",
      "height": "0.2",
      "weight": "0.7",
      "category": "畫皮寶可夢",
      "text": "No one really knows what its true form looks like, the only scholar that dared to look under the veil died on the spot from the horror. It disguises itself as a Pikachu in an effort to make friends."
    },
    "evolution": {
      "stage": "final"
    },
    "baseHP": 4,
    "rank": 2,
    "attr": {
      "str": { "value": 2, "max": 5 },
      "dex": { "value": 3, "max": 6 },
      "vit": { "value": 2, "max": 5 },
      "spe": { "value": 2, "max": 4 },
      "ins": { "value": 3, "max": 6 }
    },
    "ability": [ "畫皮" ],
    "moves": [
      { "rank": 0, "type": "Normal", "name": "抓" },
      { "rank": 0, "type": "Normal", "name": "躍起" },
      { "rank": 0, "type": "Ghost", "name": "驚嚇" },
      { "rank": 1, "type": "Normal", "name": "仿效" },
      { "rank": 1, "type": "Normal", "name": "影子分身" },
      { "rank": 1, "type": "Fairy", "name": "圓瞳" },
      { "rank": 2, "type": "Normal", "name": "模仿" },
      { "rank": 2, "type": "Normal", "name": "劈開" },
      { "rank": 2, "type": "Dark", "name": "出奇一擊" },
      { "rank": 2, "type": "Dark", "name": "磨爪" },
      { "rank": 2, "type": "Fairy", "name": "撒嬌" },
      { "rank": 2, "type": "Fairy", "name": "嬉鬧" },
      { "rank": 2, "type": "Ghost", "name": "暗影爪" },
      { "rank": 2, "type": "Ghost", "name": "影子偷襲" },
      { "rank": 3, "type": "Normal", "name": "分擔痛楚" },
      { "rank": 3, "type": "Grass", "name": "木槌" },
      { "rank": 4, "type": "Ghost", "name": "同命" },
      { "rank": 4, "type": "Ghost", "name": "詛咒" },
      { "rank": 4, "type": "Ghost", "name": "怨念" },
    ]
  },
]);
//console.log(Pokedex);