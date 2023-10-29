//namespaces- internal modules- block which contained related functions,classes,types or interfaces
// export function add
// export class calculator
// export a
// export class car
//export function showBrand
var outer1;
(function (outer1) {
    var Vehicle;
    (function (Vehicle) {
        var Car = /** @class */ (function () {
            function Car(b) {
                this.brand = b;
            }
            return Car;
        }());
        Vehicle.Car = Car;
        function sayGreet(str) {
            console.log("hello world" + str);
        }
        Vehicle.sayGreet = sayGreet;
    })(Vehicle = outer1.Vehicle || (outer1.Vehicle = {}));
})(outer1 || (outer1 = {}));
outer1.Vehicle.sayGreet("john");
// shapes.ts
var Geometry1;
(function (Geometry1) {
    var Circle;
    (function (Circle) {
        function calculateArea(radius) {
            return Math.PI * radius * radius;
        }
        Circle.calculateArea = calculateArea;
    })(Circle = Geometry1.Circle || (Geometry1.Circle = {}));
    var Rectangle;
    (function (Rectangle) {
        function calculateArea(width, height) {
            return width * height;
        }
        Rectangle.calculateArea = calculateArea;
    })(Rectangle = Geometry1.Rectangle || (Geometry1.Rectangle = {}));
})(Geometry1 || (Geometry1 = {}));
// app.ts
var circleArea1 = Geometry1.Circle.calculateArea(5);
console.log("Circle Area: ".concat(circleArea1));
var rectangleArea1 = Geometry1.Rectangle.calculateArea(4, 6);
console.log("Rectangle Area: ".concat(rectangleArea1));
