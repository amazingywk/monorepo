<template><div><h1 id="javascript中的类型转换规则" tabindex="-1"><a class="header-anchor" href="#javascript中的类型转换规则" aria-hidden="true">#</a> JavaScript中的类型转换规则</h1>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> [] == ![]</h2>
<p><strong>技巧就是优先转化为Number类型：</strong></p>
<ul>
<li>1、!优先级高于==<br>
过程：![] -&gt; !(Boolean([])) -&gt; !true -&gt; false<br>
结果：[] == false</li>
<li>2、如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值<br>
过程：false -&gt; Number(false) -&gt; 0<br>
结果：[] == 0</li>
<li>3、有一边为对象，另一边不是，则调用对象的valueOf()方法，如果得到的值不是基本类型值，则基于返回值再调用toString方法（这个过程即ToPrimitive）<br>
过程：ToPrimitive([]) -&gt; ''<br>
结果：'' == 0</li>
<li>4、基础类型的判断得到 [] == ![]</li>
</ul>
</div></template>


