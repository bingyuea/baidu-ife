/**
 * Created by bingyue on 2017/10/28.
 */
// 使用tsc helloworld.ts编译 强类型语言
console.log('hell');
//  ./src/**/*.* 表示src下面的任意目录任意文件
// var 变量名:变量类型
var a:number;
// 除了js的其他外的数据类型
// 数组 具有 ‘相同特征’ 的数据的集合 相同特征指的是 类型相同
let arr1: string[] = ['a','b']
//let arr3: string[] = ['a',"2",5]; // wrong

//元组 合数组类似，可以存不同的类型
let tuple1:[string,number] = ["a",1] // 前两个需要 一一对应
let tuple1:[string,number] = ["a",1,1,1,11,1] // 除前两个其他的而不需要对应



// 枚举 enum 一批数字气的别名
// 定义一个枚举
enum keys{
    left=37,up,right,down
}
console.log(keys.left); // 调用枚举的方法

// 函数 需要传一个类型，返回值也需要指定
function add(x:number,y:number):number{
    return x+y;
}
// 函数表达式
let add2:(x:number,y:number)=> number=function (x,y){
    return x+y;
}
// 不能漏传参，不穿默认传的undefined
// 默认值
function add4(x:number,y:number = 10):number{
    return x+y;
}

// 函数重载
// 困困困困困困

// 泛型 给类型定义变量
function add5<T>(x:T,y:T):T;
function add5(x:any,y:any):any{
    return x+y;
}
add5<number>(1, 2);

//angular5
//


