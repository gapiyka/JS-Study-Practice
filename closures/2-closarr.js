'use strict';

function array(){
    let newArray = [];

    let current = function(i){
        return newArray[i];
    };
    current.push = function (value){
        return newArray.push(value);
    };
    current.pop = function() {
        return newArray.pop();
    };

    return current;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Output: first
console.log(arr(1)); // Output: second
console.log(arr(2)); // Output: third

console.log(arr.pop()); // Output: third
console.log(arr.pop()); // Output: second
console.log(arr.pop()); // Output: first

console.log(arr.pop()); // Output: undefined`