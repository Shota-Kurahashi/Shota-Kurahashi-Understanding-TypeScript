// abstract classはインスタンス化できない
abstract class Department {
  protected employees: string[] = [];
  static fiscalYears: number = 2022;

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return {
      name,
    };
  }

  // メソッドの構造を定義する
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ItDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT部門 - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(id: string, private report: string[]) {
    super(id, "Accounting");
    this.lastReport = report[0];
  }

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error("レポートが見つかりません");
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error("正しい値を設定してください");
    this.addReport(value);
  }

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("会計部門 - ID: " + this.id);
  }

  addReport(text: string) {
    this.report.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.report);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYears);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);

const it = new ItDepartment("d1", ["Max"]);

accounting.addReport("Something went wrong...");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.mostRecentReport = "レポート";

// console.log(accounting.mostRecentReport);
// accounting.printEmployeeInformation();
// accounting.printReports();

accounting.describe();

// copyDepartment.describe(); //! ここでエラーが発生する

/*
 * private -> クラスの内部からのみアクセス可能

 * protected -> クラスの内部と継承したクラスからのみアクセス可能

 * public -> すべての場所からアクセス可能

 * readonly -> 初期化時に値を設定する必要がある。値の変更はできない

 * static -> クラスのプロパティとして定義する。インスタンス化しなくてもアクセス可能

  * abstract -> 抽象クラス。インスタンス化できない。継承したクラスで実装する必要がある

  * getter -> プロパティの値を取得する際に実行される関数

  * setter -> プロパティの値を設定する際に実行される関数

  * singleton -> クラスのインスタンスを1つだけ生成することを保証するパターン

  * private constructor -> クラスのインスタンス化を防ぐ
  
 */
