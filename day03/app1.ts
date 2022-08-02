// /**
//  * 总结
//  * 1. interface
//  * 2. 可选属性
//  * 3. [prop:string]:any
//  */

// /**
//  * interface
//  */
// // interface Persion {
// //     firstName: string,
// //     lastName: string,
// //     age: number,
// //     sex: boolean,
// // }
// function getFullName({ firstName, lastName, age, sex }: Persion): String {
//     return `my name ${lastName} ${firstName},my age is ${age},like smoke,${sex}`
// }

// //let result = getFullName({firstName: 'world', lastName: 'hello'})
// // console.log(result);
// // let result = getFullName({ firstName: '三', lastName: '张', age: 20, sex: false })
// // console.log(result);

// // let result = getFullName({firstName: '三', lastName: '张', age: 20, sex:false})
// // document.body.innerHTML = result
// // console.log(result);

// interface Persion{
//     firstName:string,
//     lastName:string,
//     age:number,
//     sex:boolean,
//     colors?:string,
//     [prop:string]:any
// }
// let result=getFullName({firstName:'三',lastName:'张',age:20,sex:false,height:123})


// /**
//  * 绕开多余属性的检查，类型断言 ！！！
//  * 1. 类型断言 as <>
//  */

// // interface Vegetables{
// //     color?:string,
// //     type:string
// // }
// // const getVegetables=({color,type}:Vegetables):string=>{
// //     return `A ${color? color+"":" "}${type}`
// // }

// // getVegetables({
// //     type:"tomato",
// //     size:12,
// //     proce:1.2,
// // }as Vegetables)

// // 2. [props:string]:any

// interface Vegetables{
//     color?:string,
//     type:string,
//     [props:string]:any
// }

// const getVegetables =({color,type}:Vegetables):string=>{
//     return `A ${color? color+"": " "}${type}`
// }

// getVegetables({
//     type:"tomato",
//     size:12,
//     price:1.2
// })
// /**
//  * 只读属性
//  * readonly
//  */
// interface Role{
//     readonly 0:string
//     readonly 1:string
// }
// const role:Role={
//     0: 'super_admin',
//     1 :'admin'
// }
// role[1]="我是快乐的" //无法分配到 "1" ，因为它是只读属性
// /**
//  * const 和 readonly 对比
//  */
// const NAME:string="321"
// //NAME="抬头" //无法匹配到 "NAME" ,因为它是常数

// const obj={
//     name:'741'
// }
// obj.name="包胜利"

// interface Info{
//     readonly name:string
// }

// const info:Info={
//     name:'帅字背'
// }
// info['name']="123" //无法分配到 "name" ，因为它是只读属性

// /**
//  * 类型别名
//  */
// interface AddFunc{
//     (num1:number,num2:number):number
// }
// const add:AddFunc=(n1,n2)=>n1+n2
// const join:AddFunc=(n1,n2)=>`${n1} ${n2}` //不能将类型“string”分配给类型“number”
// add('a',2) //类型“string”的参数不能赋给类型“number”的参数


//  /* TODO: 
//  * 1. 没有只读属性,设置并修改 
//  * 2. 为什么const 声明的对象可以修改呀
//  *
//  */

// /**
//  * 总结
//  * 1. interface
//  * 2. 可选属性
//  * 3. [prop:string]:any
//  */

// /**
//  * interface
//  */
// // interface Persion {
// //     firstName: string,
// //     lastName: string,
// //     age: number,
// //     sex: boolean,
// // }
// function getFullName({ firstName, lastName, age, sex }: Persion): String {
//     return `my name ${lastName} ${firstName},my age is ${age},like smoke,${sex}`
// }

// //let result = getFullName({firstName: 'world', lastName: 'hello'})
// // console.log(result);
// // let result = getFullName({ firstName: '三', lastName: '张', age: 20, sex: false })
// // console.log(result);

// // let result = getFullName({firstName: '三', lastName: '张', age: 20, sex:false})
// // document.body.innerHTML = result
// // console.log(result);

// interface Persion{
//     firstName:string,
//     lastName:string,
//     age:number,
//     sex:boolean,
//     colors?:string,
//     [prop:string]:any
// }
// let result=getFullName({firstName:'三',lastName:'张',age:20,sex:false,height:123})


// /**
//  * 绕开多余属性的检查，类型断言 ！！！
//  * 1. 类型断言 as <>
//  */

