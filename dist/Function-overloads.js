"use strict";
// type Admin = {
//     name: string;
//     privileges: string[];
// }
// type Employee = {
//     name: string;
//     startDate: Date;
// }
// //interface ElevatedEmployee extends Employee, Admin {}
// type ElevatedEmployee = Admin & Employee;
// const e1: ElevatedEmployee = {
//     name: 'Max',
//     privileges: ['create-server'],
//     startDate: new Date()
// }
// type Combinable = string | number;
// type Numeric = number | boolean;
// type Universal = Combinable | Numeric;
// //function add(a: number, b: number): number
// function add(a: Combinable, b: Combinable) {
//     if (typeof a === 'string' || typeof b ==='string'){
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }
// const result = add('Prithvi', 'Raj');
// const fetchedUserData = {
//     id: 'u1',
//     name: 'name',
//     job: { title: 'CEO', description: 'My own company' }
// }
// console.log(fetchedUserData.job.title);
// const userInput = '';
// const storedData = userInput ?? 'DEFAULT';
// // type UnknownEmployee = Employee | Admin;
// // function printEmployeeInformation(emp: UnknownEmployee) {
// //     console.log('Name' + emp.name);
// //     if ('privileges' in emp) {
// //         console.log('Privileges: ' + emp.privileges)
// //     }
// //     if('startDate' in emp){
// //         console.log('startDate:' + emp.startDate);
// //     }
// // }
// // printEmployeeInformation({name: 'Prithvi', startDate: new Date()});
// // class Car {
// //     drive() {
// //         console.log('Driving ...');
// //     }
// // }
// // class Truck {
// //     drive() {
// //         console.log('Driving a truck ...');
// //     }
// //     loadCargo(amount: number) {
// //         console.log('Loading Cargo ' + amount);
// //     }
// // }
// // type Vehicle = Car| Truck;
// // const v1 = new Car();
// // const v2 = new Truck();
// // function useVehicle(vehicle: Vehicle) {
// //     vehicle.drive();
// //     if(vehicle instanceof Truck) {
// //         vehicle.loadCargo(1000);
// //     }
// // }
// // useVehicle(v1);
// // useVehicle(v2);
// // interface Bird {
// //     kind: 'Bird';
// //     flyingSpeed: number;
// // }
// // interface Horse {
// //     kind: 'Horse';
// //     runningSpeed: number;
// // }
// // type Animal = Bird| Horse;
// // function moveAnimal(animal:Animal) {
// //     let speed;
// //     switch(animal.kind) {
// //         case 'Bird':
// //             speed = animal.flyingSpeed;
// //             break;
// //         case 'Horse':
// //             speed = animal.runningSpeed;
// //             break;
// //     }
// //     console.log('Speed: ' + speed);
// // }
// // moveAnimal({ kind: 'Bird', flyingSpeed: 500});
// // //const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// // const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// // userInputElement.value = 'Hi there!';
// // interface ErrorContainer {
// //     [prop: string]: string;
// // }
// // const errorBag: ErrorContainer = {
// //     1: 'Not a valid email!',
// //     username: 'Must start wuth a capital character!'
// // };
