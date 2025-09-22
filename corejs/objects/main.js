// ! Objects

// ? 1. Creating Objects
const user = {
  name: "Huxn",
  age: 25,
  city: "Ulaanbaatar",
};

// ? 2. Using new Object() (less common):
const person = new Object();
// person.age = 20;
// person.name = "Konvict";

// ? 3. Accessing Properties
// you can access values in two ways:
// 1. Dot notation
// console.log(person.name);

// 2. Bracket notation
// console.log(person["name"]);

// ? Iterating with Object.keys, Object.values, Object.entries

// * 1. Object.keys(obj)
// * Returns an array of all preperty names.
const keys = Object.keys(user);
// console.log(keys);

// keys.forEach((key) => {
//   console.log(key, user[key]);
// });

// * 2. Object.values(obj)
// * Returns an array of all values
const values = Object.values(user);
// console.log(values);

// values.forEach((values) => {
//   console.log(values);
// });

// * Object.entries(obj)
// * Returns an array of [key, value] pairs
const entries = Object.entries(user);
// console.log(entries);

// entries.forEach(([key, values]) => {
//   console.log(`${key}: ${values}`);
// });

// ? | Method                | Returns                        | Example Result                          |
// ? | --------------------- | ------------------------------ | --------------------------------------- |
// ? | `Object.keys(obj)`    | Array of property names (keys) | `["name", "age", "city"]`               |
// ? | `Object.values(obj)`  | Array of property values       | `["Alice", 25, "Ulaanbaatar"]`          |
// ? `| `Object.entries(obj)` | Array of `[key, value]` pairs  | `[["name", "Alice"], ["age", 25], ...]` |

// practice
// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2022,
// };

// const e = Object.entries(car);

// e.forEach(([keys, values]) => {
//   console.log(`${keys}: ${values}`);
// });
