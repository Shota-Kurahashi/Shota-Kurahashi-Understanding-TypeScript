console.log("ここにコードを追加します。");

class Department {
  employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
const accounting = new Department("0", "Accounting");

accounting.describe();

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();

// const copyDepartment = {
//   describe: accounting.describe,
// };

// copyDepartment.describe(); //! ここでエラーが発生する
