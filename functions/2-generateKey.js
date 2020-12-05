'use strict';

function random(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}
function generateKey(lengts, characters){
    let string = "";
    for(let i = 0; i < lengts; i++){
        let index = random(0, characters.length);
        string += characters.substr(index, 1);
    }
    return string;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); 