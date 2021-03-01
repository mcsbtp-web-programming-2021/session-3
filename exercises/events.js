"use strict";

// add a handler to button 1 so it changes the background of the page when clicked

// add a handler to button 2 so it adds the text "dynamically created" to the <h1>

let button2 = document.querySelector(".button2");

function react2() {
    let h1 = document.querySelector("h1");

    h1.innerHTML = "dynamically created!";
}

button2.addEventListener('click', react2);


// add a handler to button 3 so it changes the color of the text in the title