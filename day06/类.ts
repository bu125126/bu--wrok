// //TS中类的定义
// class People{
//     name:string
//     age:number
//     constructor(name:string,age: number){
//         this.name=name
//         this.age=age
//     }
//     sport():string{
//         return `${this.name}会运动`
//     }
// }
// //对类进行实例化
// let p=new People('小明',18)
// //调用类的方法
// console.log(p.sport());
// console.log(p.age);

//TS的类的继承   和ES6中的继承一样，只是添加了属性的数据类型
// class Animal{
//     name:string
//     constructor(name: string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
// }

// class Dog1 extends Animal{
//     constructor(name: string){
//         super(name)
//     }
// }

// let dd = new Dog1('哈士奇')
// console.log(dd.name);
// console.log(dd.getName());

// 类的修饰符  
//public    公有，类里面、子类、类外面都可以访问 
//protected   保护类型 类里面、子类可以访问  类外面不可以访问
//private		私有类型 类里面可以访问，其他不行

// class Animal{
//     name:string
//     constructor(name: string){
//         this.name=name
//     }
//     getName():string{
//         // 父类内部获取name属性
//         return this.name
//     }
// }
// //实例父类
// let a=new Animal('动物')
// // 父类外获取name属性
// console.log(a.name);

// //声明 继承类
// class Dog2 extends Animal{
//     constructor(name: string){
//         super(name)
//     }
//     run():string{
//         //子类内部获取name属性
//         return this.name+'会运动'
//     }
// }

// //实例化子类
// let d1=new Dog2('哈士奇')
// //子类 类外
// console.log(d1.name);
// console.log(d1.getName());
// console.log(d1.run());

// 使用 protected 修饰符，类里面、子类可以访问  类外面不可以访问
// class Animal{
//     protected name:string
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
// }
// //实例化父类
// let a=new Animal('动物')
// //父类外获取name属性
// console.log(a.name); //属性“name”受保护，只能在类“Animal”及其子类中访问。

// class dog extends Animal{
//     constructor(name){
//         super(name)
//     }
//     run():string{
//         //子类内部获取name属性
//         return this.name+'会运动'
//     }
// }
// let d1=new dog('哈士奇')
// //子类
// console.log(d1.name); //属性“name”受保护，只能在类“Animal”及其子类中访问
// console.log(d.getName());

// 使用 private 修饰符，类里面可以访问，其他不行
// class Animal {
//     private name: string
//     constructor(name){
//         this.name = name
//     }
//     getName():string{
//         // 父类内部获取name属性
//         return this.name
//     }
// }
// // 实例化父类
// let a = new Animal('动物')
// // 父类外获取name属性
// console.log(a.name); // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问

// // 声明 狗类 继承 动物类
// class Dog extends Animal {
//     constructor(name){
//         super(name)
//     }
//     run():string{
//         // 子类内部获取name属性
//         return this.name + '会运动' // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问
//     }
// }

// // 实例化子类
// let d = new Dog('哈士奇')
// // 子类 类外
// console.log(d.name); // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问
// console.log(d.getName());



// 静态属性 
//使用static修饰静态属性
// class Animal{
//     name:string
//     static prop:string="1"
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
// }
// console.log(Animal.prop); 
// let a=new Animal('小狗')
// console.log(a.prop); //属性“prop”在类型“Animal”上不存在。你的意思是改为访问静态成员

//静态方法
// class Animal{
//     name:string
//     static prop :string="1"
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
//     static sayHi():string{
//         return "hello"
//     }
// }
// // Animal.prop="haha"

// console.log(Animal.prop);
// console.log(Animal.sayHi());
// let a=new Animal('效果')

// console.log(a.prop); //属性“prop”在类型“Animal”上不存在。
// console.log(a.sayHi()); //属性“sayHi”在类型“Animal”上不存在


//多态
// 多态的定义
// 父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现
// 多态的实现
// 1.首先一个父类，父类中声明一个方法，不去实现
// class Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     //父类定义了一个方法，不去实现
//     eat(){}
// }
//  // 2.声明了一个继承父类，并且实现eat方法
//  class dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(): void {
//         console.log(`${this.name}吃骨头`);
//     }
//  }
//  // 3. 在声明一个继承父类，并且实现eat方法
//  class Cat extends Animal{
//     constructor (name:string){
//         super(name)
//     }
//     eat():void{
//         console.log(`${this.name}吃鱼`);
//     }
//  }

//抽象类

//1.抽象类的定义
//  提供其他类继承的基类，不能直接被实例化
//  定义抽象类的语法
//  abstract class 类名 {}

// 2. 抽象类不能直接被实例化
// abstract class Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
// }
// let a=new Animal('小明')  //无法创建抽象类的实例

