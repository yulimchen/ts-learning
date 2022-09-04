class Person {
  // 定义实例属性
  // *实例属性仅对象的实例可访问
  name: string = '迪迦奥特曼';
  readonly age: number = 18;

  // 定义类属性（静态属性）
  // *静态属性实例不可访问
  static height = 177;
}

const per = new Person();
console.log(per.name, per.age);
per.name = '迪拿';
// per.age = 20;
console.log(per.name, per.age);
console.log(Person.height);

