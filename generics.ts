//function sayGreet<T>(str:T):T
{
//return str
}
//console.log(sayGreet("Debasish Padhy"));
//console.log(sayGreet<number>(5));//



function printData<X,Y>(data1: X, data2: Y) {
    console.log("Output is: ", data1, data2);
}

printData("Namastey", "Bharat");
printData(123, ["Hi", 123]);


class Mobile<T>
{
    os: T;
    constructor(name: T)
    {
        this.os= name;
    }
}
const k=new Mobile("andriod")