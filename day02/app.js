var tow = ['1213aa', 25];
console.log(tow);
var Color;
(function (Color) {
    /**
     * 红色
     * */
    Color[Color["red"] = 1] = "red";
    Color[Color["Error"] = 400] = "Error";
    /**
     * 蓝色
     */
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
var value;
value = 12;
value = "你好";
value = true;
var array = [1, 'a', true];
function alertName() {
    console.log('my name is void');
}
function Name() {
    return 'my Name is string';
}
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
var Status;
(function (Status) {
    Status[Status["uploading"] = 0] = "uploading";
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Falied"] = 2] = "Falied";
})(Status || (Status = {}));
console.log(Status.Falied);
console.log(Status['Falied']);
console.log(Status.Success);
