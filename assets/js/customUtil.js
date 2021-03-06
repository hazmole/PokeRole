//=================
// Util
class Util {
  static getAllType(){
    return ["Normal", "Bug", "Dark", "Dragon", "Electric", "Fairy", "Fight", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Poison", "Psychic", "Rock", "Steel", "Water"];
  }
  static getAllStatusCondition(){
    return ["burn1", "burn2", "burn3", "paralysis", "frozen", "poison", "poison2", "sleep", "confuse", "disabled", "flinch", "love"];
  }
  static getAllTargetType(){
    return ["self", "ally", "allally", "foe", "rfoe", "allfoe", "field", "area", "hybrid"];
  }
  static getAllAttribute(){
    return ["力量","靈巧","活力","洞察","特殊","強壯","帥氣","美麗","聰明","可愛","意志"];
  }
  static getAllMoveSkills(){
    return ["鬥毆","導引","閃避","警覺","運動","自然","隱匿","誘惑","共感","禮儀","威嚇","表演"];//,"工藝","傳聞","醫藥","科學"];
  }
  static getAllPokemonSkills(){
    return ["鬥毆","導引","閃避","對抗", "警覺","運動","自然","隱匿", "誘惑","禮儀","威嚇","表演"];//,"工藝","傳聞","醫藥","科學"];
  }
  static getAllMoveCategory(){
    return ["physical", "special", "support"];
  }
  static getAllRegion(){
    return ["kanto", "johto", "hoenn", "sinnoh", "unova"];
  }
  static getAllRank(){
    return ["starter", "beginner", "amateur", "ace", "pro", "master", "champion"];
  }
  static getAllNatures(){
    return [
      { name: "固執", confident: 8 },
      { name: "害羞", confident: 6 },
      { name: "大膽", confident: 9 },
      { name: "勇敢", confident: 9 },
      { name: "溫和", confident: 8 },
      { name: "慎重", confident: 5 },
      { name: "坦率", confident: 7 },
      { name: "溫順", confident: 10 },
      { name: "勤奮", confident: 9 },
      { name: "急躁", confident: 7 },
      { name: "淘氣", confident: 7 },
      { name: "爽朗", confident: 10 },
      { name: "樂天", confident: 8 },
      { name: "孤僻", confident: 5 },
      { name: "慢吞吞", confident: 8 },
      { name: "內斂", confident: 10 },
      { name: "天真", confident: 7 },
      { name: "頑皮", confident: 6 },
      { name: "冷靜", confident: 5 },
      { name: "古怪", confident: 9 },
      { name: "馬虎", confident: 6 },
      { name: "悠閒", confident: 8 },
      { name: "自大", confident: 7 },
      { name: "認真", confident: 4 },
      { name: "膽小", confident: 4 },
    ];
  }
  static getSocialAttribute(){
    return ["tough", "cool", "beauty", "smart", "cute"];
  }
}

//=================
// Language Parser
var i18n;
function FMT(langkey, group){
    if(!langkey) return "";
    var val = i18n[langkey.toLowerCase()];
    return val? val: langkey;
}