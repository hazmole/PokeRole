var MoveList;class MoveParser{static parsePage(){var MoveListPanel=document.getElementById("MoveList");if(!MoveListPanel)return false;if(!MoveList||MoveList.length<=0)return false;var self=this;var HtmlMoveList=MoveList.map(obj=>self.getHTML(obj));MoveListPanel.innerHTML=HtmlMoveList.join("");return true;}
static parseTypeIcon(){var typeObjArr;typeObjArr=document.getElementsByClassName("TypeBlockList");if(typeObjArr){Object.values(typeObjArr).forEach(obj=>{var arr=obj.innerHTML.split(",").map(t=>getTypeHTML(t.trim()));obj.innerHTML=arr.join("");});}
function getTypeHTML(type){return `<span class="TypeBlock ${type}">${FMT(type)}</span>`;}}
static getHTML(moveObj){if(moveObj.tags[0]=="unknown|l")return "";var moveAlias=moveObj.alias?[moveObj.name].concat(moveObj.alias?.split("|")):[moveObj.name];var moveEffect=moveObj.effect?`<div><b>額外效果: </b></div><div class="Additional">${moveObj.effect}</div>`:"";var moveDescription=moveObj.desc?`<div class="MoveDesc">${moveObj.desc}</div>`:"";var moveIconArr=moveObj.tags?moveObj.tags.map(tagStr=>IconParser.getIconHTML(tagStr.split("|"))):[];var gMaxMoveIconArr=moveObj["gmax-tags"]?moveObj["gmax-tags"].map(tagStr=>IconParser.getIconHTML(tagStr.split("|"))):[];var gMaxIconBar=(gMaxMoveIconArr.length==0)?"":`<div class="MoveIconBar GMax"><div><b>超極巨建議效果</b></div> ${gMaxMoveIconArr.join("")}</div>`;return `<div class="Move ${moveObj.type}">
              <div class="MoveHeader">
                <div class="title" id="${moveObj.name}" title="${moveAlias.join("/")}">${moveObj.name}</div>
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
              ${ gMaxIconBar }
              ${ moveDescription }
            </div>`;}}
var AbilityList;class AbilityParser{static parsePage(){var buildPanel=document.getElementById("AbilityList");if(!buildPanel)return false;if(!AbilityList||AbilityList.length<=0)return false;var self=this;var HtmlAbiLust=AbilityList.map(obj=>self.getHTML(obj));buildPanel.innerHTML=HtmlAbiLust.join("");return true;}
static getHTML(abilityObj){if(abilityObj.tags[0]=="unknown|l")return "";var iconArr=abilityObj.tags?abilityObj.tags.map(tagStr=>IconParser.getIconHTML(tagStr.split("|"))):[];return `<div class="Ability">
              <div class="Header">
                <span class="title" id="${abilityObj.name}">${abilityObj.name}</span>
              </div>
              <div class="IconBar">${iconArr.join("")}</div>
              <div class="Content">${abilityObj.effect}</div>
              <div class="Desc">${abilityObj.desc}</div>
            </div>`;}}
