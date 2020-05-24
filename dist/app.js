"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting');
accounting.addEmployee('Ava');
accounting.addEmployee('Max');
accounting.describe();
accounting.printEmployeeInformation();
// const accountingCopy = { name: 's', describe: accounting.describe };
// accountingCopy.describe();
