// function Anima(name){
//     this.name=name,
//     this.sayhi=function(){
//         console.log('我是一个继承函数');
//     }
// }
// Anima.prototype.age=13
// Anima.prototype.task=function(){
//     console.log('123');
// }
// let cat=new Anima('Cat')
// console.log(cat.name);
// console.log(cat.sayhi);
// console.log(cat.task);
// console.log(cat.age);

// class Persion{
//     /**
//      * 定义属性
//      */
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     /**
//      *  定义方法
//      */
//     sayHi(){
//         return this.name
//     }
// }

// let p=new Persion('小红',12)
// console.log(p.name);
// console.log(p.age);
// console.log(p.sayHi());


// class Anmial{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     run(){
//         console.log('我在运动');
//     }
// }
// class Dog extends Anmial{
//     constructor (props){
//         super(props)
//     }
    
// }
// let d=new Dog('哈士奇')
// console.log(d.name);
// d.run()

// ES5中的继承
function Anima(name){
    this.name=name
    this.run=()=>{
        console.log(this.name+'会跑步');
    }
}
Anima.prototype.song=function(){
    console.log(`${this.name}会唱歌`);
}

// // 原型链继承
// function Dog(name){

// }
// Dog.prototype=Anima.prototype
// let d=new Dog('哈哈')
// d.song()

//原型链加冒充对象的继承方式
function Dog(name){
    Anima.call(this.name)
}
// let d=new Dog('哈士奇')
// console.log(d.name);
// console.log(d.run());
// console.log(d.song);

function Dog(name){
    Animas.call(this.name)
}
Dog.prototype=Anima.prototype
let d=new Dog('哈士奇')
d.run() 
d.song()
