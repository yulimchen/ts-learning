import { test } from './hello/app'
const foobar = '123';
// 这里是注释
console.log(test);

function fn(a: number, b: number) {
  return a + b;
}

function fn2() {
  console.log(this);
}