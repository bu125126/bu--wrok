//定义：装饰器是一种新的声明，他能够作用于类声明，方法，访问符，属性和参数上
//符号：@xxx(自定义的函数名称)
//注意点：要注意装饰器要紧挨着要修饰的内容的前面
// function stopProp(){

// }
// @stopProp

// 闭包** 的概念是: 内部函数可以返回外部的函数,内部可以调用外部的函数
// 装饰器工厂**也是一个函数，它的返回值是一个函数，返回的函数作为装饰器的调用函数。如果使用装饰器工厂，那么在使用的时候，就要加上函数调用，/
// function setProp(){
//     return function (target){

//     }
// }
// @setProp

// 装饰器组合
// 装饰器可以组合，也就是对于同一目标，引用多个装饰器
//可以写在一行
// @setName @setAge target
//可以换行
//  @setName
//  @setAge
//  target

//多个装饰器的执行顺序：
// - 装饰器工厂从上到下依次执行，但是只是用于返回函数但不调用函数；
// - 装饰器函数从下到上依次执行，也就是执行工厂函数返回的函数。

// function setName(){
//     console.log('get setName');
//     return function (target:any){
//         console.log(target);
//         console.log('setName');
//     }
// }
// function setAge(){
//     console.log('get setAge');
//     return function(target:any){
//         console.log(target);
//         console.log('setAge');
//     }
// }
// @setName()
// @setAge()
// class Test{}

// 类装饰器
// let sign=null
// function setName(name:string){
//     return function(target:Function){
//         sign=target
//         console.log(target.name);
//     }
// }
// @setName("lison")  //Info
// class Info{
//     constructor (){}
// }
// console.log(sign===Info);
// console.log(sign===Info.prototype.constructor);

// // 通过装饰器，我们就可以修改类的原型对象和构造函数
// function addName(constructor:{new():any}){
//     constructor.prototype.name="lison"
// }
// @addName
// class A{}
// const a=new A()
// console.log(a.name); //类型“A”上不存在属性“name”

// 上面例子中，我们通过 addName 修饰符可以在类 A 的原型对象上添加一个 name 属性，
// 这样使用 A 创建的实例，应该可以继承这个 name 属性，
// 访问实例对象的 name 属性应该返回"lison"，但是这里报错，
// 是因为我们定义的类 A 并没有定义属性 name，所以我们可以定义一个同名接口，
// 通过声明合并解决这个问题
// function addName(constructor:{new():any}){
//     constructor.prototype.name="lison"
// }
// @addName
// class A{}
// interface A{
//     name:string
// }
// const a=new A()
// console.log(a.name);  //lison

// function classDecorator<T extends {new(...arg:any[]):{}}>(target:T){
//     return class extends target{
//         newProperty="new property"
//         hello="override"
//     }
// }
// @classDecorator
// class Greeter{
//     property="property"
//     hello:string
//     constructor(m:string){
//         this.hello=m
//     }
// }
// console.log(new Greeter("world"));

// Greeter {
//     property: 'property',
//     hello: 'override',
//     newProperty: 'new property'
//   }

// function classDecorator(target:any):any{
//     return class{
//         newProperty="new property"
//         hello="override"
//     }
// }
// @classDecorator
// class Greeter{
//     property="property"
//     hello:string
//     constructor(m:string){
//         this.hello=m
//     }
// }
// console.log(new Greeter("world"));
// { newProperty: 'new property', hello: 'override' }

// 方法装饰器
// var obj = {};
// Object.defineProperty(obj, "name", {
//   value: "lison",
//   writable: false,
//   configurable: true,
//   enumerable: true
// });
// console.log(obj);
// // { name: 'lison' }
// obj.name = "test";
// console.log(obj);
// // { name: 'lison' }
// for (let key in obj) {
//   console.log(key);
// }
// // 'name'
// Object.defineProperty(obj, "name", {
//   enumerable: false
// });
// for (let key in obj) {
//   console.log(key);
// }
// // 什么都没打印
// Object.defineProperty(obj, "name", {
//   writable: true
// });
// obj.name = "test";
// console.log(obj);
// // { name: 'test' }
// Object.defineProperty(obj, "name", {
//   configurable: false
// });
// Object.defineProperty(obj, "name", {
//   writable: false
// });
// error Cannot redefine property: name

