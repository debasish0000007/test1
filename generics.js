function sayGreet1(str) {
    return str;
}
console.log(sayGreet1("john"));
console.log(sayGreet1(5));
function printData1(data1, data2, data3) {
    console.log("Output is: ", data1, data2);
}
printData1("Hello", "World", true);
printData1(123, ["Hi", 123]); //number,Array
var Mobile1 = /** @class */ (function () {
    function Mobile1(name) {
        this.os = name;
    }
    return Mobile1;
}());
var k1 = new Mobile1("android");
