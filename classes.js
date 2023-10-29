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
Object.defineProperty(exports, "__esModule", { value: true });
//Basic Class
// const p= new Human("raj","shekhar",30)// it creates a new constant p with new keyword and
//public- all access available
//private- only class
// protected- class and subclasses
var John = require("./class2");
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(firstName, lastName, num) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.age = num;
        return _this;
    }
    Human.prototype.getDetails = function () {
        return "the name is ".concat(this.firstName, " ").concat(this.lastName, " and age is ").concat(this.age);
    };
    return Human;
}(John.Person));
var person1 = new Human("raja", "Prasad", 25); //Person1.getFullName()
console.log(person1.getFullName()); // Output: "John Doe"
// console.log(person2.getFullName()) // Output: "Alice Smith"
// //Inheritance
// class Animal {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     makeSound(): string {
//         return "Some generic sound";
//     }
// }
// class Dog extends Animal {
//     makeSound(): string {
//         return "Woof!";
//     }
// }
// const dog = new Dog("Buddy");
// console.log(dog.makeSound()); // Output: "Woof!"
// //Access Modifiers
// class Employee {
//     private empId: number;
//     public fullName: string;
//     constructor(empId: number, fullName: string) {
//         this.empId = empId;
//         this.fullName = fullName;
//     }
//     getEmployeeInfo(): string {
//         return `Employee ID: ${this.empId}, Name: ${this.fullName}`;
//     }
// }
// const employee = new Employee(1, "John Doe");
// console.log(employee.fullName); // Accessing public property
// console.log(employee.getEmployeeInfo()); // Accessing a method
//static Members --modules- es6
var MathHelper = /** @class */ (function () {
    function MathHelper() {
    }
    MathHelper.circleArea = function (radius) {
        return MathHelper.PI * radius * radius;
    };
    MathHelper.PI = 3.14;
    return MathHelper;
}());
// const area = MathHelper.circleArea(5);
// console.log(area); // Output: 78.5
// //getter and setter
// class Temperature {
//     private _celsius: number=0;
//     get celsius(): number {
//         return this._celsius;
//     }
//     set celsius(value: number) {
//         if (value < -273.15) {
//             throw new Error("Temperature below absolute zero is not possible.");
//         }
//         this._celsius = value;
//     }
//     get fahrenheit(): number {
//         return (this._celsius * 9/5) + 32;
//     }
//     constructor(celsius: number) {
//         this.celsius = celsius;
//     }
// }
// const temperature = new Temperature(25);
// console.log(temperature.celsius); // Accessing the getter
// console.log(temperature.fahrenheit); // Accessing the getter for Fahrenheit
// temperature.celsius = 30; // Accessing the setter
