'use strict';
const seq = func => func2 => (typeof func2 === 'number' ? func(func2) : seq(x => func(func2(x))));

// smthing wrong, fix it later ;)
/* function seq(...args) {
    return function a(){
        return function b() {
            if(typeof b === "number"){
                a(b());
            }
            else {
                seq(a(b(args)))
            }
        }
    }
} */

console.log(seq(x => x+7)(x => x * 2)(5)); 
console.log(seq(x => x * 2)
(x => x + 7)(5));
console.log(seq(x => x + 1)
(x => x * 2)
(x => x / 3)
(x => x - 4)(7));