// new 新的请求http
var ajax = new XMLHttpRequest;
//method,url
ajax.open('get', 'https://baidu.com');
//发送数据
ajax.send();
//接受返回值，判断是否返回成功
ajax.onreadystatechange = function () {
    if (ajax.status == 400 && ajax.readyState == 2) {
        console.log(ajax.response);
    }
};
// 用ts来进行封装
/**
 * 思路: 1. 有三个参数, 用interface
 *      2. 有两个枚举值,所以用enum
 *      3. 放在一个函数里面,进行接口和参数的校验
 *          3.1 函数需要传参,且参数是对象
 *
 */
var Status;
(function (Status) {
    Status[Status["success"] = 400] = "success";
    Status[Status["readyState"] = 2] = "readyState";
})(Status || (Status = {}));
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["ReadyState"] = 4] = "ReadyState";
})(Status || (Status = {}));
function getAjax(params) {
    var ajax = new XMLHttpRequest();
    ajax.open(params.methods, params.url);
    ajax.send(params.data);
    ajax.onreadystatechange = function () {
        if (ajax.status == Status.Success && ajax.readyState == Status.ReadyState) {
            console.log('可以用了');
        }
    };
}
//接受一个字符串类型数据，返回一个user类型（字符串类型）的数据
function Input(str) {
    return str.slice(0, 2);
}
// 把返回结果赋值给userInput
var userInput = Input('hello');
// 重新给其赋值一个字符串类型的值，没有报错，说明用type声明的字符串类型生效
userInput = "new";
//声明一个类型为Bear类型的对象，要求既要有name,也要有honey说明用extends扩展接口成功
var bear = {
    name: 'winie',
    honey: true
};
console.log(bear.name);
console.log(bear.honey);
