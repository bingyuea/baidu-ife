##### 执行一个 node 文件

```
node 文件名
```

##### packjson 文件的好处

```
1. 可以方便的将项目分享给他人，而不是把node_modules复制给他人

2. 可以方便记录所依赖的模块的版本号
```

- packjson 文件需要严格遵守 JSON 格式,所有的属性 属性名都是 双引号

- 如果想发布二进制的工具包的话，需要在 packjson 文件添加"bin":"./path/to/script",将其值指向可执行的脚本 或者二进制文件

##### 鉴别值的类型

```
Object.prototype.toString.call([]) == "[object Array]" 有利于在不同的上下文（浏览器判定）
instanceof
```

##### 获取对象自有的属性

```
for(var i in a){
  if(a.hasOwnPrototype(i))
}


Object.keys(a)
```

##### 阻塞 io 和非阻塞 io

```
php sleep()会阻塞当前进程，同步的
js 使用了时间轮询，不会阻塞进程，注册一个事件，会不断轮询事件是否分发
```

##### v8 浏览器调用一个函数会创建一个调用堆栈（执行堆栈）

#### 4 Node 中的 JavaScript

##### global 对象

- global: 和 window 一样，任何 global 对象上的属性都可以被全局访问到

- process:所有的全局执行上下文的内容都在 process 对象中

##### buffer 是表示对二进制数据的处理

#### 命令行工具 CLI 以及 FS API：首个 node 应用

##### fs 模块提供同步和异步的 api 操作文件系统

```
var fs = require('fs')
// 同步
fs.readdirSync(__dirname)

// 异步
fs.readdir(__dirname, function(err, files) {
  console.log(files)
})

```

##### 流 stream

```
process 全局对象包含了三个流对象，分别对应三个UNIX标准流

- **stdin**： 标准输入
- **stdout**： 标准输出
- **stderr**： 标准错误

stdin是可读流，默认的状态是暂停的
stdout是可写流
stderr是可写流

```

- steam 对象和 EventEmitter 很像，前者继承后者，当涉及持续不断对数据进行读写时，流就出现了

#### TCP

##### tcp(传输控制协议)是一个面向连接的协议，保证两台计算机之间的数据传输的可靠性和顺序，换句话说，tcp是一种传输层协议，可以将数据 从一台计算机传到另外一个计算机

##### Node的http服务器是构建于Node tcp服务器之上的

##### 使用webstrom支持node http://www.cnblogs.com/dreamsqin/p/9310011.html

![](https://images2018.cnblogs.com/blog/1074523/201807/1074523-20180714161933865-1328364076.png)

##### 两个和连接终止相关的事件，end表示客户端显示关闭tcp连接时触发，当连接发生错误会触发close事件

##### data字段接受过来是一个buffer，tcp是一个面向字节的协议，可以使用buffer.toString('utf8')来获取utf8编码的字符串

#### HTTP

##### http（超文本传输协议）是一种web协议，属于tcp协议的上层

##### 如果不执行Content-Type标注，默认的是text/plain类型，也就是普通文本类型，不会当做html来渲染

```
require("http").createServer((req,res) => {
  res.writeHead(200,{"Content-Type": "text/html"})
  res.end("Hello <b>World</b>")
}).listen(3000)
```