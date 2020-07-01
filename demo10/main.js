// util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心 JavaScript 的功能 过于精简的不足
const util = require('util');

/**
 * util.callbackify
    util.callbackify(original) 将 async 异步函数（或者一个返回值为 Promise 的函数）转换成遵循异常优先的回调风格的函数，
    例如将 (err, value) => ... 回调作为最后一个参数。 在回调函数中，第一个参数为拒绝的原因（如果 Promise 解决，则为 null），
    第二个参数则是解决的值。
 */
async function fn() {
  return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});

/**
 * util.inherits
    util.inherits(constructor, superConstructor) 是一个实现对象间原型继承的函数。

    JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。JavaScript 没有提供对象继承的语言级别特性，而是通过原型复制来实现的。

    在这里我们只介绍 util.inherits 的用法，示例如下：
 */
function Base() {
  this.name = 'base';
  this.base = 1991;
  this.sayHello = function () {
    console.log('Hello ' + this.name);
  };
}
Base.prototype.showName = function () {
  console.log(this.name);
};

function Sub() {
  this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log('objBase', objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayHello(); 
console.log('objSub', objSub);

/**
 * util.inspect
    util.inspect(object,[showHidden],[depth],[colors]) 是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。

    showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。

    depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多 少。如果不指定depth，默认会递归 2 层，指定为 null 表示将不限递归层数完整遍历对象。 如果 colors 值为 true，输出格式将会以 ANSI 颜色编码，通常用于在终端显示更漂亮 的效果。

    特别要指出的是，util.inspect 并不会简单地直接把对象转换为字符串，即使该对 象定义了 toString 方法也不会调用。
 */
function Person() {
  this.name = 'byvoid';
  this.toString = function () {
    return this.name;
  };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

/**
 * util.isArray(object)
    如果给定的参数 "object" 是一个数组返回 true，否则返回 false。
 */
console.log(util.isArray([]))
// true
console.log(util.isArray(new Array))
// true
console.log(util.isArray({}))
// false

/**
 * util.isRegExp(object)
  如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。
 */
util.isRegExp(/some regexp/)
// true
util.isRegExp(new RegExp('another regexp'))
// true
util.isRegExp({})
// false

/** 
 * util.isDate(object)
    如果给定的参数 "object" 是一个日期返回true，否则返回false。
*/
util.isDate(new Date())
// true
util.isDate(Date())
// false (without 'new' returns a String)
util.isDate({})
// false