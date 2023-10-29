"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.display = exports.numb = void 0;
var Person = /** @class */ (function () {
    function Person(fn, ln) {
        this.firstName = fn; // this means current calling object
        this.lastName = ln;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
exports.Person = Person;
var numb = 20;
exports.numb = numb;
function display() {
    console.log("hello");
}
exports.display = display;
