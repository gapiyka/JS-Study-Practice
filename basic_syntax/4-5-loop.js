//exercise 4
function range(start, end)
{
    let arr = [];
    for(start; start <= end; start++){
        arr.push(start);
    }
    console.log(arr);
}
range(15,30);

//exercise 5
function rangeOdd(start, end)
{
    let arr = [];
    for(start; start <= end; start++){
        if(start % 2) arr.push(start);
    }
    console.log(arr);
}
rangeOdd(15,30);