// 访问器装饰器
// function enumerable(bool: boolean) {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       descriptor.enumerable = bool;
//     };
//   }
//   class Info {
//     private _name: string;
//     constructor(name: string) {
//       this._name = name;
//     }
//     @enumerable(false)
//     get name() {
//       return this._name;
//     }
//     @enumerable(false) // error 不能向多个同名的 get/set 访问器应用修饰器
//     set name(name) {
//       this._name = name;
//     }
//   }

// 属性装饰器
// function printPropertyName(target:any,propertyName:String){
//     console.log(propertyName);
// }
// class Info{
//     @printPropertyName
//     name:string
//     @printPropertyName
//     age:number
// }

// function required(target: any, propertName: string, index: number) {
//     console.log(`修饰的是${propertName}的第${index + 1}个参数`);
//   }
//   class Info {
//     name: string = "lison";
//     age: number = 18;
//     getInfo(prefix: string, @required infoType: string): any {
//       return prefix + " " + this[infoType];
//     }
//   }
//   interface Info {
//     [key: string]: string | number | Function;
//   }
//   const info = new Info();
//   info.getInfo("hihi", "age"); // 修饰的是getInfo的第2个参数

// 声明的合并
// 1. interface声明可以被覆盖
// interface Info{
//     name:string
// }
// interface Info{
//     age:number
// }
// let info:Info
// info={  // error 类型“{ name: string; }”中缺少属性“age”
//     name:'lison'
// }
// info ={
//     name:'lison',
//     age:18
// }

// 2. type只能声明一次，并不能被覆盖
// type Info={
//     name:string
// }
// //标识符“Info”重复。
// type Info={
//     age:number
// }

//定义：装饰器是一种新的声明，他能够作用于类声明，方法，访问符，属性和参数上
//符号：@xxx(自定义的函数名称)
//注意点：要注意装饰器要紧挨着要修饰的内容的前面
// function stopProp(){

// }
// @stopProp

// 闭包** 的概念是: 内部函数可以返回外部的函数,内部可以调用外部的函数
// 装饰器工厂**也是一个函数，它的返回值是一个函数，返回的函数作为装饰器的调用函数。如果使用装饰器工厂，那么在使用的时候，就要加上函数调用，/
// function setProp(){
//     return function (target){

//     }
// }
// @setProp

// 装饰器组合
// 装饰器可以组合，也就是对于同一目标，引用多个装饰器
//可以写在一行
// @setName @setAge target
//可以换行
//  @setName
//  @setAge
//  target

//多个装饰器的执行顺序：
// - 装饰器工厂从上到下依次执行，但是只是用于返回函数但不调用函数；
// - 装饰器函数从下到上依次执行，也就是执行工厂函数返回的函数。

// function setName(){
//     console.log('get setName');
//     return function (target:any){
//         console.log(target);
//         console.log('setName');
//     }
// }
// function setAge(){
//     console.log('get setAge');
//     return function(target:any){
//         console.log(target);
//         console.log('setAge');
//     }
// }
// @setName()
// @setAge()
// class Test{}

// 类装饰器
// let sign=null
// function setName(name:string){
//     return function(target:Function){
//         sign=target
//         console.log(target.name);
//     }
// }
// @setName("lison")  //Info
// class Info{
//     constructor (){}
// }
// console.log(sign===Info);
// console.log(sign===Info.prototype.constructor);

// // 通过装饰器，我们就可以修改类的原型对象和构造函数
// function addName(constructor:{new():any}){
//     constructor.prototype.name="lison"
// }
// @addName
// class A{}
// const a=new A()
// console.log(a.name); //类型“A”上不存在属性“name”

// 上面例子中，我们通过 addName 修饰符可以在类 A 的原型对象上添加一个 name 属性，
// 这样使用 A 创建的实例，应该可以继承这个 name 属性，
// 访问实例对象的 name 属性应该返回"lison"，但是这里报错，
// 是因为我们定义的类 A 并没有定义属性 name，所以我们可以定义一个同名接口，
// 通过声明合并解决这个问题
// function addName(constructor:{new():any}){
//     constructor.prototype.name="lison"
// }
// @addName
// class A{}
// interface A{
//     name:string
// }
// const a=new A()
// console.log(a.name);  //lison

// function classDecorator<T extends {new(...arg:any[]):{}}>(target:T){
//     return class extends target{
//         newProperty="new property"
//         hello="override"
//     }
// }
// @classDecorator
// class Greeter{
//     property="property"
//     hello:string
//     constructor(m:string){
//         this.hello=m
//     }
// }
// console.log(new Greeter("world"));

