##### DOM (Document Object Model) 提供访问和操作网页内容的方法和接口； （BOM），提供与浏览器交互的方法和接口

##### API (Application Programming Interface)

##### 操作符

```
 描述了一组用于操作数据值的操作符，包括算术操作符（如加号和减号）、位操作符、 关系操作符和相等操作符
```

##### 对象字面量创建方式

```
var person = {     name : "Nicholas",     age : 29 };
```

##### 堆栈 说的都是一个东西，先进后出，可以想象为一个桶，shift 和 unshift

##### 队列 可以想象为一个线，先进先出，对应的方法push 和 pop

##### 函数对象的属性：caller(指向外部函数)

```
function outer(){     inner();  }

function inner(){     alert(inner.caller); }

outer();
```

##### call apply bind 改变函数的作用域

```
var color = 'red'
var obj = {color:'black'}

function sayColor(){ alert(this.color) }
sayColor.call/apply(obj)

sayColor.bind(obj)()

```
##### toFixed的用法

```
var num = 10; alert(num.toFixed(2));     //"10.00"

var num = 10.005; alert(num.toFixed(2));     //"10.01"
```

##### 对象的定义

```
。对象的每个属性或方法都有一个名字，而每个名字都映射 到一个值。正因为这样（以及其他将要讨论的原因），我们可以把 ECMAScript的对象想象成散列表：无 非就是一组名值对，其中值可以是数据或函数。
```
