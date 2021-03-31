# JavaScript中的数据类型

**基本类型**：Number、String、Boolean、Undefined、Null、Symbol（ES6）、BigInt（ES10）

**引用类型**：Object

- 什么是Symbol?
  - ES6 引入了一种新的原始数据类型`Symbol`，表示独一无二的值。因为ES5 的对象属性名都是字符串，这容易造成属性名的冲突。引入 Symbol 是为了保证每个属性的名字都是独一无二的，从根本上防止属性名的冲突。
- 什么是BigInt?
  - BigInt是一种新的数据类型，用于当整数值大于Number数据类型支持的范围时。这种数据类型允许我们安全地对`大整数`执行算术操作，表示高分辨率的时间戳，使用大整数id，等等，而不需要使用库。

**基本类型和引用类型有什么区别？**

- 存储方式
  - 基本类型的值存储在栈中、引用类型的值存储在堆中，引用地址存储在栈中；
- 是否支持添加属性和方法
  - 引用类型支持添加属性和方法，基本类型不支持；
- 赋值操作
  - 从一个变量向另外一个变量复制基本类型和引用类型，情况是不同的，基本类型复制的是值的副本，而引用类型复制的引用地址。

**数据类型检测**

- typeof运算符

  - 在检测 null 时，返回"object";
    - JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象然而 null 表示为全零，所以将 typeof null 错误的判断为 object
  - 检测引用类型，返回"object"，不能准确检测具体是哪种引用类型。

- instanceof运算符

  - instanceof的原理

    - instanceof是基于原型链查找，判断前面的对象的隐式原型是否是后面的对象，不是的话继续在原型链上找。

  - 实现一个 instanceof

    ```javascript
    function instance_of(L, R) {//L 表示左表达式，R 表示右表达式
     var O = R.prototype;
     L = L.__proto__;
     while (true) { 
       if (L === null) 
         return false; 
       if (O === L)  // 这里重点：当 O 严格等于 L 时，返回 true
         return true; 
       L = L.__proto__; 
     } 
    }
    ```