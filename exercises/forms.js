"use strict";

let field = document.querySelector("#user");

let fn = (event) => {
    field.style.border = field.value;
};

field.addEventListener("keyup", fn);
