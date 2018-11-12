### vue 实例

所有的 vue 程序都需要实例化之后使用，实例主要有两种，一个是 Vue 实例，一个是组件实例。当然，如果你把 router 和 resource 加进来，它们也有实例，我们可以称之为插件实例。

#### 构造器

每个 Vue.js 应用都是通过构造函数 Vue 创建一个 Vue 的根实例 启动的：

```
var vm = new Vue({
  // 选项
})
```

在实例化 Vue 时，需要传入一个选项对象，它可以包含数据、模板、挂载元素、方法、生命周期钩子等选项。全部的选项可以在 API 文档中查看。

#### 组件构造器

可以扩展 Vue 构造器，从而用预定义选项创建可复用的组件构造器。所谓组件构造器，就是创建一个组件的原型类。

```
var MyComponent = Vue.extend({
// 扩展选项
})
// 所有的 `MyComponent` 实例都将以预定义的扩展选项被创建
var myComponentInstance = new MyComponent()
```

尽管可以命令式地创建扩展实例，不过在多数情况下建议将组件构造器注册为一个自定义元素，然后声明式地用在模板中。我们将在后面详细说明组件系统。现在你只需知道所有的 Vue.js 组件其实都是被扩展的 Vue 实例。

编者按：组件是 vue 里面重要的话题。但是对于开发者而言，其实只需要关心上面那个红色的大括号里面的开发即可。组件的使用有好几种，但是开发者要写的，都在这个大括号身上。另外，Vue.extend 之后，就是一个组件构造器，实例化以后，就是一个组件，下文会有一章详细介绍组件，这里暂且跳过。

#### 实例属性（数据代理和响应）

```
每个 Vue 实例都会代理其 data 对象里所有的属性：

var data = { a: 1 }var app = new Vue({
  data: data
})

app.a === data.a // -> true // 设置属性也会影响到原始数据
app.a = 2data.a // -> 2 // ... 反之亦然
data.a = 3app.a // -> 3
注意只有这些被代理的属性是响应的。如果在实例创建之后添加新的属性到实例上，它不会触发视图更新。

编者按：也就是说，你得在new之前，就把所有的data都传进去。实例创建之后，其实可以使用$set来加入属性，也可以实现响应功能。

除了 data 属性， Vue 实例暴露了一些有用的实例属性与方法。这些属性与方法都有前缀 $，以便与代理的 data 属性区分。例如：

var data = { a: 1 }
var app = new Vue({
  el: '#example',
  data: data
})
app.$data === data // -> true
app.$el === document.getElementById('example') // -> true
```

#### 实例方法

```
在实例里面可以自己传进去一些方法进行调用：
var app = new Vue({
  methods: {
    myMethod() {},
    otherMethod() {
      // 这里就可以使用this.myMethod()了
    },
  },
})
app.otherMethod() // 可以在外面调用
和this.$data一样，vue也有一些以$开头的方法，比如app.$watch等，这些都是vue内置的方法。

实例属性和方法的完整列表中查阅 API 参考。
```

#### 文本插值

```
数据绑定最常见的形式就是使用 “Mustache” 语法（双大括号）的文本插值：

<span>Message: {{ msg }}</span>
```

#### 计算属性 和 methods 有神魔区别

```
然而，不同的是计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

这也同样意味着下面的计算属性将不再更新，因为 Date.now() 不是响应式依赖：

computed: {
  now: function () {
    return Date.now()
  }
}
相比而言，只要发生重新渲染，method 调用总会执行该函数。

我们为什么需要缓存？假设我们有一个性能开销比较大的的计算属性 A ，它需要遍历一个极大的数组和做大量的计算。然后我们可能有其他的计算属性依赖于 A 。如果没有缓存，我们将不可避免的多次执行 A 的 getter！如果你不希望有缓存，请用 method 替代。
```

### vue 中的组件

```
vue组件就是一个js类，使用的时候new一下，得到一个组件的实例，组件实例有很多接口，app层面就可以调用这些接口来把组件的功能集成到app中。

在开发层面上，你只需要使用Vue.extend({...})就可以得到一个组件。而开发的大部分工作，就是写好大括号里面的内容。
```

#### 创建一个组件

