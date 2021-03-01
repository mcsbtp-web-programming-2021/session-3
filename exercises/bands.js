"use strict";

const bands = [
    {
      name: "The Beatles",
      instruments: {
        John: "voice",
        Paul: "bass",
        Ringo: "drums",
        George: "guitar"
      }
    },
    {
      name: "The Ramones",
      instruments: {
        Johnny: "voice",
        Joey: "guitar",
        Marky: "drums",
        DeeDee: "bass"
      }
    }
];

let main = document.querySelector('.main');

for (let band in bands) {
    let bandDiv = document.createElement("div");

    bandDiv.innerText = bands[band].name;

    let components = bands[band].instruments

    for (let component in components) {
        let componentDiv = document.createElement("div");

        componentDiv.classList.add("component");

        componentDiv.innerText = component + " plays " + components[component];

        bandDiv.appendChild(componentDiv);
    }

    console.log(bands[band]);

    main.appendChild(bandDiv)
}
