var MoveList,AbilityList,Pokedex,SearchType,isNotAutoBuild;class MoveParser{static parsePage(){var a=document.getElementById("MoveList"),b,c;return!!a&&(!(!MoveList||MoveList.length<=0)&&(b=this,c=MoveList.map(a=>b.getHTML(a)),a.innerHTML=c.join(""),!0))}static parseTypeIcon(){var a;a=document.getElementsByClassName("TypeBlockList"),a&&Object.values(a).forEach(a=>{var c=a.innerHTML.split(",").map(a=>b(a.trim()));a.innerHTML=c.join("")});function b(a){return`<span class="TypeBlock ${a}">${FMT(a)}</span>`}}static getHTML(a){var c,d,e,f,b,g;return a.tags[0]=="unknown|l"?"":(c=a.alias?[a.name].concat(a.alias?.split("|")):[a.name],d=a.effect?`<div><b>額外效果: </b></div><div class="Additional">${a.effect}</div>`:"",e=a.desc?`<div class="MoveDesc">${a.desc}</div>`:"",f=a.tags?a.tags.map(a=>IconParser.getIconHTML(a.split("|"))):[],b=a["gmax-tags"]?a["gmax-tags"].map(a=>IconParser.getIconHTML(a.split("|"))):[],g=b.length==0?"":`<div class="MoveIconBar GMax"><div><b>超極巨建議效果</b></div> ${b.join("")}</div>`,`<div class="Move ${a.type}">
              <div class="MoveHeader">
                <div class="title" id="${a.name}" title="${c.join("/")}">${a.name}</div>
                <div class="power">${a.power}</div>
                <div class="type"><tag class="moveType ${a.category}"></tag></div>
              </div>
              <div class="MoveIconBar">${f.join("")}</div>
              <div class="MoveContent">
                <div class="Type">${FMT(a.type)}</div>
                <div class="Accuracy">${a.accuracy}</div>
                <div class="Damage">${a.damage}</div>
                ${d}
              </div>
              ${g}
              ${e}
            </div>`)}}class AbilityParser{static parsePage(){var a=document.getElementById("AbilityList"),b,c;return!!a&&(!(!AbilityList||AbilityList.length<=0)&&(b=this,c=AbilityList.map(a=>b.getHTML(a)),a.innerHTML=c.join(""),!0))}static getHTML(a){if(a.tags[0]=="unknown|l")return"";var b=a.tags?a.tags.map(a=>IconParser.getIconHTML(a.split("|"))):[];return`<div class="Ability">
              <div class="Header">
                <span class="title" id="${a.name}">${a.name}</span>
              </div>
              <div class="IconBar">${b.join("")}</div>
              <div class="Content">${a.effect}</div>
              <div class="Desc">${a.desc}</div>
            </div>`}}class PokemonParser{static parsePage(){var a=document.getElementById("Pokedex"),b,c;return!!a&&(!(!Pokedex||Pokedex.length<=0)&&(b=this,c=Pokedex.map(a=>b.getHTML(a)),a.innerHTML=c.join(""),!0))}static getHTML(a){var c=a.id.replace(/-\w+/,""),o=a.type.map(b=>`<div class="type ${b}" style="width:${a.type.length>1?5:10}rem;">${FMT(b)}</div>`).join(""),m=a.moves.map(a=>k(a)),l=h(a.evolution)!=""?`<div class="entry"><b style="background:#b7b7b7">進化階段</b>${h(a.evolution)}</div>`:"",j=g(a.evolution)!=""?`<div class="entry"><b style="background:#b7b7b7">進化時間</b>${g(a.evolution)}</div>`:"",i=f(a.evolution)!=""?`<div class="entry">${f(a.evolution)}</div>`:"";return`<div class="Pokemon">
              <div class="${a.type[0]}">
                <div class="Header flexContainer">
                  <div class="title" id="#${c} ${a.name}">#${c} ${a.name}</div>
                  ${o}
                </div>
              </div>
              <div class="GameData flexContainer">
                <div class="block Image" style="text-align: center;">
                  <img src="${ROOTPATH}/${a.info.image}">
                  <div class="category ${a.type[0]}"><div style="background:rgba(255,255,255,.5);">${a.info.category}</div></div>
                  <div class="category">${a.info.height}m / ${a.info.weight}kg</div>
                </div>
                <div class="block" style="width: 180px;">
                  <div class="entry" style="margin-bottom:.5rem;"><b>建議階級</b> ${e(a.rank)}</div>
                  <div class="entry"><b>基礎HP</b> <span style="font-size:1.2em;margin:.2rem;">${a.baseHP}</span></div>
                  <div class="entry"><b>特性</b> ${a.ability.join(", ")}</div>
                  <div class="entry">${n(a.isNovice)}</div>
                </div>
                <div class="block" style="width: 185px; margin-left:1rem;">
                  <div class="entry"><b>力量</b> ${b(a.attr.str)}</div>
                  <div class="entry"><b>靈巧</b> ${b(a.attr.dex)}</div>
                  <div class="entry"><b>活力</b> ${b(a.attr.vit)}</div>
                  <div class="entry"><b>特殊</b> ${b(a.attr.spe)}</div>
                  <div class="entry"><b>洞察</b> ${b(a.attr.ins)}</div>
                </div>
                <div class="block" style="width: 180px; margin-left:1rem;">
                  ${l}
                  ${j}
                  ${i}
                </div>
              </div>
              <div>
                <button style="width:100%;" onClick="toggleMoveList(this)">招式表</button>
                <div class="MoveList" style="display:none;">
                  ${m.join("")}
                </div>
              </div>
              <div class="InfoText">
                ${a.info.text}
              </div>
            </div>`;function h(a){if(!a||!a.stage)return"";switch(a.stage){case"first":return"初階";case"second":return"二階";case"final":return"最終階";case"mega":return"超級進化";case"unknown":return"未知"}return"-"}function g(a){if(!a||!a.time)return"";switch(a.time){case"fast":return"快速";case"medium":return"中等";case"slow":return"緩慢"}return"-"}function f(b){if(!b)return"";var c=a.evolution.note?` & <u>${a.evolution.note}</u>`:"";return b.with?`透過 <u>${b.with}</u> 進化${c}`:b.near?`接近 <u>${b.near}</u> 時進化${c}`:b.beauty?`在 <u>美麗${b.beauty}</u> 時進化${c}`:b.loyalty?`在 <u>忠誠度${b.loyalty}</u> 時進化${c}`:b.happiness?`在 <u>幸福度${b.happiness}</u> 時進化${c}`:b.limitby?`限定由 <u>${b.limitby}</u> 進化${c}`:b.by?`經由 <u>${b.by}</u> 進化${c}`:''}function k(a){return`<div class="entry">
                ${e(a.rank,!0)}
                <span class="${a.type} moveType">${FMT(a.type)}</span>
                ${a.name}
              </div>`}function e(a,b){return`<span class="icon ${d(a)}" style="display: inline-block;">${b?"&nbsp":d(a,!0)}</span>`}function d(b,a){switch(b){case 0:return a?'新手':'Starter';case 1:return a?'初學者':'Beginner';case 2:return a?'業餘者':'Amateur';case 3:return a?'菁英':'Ace';case 4:return a?'專家':'Pro';case 5:return a?'大師':'Master';case 6:return a?'冠軍':'Champion'}}function n(a){return a?"<tag class='NoviceMark'></tag>":""}function b(b){for(var c="",a=0;a<b.max;a++)c+=a<b.value?"●":"○";return c}}}class TocInjector{static clear(){var a=document.getElementById("TableOfContents");if(!a)return!1;a.innerHTML=""}static parsePage(d,b){var a=document.getElementById("TableOfContents"),g,h,c,e;return!!a&&(!!d&&(b||(b='root'),g=Object.values(document.getElementsByClassName(d)),h=g.map(a=>i(a,d)),c=document.createElement("UL"),h.forEach(b=>{var e=document.createTextNode(b),a=document.createElement("A"),d;a.setAttribute("href","#"+b),a.appendChild(e),d=document.createElement("LI"),d.appendChild(a),c.appendChild(d)}),a.lastElementChild?b==='root'?a.lastElementChild.appendChild(c):(e=f(a.lastElementChild,b),e&&e.appendChild(c)):a.appendChild(c),!0));function i(a,b){switch(b){case"Nature":case"Move":case"Ability":case"Pokemon":return a.getElementsByClassName("title").item(0).innerText}return'unknown'}function f(g,a){var b=Object.values(g.children).filter(a=>a.nodeName==='LI'),c=b.filter(b=>b.innerText.split('\n')[0]==a),d,e;if(c.length>0)return c[0];for(d of b){if(d.lastElementChild.nodeName!='UL')continue;if(e=f(d.lastElementChild,a),e!=null)return e}return null}}}function toggleMoveList(a){var b=a.parentNode.lastElementChild.style.display;a.parentNode.lastElementChild.style.display=b=="none"?"block":"none"}window.addEventListener("load",()=>{var a,b;MoveParser.parseTypeIcon(),a=!1,isNotAutoBuild?(SearchParser.parsePage(),PokemonGenerator.parsePage()):(a|=IconParser.parsePage(),a|=PokemonParser.parsePage(),a|=MoveParser.parsePage(),a|=AbilityParser.parsePage()),a&&window.onscroll(!0),b=new CustomEvent("parsePage",{detail:"finished parsing page."}),window.dispatchEvent(b)})