// class People{
//     //类的属性
//     constructor(name,age){ // 构造器，实例化方法的时候触发
//         this.name=name
//         this.age=age
//     }
//     //类的方法
//     sport(){
//         return this.name+'会运动'
//     }
// }
// // 对类进行实例化
// let p=new People('小明',18)
// // 调用类的方法
// console.log(p.sport()); 
// // 获取类的属性
// console.log(p.age);

//ES6中的继承
// class Animal{
//     constructor(name){ //构造器，实例化方法的时候触发
//         this.name=name
//     }
//     run(){
//         console.log(`${this.name}会跑步`);
//     }
// }
// // 声明继承的类
// class Dog extends Animal{
//     constructor(name){
//         super(name)
//     }
// }
// let d=new Dog('哈士奇')
// console.log(d.name);
// d.run()

