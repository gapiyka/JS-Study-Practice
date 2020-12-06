'use strict';

function unique(array){
    for(let val of array){
        if(array.indexOf(val) !== array.lastIndexOf(val)){
            array.splice(array.lastIndexOf(val), 1);
        }
        console.log(val);
    }
    
    return array;
}
//check 1
const result = unique([2, 1, 1, 3, 2]);
console.log(result);
//check 2
const result2 = unique(['top', 'bottom', 'top', 'left']);
console.log(result2);