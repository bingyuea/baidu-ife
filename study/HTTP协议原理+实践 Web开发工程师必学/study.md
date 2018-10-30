#### 课程导读
##### Cache-Control

* Cache-Control : max-age = 100

* public private

* must-revalidate

* no-cache no-store

##### 缓存验证

* last-modified if-modified-since

* etag if-none-match

##### 更多有意义的头

* Content-Type Content-Encoding等用了约束数据类型

* Cookie保持会话信息

* CORS实现跨域并保持安全性限制

##### 深入TCP

* 什么是三次握手

* HTTPS链接的创建过程，以及为什么HTTPS就是安全的

* 什么是长链接，为什么需要长链接

* HTTP2的信道复用又为什么能提高性能

#### 5层网络模型介绍

#### curl 网址 可以使用命令行发送一个http请求

![](http://ww1.sinaimg.cn/large/e9ff3c49gy1fv71a0cl4wj21hc0u0han.jpg)

##### node跨域问题(浏览器做的一个限制)

```
"Access-Control-Allow-Origin" : "*"
```
[cors](https://www.cnblogs.com/loveis715/p/4592246.html)

##### 对称加密

+ 加密和解密用的是同一个密钥

##### RSA : 非对称加密

+ 用私钥加密的数据，只有对应的公钥才能解密，用公钥加密的数据， 只有对应的私钥才能解密。

##### 非对称加密+对称加密

+ (1) 我生成一个对称加密算法的密钥， 用RSA的方式安全发给你，  (2) 我们随后就不用RSA了， 只用这个密钥，利用对称加密算法来通信,  如何？   ”

##### xss (cross site scripting)跨站脚本攻击

```
XSS(Cross Site Scripting)是跨站脚本攻击，为了区分CSS，所以缩写为XSS。XSS攻击方式是往Web页面插入恶意的 JavaScript 代码，当用户浏览网页的时候，插入的代码就是被执行，从而达到攻击的目的。

XSS防范
1.将重要的cookies标记为HTTP ONLY，让JavaScript代码无法调用，只有http能调用。或者将重要的信息保存在session里面。
2.只允许用户输入我们期望的数据。如消费金额框只能输入数字和小数点。
3.对数据进行加密处理。
4.过滤或者移除特殊的HTML标签，过滤JavaScript代码等。

```

##### CSRF

+ 就是在一个网站里面保留了cookie，然后访问了一些危险网站，然后被危险网站盗用了用户信息。

```

1.在表单里增加Hash值，以认证这确实是用户发送的请求，然后在服务器端进行Hash值验证。
2.验证码：每次的用户提交都需要用户在表单中填写一个图片上的随机字符串。
3.修改，增加重要信息，比如密码，个人信息的操作，尽量使用post。避免使用get把信息暴露在url上面。

```

#####







