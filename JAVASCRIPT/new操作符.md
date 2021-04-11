- **字面量、new创建的对象和Object.create(null)创建出来的对象有什么区别？**

  - 字面量和new创建出来的对象会继承Object的方法和属性，他们的隐式原型会指向Object的显式原型，而 Object.create(null) 创建出来的对象原型为null，作为原型链的顶端，自然也没有继承Object的方法和属性

- **new实例化对象发生哪些过程**

  ```js
  var cat =new Animal("cat");
  // JS引擎执行这句代码时，在内部做了很多工作，用伪代码模拟其内部流程如下：
  new Animal('cat') = {
      var obj = {};
      obj.__proto__ = Animal.prototype;
      var result = Animal.call(obj,"cat");
      return typeof result ==='object' ? result : obj;
  }
  ```

  - 第一步：创建一个空对象 obj； 
  - 第二步：把 obj 的__proto__ 指向构造函数 Animal 的原型对象 prototype;(此时便建立了 obj 对象的原型链：**obj->Animal.prototype->Object.prototype->null** )
  -  第三步： 改变构造函数 this 的指向到新建的对象;（在 obj 对象的执行环境调用 Animal 函数并传递参数 “ cat ” 。 相当于 var result=obj.Animal("cat");）
  -  第四步：考察第 3 步的返回值，如果无返回值 或者 返回一个非对象值，则将 obj 作为新对象返回；
    否则将result 作为新对象返回。

- **模拟new操作**

```js
function objectFactory() {
    // 用new Object() 的方式新建了一个对象 obj
    var obj = new Object();
    // 取出第一个参数，就是我们要传入的构造函数。此外因为 shift 会修改原数组，所以 arguments 会被去除第一个参数
    var Constructor = [].shift.call(arguments);
	// 将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
    obj.__proto__ = Constructor.prototype;
	// 使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
    var ret = Constructor.apply(obj, arguments);
	// 将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
    return typeof ret === 'object' ? ret || obj : obj;
}

 代码疑点解释：

	var Constructor = [].shift.call(arguments);
	解释：arguments是类数组，无法使用数组的方法，通过 call 使得 arguments 使用 shift 数组方法；
    
	return typeof ret === 'object' ? ret || obj : obj;中的 “ret || obj”
	解释：如果构造函数 Constructor 返回 null, typeof 会将 null 检测为 'object'，所以再加个与判断，	防止将 ret 为 null 时被返回。

```