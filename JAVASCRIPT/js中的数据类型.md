# JavaScript中的数据类型

基本类型：Number、String、Boolean、Undefined、Null、Symbol（ES6）、BigInt（ES10）

引用类型：Object

## 基本类型和引用类型有什么区别？

- 存储方式
  - 基本类型的值存储在栈中、引用类型的值存储在堆中，引用地址存储在栈中；
- 是否支持添加属性和方法
  - 引用类型支持添加属性和方法，基本类型不支持；
- 赋值操作
  - 从一个变量向另外一个变量复制基本类型和引用类型，情况是不同的，基本类型复制的是值的副本，而引用类型复制的引用地址。

## 数据类型检测

- typeof运算符

  - 在检测 null 时，返回"object";
    - js数据在底层是以二进制表示，二进制前三位为0表示对象，而 null 的二进制全是0，会被认定为"object";
  - 检测引用类型，返回"object"，不能准确检测具体是哪种引用类型。

- instanceof运算符

  - instanceof的原理

    - instanceof是基于原型链查找，判断前面的对象的隐式原型是否是后面的对象，不是的话继续在原型链上找，直到找不到

  - 实现一个 instanceof

    ```javascript
    // 两种实现方式
    // 一
    function myInstanceof (objA, objB) {
        if (typeof objA !== "object" || objA === null) return false;
        while (objA.__proto__) {
            if (!objA.__proto__) return false;
            if (objA.__proto__ === objB.prototype) return true;
            objA.__proto__ = objA.__proto__.__proto__;
        }
        return false;
    }
    // 二
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