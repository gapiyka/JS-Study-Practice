let phoneBook = [];
let names = ["Ignat", "Denis", "Timur", "Max", "Paul", "Ann", "Liza", "Alex", "Dasha", "Artem"];
let hashObj ={};
function bookFill(arr){
    for(let i = 0; i < 10; i++)
    {
        arr.push({name: names[i], phone: "+38067" + Math.round(Math.random()*(9999999-1000000)+1000000)});
    }
}
function findPhoneByName(name){
    for(let counter = 0; counter < phoneBook.length; counter++)
    {
        if(name === phoneBook[counter].name)
            return phoneBook[counter].phone;
    }
    
}
function fillNewCollection(){
    for(let j = 0; j < phoneBook.length; j++)
    {
        hashObj[phoneBook[j].name] = phoneBook[j].phone;
    }
}
function findPhoneByNameHash(name){
    return hashObj[name];
}
bookFill(phoneBook);
fillNewCollection();

console.log(phoneBook);
console.log(findPhoneByName("Ignat"));
console.log(findPhoneByName("Denis"));