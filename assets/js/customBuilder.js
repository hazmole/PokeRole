class IconParser {

  static parsePage(){
    var article = document.getElementById("list-main");
    if(!article) return;

    var hasIcon = false;
    var raw_icon;
    while((raw_icon = article.innerHTML.match(/{@icon ([^\}]+)}/)) != null){
      var originText = raw_icon[0];
      var tagArr = raw_icon[1].split("|");
      
      var iconHtml = this.getIconHTML(tagArr);

      article.innerHTML = article.innerHTML.replace(originText, iconHtml);
      hasIcon = true;
    }
    if(hasIcon) window.onscroll(true);
  }

  //====================
  static getIconHTML( tagArr ){
    var icon_type = tagArr[0];
    var icon_size = this.getSizeClass(tagArr[1]);

    switch(icon_type){
      case "novice": return this.getHTML_normalIcon("NoviceMark", icon_size);

      case "heal":   return this.getHTML_normalIcon("basicHeal", icon_size);
      case "c_heal":   return this.getHTML_normalIcon("compHeal", icon_size);

      case "weather":
      case "ball":
      case "moveType":
      case "target":
      case "effect":
        return this.getHTML_normalIcon(icon_type+" "+tagArr[2], icon_size);

      case "text":   return this.getHTML_text(icon_size, tagArr[2], tagArr[3]);
      case "dice":   return this.getHTML_diceIcon(icon_size, tagArr[2]);
      case "rdice":  return this.getHTML_rdiceIcon(icon_size, tagArr[2], tagArr[3]);
      case "frame":  return this.getHTML_frame(tagArr.slice(1));
      default:
        return this.getHTML_normalIcon("unknown", icon_size);
    }
  }
  //====================
  static getHTML_normalIcon(iconClass, iconSize){
    var titleText = this.getTooltipsText(iconClass);
    var titleAttr = (!!titleText)? `title="${titleText}"`: '';
    return `<tag class="${iconClass} ${iconSize}" ${titleAttr}></tag>`;
  }
  static getHTML_text(iconSize, text, colorClass){
    return `<tag class="text ${iconSize} ${colorClass}"><b>${text}</b></tag>`;
  }
  static getHTML_diceIcon(iconSize, number){
    return `<tag class="dice ${iconSize}"><b>${number}</b></tag>`;
  }
  static getHTML_rdiceIcon(iconSize, number, extraClass){
    var diceClass;
    switch(parseInt(number)){
      case 1: diceClass="one"; break;
      case 2: diceClass="two"; break;
      case 3: diceClass="three"; break;
      case 4: diceClass="four"; break;
      case 5: diceClass="five"; break;
      case 6: diceClass="six"; break;
    }
    if(parseInt(number)>=4 && extraClass!="normal") extraClass+=" success";
    return `<tag class="rdice ${iconSize} ${diceClass} ${extraClass}"></tag>`;
  }
  static getHTML_frame(parameters){
    var frame_type = parameters[0];
    var frame_title = parameters[1];
    var frame_content = getFrameContent(parameters.slice(2));
    return `<iconFrame class="${frame_type}">
              <span class="frameTitle">${frame_title}</span>
              <span class="frameContent">${frame_content}</span>
            </iconFrame>`;

    function getFrameContent(parameters){
      var content_type = parameters[0];
      var content_data = parameters[1] || null;
      var isDice = false;

      // handle dice
      if(content_data && content_data[0]=="d"){
        content_data = `<tag class="dice small"><b>${content_data[1]}</b></tag>`;
        isDice = true;
      }

      // handle prefix
      var prefix = "";
      switch(content_type){
        case "up": prefix = "↑"; break;
        case "down": prefix = "↓"; break;
        case "plus": prefix = "+"; break;
        case "minus": prefix = "-"; break;
      }
      if(!isDice){
        prefix = `<prefix>${prefix}</prefix>`;
      } else if(prefix!=""){
        prefix = `<dprefix>${prefix}</dprefix>`;
      }

      switch(content_type){
        case "always": return `<span class="always"></span>`;
        case "never":  return `<span class="never"></span>`;
        case "heal":   return `<span class="heal">${content_data}</span>`;
        case "c_heal": return `<span class="heal comp">${content_data}</span>`;
        case "number":
        case "up":
        case "down":
        case "plus":
        case "minus":
          return `<span class="number">${prefix}${content_data}</span>`;
        default:
          return "";
      }
    }
  }

  //====================
  static getSizeClass(size){
    if(size=="s") return "small";
    if(size=="l") return "large";
    return "";
  }
  static getTooltipsText(effect){
    switch(effect){
      case "basicHeal": return "基礎治癒";
      case "compHeal":  return "強效治癒";

      case "weather sun":   return "大晴天";
      case "weather sun2":  return "大日照";
      case "weather rain":  return "下雨";
      case "weather rain2": return "暴風雨";
      case "weather sand":  return "沙暴";
      case "weather wind":  return "亂流";
      case "weather hail":  return "冰雹";
      
      case "effect block":  return "阻擋";
      case "effect crit":   return "高要害率";
      case "effect charge": return "蓄能";
      case "effect lethal": return "致命傷害";
      case "effect recoil": return "反作用力傷害";
      case "effect shield": return "護盾";
      case "effect fist":   return "拳頭類招式";
      case "effect sound":  return "聲音類招式";
      case "effect sact_2":   return "雙重行動";
      case "effect sact_5":   return "連續行動";
      default:
        return "";
    }
  }
}



var MoveList;
class MoveParser{

  static parsePage(){
    var MoveListPanel = document.getElementById("MoveList");
    if(!MoveListPanel) return;

    

    var self = this;
    var HtmlMoveList = MoveList.map( obj => self.getMoveHTML(obj) );
    MoveListPanel.innerHTML = HtmlMoveList.join("");
  }


  static getMoveHTML( moveObj ){
    var moveEffect = moveObj.effect? `<div class="Additional">${moveObj.effect}</div>`: "";
    var moveDescription = moveObj.desc? `<div class="MoveDesc">${moveObj.desc}</div>`: "";
    var moveIconArr =moveObj.tags? moveObj.tags.map( tagStr => IconParser.getIconHTML(tagStr.split("|")) ) :[];

    return `<div class="Move ${moveObj.type}">
              <div class="MoveHeader">
                <div class="title">${moveObj.name}</div>
                <div class="power">${moveObj.power}</div>
                <div class="type"><tag class="moveType ${moveObj.category}"></tag></div>
              </div>
              <div class="MoveIconBar">${moveIconArr.join("")}</div>
              <div class="MoveContent">
                <div class="Type">${moveObj.type}</div>
                <div class="Accuracy">${moveObj.accuracy}</div>
                <div class="Damage">${moveObj.damage}</div>
                ${ moveEffect }
              </div>
              ${ moveDescription }
            </div>`;

  }



}


if(!!MoveList){
  window.addEventListener("load", () => { MoveParser.parsePage(); });
}
//=================
// Global settings
window.addEventListener("load", () => { IconParser.parsePage(); });

