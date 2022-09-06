(function () {
  class Animal {
    name: string
    age: number

    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }

    sayHello() {
      console.log('动物在叫~~');
    }
  }

  // 继承 Animal 类
  class Dog extends Animal {
    // 子类覆盖父类方法：方法重写
    sayHello() {
      console.log(`${this.name}在汪汪汪~`);
    }
  }

  class Cat extends Animal {
    sayHello() {
      console.log(`大家好我叫${this.name}，是练习时长${this.age}年的猫猫`);
    }
  }

  const dog = new Dog('旺财', 5);
  console.log(dog);
  dog.sayHello();

  const cat = new Cat('咖啡', 4);
  console.log(cat);
  cat.sayHello();
})();