// Greeter {
//     property: 'property',
//     hello: 'override',
//     newProperty: 'new property'
//   }

// function classDecorator(target:any):any{
//     return class{
//         newProperty="new property"
//         hello="override"
//     }
// }
// @classDecorator
// class Greeter{
//     property="property"
//     hello:string
//     constructor(m:string){
//         this.hello=m
//     }
// }
// console.log(new Greeter("world"));
// { newProperty: 'new property', hello: 'override' }

// 方法装饰器
// var obj = {};
// Object.defineProperty(obj, "name", {
//   value: "lison",
//   writable: false,
//   configurable: true,
//   enumerable: true
// });
// console.log(obj);
// // { name: 'lison' }
// obj.name = "test";
// console.log(obj);
// // { name: 'lison' }
// for (let key in obj) {
//   console.log(key);
// }
// // 'name'
// Object.defineProperty(obj, "name", {
//   enumerable: false
// });
// for (let key in obj) {
//   console.log(key);
// }
// // 什么都没打印
// Object.defineProperty(obj, "name", {
//   writable: true
// });
// obj.name = "test";
// console.log(obj);
// // { name: 'test' }
// Object.defineProperty(obj, "name", {
//   configurable: false
// });
// Object.defineProperty(obj, "name", {
//   writable: false
// });
// error Cannot redefine property: name

// 访问器装饰器
// function enumerable(bool: boolean) {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       descriptor.enumerable = bool;
//     };
//   }
//   class Info {
//     private _name: string;
//     constructor(name: string) {
//       this._name = name;
//     }
//     @enumerable(false)
//     get name() {
//       return this._name;
//     }
//     @enumerable(false) // error 不能向多个同名的 get/set 访问器应用修饰器
//     set name(name) {
//       this._name = name;
//     }
//   }

// 属性装饰器
// function printPropertyName(target:any,propertyName:String){
//     console.log(propertyName);
// }
// class Info{
//     @printPropertyName
//     name:string
//     @printPropertyName
//     age:number
// }

// function required(target: any, propertName: string, index: number) {
//     console.log(`修饰的是${propertName}的第${index + 1}个参数`);
//   }
//   class Info {
//     name: string = "lison";
//     age: number = 18;
//     getInfo(prefix: string, @required infoType: string): any {
//       return prefix + " " + this[infoType];
//     }
//   }
//   interface Info {
//     [key: string]: string | number | Function;
//   }
//   const info = new Info();
//   info.getInfo("hihi", "age"); // 修饰的是getInfo的第2个参数

// 声明的合并
// 1. interface声明可以被覆盖
// interface Info{
//     name:string
// }
// interface Info{
//     age:number
// }
// let info:Info
// info={  // error 类型“{ name: string; }”中缺少属性“age”
//     name:'lison'
// }
// info ={
//     name:'lison',
//     age:18
// }

// 2. type只能声明一次，并不能被覆盖
// type Info={
//     name:string
// }
// //标识符“Info”重复。
// type Info={
//     age:number
// }

//定义：装饰器是一种新的声明，他能够作用于类声明，方法，访问符，属性和参数上
//符号：@xxx(自定义的函数名称)
//注意点：要注意装饰器要紧挨着要修饰的内容的前面
// function stopProp(){

// }
// @stopProp

// 闭包** 的概念是: 内部函数可以返回外部的函数,内部可以调用外部的函数
// 装饰器工厂**也是一个函数，它的返回值是一个函数，返回的函数作为装饰器的调用函数。如果使用装饰器工厂，那么在使用的时候，就要加上函数调用，/
// function setProp(){
//     return function (target){

//     }
// }
// @setProp

// 装饰器组合
// 装饰器可以组合，也就是对于同一目标，引用多个装饰器
//可以写在一行
// @setName @setAge target
//可以换行
//  @setName
//  @setAge
//  target

//多个装饰器的执行顺序：
// - 装饰器工厂从上到下依次执行，但是只是用于返回函数但不调用函数；
// - 装饰器函数从下到上依次执行，也就是执行工厂函数返回的函数。

// function setName(){
//     console.log('get setName');
//     return function (target:any){
//         console.log(target);
//         console.log('setName');
//     }
// }
// function setAge(){
//     console.log('get setAge');
//     return function(target:any){
//         console.log(target);
//         console.log('setAge');
//     }
// }
// @setName()
// @setAge()
// class Test{}

