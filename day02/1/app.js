//数字
//正确
var num1 = 1;
var num2 = 2;
var sum = num1 + num2;
console.log(sum);
// let num1=1
// let num2=2
// num2='3'
// let sum =num1+num2
// console.log(sum);
/**
 * number
 */
//十进制
var decLiteral = 6;
//十六进制
var hexLiteral = 0xf00d;
//ES6中的二进制
var binaryLiteral = 10;
//ES6中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
// 无穷大
var infinityNumber = Infinity;
//当定义完为数字类型的数据的时候，在定义为str
//-Infinity 为无穷小
var num = 1;
//  num = "2222" // Error: 不能将"string"类型赋值给"number"
// 布尔值
var flag = false;
var flag1 = true;
console.log(flag);
//字符串
var Name = '小红';
var Age = 12;
var sentence = "my name is ".concat(Name, ",my age is ").concat(Age);
document.body.innerHTML = sentence;
//数组array 第一种字面量[]
var list = [1, 3, 2];
var listString = ['1', '2', '3'];
// let list:number[]=[1,2,3,'4']   错误的
//第二种  Array<>
var List = [1, 2, 3];
var ListString = ['1', '2', '3'];
// 错误的
// let List:Array<number>=[1,2,3,'2'] 错误的
// undefined 和 null类型
var u = undefined;
var n = null;
//对象 object
var obj;
obj = { name: '小红', age: 18 };
var a1;
a1 = { name: '你好', sex: '我今年' };
console.log(obj);
var object = "".concat(a1.name, "\u6211\u53EB").concat(obj.name).concat(a1.sex).concat(obj.age);
document.body.innerHTML = object;
//元组 Tuple
var tom = ['Tom', 25];
console.log(tom);
var a2;
tom[0] = 'Tom';
tom[1] = 25;
tom[0].slice(1); // om
tom[1].toFixed(2); // 3
// 枚举enum
var Color;
(function (Color) {
    /**
     * 红色
     */
    Color[Color["red"] = 1] = "red";
    /**
     * 蓝色
    */
    Color[Color["blue"] = 2] = "blue";
    /**
     * 绿色
     */
    Color[Color["green"] = 3] = "green";
})(Color || (Color = {}));
var c = Color.blue;
console.log(c);
// any
var value;
value = 123;
value = 'abc';
value = false;
var array = [1, 'a', true];
//void 类型
function alertName() {
    console.log('my name is void');
}
function alertNames() {
    return 'my Name is string';
}
//never类型
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('Something failed');
}
var persion = { name: 'xxxx', age: 1, sex: 1 };
// 联合类型
// | 或集
var allType;
allType = 1;
allType = '123';
// 不能将类型“boolean”分配给类型“string | number”。
//allType = false
//类型断言
// 尖括号
var someValue;
someValue = 123;
someValue = 'dddd';
var someValueLength = someValue.length;
// as写法 
var someName;
someName = 123;
someName = '123';
var someNameLength = someName.length;
var Status;
(function (Status) {
    Status[Status["uploading"] = 0] = "uploading";
    Status[Status["Success"] = 1] = "Success";
    Status[Status["failed"] = 2] = "failed";
})(Status || (Status = {}));
console.log(Status.uploading);
console.log(Status['Success']);
console.log(Status.failed);
