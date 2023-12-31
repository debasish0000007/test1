import * as John from './class2'
  class Human extends John.Person{
      age: number
      constructor(f:string,l:string,num:number)
      {
          super(f,l)
          this.age=num
      }
      getDetails() {
          return `the name is ${this.firstName} ${this.lastName} and age is ${this.age}`
      }
  }
  
  
  const person1 = new Human("Debasish", "Padhy",24)//Person1.getFullName()
  
  console.log(person1.getDetails()) // Output: "John Doe"
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
  class MathHelper {
      static PI: number = 3.14;
  
      static circleArea(radius: number): number {
          return MathHelper.PI * radius * radius;
      }
  }
  
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