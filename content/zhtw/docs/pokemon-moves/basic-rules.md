+++
title = "招式的規則"
weight = 1
description = ""
+++
## Pokemon Moves
<div class="quote">
	It’s more important to master the cards you’re holding than to complain about the ones your opponents were dealt.
	<div class="author">-Grimsley</div>
</div>

Pokémon inhabit the vast majority of this world and they protect  themselves  using  wondrous  powers.  They  are able to call upon a certain kind of energy and shape it to attack foes or weaken them; some Pokémon can even use their powers to strengthen or heal themselves and others.

These powers are known as Moves.

All Pokémon have a hidden greatness that lies dormant. Especially your companions.
In the wild, Pokémon will learn new Moves as they grow in age or experience, however, a skilled Trainer will be able to bring out the max potential of any Pokémon.
Remember,  your  Pokémon  are  a  reflection  of  you  as  a Trainer, the Rank you are in will unlock more Moves for your companions.


Just like Pokémon, there are 18 Types of Moves.

Each Type has a unique way of fighting and solving their problems. The most powerful trainers find a Type that matches their way of thinking and facing challenges as a means to be in synch with their Pokémon and have an easier time to bond with them.

All  Move  descriptions  were  written  by  the  League  and  explain their use in Battle. However, Moves are originally  used for survival and convenience; even attacking Moves. Through  these  powers  your  Pokémon  shapes  its  world and so should you, because Battle is just an aspect of what it means to be a Trainer.

**Find creative uses for your Pokémon Moves.**

{{< boxmd >}}
## Basic Rules for Moves  
* Pokémon  may  only  learn  moves  from  their Rank or lower. Unless they Overank p. 73
* The limit to the amount of Moves a Pokémon is able to learn is equal to its Insight Score + 2.
* During  a  Training  Session  a  Move  can  be  replaced by another one the Pokémon is able to learn.
* An  Evolved  Pokémon  can’t  learn  a  Move  exclusive to a previous stage, but it may keep it if it got that Move before evolving.
{{< /boxmd >}}

{{< boxmd >}}
## Rules for Moves during Battle
* Moves can only be used during the Pokémon’s Turn and during a Clash. 
* A Move can be used only ONCE each round. 
(Clashing counts as using the Move) 
* Moves that use a Social Attribute (Cool, Cute, Tough,  Smart,  Beauty)  for  Accuracy  can’t  be evaded or clashed.
* Moves  with  “All  Foes  in  Range”  and  “User and Allies in Range” affect a number of targets specified in your Rank. p. 30
* Who’s hit by an Area Move is decided by the Storyteller. You may hit your Allies!
{{< /boxmd >}}

---
## Reading a Moves
All  Moves  are  presented  with  graphical  elements  and text. They are divided in 9 sections.

{{< img src="/images/11-01-pokemon-move.JPG" height="300" position="center" selflink="true" >}}

1. **Name of the Move**
2. **Power** - Number of Dice added to the Damage Roll. 
3. **Category Icon** - Physical, Special or Support.
4. **Type** - See The Different Pokémon Types on p.42
5. **Accuracy** - Traits used to perform this Move.
6. **Damage Pool** - Attribute + Power + Modifiers.
7. **Additional Info** - Most Moves have unique effects.
8. **Effect Icons** - They are a quick reference as to what the Move does in battle. 
9. **Move Description**s - It will tell you what you need to know about using this Move inside or outside a Battle. 


---
## Typeless Maneuvers
Not every attack is a Move. Sometimes you will fight with simple **Typeless Maneuvers.**
Since they don’t use energy, **Typeless Maneuvers can’t be  used  to  clash**,  but  other  than  that  they  share  the same rules as Moves whe used in-battle:
* Maneuvers can only be used on the user’s Turn.
* Can only be used once per Round.
 
Battle Maneuvers can be used for attacking or defending, and they also have a lot of use outside of battle. Since **anyone can perform them, Humans and Pokémon**, they can enrich your strategy. 
Feel free to create you own.

<div class="Move">
	<div class="MoveHeader">
		<div class="title">Struggle</div>
		<div class="power">0</div>
		<div class="type"><tag class="moveType hybrid"></tag></div>
	</div>
	<div class="MoveIconBar">{@icon target|l|foe}</div>
	<div class="MoveContent">
		<div class="Type">None</div>
		<div class="Accuracy">Dexterity + Brawl/Channel</div>
		<div class="Damage">Strength/Special + 0</div>
		<div class="Additional"></div>
	</div>
	<div class="MoveDesc"></div>
