let myName, bornYear, curYear;
myName = "Ignat";
bornYear = 2003;

function greeting(name, year){
    curYear = new Date();
    console.log(`Hello ${name}, are u ${curYear.getFullYear() - year} y.o.?`);
}

greeting(myName, bornYear);