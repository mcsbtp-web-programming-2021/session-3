"use strict";

function eq(a, b) {
    if (a.length !== b.length) {
        return false;
    } else {
        for (let i in a) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
}

function checkPalindrome(arr) {

    let copy = arr.slice().reverse();

    return eq(arr, copy);

}

console.log(checkPalindrome([1,2,3,2,1]))