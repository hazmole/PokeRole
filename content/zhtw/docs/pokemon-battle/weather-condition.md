+++
title = "天氣狀態"
weight = 5
description = ""
+++

## Weather Conditions & Scenario
Pokémon, their Moves, and Abilities can be enhanced or diminished by Weather Conditions. 
Sunlight, Rain, Snow, and Sandstorms are important factors in the habitat of many Pokémon.

Remember that most of the fights will be located in the wild. From forests and jungles to volcanoes and tundras and even underground or underwater. 

This turns the battlegrounds into a shifting scenario, not just an empty arena. Daytime and location can affect your chances of victory.

There are seven main weather conditions.

<div class="iconDesc-container">
  <div class="iconDesc-item">{@icon weather|l|sun}</div>
  <div class="iconDesc-item">
    <b>大晴天</b><br/>
    Typical in deserts, plains and tropical areas.
  </div>
</div>
<div class="iconDesc-container">
  <div class="iconDesc-item">{@icon weather|l|sun2}</div>
  <div class="iconDesc-item">
    <b>大日照</b><br/>
    Only found in volcanic areas.
  </div>
</div>
<div class="iconDesc-container">
  <div class="iconDesc-item">{@icon weather|l|rain}</div>
  <div class="iconDesc-item">
    <b>下雨</b><br/>
    Common in rainforests, lakesides, and marshes.
  </div>
</div>
<div class="iconDesc-container">
  <div class="iconDesc-item">{@icon weather|l|rain2}</div>
  <div class="iconDesc-item">
    <b>暴風雨 </b><br/>
    Only found in the middle of the sea/underwater.
  </div>
</div>
<div class="iconDesc-container">
  <div class="iconDesc-item">{@icon weather|l|sand}</div>
  <div class="iconDesc-item">
    <b>沙暴 </b><br/>
    Common in arid regions and barren lands.
  </div>
</div>
<div class="iconDesc-container">
  <div class="iconDesc-item">{@icon weather|l|wind}</div>
  <div class="iconDesc-item">
    <b>亂流 </b><br/>
    Only found at great heights in the sky.
  </div>
</div>
<div class="iconDesc-container">
  <div class="iconDesc-item">{@icon weather|l|hail}</div>
  <div class="iconDesc-item">
    <b>冰雹 </b><br/>
    Typical in areas close to cold and snowy places.
  </div>
</div>

There are Pokémon capable of summoning these weather conditions using special Moves. Other Pokémon are reported to have the incredible ability to summon the weather change at will.

You may create other types of weather or battlefield conditions that may make the battle easier or harder depending on how well you can adapt to it.

{{< mynotice story >}}
Make the scenario an important part of the fight.
It can be the ally or the enemy of the players if you enable free battleground interaction.
{{< /mynotice >}}

---
### Weather Conditions Detail
<div class="Frame">

#### <div class='icon weather sun'>Sunny Weather</div>
A bright sunlight shines through the arena. It’s hot, you feel thirsty and tired, the light is hurting your eyes.
* All Fire-Type moves have 1 Extra Die to their  Damage Pools.
* All Water-Type moves get ther total damage reduced by 1.
* No one can be affected by the Frozen Status Condition.
</div>
<div class="Frame">

#### <div class='icon weather sun2'>Harsh Sunlight Weather</div>
A harsh sunlight creates extreme heat through the battlefield, there is lava on the floor and some objects just burst into flames.
You might need special equipment to go through this weather.
* All Fire-Type moves have 1 Extra Die to their  Damage Pools.
* All Water-Type Moves fail to be executed.
* Add 2 dice to any roll of Chance Dice to Burn a foe.
* No one can be affected by the Frozen Status Condition.
* Sunny, Rain, Sandstorm and Hail Weather conditions fail to activate through any means.
</div>
<div class="Frame">

#### <div class='icon weather rain'>Rain Weather</div>
A heavy downpour. You are soaking wet. There’s deep puddles and it feels like this will grow into a raging storm any second.
* All Water-Type moves have 1 Extra Die to their  Damage Pools.
* All Fire-Type moves get ther total damage reduced by 1.
* Moves that become Complete Heal with Sunny weather will only restore 1 HP instead.
* Reduce by 3 the number of successes you need to  heal a Burn Status Condition.
</div>
<div class="Frame">

#### <div class='icon weather rain2'>Typhoon Weather</div>
A great torrent quickly floods the field, in just a matter of seconds everything is underwater and you struggle to stay afloat trough the crashing waves around.
* All Water-Type moves have 1 Extra Die to their  Damage Pools.
* All Fire-Type Moves fail to be executed.
* No one can be affected by the Burn Status Condition.
* Moves that become Complete Heal with Sunny Weather will not restore any HP.
* Sunny, Rain, Sandstorm and Hail Weather conditions  fail to activate through any means.
</div>
<div class="Frame">

#### <div class='icon weather sand'>Sandstorm Weather</div>
A raging wind is blowing sand all over. You can barely open your eyes, it’s had to breath and little sharp rocks pierce your skin.
* Deal 1 damage to all non Rock, Ground or Steel Type Pokémon in the field at the end of the round.
* Increase 1 Point to the Special Defense of all  Rock-Type Pokémon in the field.
* Moves that become Complete Heal with Sunny weather will only restore 1 HP instead.
</div>
<div class="Frame">

#### <div class='icon weather wind'>Strong Winds Weather</div>
Strong wind currents lift and swirl everything in the air, from a tiny pebble to a giant truck. You are either being swept around or falling straight to the floor at a great speed.
* All Flying-Type moves have 1 Extra Die to their Damage Pools.
* Electric, Ice and Rock Type Moves deal neutral damage to Flying-Type Pokémon.
* Entry Hazards (Spikes, etc.), Barriers (Light Screen etc.), and Block Fail to activate.
* Sunny, Rain, Sandstorm and Hail Weather conditions fail to activate through any means.
</div>
<div class="Frame">

#### <div class='icon weather hail'>Hail Weather</div>
Heavy ice shards are falling from the sky. It’s cold, it’s snowy and one of those ice pieces may fall right in your head.
* Deal 1 damage to all non Ice-Type Pokémon in the field at the end of the round.
* Increase 1 Point to the Defense of all Ice Pokémon in the field.
* Moves that become Complete Heal with Sunny weather will only restore 1 HP instead.
</div>

---
### Enviromental Challenges (Optional)
You can add an extra layer of challenge into your battles if you take the environment into account.
Official League Tournaments give each match one or two added challenges in the arenas.

In here we give you some examples of enviromental challenges you can use:

<table>
<tr>
  <td><b>Fog/Darkness</b><br/>(Reduced Visibility) </td>
  <td align="left">All Pokémon in get extra Reduced Accuracy on all their moves.<br/>
      {@icon frame|accuracy|命中|down|1}</td></tr>
<tr>
  <td><b>Muddy</b><br/>(Difficult Terrain) </td>
  <td align="left">All Pokémon have their mobility reduced to half. <br/>
      Pokémon can't get out of Range. </td></tr>
<tr>
  <td><b>On Fire!</b><br/>(Dangerous Hazards) </td>
  <td align="left">At the end of each Round, Roll 3 Chance Dice to Burn everyone in the field. <br/>
      If already Burned, roll to increase the Burn level. </td></tr>
<tr>
  <td><b>Electric Poles</b><br/>(Type-Boosting Elements) </td>
  <td align="left">All Pokémon will add 1 Die to the damage pools of Electric-Type moves.<br/>
      Pokémon don't need to Recharge. </td></tr>
</table>

Feel free to create your own.