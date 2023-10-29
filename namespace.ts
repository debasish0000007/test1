namespace Outer{
export namespace Vehicle{
 export class Car{
        brand:string;
        constructor(b:string)
        {
            this.brand=b;
        }
    }
   export function sayGreet(str:string)
        {
            console.log("Hello World")
        }
}
}
Outer.Vehicle.sayGreet("John")



namespace Geometry{
    export namespace Circle{
        export function calculateArea(radius:number):number
        {
            return Math.PI*radius*radius;
        }
    }
}

export namespace Rectangle{
    export function calculateArea(width:number,height:number):number{
        return width*height;
    }
}

