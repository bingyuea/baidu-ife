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
