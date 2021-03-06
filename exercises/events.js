"use strict";

// add a handler to button 1 so it changes the background of the page when clicked

let button1 = document.querySelector("#button1");

function handler1() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "#000";
    body.style.color = "#FFF";
}

button1.addEventListener('click', handler1);

// add a handler to button 2 so it adds the text "dynamically created" to the <h1>

let button2 = document.querySelector("#button2");

function handler2() {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "dinamically created";
}

button2.addEventListener('click', handler2);

// add a handler to button 3 so it changes the color of the text in the title

let button3 = document.querySelector("#button3");

function handler3() {
    let h1 = document.querySelector("h1");
    h1.style.color = "red";
}

button3.addEventListener('click', handler3);