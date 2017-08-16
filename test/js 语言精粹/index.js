/**
 * Created by chenliang on 2017/8/14.
 */
Function.prototype.method = function(name,fn){
    this.prototype[name] = fn;
    console.log(this);
    return this;
}
// 只提取数字的整数部分
Number.method("integer",function(){
    return Math[this < 0 ? "ceil" : "floor"](this);
})
// string字符串去空格的方法
String.method("trim",function(){
    return this.replace(/^\s+|\s+$/g,"");
})