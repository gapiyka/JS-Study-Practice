'use strict';


//second exercise:
function inc(number){
    return number + 1;
}
const a = 5;
const b = inc(a);
console.dir({a, b});

//third exercise:
function incNum(object){
    object.n += 5;
}
const obj = 
{ 
    n: 5 
}; 
incNum(obj);
console.dir(obj);