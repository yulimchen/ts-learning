class Dog {
  name: string
  age: number

  // constructor 构造函数
  // 类创建对象时调用
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log(this);
  }
}

const dog = new Dog('旺财', 5);
const dog2 = new Dog('小白', 2);
dog.bark();
dog2.bark();