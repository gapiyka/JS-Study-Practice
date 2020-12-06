'use strict';

function removeElements(array, ...itemN){
    let delNums = [];
    for(let num in array){
        itemN.some((x) => x === array[num]) && delNums.push(num);
    }
    for(let i = delNums.length-1; i >= 0; i--){
      array.splice(delNums[i], 1);
    } 
    return array;
}
const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 7);
console.log(array);

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array2, 'Lima', 'Berlin', 'Kiev');
console.log(array2);