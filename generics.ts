function sayGreet1<K>(str:K):K {
    return str
}
console.log(sayGreet1<string>("john"));
console.log(sayGreet1<number>(5));

function printData1<X, Y,Z>(data1: X, data2: Y,data3?:Z) {
	console.log("Output is: ", data1, data2)
}

printData1("Hello", "World",true)
printData1(123, ["Hi", 123])//number,Array




class Mobile1<T>
{
    os: T;
    constructor(name: T)
    {
        this.os = name;
    }
}
const k1= new Mobile1("android")