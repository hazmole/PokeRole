class IconParser{static parsePage(){var article=document.getElementById("list-main");if(!article)return false;var hasIcon=false;var raw_icon;while((raw_icon=article.innerHTML.match(/{@icon ([^\}]+)}/))!=null){var originText=raw_icon[0];var tagArr=raw_icon[1].split("|");var iconHtml=this.getIconHTML(tagArr);article.innerHTML=article.innerHTML.replace(originText,iconHtml);hasIcon=true;}
return hasIcon;}
static getClickableIconHTML(tagArr,isOn,funcName){return `<a href="javascript:void(0)" onClick="${funcName}" class="${isOn?"":"disable"}" data-string="${tagArr.join("|")}">${this.getIconHTML(tagArr)}</a>`}
static getIconHTML(tagArr){var icon_type=tagArr[0];var icon_size=this.getSizeClass(tagArr[1]);switch(icon_type){case "novice":return this.getHTML_normalIcon("NoviceMark",icon_size);case "heal":return this.getHTML_normalIcon("basicHeal",icon_size);case "c_heal":return this.getHTML_normalIcon("compHeal",icon_size);case "weather":case "ball":case "moveType":case "target":case "effect":return this.getHTML_normalIcon(icon_type+" "+tagArr[2],icon_size);case "text":return this.getHTML_text(icon_size,tagArr[2],tagArr[3]);case "dice":return this.getHTML_diceIcon(icon_size,tagArr[2]);case "rdice":return this.getHTML_rdiceIcon(icon_size,tagArr[2],tagArr[3]);case "frame":return this.getHTML_frame(tagArr.slice(1));default:return this.getHTML_normalIcon("unknown",icon_size);}}
static getHTML_normalIcon(iconClass,iconSize){var titleText=this.getTooltipsText(iconClass);var titleAttr=(!!titleText)?`title="${titleText}"`:'';return `<tag class="${iconClass} ${iconSize}" ${titleAttr}></tag>`;}
static getHTML_text(iconSize,text,colorClass){return `<tag class="text ${iconSize} ${colorClass}"><b>${text}</b></tag>`;}
static getHTML_diceIcon(iconSize,number){return `<tag class="dice ${iconSize}"><b>${number}</b></tag>`;}
static getHTML_rdiceIcon(iconSize,number,extraClass){var diceClass;switch(parseInt(number)){case 1:diceClass="one";break;case 2:diceClass="two";break;case 3:diceClass="three";break;case 4:diceClass="four";break;case 5:diceClass="five";break;case 6:diceClass="six";break;}
if(parseInt(number)>=4&&extraClass!="normal")extraClass+=" success";return `<tag class="rdice ${iconSize} ${diceClass} ${extraClass}"></tag>`;}
static getHTML_frame(parameters){var frame_type=parameters[0];var frame_title=parameters[1];var frame_content=getFrameContent(parameters.slice(2));return `<iconFrame class="${frame_type}">
              <span class="frameTitle">${frame_title}</span>
              <span class="frameContent">${frame_content}</span>
            </iconFrame>`;function getFrameContent(parameters){var content_type=parameters[0];var content_data=parameters[1]||null;var isDice=false;if(content_data&&content_data[0]=="d"){content_data=`<tag class="dice small"><b>${content_data[1]}</b></tag>`;isDice=true;}
if(content_data=="never"){content_data=`<tag class="never small"></tag>`;}
var prefix="";switch(content_type){case "up":prefix="↑";break;case "down":prefix="↓";break;case "plus":prefix="+";break;case "minus":prefix="-";break;}
if(!isDice){prefix=`<prefix>${prefix}</prefix>`;}else if(prefix!=""){prefix=`<dprefix>${prefix}</dprefix>`;}
switch(content_type){case "always":return `<span class="always"></span>`;case "never":return `<span class="never"></span>`;case "heal":return `<span class="heal">${content_data}</span>`;case "c_heal":return `<span class="heal comp">${content_data}</span>`;case "number":case "up":case "down":case "plus":case "minus":return `<span class="number">${prefix}${content_data}</span>`;default:return "";}}}
static getSizeClass(size){if(size=="s")return "small";if(size=="l")return "large";return "";}
static getTooltipsText(effect){switch(effect){case "basicHeal":return "基礎治癒";case "compHeal":return "強效治癒";case "weather sun":return "大晴天";case "weather sun2":return "大日照";case "weather rain":return "下雨";case "weather rain2":return "暴風雨";case "weather sand":return "沙暴";case "weather wind":return "亂流";case "weather hail":return "冰雹";case "target self":return "使用者";case "target ally":return "單體隊友";case "target allally":return "使用者&全體隊友";case "target foe":return "單體敵人";case "target rfoe":return "隨機敵人";case "target allfoe":return "全體敵人";case "target area":return "範圍全體";case "target field":return "戰鬥場地";case "effect block":return "阻擋";case "effect crit":return "高要害率";case "effect charge":return "蓄力";case "effect lethal":return "致命傷害";case "effect neverfail":return "必中";case "effect recoil":return "反作用力傷害";case "effect rampage":return "狂暴";case "effect recharge":return "必須重新充能";case "effect shield":return "護盾";case "effect switcher":return "替換寶可夢";case "effect fist":return "拳頭類招式";case "effect sound":return "聲音類招式";case "effect sact_2":return "雙重行動";case "effect sact_5":return "連續行動";default:return "";}}}
var MoveList;class MoveParser{static parsePage(){var MoveListPanel=document.getElementById("MoveList");if(!MoveListPanel)return false;if(!MoveList||MoveList.length<=0)return false;var self=this;var HtmlMoveList=MoveList.map(obj=>self.getHTML(obj));MoveListPanel.innerHTML=HtmlMoveList.join("");return true;}
static parseTypeIcon(){var typeObjArr;typeObjArr=document.getElementsByClassName("TypeBlockList");if(typeObjArr){Object.values(typeObjArr).forEach(obj=>{var arr=obj.innerHTML.split(",").map(t=>getTypeHTML(t.trim()));obj.innerHTML=arr.join("");});}
function getTypeHTML(type){return `<span class="TypeBlock ${type}">${FMT(type)}</span>`;}}
static getHTML(moveObj){if(moveObj.tags[0]=="unknown|l")return "";var moveEffect=moveObj.effect?`<div><b>額外效果: </b></div><div class="Additional">${moveObj.effect}</div>`:"";var moveDescription=moveObj.desc?`<div class="MoveDesc">${moveObj.desc}</div>`:"";var moveIconArr=moveObj.tags?moveObj.tags.map(tagStr=>IconParser.getIconHTML(tagStr.split("|"))):[];return `<div class="Move ${moveObj.type}">
              <div class="MoveHeader">
                <div class="title" id="${moveObj.name}">${moveObj.name}</div>
                <div class="power">${moveObj.power}</div>
                <div class="type"><tag class="moveType ${moveObj.category}"></tag></div>
              </div>
              <div class="MoveIconBar">${moveIconArr.join("")}</div>
              <div class="MoveContent">
                <div class="Type">${FMT(moveObj.type)}</div>
                <div class="Accuracy">${moveObj.accuracy}</div>
                <div class="Damage">${moveObj.damage}</div>
                ${ moveEffect }
              </div>
              ${ moveDescription }
            </div>`;}}
