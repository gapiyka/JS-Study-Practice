'use strict';

function difference(array1, array2){
    let arr = [];
    for(let val of array1){
        array2.indexOf(val) === -1 && arr.push(val);
    }
    return arr;
}

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);