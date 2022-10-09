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
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.sayHello = function () {
            console.log("".concat(this.name, "\u5728\u53EB\u5440~~"));
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name, age) {
            var _this = 
            // 如果子类也写了构造函数（等于重写构造函数），就必须调用父类的构造函数 super()
            _super.call(this, name) || this;
            _this.age = age;
            return _this;
        }
        Dog.prototype.bark = function () {
            // 在类的方法中 super 表示当前类的父类
            _super.prototype.sayHello.call(this);
            console.log("\u4ECA\u5E74".concat(this.age, "\u5C81~"));
        };
        return Dog;
    }(Animal));
    var dog = new Dog('旺财', 3);
    dog.bark();
})();
