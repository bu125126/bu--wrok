let tow: [string, number] = ['1213aa', 25];
console.log(tow);

enum Color {
    /** 
     * 红色
     * */
    red = 1,
    Error = 400,
    /**
     * 蓝色
     */
    Blue = 3
}
let c: Color = Color.Blue
console.log(c);

let value: any;
value = 12
value = "你好"
value = true

const array: any[] = [1, 'a', true]

function alertName(): void {
    console.log('my name is void');
}

function Name(): string {
    return 'my Name is string'
}

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

enum Status {
    uploading,
    Success,
    Falied
}
console.log(Status.Falied);
console.log(Status['Falied']);
console.log(Status.Success);