// js中实现一个计数的函数
// let count =0
// const countUp=()=>count++
/**
 * 闭包的概念
 * 1. 函数套函数
 * 2. 外部不能获取内部变量
 * 3. 返回函数
 * 4. 内部可以获取外部变量
 * 5. 是自调用函数
 */
var closure = (function () {
    var count = 1;
    var sayHi = function (a, b) {
        return a + b;
    };
    return sayHi(count, 1);
})();
var countUp = (function () {
    var count = 0;
    return function () {
        return count++;
    };
})();
var getCounter = function () {
    var C = function () {
        C.count++;
    };
    C.count = 0;
    return C;
};
var counter = getCounter();
counter();
console.log(counter.count);
counter();
console.log(counter.count);
