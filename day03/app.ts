// /**
//  * emum的详解
//  * 1. 总结：每次手动添加索引的时候，下面数据如果不是手动添加的索引，将会以递增的方式，把索引展示出来
//  * 2. 数字类型，我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
//  */
// //数字枚举
// //自动添加指定索引符合
// //我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
// enum Status {
//     uploading,
//     success,
//     falied
// }
// console.log(Status.uploading);
// console.log(Status['success']);
// console.log(Status.falied);

// /**
//  * 指定索引值
//  */
// enum Anmimal{
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

// //--------计算值

// //计算值和常量
// const getvalue=()=>{
//     return 1
// }
// // 3.计算值和常量
// enum Constant{
//     a=getvalue(),
//     b=1, //枚举成员必须具有初始表达式
//     c,
// }

// /**
//  * 4. 反向映射
//  */

// enum Statuss{
//     success=200,
//     notfound=404,
//     error=500
// }
// console.log(Statuss.error);
// console.log(Statuss[404]);
// console.log(Statuss.notfound);

// /**
//  * 5. 字符串枚举
//  */
// const getValue=()=>{
//     return 0
// }
// const names='小明'
// enum Message{
//     /**错误信息 */
//     Error='error message',
//     /**
//      * 成功的错误信息
//      * 枚举成员必须具有初始话表达式
//      */
//      SuccessError = 200, //枚举成员必须具有初始化表达式
//     //含字符串值成员的枚举种不允许使用计算值    
//     // ClientError=names  
// }
// console.log(Message.SuccessError,'SuccessError');
// console.log(Message.Error);
// console.log(Message['ClientError']);

// /**
//  * 6. 异构枚举
//  */
// enum Result{
//     Faild =0,
//     Success =  "Success"
// }

// /**
//  * 7. 枚举成员类型
//  */
// enum Animal {
//     dog=1,
//     cat=2
// }
// /**
//  * 狗
//  */
// interface dog{
//     type:Animal.dog
// }
// /**
//  * 猫
//  */
//  interface cat{
//     type:Animal.cat
// }

// // let cat1:cat={
// //     type:Animal.dog // error [ts] 不能将类型“Animal.Dog”分配给类型“Animal.Cat”
// // }
// let Dog:dog={
//     type:Animal.dog
// }

// /**
//  * 联合类型
//  */
// enum Keys{
//     Off,
//     On
// }

// interface Light{
//     status:Keys
// }
// let light:Light={
//     status:Keys.Off
// }

// /**
//  * 运行时对象
//  */
// enum E{
//     A,
//     B
// }
// const getIndex=(enumObj:{C:number}):number=>{
//     return enumObj.C
// }
// // console.log(getIndex(E));

// /**
//  * const enum
//  */

// enum Animal{
//     Rabbit,
//     Pig
// }
// const enum Light90{
//     Off,
//     On
// }

// const status45 = Animal.Pig
// const status57 = Light90.Off
// console.log(status45,status57);


// /**
//  * emum的详解
//  * 1. 总结：每次手动添加索引的时候，下面数据如果不是手动添加的索引，将会以递增的方式，把索引展示出来
//  * 2. 数字类型，我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
//  */
// //数字枚举
// //自动添加指定索引符合
// //我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
// enum Status {
//     uploading,
//     success,
//     falied
// }
// console.log(Status.uploading);
// console.log(Status['success']);
// console.log(Status.falied);

// /**
//  * 指定索引值
//  */
// enum Anmimal{
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

// //--------计算值

// //计算值和常量
// const getvalue=()=>{
//     return 1
// }
// // 3.计算值和常量
// enum Constant{
//     a=getvalue(),
//     b=1, //枚举成员必须具有初始表达式
//     c,
// }

// /**
//  * 4. 反向映射
//  */

// enum Statuss{
//     success=200,
//     notfound=404,
//     error=500
// }
// console.log(Statuss.error);
// console.log(Statuss[404]);
// console.log(Statuss.notfound);

// /**
//  * 5. 字符串枚举
//  */
// const getValue=()=>{
//     return 0
// }
// const names='小明'
// enum Message{
//     /**错误信息 */
//     Error='error message',
//     /**
//      * 成功的错误信息
//      * 枚举成员必须具有初始话表达式
//      */
//      SuccessError = 200, //枚举成员必须具有初始化表达式
//     //含字符串值成员的枚举种不允许使用计算值    
//     // ClientError=names  
// }
// console.log(Message.SuccessError,'SuccessError');
// console.log(Message.Error);
// console.log(Message['ClientError']);

