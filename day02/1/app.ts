// //数字
// //正确
// let num1 = 1
// let num2 = 2
// let sum = num1 + num2
// console.log(sum);

// // let num1=1
// // let num2=2
// // num2='3'
// // let sum =num1+num2
// // console.log(sum);

// /**
//  * number
//  */
// //十进制
// let decLiteral: number = 6
// //十六进制
// let hexLiteral: number = 0xf00d
// //ES6中的二进制
// let binaryLiteral: number = 0b1010
// //ES6中的八进制表示法
// let octalLiteral: number = 0o744

// let notANumber: number = NaN
// // 无穷大
// let infinityNumber: number = Infinity
// //当定义完为数字类型的数据的时候，在定义为str
// //-Infinity 为无穷小
// let num: number = 1
// //  num = "2222" // Error: 不能将"string"类型赋值给"number"

// // 布尔值
// let flag: boolean = false
// let flag1: boolean = true
// console.log(flag);

// //字符串
// let Name: string = '小红'
// let Age: number = 12
// let sentence = `my name is ${Name},my age is ${Age}`
// document.body.innerHTML = sentence

// //数组array 第一种字面量[]
// let list: number[] = [1, 3, 2]
// let listString: string[] = ['1', '2', '3']

// // let list:number[]=[1,2,3,'4']   错误的

// //第二种  Array<>
// let List: Array<number> = [1, 2, 3]
// let ListString: Array<string> = ['1', '2', '3']
// // 错误的
// // let List:Array<number>=[1,2,3,'2'] 错误的

// // undefined 和 null类型
// let u: undefined = undefined
// let n: null = null

// //对象 object
// let obj: { name: string, age: number }
// obj = { name: '小红', age: 18 }
// let a1: { name: string, sex: string }
// a1 = { name: '你好', sex: '我今年' }
// console.log(obj);
// let object = `${a1.name}我叫${obj.name}${a1.sex}${obj.age}`
// document.body.innerHTML = object

// //元组 Tuple
// let tom: [string, number] = ['Tom', 25]

// console.log(tom);
// let a2: [string, number];
// tom[0] = 'Tom';
// tom[1] = 25;

// tom[0].slice(1); // om
// tom[1].toFixed(2); // 3

// // 枚举enum
// enum Color {
//     /**
//      * 红色
//      */
//     red = 1,
//     /**
//      * 蓝色 
//     */
//     blue = 2,
//     /**
//      * 绿色
//      */
//     green = 3

// }
// let c: Color = Color.blue
// console.log(c);

// // any
// let value:any
// value=123
// value='abc'
// value=false
// const array:any[]=[1,'a',true]

// //void 类型
// function alertName():void{
//     console.log('my name is void');
// }
// function alertNames():string{
//     return 'my Name is string'
// }

// //never类型
// function error(message:string):never{
//     throw new Error(message);
// }

// function fail(){
//     return error('Something failed')
// }

// //交叉类型
// // & 并集 
// interface use{
//     name:string,
//     age:number
// }
// interface per{
//     sex:number
// }

// type allInfo =use&per
// let persion:allInfo={name:'xxxx',age:1,sex:1}

// // 联合类型
// // | 或集
// let allType:number | string
// allType=1
// allType='123'
// // 不能将类型“boolean”分配给类型“string | number”。
// //allType = false

// //类型断言
// // 尖括号
// let someValue :any
// someValue=123
// someValue='dddd'
// let someValueLength=(<string>someValue).length

// // as写法 
//    let someName:any
//   someName=123
//   someName='123'
//   let someNameLength=(someName as string).length


//   enum Status{
//     uploading,
//     Success,
//     failed
//   }
//   console.log(Status.uploading);
//   console.log(Status['Success']);
//   console.log(Status.failed);
  
  
//   //数字
// //正确
// let num1 = 1
// let num2 = 2
// let sum = num1 + num2
// console.log(sum);

// // let num1=1
// // let num2=2
// // num2='3'
// // let sum =num1+num2
// // console.log(sum);

// /**
//  * number
//  */
// //十进制
// let decLiteral: number = 6
// //十六进制
// let hexLiteral: number = 0xf00d
// //ES6中的二进制
// let binaryLiteral: number = 0b1010
// //ES6中的八进制表示法
// let octalLiteral: number = 0o744

// let notANumber: number = NaN
// // 无穷大
// let infinityNumber: number = Infinity
// //当定义完为数字类型的数据的时候，在定义为str
// //-Infinity 为无穷小
// let num: number = 1
// //  num = "2222" // Error: 不能将"string"类型赋值给"number"

// // 布尔值
// let flag: boolean = false
// let flag1: boolean = true
// console.log(flag);

// //字符串
// let Name: string = '小红'
// let Age: number = 12
// let sentence = `my name is ${Name},my age is ${Age}`
// document.body.innerHTML = sentence

// //数组array 第一种字面量[]
// let list: number[] = [1, 3, 2]
// let listString: string[] = ['1', '2', '3']

// // let list:number[]=[1,2,3,'4']   错误的

// //第二种  Array<>
// let List: Array<number> = [1, 2, 3]
// let ListString: Array<string> = ['1', '2', '3']
// // 错误的
// // let List:Array<number>=[1,2,3,'2'] 错误的

// // undefined 和 null类型
// let u: undefined = undefined
// let n: null = null

