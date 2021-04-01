+++
title = "招式效果標誌"
weight = 2
description = "說明各項招式效果標誌的意義"
+++
## 招式效果標誌
在這個章節中羅列了許許多多的效果標誌。它們是協助你快速參照效果的圖標，用來說明招式的目標、命中率、以及最重要的：招式的效果。
大部分的效果標誌的意義都相當不言自明，且能幫上你很大的忙。

{{< mynotice trainer >}}
留意你招式的效果。
如果你能學會組合它們，那它們將會成為你邁向勝利的關鍵。
{{< /mynotice >}}

#### 分類圖示
<div class="iconDesc-container">
  <div class="iconDesc-item">{@icon moveType|l|physical}</div>
  <div class="iconDesc-item">
    <b>物理招式</b><br/>
    物理招式 會被「防禦」數值抵抗。<b>它們通常會是近距離攻擊</b>。<br/>
    有些物理招式可以造成遠距離攻擊，它們會被標註為 <u>遠程招式</u>。
  </div>
</div>
<div class="iconDesc-container">
  <div class="iconDesc-item">{@icon moveType|l|special}</div>
  <div class="iconDesc-item">
    <b>特殊招式</b><br/>
    特殊招式 會被「特防」數值抵抗。<b>它們永遠會是遠程招式</b>。
  </div>
</div>
<div class="iconDesc-container">
  <div class="iconDesc-item">{@icon moveType|l|support}</div>
  <div class="iconDesc-item">
    <b>變化招式</b><br/>
    變化招式 並不會造成任何直接傷害。
  </div>
</div>

---
#### 機率骰
這標誌代表著該招式的效果是否發動的機率。
標誌上的數字代表著你需要用來擲骰判定的機率骰的數量。

{@icon dice|l|1}{@icon dice|l|2}{@icon dice|l|3}{@icon dice|l|4}{@icon dice|l|5}

如果至少有一個機率骰骰出了 {@icon rdice|s|6|normal} 的結果，那麼該效果就會發動。有時候機率骰會出現在異常狀態框裡面，用來表示造成該異常狀態的機率，如下圖範例所示：
{@icon frame|flinch|畏縮|number|d3}

---
#### 絕不生效/永遠生效
<b style="font-size: 1.5rem;color: #e02a2a;">✖</b>
當某個效果帶有這個標誌，代表該效果的目標絕不會被影響。

<b style="font-size: 1.5rem;color: #4cbb4c;">✔</b>
當某個效果帶有這個標誌，代表該效果的目標永遠會被影響。

這些標誌會出現在效果框之中，如下圖範例所示：

{@icon frame|flinch|畏縮|never} 永遠會畏縮
{@icon frame|flinch|畏縮|always} 絕不會畏縮

---
#### 降低命中率
{@icon frame|accuracy|命中|down|X}

該招式的命中判定將會扣除指定數量的成功骰。
關於更多詳情，請參見「勝利策略」章節。

---
#### 目標
這些標誌說明了誰會受到這個招式的影響。
**綠色**目標標誌 被用於使用者或牠的隊友：
**紅色**目標標誌 被用於敵人：

{@icon target|l|self} 使用者
{@icon target|l|ally} 單體隊友
{@icon target|l|allally} 使用者 & 所有範圍內的隊友

{@icon target|l|foe} 單體敵人
{@icon target|l|rfoe} 隨機敵人
{@icon target|l|allfoe} 所有範圍內的敵人

{@icon target|l|area} 範圍全體
{@icon target|l|field} 戰鬥場地
*以戰鬥場地為目標的招式無法被閃避／對抗。

---
#### 提升/降低標誌
這個招式將會提升或降低指定的特質。

**藍色標誌會調整使用者的特質。**
{@icon frame|self|力量|up|X} {@icon frame|self|力量|down|X} 

**紅色標誌會調整敵人的特質。**
{@icon frame|target|靈巧|up|X} {@icon frame|target|靈巧|down|X} 

箭頭向上 意味著該特質被提升。
箭頭向下 意味著該特質被降低。
「X」代表一個數字，它會告訴你該特質將被提升或降低多少點。

有時候這個標誌的左邊會伴隨著一個機率骰標誌：
 {@icon dice|l|5} {@icon frame|self|物防|up|1}

關於更多詳情，請參見「勝利策略」章節。