// 抽象类不能直接被实例化，只是提供其他类继承的一个基类
//  abstract class Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
//  }
//  class dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//  }

 //抽象方法
 //抽象方法语法
//  abstract 方法名():{}

// 抽象方法不能抽离抽象类使用ts
// class Animal {
//     name:string
//     constructor (name:string){
//         this.name=name
//     }
//     abstract eat():string //抽象方法只能出现在抽象类中。
// }
//也就是说 抽象方法只能出现在抽象类中
// abstract class Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     abstract eat():string
// }
//抽象方法不能有具体体现
// abstract class Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     abstract eat():string{  // 方法“eat”不能具有实现，因为它标记为抽象。
//         return ''
//     }
// }

// abstract class Animal {
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     abstract eat():string
// }
// let a=new Animal('小明')

// class dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat():string{
//         return this.name
//     }
// }

//类类型接口
// 1.定义一个接口,约束必须有name属性和eat方法
// interface IAnimal {
//     name: string
//     eat():string
// }
// // class 类型 implements 接口名 {}
// class Animal implements IAnimal {
//     name: string;
//     constructor(name:string){
//         this.name = name
//     }
//     eat(): string {
//         return ''
//     }
// }
//  接口的继承
// 声明一个接口，要求有一个name属性
// interface Ianimal {
//     name: string
// }
// 声明一个接口继承上述接口

// 接口继承语法：接口一继承接口二
// interface IPeople extends Ianimal {
//     work():void
// }
// class Coder implements IPeople {
//     name: string
//     constructor(name){
//         this.name = name
//     }
//     work(): void {
        
//     }
// }

// //TS中类的定义
// class People{
//     name:string
//     age:number
//     constructor(name:string,age: number){
//         this.name=name
//         this.age=age
//     }
//     sport():string{
//         return `${this.name}会运动`
//     }
// }
// //对类进行实例化
// let p=new People('小明',18)
// //调用类的方法
// console.log(p.sport());
// console.log(p.age);

//TS的类的继承   和ES6中的继承一样，只是添加了属性的数据类型
// class Animal{
//     name:string
//     constructor(name: string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
// }

// class Dog1 extends Animal{
//     constructor(name: string){
//         super(name)
//     }
// }

// let dd = new Dog1('哈士奇')
// console.log(dd.name);
// console.log(dd.getName());

// 类的修饰符  
//public    公有，类里面、子类、类外面都可以访问 
//protected   保护类型 类里面、子类可以访问  类外面不可以访问
//private		私有类型 类里面可以访问，其他不行

// class Animal{
//     name:string
//     constructor(name: string){
//         this.name=name
//     }
//     getName():string{
//         // 父类内部获取name属性
//         return this.name
//     }
// }
// //实例父类
// let a=new Animal('动物')
// // 父类外获取name属性
// console.log(a.name);

// //声明 继承类
// class Dog2 extends Animal{
//     constructor(name: string){
//         super(name)
//     }
//     run():string{
//         //子类内部获取name属性
//         return this.name+'会运动'
//     }
// }

// //实例化子类
// let d1=new Dog2('哈士奇')
// //子类 类外
// console.log(d1.name);
// console.log(d1.getName());
// console.log(d1.run());

// 使用 protected 修饰符，类里面、子类可以访问  类外面不可以访问
// class Animal{
//     protected name:string
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
// }
// //实例化父类
// let a=new Animal('动物')
// //父类外获取name属性
// console.log(a.name); //属性“name”受保护，只能在类“Animal”及其子类中访问。

// class dog extends Animal{
//     constructor(name){
//         super(name)
//     }
//     run():string{
//         //子类内部获取name属性
//         return this.name+'会运动'
//     }
// }
// let d1=new dog('哈士奇')
// //子类
// console.log(d1.name); //属性“name”受保护，只能在类“Animal”及其子类中访问
// console.log(d.getName());

// 使用 private 修饰符，类里面可以访问，其他不行
// class Animal {
//     private name: string
//     constructor(name){
//         this.name = name
//     }
//     getName():string{
//         // 父类内部获取name属性
//         return this.name
//     }
// }
// // 实例化父类
// let a = new Animal('动物')
// // 父类外获取name属性
// console.log(a.name); // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问

// // 声明 狗类 继承 动物类
// class Dog extends Animal {
//     constructor(name){
//         super(name)
//     }
//     run():string{
//         // 子类内部获取name属性
//         return this.name + '会运动' // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问
//     }
// }

// // 实例化子类
// let d = new Dog('哈士奇')
// // 子类 类外
// console.log(d.name); // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问
// console.log(d.getName());



