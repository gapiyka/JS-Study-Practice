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
    console.log("Task4:");


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


//8-Task: (60) Реализовать функцию возвращающую рандомную строку.
//Solution: 


//9-Task: (60) Генератор рандомной буквы
//Solution: 


//10-Task: (85) Реализовать метод .map() для объекта
//Solution: 


//11-Task: (75) Написать функцию которая переводит Римские цифры в Арабские и наоборот.
//Solution: 


//12-Task: (60) Написать функцию на сравнение массивов
//Solution: 


//13-Task: (80) Модуль: Есть строка с имейлами и другой информацией.(Для упрощения вся инфа разделенна символом: ";"). Написать две функции и потом их скомпозировать! 1-ая функция: берет со строки только имейлы и помещаит их в массив. 2-ая функция: Каждый имейл разбиваеться на две части(имя и домен) и помещаеться в еще два разных массива.
//Solution: 


//14-Task: (60) Создать коллекцию Map и пройтись по всем её методам.
//Solution: 


//15-Task: (??) Реверс массива. Note: В одну строку(или не более 20 символов) + без использования .reverse
//Solution: 