</div>
<div class="Move">
	<div class="MoveHeader">
		<div class="title">Grapple</div>
		<div class="power">-</div>
		<div class="type"><tag class="moveType support"></tag></div>
	</div>
	<div class="MoveIconBar">{@icon target|l|foe}{@icon effect|l|block}</div>
	<div class="MoveContent">
		<div class="Type">None</div>
		<div class="Accuracy">Strength + Brawl</div>
		<div class="Damage">None</div>
		<div class="Additional">
			The foe is Blocked.<br/>
			Foe can resist this Maneuver by rolling their Strength or Dexterity score and scoring the same or more successes than the user.</div>
	</div>
</div>
<div class="Move">
	<div class="MoveHeader">
		<div class="title">Help Another</div>
		<div class="power">-</div>
		<div class="type"><tag class="moveType support"></tag></div>
	</div>
	<div class="MoveIconBar">{@icon target|l|ally}</div>
	<div class="MoveContent">
		<div class="Type">None</div>
		<div class="Accuracy">Varies</div>
		<div class="Damage">None</div>
		<div class="Additional">
			Roll your Accuracy as if it was Chance Dice. If Successful, add one die to the Action of an Ally. Up to 6 dice may be added this way.</div>
	</div>
</div>
<div class="Move">
	<div class="MoveHeader">
		<div class="title">掩護隊友</div>
		<div class="power">-</div>
		<div class="type"><tag class="moveType support"></tag></div>
	</div>
	<div class="MoveIconBar">{@icon target|l|ally}</div>
	<div class="MoveContent">
		<div class="Type">無</div>
		<div class="Accuracy">無</div>
		<div class="Damage">無</div>
		<div class="Additional">
			The user will provide cover to the target from Ranged attacks and is more likely to be hit by close-range attacks. The level of Cover the user provides will depend of its size.</div>
	</div>
</div>
<div class="Move">
	<div class="MoveHeader">
		<div class="title">Stabilize an Ally</div>
		<div class="power">-</div>
		<div class="type"><tag class="moveType support"></tag></div>
	</div>
	<div class="MoveIconBar">{@icon target|l|ally}</div>
	<div class="MoveContent">
		<div class="Type">None</div>
		<div class="Accuracy">Clever + Medicine</div>
		<div class="Damage">None</div>
		<div class="Additional">
			The User applies CPR and/or first aid to an unconcious Ally.<br/>
			Target won’t receive Lethal Damage each hour anymore. Each Lethal Damage on the Ally reduces 1 Success to the Accuracy Pool of this Maneuver.</div>
	</div>
</div>
<div class="Move">
	<div class="MoveHeader">
		<div class="title">Run Away</div>
		<div class="power">-</div>
		<div class="type"><tag class="moveType support"></tag></div>
	</div>
	<div class="MoveIconBar">{@icon target|l|self}</div>
	<div class="MoveContent">
		<div class="Type">None</div>
		<div class="Accuracy">Dexterity + Athletic</div>
		<div class="Damage">None</div>
		<div class="Additional">
			The User runs away from the battlefield. This effect ends the battle. <br/>
			Foes might try to prevent this by rolling: Dexterity + Athletic and scoring the same or more successes. If the user is Blocked this Maneuver fails.</div>
	</div>
</div>


---
## Technical Machines (Optional)
If you’re lucky you can find/buy discs containing guides to  teach  any  Move  to  a  Pokémon  called  Technical  Machines or TM’s for short. 
Whoever  wrote  these  guides  is  an  incredible  Pokémon  expert  that  will  give  you  great  tips  to  get  almost  any move  you  want  on  your  Pokémon,  it’s  not  for  cheap, though, TM’s prices range from $1000 to $5000.

Which  Move  is  contained  inside  the  disc  and  which  Pokémon may learn from it is up to the Storyteller. 
**Teaching  a  Move  by  TM  must  be  done  on  a  Training Session.**

{{< mynotice story >}}
Pokémon  can  learn  a  variety of  TM’s,  some  of  the  Moves in  them  will  be  a  different Type than the Pokémon being taught.
{{< /mynotice >}}


---
## Miscellaneous
### ⬛ Fling/Natural Gift
This Move’s Type and Power can vary wildly. 

###### Power
Foul Berries aren’t very strong, but delicious Berries are quite powerful. 
Power ranges from 0 to 3.

