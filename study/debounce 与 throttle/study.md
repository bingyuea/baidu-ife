##### debounce 与 throttle

###### 问题引入：最近在项目开发过程中，遇到了在审核过程用户连续点击请求多次的情况，这种情况最简单也最容易想到利用开关门的思想，设置一个flag对按钮设置disabled

例如代码

```
this.sureSubmitFlag = true;
costAppealModule
  .siteExamine
  .examine(params)
  .then(res => {
    this.sureSubmitFlag = false;
    ...
  })
  .catch(err => {
    console.error(err);
    this.sureSubmitFlag = false;
    this.closeDialog();
  });

```

效果如图

![](http://ww1.sinaimg.cn/large/e9ff3c49gy1fuz1d08pnng21130ken23.gif)

其实，到这里问题已经解决了。。。但是后来会上有提出函数节流方式，其实之前也有了解节流和防抖这两个函数，但是只是一知半解，不是完全了解这两个函数，更没有尝试自己写一个这样的函数，索性趁着这次机遇好好了解一下


##### 函数节流

> 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。

<p color = "#ff502c">
举例：我们知道目前的一种说法是当 1 秒内连续播放 24 张以上的图片时，在人眼的视觉中就会形成一个连贯的动画，所以在电影的播放（以前是，现在不知道）中基本是以每秒 24 张的速度播放的，为什么不 100 张或更多是因为 24 张就可以满足人类视觉需求的时候，100 张就会显得很浪费资源
</p>


1. 先看一下正常没有节流的效果，有感觉到浪费性能了吗？

![](http://ww1.sinaimg.cn/large/e9ff3c49gy1fv046wwq67g219f0lln11.gif)


2. 简单版的节流
例如代码

```
[ ...boxs ].map(item => {
  item.addEventListener("mousemove",throttleFn(function() {
    console.log(`我在移动鼠标哦${moment().format("YYYY-MM-DD HH:mm:ss")}--${item.innerText}`)
  },1000))
})

function throttleFn(fn,delay) {
      let last = null;
      return function() {
        let now = +new Date();
        if( now - last > delay || !last){
          last = now;
          fn();
        }
      }
    }
```

![](http://ww1.sinaimg.cn/large/e9ff3c49gy1fv047grbgkg219f0llgo1.gif)


这样就是一个很简单的节流函数,但是有缺点

-    1. 间隔不精准

现在我把毫秒加上

```
function fn() {
  console.log(`2s执行一次${moment().format("YYYY-MM-DD HH:mm:ss SS")}`)
}
setInterval(throttleFn(fn,1000),2000);
```

看一下执行结果

![](http://ww1.sinaimg.cn/large/e9ff3c49gy1fv049dzhsig219f0ll74f.gif)

对比一下

![](http://ww1.sinaimg.cn/large/e9ff3c49gy1fv049v2y6kg219f0llgmc.gif)

-    2. this执行以及向下传递参数

![](http://ww1.sinaimg.cn/large/e9ff3c49gy1fv04e56yroj21hc0qbabm.jpg)

对比一下

![](http://ww1.sinaimg.cn/large/e9ff3c49gy1fv053gvkqgj21hc0qb40b.jpg)

附上新版节流函数

```
function throttle(fun, delay) {
  let last, deferTimer
  return function (args) {
    let that = this
    let _args = arguments
    let now = +new Date()
    if (last && now < last + delay) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function () {
        last = now;
        fun.apply(that, _args)
      }, delay)
    }else{
      last = now;
      fun.apply(that,_args)
    }
  }
}
```

##### 函数防抖（debounce）

> 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

<p color = "#ff502c">
举例：如果有人进电梯（触发事件），那电梯将在10秒钟后出发（执行事件监听器），这时如果又有人进电梯了（在10秒内再次触发该事件），我们又得等10秒再出发（重新计时）。
</p>

![](http://ww1.sinaimg.cn/large/e9ff3c49gy1fv5m90oli9g219f0lltb6.gif)


##### 在vue项目中使用debounce

下面来聊一聊在vue项目中使用节流、防抖函数，准确应该是聊聊其中的this指向问题

```
sureSubmit: lodash.debounce(
        () => {
          console.log(this);
          if (this.ids.length < 1) {
            this.$alert('请选择需要审核的数据！','提示',{
              type: 'warning'
            });
            return;
          }
        },300),
```

![](http://ww1.sinaimg.cn/large/e9ff3c49gy1fv5nzkbjnpj21hc0qbq6g.jpg)

可以看出，这里的this指向并不是一个vue的实例，而是一个export的组件对象，所以如果这样写会抛出异常

<P color = "#ff502c">debounce里已经apply了函数的context，所以对于箭头函数来说，它的context是window，对于匿名函数来说，它的context是调用时的context。</P>

```
sureSubmit: lodash.debounce(
function() {
  console.log(this);
  if (this.ids.length < 1) {
    this.$alert('请选择需要审核的数据！','提示',{
      type: 'warning'
    });
    return;
  }
},300),
```

![](http://ww1.sinaimg.cn/large/e9ff3c49gy1fv5ow3jwakj21hc0qbdka.jpg)

这样，此时的this指向就是一个vueComponent,也是vue的构造函数（实例）


##### 应用场景
对于函数防抖，有以下几种应用场景：

* 给按钮加函数防抖防止表单多次提交。
* 对于输入框连续输入进行AJAX验证时，用函数防抖能有效减少请求次数。
* 判断scroll是否滑到底部，滚动事件+函数防抖

总的来说，适合多次事件一次响应的情况

对于函数节流，有如下几个场景：

* 游戏中的刷新率
* DOM元素拖拽

总的来说，适合大量事件按时间做平均分配触发。


参考

[轻松理解JS函数节流和函数防抖](https://juejin.im/post/5a35ed25f265da431d3cc1b1)
[7分钟理解JS的节流、防抖及使用场景](https://juejin.im/post/5b8de829f265da43623c4261)
[Vue踩坑之旅——methods](https://juejin.im/post/5aaa0dab6fb9a028dc40bde0)
[实例生命周期钩子](https://cn.vuejs.org/v2/guide/instance.html)













