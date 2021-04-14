//=================
// Icon Parser
class IconParser {

  static parsePage(){
    var article = document.getElementById("list-main");
    if(!article) return false;

    var hasIcon = false;
    var raw_icon;
    while((raw_icon = article.innerHTML.match(/{@icon ([^\}]+)}/)) != null){
      var originText = raw_icon[0];
      var tagArr = raw_icon[1].split("|");
      
      var iconHtml = this.getIconHTML(tagArr);

      article.innerHTML = article.innerHTML.replace(originText, iconHtml);
      hasIcon = true;
    }
    return hasIcon;
  }

  static getClickableIconHTML( tagArr, isOn, funcName ){
    return `<a href="javascript:void(0)" onClick="${funcName}" class="${isOn? "": "disable"}" data-string="${tagArr.join("|")}">${this.getIconHTML(tagArr)}</a>`
  }
  static getIconHTML( tagArr ){
    var icon_type = tagArr[0];
    var icon_size = this.getSizeClass(tagArr[1]);

    switch(icon_type){
      case "novice": return this.getHTML_normalIcon("NoviceMark", icon_size);

      case "weather":
      case "ball":
      case "moveType":
      case "target":
      case "effect":
        return this.getHTML_normalIcon(icon_type+" "+tagArr[2], icon_size);

      case "text":   return this.getHTML_text(icon_size, tagArr[2], tagArr[3]);
      case "dice":   return this.getHTML_diceIcon(icon_size, tagArr[2]);
      case "pdice":  return this.getHTML_pdiceIcon(icon_size, tagArr[2]);
      case "rdice":  return this.getHTML_rdiceIcon(icon_size, tagArr[2], tagArr[3]);
      case "frame":  return this.getHTML_frame(tagArr.slice(1));
      default:
        return this.getHTML_normalIcon("unknown", icon_size);
    }
  }
  
  //====================
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
  static getHTML_pdiceIcon(iconSize, number){
    return `<tag class="dice plus ${iconSize}"><b>${number}</b></tag>`;
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
    var frame_title = this.getDefaultTitle(parameters[0], parameters[1], parameters[2]);
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
      if(content_data=="never"){
        content_data = `<tag class="never small"></tag>`;
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
  static getDefaultTitle(type, title, subType){
    switch(type){
      case "priority": return "優先度";
      case "accuracy": return "命中";
      case "heal":
        switch(subType){
          case "heal": return "治療";
          case "c_heal": return "強治療";
          default: return title;
        }

      case "paralysis": return "麻痺";
      case "burn1": return "灼傷1";
      case "burn2": return "灼傷2";
      case "burn3": return "灼傷3";
      case "sleep": return "睡眠";
      case "poison": return "中毒";
      case "poison2": return "劇毒";
      case "frozen": return "冰凍";
      case "flinch": return "畏縮";
      case "love": return "著迷";
      case "confuse": return "混亂";
      case "disabled": return "定身法";
      default:
        return title;
    }
  }
  static getTooltipsText(effect){
    switch(effect){
      case "weather sun":   return "大晴天";
      case "weather sun2":  return "大日照";
      case "weather rain":  return "下雨";
      case "weather rain2": return "暴風雨";
      case "weather sand":  return "沙暴";
      case "weather wind":  return "亂流";
      case "weather hail":  return "冰雹";
      
      case "target self":   return "使用者";
      case "target ally":   return "單體隊友";
      case "target allally":return "使用者&全體隊友";
      case "target foe":    return "單體敵人";
      case "target rfoe":   return "隨機敵人";
      case "target allfoe": return "全體敵人";
      case "target area":   return "範圍全體";
      case "target field":  return "戰鬥場地";
      case "target hybrid": return "不定";

      case "effect block":    return "阻擋";
      case "effect crit":     return "高要害率";
      case "effect charge":   return "蓄力";
      case "effect lethal":   return "致命傷害";
      case "effect neverfail":return "必中";
      case "effect recoil":   return "反作用力傷害";
      case "effect rampage":  return "狂暴";
      case "effect recharge": return "必須重新充能";
      case "effect shield":   return "護盾";
      case "effect switcher": return "替換寶可夢";
      case "effect fist":     return "拳頭類招式";
      case "effect sound":    return "聲音類招式";
      case "effect sact_2":   return "雙重行動";
      case "effect sact_5":   return "連續行動";
      case "effect heal":    return "基礎治癒";
      case "effect c_heal":  return "強效治癒";

      
      default:
        return "";
    }
  }
}
