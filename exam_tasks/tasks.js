'use strict';
//   NOTE: с т о и т   у т о ч н я т ь   Т З  !!!

//1-Task: (75) Написать функцию, которая принимает 3 аргумента(строку в которой ищем / строку которую ищем / строку на которую надо заменить) с поиском и заменной строк.
//Solution: 
const task1 = function (){
    console.log("Task1:"); 

    function replace(fullString, soughtPart, exchangePart){
        if((typeof fullString) !== "string" || (typeof soughtPart) !== "string" || (typeof exchangePart) !== "string"){
            throw new TypeError("Sorry but all args should be \"string\"-type");
        }
        else if(fullString.indexOf(soughtPart) !== -1){
            let newString = fullString.replace(soughtPart, exchangePart);//You can use regularExpression
            console.log(newString);
            return newString;
        }
        else{
            console.log("Sorry but we couldnt find this part here.")
            return "unfind";
        }
    }
    replace("https://github.com/HowProgrammingWorks", "https://", "www.");//!!Change this line to test code

    console.log("\n");
}
task1();

//2-Task: (100?) Написать класс с подсчётом вызовов.
//Solution:
const task2 = function (){
    console.log("Task2:"); //idk how Shems think it should be realized, so its my solution

    class MyClass {
        constructor(){
            this.counter = 0;
        }
        count(){
            this.counter++;
        }
        get AmmountOfCounts(){ //getter
            return this.counter;
        }
    }
    let test = new MyClass();
    console.log(`Counter value: ${test.AmmountOfCounts}`);
    test.count();
    test.count();
    console.log(`Counter value: ${test.AmmountOfCounts}`);

    console.log("\n");
}
task2();

//3-Task: (100) Написать функцию, которая принимает массив и считает там количество элементов разных типов. 
//Solution: 
const task3 = function (){
    console.log("Task3:"); //coppied from var_and_dataTypes\4-dataTypes.js

    let strangeArray = [1, 'wakey wakey', -2, 3.14, true, 
                        false, {n: 10}, 'time for school', 
                        Math.PI, 'abracadabra', -228888888, 
                        null, NaN, undefined, new Function];//array with dif types
    function CalcTypes(array){
        let typesCollection = //object(collection) which calculate how many types are in
        {
            string: 0,
            number: 0,
            boolean: 0,
        };

        for(let value of array)
        {
            let type = typeof value;
            if(!Object.keys(typesCollection).includes(type)) {//check on consisting type in collection
                typesCollection[type] = 1;
            }
            else{
                typesCollection[type]++;
            }
        }
        return typesCollection;
    }
    
    console.log("Collection types in array: ");
    console.log(CalcTypes(strangeArray));

    console.log("\n");
}
task3();

//4-Task: (100) Написать класс который имеет колекцию и метод .add(key, value). Note: добавлять объект в колекцию если задан хотябы или key или value.
//Solution: 
const task4 = function (){
    console.log("Task4:");//code spizzen from Andreys friend 

    class Collection{
        constructor(){
            this.data = new Map();//u can use:  weakMap/Set/weakSet
        };
    
        add(key, value){
            if(!value && !key){
                throw new Error("Exeption: Not a right input");
            }
            else{
                this.data.set(key,value);//adding elements
            }
        }
        output(){
            for(let k in this.data){
                console.log(k + " " + this.data[k]);
            }
        }
        get output(){
            return this.data;
        }
    }
    
    const myCollection = new Collection();
    myCollection.add('name', "Vasya");
    myCollection.add('age', null);
    myCollection.add('size');
    console.log(myCollection.output);

    console.log("\n");
}
task4();

//5-Task: (80) Проверка на Палиндром
//Solution: 
const task5 = function (){
    console.log("Task5:");

    let palindrom = "Топот"
    function isPalindrom(word){
        let len = word.length;
        for(let i = 0; i < Math.round(len/2);i++){
            if(word[i].toLowerCase() != word[len-1-i].toLowerCase()){//use .toLowerCase cuz we didn`t know any about registers
                return "NO";
            }
        }
        return "YES";
    }
    console.log(`Is word "${palindrom}" palindrom? Answer: ${isPalindrom(palindrom)}`);

    console.log("\n");
}
task5();

