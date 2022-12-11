/*
 * 交差型 -> ２つの型を組み合わせる
 */

type Admin = {
  name: string;
  privileges: string[]; // 権限を追加していく
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {} //? ２つの型を組み合わせる

type ElevatedEmployee = Admin & Employee; //? ２つの型を組み合わせる

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

// union型は、同じものだけが組み合わせられる

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; //? ２つの型を組み合わせる
