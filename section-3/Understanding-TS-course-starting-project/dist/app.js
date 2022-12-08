"use strict";
const button = document.querySelector("button");
function clickHandler(message) {
    console.log("Clicked!");
}
button.addEventListener("click", clickHandler.bind(null, "You clicked me!"));
const map = new Map();