var AbilityList;class AbilityParser{static parsePage(){var buildPanel=document.getElementById("AbilityList");if(!buildPanel)return false;if(!AbilityList||AbilityList.length<=0)return false;var self=this;var HtmlAbiLust=AbilityList.map(obj=>self.getHTML(obj));buildPanel.innerHTML=HtmlAbiLust.join("");return true;}
static getHTML(abilityObj){if(abilityObj.tags[0]=="unknown|l")return "";var iconArr=abilityObj.tags?abilityObj.tags.map(tagStr=>IconParser.getIconHTML(tagStr.split("|"))):[];return `<div class="Ability">
              <div class="Header">
                <span class="title" id="${abilityObj.display_name}">${abilityObj.display_name}</span>
              </div>
              <div class="IconBar">${iconArr.join("")}</div>
              <div class="Content">${abilityObj.effect}</div>
              <div class="Desc">${abilityObj.desc}</div>
            </div>`;}}
var Pokedex;class PokemonParser{static parsePage(){var PokedexPanel=document.getElementById("Pokedex");if(!PokedexPanel)return false;if(!Pokedex||Pokedex.length<=0)return false;var self=this;var HtmlPokedex=Pokedex.map(obj=>self.getHTML(obj));PokedexPanel.innerHTML=HtmlPokedex.join("");return true;}
static getHTML(pokemonObj){var pokemonTypes=pokemonObj.type.map(type=>`<div class="type ${type}" style="width:${pokemonObj.type.length>1?5:10}rem;">${FMT(type)}</div>`).join("");var moveList=pokemonObj.moves.map(move=>getMoveEntryHtml(move));var evolveStage=getEvolveStage(pokemonObj.evolution)!=""?`<div class="entry"><b style="background:#b7b7b7">進化階段</b>${getEvolveStage(pokemonObj.evolution)}</div>`:"";var evolveTime=getEvolveTime(pokemonObj.evolution)!=""?`<div class="entry"><b style="background:#b7b7b7">進化時間</b>${getEvolveTime(pokemonObj.evolution)}</div>`:"";return `<div class="Pokemon">
              <div class="${pokemonObj.type[0]}">
                <div class="Header flexContainer">
                  <div class="title" id="#${pokemonObj.id} ${pokemonObj.display_name}">#${pokemonObj.id} ${pokemonObj.display_name}</div>
                  ${pokemonTypes}
                </div>
              </div>
              <div class="GameData flexContainer">
                <div class="block Image" style="text-align: center;">
                  <img src="${ROOTPATH}/${pokemonObj.info.image}">
                  <div class="category ${pokemonObj.type[0]}"><div style="background:rgba(255,255,255,.5);">${pokemonObj.info.category}</div></div>
                  <div class="category">${pokemonObj.info.height}m / ${pokemonObj.info.weight}kg</div>
                </div>
                <div class="block" style="width: 180px;">
                  <div class="entry" style="margin-bottom:.5rem;"><b>建議階級</b> ${getRank(pokemonObj.rank)}</div>
                  <div class="entry"><b>基礎HP</b> <span style="font-size:1.2em;margin:.2rem;">${pokemonObj.baseHP}</span></div>
                  <div class="entry"><b>特性</b> ${pokemonObj.ability.join(", ")}</div>
                  <div class="entry">${getNoviceIcon(pokemonObj.isNovice)}</div>
                </div>
                <div class="block" style="width: 180px; margin-left:1rem;">
                  <div class="entry"><b>力量</b> ${getAttr(pokemonObj.attr.str)}</div>
                  <div class="entry"><b>靈巧</b> ${getAttr(pokemonObj.attr.dex)}</div>
                  <div class="entry"><b>活力</b> ${getAttr(pokemonObj.attr.vit)}</div>
                  <div class="entry"><b>特殊</b> ${getAttr(pokemonObj.attr.spe)}</div>
                  <div class="entry"><b>洞察</b> ${getAttr(pokemonObj.attr.ins)}</div>
                </div>
                <div class="block" style="width: 180px; margin-left:1rem;">
                  ${ evolveStage }
                  ${ evolveTime }
                </div>
              </div>
              <div>
                <button style="width:100%;" onClick="toggleMoveList(this)">招式表</button>
                <div class="MoveList">
                  ${moveList.join("")}
                </div>
              </div>
              <div class="InfoText">
                ${pokemonObj.info.text}
              </div>
            </div>`;function getEvolveStage(evolvoObj){if(!evolvoObj||!evolvoObj.stage)return "";switch(evolvoObj.stage){case "first":return "初階";case "second":return "二階";case "final":return "最終階";case "mega":return "超級進化";}
return "-";}
function getEvolveTime(evolvoObj){if(!evolvoObj||!evolvoObj.time)return "";switch(evolvoObj.time){case "fast":return "快速";case "medium":return "中等";case "slow":return "緩慢";}
return "-";}
function getMoveEntryHtml(moveObj){return `<div class="entry">
                ${getRank(moveObj.rank,true)}
                <span class="${moveObj.type} moveType">${FMT(moveObj.type)}</span>
                ${moveObj.name}
              </div>`;}
function getRank(rank,isOnlyMark){return `<span class="icon ${getRankText(rank)}" style="display: inline-block;">${isOnlyMark?"&nbsp":getRankText(rank,true)}</span>`;}
function getRankText(rank,isText){switch(rank){case 0:return isText?'新手':'Starter';case 1:return isText?'初學者':'Beginner';case 2:return isText?'業餘者':'Amateur';case 3:return isText?'菁英':'Ace';case 4:return isText?'專家':'Pro';case 5:return isText?'大師':'Master';case 6:return isText?'冠軍':'Champion';}}
function getNoviceIcon(isShow){return(isShow)?"<tag class='NoviceMark'></tag>":"";}
function getAttr(attr){var text="";for(var i=0;i<attr.max;i++){text+=(i<attr.value)?"●":"○";}
return text;}}}
class SearchParser{static parsePage(){var panel=document.getElementById("SearchPanel");if(!panel)return false;this.renderSearchPanel(panel,SearchType);return true;}
static renderSearchPanel(panelObj,searchType){var html="";switch(searchType){case "Move":default:html=renderMoveSearchPanel(panelObj);break;}
panelObj.innerHTML=`
      <form id="searchForm" onkeydown="return event.key != 'Enter';">${html}</form>`;function renderMoveSearchPanel(panelObj){return `
      <div>招式名稱 <input type="text" name="name" onkeyup="SearchParser.search()"></div>
      <div>招式類型 <select name="category" onchange="SearchParser.search()">
        ${ getOptionsHtml(getMoveCategoryOptions())}
      </select></div>
      <div>招式屬性 <select name="type" onchange="SearchParser.search()">
        ${ getOptionsHtml(getTypeOptions())}
      </select></div>
      <div>目標 (OR)<div class="flexContainer">${getIconOptionsHtml(getTargetIconOptions())}</div></div>
      <div>效果標誌 (AND)<div class="flexContainer">${getIconOptionsHtml(getEffectIconOptions())}</div></div>`;}
function getIconOptionsHtml(itemList){return `<div class="searchBarForIcons">${itemList.map(icon=>IconParser.getClickableIconHTML(icon.split("|"),false,"toggleSearchLabel(this)")).join("")}</div>`;}
function getTargetIconOptions(){var arr=["self","ally","allally","foe","rfoe","allfoe","field","area"];return arr.map(key=>`target|l|${key}`);}
function getEffectIconOptions(){var effect_arr=["block","charge","crit","fist","lethal","recharge","neverfail","rampage","recoil","shield","sound","switcher","sact_2","sact_5"];var status_arr=["target|任意|up|n","target|任意|down|n","self|任意|up|n","self|任意|down|n","priority|優先度|up|n","priority|優先度|down|n","accuracy|命中|down|n"];return effect_arr.map(key=>`effect|l|${key}`).concat(status_arr.map(key=>`frame|${key}`));}
function getOptionsHtml(itemList){return itemList.map(item=>`<option value="${item.value}" ${item.value=="any"?"selected":""} class="${item.class?item.class:""}">${item.text}</option>`).join("");}
function getMoveCategoryOptions(){return[{value:"any",text:"任意"},{value:"physical",text:"物理招式"},{value:"special",text:"特殊招式"},{value:"support",text:"變化招式"}];}
function getTypeOptions(){var arr=[{value:"any",text:"任意"},{value:"None",text:"無"}];var typeArr=["Normal","Bug","Dark","Dragon","Electric","Fairy","Fight","Fire","Flying","Ghost","Grass","Ground","Ice","Poison","Psychic","Rock","Steel","Water"];typeArr.forEach(type=>{arr.push({value:type,text:FMT(type),class:type});})
return arr;}}
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
class TocInjector{static clear(){var toc=document.getElementById("TableOfContents");if(!toc)return false;toc.innerHTML="";}
static parsePage(className,appendRoot){var toc=document.getElementById("TableOfContents");if(!toc)return false;if(!className)return false;if(!appendRoot)appendRoot='root';var objList=Object.values(document.getElementsByClassName(className));var idList=objList.map(domObj=>getDomObjId(domObj,className));var newTocList=document.createElement("UL");idList.forEach(id=>{var textNode=document.createTextNode(id);var urlNode=document.createElement("A");urlNode.setAttribute("href","#"+id);urlNode.appendChild(textNode);var listNode=document.createElement("LI");listNode.appendChild(urlNode);newTocList.appendChild(listNode);});if(!toc.lastElementChild){toc.appendChild(newTocList);}
else if(appendRoot==='root'){toc.lastElementChild.appendChild(newTocList);}
else{var rootObj=getMatchDom(toc.lastElementChild,appendRoot);if(rootObj)rootObj.appendChild(newTocList);}
return true;function getDomObjId(domObj,className){switch(className){case "Nature":case "Move":case "Ability":case "Pokemon":return domObj.getElementsByClassName("title").item(0).innerText;}
return 'unknown';}
function getMatchDom(obj,text){var childrenArr=Object.values(obj.children).filter(o=>o.nodeName==='LI');var match=childrenArr.filter(item=>item.innerText.split('\n')[0]==text);if(match.length>0)return match[0];for(var child of childrenArr){if(child.lastElementChild.nodeName!='UL')continue;var temp=getMatchDom(child.lastElementChild,text);if(temp!=null)return temp;}
return null;}}}
var i18n;function FMT(langkey){if(!langkey)return "";var val=i18n[langkey.toLowerCase()];return val?val:langkey;}
function toggleMoveList(elem){var displayValue=elem.parentNode.lastElementChild.style.display;elem.parentNode.lastElementChild.style.display=(displayValue=="none")?"block":"none";}
function toggleSearchLabel(elem){elem.classList.toggle("disable");SearchParser.search();}
var SearchType;window.addEventListener("load",()=>{MoveParser.parseTypeIcon();var isDomChanged=false;if(!SearchType){isDomChanged|=IconParser.parsePage();isDomChanged|=PokemonParser.parsePage();isDomChanged|=MoveParser.parsePage();isDomChanged|=AbilityParser.parsePage();}
else{SearchParser.parsePage();}
if(isDomChanged)window.onscroll(true);var event=new CustomEvent("parsePage",{"detail":"finished parsing page."});window.dispatchEvent(event);});