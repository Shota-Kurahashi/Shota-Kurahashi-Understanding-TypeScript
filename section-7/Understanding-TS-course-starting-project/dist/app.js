"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("終わりました！");
    }, 2000);
});
promise.then((data) => {
    data.split(" ");
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({
    name: "Max",
    hobbies: ["Sports"],
}, { age: 30 });
const mergedObj2 = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.age);
function countAndDescribe(element) {
    let descriptionText = "値がありません";
    if (element.length > 0)
        descriptionText = "値が" + element.length + "個あります";
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there!"));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
extractAndConvert({ name: "Max" }, "name");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
const numberStorage = new DataStorage();
function createCourseGoal(title, description, completeUntil) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal;
}
const namess = ["Max", "Anna"];
