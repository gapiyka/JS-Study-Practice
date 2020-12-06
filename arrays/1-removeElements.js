'use strict';
function removeElement(array, item){
    for(let num in array){
        array[num] === item && array.splice(num, 1);
    }
    return array;
}
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array2, 'Lima'); 
removeElement(array2, "Berlin")
console.log(array2);