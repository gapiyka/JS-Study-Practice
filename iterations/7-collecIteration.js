'use strict'

function ages(obj){
    let collection = {};
    for(let key in obj){
        collection[key] = obj[key].died - obj[key].born;
    }
    return collection;
}

const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
}

console.log(ages(persons));
// {
//   Lenin: 54,
//   Mao: 83,
//   Gandhi: 79,
//   Hirohito: 88,
// }