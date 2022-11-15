"use strict";
/**
 * 定义函数或者类时，遇到类型不明确可以使用泛型（!把它当做声明一个变量来存储类型!）
 */
function fn(a) {
    return a;
}
// 可以直接调用具有泛型的函数
var result1 = fn(10); // 由于 ts 的类型推断，T 为 number
var result2 = fn('test'); // 指定泛型为 string
function fn2(a, b) {
    console.log(b);
    return a;
}
var result3 = fn2(123, 'test');
// 表示泛型 T 必须是 Inter 子类
function fn3(a) {
    return a.length;
}
// fn3(123); // 错误，入参 123 不具有 length 属性
fn3('123'); // 可以
fn3({ length: 6 }); // 可以
fn3([1, 2, 3]); // 可以
