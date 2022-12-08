"use strict";
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = data;
}
sendAnalytics("The data");