// /**
//  * 6. 异构枚举
//  */
// enum Result{
//     Faild =0,
//     Success =  "Success"
// }

// /**
//  * 7. 枚举成员类型
//  */
// enum Animal {
//     dog=1,
//     cat=2
// }
// /**
//  * 狗
//  */
// interface dog{
//     type:Animal.dog
// }
// /**
//  * 猫
//  */
//  interface cat{
//     type:Animal.cat
// }

// // let cat1:cat={
// //     type:Animal.dog // error [ts] 不能将类型“Animal.Dog”分配给类型“Animal.Cat”
// // }
// let Dog:dog={
//     type:Animal.dog
// }

// /**
//  * 联合类型
//  */
// enum Keys{
//     Off,
//     On
// }

// interface Light{
//     status:Keys
// }
// let light:Light={
//     status:Keys.Off
// }

// /**
//  * 运行时对象
//  */
// enum E{
//     A,
//     B
// }
// const getIndex=(enumObj:{C:number}):number=>{
//     return enumObj.C
// }
// // console.log(getIndex(E));

// /**
//  * const enum
//  */

// enum Animal{
//     Rabbit,
//     Pig
// }
// const enum Light90{
//     Off,
//     On
// }

// const status45 = Animal.Pig
// const status57 = Light90.Off
// console.log(status45,status57);


/**
 * emum的详解
 * 1. 总结：每次手动添加索引的时候，下面数据如果不是手动添加的索引，将会以递增的方式，把索引展示出来
 * 2. 数字类型，我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
 */
//数字枚举
//自动添加指定索引符合
//我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
enum Status {
    uploading,
    success,
    falied
}
console.log(Status.uploading);
console.log(Status['success']);
console.log(Status.falied);

/**
 * 指定索引值
 */
enum Anmimal{
    /**猪 */
    pig=200,
    /**狗 */
    dog,
    /**猫 */
    cat=800,
    /**蛇 */
    snake
}
console.log(Anmimal.cat);
console.log(Anmimal['dog']);
console.log(Anmimal.snake);

//--------计算值

//计算值和常量
const getvalue=()=>{
    return 1
}
// 3.计算值和常量
enum Constant{
    a=getvalue(),
    b=1, //枚举成员必须具有初始表达式
    c,
}

/**
 * 4. 反向映射
 */

enum Statuss{
    success=200,
    notfound=404,
    error=500
}
console.log(Statuss.error);
console.log(Statuss[404]);
console.log(Statuss.notfound);

/**
 * 5. 字符串枚举
 */
const getValue=()=>{
    return 0
}
const names='小明'
enum Message{
    /**错误信息 */
    Error='error message',
    /**
     * 成功的错误信息
     * 枚举成员必须具有初始话表达式
     */
     SuccessError = 200, //枚举成员必须具有初始化表达式
    //含字符串值成员的枚举种不允许使用计算值    
    // ClientError=names  
}
console.log(Message.SuccessError,'SuccessError');
console.log(Message.Error);
console.log(Message['ClientError']);

/**
 * 6. 异构枚举
 */
enum Result{
    Faild =0,
    Success =  "Success"
}

/**
 * 7. 枚举成员类型
 */
enum Animal {
    dog=1,
    cat=2
}
/**
 * 狗
 */
interface dog{
    type:Animal.dog
}
/**
 * 猫
 */
 interface cat{
    type:Animal.cat
}

// let cat1:cat={
//     type:Animal.dog // error [ts] 不能将类型“Animal.Dog”分配给类型“Animal.Cat”
// }
let Dog:dog={
    type:Animal.dog
}

/**
 * 联合类型
 */
enum Keys{
    Off,
    On
}

interface Light{
    status:Keys
}
let light:Light={
    status:Keys.Off
}

/**
 * 运行时对象
 */
enum E{
    A,
    B
}
const getIndex=(enumObj:{C:number}):number=>{
    return enumObj.C
}
// console.log(getIndex(E));

/**
 * const enum
 */

enum Animal{
    Rabbit,
    Pig
}
const enum Light90{
    Off,
    On
}

const status45 = Animal.Pig
const status57 = Light90.Off
console.log(status45,status57);