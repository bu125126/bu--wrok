/**
 * new Array() 创建数组的长度
 * .fill,填充数组的方法，将数据填充到其中，分别以不同的数据类型进行填充
 */
// const getArray =(value:any,times:number=5):any[]=>{
//     return new Array(times).fill(value)
// }


// getArray([1],2).forEach(item=>{
//     console.log(item.length);    
// })
// /**
//  * 每个item都是一个数组
//  */
// getArray(2,3).forEach(item=>{
//     /**item是一个数字 */
//     console.log(item.length); //
// })

/**
 * 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性**, 使用标识符号**<T>**
 */

// const getArray = <T>(value: T, times: number = 5): T[] => {
//     return new Array(times).fill(value)
// }
// getArray<number[]>([1, 2], 3).forEach(item => {
//     console.log(item.length);
// })
// getArray<number>(2, 3).forEach(item => {
//     console.log(item.length); //类型“number”上不存在属性“length”。
// })

// getArray(2, 3).forEach(item => {
//     console.log(item.length); //类型“number”上不存在属性“length”。
// })

/**泛型变量 */
// const getLength=<T>(param:T):number=>{
//     return param.length  //类型“T”上不存在属性“length”。
// }

// const getArray=<T,U>(param1:T,param2:U,times:number):[T,U][]=>{
//     return new Array(times).fill([param1,param2])
// }
// getArray(1,'a',3).forEach(item=>{
//     console.log(item[0].length); //类型“number”上不存在属性“length”。
//     console.log(item[1].toFixed(2)); //属性“toFixed”在类型“string”上不存在。
// })

/**
 * 泛型函数类型
 * 使用泛型定义函数类型：
 */
//ex1: 简单定义
// const getArray:<T>(arg:T,times:number)=>T[]=(arg,times)=>{
//     return new Array(times).fill(arg)
// }
//ex2:使用类型别名
// type GetArray=<T>(arg:T,times:number)=>T[]
// const getArray:GetArray=<T>(arg:T,times:number):T[]=>{
//     return new Array(times).fill(arg)
// }

//使用接口的形式来定义泛型函数类型
// interface GetArray{
//     <T>(arg:T,times:number):T[]
// }
// const getArray:GetArray=<T>(arg:T,times:number):T[]=>{
//     return new Array(times).fill(arg)
// }


// interface GetArray<T> {
//     (arg: T, times: number): T[]
//     tag: T
// }
// const getArray: GetArray<number> = <T>(arg: T, times: number): T[] => {
// // error 不能将类型“{ <T>(arg: T, times: number): T[]; tag: string; }”分配给类型“GetArray<number>”。
//   // 属性“tag”的类型不兼容。
//     return new Array(times).fill(arg)
// }
// getArray.tag="a" //不能将类型“string”分配给类型“number”
// getArray("a",1) //不能将类型“string”分配给类型“number”

/**
 * 泛型约束
 */
// interface ValueWithLength{
//     length:number
// }
// // 类型 "{}" 中缺少属性 "length"，但类型 "ValueWithLength" 中需要该属性。
// const v:ValueWithLength={} 

// interface ValueWithLength{
//     length:number
// }
// const getLength=<T extends ValueWithLength>(param:T):number=>{
//     return param.length
// }
// getLength('abc') 
// getLength([1,2,3]) 
// getLength({length:3}) 
// getLength(123)  //类型“number”的参数不能赋给类型“ValueWithLength”的参数。

// 在泛型约束中使用类型参数
// const getProps=(object,propName)=>{
//     return object[propName]
// }
// const obj={a:'aa',b:'bb'}
// getProps(obj,'c')

// const getProp=<T,K extends keyof T>(object:T,propName:K)=>{
//     return object[propName]
// }
// const obj={a:'aa',b:'bb'}
// getProp(obj,'c')  //类型“"c"”的参数不能赋给类型“"a" | "b"”的参数

/**
 * 本小节我们学习了泛型的相关知识；学习了使用泛型来弥补使用any造成的类型信息缺失；当我们的类型是灵活任意的，又要准确使用类型信息时，就需要使用泛型来关联类型信息，其中离不开的是泛型变量；泛型变量可以是多个，且命名随意；如果需要对泛型变量的类型做进一步的限制，则需要用到我们最后讲的泛型约束；使用泛型约束通过`extends`关键字指定要符合的类型，从而满足更多场景的需求。
 */

/**
 * new Array(),创建数组的长度
 * .fill, 填充数组的方法,将数据填充到其中,分别以不同的数据类型进行填充
 */
// const getArray =(value:any,times:number=5):any[]=>{
//     return new Array(times).fill(value)
// }

// // getArray([1],2).forEach(item=>{
// //     console.log(item.length);
// // })
// /**
//  * 每个item都是一个数组
//  */
// getArray(2,3).forEach(item=>{
//     /**item都是一个数组 */
//     console.log(item.length);
// })

