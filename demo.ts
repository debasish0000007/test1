// static members
// Absract classes
abstract class Shape1{
    abstract val: number;
    
}
class Circle extends Shape1{
    static PI = 3.14;
    val = 20;
    PI = 10;

}
let p1= new Circle()
console.log(p1.PI)
console.log(Circle.PI)//3.14, static is used to access directly by classes