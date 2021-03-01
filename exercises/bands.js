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

for (let i in bands) {
  let bandDiv = document.createElement("div");
  bandDiv.classList.add("band");

  let title = document.createElement("h2");
  title.innerHTML = bands[i].name;
  bandDiv.appendChild(title);

  for (let member in bands[i].instruments) {
    let instrument = bands[i].instruments[member];

    let memberDiv = document.createElement("div");

    memberDiv.innerHTML = member + ": " + instrument;
    
    bandDiv.appendChild(memberDiv);
  }

  main.appendChild(bandDiv);
}