/**
 * new Array() 创建数组的长度
 * .fill,填充数组的方法，将数据填充到其中，分别以不同的数据类型进行填充
 */
// const getArray =(value:any,times:number=5):any[]=>{
//     return new Array(times).fill(value)
// }


// getArray([1],2).forEach(item=>{
//     console.log(item.length);    
// })
// /**
//  * 每个item都是一个数组
//  */
// getArray(2,3).forEach(item=>{
//     /**item是一个数字 */
//     console.log(item.length); //
// })

/**
 * 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性**, 使用标识符号**<T>**
 */

// const getArray = <T>(value: T, times: number = 5): T[] => {
//     return new Array(times).fill(value)
// }
// getArray<number[]>([1, 2], 3).forEach(item => {
//     console.log(item.length);
// })
// getArray<number>(2, 3).forEach(item => {
//     console.log(item.length); //类型“number”上不存在属性“length”。
// })

// getArray(2, 3).forEach(item => {
//     console.log(item.length); //类型“number”上不存在属性“length”。
// })

/**泛型变量 */
// const getLength=<T>(param:T):number=>{
//     return param.length  //类型“T”上不存在属性“length”。
// }

// const getArray=<T,U>(param1:T,param2:U,times:number):[T,U][]=>{
//     return new Array(times).fill([param1,param2])
// }
// getArray(1,'a',3).forEach(item=>{
//     console.log(item[0].length); //类型“number”上不存在属性“length”。
//     console.log(item[1].toFixed(2)); //属性“toFixed”在类型“string”上不存在。
// })

/**
 * 泛型函数类型
 * 使用泛型定义函数类型：
 */
//ex1: 简单定义
// const getArray:<T>(arg:T,times:number)=>T[]=(arg,times)=>{
//     return new Array(times).fill(arg)
// }
//ex2:使用类型别名
// type GetArray=<T>(arg:T,times:number)=>T[]
// const getArray:GetArray=<T>(arg:T,times:number):T[]=>{
//     return new Array(times).fill(arg)
// }

//使用接口的形式来定义泛型函数类型
// interface GetArray{
//     <T>(arg:T,times:number):T[]
// }
// const getArray:GetArray=<T>(arg:T,times:number):T[]=>{
//     return new Array(times).fill(arg)
// }


// interface GetArray<T> {
//     (arg: T, times: number): T[]
//     tag: T
// }
// const getArray: GetArray<number> = <T>(arg: T, times: number): T[] => {
// // error 不能将类型“{ <T>(arg: T, times: number): T[]; tag: string; }”分配给类型“GetArray<number>”。
//   // 属性“tag”的类型不兼容。
//     return new Array(times).fill(arg)
// }
// getArray.tag="a" //不能将类型“string”分配给类型“number”
// getArray("a",1) //不能将类型“string”分配给类型“number”

/**
 * 泛型约束
 */
// interface ValueWithLength{
//     length:number
// }
// // 类型 "{}" 中缺少属性 "length"，但类型 "ValueWithLength" 中需要该属性。
// const v:ValueWithLength={} 

// interface ValueWithLength{
//     length:number
// }
// const getLength=<T extends ValueWithLength>(param:T):number=>{
//     return param.length
// }
// getLength('abc') 
// getLength([1,2,3]) 
// getLength({length:3}) 
// getLength(123)  //类型“number”的参数不能赋给类型“ValueWithLength”的参数。

// 在泛型约束中使用类型参数
// const getProps=(object,propName)=>{
//     return object[propName]
// }
// const obj={a:'aa',b:'bb'}
// getProps(obj,'c')

// const getProp=<T,K extends keyof T>(object:T,propName:K)=>{
//     return object[propName]
// }
// const obj={a:'aa',b:'bb'}
// getProp(obj,'c')  //类型“"c"”的参数不能赋给类型“"a" | "b"”的参数

/**
 * 本小节我们学习了泛型的相关知识；学习了使用泛型来弥补使用any造成的类型信息缺失；当我们的类型是灵活任意的，又要准确使用类型信息时，就需要使用泛型来关联类型信息，其中离不开的是泛型变量；泛型变量可以是多个，且命名随意；如果需要对泛型变量的类型做进一步的限制，则需要用到我们最后讲的泛型约束；使用泛型约束通过`extends`关键字指定要符合的类型，从而满足更多场景的需求。
 */

/**
 * new Array(),创建数组的长度
 * .fill, 填充数组的方法,将数据填充到其中,分别以不同的数据类型进行填充
 */
// const getArray =(value:any,times:number=5):any[]=>{
//     return new Array(times).fill(value)
// }

// // getArray([1],2).forEach(item=>{
// //     console.log(item.length);
// // })
// /**
//  * 每个item都是一个数组
//  */
// getArray(2,3).forEach(item=>{
//     /**item都是一个数组 */
//     console.log(item.length);
// })

