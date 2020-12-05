//exercise 7
function fn(){
    const obj1 = { name: 'Ignat' };
    let obj2 = { name: 'Ignat' };
  
    console.log(obj1);
    console.log(obj2);

    obj1.name = 'Denis';
    obj2.name = 'Denis';
    
    console.log(obj1);
    console.log(obj2);

    obj3 = {name: "This name doesn't exist"};

    //obj1 = obj3; this line will throw an exception, cuz constant variable can't be changed
    obj2 = obj3;

    console.log(obj1);
    console.log(obj2);
};
fn();

//exercise 8 
function createUser(name, city){
    let user = {name: name, city: city}
    return user;
}
console.log(createUser("Ignat", "Napoli"));