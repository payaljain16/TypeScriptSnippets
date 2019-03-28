"use strict";
exports.__esModule = true;
var Emp = /** @class */ (function () {
    function Emp(name, age) {
        this.name = name;
        this.age = age;
    }
    Emp.prototype.display = function () {
        console.log(this.name);
        console.log(this.age);
        var x = 10;
        console.log(x);
    };
    return Emp;
}());
exports.Emp = Emp;
