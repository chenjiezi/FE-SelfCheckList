- 如果要判断一个运行中函数的 this 绑定，就需要找到这个函数的直接调用位置。找到之后就可以顺序应用下面这四条规则来判断 this 的绑定对象。
  - **四个规则进行排序：new绑定>显式绑定>隐式绑定>默认绑定**

  1. 函数是否在 new 中调用（new 绑定）？如果是的话 this 绑定的是新创建的对象。var bar = new foo()
  2. 函数是否通过 call、apply（显式绑定）或者硬绑定调用？如果是的话，this 绑定的是指定的对象。 var bar = foo.call(obj2)
  3. 函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，this 绑定的是那个上下文对象。var  demo2= obj.foo()
  4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 undefined，否则绑定到全局对象。  demo();
- **怎么改变 this 指向**
  - 在函数内部使用 _this = this
  - 使用 ES6 的箭头函数
  - 使用 call、apply、bind
  - new 实例化一个对象
- 文献
  - [this、call、apply、bind](https://juejin.cn/post/6844903496253177863)
  - https://zhuanlan.zhihu.com/p/28536635