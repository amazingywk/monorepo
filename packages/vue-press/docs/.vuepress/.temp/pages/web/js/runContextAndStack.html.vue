<template><div><h1 id="执行上下文与执行上下文栈" tabindex="-1"><a class="header-anchor" href="#执行上下文与执行上下文栈" aria-hidden="true">#</a> 执行上下文与执行上下文栈</h1>
<h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2>
<p><strong>作用域分为静态作用域与动态作用域，js是采用静态作用域的</strong></p>
<li>静态作用域（也称词法作用域）：函数作用域在定义时就已经决定</li>
<li>动态作用域：函数作用域在执行的时候决定</li>
<h2 id="作用域链" tabindex="-1"><a class="header-anchor" href="#作用域链" aria-hidden="true">#</a> 作用域链</h2>
<p><strong>当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象(全局对象)。</strong>
<strong>这样由多个执行上下文的变量对象构成的链表就叫做作用域链。</strong></p>
<h2 id="执行上下文" tabindex="-1"><a class="header-anchor" href="#执行上下文" aria-hidden="true">#</a> 执行上下文</h2>
<p><strong>是当前JavaScript代码被评估和执行的环境的抽象概念。每当JavaScript代码在运行时，它都是在执行上下文中运行的。</strong></p>
<p>执行阶段有三种类型，与三种可执行代码对应（全局代码、函数代码、eval代码）：</p>
<li>全局执行上下文</li>
<li>函数执行上下文</li>
<li>eval执行上下文</li>
<p>而任何一种上下文都有两个阶段：</p>
<li>创建阶段</li>
<li>执行阶段</li>
<p>js并非是一行一行执行的，而是一块一块执行的，会有变量提升、函数提升，这个提升的“准备过程”就是执行上下文的准备阶段，而代码运行时就是执行阶段。</p>
<h2 id="执行上下文栈" tabindex="-1"><a class="header-anchor" href="#执行上下文栈" aria-hidden="true">#</a> 执行上下文栈</h2>
<p><strong>是存储所有执行上下文调用栈。</strong></p>
<h3 id="例子1" tabindex="-1"><a class="header-anchor" href="#例子1" aria-hidden="true">#</a> 例子1</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">"global scope"</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">"local scope"</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> scope<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>栈模拟处理顺序</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>checkscope<span class="token punctuation">)</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// f()</span>
stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// checkscope()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="例子2" tabindex="-1"><a class="header-anchor" href="#例子2" aria-hidden="true">#</a> 例子2</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">"global scope"</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">"local scope"</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> scope<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>栈模拟处理顺序</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>checkscope<span class="token punctuation">)</span>
stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// checkscope()</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// f()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关联" tabindex="-1"><a class="header-anchor" href="#关联" aria-hidden="true">#</a> <font color=red>*</font>关联</h2>
<h3 id="前置" tabindex="-1"><a class="header-anchor" href="#前置" aria-hidden="true">#</a> 前置</h3>
<p>函数有一个内部属性 <code v-pre>[[scope]]</code>，当函数被创建时，会保存所有父变量对象到其中，可以理解 <code v-pre>[[scope]]</code> 就是所有父变量对象的层级链</p>
<div class="custom-container warning"><p class="custom-container-title">提示</p>
<p><code v-pre>[[scope]]</code> 并不代表完整的作用域链！</p>
</div>
<h4 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...code</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数创建时各自的<code v-pre>[[scope]]</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>foo<span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token punctuation">[</span>scope<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    globalContext<span class="token punctuation">.</span><span class="token constant">VO</span>
<span class="token punctuation">]</span>
bar<span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token punctuation">[</span>scope<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    fooContext<span class="token punctuation">.</span><span class="token constant">AO</span><span class="token punctuation">,</span>
    globalContext<span class="token punctuation">.</span><span class="token constant">VO</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数激活" tabindex="-1"><a class="header-anchor" href="#函数激活" aria-hidden="true">#</a> 函数激活</h4>
<p>当函数激活时，进入函数上下文，创建 VO/AO 后，就会将活动对象添加到作用链的前端。</p>
<p>这时候执行上下文的作用域链,命名为 Scope</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Scope <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token constant">AO</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>Scope<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后,作用域链创建完毕了。
diyitxiadong，disantjindonger，disitshaxiniu，diwutchuyll，diliuqit，dibtzheng，siben，shaniao，quhainan，</p>
<h3 id="用于总结的例子" tabindex="-1"><a class="header-anchor" href="#用于总结的例子" aria-hidden="true">#</a> 用于总结的例子</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">"global scope"</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> scope2 <span class="token operator">=</span> <span class="token string">'local scope'</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> scope2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>执行过程</strong></p>
<ol>
<li>创建checkscope函数,保存作用域链到内部属性<code v-pre>[[scope]]</code></li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>checkscope<span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token punctuation">[</span>scope<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    globalContext<span class="token punctuation">.</span><span class="token constant">VO</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>执行checkscope函数,创建checkscope函数的执行上下文</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ECstack <span class="token operator">=</span> <span class="token punctuation">[</span>
    checkscopeContext<span class="token punctuation">,</span>
    globalcontext
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>准备 checkscopeContext ,复制<code v-pre>[[scope]]</code>属性创建作用域链</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>checkscopeContext <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">Scope</span><span class="token operator">:</span>checkscope<span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token punctuation">[</span>scope<span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>用 arguments 创建活动对象，然后初始化活动对象，<code v-pre>加入形参</code>、<code v-pre>函数声明</code>、<code v-pre>变量声明</code>，<font color=red>可以看到这里scope2为undefined，这个阶段就是执行上下文的准备阶段</font></li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>checkscopeContext <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">AO</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">arguments</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">length</span><span class="token operator">:</span><span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">scope2</span><span class="token operator">:</span><span class="token keyword">undefined</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">Scope</span><span class="token operator">:</span>checkscope<span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token punctuation">[</span>scope<span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>将活动对象压入作用域链顶端</li>
<li>完成准备,执行函数,修改AO的值，<font color=red>执行上下文执行阶段</font></li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>checkscopeContext <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">AO</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">arguments</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">length</span><span class="token operator">:</span><span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">scope2</span><span class="token operator">:</span><span class="token string">'local scope'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">Scope</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token constant">AO</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">[</span>scope<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li>返回查找到scope2的值,函数执行完毕,弹出执行上下文栈</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ECstack <span class="token operator">=</span> <span class="token punctuation">[</span>
    globalcontext
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


