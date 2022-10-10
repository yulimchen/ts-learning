"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    /**
     * 以 abstract 开头为抽象类
     *  抽象类和普通类区别不大，只是不能用来创建对象
     *  抽象类就是专门用来被继承的类
     */
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.sayHello = function () {
            console.log('汪汪汪！');
        };
        return Dog;
    }(Animal));
    var dog = new Dog('旺财');
    dog.sayHello();
    // 抽象类不能用来创建对象
    // const snake = new Animal('小蛇');
    // snake.sayHello();
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cat.prototype.sayHello = function () {
            console.log('喵喵喵！');
        };
        return Cat;
    }(Animal));
    var cat = new Cat('小花');
    cat.sayHello();
})();