//6-Task: (95) (Сделать полное клонирование объекта) / (Рекурсивное копирование объекта) Note: Учитывать что элементом объекта может быть еще один объект.(тоесть клонирование без ссылок)
//Solution: 
const task6 = function (){
    console.log("Task6:"); 

    function deepClone(obj) {
        let result = {}
        for (let key in obj) {
           if((typeof obj[key]) == 'object'){
               result[key] = deepClone(obj[key]);
           }
           else{
               result[key] = obj[key];
           }
        }
        return result;
    }
    let object = {name: 'Ignat', age: 69, obj2: {help: 1, unhelp: 0, obj3: {x: 2, y: -1}}};
    let clonedObj = deepClone(object);
    
    //testing:
    console.log(object);//before changing elements
    object.obj2.obj3.x = 999;
    console.log(object);//changed obj in obj
    console.log(clonedObj);//not modifed but coppied obj(without links)
    
    console.log("\n");
}
task6();

//7-Task: (85) Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
//Solution: 
const task7 = function (){
    console.log("Task7:"); //code spizzen from stackoverflow

    function shuffle(array) {//Fisher–Yates shuffle 
        let rand, temp;
        for (let i = array.length - 1; i > 0; i--) {
            rand = Math.floor(Math.random() * (i + 1));
            console.log(rand);
            temp = array[i];
            array[i] = array[rand];
            array[rand] = temp;
        }
        return array;
    }

    function shuffle2(array) {//true FISHER algorithm (but with creating array)(solo-made)
        function random(min, max){
            return Math.floor(Math.random() * (max - min) + min)
        }
        let rand, newArray = [];
        while(array.length > 0){
            rand = random(0, array.length);
            newArray.push(array[rand]);
            array.splice(rand, 1);
        }
        return newArray;
    }

    let arr = [1,3,3,7]
    console.log(shuffle(arr));
    //console.log(shuffle2(arr));

    console.log("\n");
}
task7();

