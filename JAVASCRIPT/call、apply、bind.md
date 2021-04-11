# call、apply、bind

> call、apply、bind 这三个方法的作用是改变this指向。

## 三者有什么区别？
- 通过下面这个案例得出，相同之处都是改变this指向，不同之处，call apply 的差异是接收传给调用函数的参数形式不同， call apply 和 bind 的差异是call apply 直接调用，而 bind 会返回一个新函数。
```js
var obj = {
    name: 'obj'
}
function test (b, c) {
    this.name = 'test';
    console.log(this.name, b, c);
}
// 分别用 call、apply、bind 将 obj 对象绑定 test 方法的 this 上
test.call(obj, 'b', 'c'); // obj b c
test.apply(obj, ['b', 'c']); // obj b c
var func = test.bind(obj, 'b');
func('c');  // obj b c
```

## 实现 call
```js
// call
Function.prototype.call2 = function (context) {
    context = context || window;
    context.fn = this;
    
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }
    
    // 数组和字符串拼接，会将数组转化成字符串（数组调用toString方法），数组成员以逗号隔开
    var result = eval('context.fn(' + args + ')');

    delete context.fn;
    return result;
}
```
## 实现 apply
```js
// apply
Function.prototype.apply2 = function (context, arr) {
    context = context || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    } else {
        var args = [];
        for (var i = 0; i < arr.length; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')');
    }
    
    delete context.fn;
    return result;
}
```
## 实现 bind
```js
// bind(ES5)
Function.prototype.bind2 = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }
    // 防止 绑定函数的 prototype 和调用 bind 返回的函数的 prototype 相关联
    // 所以可以通过空函数来进行中转
    var fNOP = function () {};
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}
// bind(ES6)
Function.prototype.bind2 = function(context, ...rest) {
    let self = this
    return function F(...args) {
        if (this instanceof F) {
            return new self(...rest, ...args)
        }
        return self.apply(context, rest.concat(args))
    }
}
// test
var foo = { value : 1};

var bar = function (name, age) {
    console.log(this.value);
    console.log('name:', name);
    console.log('age:', age);
}

var zoo = bar.bind2(foo, 'koo');

var a = new zoo(18);

console.log('a.constructor:', a.constructor);
console.log('a:', a)
zoo.prototype.value = 1;
console.log('bar.prototype.value:', bar.prototype.value)
```