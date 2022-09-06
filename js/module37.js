"use strict";
// setInterval
console.log("one");
console.log("two");
let second = 0;
const intervalId = setInterval(() => {
    //   second++;
    console.log(++second); // 0 1 2 3 4 5
    if (second === 5) {
        clearInterval(intervalId);
    }
}, 1500);
console.log("four");
// confirm
const askSomething = () => {
    const ans = confirm("Are you coming");
    console.log(ans); //return true or false
};
// prompt
const getUserInfo = () => {
    const name = prompt("Tell your name");
    console.log(name);
};