//8-Task: (60) Реализовать функцию возвращающую рандомную строку.
//Solution: 
const task8 = function (){
    console.log("Task8:"); 
    function randomString(length){
        if(length == undefined) length = 1;
        let newString = "";
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(let i = 0; i < length; i++){
            newString += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        return newString;
        }
        console.log(`Random string: ${randomString(8)}`);

    console.log("\n");
}
task8();

//9-Task: (60) Генератор рандомной буквы
//Solution: 
const task9 = function (){
    console.log("Task9:"); 
    function randomLatter(){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    console.log(`Random letter: ${randomLatter()}`);

    console.log("\n");
}
task9();

//10-Task: (85) Реализовать метод .map() для объекта
//Solution: 
const task10 = function (){
    console.log("Task10:"); //smells like sh1t, but for me ok))

    const callback = function(arg) {
        //TODO smthing with arg
        return arg.toString().toLowerCase();
      };
    let obj ={
        name: "Ignat",
        age: 69,
        map: function(func){
            let newObj = Object.create(obj);
            for(let k in newObj){
                if(k != "map")
                {
                    newObj[k] = func(newObj[k]);
                }
            }
            return newObj;
        }
    };
    console.log(obj);
    console.log(obj.map(callback));
    console.log(obj);
    console.log("\n");
}
task10();

//11-Task: (75) Написать функцию которая переводит Римские цифры в Арабские и наоборот.
//Solution: 
const task11 = function (){
    console.log("Task11:"); //code spizzen from coderoad.ru/48946083   and   overcoder.net/q/91876

    function RomanToArabic(number){
        const map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
        return [...number].reduce((saved,letter,i,number) => map[number[i+1]] > map[letter] ? saved-map[letter] : saved+map[letter], 0);
    }
    function ArabicToRoman(number) {
        var map2 = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
        for (let i in map2 ) {
          while ( number >= map2[i] ) {
            roman += i;
            number -= map2[i];
          }
        }
        return roman;
      }
      
    console.log(RomanToArabic("XIV"));
    console.log(ArabicToRoman(14));

    console.log("\n");
}
task11();

//12-Task: (60) Написать функцию на сравнение массивов
//Solution: 
const task12 = function (){
    console.log("Task12:");

    function equal1(arr1, arr2){
        return JSON.stringify(arr1) == JSON.stringify(arr2);
    }
    function equal2(arr1, arr2){//second variation of compare 
        return arr1.length === arr2.length && arr1.every((x, index) => typeof x == 'object' ? equal2(x, arr2[index]) : x === arr2[index])
    }
    let arr4ik =[1,2,[[2,5],4]], arr5ik = [1,2,[[2,5],4]];
    console.log(equal1(arr4ik, arr5ik))
    console.log(equal2(arr4ik, arr5ik))
    console.log("\n");
}
task12();

//13-Task: (80) Модуль: Есть строка с имейлами и другой информацией. Написать две функции и потом их скомпозировать! 1-ая функция: берет со строки только имейлы и помещаит их в массив. 2-ая функция: Каждый имейл разбиваеться на две части(имя и домен) и помещаеться в еще два разных массива.
//Solution: 
const task13 = function (){
    console.log("Task13:");
    let string = "Marcus Aurelius +302104210009 mark2002@gmail.com 121, Abraham Lincoln +380937446327 ibra@gmail.com 1809, Nelson Mandela +380682132258 freecode@mail.ru 1918, John F. Kennedy +380977132481 doublekill@mail.ru 1917, Winston Churchill +38067721942 father.228@ukr.net 1874";
    function first(str){
        return str.split(" ").filter(word => word.includes("@"));
    }
    function second(arr){
        let namesArray = [], domenArray = [];
        arr.map(mail => {
            namesArray.push(mail.slice(0, mail.indexOf("@")));
            domenArray.push(mail.slice(mail.indexOf("@")));
        });
        return {namesArray, domenArray};
    }
    const compose = (f1, f2) => x => f2(f1(x));

    console.log(compose(first, second)(string));
    console.log("\n");
}
task13();

//14-Task: (60) Создать коллекцию Map и пройтись по всем её методам.
//Solution: 
const task14 = function (){
    console.log("Task14:"); 

    let myMap = new Map();//initialization

    myMap.set("Alpha", 1);//adding elements
    myMap.set("Beta", 2);
    myMap.set("Gamma", 3);

    console.log("Map size:" + myMap.size);//size of map

    let MapIteratorV = myMap.values();//return value iterator(kinda for / map())
    console.log(MapIteratorV.next().value);
    console.log(MapIteratorV.next().value);
    console.log(MapIteratorV.next().value);

    let MapIteratorK = myMap.keys();//return keys iterator(kinda for / map())
    console.log(MapIteratorK.next().value);
    console.log(MapIteratorK.next().value);
    console.log(MapIteratorK.next().value);
    
    let MapIteratorE = myMap.entries();//return iterator but with pair[key, value]
    console.log(MapIteratorE.next().value);
    console.log(MapIteratorE.next().value);
    console.log(MapIteratorE.next().value);

    console.log(myMap.has("Alpha"));//returns a boolean indicating whether an element with the specified key exists or not.
    console.log(myMap.has(1));

    console.log(myMap.get("Alpha"));//returns an element for this key
    console.log(myMap.get(1));//output undefined

    myMap.delete("Beta");//delete element from map

    function logMapCallback(value, key, map) {
        console.log("map[" + key + "] = " + value);
    }
    myMap.forEach(logMapCallback);//call callback for each element in map

    myMap.clear();//make map empty but not delete it completely

    console.log("\n");
}
task14();

//15-Task: (??) Реверс массива. Note: В одну строку + без использования .reverse
//Solution: 
const task15 = function (){
    console.log("Task15:");

    let a=[1,2,3];
    //return a.map((x,i) => a[a.length-1-i]);//method1 stackoverflow
    //return a.map(a.pop,[...a]);//method2 stackoverflow
    return a.sort(a=>-a);//method3 rly-solo))), just exchange 2 symbols from stackoverflow (a.sort(a=>1))
}
console.log(task15());