/**
 * new Array() 创建数组的长度
 * .fill,填充数组的方法，将数据填充到其中，分别以不同的数据类型进行填充
 */
// const getArray =(value:any,times:number=5):any[]=>{
//     return new Array(times).fill(value)
// }


// getArray([1],2).forEach(item=>{
//     console.log(item.length);    
// })
// /**
//  * 每个item都是一个数组
//  */
// getArray(2,3).forEach(item=>{
//     /**item是一个数字 */
//     console.log(item.length); //
// })

/**
 * 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性**, 使用标识符号**<T>**
 */

// const getArray = <T>(value: T, times: number = 5): T[] => {
//     return new Array(times).fill(value)
// }
// getArray<number[]>([1, 2], 3).forEach(item => {
//     console.log(item.length);
// })
// getArray<number>(2, 3).forEach(item => {
//     console.log(item.length); //类型“number”上不存在属性“length”。
// })

// getArray(2, 3).forEach(item => {
//     console.log(item.length); //类型“number”上不存在属性“length”。
// })

/**泛型变量 */
// const getLength=<T>(param:T):number=>{
//     return param.length  //类型“T”上不存在属性“length”。
// }

// const getArray=<T,U>(param1:T,param2:U,times:number):[T,U][]=>{
//     return new Array(times).fill([param1,param2])
// }
// getArray(1,'a',3).forEach(item=>{
//     console.log(item[0].length); //类型“number”上不存在属性“length”。
//     console.log(item[1].toFixed(2)); //属性“toFixed”在类型“string”上不存在。
// })

/**
 * 泛型函数类型
 * 使用泛型定义函数类型：
 */
//ex1: 简单定义
// const getArray:<T>(arg:T,times:number)=>T[]=(arg,times)=>{
//     return new Array(times).fill(arg)
// }
//ex2:使用类型别名
// type GetArray=<T>(arg:T,times:number)=>T[]
// const getArray:GetArray=<T>(arg:T,times:number):T[]=>{
//     return new Array(times).fill(arg)
// }

//使用接口的形式来定义泛型函数类型
// interface GetArray{
//     <T>(arg:T,times:number):T[]
// }
// const getArray:GetArray=<T>(arg:T,times:number):T[]=>{
//     return new Array(times).fill(arg)
// }


// interface GetArray<T> {
//     (arg: T, times: number): T[]
//     tag: T
// }
// const getArray: GetArray<number> = <T>(arg: T, times: number): T[] => {
// // error 不能将类型“{ <T>(arg: T, times: number): T[]; tag: string; }”分配给类型“GetArray<number>”。
//   // 属性“tag”的类型不兼容。
//     return new Array(times).fill(arg)
// }
// getArray.tag="a" //不能将类型“string”分配给类型“number”
// getArray("a",1) //不能将类型“string”分配给类型“number”

/**
 * 泛型约束
 */
// interface ValueWithLength{
//     length:number
// }
// // 类型 "{}" 中缺少属性 "length"，但类型 "ValueWithLength" 中需要该属性。
// const v:ValueWithLength={} 

// interface ValueWithLength{
//     length:number
// }
// const getLength=<T extends ValueWithLength>(param:T):number=>{
//     return param.length
// }
// getLength('abc') 
// getLength([1,2,3]) 
// getLength({length:3}) 
// getLength(123)  //类型“number”的参数不能赋给类型“ValueWithLength”的参数。

// 在泛型约束中使用类型参数
// const getProps=(object,propName)=>{
//     return object[propName]
// }
// const obj={a:'aa',b:'bb'}
// getProps(obj,'c')

// const getProp=<T,K extends keyof T>(object:T,propName:K)=>{
//     return object[propName]
// }
// const obj={a:'aa',b:'bb'}
// getProp(obj,'c')  //类型“"c"”的参数不能赋给类型“"a" | "b"”的参数

/**
 * 本小节我们学习了泛型的相关知识；学习了使用泛型来弥补使用any造成的类型信息缺失；当我们的类型是灵活任意的，又要准确使用类型信息时，就需要使用泛型来关联类型信息，其中离不开的是泛型变量；泛型变量可以是多个，且命名随意；如果需要对泛型变量的类型做进一步的限制，则需要用到我们最后讲的泛型约束；使用泛型约束通过`extends`关键字指定要符合的类型，从而满足更多场景的需求。
 */

/**
 * new Array(),创建数组的长度
 * .fill, 填充数组的方法,将数据填充到其中,分别以不同的数据类型进行填充
 */
// const getArray =(value:any,times:number=5):any[]=>{
//     return new Array(times).fill(value)
// }

// // getArray([1],2).forEach(item=>{
// //     console.log(item.length);
// // })
// /**
//  * 每个item都是一个数组
//  */
// getArray(2,3).forEach(item=>{
//     /**item都是一个数组 */
//     console.log(item.length);
// })

