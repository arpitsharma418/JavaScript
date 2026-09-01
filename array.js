/*Arrays are lists that hold many different values inside a single variable. You will use them often to group related data like a grocery list or user choices.*/

// Creating array:
// let cars2 = new Array("Toyota", "Renault", "Volkswagen");
// let cars = ["Toyota", "Renault", "Volkswagen"]; // best and most readable way to create a new array
// console.log(cars);

// Accessing elements
// console.log(cars[0]);

// Overwriting array
// cars[0] = "Tesla";
// console.log(cars[0]);

// length of the array
// console.log(cars.length);

// Array methods:
// Using push - Add element at the end of the array
// let carLength = cars.push("BMW");
// console.log(cars);
// console.log("After push ", carLength);

// Using unshift - Adds an element at the beginning.
// cars.unshift("BYD");
// console.log(cars);

// Using splice method - Adds, removes, or replaces elements. It changes the original array
// cars.splice(2, 0, "Audi", "Tata");
// console.log(cars);

// concatenation of two array
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let result = arr1.concat(arr2);
// console.log(result);s

// Deleting element
let countries = ["India", "USA", "UK", "China", "Japan", "Scotland", "France"];
// console.log(countries);

// 1. Using pop() -> Removes the last element and returns deleted element
// console.log(countries.pop());

// 2. shift() -> Removes the first element and returns deleted element
// console.log(countries.shift());

// slice() -> Returns a part of an array. It does not change the original array.
// console.log(countries.slice(1, 3));

// Finding elements
// 1. find() -> Returns the first element that satisfies a condition.
// console.log("find method: ", countries.find(item => item == "India"));

// 2. indexOf() -> Returns the index of an element, otherwise -1
// console.log("First index: ", countries.indexOf("USA"));

// 3. lastIndexOf() -> Returns the index of a last element, otherwise -1.
// console.log("Last index: ",countries.lastIndexOf("USA"));

// 4. includes() -> Checks whether an array contains a value.
// console.log("Include? ", countries.includes("USA"));

// Sorting
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// names.sort();
// console.log(names);

let ages = [18, 72, 33, 56, 40];
ages.sort();
// console.log(ages);

console.log(ages.reverse());