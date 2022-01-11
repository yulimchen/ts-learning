function sayHello(person: string) {
  return `Hello, ${person}`;
}

// let user = [1, 2, 3]; // 类型不对编译报错，不过不影响编译和运行
let user = 'Tom';
console.log(sayHello(user));