###### Flavor - Type
* Spicy    -  Fire
* Juicy    -  Water
* Fresh    -  Grass
* Sour    -  Electric
* Oily    -  Fighting
* Frozen   -  Ice
* Rotten   -  Poison
* Dry    -  Ground
* Effervescent  -  Flying
* Numbing  -  Psychic
* Half eaten  -  Bug
* Tough    -  Rock
* Withered  -  Ghost
* Uneatable  -  Dragon
* Bitter    -  Dark
* Salty    -  Steel
* Sugary   -  Fairy


### ⬛ Secret Power/Nature Power
The  Pokémon  absorbs  and  redirects  the  properties  of its environment onto the target. In the case of Nature Power, the move also changes type accordingly at storyteller’s discretion.

* **Close to a Building:**
Redirect the electric current to inflict Paralysis.

* **Close to a Cave:**
Redirect the rubble to hit and Flinch the foe.

* **Close to a Desert or Road:**
Rediret the dust on the terrain to Reduce 1 success from the Accuracy rolls of the target.

* **Close to Grass:**
Redirect the bug and grass powder left in the terrain to inflict Sleep.

* **Close to Snow:**
Redirect the cold wind to Freeze the Foe.

* **Close to Water:**
Redirect a pool of water to engulf the foe, reducing 1 point to their Strength as it tries to fight underwater.


### ⬛ Relationship between Attributes and Moves
As you probably noticed, the effectiveness of some Moves is greatly influenced by your Attributes. Some of them allow you to run faster, such as Quick Attack or Extreme Speed, while others require you to lift certain weight, such as Sky Drop or Rock Throw. But just how fast or how strong is your Pokémon? 

The  following  charts  describe  the  maximum  Lifting  Capacity  and  maximum  Speed  for  humans  and  most  Pokémon. Please note that some species may lift more or less weight, or move faster or slower. As always the Storyteller has the final word on this topic.

##### Strength Chart (Lifting Capacity)
* Each point in the Athletic Skill adds 8 lb / 4 kg to the Lifting Capacity.
* Lifting Capacity is affected by Pain Penalizations.
<table>
	<tr><td>●○○○○ ○○○○○</td><td>40 lb/18 kg</td></tr>
	<tr><td>●●○○○ ○○○○○</td><td>100 lb/45 kg</td></tr>
	<tr><td>●●●○○ ○○○○○</td><td>250 lb/113 kg</td></tr>
	<tr><td>●●●●○ ○○○○○</td><td>400 lb/181 kg</td></tr>
	<tr><td>●●●●● ○○○○○</td><td>650 lb/294 kg</td></tr>
	<tr><td>●●●●● ●○○○○</td><td>800 lb/362 kg</td></tr>
	<tr><td>●●●●● ●●○○○</td><td>900 lb/408 kg</td></tr>
	<tr><td>●●●●● ●●●○○</td><td>1000 lb/453 kg</td></tr>
	<tr><td>●●●●● ●●●●○</td><td>1200 lb/544 kg</td></tr>
	<tr><td>●●●●● ●●●●●</td><td>1500 lb/680 kg</td></tr>
</table>


##### Dexterity Chart (Maximum Speed)
* Each point in the Athletic Skill adds 1.4 mi / 2km per hour to the Maximum Speed.
* Pain Penalizations reduce your Speed: 
  * At Half HP you can only walk; 
  * At 1 HP remaining, you can only crawl.
* Lifting someone or something halves your Speed, unless you can lift twice the weight of what you’re carrying.
<table>
	<tr><td>●○○○○ ○○○○○</td><td>6 mph/10 kmph</td></tr>
	<tr><td>●●○○○ ○○○○○</td><td>12 mph/20 kmph</td></tr>
	<tr><td>●●●○○ ○○○○○</td><td>15 mph/25 kmph</td></tr>
	<tr><td>●●●●○ ○○○○○</td><td>18 mph/30 kmph</td></tr>
	<tr><td>●●●●● ○○○○○</td><td>24 mph/40 kmph</td></tr>
	<tr><td>●●●●● ●○○○○</td><td>31 mph/60 kmph</td></tr>
	<tr><td>●●●●● ●●○○○</td><td>49 mph/80 kmph</td></tr>
	<tr><td>●●●●● ●●●○○</td><td>62 mph/100 kmph</td></tr>
	<tr><td>●●●●● ●●●●○</td><td>80 mph/130 kmph</td></tr>
	<tr><td>●●●●● ●●●●●</td><td>99 mph/160 kmph</td></tr>
</table>
