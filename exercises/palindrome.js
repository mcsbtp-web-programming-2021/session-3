"use strict";

function eq(a, b) {
    if (a.length !== b.length) {
        return false;
    } else {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
    }
    return true;
}

function checkPalindrome(arr) {

    //let reversed = arr.slice().reverse()
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return eq(arr, reversed);

}

console.log(checkPalindrome([1, 2, 3, 2, 1]));
console.log(checkPalindrome([]));
console.log(checkPalindrome([1, 3]));
