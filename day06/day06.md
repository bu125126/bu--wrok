### 泛型

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性**, 使用标识符号**<T>**

###  泛型变量

当我们使用泛型的时候，你必须在处理类型涉及到泛型的数据的时候，把这个数据当做任意类型来处理。这就意味着不是所有类型都能做的操作不能做，不是所有类型都能调用的方法不能调用。

### 泛型函数类型

将泛型变量定义在接口最外层，所以不仅函数的类型中可以使用 T，在属性 tag 的定义中也可以使用。但在使用接口的时候，要在接口名后面明确传入一个类型，也就是这里的`GetArray<number>`，那么后面的 arg 和 tag 的类型都得是 number 类型。当然了，如果你还是希望 T 可以是任何类型，你可以把`GetArray<number>`换成`GetArray<any>`。

### 泛型约束

当我们使用了泛型时，就意味着这个这个类型是任意类型。但在大多数情况下，我们的逻辑是对特定类型处理的。还记得我们前面讲泛型变量时举的那个例子——当访问一个泛型类型的参数的 length 属性时，会报错"类型“T”上不存在属性“length”"，是因为并不是所有类型都有 length 属性。

###  在泛型约束中使用类型参数

这里我们使用让`K`来继承索引类型`keyof T`，你可以理解为`keyof T`相当于一个由泛型变量T的属性名构成的联合类型，在这里 K 就被约束为了只能是"a"或"b"，所以当我们传入字符串"c"想要获取对象*obj*的属性"c"时就会报错。

### 小结

本小节我们学习了泛型的相关知识；学习了使用泛型来弥补使用any造成的类型信息缺失；当我们的类型是灵活任意的，又要准确使用类型信息时，就需要使用泛型来关联类型信息，其中离不开的是泛型变量；泛型变量可以是多个，且命名随意；如果需要对泛型变量的类型做进一步的限制，则需要用到我们最后讲的泛型约束；使用泛型约束通过`extends`关键字指定要符合的类型，从而满足更多场景的需求。

### class类

1. TS中类的定义

   ```
   class People {
       name: string
       age: number
       constructor(name:string,age){
           this.name = name
           this.age = age
       }
       sport():string{
           return `${this.name}会运动`
       }
   }
   ```

   **注意在声明类的时候，需要对类的属性的数据类型进行约束**

   对类进行实例化

   ```
   let p = new People('小明',18)
   // 注意声明类的时候约束name属性为string类型，age属性为数字类型；实例化的时候要严格按照类型传参
   ```

   调用类的方法

   ```
   console.log(p.sport()); //小明会运动
   ```

   获取类的属性

   ```
   console.log(p.age); // 18
   ```

### 类的继承

###  类的修饰符

public          公有，类里面、子类、类外面都可以访问 
protected   保护类型 类里面、子类可以访问  类外面不可以访问
private		私有类型 类里面可以访问，其他不行

如果不加修饰符，默认是public

### 静态属性和静态方法.

使用static修饰静态属性

```
class Animal {
    name:string
    static prop: string = '1'
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
}

console.log(Animal.prop); // 1

let a = new Animal('小狗')

console.log(a.prop); // 属性“prop”在类型“Animal”上不存在
```

静态属性不能在实例上获取

静态方法

```
class Animal {
    name:string
    static prop: string = '1'
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
    static sayHello():string{
        return 'hello'
    }
}
// Animal.prop = 'haha'

console.log(Animal.prop); // 1

console.log(Animal.sayHello()); // hello

let a = new Animal('小狗')

console.log(a.prop); // 属性“prop”在类型“Animal”上不存在
console.log(a.sayHello()); // 性“sayHello”在类型“Animal”上不存在
```

静态方法不能在实例上获取

###  多态

#### 12.2.1 多态的定义123123123

父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现

###  抽象类

定义抽象类的语法  abstract class 类名 {}

抽象类不能直接被实例化

抽象类不能直接被实例化，只是提供其他类继承的一个基类

### 抽象方法

abstract 方法名():{}

抽象方法不能脱离抽象类使用ts

也就是说，抽象方法只能出现在抽象类中

抽象方法不能有具体体现

抽象方法只能放在抽象类里面；也就是说**抽象类和抽象方法是定义标准的

### 类类型接口

#### 接口约束类

类类型接口，和抽象类很类似，是用来约束类的；也就是类中必须有哪些属性和方法

1. 定义一个接口,约束必须有name属性和eat方法

   ```
   interface IAnimal {
       name: string
       eat():string
   }
   ```

   使用接口约束类,

   语法:

   ```
   class 类型 implements 接口名 {}
   ```

   使用上述接口约束类

   - [ ] 错误写法：不写方法

     ```
     class Animal implements IAnimal { 
         name: string;
         constructor(name:string){
             this.name = name
         }
     }
     // 报错：类“Animal”错误实现接口“IAnimal”。类型 "Animal" 中缺少属性 "eat"，但类型 "IAnimal" 中需要该属性
     ```

     因为接口要求有eat方法

   - [ ] 错误写法：不写属性

     ```
     class Animal implements IAnimal {
         eat(): string {
             return ''
         }
     }
     // 报错： 类“Animal”错误实现接口“IAnimal”。类型 "Animal" 中缺少属性 "name"，但类型 "IAnimal" 中需要该属性。
     ```

     因为接口要求有 name属性

   - [ ] 正确的写法

     ```
     class Animal implements IAnimal {
         name: string;
         constructor(name:string){
             this.name = name
         }
         eat(): string {
             return ''
         }
     }
     ```

     也就是说，使用接口约束类；约束了类必须具有哪些属性和方法

### 13.3 接口的继承

#### 13.3.1 接口继承的实现

接口也可以实现继承

1. 声明一个接口，要求有一个name属性

   ```
   interface Ianimal {
       name: string
   }
   ```

2. 声明一个接口继承上述接口

   接口继承语法：接口一继承接口二

   ```
   interface 接口一 extends 接口二 {}
   ```

   ```
   interface IPeople extends Ianimal {
       work():void
   }
   ```

   实现接口约束类

   ```
   class Coder implements IPeople {
       name: string
       constructor(name){
           this.name = name
       }
       work(): void {
           
       }
   }
   ```

   我们可以发现，使用IPeople约束类的时候，类必须同时具有name属性和work方法

