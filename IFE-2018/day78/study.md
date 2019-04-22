##### 块级元素的内容宽度是其父元素的宽度的100％，并且与其内容一样高

##### position新的属性 sticky 粘性定位

![效果图](https://upload-images.jianshu.io/upload_images/4655331-0610bd0d1cd53bf8.gif?imageMogr2/auto-orient/)
![](http://ww1.sinaimg.cn/large/e9ff3c49gy1g293tzavcqj20xs0q2aa3.jpg)

##### clear的属性值不仅有both，而且还有left right，一般用在浮动元素之后的第一个元素（比如伪类），来取消浮动对接下来的元素造成的影响

##### css的三种布局模型：文档流 浮动模型 层模型（指的是定位）

##### float(破环性，包裹性，清空格)为什么会被设计成具有破坏性，为什么会脱离文档流？这一点非常重要！其实原因非常简单——为了要实现文字的环绕效果？

![](https://images0.cnblogs.com/blog2015/138012/201503/041937051339305.png)

清除浮动的bootstrap的做法，clearfix

```
!写在浮动的父元素上面
.clearfix:after{
    content:'';
    display:table;
    clear:both
}
.clearfix{ *zoom : 1 }



```

##### float是部分脱离文档流，而absolute是完全脱离文档流。
      也就是说，使用float属性时，其他元素会无视这个float元素，但是其他元素内的文本依然会为这个元素让出位置，环绕在周围，所以称为部分无视。
      而使用absolute脱离文档流的元素，其它盒子无论是本身还是盒子内的文本都会无视这个元素，也就是我说的完全脱离文档流。
