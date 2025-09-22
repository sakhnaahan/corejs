// ! Arrays

// ? 1. create
const fruits = ["apple", "banana", "mango", "strawberry", "orange"];
// const numbers = new Array(1, 2, 3);
// console.log(numbers);

// ? 2. Access
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

// ? 3. Modify
// fruits[2] = "strawberry";
// console.log(fruits);

// ? Master Array Methods
// * 1. forEach - Loop through, no return
// fruits.forEach((f) => console.log(f));

// * 2. map - Transform each element, return new array
// const UPPER = fruits.map((f) => f.toUpperCase());
// console.log(UPPER);

// * 3. filter - Keep elements matching condition
// const long = fruits.filter((f) => f.length > 6);
// console.log(long);

// * 4. reduce - Take all array elements and combine them into a single
// * value by applying a function repeatedly.
const numbers = [1, 2, 3, 4, 10];

// const sum = numbers.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(sum); // 10

// * 5. find - Return the first element that matches a condition
// console.log(numbers.find((f) => f > 5));
// console.log(fruits.find((f) => f === "banana"));

// * 6. push - Adds one or more elements to the end of an array.
// fruits.push("avacoda", "ananas");
// console.log(fruits);
// const newLength = fruits.push("grape");
// console.log(newLength); // 6

// * 7. pop - Removes the last element from an array.
// * Returns the element that was removed.
// const last = fruits.pop();
// console.log(last);
