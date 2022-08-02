var role = {
    0: 'super_admin',
    1: 'admin'
};
// let copeRole:Rolec={
//     // 不能将类型“{ A: string; C: string; }”分配给类型“Rolec”。
// //   对象文字可以只指定已知属性，并且“'A'”不在类型“Rolec”中。
//     'A': 'super_admin',
//     'C': 'admin'
// }
/**
 * 数组模式
 */
var roleArray = ['super_admin', 'admin'];
roleArray[0] = '站着上课';
var roleChange = {
    0: 'Super_admin'
};
roleCHange[0] = "admin"; // 类型“RoleInfo”中的索引签名仅允许读取。
var obj = {
    123: 'a',
    "123": 'b' //对象文本不能具有多个名称相同的属性。
};
console.log(obj);
// 类型“{}”缺少类型“Tomato”中的以下属性: radius, color
var useTomato = {
    //类型 "{ radius: number; }" 中缺少属性 "color"，但类型 "Tomato" 中需要该属性
    radius: 13,
    color: 'red'
};
//类型 "{ length: number; }" 中缺少属性 "color"，但类型 "Carrot" 中需要该属性。
var useCarrot = {
    length: 12,
    color: 'red'
};
/**
 * 混合接口类型
 */
/**
 * 不想被污染掉 放到闭包里，形成独立的作用域
 *
 */
/**
 * 自调用函数
 */
// let count = 0
// const countUp = () => count++
// console.log(count);
var countUps = (function () {
    var count = 0;
    function useCount() {
        return ++count;
    }
    return useCount;
})();
console.log(countUps());
1;
console.log(countUps());
2;
// const countUp=(()=>{
//     let count=0
//     return ()=>{
//         return ++count
//     }
// })()
// console.log(countUp()); 1
// console.log(countUp()); 2
/**
 * js中手动添加对象属性
 */
var obj = {};
obj.name = "小红";
//javascript
var countUp = function () {
    return ++countUp.count;
};
countUp.count = 0;
console.log(countUp());
1;
console.log(countUp());
2;
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
