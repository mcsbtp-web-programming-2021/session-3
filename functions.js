"use strict";

function areaTriangle(base, height) {
    return base * height / 2;
}

let area = areaTriangle(3, 4);

// console.log(area);

/*

this is for multiline comments

*/


function calculateArea(shape, base, height) {
    if (shape === "square") {
        return base * height;
    } else if(shape === "triangle") {
        return base * height / 2;
    }
}

let areaOfSquare = calculateArea("square", 3, 2);
let areaOfTriangle = calculateArea("triangle", 3, 2);

//console.log(areaOfSquare)
//console.log(areaOfTriangle)

let elements = [1,2,3];
elements.pop();
console.log(elements);