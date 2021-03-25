+++
title = "招式效果標記"
weight = 2
description = ""
+++
## Effect Icons
There are many Icons in this Move Encyclopedia. They are a quick reference to show what they target, their  accuracy, and most importantly, their effects. 
Most Moves Icons are self-explainatory and useful.

{{< mynotice trainer >}}
Pay  Attention  to  the  Effects  of your Moves. 
They will be the key for victory if you learn to combine them.
{{< /mynotice >}}

#### 分類圖示
<div class="iconDesc-container">
  <div class="iconDesc-item">{@icon moveType|l|physical}</div>
  <div class="iconDesc-item">
    <b>物理招式</b><br/>
    Physical Moves are resisted with Defense. <b>They are close range attacks</b>.<br/>Some can be long range, labeled as <u>Ranged</u>. 
  </div>
</div>
<div class="iconDesc-container">
  <div class="iconDesc-item">{@icon moveType|l|special}</div>
  <div class="iconDesc-item">
    <b>特殊招式</b><br/>
    Special Moves are resisted with Special Defense. <b>They are always long range</b>. 
  </div>
</div>
<div class="iconDesc-container">
  <div class="iconDesc-item">{@icon moveType|l|support}</div>
  <div class="iconDesc-item">
    <b>變化招式</b><br/>
    Support Moves don’t deal any direct Damage.
  </div>
</div>

---
#### 機率骰
The  probability  at  which  a  Move’s  Effect  is  activated. 
The number marked on the Icon is the amount of Chance Dice you will Roll.

{@icon dice|l|1}{@icon dice|l|2}{@icon dice|l|3}{@icon dice|l|4}{@icon dice|l|5}

At  least  one  Chance  Dice  must  come  up  as  {@icon rdice|s|6|normal},  if  it does, the Effect will be triggered. Sometimes a Chance Dice Icon will be inside a Status Ailment Box to show the chance to inflict that Ailment, here’s an example:
{@icon frame|flinch|畏縮|number|d3}

---
#### 絕不生效/永遠生效
<b style="font-size: 1.5rem;color: #e02a2a;">✖</b>
When an effect has this Icon, the target of that effect will never be affected.

<b style="font-size: 1.5rem;color: #4cbb4c;">✔</b>
When an effect has this Icon, the target of that effect will always be affected.

These Icons will be inside a Box with an effect. Here’s an example:

{@icon frame|flinch|畏縮|never} 永遠會畏縮
{@icon frame|flinch|畏縮|always} 絕不會畏縮

---
#### 降低命中率
{@icon frame|accuracy|命中|down|X}

Reduce the noted number of successes from the Move’s Accuracy Roll.
For more info, see p.51

---
#### 目標
These Icons illustrate who’ll be affected by the Move.
**Green** Target Icons are used for the User or its Allies:
**Red** Target Icons are used for Foes:

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
The Move will Increase or Decrease the noted Trait.
Arrow Up means the Attribute is Increased.
Arrow Down means the Attribute is Decreased.

**Blue Icons will modify the User’s Traits.**
{@icon frame|self|力量|up|X} {@icon frame|self|力量|down|X} 

**Red Icons will modify the Foe’s Traits.**
{@icon frame|target|靈巧|up|X} {@icon frame|target|靈巧|down|X} 

“X” represents a number, it will tell you how many points will be modified, Sometimes they are accompanied by a Chance Dice placed to their left:
 {@icon dice|l|5} {@icon frame|self|物防|up|1}

For more info, see p.52

---
#### 調整傷害
Some Moves and Abilities deal damage and allow to resist damage in a different way.
{@icon frame|self|傷害|plus|dX} Add the noted number of dice to the Damage Pool.
{@icon frame|self|傷害|minus|X} Reduce the noted number of Damage.
{@icon frame|target|傷害|number|X} Inflict the noted number of Damage.

---
#### 阻擋
{@icon effect|l|block}
目標無法逃跑，且不能被替換下場。


---
#### 蓄能
{@icon effect|l|charge}
The User spends one action charging the Move. 
The Move is rolled with another action on its next turn.


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
Score a Critical Hit with 1 success less than required.
For more info, see p.52

---
#### 致命
{@icon effect|l|lethal}
The Move inflicts Lethal Damage. For more Info, see p.53

---
#### 必須重新充能
{@icon effect|l|recharge}
After hitting with this Move, the User must rest with its first Action on the next Round.

---
#### 必中
{@icon effect|l|neverfail}
這個招式無法被閃避，但可以被對抗。


---
#### 先制/後制
{@icon frame|priority|優先度|up|2} The Move ignores Initiative Order and  acts right away.
{@icon frame|priority|優先度|down|2} The Move takes effect at the End of the Round, even if it’s used at the beginning.

For more info, see p. 53

---
#### 狂暴
{@icon effect|l|rampage}
The  User  may  use  this  Move  up  to  3  times  without  interruption,  even  during  the  same  Round.  It  cannot  Evade or perform another Move. After the Rampage is over, **the user will be Confused**.


---
#### 反作用力傷害
{@icon effect|l|recoil}
The  user  will  be  hurt  by  its  own  Move.  Roll  damage  normally  against  the  foe,  then  roll  again  each  success you scored as damage to the User ignoring its defenses.


---
#### 護盾
{@icon effect|l|shield}
If the Pokemon performs another Shield Move during the next Round, that Move’s Accuracy Roll is reduced by 2 successes.  For more info, see p.54


---
#### 聲音類招式
{@icon effect|l|sound}
這些招式可以穿過替身、光牆、反射壁、和掩護。


---
#### 異常狀態框
{@icon frame|paralysis|麻痺} {@icon frame|burn1|灼傷1} {@icon frame|burn2|灼傷2} {@icon frame|burn3|灼傷3} {@icon frame|sleep|睡眠} {@icon frame|poison|中毒} {@icon frame|poison2|劇毒} {@icon frame|frozen|冰凍} {@icon frame|flinch|畏縮} {@icon frame|love|著迷} {@icon frame|confuse|混亂}
The Move inflicts a Status Ailment.
Each Status Ailment is described on detail on p.57

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

更多關於天氣的說明，請參見「天氣狀態」章節。
