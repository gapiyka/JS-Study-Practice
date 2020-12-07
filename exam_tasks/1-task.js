// ARRAY
let arr = [1,2,3]; // declared array
console.log("Array declared like: arr = " + arr);

let len = arr.length; //length of elemetns in array
console.log("\nArray.lenth return: " + len); //output 3

let arr2 = Array.from(arr)//creates a new, shallow-copied Array instance from an array-like or iterable object.
console.log("\nArray.from(arr) return: " + arr2); //output [1,2,3]
arr2 = Array.from(arr2, x => x + x)//new array with mapFunction, which sum each value through the cycle
console.log("Array.from(arr, mapFunction) return: " + arr2); //output [2,4,6]

let flag = Array.isArray(arr);//check if array in args have type array
console.log("\nArray.isArray(arr) return: " + flag); //output true
console.log("Array.isArray('arr') return: " + Array.isArray('arr')); //output false

let arr3 = Array.of(2,2,8);// creates a new Array instance from a variable number of arguments
console.log("\nArray.of(2, 2, 8) return: " + arr3); //output [2, 2, 8]

let arr4 = arr.concat([4,5,6], [7, 8, 9]);// merge two or more arrays. 
console.log("\narr.concat([4,5,6], [7, 8, 9]) return: " + arr4); //output [1, 2, 3, 4, 5, 6, 7, 8, 9]

let arr5 = arr4.copyWithin(0, 6, 9)// copy part of array at index from args, with declared range
console.log("\narr4.copyWithin(0, 6, 9) return: " + arr5); //output [7, 8, 9, 4, 5, 6, 7, 8, 9]

console.log(" \n ");
//array.entries() return [object Array Iterator] which consist of indexs and elements
for (const [index, element] of arr5.entries()){
    console.log("index: " + index + " || element: " + element);
}
console.log(" \n ");

flag = arr4.every(x => x<10);// array.every(callback) go through every element of array and check callback
console.log("arr4.every(x => x<10) return: " + flag);// output true

let arr6 = arr4.fill(0, 2, 5);// fill with 0 from position 2 until position 4
console.log("\narr4.fill(0, 2, 5) return: " + arr6);//output [1,2,0,0,0,6,7,8,9]
arr6 = arr4.fill(0, 3);// fill with 0 from position 3 to end
console.log("arr4.fill(0, 3, 5) return: " + arr6);//output [1,2,3,0,0,0,0,0,0]
arr6 = arr4.fill(1);// fill array with 1 
console.log("arr4.fill(1) return: " + arr6);//output [1,1,1,1,1,1,1,1,1]

let arr7 = arr.filter(x => x % 2 !== 0);//creates a new array with all elements that pass the callaback
console.log("\narr.filter(x => x % 2 !== 0) return: " + arr7);// output [1, 3]

let findNum = [1, 2, 3, 4].find(x => x % 2 === 0);//returns the value of the first element in the provided array that satisfies func 
console.log("\n[1, 2, 3, 4].find(x => x % 2 === 0) return: " + findNum)//output 2

let findIndex = [1, 2, 3, 4].findIndex(x => x % 2 === 0);//returns the index of the first element in the provided array that satisfies func 
console.log("\n[1, 2, 3, 4].findIndex(x => x % 2 === 0) return: " + findIndex)//output 1

let arr8 = [2, 3, 5, [7, 1, 2], [4, 5, [6, 2]]];
arr8 = arr8.flat();//creates a new array with all sub-array with args depth.
console.log("\n[2,3,5,[7,1,2],[4,5,[6,2]]].flat() return: ");
console.log(arr8);//output [ 2, 3, 5, 7, 1, 2, 4, 5, [ 6, 2 ] ] **if flat(arg) arg equal 2, array will have only 1 deep

//array.flatMap() same as .map(callback) and then .flat()

console.log(" \n ");
arr.forEach(x => console.log("element: " + x));// provide func to each element of array

console.log("\narr.includes(5) return: " +arr.includes(5));// check if array consist argument // output false

console.log("\narr.indexOf(3) return: " +arr.indexOf(3));// search first index of argument in array // output 2

let str = arr.join('-');//create and return string by concating all elements in array
console.log("\narr.join('-') return: " + str) //output 1-2-3

//Array.keys() return keys of array *if make cycle for every element of keys - is same as index of elements in array

console.log("\narr8.lastIndexOf(3) return: " +arr8.lastIndexOf(5));// search last index of argument in array // output 7

let arr9 = arr.map(x => x * 2);//create new array with used callback to each element
console.log("\narr.map(x => x * 2) return: " +arr9) // output 2, 4, 6

arr9.pop();// remove last element of array
console.log("\nArray.pop() result return: " + arr9);//output 2,4

arr9.push(6);// add last element of array
console.log("\nArray.push(6) result return: " + arr9);//output 2,4,6

arr9.shift();// remove first element of array
console.log("\nArray.shift()) result return: " + arr9);//output 4,6

arr9.unshift(2);// add first element of array
console.log("\nArray.unshift(2)) result return: " + arr9);//output 2,4,6

arr9.reverse();// reverse of array
console.log("\nArray.reverse()) result return: " + arr9);//output 6,4,2

let res = arr9.reduce((a,b) => a+b);//func for every element of array using accamulator
console.log("\nArray.reduce((a,b) => a + b))return: " + res);//output 12

res = arr9.reduceRight((a,b) => a-b);//same like reduce but take elements from end to start
console.log("\nArray.reduce((a,b) => a + b))return: " + res);//output -8

let arr10 = arr6.slice(2, 5)// new sub array that copied from index(arg1) to index(arg2)
console.log("\narr6.slice((2, 5) return: " + arr10);//output 1, 1, 1

flag = arr10.some(x => x%2 == 0);// return bool if some element of array do func 
console.log("arr10.every(x => x%2 == 0) return: " + flag);// output false

arr10.splice(1, 1, 33)//replace arg2 at index arg1 and adding new element(arg3)
console.log("arr10.splice(1, 1, 33) return: " + arr10);// output 1, 33, 1

//array.values() - same like a keys, but for values