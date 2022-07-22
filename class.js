"use strict";
//  TYPE ALIAS
// type StringorNumber = number | string
// type Student = {name:number | string, age:number}
exports.__esModule = true;
exports.Employee = void 0;
// let great = (user:Student) => console.log(`Student is ${user.name} + ${user.age}`);
// great({name:1,age:20})
// FUNCTION SIGNATURE
// let calculator : (a:number, b:number, c: string) => number
// calculator = (numOne:number,numTow: number, action:string) => 
//     action === 'add' ? numOne + numTow : numOne - numTow
// console.log(calculator(4,2,'add'));
// OPTIONAL AND NON NULL
// const add = (a:number, b?:number) => (b ? a + b : a)
// console.log(add(1,2));
// console.log(add(1));
// const addNonNull = (a:number, b?:number) => a + b!
// console.log(addNonNull(3,4));
// console.log(addNonNull(3));
// Class 
var Employee = /** @class */ (function () {
    // public name: string;
    // private age: number;
    // readonly male: boolean;
    // constructor(n: string, a: number, m :boolean) {
    //     this.name = n
    //     this.age = a
    //     this.male = m
    // }
    // Cach 2:gon hon
    function Employee(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Employee.prototype.print = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Gender Male: ").concat(this.male);
    };
    return Employee;
}());
exports.Employee = Employee;
// const henry = new Employee('henry', 30, true);
// console.log(henry.name);
// console.log(henry.male);
// console.log(henry.print());
// henry.name = 'nam'
// console.log(henry);
// const bob = new Employee('bob',25 ,true)
// let employees: Employee[] = [];
// employees.push(henry);
// employees.push(bob);
// employees.forEach(employee => console.log(employee.name, employee.male, employee.print())
// )
