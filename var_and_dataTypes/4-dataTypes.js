'use strict';

let strangeArray = [1, 'wakey wakey', -2, 3.14, true, 
                    false, {n: 10}, 'time for school', 
                    Math.PI, 'abracadabra', -228888888, 
                    null, NaN, undefined, new Function];

let typesCollection = 
{
    string: 0,
    number: 0,
    boolean: 0,
};

for(let value of strangeArray)
{
    let type = typeof value;
    if(!Object.keys(typesCollection).includes(type)) {
        typesCollection[type] = 1;
    }
    else{
        typesCollection[type]++;
    }
}
console.log("Collection types in array: ");
console.log(typesCollection);