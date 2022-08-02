//数字
//正确
// let num1=1
// let num2=2
// let sum=num1+num2
// console.log(sum);
// let num1=1
// let num2=2
// // 不能将类型“string”分配给类型“number”。
// num2='3'
// let sum =num1+num2
// console.log(sum);
// /**
//  * number
//  */
// //十进制
// let decLiteral:number=6
// //十六进制
// let hexLiteral:number=0xf00d
// //ES6中的二进制
// let binaryLiteral:number=0b1010
// //ES6中的八进制表示法
// let octalLiteral:number=0o744
// let notANumber:number=NaN
// //无穷大
// let infinityNumber:number=Infinity
// //当定义完为数字类型的数据的时候，在定义为str
// // -Infinity 无穷小
// let num:number=1
// // num="2222" 不能将类型“string”分配给类型“number”。
// //布尔值
// // let flag:boolean=false
// // let flag1:boolean=true
// // console.log(flag);
// // 字符串
// let Name:string="小红"
// let Age:number=12
// let sentence=`my name is ${Name}, my age is ${}`
/**
 * enum的详解
 * 1. 总结每次手动添加索引的时候，下面数据如果不是手动添加索引，将会以递增的方式，把索引展示出来
 * 2. 数字类型，我们可以像访问对象一样使用，','和'[]'两种方式访问里面的值
 */
//数字枚举
//自动添加指定索引符合
//我们可以像访问对象一样使用，'.'和'[]'两种方式访问里面的值
// enum Status{
//     uploading,
//     success,
//     falied
// }
// console.log(Status.uploading);
// console.log(Status['success']);
// console.log(Status.falied);
/**
 * 指定索引值
 */
//  enum Anmimal{
//     /**猪 */
//     pig=200,
//     /**狗 */
//     dog,
//     /**猫 */
//     cat=800,
//     /**蛇 */
//     snake
// }
// console.log(Anmimal.cat);
// console.log(Anmimal['dog']);
// console.log(Anmimal.snake);
/**
 * 计算值和常量
 */
// const get=()=>{
//     return 222
// }
// 计算值和常量
// enum Constant{
//     a=get(),
//     b=1,
//     c,
// }
// console.log(Constant);
/**
 * 4. 反向映射
 */
// enum Status{
//     success=200,
//     notfound=404,
//     error=500 
// }
// console.log(Status.error);
// const NAME: string = "帅字辈";
// // NAME = "抬头" // 无法分配到 "NAME" ，因为它是常数。
// const obj = {
//     name: '帅字辈'
//  }
//  obj.name = "包胜利"
//  interface Info {
//     readonly name: string
//  }
//  const info: Info = {
//     name: '帅字辈'
//  }
//  info['name'] = "包胜利" // 无法分配到 "name" ，因为它是只读属性
//  interface Rolec {
//     [id: number]: string
// }
// let role: Rolec = {
//     0: 'super_admin',
//     1: 'admin'
// }
// /**
//  * 数组模式
//  */
// let roleArray: Rolec = ['super_admin', 'admin']
// roleArray[0] = '我要站着上课'
// console.log(roleArray);
// // 这是一个公共接口类型定义
// interface Vegetables {
//     color: string;
// }
// /**
//  * Tomato: color radius
//  */
// interface Log extends Vegetables{
//      success:string
// }
// interface Tomato  extends Vegetables{
//   radius: number;
// }
// interface Carrot extends  Vegetables{
//   length: number;
// }
// let useLog:Log={
//     success:'222',
//     color:"123"
// }
// //类型“{}”缺少类型“Tomato”中的以下属性: radius, color 
// let useTomato: Tomato = {
// // 类型 "{ radius: number; }" 中缺少属性 "color"，但类型 "Tomato" 中需要该属性。
//    radius: 13,
//    color: 'red',
//  }
// //类型 "{ length: number; }" 中缺少属性 "color"，但类型 "Carrot" 中需要该属性。t
// let useCarrot: Carrot = {
//     length: 12,
//     color: 'red',
// }
/**
 * 混合接口类型
 */
/**不想被污染掉  放到闭包里,形成独立的作用yu*/
/**
 * 自调用函数
 */
//  let count = 0;
//  const countUp = () => count++;
// console.log(count);
// const countUps = (() => {
//     let count = 0;
//     function useCount(){
//         return ++count
//     }
//     return useCount
// })()
// console.log(countUps()); // 1
// console.log(countUps()); // 2
/**
 * js中手动添加对象属性
 */
//  function getResult (input: string): number
//  function getResult (input: number): string
//  function getResult <T>(input: T): T
//  function getResult (input: any): any {
//    if (typeof input === 'string') return input.length
//    else if (typeof input === 'number') return input.toString()
//    else return input
//  }
//  getResult('123').length
var getArray = function (value, times) {
    if (times === void 0) { times = 5; }
    return new Array(times).fill(value);
};
var result = getArray([1], 2).forEach(function (item) {
    console.log(item.length);
});
var result1 = getArray(2, 3).forEach(function (item) {
    console.log(item.length);
});