// 静态属性 
//使用static修饰静态属性
// class Animal{
//     name:string
//     static prop:string="1"
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
// }
// console.log(Animal.prop); 
// let a=new Animal('小狗')
// console.log(a.prop); //属性“prop”在类型“Animal”上不存在。你的意思是改为访问静态成员

//静态方法
// class Animal{
//     name:string
//     static prop :string="1"
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
//     static sayHi():string{
//         return "hello"
//     }
// }
// // Animal.prop="haha"

// console.log(Animal.prop);
// console.log(Animal.sayHi());
// let a=new Animal('效果')

// console.log(a.prop); //属性“prop”在类型“Animal”上不存在。
// console.log(a.sayHi()); //属性“sayHi”在类型“Animal”上不存在


//多态
// 多态的定义
// 父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现
// 多态的实现
// 1.首先一个父类，父类中声明一个方法，不去实现
// class Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     //父类定义了一个方法，不去实现
//     eat(){}
// }
//  // 2.声明了一个继承父类，并且实现eat方法
//  class dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(): void {
//         console.log(`${this.name}吃骨头`);
//     }
//  }
//  // 3. 在声明一个继承父类，并且实现eat方法
//  class Cat extends Animal{
//     constructor (name:string){
//         super(name)
//     }
//     eat():void{
//         console.log(`${this.name}吃鱼`);
//     }
//  }

//抽象类

//1.抽象类的定义
//  提供其他类继承的基类，不能直接被实例化
//  定义抽象类的语法
//  abstract class 类名 {}

// 2. 抽象类不能直接被实例化
// abstract class Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
// }
// let a=new Animal('小明')  //无法创建抽象类的实例

// 抽象类不能直接被实例化，只是提供其他类继承的一个基类
//  abstract class Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
//  }
//  class dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//  }

 //抽象方法
 //抽象方法语法
//  abstract 方法名():{}

// 抽象方法不能抽离抽象类使用ts
// class Animal {
//     name:string
//     constructor (name:string){
//         this.name=name
//     }
//     abstract eat():string //抽象方法只能出现在抽象类中。
// }
//也就是说 抽象方法只能出现在抽象类中
// abstract class Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     abstract eat():string
// }
//抽象方法不能有具体体现
// abstract class Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     abstract eat():string{  // 方法“eat”不能具有实现，因为它标记为抽象。
//         return ''
//     }
// }

// abstract class Animal {
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     abstract eat():string
// }
// let a=new Animal('小明')

// class dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat():string{
//         return this.name
//     }
// }

//类类型接口
// 1.定义一个接口,约束必须有name属性和eat方法
// interface IAnimal {
//     name: string
//     eat():string
// }
// // class 类型 implements 接口名 {}
// class Animal implements IAnimal {
//     name: string;
//     constructor(name:string){
//         this.name = name
//     }
//     eat(): string {
//         return ''
//     }
// }
//  接口的继承
// 声明一个接口，要求有一个name属性
// interface Ianimal {
//     name: string
// }
// 声明一个接口继承上述接口

// 接口继承语法：接口一继承接口二
// interface IPeople extends Ianimal {
//     work():void
// }
// class Coder implements IPeople {
//     name: string
//     constructor(name){
//         this.name = name
//     }
//     work(): void {
        
//     }
// }

// //TS中类的定义
// class People{
//     name:string
//     age:number
//     constructor(name:string,age: number){
//         this.name=name
//         this.age=age
//     }
//     sport():string{
//         return `${this.name}会运动`
//     }
// }
// //对类进行实例化
// let p=new People('小明',18)
// //调用类的方法
// console.log(p.sport());
// console.log(p.age);

//TS的类的继承   和ES6中的继承一样，只是添加了属性的数据类型
// class Animal{
//     name:string
//     constructor(name: string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
// }

// class Dog1 extends Animal{
//     constructor(name: string){
//         super(name)
//     }
// }

// let dd = new Dog1('哈士奇')
// console.log(dd.name);
// console.log(dd.getName());

// 类的修饰符  
//public    公有，类里面、子类、类外面都可以访问 
//protected   保护类型 类里面、子类可以访问  类外面不可以访问
//private		私有类型 类里面可以访问，其他不行

// class Animal{
//     name:string
//     constructor(name: string){
//         this.name=name
//     }
//     getName():string{
//         // 父类内部获取name属性
//         return this.name
//     }
// }
// //实例父类
// let a=new Animal('动物')
// // 父类外获取name属性
// console.log(a.name);

// //声明 继承类
// class Dog2 extends Animal{
//     constructor(name: string){
//         super(name)
//     }
//     run():string{
//         //子类内部获取name属性
//         return this.name+'会运动'
//     }
// }

// //实例化子类
// let d1=new Dog2('哈士奇')
// //子类 类外
// console.log(d1.name);
// console.log(d1.getName());
// console.log(d1.run());

