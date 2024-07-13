// let a = 5;
// var b = 0;

// const u = "kkkdk";

// console.log(a + b);

// // window.alert("Hello");

//assignment operators
//let x = 10;
// arithemetic operators
// students = students + 1
// students = students - 3
// students = students /1
// students = students * 2
//students= students %3
// students = students + 1
//students++;
//students--
/* 
1.parenthesis()
2. exponents
3.multiplication & division & module
4. addition & substracrion


*/
//Comparison Operators
//Equal (==): Compares two values for equality, after converting both values to a common type.
//5 == "5"; // true
//Strict Equal (===): Compares two values for equality without type conversion.
//5 === "5"; // false
//Not Equal (!=): Compares two values for inequality, after converting both values to a common type.

//Object and array
//Objects are collections of key-value pairs. They are used to store various keyed collections and more complex entities. Each key in an object is also called a property or an attribute.
// let person = {
//     name: "John",
//     age: 30,
// };

//Creating an Object
//You can create an object using the object literal syntax or the new Object() syntax.

//Object Literal Syntax:

// let person = {
//   name: "John",
//   age: 30,
//   isStudent: false,
//   greet: function() {
//     console.log("Hello!");
//   }
// };

// using 'new object
let person = new Object();
person.name = "John";
person.age = 30;
person.isStudent = false;
person.greet = function () {
    console.log("Hello!");
};

//Accessing Object Properties
//1.Dot Notation: console.log(person.name); // "John"
//Bracket Notation:

//console.log(person["age"]); // 30

//Modifying Object Properties
//You can add, update, or delete properties in an object.
//You can add, update, or delete properties in an object.

person.job = "Developer";
person.age = 31;
delete person.isStudent;

// let students = 30;
// students %= 2;
console.log(person);
