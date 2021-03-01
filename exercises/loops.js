"use strict";


// 1. Create a loop that iterates 10 times logging the current iteration

for (let i = 0; i < 10; i++) {
    console.log("iteration " + i);
}

// 2. Iterate over the following array, describing what a band needs!

let aBandNeeds = ["drummer", "guitarist", "bassist", "singer"];

for (let i in aBandNeeds) {
    console.log("a band needs " + aBandNeeds[i]);
}

// 3. Create a loop that prints what do all beatles do!

let beatles = {
    drummer: "Ringo",
    guitarist: "George",
    bassist: "Paul",
    singer: "John"
};

for (let instrument in beatles) {
    console.log("In the Beatles, " + beatles[instrument] + " is the " + instrument);
}