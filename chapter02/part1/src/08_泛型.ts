/**
 * 定义函数或者类时，遇到类型不明确可以使用泛型（!把它当做声明一个变量来存储类型!）
 */

function fn<T>(a: T): T {
  return a;
}

// 可以直接调用具有泛型的函数
const result1 = fn(10); // 由于 ts 的类型推断，T 为 number
const result2 = fn<string>('test'); // 指定泛型为 string


function fn2<T, K>(a: T, b: K) {
  console.log(b);
  return a;
}
const result3 = fn2<number, string>(123, 'test');


interface Inter {
  length: number;
}

// 表示泛型 T 必须是 Inter 子类
function fn3<T extends Inter>(a: T) {
  return a.length;
}

// fn3(123); // 错误，入参 123 不具有 length 属性
fn3('123'); // 可以
fn3({ length: 6 }); // 可以
fn3([1, 2, 3]); // 可以