```
上面说过了，开发层面上，创建一个组件只需要使用Vue.extend，如下：

var MyComponent = Vue.extend({
  template: '<div>OK</div>',
})
这样就创建了一个组件构造器MyComponent。实际上，Vue.extend的结果是Vue的一个子类。既然是一个类，就可以被实例化，通过实例化得到一个组件实例，“组件实例”这个称呼在前面已经提到过了。组件构造器是一个类，可以被实例化为组件实例。

var component1 = new MyComponent()
关于Vue.extend，我们会在后文继续深入，这里就不赘述了。组件实例有一些方法可以用，例如$mount方法，这也在后面的Vue.extend部分去解释。本章主要是要让你学会组件的思想和主要开发方式。
```

#### 注册组件

```
上面说过了，开发层面上，创建一个组件只需要使用Vue.extend，如下：

var MyComponent = Vue.extend({
  template: '<div>OK</div>',
})
这样就创建了一个组件构造器MyComponent。实际上，Vue.extend的结果是Vue的一个子类。既然是一个类，就可以被实例化，通过实例化得到一个组件实例，“组件实例”这个称呼在前面已经提到过了。组件构造器是一个类，可以被实例化为组件实例。

var component1 = new MyComponent()
关于Vue.extend，我们会在后文继续深入，这里就不赘述了。组件实例有一些方法可以用，例如$mount方法，这也在后面的Vue.extend部分去解释。本章主要是要让你学会组件的思想和主要开发方式。
```

#### 为何 data 必须是函数

```
你要理解，上面这个操作是一个简易操作，实际上，它首先需要创建一个组件构造器，然后注册组件。注册组件的本质其实就是建立一个组件构造器的引用。使用组件才是真正创建一个组件实例。所以，注册组件其实并不产生新的组件类，但会产生一个可以用来实例化的新方式。

理解这点之后，再理解js的原型链：

var MyComponent = function() {}MyComponent.prototype.data = {
  a: 1,
  b: 2,
}// 上面是一个虚拟的组件构造器，真实的组件构造器方法很多
var component1 = new MyComponent()
var component2 = new MyComponent()// 上面实例化出来两个组件实例，也就是通过<my-component>调用，创建的两个实例
component1.data.a === component2.data.a // true
component1.data.b = 5component2.data.b // 5
可以看到上面代码中最后三句，这就比较坑爹了，如果两个实例同时引用一个对象，那么当你修改其中一个属性的时候，另外一个实例也会跟着改。这怎么可以，两个实例应该有自己各自的域才对
```

#### prop 为何是单向绑定的

```
prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。这是为了防止子组件无意修改了父组件的状态。

另外，每次父组件更新时，子组件的所有 prop 都会更新为最新值。这意味着你不应该在子组件内部改变 prop 。如果你这么做了，Vue 会在控制台给出警告。

这一点非常好理解：JavaScript的对象是引用类型数据，它的每一个属性都指向同一个内存空间，所以不同的变量引用同一个对象的话，其中一个的属性一改，另一个也会跟着改。父组件和子组件之间的prop也是一样，你修改子组件里面的prop，那么父组件里面的对应的属性也该了，这会让父组件或app层面产生混乱，一定会出bug。

正确的处理方法是，在创建组件时，保证组件只是接收prop数据，接收到以后马上放在自己的私有属性中去：

props: ['initialCounter'],
data: function () {
  return { counter: this.initialCounter }
}
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
上面一个是通过data直接挂在一个属性上，一个是通过计算属性，把prop只当做计算的一个依赖。总之，这两种方式都可以解决上面说的不允许子组件修改prop原始值的问题。
```

#### prop 效验

```
// 数组／对象的默认值应当由一个工厂函数返回
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
```

#### 处理组件相互引用冲突的问题

```
beforeCreate: function () {
  this.$options.components.TreeFolderContents = require('./tree-folder-contents.vue')
}
```

#### vue 设置全局属性

```
keyCodes
类型： { [key: string]: number | Array<number> }
默认值： {}
作用：给 v-on 自定义键位别名。
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  mediaPlayPause: 179,
  up: [38, 87]
}
```

#### 全局 filter

```
Vue.filter( id, [definition] )

```

#### 测试 git
