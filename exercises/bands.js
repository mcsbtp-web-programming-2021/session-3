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

// let main = document.querySelector(".main");

// for (let i in bands) {
//   let band = bands[i];
//   let bandDiv = document.createElement("div");

//   bandDiv.innerHTML = "<h2>" + band.name + "</h2>";

//   for (let member in band.instruments) {

//     let memberDiv = document.createElement("div");

//     memberDiv.classList.add(band.instruments[member]);
//     memberDiv.innerHTML = member;

//     bandDiv.appendChild(memberDiv);

//   }

//   main.appendChild(bandDiv);
// }


let button = document.querySelector("#the-button");

function eventReaction() {
  document.title = "the button was clicked";
}

button.addEventListener('click', eventReaction);