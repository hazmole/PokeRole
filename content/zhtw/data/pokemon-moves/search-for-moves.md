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
{{< script "moves-fairy.js" >}}

<script type="text/javascript">
  var SearchType="Move";
  window.addEventListener("parsePage", ()=>{
    TocInjector.parsePage("Move");
  });

</script>