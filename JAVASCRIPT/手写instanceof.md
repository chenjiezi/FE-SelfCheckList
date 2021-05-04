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