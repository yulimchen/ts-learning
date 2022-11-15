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
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this._name = name;
            this._age = age;
        }
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (val) {
                this._name = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "age", {
            get: function () {
                return this._age;
            },
            set: function (val) {
                if (val >= 0) {
                    this._age = val;
                }
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var per = new Person('巧克力', 5);
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
    var A = /** @class */ (function () {
        function A(num) {
            this.num = num;
        }
        return A;
    }());
    var B = /** @class */ (function (_super) {
        __extends(B, _super);
        function B() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        B.prototype.test = function () {
            console.log(this.num);
        };
        B.prototype.edit = function () {
            this.num = 888;
        };
        return B;
    }(A));
    var b = new B(123);
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
    var C = /** @class */ (function () {
        function C(name, age) {
            this.name = name;
            this.age = age;
        }
        return C;
    }());
})();
