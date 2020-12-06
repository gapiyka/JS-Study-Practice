'use strict';

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const pipe = (...fns) => {check(fns); return x => compose(fns, x)};

function compose(arr, x){
    let result = 0;
    for(let func of arr){
        result = func(x);
        x = result;
    };
    return result;
};

function check(arr){
    for (const f of arr) {
        if (typeof f !== "function") {
          throw new Error("Sorry, but ur arguments should by func!");
        }
    }
}
//test 1:
const f = pipe(inc, twice, cube);
console.log(f(5));
//test 2:
const f2 = pipe(inc, inc);
console.log(f2(7));
//test 3:
const f3 = pipe(inc, 7, cube); // should throw the error