// //对象 object
// let obj: { name: string, age: number }
// obj = { name: '小红', age: 18 }
// let a1: { name: string, sex: string }
// a1 = { name: '你好', sex: '我今年' }
// console.log(obj);
// let object = `${a1.name}我叫${obj.name}${a1.sex}${obj.age}`
// document.body.innerHTML = object

// //元组 Tuple
// let tom: [string, number] = ['Tom', 25]

// console.log(tom);
// let a2: [string, number];
// tom[0] = 'Tom';
// tom[1] = 25;

// tom[0].slice(1); // om
// tom[1].toFixed(2); // 3

// // 枚举enum
// enum Color {
//     /**
//      * 红色
//      */
//     red = 1,
//     /**
//      * 蓝色 
//     */
//     blue = 2,
//     /**
//      * 绿色
//      */
//     green = 3

// }
// let c: Color = Color.blue
// console.log(c);

// // any
// let value:any
// value=123
// value='abc'
// value=false
// const array:any[]=[1,'a',true]

// //void 类型
// function alertName():void{
//     console.log('my name is void');
// }
// function alertNames():string{
//     return 'my Name is string'
// }

// //never类型
// function error(message:string):never{
//     throw new Error(message);
// }

// function fail(){
//     return error('Something failed')
// }

// //交叉类型
// // & 并集 
// interface use{
//     name:string,
//     age:number
// }
// interface per{
//     sex:number
// }

// type allInfo =use&per
// let persion:allInfo={name:'xxxx',age:1,sex:1}

// // 联合类型
// // | 或集
// let allType:number | string
// allType=1
// allType='123'
// // 不能将类型“boolean”分配给类型“string | number”。
// //allType = false

// //类型断言
// // 尖括号
// let someValue :any
// someValue=123
// someValue='dddd'
// let someValueLength=(<string>someValue).length

// // as写法 
//    let someName:any
//   someName=123
//   someName='123'
//   let someNameLength=(someName as string).length


//   enum Status{
//     uploading,
//     Success,
//     failed
//   }
//   console.log(Status.uploading);
//   console.log(Status['Success']);
//   console.log(Status.failed);
  
  
  //数字
//正确
let num1 = 1
let num2 = 2
let sum = num1 + num2
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
let decLiteral: number = 6
//十六进制
let hexLiteral: number = 0xf00d
//ES6中的二进制
let binaryLiteral: number = 0b1010
//ES6中的八进制表示法
let octalLiteral: number = 0o744

let notANumber: number = NaN
// 无穷大
let infinityNumber: number = Infinity
//当定义完为数字类型的数据的时候，在定义为str
//-Infinity 为无穷小
let num: number = 1
//  num = "2222" // Error: 不能将"string"类型赋值给"number"

// 布尔值
let flag: boolean = false
let flag1: boolean = true
console.log(flag);

//字符串
let Name: string = '小红'
let Age: number = 12
let sentence = `my name is ${Name},my age is ${Age}`
document.body.innerHTML = sentence

//数组array 第一种字面量[]
let list: number[] = [1, 3, 2]
let listString: string[] = ['1', '2', '3']

// let list:number[]=[1,2,3,'4']   错误的

//第二种  Array<>
let List: Array<number> = [1, 2, 3]
let ListString: Array<string> = ['1', '2', '3']
// 错误的
// let List:Array<number>=[1,2,3,'2'] 错误的

// undefined 和 null类型
let u: undefined = undefined
let n: null = null

//对象 object
let obj: { name: string, age: number }
obj = { name: '小红', age: 18 }
let a1: { name: string, sex: string }
a1 = { name: '你好', sex: '我今年' }
console.log(obj);
let object = `${a1.name}我叫${obj.name}${a1.sex}${obj.age}`
document.body.innerHTML = object

//元组 Tuple
let tom: [string, number] = ['Tom', 25]

console.log(tom);
let a2: [string, number];
tom[0] = 'Tom';
tom[1] = 25;

tom[0].slice(1); // om
tom[1].toFixed(2); // 3

// 枚举enum
enum Color {
    /**
     * 红色
     */
    red = 1,
    /**
     * 蓝色 
    */
    blue = 2,
    /**
     * 绿色
     */
    green = 3

}
let c: Color = Color.blue
console.log(c);

// any
let value:any
value=123
value='abc'
value=false
const array:any[]=[1,'a',true]

//void 类型
function alertName():void{
    console.log('my name is void');
}
function alertNames():string{
    return 'my Name is string'
}

//never类型
function error(message:string):never{
    throw new Error(message);
}

function fail(){
    return error('Something failed')
}

//交叉类型
// & 并集 
interface use{
    name:string,
    age:number
}
interface per{
    sex:number
}

type allInfo =use&per
let persion:allInfo={name:'xxxx',age:1,sex:1}

// 联合类型
// | 或集
let allType:number | string
allType=1
allType='123'
// 不能将类型“boolean”分配给类型“string | number”。
//allType = false

//类型断言
// 尖括号
let someValue :any
someValue=123
someValue='dddd'
let someValueLength=(<string>someValue).length

// as写法 
   let someName:any
  someName=123
  someName='123'
  let someNameLength=(someName as string).length


  enum Status{
    uploading,
    Success,
    failed
  }
  console.log(Status.uploading);
  console.log(Status['Success']);
  console.log(Status.failed);
  
  
  