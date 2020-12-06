'use strict';

const contract = (func, ...Types) => (...args) => {//declare 2 funcs
  for (let i = 0; i < Types.length - 1; i++) {//cycle for elements of array of types
    if (typeof args[i] !== Types[i].name.toLowerCase()) {//checking types
      throw new TypeError("Dude, args should be same type!");//execption
    }
  }
  let result = func(...args);//func which take arguments
  return result;//return func result
};

//test from task
const add = (a, b) => a + b;// declare statements for func
const addNumbers = contract(add, Number, Number, Number);//task statement
const res = addNumbers(2, 3);//declare nums to add
console.log(res); // Output: 5
//second test by strings
const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res = concatStrings('Hello ', 'world!');
console.dir(res); // Output: Hello world!