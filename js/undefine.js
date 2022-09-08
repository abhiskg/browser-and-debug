"use strict";
// 8 ways to get undefined
// Variable that is declared but not initialized
let first;
console.log(first);
// Function with no return
function add(a, b) {
    const total = a + b;
}
const result = add(4, 5);
console.log(result);
// Function parameter that is not passed will be undefined
// If you return but with no value/variable, that will be undefined
function third(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}
console.log(third(-1, 3));
// Property that doesn't exist on an object will give undefined
const band = { id: 1, name: "rock" };
console.log(band.salary);
// Accesing array elemnet outside of that index range
const numArray = [2, 3, 4, 5];
console.log(numArray[5]);
// Deleting an element inside an array(don't do this)
const numArray2 = [4, 5, 6, 7, 8];
delete numArray2[2];
console.log(numArray2); //[ 4, 5, <1 empty item>, 7, 8 ]
// Set a value directly to undefined (don't do this instead use null)
const eight = undefined;
