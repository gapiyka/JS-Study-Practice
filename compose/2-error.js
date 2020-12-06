'use strict';
//can't understand aim of this exercise correct;(
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
let errors = [];
const pipe = (...fns) => x => compose(fns, x);

function compose(arr, x){
  try{
    let result = 0;
    for(let i = arr.length-1; i >= 0; i--){
        result = arr[i](x);
        x = result;
    };
    return result;
  }
  catch(error){
    for (let val of errors) {
        val(error);
    }
  }
};

const f = pipe(inc, twice, cube);
f.on = (key, val) => {
   if (key === 'error') errors.push(val);
};
console.log(f(5));