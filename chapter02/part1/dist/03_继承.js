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
        function Animal(name, age) {
            this.name = name;
            this.age = age;
        }
        Animal.prototype.sayHello = function () {
            console.log('动物在叫~~');
        };
        return Animal;
    }());
    // 继承 Animal 类
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // 子类覆盖父类方法：方法重写
        Dog.prototype.sayHello = function () {
            console.log("".concat(this.name, "\u5728\u6C6A\u6C6A\u6C6A~"));
        };
        return Dog;
    }(Animal));
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cat.prototype.sayHello = function () {
            console.log("\u5927\u5BB6\u597D\u6211\u53EB".concat(this.name, "\uFF0C\u662F\u7EC3\u4E60\u65F6\u957F").concat(this.age, "\u5E74\u7684\u732B\u732B"));
        };
        return Cat;
    }(Animal));
    var dog = new Dog('旺财', 5);
    console.log(dog);
    dog.sayHello();
    var cat = new Cat('咖啡', 4);
    console.log(cat);
    cat.sayHello();
})();
