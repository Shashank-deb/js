// const 
const brand="Amigoscode";
const brandObject={};
brandObject["brand"]=brand;
delete brandObject.brand;
// brand={};
// brand=10;
// brand=function(){
//     return "Hello";
// }
console.log(brand);
// When we are using let we can change the 
// value to function and any values but when we are using the const 
// we cannot change the value after the value assign but assing the const value to another empty set 
console.log(brandObject);


// let hello=function hello(){

// }

// hello=1;

// console.log(hello);





const hello=function hello(){
    console.log("hello");
}

// hello=1;

hello();


// lesson 304