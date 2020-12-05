function avg(a, b){
    return (a+b)/arguments.length; 
}
console.log("Average of 2 and 6 equal: " + avg(2, 6));

function square(a){
    return a*a; //a**2 || Math.pow(a, 2)\\
}
console.log("Square of 6: " + square(6));

function cube(a){
    return a*a*a; //a**3 || Math.pow(a, 3)\\
}
console.log("Cube of 6: " + square(6));

function calculate(){
    let calc = [];
    for(let i = 0; i < 10; i++)
    {
        calc.push(avg(square(i), cube(i)));
    }
    return calc;
}
console.log("Calculate function: " + calculate());