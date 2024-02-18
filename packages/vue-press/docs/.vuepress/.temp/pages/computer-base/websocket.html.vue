<template><div><h2 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> websocket</h2>
<p>websocket 是一种网络通信协议，它在单个TCP连接上提供全双工[1]建立在浏览器和服务端之间的通信通道。也就是说建立websocket直到关闭都是在一次TCP连接里进行的。</p>
<h3 id="如何建立websocket" tabindex="-1"><a class="header-anchor" href="#如何建立websocket" aria-hidden="true">#</a> 如何建立websocket</h3>
<p>建立websocket之前，都需要进行一次Http1.1的请求：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> <span class="token operator">/</span>chat <span class="token constant">HTTP</span><span class="token operator">/</span><span class="token number">1.1</span>
<span class="token literal-property property">Connection</span><span class="token operator">:</span> Upgrade
<span class="token literal-property property">Upgrade</span><span class="token operator">:</span> websocket
Sec<span class="token operator">-</span>WebSocket<span class="token operator">-</span>Key<span class="token operator">:</span> Ia3dQjfWrAug<span class="token operator">/</span>6qm7mTZOg<span class="token operator">==</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务端返回：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">HTTP</span><span class="token operator">/</span><span class="token number">1.1</span> <span class="token number">101</span> Switching Protocols
<span class="token literal-property property">Connection</span><span class="token operator">:</span> Upgrade
<span class="token literal-property property">Upgrade</span><span class="token operator">:</span> websocket
Sec<span class="token operator">-</span>WebSocket<span class="token operator">-</span>Accept<span class="token operator">:</span> JkE58n3uIigYDMvC<span class="token operator">+</span>KsBbGZsp1A<span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.双工：双工分为全双工和半双工，全双工是指客户端与服务端可以同时发送和接收信息。与之对应的是半双工，某一个时刻只能有一方进行发送。类似于电话和对讲机，电话是全双工，对讲机是半双工。</p>
</div></template>


