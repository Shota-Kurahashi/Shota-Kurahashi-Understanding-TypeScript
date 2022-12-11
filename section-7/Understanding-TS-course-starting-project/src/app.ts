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
