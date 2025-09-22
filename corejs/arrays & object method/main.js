// ! Arrays

// ? 1. create
const fruits = ["apple", "banana", "mango", "strawberry", "orange"];
const numbers = new Array(1, 2, 3);
// console.log(numbers);

// ? 2. Access
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

// ? 3. Modify
// fruits[2] = "strawberry";
// console.log(fruits);

// ? Master Array Methods
// * 1. forEach - loop through, no return
// fruits.forEach((f) => console.log(f));

// * 2. map - transform each element, return new array
const UPPER = fruits.map((f) => f.toUpperCase());
// console.log(UPPER);

// * 3. filter - keep elements matching condition
const long = fruits.filter((f) => f.length > 6);
// console.log(long);

// * 4. reduce - accumulate values
