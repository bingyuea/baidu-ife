##### 在使用\<script>嵌入 JavaScript代码时，代码中的任何地方出现"\</script>"字符串。

```
因为按照解析嵌入式代码的规则，当浏览器遇到字符串"</script>"时，就会认为那是结束的 </script>标签。而通过转义字符“/”可以解决这个问题，例如：

<script type="text/javascript">
 function sayScript(){
    alert("<\/script>");
  }
</script>

```

##### null 值表 示一个空对象指针，而这也正是使用 typeof 操作符检测 null 值时会返回"object"的原因

##### 要将一个值转换为其对应的 Boolean 值，可以调用转型函数 Boolean()

```
var message = "Hello world!";
var messageAsBoolean = Boolean(message);
```

##### 0.1 + 0.2 !== 0.3

```
关于浮点数值计算会产生舍入误差的问题，有一点需要明确：这是使用基于 IEEE754 数值的浮点计算的通病，ECMAScript 并非独此一家；其他使用相同数值格 式的语言也存在这个问题。
图
```

##### isNaN

```
isNaN()在接收到一个值之后，会尝试 将这个值转换为数值。某些不是数值的值会直接转换为数值
不能被转换为数值的值都会导致这个函数返回 true
```

##### 字符字面量(转义序列)

```
\n 换行
\t 制表
\b 空格
\r 回车
\f 进纸
\\ 斜杠
\' 单引号（'），在用单引号表示的字符串中使用。例如：'He said, \'hey.\''
\" 双引号（"），在用双引号表示的字符串中使用。例如："He said, \"hey.\""
\xnn 以十六进制代码nn表示的一个字符（其中n为0～F）。例如，\x41表示"A"
\unnnn 以十六进制代码nnnn表示的一个Unicode字符（其中n为0～F）。例如，\u03a3表示希腊字符Σ

```

##### 字符串的长度

```
var text = "This is the letter sigma: \u03a3.";
这个例子中的变量 text 有 28个字符，其中 6个字符长的转义序列表示 1个字符。
如果字符串中包含双字节字符，那么 length 属性 可能不会精确地返回字符串中的字符数目
```

##### 转换为字符串

```
要把某个值转换为字符串，可以使用加号操作符（3.5 节讨论）把它与一个字符 串（""）加在一起。
```

##### object

```
 constructor：保存着用于创建当前对象的函数。对于前面的例子而言，构造函数（constructor） 就是 Object()。
 hasOwnProperty(propertyName)：用于检查给定的属性在当前对象实例中（而不是在实例 的原型中）是否存在。其中，作为参数的属性名（propertyName）必须以字符串形式指定（例 如：o.hasOwnProperty("name")）。
 isPrototypeOf(object)：用于检查传入的对象是否是传入对象的原型（第 5 章将讨论原 型） 。
 propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用 for-in 语句 （本章后面将会讨论）来枚举。与 hasOwnProperty()方法一样，作为参数的属性名必须以字符 串形式指定。
 toLocaleString()：返回对象的字符串表示，该字符串与执行环境的地区对应。
 toString()：返回对象的字符串表示。
 valueOf()：返回对象的字符串、数值或布尔值表示。通常与 toString()方法的返回值 相同。
```

##### 前置型操作

```
执行前置递增和递减操作时，变量的值都是在语句被求值以前改变的。
（在计算机科学领域，这种 情况通常被称作副效应。）
前置型应该位 于要操作的变量之前，而后置型则应该位于要操作的变量之后
var num1 = 2;
var num2 = 20;
var num3 = --num1 + num2; // 等于 21
var num4 = num1 + num2;   // 等于 21
在这里，num3 之所以等于 21是因为 num1 先减去了 1才与 num2 相加。
而变量 num4 也等于 21是 因为相应的加法操作使用了 num1 减去 1之后的值
```

##### 后置型操作

```
即递增和递减操作是在包含它们的语句被求 值之后才执行的
var num1 = 2;
var num2 = 20;
var num3 = num1-- + num2;     // 等于 22
var num4 = num1 + num2;      // 等于 21
```

##### 使用>比较有关字符串的大小

