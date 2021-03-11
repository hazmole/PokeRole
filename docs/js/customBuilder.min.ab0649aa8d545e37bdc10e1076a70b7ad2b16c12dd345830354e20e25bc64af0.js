function parseIcon(){var article=document.getElementById("list-main");if(!article)return;var raw_icon;while((raw_icon=article.innerHTML.match(/{@icon ([^\}]+)}/))!=null){var originText=raw_icon[0];var tagArr=raw_icon[1].split("|");var iconHtml=getIconHTML(tagArr);article.innerHTML=article.innerHTML.replace(originText,iconHtml);}
function getIconHTML(tagArr){var icon_type=tagArr[0];var icon_size=getSizeClass(tagArr[1]);switch(icon_type){case "lethal":return getHTML_normalIcon("lethalDamage",icon_size);case "crit":return getHTML_normalIcon("highCrit",icon_size);case "novice":return getHTML_normalIcon("NoviceMark",icon_size);case "dice":return getHTML_diceIcon(icon_size,tagArr[2]);case "rdice":return getHTML_rdiceIcon(icon_size,tagArr[2],tagArr[3]);case "frame":return getHTML_frame(tagArr.slice(1));default:return getHTML_normalIcon("unknown",icon_size);}}
function getHTML_normalIcon(iconClass,iconSize){return `<tag class="${iconClass} ${iconSize}"></tag>`;}
function getHTML_diceIcon(iconSize,number){return `<tag class="dice ${iconSize}"><b>${number}</b></tag>`;}
function getHTML_rdiceIcon(iconSize,number,extraClass){var diceClass;switch(parseInt(number)){case 1:diceClass="one";break;case 2:diceClass="two";break;case 3:diceClass="three";break;case 4:diceClass="four";break;case 5:diceClass="five";break;case 6:diceClass="six";break;}
if(parseInt(number)>=4)extraClass+=" success";return `<tag class="rdice ${iconSize} ${diceClass} ${extraClass}"></tag>`;}
function getHTML_frame(arguments){var frame_type=arguments[0];var frame_title=arguments[1];var frame_content=getFrameContent(arguments.slice(2));return `<iconFrame class="${frame_type}">
              <span class="frameTitle">${frame_title}</span>
              <span class="frameContent">${frame_content}</span>
            </iconFrame>`;function getFrameContent(arguments){var content_type=arguments[0];var content_data=arguments[1]||null;var isDice=false;if(content_data&&content_data[0]=="d"){content_data=`<tag class="dice small"><b>${content_data[1]}</b></tag>`;isDice=true;}
var prefix="";switch(content_type){case "up":prefix="↑";break;case "down":prefix="↓";break;case "plus":prefix="+";break;case "minus":prefix="-";break;}
if(!isDice){prefix=`<prefix>${prefix}</prefix>`;}else if(prefix!=""){prefix=`<dprefix>${prefix}</dprefix>`;}
switch(content_type){case "always":return `<span class="always"></span>`;case "never":return `<span class="never"></span>`;case "number":case "up":case "down":case "plus":case "minus":return `<span class="number">${prefix}${content_data}</span>`;default:return "?";}}}
function getSizeClass(size){if(size=="s")return "small";if(size=="l")return "large";return "";}}
window.addEventListener("load",parseIcon);