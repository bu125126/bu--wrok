/**
 * 总结
 * 1. interface
 * 2. 可选属性
 * 3. [prop:string]:any
 */
/**
 * interface
 */
// interface Persion {
//     firstName: string,
//     lastName: string,
//     age: number,
//     sex: boolean,
// }
function getFullName(_a) {
    var firstName = _a.firstName, lastName = _a.lastName, age = _a.age, sex = _a.sex;
    return "my name ".concat(lastName, " ").concat(firstName, ",my age is ").concat(age, ",like smoke,").concat(sex);
}
var result = getFullName({ firstName: '三', lastName: '张', age: 20, sex: false, height: 123 });
var getVegetables = function (_a) {
    var color = _a.color, type = _a.type;
    return "A ".concat(color ? color + "" : " ").concat(type);
};
getVegetables({
    type: "tomato",
    size: 12,
    price: 1.2
});
var role = {
    0: 'super_admin',
    1: 'admin'
};
role[1] = "我是快乐的"; //无法分配到 "1" ，因为它是只读属性
/**
 * const 和 readonly 对比
 */
var NAME = "321";
//NAME="抬头" //无法匹配到 "NAME" ,因为它是常数
var obj = {
    name: '741'
};
obj.name = "包胜利";
var info = {
    name: '帅字背'
};
info['name'] = "123"; //无法分配到 "name" ，因为它是只读属性
var add = function (n1, n2) { return n1 + n2; };
var join = function (n1, n2) { return "".concat(n1, " ").concat(n2); }; //不能将类型“string”分配给类型“number”
add('a', 2); //类型“string”的参数不能赋给类型“number”的参数
/* TODO:
* 1. 没有只读属性,设置并修改
* 2. 为什么const 声明的对象可以修改呀
*
*/ 
