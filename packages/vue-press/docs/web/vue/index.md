### Vue
当一个vue实例被创建时，vue会去将data里面所有的属性用Object.definedProperty（proxy）来将他们转化为响应式，添加setter与getter，在属性被访问和修改时 通知变化。

每个组件实例都有相对应的watcher程序实例，它会在组件渲染的过程属性当作依赖，然后当依赖项的setter发生改变时，会通知watcher重新计算component render function，然后再生成新的虚拟vitral Dom树，再根据diff算法



**vue工作流程**

结合举例：
```js
new Vue({
  data: {
    a: 1
  },
  computed: {
    b: function() {
      return this.a + 1;
    }
  }
});
```

1.初始化阶段
  在我们创建一个vue实例时，vue会通过init方法进行初始化，包括生命周期、事件、props、methods、<font color=red>data、computed</font>以及watch等  
  而在初始化data和computed过程中，vue会通过Observer类，这个类通过Object.defineProperty（vue3中为proxy）将属性转化为响应式，即getter/setter。但是计算属性初始化时会立即计算一次对应的值，这里例子中会立即计算b，从而需要a，调用a的getter。在a的getter中，vue会检查当前是否有正在计算的wathcer（Dep.target），如果有，就将这个watcher放入a的Dep中。立即计算一次也是为了达到这个目的，从而实现依赖收集。

2.挂载

3.运行阶段
  一个属性a发生变化时，会去调用a的setter，setter会调用Dep.notify()（这个方法会遍历Dep内部所有watcher并调用它们的update方法），watcher将自己添加到一个异步队列中，等待vue批量更新，更新时vue会去调用队列中所有watcher的run方法。在run方法中，watcher去重新计算值。

4.


### 双向绑定

```js
<input v-model="message">
```

Vue实现双向绑定主要依赖于Observer、Watcher和Compile三者的配合。
Observer是负责将变量转化为响应式，即实现getter、setter（为属性创建Dep实例）
Compile负责解析模版指令，将模版中变量和数据绑定起来，并为之创建一个Watcher，并放在属性的Dep中