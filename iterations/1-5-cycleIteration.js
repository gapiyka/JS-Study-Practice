'use strict';

function sum1(...args){
    let sum = 0;
    for(let i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum;
}
function sum2(...args){
    let sum = 0;
    for(let value of args){
        sum += value;
    }
    return sum;
}
function sum3(...args){
    let sum = 0, counter = 0;
    while(counter < args.length){
        sum += args[counter];
        counter++;
    }
    return sum;
}
function sum4(...args){
    let sum = 0, counter = 0;
    do{
        sum += args[counter];
        counter++;
    }while(counter < args.length)
    return sum;
}
function sum5(...args){
    return args.reduce(function(a,b){return a+b;});
}

const a = sum1(1, 2, 3, 4);
const b = sum2(0);
const c = sum3();
const d = sum4(1, -1, 1); 
const e = sum5(10, -1, -1, -1);

console.log("Sum1 equal: " + a );
console.log("Sum2 equal: " + b );
console.log("Sum3 equal: " + c );
console.log("Sum4 equal: " + d );
console.log("Sum5 equal: " + e );