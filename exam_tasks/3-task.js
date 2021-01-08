'use strict';

function deepClone(obj) {
     let res = {}
     for (let k in obj) {
        if((typeof obj[k]).toLowerCase() == 'object'){
            res[k] = deepClone(obj[k]);
        }
        else{
            res[k] = obj[k];
        }
     }
     return res
}

let object = {name: 'Wow', age: 54, obj2: {help: 2, unhelp: 3, obj3: {x: 0, y: -1}}};
let clonedObj = deepClone(object);

console.log(object);//befor changing elements
object.obj2.obj3.x = 999;
console.log(object);//changed obj in obj
console.log(clonedObj);//not modifed but coppied onj(without links)