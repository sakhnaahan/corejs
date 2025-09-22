//! Function

//? What is a Function
// A function is like a reusable machine:
// You give it input (parameters)
// It does some work (statements inside)
// It may give back an output (return value)

//? Functions help you avoid repeating code and keep programs organized

//? 1. Ways to Create Funcitons

//? a. Function Declaration
// function greet(name) {
//   return `Hello ${name}`;
// }

// console.log(greet("Huxn"));

//? b. Funciton Expression
// const greet = function (name) {
//   return `Hello, ${name}`;
// };

// console.log(greet("Batsaikhan"));
// stored inside a variable.

//? c. Arrow Funciton
// const greet = (name) => {
//   return `Hello, ${name}`;
// };

const greet = (name) => `Hello, ${name}`;

// console.log(greet("konvict"));

//? 2. Higher-order functions: map, filter, reduce
// A function that takes another function as an argument, OR
// Returns a function
// In js, arrays have built-in HOFs that are super useful: map, filter, reduce

//* map
// Transforms each element in an array.
// Returns a new array.
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => n * 2);
// console.log(doubled);

//* filter
// Keeps only the elements that pass a condition.
// Returns a new array.
const numbers1 = [1, 2, 3, 4];

const evens = numbers1.filter((n) => n % 2 === 0);
// console.log(evens);

//* reduce
// Reduces the array to a single value.
// You provide an accumulator and a callback.
const numbers2 = [1, 2, 3, 4];
const sum = numbers2.reduce((acc, n) => acc + n, 0);
// console.log(sum);

// Another example: turn an array into an objec
const people = ["Alice", "Bob", "Charlie"];

const obj = people.reduce((acc, currentValue, index) => {
  acc[index] = currentValue;
  return acc;
}, {});

console.log(obj);
