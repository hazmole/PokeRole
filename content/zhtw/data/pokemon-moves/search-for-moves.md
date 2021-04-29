+++
title = "[招式查詢器]"
weight = 1
+++

# 招式查詢器
<div id="SearchPanel"></div>

---

<div id="MoveList"></div>

{{< script "moves-normal.js" >}}
{{< script "moves-bug.js" >}}
{{< script "moves-dark.js" >}}
{{< script "moves-dragon.js" >}}
{{< script "moves-electric.js" >}}
{{< script "moves-fairy.js" >}}
{{< script "moves-fighting.js" >}}
{{< script "moves-fire.js" >}}
{{< script "moves-flying.js" >}}
{{< script "moves-ghost.js" >}}
{{< script "moves-grass.js" >}}
{{< script "moves-ground.js" >}}
{{< script "moves-ice.js" >}}
{{< script "moves-poison.js" >}}
{{< script "moves-rock.js" >}}

<script type="text/javascript">
  var SearchType="Move";
  window.addEventListener("parsePage", ()=>{
    TocInjector.parsePage("Move");
  });

</script>