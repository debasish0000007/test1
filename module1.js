// i will create one variable,function and class
var k2 = 20;
function add2(a, b) {
    return a + b;
}
var Employee = /** @class */ (function () {
    function Employee(fn, ln, sal) {
        this.firstName = fn;
        this.lastName = ln;
        this.salary = sal;
    }
    Employee.prototype.getData = function () {
        console.log("".concat(this.firstName, " , ").concat(this.lastName, ", ").concat(this.salary));
    };
    return Employee;
}());
