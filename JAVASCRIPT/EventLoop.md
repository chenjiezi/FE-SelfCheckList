# 事件循环

- **浏览器中的事件循环（Event Loop）**
  - 事件循环是js的运行机制，涉及这个过程的有**任务队列**和主线程中的**调用栈**。
  - 调用栈

    - 调用栈（call-stack）采用的是后进先出的规则，所有的任务都会被放到调用栈等待主线程执行。
  - 任务队列

    - 任务队列（Task Queue），即队列，是一种先进先出的数据结构，主线程从"任务队列"中读取事件，这个过程是循环不断的。
  - 同步任务和异步任务

    - JavaScript 单线程任务被分为**同步任务**和**异步任务**，同步任务会在调用栈中按照顺序等待主线程依次执行，异步任务会在异步任务有了结果后，将注册的回调函数放入任务队列中等待主线程空闲时候（调用栈被清空),被读取到栈内等待主线程的执行。
  - 在`JavaScript`中，异步任务被分为两种，一种宏任务（`MacroTask`），一种叫微任务（`MicroTask`）；微任务的优先级要比宏任务的优先级高，也就是说微任务要先执行，然后在执行宏任务。
    - 宏任务（Macro Task）
      -  script标签中包含整体的代码块、setTimeout、setInterval、setImmediate（仅IE10支持）、I/O（文件读写、ajax操作）、UI Rendering
    - 微任务（Micro Task）
      - Promise、Node独有的Process.nextTick、Object.observe（废弃）、Mutation Observer（监听DOM变化的事件）
  - 事件循环的执行过程
    - 执行栈在执行完**同步任务**后，会查看执行栈是否为空，如果执行栈为空，就会去检查**微任务队列**是否为空，如果不为空，就将微任务队列中的所有微任务一次性执行；如果为空，就执行宏任务；
    - 每次当**宏任务**执行完毕后，检查**微任务队列**是否为空，如果不为空的话，会按照先进先出的规则全部执行完微任务，再进入下轮循环，执行宏任务，直到微任务队列和宏任务队列都为空

- **node中的Event Loop（未）**

- 文献

  - [一次弄懂Event Loop（彻底解决此类面试问题）](https://juejin.cn/post/6844903764202094606?utm_source=gold_browser_extension%3Futm_source%3Dgold_browser_extension)
  - [JavaScript 运行机制详解：再谈Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)

**做题集**

- [Eventloop不可怕，可怕的是遇上Promise](https://juejin.cn/post/6844903808200343559)

- [你真的懂promise吗？promise then执行先后顺序，高手解答一下。附上题目](https://segmentfault.com/q/1010000018689196?_ea=19219106)

- [面试题之Event Loop终极篇](https://segmentfault.com/a/1190000019494012)

- [【建议星星】要就来45道Promise面试题一次爽到底(1.1w字用心整理)](https://juejin.cn/post/6844904077537574919)

- [面试官眼中的Promise](https://juejin.cn/post/6844903748628660232)