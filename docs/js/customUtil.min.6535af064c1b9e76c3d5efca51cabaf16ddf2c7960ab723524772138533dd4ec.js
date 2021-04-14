class Util{static getAllType(){return["Normal","Bug","Dark","Dragon","Electric","Fairy","Fight","Fire","Flying","Ghost","Grass","Ground","Ice","Poison","Psychic","Rock","Steel","Water"];}
static getAllStatusCondition(){return["burn1","burn2","burn3","paralysis","frozen","poison","poison2","sleep","confuse","disabled","flinch","love"];}
static getAllTargetType(){return["self","ally","allally","foe","rfoe","allfoe","field","area","hybrid"];}
static getAllAttribute(){return["力量","靈巧","活力","洞察","特殊","強壯","帥氣","美麗","聰明","可愛","意志"];}
static getAllMoveSkills(){return["鬥毆","導引","警覺","運動","自然","隱匿","誘惑","共感","禮儀","威嚇","表演"];}
static getAllMoveCategory(){return["physical","special","support"];}}
var i18n;function FMT(langkey,group){if(!langkey)return "";var val=i18n[langkey.toLowerCase()];return val?val:langkey;}