const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("終わりました！");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

function merge<T extends {}, U>(objA: T, objB: U) {
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
