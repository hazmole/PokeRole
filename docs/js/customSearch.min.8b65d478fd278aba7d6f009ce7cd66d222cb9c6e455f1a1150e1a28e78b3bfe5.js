class SearchParser{static parsePage(){var panel=document.getElementById("SearchPanel");if(!panel)return false;this.renderSearchPanel(panel,SearchType);return true;}
static renderSearchPanel(panelObj,searchType){var html="";switch(searchType){case "Move":default:html=getMovePanelTemplate(panelObj);break;}
panelObj.innerHTML=`<form id="searchForm" onkeydown="return event.key != 'Enter';">${html}</form>`;function getMovePanelTemplate(panelObj){return `
      <div>招式名稱 ${getInput_Name()}</div>
      <div>招式類型 ${getInput_MoveCategory()}</div>
      <div>招式屬性 <select name="type" onchange="SearchParser.search()">${ getOptionsHtml(getTypeOptions())}</select></div>
      <div>命中判定 <select name="accuracy1" onchange="SearchParser.search()">${ getOptionsHtml(getTypeOptions())}</select></div>
      <div>目標 (OR)<div class="flexContainer">${getIconOptionsHtml(getTargetIconOptions())}</div></div>
      <div>效果標誌 (AND)<div class="flexContainer">${getIconOptionsHtml(getEffectIconOptions())}</div></div>`;}
function getInput_Name(){return `<input type="text" name="name" onkeyup="SearchParser.search()">`;}
function getInput_MoveCategory(){return `<select name="category" onchange="SearchParser.search()">${ getOptionsHtml(getMoveCategoryOptions())}</select>`;}
function getIconOptionsHtml(iconList){var iconHtml=iconList.map(icon=>IconParser.getClickableIconHTML(icon.split("|"),false,"toggleSearchLabel(this)"));return `<div class="searchBarForIcons">${iconHtml.join("")}</div>`;}
function getOptionsHtml(itemList){return itemList.map(item=>{var value=item.value;var defaultSelected=item.value=="any"?"selected":"";var defaultClass=item.class?item.class:""
return `<option value="${value}" ${defaultSelected} class="${defaultClass}">${item.text}</option>`;}).join("");}
function getTargetIconOptions(){var arr=["self","ally","allally","foe","rfoe","allfoe","field","area"];return arr.map(key=>`target|l|${key}`);}
function getEffectIconOptions(){var effect_arr=["block","charge","crit","fist","lethal","recharge","neverfail","rampage","recoil","shield","sound","switcher","sact_2","sact_5"];var frame_arr=["target|任意|up|n","target|任意|down|n","self|任意|up|n","self|任意|down|n","priority|優先度|up|n","priority|優先度|down|n","accuracy|命中|down|n"];var status_arr=["paralysis|麻痺|","burn1|灼傷1","burn2|灼傷2"];var arr=[];Array.prototype.push.apply(arr,frame_arr.map(key=>`frame|${key}`));Array.prototype.push.apply(arr,status_arr.map(key=>`frame|${key}`));Array.prototype.push.apply(arr,effect_arr.map(key=>`effect|l|${key}`));return arr;}
function getTypeOptions(){var arr=["any","None","Normal","Bug","Dark","Dragon","Electric","Fairy","Fight","Fire","Flying","Ghost","Grass","Ground","Ice","Poison","Psychic","Rock","Steel","Water"];return arr.map(key=>{return{value:key,text:FMT(key),class:key};});}
function getMoveCategoryOptions(){return[{value:"any",text:"任意"},{value:"physical",text:"物理招式"},{value:"special",text:"特殊招式"},{value:"support",text:"變化招式"}];}}
static search(){var list=null,parser=null,listObj=null;var form=document.forms["searchForm"]?.elements;switch(SearchType){case "Move":list=MoveList;parser=MoveParser;listObj=document.getElementById("MoveList");break;}
var paramKeys=Object.keys(list[0]).filter(key=>form[key]!=undefined);if(SearchType=="Move")paramKeys.push("tags");var isEmptySearch=isSearchConditionEmpty(form,paramKeys);if(isEmptySearch){listObj.innerHTML="<p>請輸入搜尋條件</p>";TocInjector.clear();return;}
var htmlArr=list.filter(item=>{var isItemMatch=true;paramKeys.forEach(key=>{var formVal=(key==="tags")?getFormTagValue():form[key].value;isItemMatch&=isValueMatch(key,formVal,item[key]);});return isItemMatch;}).map(item=>parser.getHTML(item));if(htmlArr.length>0){listObj.innerHTML=htmlArr.join("");}
else{listObj.innerHTML=`<p>${FMT("can-not-found")}</p>`;}
TocInjector.clear();TocInjector.parsePage(SearchType);function isValueMatch(key,formVal,itemVal){switch(key){case "name":case "display_name":return(formVal.trim()=="")?true:(itemVal.indexOf(formVal)>=0);case "tags":return isFormTagMatch(itemVal);default:return(formVal=="any")?true:(itemVal==formVal);}}
function isSearchConditionEmpty(form,searchParams){return searchParams.map(key=>{switch(key){case "name":case "display_name":return(form[key].value.trim()=="");case "tags":return getFormTagValue().length==0;default:return(form[key].value=="any");}}).reduce((a,b)=>a&&b);}
function isFormTagMatch(itemValList){var formValList=getFormTagValue();if(formValList.length==0)return true;var targetValList=formValList.filter(string=>string.split("|")[0]=="target");var effectValList=formValList.filter(string=>string.split("|")[0]!="target");var isTargetMatch=targetValList.length==0?true:false;for(var formVal of targetValList){for(var itemVal of itemValList){if(isTagIconMatch(itemVal,formVal)){isTargetMatch=true;break;}}
if(isTargetMatch)break;}
var isEffectMatch=true;for(var formVal of effectValList){var flag=false;for(var itemVal of itemValList){if(isTagIconMatch(itemVal,formVal)){flag=true;break;}}
if(!flag){isEffectMatch=false;break;}}
return isTargetMatch&&isEffectMatch;function isTagIconMatch(a,b){var a_arr=a.split("|");var b_arr=b.split("|");if(b_arr[0]=="frame"){return a_arr[1]==b_arr[1]&&(b_arr.length<4||a_arr[3]==b_arr[3]);}
return a.indexOf(b)>=0;}}
function getFormTagValue(id){var obj=document.getElementsByClassName("searchBarForIcons");if(!obj)return[];var allTagsArr=Object.values(obj).map(arr=>Object.values(arr.children)).reduce((a,b)=>a.concat(b));return allTagsArr.filter(elem=>!elem.classList.contains("disable")).map(elem=>elem.dataset.string);}}}
function toggleSearchLabel(elem){elem.classList.toggle("disable");SearchParser.search();}
var SearchType;