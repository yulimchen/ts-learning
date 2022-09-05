"use strict";
var Dog = /** @class */ (function () {
    // constructor 构造函数
    // 类创建对象时调用
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    Dog.prototype.bark = function () {
        console.log(this);
    };
    return Dog;
}());
var dog = new Dog('旺财', 5);
var dog2 = new Dog('小白', 2);
dog.bark();
dog2.bark();
