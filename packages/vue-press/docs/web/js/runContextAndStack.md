# 执行上下文与执行上下文栈
## 作用域
**作用域分为静态作用域与动态作用域，js是采用静态作用域的**
<li>静态作用域（也称词法作用域）：函数作用域在定义时就已经决定</li>
<li>动态作用域：函数作用域在执行的时候决定</li>

## 作用域链
**当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象(全局对象)。**
**这样由多个执行上下文的变量对象构成的链表就叫做作用域链。**

## 执行上下文
**是当前JavaScript代码被评估和执行的环境的抽象概念。每当JavaScript代码在运行时，它都是在执行上下文中运行的。**

执行阶段有三种类型，与三种可执行代码对应（全局代码、函数代码、eval代码）：
<li>全局执行上下文</li>
<li>函数执行上下文</li>
<li>eval执行上下文</li>

而任何一种上下文都有两个阶段：
<li>创建阶段</li>
<li>执行阶段</li>

js并非是一行一行执行的，而是一块一块执行的，会有变量提升、函数提升，这个提升的“准备过程”就是执行上下文的准备阶段，而代码运行时就是执行阶段。

## 执行上下文栈
**是存储所有执行上下文调用栈。**

### 例子1
```js
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();
```
**栈模拟处理顺序**
```js
stack.push(checkscope)
stack.push(f)
stack.pop() // f()
stack.pop() // checkscope()
```

### 例子2
```js
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();
```
**栈模拟处理顺序**
```js
stack.push(checkscope)
stack.pop() // checkscope()
stack.push(f)
stack.pop() // f()
```

## <font color=red>*</font>关联
### 前置
函数有一个内部属性 ``[[scope]]``，当函数被创建时，会保存所有父变量对象到其中，可以理解 ``[[scope]]`` 就是所有父变量对象的层级链
:::warning 提示
``[[scope]]`` 并不代表完整的作用域链！
:::

#### 例子
```js
function foo() {
    function bar() {
        // ...code
    }
}
```
函数创建时各自的``[[scope]]``
```js
foo.[[scope]] = [
    globalContext.VO
]
bar.[[scope]] = [
    fooContext.AO,
    globalContext.VO
]
```

#### 函数激活
当函数激活时，进入函数上下文，创建 VO/AO 后，就会将活动对象添加到作用链的前端。

这时候执行上下文的作用域链,命名为 Scope
```js
Scope = [AO].concat([[Scope]]);
```
然后,作用域链创建完毕了。
diyitxiadong，disantjindonger，disitshaxiniu，diwutchuyll，diliuqit，dibtzheng，siben，shaniao，quhainan，
### 用于总结的例子
```js
var scope = "global scope";
function checkscope(){
    var scope2 = 'local scope';
    return scope2;
}
checkscope();
```
**执行过程**
1. 创建checkscope函数,保存作用域链到内部属性``[[scope]]``
```js
checkscope.[[scope]] = {
    globalContext.VO
}
```
2. 执行checkscope函数,创建checkscope函数的执行上下文
```js
ECstack = [
    checkscopeContext,
    globalcontext
]
```
3. 准备 checkscopeContext ,复制``[[scope]]``属性创建作用域链
```js
checkscopeContext = {
    Scope:checkscope.[[scope]]
}
```
4. 用 arguments 创建活动对象，然后初始化活动对象，``加入形参``、``函数声明``、``变量声明``，<font color=red>可以看到这里scope2为undefined，这个阶段就是执行上下文的准备阶段</font>
```js
checkscopeContext = {
    AO:{
        arguments:{
            length:0
        },
        scope2:undefined
    },
    Scope:checkscope.[[scope]]
}
```
5. 将活动对象压入作用域链顶端
6. 完成准备,执行函数,修改AO的值，<font color=red>执行上下文执行阶段</font>
```js
checkscopeContext = {
    AO:{
        arguments:{
            length:0
        },
        scope2:'local scope'
    },
    Scope:[AO,[[scope]]]
}
```
7. 返回查找到scope2的值,函数执行完毕,弹出执行上下文栈
```js
ECstack = [
    globalcontext
]
```