```
var result = "23" < "3";    //true
确实，当比较字符串"23"是否小于"3"时，结果居然是 true。这是因为两个操作数都是字符串， 而字符串比较的是字符编码（"2"的字符编码是 50，而"3"的字符编码是 51）。不过，如果像下面例子 中一样，将一个操作数改为数值，比较的结果就正常了：
var result = "23" < 3;    //false
```

##### NaN 比较大小

```
任何操作数与 NaN 进行 关系比较，结果都是 false。于是，就出现了下面这个有意思的现象：

var result1 = NaN < 3;    //false
var result2 = NaN >= 3;   //false

```

##### switch合并两种情况

```
switch (i) {
    case 25:
    /* 合并两种情形 */
    case 35:
        alert("25 or 35");
        break;
    case 45:
        alert("45");
        break;
    default:
        alert("Other");
}

var num = 25;
switch (true) {
    case num < 0:
        alert("Less than 0.");
        break;
    case num >= 0 && num <= 10:
        alert("Between 0 and 10.");
        break;
    case num > 10 && num <= 20:
        alert("Between 10 and 20.");
        break;
    default:
        alert("More than 20.");
}
```
+ switch 语句在比较值时使用的是全等操作符，因此不会发生类型转换（例如， 字符串"10"不等于数值 10）。


##### 后定义的函数覆盖了先定义的函数

##### 函数重载与函数签名

+ 函数的名称及其参数类型组合在一起，就定义了一个唯一的特性，称为函数签名
+ 这样我们在调用的时候，就不需要记那么多的方法名称，而是知道了方法的功能就可以直接的给他传递不同的参数，编译器会明确的知道我们调用了哪一个方法

##### 垃圾回收机制

+ 解除引用的真正作用是让值脱离 执行环境，以便垃圾收集器下次运行时将其回收。(赋值null)

##### 从一个变量向另一个变量复制引用类型的值，复制的其实是指针，因此两个变量最终都指向同 一个对象

##### 创建对象的两种方式

+ 第一种是使用 new 操作符后跟 Object 构造函数

```
var person = new Object();
person.name = "Nicholas";
person.age = 29;
```

+ 对象字面量表示法

```
var person = {     name : "Nicholas",     age : 29 };
```

##### Array.isArray()方法。这个方法的目的是终确定某 个值到底是不是数组

##### 栈是一种 LIFO（Last-In-First-Out， 后进先出）的数据结构，也就是新添加的项早被移除。而栈中项的插入（叫做推入）和移除（叫做 弹出），只发生在一个位置——栈的顶部。ECMAScript为数组专门提供了 push()和 pop()方法，以便 实现类似栈的行为

##### 而队列数据结构的访问规则是 FIFO（First-In-First-Out， 先进先出）。队列在列表的末端添加项，从列表的前端移除项

##### 由于函数名仅仅是指向函数的指针，因此函数名与包含对象指针的其他变量没有什么不同。换句话 说，一个函数可能会有多个名字，

#####  encodeURI()和 encodeURIComponent()
```
   var uri = "http://www.wrox.com/illegal value.htm#start";

  //"http://www.wrox.com/illegal%20value.htm#start" alert(encodeURI(uri));

  //"http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start" alert(encodeURIComponent(uri));
```

#####  decodeURI()和 decodeURIComponent()

```
 var uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";

 //http%3A%2F%2Fwww.wrox.com%2Fillegal value.htm%23start alert(decodeURI(uri));

 //http://www.wrox.com/illegal value.htm#start alert(decodeURIComponent(uri));

```

#####  reduce(prevalue,currentValue,index,self) 前一个值、当前值、项的索引和数组对象。
```
    函数返回的任何值都会作为第一个参数自动传给下一项。
    第一次迭代发生在数组的第二项上，因此第 一个参数是数组的第一项，第二个参数就是数组的第二项。

    var values = [1,2,3,4,5];
    var sum = values.reduce(function(prev, cur, index, array){     return prev + cur;  });
    alert(sum); //15

```

##### 需要转义的一些正则元字符

```
与其他语言中的正则表达式类似，模式中使用的所有元字符都必须转义。正则表达式中的元字符包括：


( [ { \ ^ $ | ) ? * + .]}
```

#####

