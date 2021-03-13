+++
title = "招式效果標籤"
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

#### Category Icon
<div class="iconDesc-container">
  <div class="iconDesc-item">{@icon moveType|l|physical}</div>
  <div class="iconDesc-item">
    <b>Physical</b><br/>
    Physical Moves are resisted with Defense. <b>They are close range attacks</b>.<br/>Some can be long range, labeled as <u>Ranged</u>. 
  </div>
</div>
<div class="iconDesc-container">
  <div class="iconDesc-item">{@icon moveType|l|special}</div>
  <div class="iconDesc-item">
    <b>Special</b><br/>
    Special Moves are resisted with Special Defense. <b>They are always long range</b>. 
  </div>
</div>
<div class="iconDesc-container">
  <div class="iconDesc-item">{@icon moveType|l|support}</div>
  <div class="iconDesc-item">
    <b>Support</b><br/>
    Support Moves don’t deal any direct Damage.
  </div>
</div>

---
#### Chance Dice
The  probability  at  which  a  Move’s  Effect  is  activated. 
The number marked on the Icon is the amount of Chance Dice you will Roll.

{@icon dice|l|1}{@icon dice|l|2}{@icon dice|l|3}{@icon dice|l|4}{@icon dice|l|5}

At  least  one  Chance  Dice  must  come  up  as  {@icon rdice|s|6|normal},  if  it does, the Effect will be triggered. Sometimes a Chance Dice Icon will be inside a Status Ailment Box to show the chance to inflict that Ailment, here’s an example:
{@icon frame|flinch|畏縮|number|d3}

---
#### Never/Always Affected
<b style="font-size: 1.5rem;color: #e02a2a;">✖</b>
When an effect has this Icon, the target of that effect will never be affected.

<b style="font-size: 1.5rem;color: #4cbb4c;">✔</b>
When an effect has this Icon, the target of that effect will always be affected.

These Icons will be inside a Box with an effect. Here’s an example:

{@icon frame|flinch|畏縮|never} Always Flinches
{@icon frame|flinch|畏縮|always} Never Flinches

---
#### Reduced Accuracy
{@icon frame|accuracy|命中|down|X}

Reduce the noted number of successes from the Move’s Accuracy Roll.
For more info, see p.51

---
#### Target
These Icons illustrate who’ll be affected by the Move.
**Green** Target Icons are used for the User or its Allies:
**Red** Target Icons are used for Foes:

{@icon target|l|self} User
{@icon target|l|ally} One Ally
{@icon target|l|allally} User & All Allies in Range

{@icon target|l|foe} Foe 
{@icon target|l|rfoe} Random Foe
{@icon target|l|allfoe} All Foes in Range

{@icon target|l|area} Area 
{@icon target|l|field} Battlefield 
*Moves targeted at the Battlefield can’t be evaded/clashed.

---
#### Increase/Reduce Box
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
#### Modified Damage
Some Moves and Abilities deal damage and allow to resist damage in a different way.
{@icon frame|self|傷害|plus|dX} Add the noted number of dice to the Damage Pool.
{@icon frame|self|傷害|minus|X} Reduce the noted number of Damage.
{@icon frame|target|傷害|number|X} Inflict the noted number of Damage.

---
#### Block
{@icon effect|l|block}
The target can’t escape and can’t be switched back.


---
#### Charge
{@icon effect|l|charge}
The User spends one action charging the Move. 
The Move is rolled with another action on its next turn.


---
#### Fist Based
{@icon effect|l|fist}
The Move requires hands or fists.


---
#### Heal
{@icon heal|l} {@icon c_heal|l}
The Move can Heal HP. Sometimes it’s a fixed number:
 
{@icon frame|heal|治療|heal|X} {@icon frame|heal|治療|c_heal|X}
Heaing Moves cost 1 Will Point to activate.
For more info, see p.54


---
#### High Crit
{@icon effect|l|crit}
Score a Critical Hit with 1 success less than required.
For more info, see p.52

---
#### Lethal
{@icon lethal|l}
The Move inflicts Lethal Damage. For more Info, see p.53

---
#### Must Recharge
{@icon effect|l|recharge}
After hitting with this Move, the User must rest with its first Action on the next Round.

---
#### Never Fail
{@icon effect|l|neverfail}
This Move cannot be Evaded, but can be Clashed.


---
#### Priority/ Low Priority
{@icon frame|priority|優先度|up|2} The Move ignores Initiative Order and  acts right away.
{@icon frame|priority|優先度|down|2} The Move takes effect at the End of the Round, even if it’s used at the beginning.

For more info, see p. 53

---
#### Rampage
{@icon effect|l|rampage}
The  User  may  use  this  Move  up  to  3  times  without  interruption,  even  during  the  same  Round.  It  cannot  Evade or perform another Move. After the Rampage is over, **the user will be Confused**.


---
#### Recoil
{@icon effect|l|recoil}
The  user  will  be  hurt  by  its  own  Move.  Roll  damage  normally  against  the  foe,  then  roll  again  each  success you scored as damage to the User ignoring its defenses.


---
#### Shield
{@icon effect|l|shield}
If the Pokemon performs another Shield Move during the next Round, that Move’s Accuracy Roll is reduced by 2 successes.  For more info, see p.54


---
#### Sound Based
{@icon effect|l|sound}
These  Moves  bypass  Substitute,  Light  Screen,  Reflect, and Cover.



---
#### Status Condition Box
{@icon frame|paralysis|麻痺} {@icon frame|burn1|灼傷1} {@icon frame|burn2|灼傷2} {@icon frame|burn3|灼傷3|never} {@icon frame|sleep|睡眠} {@icon frame|poison|中毒} {@icon frame|poison2|劇毒} {@icon frame|frozen|冰凍} {@icon frame|flinch|畏縮} {@icon frame|love|著迷} {@icon frame|confuse|混亂}
The Move inflicts a Status Ailment.
Each Status Ailment is described on detail on p.57

---
#### Succesive Actions
{@icon effect|l|sact_2} Double Action (2 Attacks)
{@icon effect|l|sact_5} Succesive Action (5 Attacks)

The  Move  allows  you  to  perform  Multiple  Actions  in  succession before the foe can act. More info, see p.55

---
#### Switcher Move
{@icon effect|l|switcher}
**Only one Switcher Move may be used per round.**
Switch a Pokémon in the battlefield for one of its allies still on their Pokeball. 


---
#### Weather
The Move changes the weather to:
{@icon weather|l|sun} {@icon weather|l|rain} {@icon weather|l|hail} {@icon weather|l|sand}

For more info, see p. 55
