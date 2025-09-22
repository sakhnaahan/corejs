//? 1. Ternary Operator ( ? : )
// A shorter way to write an if/else
let age = 18;

// normal if/else
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// ternary operator
let result = age >= 18 ? "Adult" : "Minor";

//? 2. IF/Else Statements
// The most common desicion-making tool
let score = 85;

if (score >= 95) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: D");
}

//? 3. Switch Cases
// Good when you want to compare one value against many options
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    break;
}

//? 4. For Loop
// Used when you know how many times to repeat
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

//? 5. While Loop
// Used when you dont know how many times, but repeat while condition is true
let count = 1;

while (count <= 5) {
  console.log("Count:", count);
  count++;
}