---
#### 調整傷害
有些招式和特性能夠造成傷害，或以不同的方式來減輕傷害。
{@icon frame|self|傷害|plus|dX} 增加指定數量的骰子到傷害骰池。
{@icon frame|self|傷害|minus|X} 減少指定數量的傷害。
{@icon frame|target|傷害|number|X} 造成指定數量的傷害。

---
#### 阻擋
{@icon effect|l|block}
目標無法逃跑，且不能被替換下場。

---
#### 蓄能
{@icon effect|l|charge}
使用者需要花費一個行動來為這個招式積蓄能量。
這個招式將在使用者的下一個回合以另一個行動來擲骰判定。

---
#### 拳頭類招式
{@icon effect|l|fist}
這個招式需要使用手或拳頭。

---
#### 治癒
{@icon heal|l} {@icon c_heal|l}
這個招式能夠回復HP。有時候治療量會是個固定的數值：
 
{@icon frame|heal|治療|heal|X} {@icon frame|heal|治療|c_heal|X}
治癒招式會需要使用者花費 1 點意志點來使其生效。
更多關於治癒招式的說明，請參見「勝利策略」。

---
#### 高要害率
{@icon effect|l|crit}
你使用這個招式擊中要害所需的成功骰數比原本少 1 顆。
這個招式會造成致命傷害。關於更多詳情，請參見「勝利策略」章節。

---
#### 致命
{@icon effect|l|lethal}
這個招式會造成致命傷害。關於更多詳情，請參見「勝利策略」章節。

---
#### 必須重新充能
{@icon effect|l|recharge}
在使用這個招式命中目標後，使用者必須在牠下一輪使用牠的第一個行動來休息。

---
#### 必中
{@icon effect|l|neverfail}
這個招式無法被閃避，但可以被對抗。

---
#### 先制/後制
{@icon frame|priority|優先度|up|2} 這個招式忽略先攻順序，並立即生效。
{@icon frame|priority|優先度|down|2} 這個招式會在該戰鬥輪結束時發揮效果，即使它在一開始就被使用也一樣。

關於更多詳情，請參見「勝利策略」章節。

---
#### 狂暴
{@icon effect|l|rampage}
使用者可以不間斷地使用這個招式最多 3 次，即使在同一個戰鬥輪也可以。牠將無法閃避或使用其他招式。在狂暴結束後，**使用者將會陷入「混亂」狀態。**

---
#### 反作用力傷害
{@icon effect|l|recoil}
使用者將會被牠自己的招式所傷。如常對敵人擲骰決定傷害，接著為其每一個成功骰再擲骰一次，決定對自己造成的傷害（無視自己的防禦或特防）。

---
#### 護盾
{@icon effect|l|shield}
如果該寶可夢在下一個戰鬥輪再次施展了護盾招式，該招式的命中判定將會被扣除 2 個成功骰。關於更多護盾招式的詳情，請參見「勝利策略」章節。

---
#### 聲音類招式
{@icon effect|l|sound}
這些招式可以穿過替身、光牆、反射壁、和掩護。

---
#### 異常狀態框
{@icon frame|paralysis|麻痺} {@icon frame|burn1|灼傷1} {@icon frame|burn2|灼傷2} {@icon frame|burn3|灼傷3} {@icon frame|sleep|睡眠} {@icon frame|poison|中毒} {@icon frame|poison2|劇毒} {@icon frame|frozen|冰凍} {@icon frame|flinch|畏縮} {@icon frame|love|著迷} {@icon frame|confuse|混亂}
這個招式可以讓目標陷入異常狀態。
關於各個異常狀態的詳情，請參見「異常狀態」章節。

---
#### 連續行動
{@icon effect|l|sact_2} 雙重行動 (2 次攻擊)
{@icon effect|l|sact_5} 連續行動 (5 次攻擊)

這個招式能讓你在敵人行動前連續施展多重行動。更多關於連續行動的資訊請參見「勝利策略」章節。

---
#### 替換招式
{@icon effect|l|switcher}
**替換招式在每個戰鬥輪中只能被使用一次。**
將一隻在戰場上的寶可夢替換成另一隻仍在精靈球內的寶可夢。

---
#### 天氣變化
這個招式能夠將天氣狀態改變成：
{@icon weather|l|sun} {@icon weather|l|rain} {@icon weather|l|hail} {@icon weather|l|sand}

更多關於天氣的詳情，請參見「天氣狀態」章節。
