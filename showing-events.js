"use strict";

let button = document.querySelector("#clickity-click");

function react() {
    //let body = document.querySelector("body");

    button.style.backgroundColor = "0F0";

    console.log("hello");
}

button.addEventListener("click", react);