(function() {
  class Person {
    // TS 可以在属性前添加属性的修饰符
    /**
     * public 公有属性，可以在任意位置访问修改（默认值）
     * private 私有属性，只能在类内部进行访问修改，外部无法访问和修改
     *    通过类中添加方法使得私有属性可以被外部访问/修改
     * protected 保护属性，只能在当前类和子类中访问/修改
     */
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }

    get name() {
      return this._name;
    }
    set name(val: string) {
      this._name = val;
    }

    get age() {
      return this._age;
    }
    set age(val: number) {
      if (val >= 0) {
        this._age = val;
      }
    }
  }

  const per = new Person('巧克力', 5);

  // // public 公有属性可以随意位置修改（不安全）
  // // private 私有属性在类外部无法修改
  // per._name = '咖啡'
  // per._age = 4
  // console.log(per);
  

  // private 私有属性，可以通过类内的 get、set 方法来访问/修改属性
  console.log(per.name);
  per.name = '咖啡';
  console.log(per.age);
  per.age = 6;
  console.log(per);
  

  class A {
    protected num: number;

    constructor(num: number) {
      this.num = num;
    }
  }

  class B extends A {
    test() {
      console.log(this.num);
    }
    edit() {
      this.num = 888;
    }
  }

  const b = new B(123);
  // b.num = 66; // protected 属性值可以在当前类、子类中访问
  console.log(b);



  // class C {
  //   name: string;
  //   age: number;

  //   constructor(name: string, age: number) {
  //     this.name = name;
  //     this.age = age;
  //   }
  // }

  // 可以直接将属性定义在构造函数中
  class C {
    constructor(public name: string, public age: number) {

    }
  }
})();