var Pokedex;class PokemonParser{static parsePage(){var PokedexPanel=document.getElementById("Pokedex");if(!PokedexPanel)return false;if(!Pokedex||Pokedex.length<=0)return false;var self=this;var HtmlPokedex=Pokedex.map(obj=>self.getHTML(obj));PokedexPanel.innerHTML=HtmlPokedex.join("");return true;}
static getHTML(pokemonObj){var pokemonID=pokemonObj.id.replace(/-\w+/,"");var pokemonTypes=pokemonObj.type.map(type=>`<div class="type ${type}" style="width:${pokemonObj.type.length>1?5:10}rem;">${FMT(type)}</div>`).join("");var moveList=pokemonObj.moves.map(move=>getMoveEntryHtml(move));var evolveStage=getEvolveStage(pokemonObj.evolution)!=""?`<div class="entry"><b style="background:#b7b7b7">進化階段</b>${getEvolveStage(pokemonObj.evolution)}</div>`:"";var evolveTime=getEvolveTime(pokemonObj.evolution)!=""?`<div class="entry"><b style="background:#b7b7b7">進化時間</b>${getEvolveTime(pokemonObj.evolution)}</div>`:"";var evolveMethod=getEvolveMethod(pokemonObj.evolution)!=""?`<div class="entry">${getEvolveMethod(pokemonObj.evolution)}</div>`:"";return `<div class="Pokemon">
              <div class="${pokemonObj.type[0]}">
                <div class="Header flexContainer">
                  <div class="title" id="#${pokemonID} ${pokemonObj.name}">#${pokemonID} ${pokemonObj.name}</div>
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
                <div class="block" style="width: 185px; margin-left:1rem;">
                  <div class="entry"><b>力量</b> ${getAttr(pokemonObj.attr.str)}</div>
                  <div class="entry"><b>靈巧</b> ${getAttr(pokemonObj.attr.dex)}</div>
                  <div class="entry"><b>活力</b> ${getAttr(pokemonObj.attr.vit)}</div>
                  <div class="entry"><b>特殊</b> ${getAttr(pokemonObj.attr.spe)}</div>
                  <div class="entry"><b>洞察</b> ${getAttr(pokemonObj.attr.ins)}</div>
                </div>
                <div class="block" style="width: 180px; margin-left:1rem;">
                  ${ evolveStage }
                  ${ evolveTime }
                  ${ evolveMethod }
                </div>
              </div>
              <div>
                <button style="width:100%;" onClick="toggleMoveList(this)">招式表</button>
                <div class="MoveList" style="display:none;">
                  ${moveList.join("")}
                </div>
              </div>
              <div class="InfoText">
                ${pokemonObj.info.text}
              </div>
            </div>`;function getEvolveStage(evolvoObj){if(!evolvoObj||!evolvoObj.stage)return "";switch(evolvoObj.stage){case "first":return "初階";case "second":return "二階";case "final":return "最終階";case "mega":return "超級進化";case "battle-bond":return "牽絆變身";case "unknown":return "未知";}
return "-";}
function getEvolveTime(evolvoObj){if(!evolvoObj||!evolvoObj.time)return "";switch(evolvoObj.time){case "fast":return "快速";case "medium":return "中等";case "slow":return "緩慢";case "unknown":return "未知";}
return "-";}
function getEvolveMethod(evolvoObj){if(!evolvoObj)return "";var textArr=[];if(evolvoObj.with)textArr.push(`透過 <u>${evolvoObj.with}</u> 進化`);if(evolvoObj.near)textArr.push(`接近 <u>${evolvoObj.near}</u> 時進化`);if(evolvoObj.beauty)textArr.push(`在 <u>美麗${evolvoObj.beauty}</u> 時進化`);if(evolvoObj.loyalty)textArr.push(`在 <u>忠誠度${evolvoObj.loyalty}</u> 時進化`);if(evolvoObj.happiness)textArr.push(`在 <u>幸福度${evolvoObj.happiness}</u> 時進化`);if(evolvoObj.limitby)textArr.push(`限定由 <u>${evolvoObj.limitby}</u> 進化`);if(evolvoObj.by)textArr.push(`經由 <u>${evolvoObj.by}</u> 進化`);if(pokemonObj.evolution.note)textArr.push(`<u>${pokemonObj.evolution.note}</u>`);return textArr.join(" & ");}
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
class TocInjector{static clear(){var toc=document.getElementById("TableOfContents");if(!toc)return false;toc.innerHTML="";}
static parsePage(className,appendRoot){var toc=document.getElementById("TableOfContents");if(!toc)return false;if(!className)return false;if(!appendRoot)appendRoot='root';var objList=Object.values(document.getElementsByClassName(className));var idList=objList.map(domObj=>getDomObjId(domObj,className));var newTocList=document.createElement("UL");idList.forEach(id=>{var textNode=document.createTextNode(id);var urlNode=document.createElement("A");urlNode.setAttribute("href","#"+id);urlNode.appendChild(textNode);var listNode=document.createElement("LI");listNode.appendChild(urlNode);newTocList.appendChild(listNode);});if(!toc.lastElementChild){toc.appendChild(newTocList);}
else if(appendRoot==='root'){toc.lastElementChild.appendChild(newTocList);}
else{var rootObj=getMatchDom(toc.lastElementChild,appendRoot);if(rootObj)rootObj.appendChild(newTocList);}
return true;function getDomObjId(domObj,className){switch(className){case "Nature":case "Move":case "Ability":case "Pokemon":return domObj.getElementsByClassName("title").item(0).innerText;}
return 'unknown';}
function getMatchDom(obj,text){var childrenArr=Object.values(obj.children).filter(o=>o.nodeName==='LI');var match=childrenArr.filter(item=>item.innerText.split('\n')[0]==text);if(match.length>0)return match[0];for(var child of childrenArr){if(child.lastElementChild.nodeName!='UL')continue;var temp=getMatchDom(child.lastElementChild,text);if(temp!=null)return temp;}
return null;}}}
function toggleMoveList(elem){var displayValue=elem.parentNode.lastElementChild.style.display;elem.parentNode.lastElementChild.style.display=(displayValue=="none")?"block":"none";}
var SearchType;var isNotAutoBuild;window.addEventListener("load",()=>{MoveParser.parseTypeIcon();var isDomChanged=false;if(!isNotAutoBuild){isDomChanged|=IconParser.parsePage();isDomChanged|=PokemonParser.parsePage();isDomChanged|=MoveParser.parsePage();isDomChanged|=AbilityParser.parsePage();}
else{SearchParser.parsePage();PokemonGenerator.parsePage();}
if(isDomChanged)window.onscroll(true);var event=new CustomEvent("parsePage",{"detail":"finished parsing page."});window.dispatchEvent(event);});