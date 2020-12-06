'use strict';

function reducer(a, b){return (a > b ? a : b)} 

function max(arr){
    let result = arr
                .map(subarr => subarr.reduce(reducer))
                .reduce(reducer);
    return result;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9