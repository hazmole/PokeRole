//=================
// Global settings
var SearchType;

//=================
// Search Panel Builder
class SearchParser{
  static parsePage(){
    var panel = document.getElementById("SearchPanel");
    if(!panel) return false;

    this.renderSearchPanel(panel, SearchType);
    return true;
  }

  static renderSearchPanel(panelObj, searchType){
    var html = "";
    switch(searchType){
      case "Move": html = getMovePanelTemplate(panelObj); break;
    }
    panelObj.innerHTML = `<form id="searchForm" onkeydown="return event.key != 'Enter';">${html}</form>`;


    //=============
    function getMovePanelTemplate(panelObj){
      return `
      <div>招式名稱 ${getInput_Name()}</div>
      <div>招式類型 ${getInput_MoveCategory()}</div>
      <div>招式屬性 ${getInput_Type()}</div>
      <div>命中判定 ${getInput_Accuracy()}</div>
      <div>目標 (OR) ${getIconBarHtml(getTargetIconOptions())}</div>
      <div>效果標誌 (AND) <div>${getInput_AllEffectIcons()}</div></div>`;
    }

    //=============
    function getInput_Name(){
      return `<input type="text" name="name" onkeyup="SearchParser.search()">`;
    }
    function getInput_Type(){
      return getSelectionHtml("type", getTypeOptions());
    }
    function getInput_MoveCategory(){
      return getSelectionHtml("category", getMoveCategoryOptions());
    }
    function getInput_Accuracy(){
      return getSelectionHtml("acc_attr", getAttrOptions())+" + "+getSelectionHtml("acc_skill", getSkillOptions());
    }
    function getInput_AllEffectIcons(){
      var statusIconList = getStatusIconList();
      var otherFrameIconList = getOtherFrameIconList();
      var effectIconList = getEffectIconList();
      return `${getIconBarHtml(otherFrameIconList)}${getIconBarHtml(statusIconList)}${getIconBarHtml(effectIconList)}`;
    }

    //=============
    function getTargetIconOptions(){
      return Util.getAllTargetType().map( key => `target|l|${key}`);
    }
    function getStatusIconList(){
      return Util.getAllStatusCondition().map( key => `frame|${key}` );
    }
    function getOtherFrameIconList(){
      var any = FMT("any");
      var frame_arr  = [`target|${any}|up|n`, `target|${any}|down|n`, `self|${any}|up|n`, `self|${any}|down|n`, "priority||up|n", "priority||down|n", "accuracy||down|n", "heal||heal|n", "heal||c_heal|n"];
      return frame_arr.map( key => `frame|${key}` );
    }
    function getEffectIconList(){
      var effect_arr = ["block", "charge", "crit", "fist", "lethal", "recharge", "neverfail", "rampage", "recoil", "shield", "sound", "switcher", "sact_2", "sact_5", "heal", "c_heal"];
      return effect_arr.map( key => `effect|l|${key}` );
    }

    function getTypeOptions(){
      var arr = ["any", "None"];
      Array.prototype.push.apply(arr, Util.getAllType());
      return arr.map( key => { return { value:key, text:FMT(key), class:key }; });
    }
    function getAttrOptions(){
      var arr = ["any"];
      Array.prototype.push.apply(arr, Util.getAllAttribute());
      return arr.map( key => { return { value:key, text:FMT(key) }; });
    }
    function getSkillOptions(){
      var arr = ["any"];
      Array.prototype.push.apply(arr, Util.getAllMoveSkills());
      return arr.map( key => { return { value:key, text:FMT(key) }; });
    }
    function getMoveCategoryOptions(){
      var arr = ["any"];
      Array.prototype.push.apply(arr, Util.getAllMoveCategory());
      return arr.map( key => { return { value:key, text:(key=="any")? FMT(key): FMT("move_"+key) }; });
    }

    function getIconBarHtml(iconList){
      var iconHtml = iconList.map(icon => IconParser.getClickableIconHTML(icon.split("|"), false, "toggleSearchLabel(this)"));
      return `<div class="flexContainer searchBarForIcons">${iconHtml.join("")}</div>`;
    }
    function getSelectionHtml( name, options ){
      var optionList = options.map( option => getOptionHtml(option) );
      return `<select name="${name}" onchange="SearchParser.search()">${optionList.join("")}</select>`;
    }
    function getOptionHtml(item){
      var value = item.value;
      var defaultSelected = item.value=="any"? "selected": "";
      var defaultClass = item.class? item.class: ""
      return `<option value="${value}" ${defaultSelected} class="${defaultClass}">${item.text}</option>`;
    }
  }


