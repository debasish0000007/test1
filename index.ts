enum Days{
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
}
const d: Days = Days.sunday;
console.log(d) // 0
console.log(Days[ d ]) //sunday

// type Assertions- type casting
// any or some union
let v1: (string | number);
v1= 10
console.log(v1.toFixed())
// DOM 
//const anchor = document.querySelector('a') as HTMLAnchorElement
//console.log(anchor)

// contracts- we define our own data types
// interfaces and type alias
//object

interface Person1
{
    name: string,
    age:number,
}
type Person2=
    {
name: string,
    age:number,
    }
let person: Person2 = {
    name: "john",
    age:20
};
interface Man extends Person1{
    height:number,
}
const person5: Man={
    name:"",
    age:50,
    height:5
}

/*  functions */
/* parameters,return value*/
// function add1(a1:number, b1:number):void
// {
//  console.log("hello")
// }
// type Add=(x:number,y:number)=>number
// const add:Add=(a,b)=>{ return a + b; };
// console.log(add(3, 5))

// function -

type Callbackfn = (a: number)=>number
const add = (a:number, b:number,c:number=20) => {
        return a + b + c;
}
const ar = [ 2, 3, 5 ]
// u can even specify types for call back functions also
// DRY- Don't repeat yourself
 const a1= add(2,2,3)
// functions async- promises
function displayValue1(c:number):never
{
    throw new Error();
}
const c = add(2, 5);
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