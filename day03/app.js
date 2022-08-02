/**
 * emum的详解
 * 1. 总结：每次手动添加索引的时候，下面数据如果不是手动添加的索引，将会以递增的方式，把索引展示出来
 * 2. 数字类型，我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
 */
//数字枚举
//自动添加指定索引符合
//我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
var Status;
(function (Status) {
    Status[Status["uploading"] = 0] = "uploading";
    Status[Status["success"] = 1] = "success";
    Status[Status["falied"] = 2] = "falied";
})(Status || (Status = {}));
console.log(Status.uploading);
console.log(Status['success']);
console.log(Status.falied);
/**
 * 指定索引值
 */
var Anmimal;
(function (Anmimal) {
    /**猪 */
    Anmimal[Anmimal["pig"] = 200] = "pig";
    /**狗 */
    Anmimal[Anmimal["dog"] = 201] = "dog";
    /**猫 */
    Anmimal[Anmimal["cat"] = 800] = "cat";
    /**蛇 */
    Anmimal[Anmimal["snake"] = 801] = "snake";
})(Anmimal || (Anmimal = {}));
console.log(Anmimal.cat);
console.log(Anmimal['dog']);
console.log(Anmimal.snake);
//--------计算值
//计算值和常量
var getvalue = function () {
    return 1;
};
// 3.计算值和常量
var Constant;
(function (Constant) {
    Constant[Constant["a"] = getvalue()] = "a";
    Constant[Constant["b"] = 1] = "b";
    Constant[Constant["c"] = 2] = "c";
})(Constant || (Constant = {}));
/**
 * 4. 反向映射
 */
var Statuss;
(function (Statuss) {
    Statuss[Statuss["success"] = 200] = "success";
    Statuss[Statuss["notfound"] = 404] = "notfound";
    Statuss[Statuss["error"] = 500] = "error";
})(Statuss || (Statuss = {}));
console.log(Statuss.error);
console.log(Statuss[404]);
console.log(Statuss.notfound);
/**
 * 5. 字符串枚举
 */
var getValue = function () {
    return 0;
};
var names = '小明';
var Message;
(function (Message) {
    /**错误信息 */
    Message["Error"] = "error message";
    /**
     * 成功的错误信息
     * 枚举成员必须具有初始话表达式
     */
    Message[Message["SuccessError"] = 200] = "SuccessError";
    //含字符串值成员的枚举种不允许使用计算值    
    // ClientError=names  
})(Message || (Message = {}));
console.log(Message.SuccessError, 'SuccessError');
console.log(Message.Error);
console.log(Message['ClientError']);
/**
 * 6. 异构枚举
 */
var Result;
(function (Result) {
    Result[Result["Faild"] = 0] = "Faild";
    Result["Success"] = "Success";
})(Result || (Result = {}));
/**
 * 7. 枚举成员类型
 */
var Animal;
(function (Animal) {
    Animal[Animal["dog"] = 1] = "dog";
    Animal[Animal["cat"] = 2] = "cat";
})(Animal || (Animal = {}));
var cat1 = {
    type: Animal.dog // error [ts] 不能将类型“Animal.Dog”分配给类型“Animal.Cat”
};
var Dog = {
    type: Animal.dog
};
/**
 * 联合类型
 */
var Keys;
(function (Keys) {
    Keys[Keys["Off"] = 0] = "Off";
    Keys[Keys["On"] = 1] = "On";
})(Keys || (Keys = {}));
var light = {
    status: Keys.Off
};
/**
 * 运行时对象
 */
var E;
(function (E) {
    E[E["A"] = 0] = "A";
    E[E["B"] = 1] = "B";
})(E || (E = {}));
var getIndex = function (enumObj) {
    return enumObj.C;
};
console.log(getIndex(E));
/**
 * const enum
 */
(function (Animal) {
    Animal[Animal["Rabbit"] = 0] = "Rabbit";
    Animal[Animal["Pig"] = 1] = "Pig";
})(Animal || (Animal = {}));
var status45 = Animal.Pig;
var status57 = 0 /* Light90.Off */;
console.log(status45, status57);
