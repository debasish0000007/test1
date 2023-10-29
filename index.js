var Days;
(function (Days) {
    Days[Days["sunday"] = 0] = "sunday";
    Days[Days["monday"] = 1] = "monday";
    Days[Days["tuesday"] = 2] = "tuesday";
    Days[Days["wednesday"] = 3] = "wednesday";
    Days[Days["thursday"] = 4] = "thursday";
    Days[Days["friday"] = 5] = "friday";
    Days[Days["saturday"] = 6] = "saturday";
})(Days || (Days = {}));
var d = Days.sunday;
console.log(d); // 0
console.log(Days[d]); //sunday
// type Assertions- type casting
// any or some union
var v1;
v1 = 10;
console.log(v1.toFixed());
// DOM 
var anchor = document.querySelector('a');
console.log(anchor);
var person = {
    name: "john",
    age: 20
};
var person5 = {
    name: "",
    age: 50,
    height: 5
};
var add = function (a, b, c) {
    if (c === void 0) { c = 20; }
    return a + b + c;
};
var ar = [2, 3, 5];
// u can even specify types for call back functions also
// DRY- Don't repeat yourself
var a1 = add(2, 2, 3);
// functions async- promises
function displayValue1(c) {
    throw new Error();
}
var c = add(2, 5);
displayValue1(c);
// classes- classes are used encapsulation --binding
// create instances 
// class Human
// {
//     name: string;
//     constructor(n:string)
//     {
//         this.name = n;
//     }
// }
// const r = new Human("raj")
// console.log(r.name);
// const k = new Human("john")
// //k.name="jessi"