// 类装饰器
// let sign=null
// function setName(name:string){
//     return function(target:Function){
//         sign=target
//         console.log(target.name);
//     }
// }
// @setName("lison")  //Info
// class Info{
//     constructor (){}
// }
// console.log(sign===Info);
// console.log(sign===Info.prototype.constructor);

// // 通过装饰器，我们就可以修改类的原型对象和构造函数
// function addName(constructor:{new():any}){
//     constructor.prototype.name="lison"
// }
// @addName
// class A{}
// const a=new A()
// console.log(a.name); //类型“A”上不存在属性“name”

// 上面例子中，我们通过 addName 修饰符可以在类 A 的原型对象上添加一个 name 属性，
// 这样使用 A 创建的实例，应该可以继承这个 name 属性，
// 访问实例对象的 name 属性应该返回"lison"，但是这里报错，
// 是因为我们定义的类 A 并没有定义属性 name，所以我们可以定义一个同名接口，
// 通过声明合并解决这个问题
// function addName(constructor:{new():any}){
//     constructor.prototype.name="lison"
// }
// @addName
// class A{}
// interface A{
//     name:string
// }
// const a=new A()
// console.log(a.name);  //lison

// function classDecorator<T extends {new(...arg:any[]):{}}>(target:T){
//     return class extends target{
//         newProperty="new property"
//         hello="override"
//     }
// }
// @classDecorator
// class Greeter{
//     property="property"
//     hello:string
//     constructor(m:string){
//         this.hello=m
//     }
// }
// console.log(new Greeter("world"));

// Greeter {
//     property: 'property',
//     hello: 'override',
//     newProperty: 'new property'
//   }

// function classDecorator(target:any):any{
//     return class{
//         newProperty="new property"
//         hello="override"
//     }
// }
// @classDecorator
// class Greeter{
//     property="property"
//     hello:string
//     constructor(m:string){
//         this.hello=m
//     }
// }
// console.log(new Greeter("world"));
// { newProperty: 'new property', hello: 'override' }

// 方法装饰器
// var obj = {};
// Object.defineProperty(obj, "name", {
//   value: "lison",
//   writable: false,
//   configurable: true,
//   enumerable: true
// });
// console.log(obj);
// // { name: 'lison' }
// obj.name = "test";
// console.log(obj);
// // { name: 'lison' }
// for (let key in obj) {
//   console.log(key);
// }
// // 'name'
// Object.defineProperty(obj, "name", {
//   enumerable: false
// });
// for (let key in obj) {
//   console.log(key);
// }
// // 什么都没打印
// Object.defineProperty(obj, "name", {
//   writable: true
// });
// obj.name = "test";
// console.log(obj);
// // { name: 'test' }
// Object.defineProperty(obj, "name", {
//   configurable: false
// });
// Object.defineProperty(obj, "name", {
//   writable: false
// });
// error Cannot redefine property: name

// 访问器装饰器
// function enumerable(bool: boolean) {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       descriptor.enumerable = bool;
//     };
//   }
//   class Info {
//     private _name: string;
//     constructor(name: string) {
//       this._name = name;
//     }
//     @enumerable(false)
//     get name() {
//       return this._name;
//     }
//     @enumerable(false) // error 不能向多个同名的 get/set 访问器应用修饰器
//     set name(name) {
//       this._name = name;
//     }
//   }

// 属性装饰器
// function printPropertyName(target:any,propertyName:String){
//     console.log(propertyName);
// }
// class Info{
//     @printPropertyName
//     name:string
//     @printPropertyName
//     age:number
// }

// function required(target: any, propertName: string, index: number) {
//     console.log(`修饰的是${propertName}的第${index + 1}个参数`);
//   }
//   class Info {
//     name: string = "lison";
//     age: number = 18;
//     getInfo(prefix: string, @required infoType: string): any {
//       return prefix + " " + this[infoType];
//     }
//   }
//   interface Info {
//     [key: string]: string | number | Function;
//   }
//   const info = new Info();
//   info.getInfo("hihi", "age"); // 修饰的是getInfo的第2个参数

// 声明的合并
// 1. interface声明可以被覆盖
// interface Info{
//     name:string
// }
// interface Info{
//     age:number
// }
// let info:Info
// info={  // error 类型“{ name: string; }”中缺少属性“age”
//     name:'lison'
// }
// info ={
//     name:'lison',
//     age:18
// }

// 2. type只能声明一次，并不能被覆盖
// type Info={
//     name:string
// }
// //标识符“Info”重复。
// type Info={
//     age:number
// }

