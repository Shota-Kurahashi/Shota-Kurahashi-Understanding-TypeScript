const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("終わりました！");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

//* extendsで型を制限する
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge(
  {
    name: "Max",
    hobbies: ["Sports"],
  },
  { age: 30 }
);

const mergedObj2 = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "値がありません";
  if (element.length > 0)
    descriptionText = "値が" + element.length + "個あります";
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Max" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");

const numberStorage = new DataStorage<number>();

/* const objStorage = new DataStorage<object>();

const obj = {
  name: "Max",
};
objStorage.addItem(obj);

objStorage.addItem({ name: "Manu" });
// ...

// このobjは参照が違うので削除されない
objStorage.removeItem(obj);

console.log(objStorage.getItems()); */

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;

  return courseGoal as CourseGoal;
}

//* 読み取り専用
const namess: Readonly<string[]> = ["Max", "Anna"];
// namess.push("Manu");

// 全体で型を固定して置きたい場合はGenericsを使う
