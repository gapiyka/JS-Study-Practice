'use strict';

function castIP(address){
    arr1 = address.split(".");
    arr2 = [];
    let total = 0;
    //let counter = 0; //for another way of cycle
    for(let i = 0; i < arr1.length; i++)
    {
        arr2.push(parseInt(arr1[i]));
    }
    /* for(let j = arr2.length-1; j >= 0; j--){
        total += arr2[counter] << 8 * j;
        counter++;
    } */
    for(let j = 0; j < arr2.length; j++){
        total += arr2[j] << 8 * (3-j);
    }
    return total;
}

console.log(castIP("10.0.0.1"));
console.log(castIP("0.0.0.0"));
console.log(castIP("127.0.0.1"));
console.log(castIP("8.8.8.8"));
console.log(castIP("165.225.133.150"));
console.log(castIP("192.168.1.10"));
//sorry for not using array.reduce, just cuz i can't understend how it help in optimization(*in this variation of code))