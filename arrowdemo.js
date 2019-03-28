function add1(x, y) {
    return x + y;
}
var add2 = function (x, y) {
    return x + y;
};
var add3 = function (x, y) { return x + y; };
console.log(add1(10, 20));
console.log(add2(30, 60));
console.log(add3(30, 70));
var User = /** @class */ (function () {
    function User() {
        this.name = 'prashant';
        var self = this;
        setTimeout(function () {
            console.log("Name: " + self.name);
        }, 5000);
    }
    return User;
}());
var u1 = new User();
var User1 = /** @class */ (function () {
    function User1() {
        var _this = this;
        this.name = 'prashant12';
        setTimeout(function () {
            console.log("Name: " + _this.name);
        }, 5000);
    }
    return User1;
}());
var u2 = new User1();
