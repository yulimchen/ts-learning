"use strict";
(function () {
    var obj = {
        name: '巧克力',
        age: 5,
        gender: '男'
    };
    /**
     * 定义类时，可以使用类去实现一个接口
     * 实现接口就是使类满足接口的要求
     */
    var MyClass = /** @class */ (function () {
        function MyClass(name) {
            this.name = name;
        }
        MyClass.prototype.sayHello = function () {
            console.log('大家好~~~');
        };
        return MyClass;
    }());
})();
