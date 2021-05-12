# 前端-自检清单

### JAVASCRIPT
- [js中的数据类型](./JAVASCRIPT/js中的数据类型.md)
- [执行上下文和执行栈](./JAVASCRIPT/执行上下文和执行栈.md)
- [闭包](./JAVASCRIPT/闭包.md)
- [new 操作符](./JAVASCRIPT/new操作符.md)
- [this 指向](./JAVASCRIPT/this指向.md)
- [原型与原型链](./JAVASCRIPT/原型与原型链.md)
- [继承](./JAVASCRIPT/继承.md)
- [内存泄露、垃圾回收机制](./JAVASCRIPT/内存泄露、垃圾回收机制.md)
- [事件循环](./JAVASCRIPT/EventLoop.md)
- [事件、事件委托](./JAVASCRIPT/事件、事件委托.md)
- [普通函数与箭头函数的区别](./JAVASCRIPT/普通函数与箭头函数的区别.md)
- [var、let 和 const 的区别](./JAVASCRIPT/var、let、const的区别.md)
- [0.1 + 0.2 === 0.3 返回 false](./JAVASCRIPT/0.1+0.2===0.3返回false.md) （未）
- [defer 与 async 的区别](./JAVASCRIPT/defer与async的区别.md)
- 其他
  - [跨域](./OTHER/跨域.md)
  - 模块化
  - 浏览器兼容
    - 事件绑定兼容IE
  - 性能优化
    - 事件代理
  - 前端安全
- 手撕代码 
  - 数组去重、扁平
  - [手写 instanceOf](./JAVASCRIPT/手写instanceof.md)
  - [手写 call、apply、bind](./JAVASCRIPT/call、apply、bind.md)
  - 防抖、节流
  - 浅拷贝、深拷贝
  - 函数柯里化
  - 手写 ajax
  - 手写 EventEmitter
  - 手写 Promise
- 程序分析题
  - 变量提升
  - 事件循环
### HTML/CSS
- HTML5/CSS3新特性
- 盒模型
- 元素类型
- BFC
- 水平垂直居中
- 两列布局(左固定、右自适应)
- 三列布局(圣杯布局、双飞翼布局)
- flex 布局
- grid 布局
### 网络协议
- OSI模型、TCP/IP模型分别由哪些分层组成
  - OSI模型
    - 应用层
    - 表示层
    - 会话层
    - 传输层
    - 网络层
    - 数据链路层
    - 物理层
  - TCP/IP模型
    - 应用层
    - 传输层
    - 网络层
    - 链路层
- HTTP
  - [HTTP重点知识汇总](https://www.nowcoder.com/discuss/634359?channel=-1&source_id=profile_follow_post_nctrack)
  - [常见HTTP状态码](./网络协议/HTTP状态码.md)
  - [HTTP版本](./网络协议/HTTP版本.md)
  - [HTTP缓存机制](./网络协议/HTTP缓存.md)
  - GEI 和 POST 有什么区别
    - get 是从指定的资源请求数据，post 是向指定的资源提交要处理的数据
    - get 请求可以被缓存，post 请求不会被缓存
    - get 请求传输的数据有长度限制，一般为 2048 字符，post 请求传输的数据没有大小限制
    - get 请求的数据一般追加在 URL 的末尾，post 请求的数据在 http 请求体中
    - 一般不使用 GET 请求发送如密码这样的敏感信息。我认为 get 请求比 post 请求更安全。
  - HTTP 与 HTTPS 的区别及实现方式
    1. HTTP 是超文本传输协议，信息是明文传输，存在安全风险的问题。HTTPS 则解决HTTP 不安全的缺陷，在 TCP 和 HTTP 网络层之间加入了 SSL/TLS 安全协议，使得
    报文能够加密传输。
    2. HTTP ：TCP 三次握手之后便可进行 HTTP 的报文传输。而 HTTPS 在 TCP三次握手之后，还需进行 SSL/TLS 的握手过程，才可进入加密报文传输。
    3. HTTP 的端口号是 80，HTTPS 的端口号是 443。 4. HTTPS 协议需要向 CA（证书权威机构）申请数字证书，来保证服务器的身份是可信的。
- TCP/UDP
  - [TCP 和 UDP 有什么区别](./网络协议/TCP和UDP有什么区别.md)
  - [TCP 三次握手和四次挥手机制以及原因](./网络协议/TCP三次握手和四次挥手机制以及原因.md)
  - [TCP 通过哪些方式来保证可靠性](./网络协议/TCP如何保证可靠性.md)
  - [TCP 流量控制](./网络协议/TCP流量控制.md)
  - [TCP 拥塞控制](./网络协议/TCP拥塞控制.md)
  - [流量控制和拥塞控制的区别](./网络协议/流量控制和拥塞控制的区别.md)
### 数据结构与算法
- 数据结构
  - [数组与链表区别和优缺点](./数据结构与算法/数组与链表区别和优缺点.md)
- 算法
  - 排序
    - [冒泡排序](./数据结构与算法/冒泡排序.md)
    - [选择排序](./数据结构与算法/选择排序.md)
    - [插入排序](./数据结构与算法/插入排序.md)
    - 堆排序
    - 桶排序
    - [计数排序](./数据结构与算法/计数排序.md)
    - [归并排序](./数据结构与算法/归并排序.md)
    - [快速排序](./数据结构与算法/快速排序.md)
  - 查找
    - [二分查找](./数据结构与算法/二分查找.md)
  - 随机
    - [随机算法](./数据结构与算法/随机算法.md)
### 设计模式
- 单例模式
- 工厂模式
- 订阅者-发布者模式
### 操作系统
- [进程与线程区别](./操作系统/进程与线程的区别.md)
- [死锁的产生](./操作系统/死锁的产生.md)
- [处理死锁的方法](./操作系统/处理死锁的方法.md)
