'use strict';

//hoisting function:
myFirstFunction("Kyiv")
function myFirstFunction(city){
    console.log("Wakey, wakey " + city + "!");
}
myFirstFunction("Lviv");


//hoisting of num declaration:
num = 5;
let num;