// 使用 protected 修饰符，类里面、子类可以访问  类外面不可以访问
// class Animal{
//     protected name:string
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
// }
// //实例化父类
// let a=new Animal('动物')
// //父类外获取name属性
// console.log(a.name); //属性“name”受保护，只能在类“Animal”及其子类中访问。

// class dog extends Animal{
//     constructor(name){
//         super(name)
//     }
//     run():string{
//         //子类内部获取name属性
//         return this.name+'会运动'
//     }
// }
// let d1=new dog('哈士奇')
// //子类
// console.log(d1.name); //属性“name”受保护，只能在类“Animal”及其子类中访问
// console.log(d.getName());

// 使用 private 修饰符，类里面可以访问，其他不行
// class Animal {
//     private name: string
//     constructor(name){
//         this.name = name
//     }
//     getName():string{
//         // 父类内部获取name属性
//         return this.name
//     }
// }
// // 实例化父类
// let a = new Animal('动物')
// // 父类外获取name属性
// console.log(a.name); // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问

// // 声明 狗类 继承 动物类
// class Dog extends Animal {
//     constructor(name){
//         super(name)
//     }
//     run():string{
//         // 子类内部获取name属性
//         return this.name + '会运动' // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问
//     }
// }

// // 实例化子类
// let d = new Dog('哈士奇')
// // 子类 类外
// console.log(d.name); // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问
// console.log(d.getName());



// 静态属性 
//使用static修饰静态属性
// class Animal{
//     name:string
//     static prop:string="1"
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
// }
// console.log(Animal.prop); 
// let a=new Animal('小狗')
// console.log(a.prop); //属性“prop”在类型“Animal”上不存在。你的意思是改为访问静态成员

//静态方法
// class Animal{
//     name:string
//     static prop :string="1"
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
//     static sayHi():string{
//         return "hello"
//     }
// }
// // Animal.prop="haha"

// console.log(Animal.prop);
// console.log(Animal.sayHi());
// let a=new Animal('效果')

// console.log(a.prop); //属性“prop”在类型“Animal”上不存在。
// console.log(a.sayHi()); //属性“sayHi”在类型“Animal”上不存在


//多态
// 多态的定义
// 父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现
// 多态的实现
// 1.首先一个父类，父类中声明一个方法，不去实现
// class Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     //父类定义了一个方法，不去实现
//     eat(){}
// }
//  // 2.声明了一个继承父类，并且实现eat方法
//  class dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(): void {
//         console.log(`${this.name}吃骨头`);
//     }
//  }
//  // 3. 在声明一个继承父类，并且实现eat方法
//  class Cat extends Animal{
//     constructor (name:string){
//         super(name)
//     }
//     eat():void{
//         console.log(`${this.name}吃鱼`);
//     }
//  }

//抽象类

//1.抽象类的定义
//  提供其他类继承的基类，不能直接被实例化
//  定义抽象类的语法
//  abstract class 类名 {}

// 2. 抽象类不能直接被实例化
// abstract class Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
// }
// let a=new Animal('小明')  //无法创建抽象类的实例

// 抽象类不能直接被实例化，只是提供其他类继承的一个基类
//  abstract class Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
//  }
//  class dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//  }

 //抽象方法
 //抽象方法语法
//  abstract 方法名():{}

// 抽象方法不能抽离抽象类使用ts
// class Animal {
//     name:string
//     constructor (name:string){
//         this.name=name
//     }
//     abstract eat():string //抽象方法只能出现在抽象类中。
// }
//也就是说 抽象方法只能出现在抽象类中
// abstract class Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     abstract eat():string
// }
//抽象方法不能有具体体现
// abstract class Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     abstract eat():string{  // 方法“eat”不能具有实现，因为它标记为抽象。
//         return ''
//     }
// }

// abstract class Animal {
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     abstract eat():string
// }
// let a=new Animal('小明')

// class dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat():string{
//         return this.name
//     }
// }

//类类型接口
// 1.定义一个接口,约束必须有name属性和eat方法
// interface IAnimal {
//     name: string
//     eat():string
// }
// // class 类型 implements 接口名 {}
// class Animal implements IAnimal {
//     name: string;
//     constructor(name:string){
//         this.name = name
//     }
//     eat(): string {
//         return ''
//     }
// }
//  接口的继承
// 声明一个接口，要求有一个name属性
// interface Ianimal {
//     name: string
// }
// 声明一个接口继承上述接口

// 接口继承语法：接口一继承接口二
// interface IPeople extends Ianimal {
//     work():void
// }
// class Coder implements IPeople {
//     name: string
//     constructor(name){
//         this.name = name
//     }
//     work(): void {
        
//     }
// }