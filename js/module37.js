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
// lOcation info
const locationInfo = () => {
    console.log("origin", location.origin);
    console.log(location.port);
};
// GetCookies by name
const getCookiesByName = (name) => {
    const cookiesString = document.cookie;
    const cookieParts = cookiesString.split("; ");
    const cookie = cookieParts.find((c) => c.includes(name));
    if (cookie) {
        const cookieValue = cookie.split("=")[1];
        return cookieValue;
    }
};
localStorage.setItem("age", "40");
console.log(localStorage.getItem("age"));
// Set Storage data
const setStorageData = () => {
    const storageField = document.querySelector("#storage-field");
    const fieldValue = storageField.value;
    const previousData = localStorage.getItem("Type");
    if (!previousData) {
        const finalValue = [
            {
                type: fieldValue,
            },
        ];
        localStorage.setItem("Type", JSON.stringify(finalValue));
    }
    else {
        const prevUpdatedData = JSON.parse(previousData);
        const finalValue = [
            ...prevUpdatedData,
            {
                type: fieldValue,
            },
        ];
        localStorage.setItem("Type", JSON.stringify(finalValue));
    }
    showStorageData();
};
const showStorageData = () => {
    const storageContainer = document.querySelector("#storage-container");
    storageContainer.textContent = "";
    const storageDataString = localStorage.getItem("Type");
    if (!storageDataString) {
        return;
    }
    const storageData = JSON.parse(storageDataString);
    storageData.forEach((data) => {
        const li = document.createElement("li");
        li.innerText = data.type;
        storageContainer.append(li);
    });
};
showStorageData();
