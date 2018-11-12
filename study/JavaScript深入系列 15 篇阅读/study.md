##### JavaScript 深入之词法作用域和动态作用域

- 作用域是指程序源代码中定义变量的区域

- 作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。

- JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域。

##### 静态作用域与动态作用域

- 因为 JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了。

- 而与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的。

```
var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();

// 结果是 ???

执行 foo 函数，先从 foo 函数内部查找是否有局部变量 value，如果没有，就根据书写的位置，查找上面一层的代码，也就是 value 等于 1，所以结果会打印 1。

假设JavaScript采用动态作用域，让我们分析下执行过程：

执行 foo 函数，依然是从 foo 函数内部查找是否有局部变量 value。如果没有，就从调用函数的作用域，也就是 bar 函数内部查找 value 变量，所以结果会打印 2。

前面我们已经说了，JavaScript采用的是静态作用域，所以这个例子的结果是 1。
```

##### JavaScript 深入之执行上下文栈

- 当执行到一个函数的时候，就会进行准备工作，这里的“准备工作”，让我们用个更专业一点的说法，就叫做"执行上下文(execution context)"。
  所以 JavaScript 引擎创建了执行上下文栈（Execution context stack，ECS）来管理执行上下文

```
function fun3() {
    console.log('fun3')
}

function fun2() {
    fun3();
}

function fun1() {
    fun2();
}

fun1();

// 伪代码

// fun1()
ECStack.push(<fun1> functionContext);

// fun1中竟然调用了fun2，还要创建fun2的执行上下文
ECStack.push(<fun2> functionContext);

// 擦，fun2还调用了fun3！
ECStack.push(<fun3> functionContext);

// fun3执行完毕
ECStack.pop();

// fun2执行完毕
ECStack.pop();

// fun1执行完毕
ECStack.pop();

// javascript接着执行下面的代码，但是ECStack底层永远有个globalContext
```

##### 执行上下文的三个对象

对于每个执行上下文，都有三个重要属性：

- 变量对象(Variable object，VO)
- 作用域链(Scope chain)
- this

##### 变量对象

- 变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明。

- 因为不同执行上下文下的变量对象稍有不同，所以我们来聊聊全局上下文下的变量对象和函数上下文下的变量对象。

##### 函数上下文

```
在函数上下文中，我们用活动对象(activation object, AO)来表示变量对象。

活动对象和变量对象其实是一个东西，只是变量对象是规范上的或者说是引擎实现上的，不可在 JavaScript 环境中访问，只有到当进入一个执行上下文中，这个执行上下文的变量对象才会被激活，所以才叫 activation object 呐，而只有被激活的变量对象，也就是活动对象上的各种属性才能被访问。

活动对象是在进入函数上下文时刻被创建的，它通过函数的 arguments 属性初始化。arguments 属性值是 Arguments 对象。
```

##### 执行过程

```
  执行上下文的代码会分成两个阶段进行处理：分析和执行，我们也可以叫做：

  进入执行上下文
  代码执行
```

##### 进入执行上下文

```
      当进入执行上下文时，这时候还没有执行代码，

      变量对象会包括：

      函数的所有形参 (如果是函数上下文)

      由名称和对应值组成的一个变量对象的属性被创建
      没有实参，属性值设为 undefined
      函数声明

      由名称和对应值（函数对象(function-object)）组成一个变量对象的属性被创建
      如果变量对象已经存在相同名称的属性，则完全替换这个属性
      变量声明

      由名称和对应值（undefined）组成一个变量对象的属性被创建；
      如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性

      function foo(a) {
        var b = 2;
        function c() {}
        var d = function() {};

        b = 3;

      }

      foo(1);
      在进入执行上下文后，这时候的 AO 是：

      AO = {
          arguments: {
              0: 1,
              length: 1
          },
          a: 1,
          b: undefined,
          c: reference to function c(){},
          d: undefined
      }

      代码执行
      在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值

      还是上面的例子，当代码执行完后，这时候的 AO 是：

      AO = {
          arguments: {
              0: 1,
              length: 1
          },
          a: 1,
          b: 3,
          c: reference to function c(){},
          d: reference to FunctionExpression "d"
      }
      到这里变量对象的创建过程就介绍完了，让我们简洁的总结我们上述所说：

      全局上下文的变量对象初始化是全局对象

      函数上下文的变量对象初始化只包括 Arguments 对象

      在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值

      在代码执行阶段，会再次修改变量对象的属性值
```

##### 从原型到原型链

- 构造函数创建一个对象

```
function Person(){

}

使用 new 创建一个实例对象person
var person = new Person();
person.name = "kevin";
```

- prototype

每一个函数都有一个 prototype，只有函数才有的属性
函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，也就是这个例子中的 person1 和 person2 的原型。

那什么是原型呢？你可以这样理解：每一个 JavaScript 对象(null 除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性

- proto

这是每一个 JavaScript 对象(除了 null )都具有的一个属性，叫`_proto_`，这个属性会指向该对象的原型。

- constructor
  因为一个构造函数可以生成多个实例，但是原型指向构造函数倒是有的，这就要讲到第三个属性：constructor，每个原型都有一个 constructor 属性指向关联的构造函数。

- Object.getPrototypeOf(person)
  顺便学习一个 ES5 的方法,可以获得对象的原型
  console.log(Object.getPrototypeOf(person) === Person.prototype) // true

- 实例与原型

当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止

```
function Person() {

}

Person.prototype.name = 'Kevin';

var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // Kevin
```
