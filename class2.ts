export default class Person {
    public readonly firstName: string
          lastName: string
          constructor(fn: string, ln: string) 
          {
              this.firstName = fn
              this.lastName = ln
          }
         getFullName(): string 
        {      
              return `${this.firstName} ${this.lastName}`
        }
}
let numb=20;
function display():void{
    console.log("hello")
}
export{numb,display,Person}