// // interface Vegetables{
// //     color?:string,
// //     type:string
// // }
// // const getVegetables=({color,type}:Vegetables):string=>{
// //     return `A ${color? color+"":" "}${type}`
// // }

// // getVegetables({
// //     type:"tomato",
// //     size:12,
// //     proce:1.2,
// // }as Vegetables)

// // 2. [props:string]:any

// interface Vegetables{
//     color?:string,
//     type:string,
//     [props:string]:any
// }

// const getVegetables =({color,type}:Vegetables):string=>{
//     return `A ${color? color+"": " "}${type}`
// }

// getVegetables({
//     type:"tomato",
//     size:12,
//     price:1.2
// })
// /**
//  * 只读属性
//  * readonly
//  */
// interface Role{
//     readonly 0:string
//     readonly 1:string
// }
// const role:Role={
//     0: 'super_admin',
//     1 :'admin'
// }
// role[1]="我是快乐的" //无法分配到 "1" ，因为它是只读属性
// /**
//  * const 和 readonly 对比
//  */
// const NAME:string="321"
// //NAME="抬头" //无法匹配到 "NAME" ,因为它是常数

// const obj={
//     name:'741'
// }
// obj.name="包胜利"

// interface Info{
//     readonly name:string
// }

// const info:Info={
//     name:'帅字背'
// }
// info['name']="123" //无法分配到 "name" ，因为它是只读属性

// /**
//  * 类型别名
//  */
// interface AddFunc{
//     (num1:number,num2:number):number
// }
// const add:AddFunc=(n1,n2)=>n1+n2
// const join:AddFunc=(n1,n2)=>`${n1} ${n2}` //不能将类型“string”分配给类型“number”
// add('a',2) //类型“string”的参数不能赋给类型“number”的参数


//  /* TODO: 
//  * 1. 没有只读属性,设置并修改 
//  * 2. 为什么const 声明的对象可以修改呀
//  *
//  */

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
function getFullName({ firstName, lastName, age, sex }: Persion): String {
    return `my name ${lastName} ${firstName},my age is ${age},like smoke,${sex}`
}

//let result = getFullName({firstName: 'world', lastName: 'hello'})
// console.log(result);
// let result = getFullName({ firstName: '三', lastName: '张', age: 20, sex: false })
// console.log(result);

// let result = getFullName({firstName: '三', lastName: '张', age: 20, sex:false})
// document.body.innerHTML = result
// console.log(result);

interface Persion{
    firstName:string,
    lastName:string,
    age:number,
    sex:boolean,
    colors?:string,
    [prop:string]:any
}
let result=getFullName({firstName:'三',lastName:'张',age:20,sex:false,height:123})


/**
 * 绕开多余属性的检查，类型断言 ！！！
 * 1. 类型断言 as <>
 */

// interface Vegetables{
//     color?:string,
//     type:string
// }
// const getVegetables=({color,type}:Vegetables):string=>{
//     return `A ${color? color+"":" "}${type}`
// }

// getVegetables({
//     type:"tomato",
//     size:12,
//     proce:1.2,
// }as Vegetables)

// 2. [props:string]:any

interface Vegetables{
    color?:string,
    type:string,
    [props:string]:any
}

const getVegetables =({color,type}:Vegetables):string=>{
    return `A ${color? color+"": " "}${type}`
}

getVegetables({
    type:"tomato",
    size:12,
    price:1.2
})
/**
 * 只读属性
 * readonly
 */
interface Role{
    readonly 0:string
    readonly 1:string
}
const role:Role={
    0: 'super_admin',
    1 :'admin'
}
role[1]="我是快乐的" //无法分配到 "1" ，因为它是只读属性
/**
 * const 和 readonly 对比
 */
const NAME:string="321"
//NAME="抬头" //无法匹配到 "NAME" ,因为它是常数

const obj={
    name:'741'
}
obj.name="包胜利"

interface Info{
    readonly name:string
}

const info:Info={
    name:'帅字背'
}
info['name']="123" //无法分配到 "name" ，因为它是只读属性

/**
 * 类型别名
 */
interface AddFunc{
    (num1:number,num2:number):number
}
const add:AddFunc=(n1,n2)=>n1+n2
const join:AddFunc=(n1,n2)=>`${n1} ${n2}` //不能将类型“string”分配给类型“number”
add('a',2) //类型“string”的参数不能赋给类型“number”的参数


 /* TODO: 
 * 1. 没有只读属性,设置并修改 
 * 2. 为什么const 声明的对象可以修改呀
 *
 */