```
input $_ 近一次要匹配的字符串。Opera未实现此属性
lastMatch $& 近一次的匹配项。Opera未实现此属性
lastParen $+ 近一次匹配的捕获组。Opera未实现此属性
leftContext $` input字符串中lastMatch之前的文本
multiline $* 布尔值，表示是否所有表达式都使用多行模式。IE和Opera未实现此属性
rightContext $' Input字符串中lastMatch之后的文本

var text = "this has been a short summer"; var pattern = /(.)hort/g;

/*  * 注意：Opera 不支持 input、lastMatch、lastParen 和 multiline 属性  * Internet Explorer 不支持 multiline 属性  */
if (pattern.test(text)){
alert(RegExp.input);            // this has been a short summer
alert(RegExp.leftContext);      // this has been a
alert(RegExp.rightContext);     // summer
alert(RegExp.lastMatch);        // short
alert(RegExp.lastParen);        // s
alert(RegExp.multiline);        // false
}

 input 属性返回了原始字符串；
 leftContext 属性返回了单词 short 之前的字符串，而 rightContext 属性则返回了 short 之后的字符串；
 lastMatch 属性返回近一次与整个正则表达式匹配的字符串，即 short；
 lastParen 属性返回近一次匹配的捕获组，即例子中的 s。

因此必须通过方括号语法来访问它们
if (pattern.test(text)){
alert(RegExp.$_);              // this has been a short summer
alert(RegExp["$`"]);           // this has been a
alert(RegExp["$'"]);           // summer
alert(RegExp["$&"]);           // short
alert(RegExp["$+"]);           // s
alert(RegExp["$*"]);           // false
}
```

##### 函数声明

```
 function sum (num1, num2) {     return num1 + num2; }
```

##### 函数表达式

```
var sum = function(num1, num2){     return num1 + num2; };

第一次是解析常规 ECMAScript代码
第二次是解析传入构造函数中的字符串）
， 从而影响性能。
不过，这种语法对于理解“函数是对象，函数名是指针”的概念倒是非常直观的。

```

##### 函数是对象，函数名是指针

```
function sum(num1, num2){
    return num1 + num2;
 }
alert(sum(10,10));        //20

var anotherSum = sum;
alert(anotherSum(10,10)); //20

sum = null;
alert(anotherSum(10,10)); //20

以上代码首先定义了一个名为 sum()的函数，用于求两个值的和。
然后，又声明了变量 anotherSum， 并将其设置为与 sum 相等（将 sum 的值赋给 anotherSum）。
注意，使用不带圆括号的函数名是访问函 数指针，而非调用函数。
此时，anotherSum 和 sum 就都指向了同一个函数，因此 anotherSum()也 可以被调用并返回结果。
即使将 sum 设置为 null，让它与函数“断绝关系”，但仍然可以正常调用 anotherSum()
```

##### 函数声明与函数表达式

```
解析器会率先读取函数声明，并使其在执行 任何代码之前可用（可以访问）；
至于函数表达式，则必须等到解析器执行到它所在的代码行，才会真 正被解释执行
，函数的名字仅仅是一个包含指针的变量而已。
因此，即使是 在不同的环境中执行，全局的 sayColor()函数与 o.sayColor()指向的仍然是同一 个函数。
```
##### 函数的length

```
每个函数都包含两个 属性：length 和 prototype。其中，length 属性表示函数希望接收的命名参数的个数
```

##### toLowerCase() toUpperCase()

##### 编码

```
var uri = "http://www.wrox.com/illegal value.htm#start";

//"http://www.wrox.com/illegal%20value.htm#start" alert(encodeURI(uri));

//"http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start" alert(encodeURIComponent(uri));

```

##### 解码

```
var uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";

//http%3A%2F%2Fwww.wrox.com%2Fillegal value.htm%23start alert(decodeURI(uri));

//http://www.wrox.com/illegal value.htm#start alert(decodeURIComponent(uri));

```

##### 找数组中的最小值

```
var values = [1, 2, 3, 4, 5, 6, 7, 8];
var max = Math.max.apply(Math, values);
```
##### 取a和b之间的任意的随机数

```
 function selectFrom(lowerValue, upperValue) {
     var choices = upperValue - lowerValue + 1;
     return Math.floor(Math.random() * choices + lowerValue);
 }

```

##### 创建对象的6种方式

```
1. 工厂模式

let Ponson = function(){

}






```

