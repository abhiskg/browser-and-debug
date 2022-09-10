"use strict";
// Type Coercion / Type conversion
const x = 0;
const y = false;
if (x == y) {
    console.log("true"); //ans:true
}
else {
    console.log("False");
}
// Closure
function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    };
}
const watch1 = stopWatch();
const watch2 = stopWatch();
console.log(watch1); //[Function (anonymous)]
console.log(watch1()); //1
console.log(watch1()); //2
console.log(watch2()); //1
console.log(watch1()); //3
console.log(watch2()); //3
// Callback Function
function greetings(greetingHandler, name) {
    greetingHandler(name);
}
function greetingMorning(name) {
    console.log("Good Morning", name);
}
function greetingEvening(name) {
    console.log("Good Evening", name);
}
greetings(greetingMorning, "Abhi");
greetings(greetingEvening, "Abhi");
// Pass By value
let num1 = 5;
let num2 = 7;
function multiply(a, b) {
    a = 7;
    return a * b;
}
multiply(num1, num2);
console.log(num1); //5
// Pass by reference
let student1 = { name: "Anil", age: 40 };
let student2 = { name: "Rahim", age: 36 };
function school(s1, s2) {
    s1.name = "Abhi";
}
school(student1, student2);
console.log(student1); //{ name: 'Abhi', age: 40 }
// function arguments
function sum(a, b) {
    console.log(arguments); //[Arguments] { '0': 4, '1': 5, '2': 6, '3': 7, '4': 8 }
    const args = [...arguments];
    return a + b;
}
// console.log(sum(4, 5, 6, 7, 8));
console.log(sum.length); //2
