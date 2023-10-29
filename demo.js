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
// static members
// Absract classes
var Shape1 = /** @class */ (function () {
    function Shape1() {
    }
    return Shape1;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.val = 20;
        _this.PI = 10;
        return _this;
    }
    Circle.PI = 3.14;
    return Circle;
}(Shape1));
var p1 = new Circle();
console.log(p1.PI);
console.log(Circle.PI); //3.14, static is used to access directly by classes
