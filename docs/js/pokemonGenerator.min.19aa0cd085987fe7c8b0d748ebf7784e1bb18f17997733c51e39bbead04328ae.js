var Pokedex;var AbilityList;var MoveList;class PokemonGenerator{static parsePage(){var panel=document.getElementById("GeneratePanel");if(!panel)return false;this.renderPanel(panel);return true;}
static renderPanel(panelObj){var html=getPanelTemplate();panelObj.innerHTML=`<form id="searchForm" onkeydown="return event.key != 'Enter';">${html}</form>`;function getPanelTemplate(){return `
      <div>寶可夢編號 ${getInput_PokemonId()}</div>
      <div>寶可夢階級 ${getInput_Rank()}</div>
      <div class="PanelFooter"><button type="button" onClick="PokemonGenerator.generate()">生成！</button></div>`;}
function getInput_PokemonId(){return getSelectionHtml("id",getPokemonIdOptions());}
function getInput_Rank(){return getSelectionHtml("rank",getRankOptions());}
function getPokemonIdOptions(){var arr=[{value:"any",text:"隨機"},getDivideOption()];Array.prototype.push.apply(arr,Pokedex.map(pokemon=>{var pokemonID=pokemon.id.replace(/-\w+/,"");return{value:pokemon.id,text:`#${pokemonID}:${pokemon.name}`};}));return arr;}
function getRankOptions(){return[{value:"any",text:"隨機"},getDivideOption(),{value:"starter",text:"新手"},{value:"beginner",text:"初學者"},{value:"amateur",text:"業餘者"},{value:"ace",text:"菁英"},{value:"pro",text:"專家"},{value:"master",text:"大師"},{value:"champion",text:"冠軍"},];}
function getSelectionHtml(name,options){var optionList=options.map(option=>getOptionHtml(option));return `<select name="${name}">${optionList.join("")}</select>`;}
function getOptionHtml(item){var value=item.value;var defaultSelected=item.value=="any"?"selected":"";var defaultDisabled=item.disable?"disabled":"";var defaultClass=item.class?item.class:""
return `<option value="${value}" ${defaultSelected} ${defaultDisabled} class="${defaultClass}">${item.text}</option>`;}
function getDivideOption(){return{value:"",text:"============",disable:true};}}
static generate(){var config={itemList:null,form:document.forms["searchForm"]?.elements,panel:{pokemon:document.getElementById("Pokemon"),ability:document.getElementById("AbilityList"),moves:document.getElementById("MoveList")},};var pokemonObj=null;if(config.form.id.value=="any"){pokemonObj=randomArrayElement(Pokedex);}
else{pokemonObj=Pokedex.find(obj=>obj.id==config.form.id.value);}
var rankConfig={value:null,index:-1,mainAttrPt:0,socialAttrPt:0,skillPt:0,skillCap:1};if(config.form.rank.value=="any")
rankConfig.value=randomArrayElement(Util.getAllRank());else
rankConfig.value=Util.getAllRank().find(obj=>obj==config.form.rank.value);completeRankConfig(rankConfig);var new_pokemonObj=initFullPokemonObj(pokemonObj);randomDistributePoints(new_pokemonObj.attr,rankConfig.mainAttrPt,10,(rankConfig.index==6));randomDistributePoints(new_pokemonObj.sAttr,rankConfig.socialAttrPt,10);randomDistributePoints(new_pokemonObj.skill,rankConfig.skillPt,rankConfig.skillCap);randomLearnMoves(new_pokemonObj,rankConfig.index);new_pokemonObj.natureObj=randomArrayElement(Util.getAllNatures());new_pokemonObj.rank=rankConfig.index;new_pokemonObj.abilityIdx=random(new_pokemonObj.ability.length);new_pokemonObj.maxHP=new_pokemonObj.baseHP+new_pokemonObj.attr.vit.value+((rankConfig.index>=5)?2:0);new_pokemonObj.maxWP=2+new_pokemonObj.attr.ins.value+((rankConfig.index>=5)?2:0);PokemonGenerator.render(new_pokemonObj);function completeRankConfig(rankConfig){var idx=Util.getAllRank().indexOf(rankConfig.value);var totalMainAttrPt=[2,4,6,8,10,10,14];var totalSocialAttrPt=[2,4,6,8,10,14,14];var totalSkillPt=[5,9,12,14,15,15,16];var skillCap=[1,2,3,4,5,5,5];if(idx<0)idx=0;if(idx>6)idx=6;rankConfig.index=idx;rankConfig.mainAttrPt=totalMainAttrPt[idx];rankConfig.socialAttrPt=totalSocialAttrPt[idx];rankConfig.skillPt=totalSkillPt[idx];rankConfig.skillCap=skillCap[idx];}
function initFullPokemonObj(pokemonObj){var newObj=JSON.parse(JSON.stringify(pokemonObj));newObj.sAttr={};newObj.skill={};newObj.knownMoves=[];newObj.abilityIdx=0;newObj.maxHP=0;Util.getSocialAttribute().forEach(item=>{newObj.sAttr[item]={max:5,base:1,value:1};});Util.getAllPokemonSkills().forEach(item=>{newObj.skill[item]={max:5,base:0,value:0};});Object.values(newObj.attr).forEach(item=>{item.base=item.value;});return newObj;}
function randomDistributePoints(fields,totalPoint,max,limitBreak){if(!max)max=999;for(var i=0;i<totalPoint;i++){var slots=Object.values(fields).filter(field=>(field.max+(limitBreak?2:0)>field.value&&max>field.value));if(slots.length==0)return false;var field=randomArrayElement(slots);field.value++;}
return true;}
function randomLearnMoves(pokemonObj,rank){var availableMoveList=pokemonObj.moves.filter(move=>move.rank<=rank);var maxMoveNum=pokemonObj.attr.ins.value+2;for(var i=0;i<maxMoveNum;i++){if(availableMoveList.length<=0)break;var idx=random(availableMoveList.length);var move=availableMoveList.splice(idx,1)[0];pokemonObj.knownMoves.push(move);}
pokemonObj.knownMoves.sort((a,b)=>{if(a.type==b.type)return a.rank>b.rank?1:-1;if(FMT(a.type)=="Normal")return-1;if(FMT(b.type)=="Normal")return 1;return FMT(a.type)>FMT(b.type)?1:-1;});}
function randomArrayElement(arr){return arr[random(arr.length)];}
function random(max){return Math.floor((Math.random()*max));}}
static render(pokemonObj){var PokemonPanel=document.getElementById("Pokemon");if(PokemonPanel){PokemonPanel.innerHTML=getHTML(pokemonObj);}
var AbilityPanel=document.getElementById("AbilityList");var ability=null;if(AbilityPanel){if(AbilityList){var abilityName=pokemonObj.ability[pokemonObj.abilityIdx];ability=AbilityList.find(item=>item.name==abilityName);}
AbilityPanel.innerHTML=ability==null?"<center>-找不到特性-</center>":(AbilityParser.getHTML(ability));}
var MovesPanel=document.getElementById("MoveList");var moves=[];if(MovesPanel){if(MoveList){for(var i=0;i<pokemonObj.knownMoves.length;i++){var moveName=pokemonObj.knownMoves[i].name;var move=MoveList.find(item=>item.name==moveName);if(move)moves.push(move);}}
MovesPanel.innerHTML=moves.length==0?"<center>-找不到招式-</center>":(moves.map(move=>MoveParser.getHTML(move)).join(""));}
return true;function getHTML(pokemonObj){var pokemonID=pokemonObj.id.replace(/-\w+/,"");var pokemonTypes=pokemonObj.type.map(type=>`<div class="type ${type}" style="width:${pokemonObj.type.length>1?5:10}rem;">${FMT(type)}</div>`).join("");return `<div class="Pokemon">
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
              <div class="entry"><b>階級</b> ${getRank(pokemonObj.rank)}</div>
              <div class="entry"><b>生命值</b> ${pokemonObj.maxHP} / ${pokemonObj.maxHP}</div>
              <div class="entry" style="margin-bottom:1rem;"><b>意志點</b> ${pokemonObj.maxWP} / ${pokemonObj.maxWP}</div>
              <div class="entry"><b>性格</b> ${pokemonObj.natureObj.name}</div>
              <div class="entry"><b>信心值</b> ${pokemonObj.natureObj.confident} / ${pokemonObj.natureObj.confident}</div>
            </div>
            <div class="block" style="width: 180px; margin-left:1rem;">
              <div class="entry"><b>力量</b> ${getAttr(pokemonObj.attr.str)}</div>
              <div class="entry"><b>靈巧</b> ${getAttr(pokemonObj.attr.dex)}</div>
              <div class="entry"><b>活力</b> ${getAttr(pokemonObj.attr.vit)}</div>
              <div class="entry"><b>特殊</b> ${getAttr(pokemonObj.attr.spe)}</div>
              <div class="entry"><b>洞察</b> ${getAttr(pokemonObj.attr.ins)}</div>
            </div>
            <div class="block" style="width: 180px; margin-left:1rem;">
              <div class="entry"><b>強壯</b> ${getAttr(pokemonObj.sAttr.tough)}</div>
              <div class="entry"><b>帥氣</b> ${getAttr(pokemonObj.sAttr.cool)}</div>
              <div class="entry"><b>美麗</b> ${getAttr(pokemonObj.sAttr.beauty)}</div>
              <div class="entry"><b>聰明</b> ${getAttr(pokemonObj.sAttr.smart)}</div>
              <div class="entry"><b>可愛</b> ${getAttr(pokemonObj.sAttr.cute)}</div>
            </div>
          </div>
          <div class="GameData flexContainer" style="justify-content: center;">
            <div style="width:100%;text-align:center;background:#888;color:#fff;font-weight:bold;">技能</div>
            <div class="block" style="width: 140px; margin-left:1rem;">
              <div class="entry"><b>鬥毆</b> ${getAttr(pokemonObj.skill["鬥毆"])}</div>
              <div class="entry"><b>導引</b> ${getAttr(pokemonObj.skill["導引"])}</div>
              <div class="entry"><b>對抗</b> ${getAttr(pokemonObj.skill["對抗"])}</div>
              <div class="entry"><b>閃避</b> ${getAttr(pokemonObj.skill["閃避"])}</div>
            </div>
            <div class="block" style="width: 140px; margin-left:1rem;">
              <div class="entry"><b>警覺</b> ${getAttr(pokemonObj.skill["警覺"])}</div>
              <div class="entry"><b>運動</b> ${getAttr(pokemonObj.skill["運動"])}</div>
              <div class="entry"><b>自然</b> ${getAttr(pokemonObj.skill["自然"])}</div>
              <div class="entry"><b>隱匿</b> ${getAttr(pokemonObj.skill["隱匿"])}</div>
            </div>
            <div class="block" style="width: 140px; margin-left:1rem;">
              <div class="entry"><b>誘惑</b> ${getAttr(pokemonObj.skill["誘惑"])}</div>
              <div class="entry"><b>共感</b> ${getAttr(pokemonObj.skill["共感"])}</div>
              <div class="entry"><b>禮儀</b> ${getAttr(pokemonObj.skill["禮儀"])}</div>
              <div class="entry"><b>威嚇</b> ${getAttr(pokemonObj.skill["威嚇"])}</div>
              <div class="entry"><b>表演</b> ${getAttr(pokemonObj.skill["表演"])}</div>
            </div>
            <div class="block" style="width: 140px; margin-left:1rem;">
              <div class="entry"><b>工藝</b> ${getAttr(pokemonObj.skill["工藝"])}</div>
              <div class="entry"><b>傳聞</b> ${getAttr(pokemonObj.skill["傳聞"])}</div>
              <div class="entry"><b>醫藥</b> ${getAttr(pokemonObj.skill["醫藥"])}</div>
              <div class="entry"><b>科學</b> ${getAttr(pokemonObj.skill["科學"])}</div>
            </div>
          </div>
          <div class="GameData flexContainer">
            <div style="width:100%;text-align:center;background:#888;color:#fff;font-weight:bold;">特性&招式</div>
            <div class="block" style="width: 100%; margin-left:1rem;">
              <div class="entry"><b>特性</b> ${pokemonObj.ability[pokemonObj.abilityIdx]}</div>
              <div class="entry" style=""><b>習得招式</b> ${pokemonObj.knownMoves.map(move=>move.name).join(", ")}</div>
            </div>
          </div>
        </div>`;}
function getRank(rank,isOnlyMark){return `<span class="icon ${getRankText(rank)}" style="display: inline-block;">${isOnlyMark?"&nbsp":getRankText(rank,true)}</span>`;}
function getRankText(rank,isText){switch(rank){case 0:return isText?'新手':'Starter';case 1:return isText?'初學者':'Beginner';case 2:return isText?'業餘者':'Amateur';case 3:return isText?'菁英':'Ace';case 4:return isText?'專家':'Pro';case 5:return isText?'大師':'Master';case 6:return isText?'冠軍':'Champion';}}
function getAttr(attr){if(!attr)attr={max:5,value:0};var text="";var max=(attr.max>=attr.value)?attr.max:attr.value;for(var i=0;i<max;i++){text+=(i<attr.base)?"●":(i<attr.value&&i<attr.max)?"<font color='red'>●</font>":(i<attr.max)?"○":"<font color='red'>★</font>";}
return text;}}}