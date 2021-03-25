# call、apply、bind

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