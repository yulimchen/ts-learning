(function () {
  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello() {
      console.log(`${this.name}在叫呀~~`);
    }
  }

  class Dog extends Animal {
    age: number;

    constructor(name: string, age: number) {
      // 如果子类也写了构造函数（等于重写构造函数），就必须调用父类的构造函数 super()
      super(name);
      this.age = age;
    }

    bark() {
      // 在类的方法中 super 表示当前类的父类
      super.sayHello();
      console.log(`今年${this.age}岁~`);
      
    }
  }

  const dog = new Dog('旺财', 3);
  dog.bark();
})();