  //================
  // Search & Render
  static search(){
    var config = {
      itemList: null,
      parser: null,
      panel: null,
      searchParameter: null
    };
    // Initial
    switch(SearchType){
      case "Move":
        config.itemList=MoveList;
        config.parser=MoveParser;
        config.panel=document.getElementById("MoveList");
        config.searchParameter = ["name", "category", "type", "acc_attr", "acc_skill", "target", "effect"];
        break;
    }
    var form = document.forms["searchForm"]?.elements;
    form["tags"] = getherEnabledIconString();

    // Check if Search Parameter is Empty
    if(isSearchParametersEmpty()){
      config.panel.innerHTML = "";
      TocInjector.clear();
      return ;
    }



    var htmlArr = config.itemList.filter(item => isItemMatchSearch(item)).map(item => config.parser.getHTML(item));
    if(htmlArr.length>0){
      config.panel.innerHTML = htmlArr.join("");
    }
    else{
      config.panel.innerHTML = `<p><b>${FMT("can-not-found")}</b></p>`;
    }
    TocInjector.clear();
    TocInjector.parsePage(SearchType);


    //==================
    function getherEnabledIconString(){
      var obj = document.getElementsByClassName("searchBarForIcons");
      if(!obj) return [];

      var allTagsArr = Object.values(obj).map(arr => Object.values(arr.children)).reduce((a,b)=>a.concat(b));
      return allTagsArr.filter(elem=>!elem.classList.contains("disable")).map(elem=>elem.dataset.string);
    }
    function isSearchParametersEmpty(){
      return config.searchParameter.map( key => isSearchParameterEmpty(key)).reduce((a,b) => a&&b);
    }
    function isSearchParameterEmpty(key){
      switch(key){
        case "name":
          return (form[key].value.trim()=="" || form[key].value.trim()=="|");
        case "target":
        case "effect":
          return (form["tags"].length==0);
        default:
          return (form[key].value=="any");
      }
    }
    function isItemMatchSearch(item){
      return config.searchParameter.map( key => isItemMatchSearchParameter(key, item)).reduce((a,b) => a&&b);
    }
    function isItemMatchSearchParameter(key, item){
      if(isSearchParameterEmpty(key)) return true;
      switch(key){
        case "name":
          return (isContainIgnoreCase(item[key], form[key].value) || (item["alias"] && isContainIgnoreCase(item["alias"], form[key].value)));
        case "target":
          return (isFormTagMatch(item.tags, key, true));
        case "effect":
          return (isFormTagMatch(item.tags, key, false));
        case "acc_attr":
          var acc = item["accuracy"].split(" + ");
          return (acc.length>1 && isContainIgnoreCase(acc[0], form[key].value));
        case "acc_skill":
          var acc = item["accuracy"].split(" + ");
          return (acc.length>1 && isContainIgnoreCase(acc[1], form[key].value));
        default:
          return (item[key] == form[key].value);
      }
    }


    function isFormTagMatch(itemTagList, key, isUnion){
      var formValList = [];
      switch(key){
        case "target": formValList = form["tags"].filter(string=>string.split("|")[0]=="target"); break;
        case "effect": formValList = form["tags"].filter(string=>string.split("|")[0]!="target"); break;
      }
      if(formValList.length==0) return true;

      var matchingArr = formValList.map( tag => isItemContainTag(tag) );
      if(isUnion) // OR
        return matchingArr.reduce((a,b)=>a||b);
      else
        return matchingArr.reduce((a,b)=>a&&b);


      //=============
      function isItemContainTag(formTag){
        return itemTagList.filter( itemTag => isTagStringMatch(formTag, itemTag) ).length>0;
      }
      function isTagStringMatch(a, b){
        var a_arr = a.split("|");
        var b_arr = b.split("|");
        if(b_arr[0] == "frame"){
          return a_arr[1]==b_arr[1] && (b_arr.length<4 || a_arr[3]==b_arr[3]);
        }
        return a.indexOf(b) >= 0;
      }
    }
    function isContainIgnoreCase(a, b){
      return a.toLowerCase().indexOf(b.toLowerCase())>=0;
    }

  }

}

function toggleSearchLabel(elem){
  elem.classList.toggle("disable");
  SearchParser.search();
}


