//? Selecting Elements
// select first element matching the CSS selector
const element = document.querySelector(`.my-class`);

// select element by Id
const elementById = document.getElementById(`myId`);

// ---------------------------------------------------

//? Manipulating Content
element.innerHTML = `<p>New content</p>`;

// ---------------------------------------------------

//? Set or get only text content (no HTML parsing)
element.textContent = "Just text content";

// ---------------------------------------------------

//? Manipulatin styles
// Change inline styles of an element
element.style.color = "red";
element.style.backgroundColor = "yellow";
element.style.fontSize = "20px";

// ---------------------------------------------------

//? Adding and Removing classes
// add class
element.classList.add("active");

// remove class
element.classList.remove("active");

// toggle a class (add if missing, remove if present)
element.classList.toggle("visible");

// ---------------------------------------------------

//? Creating and Removing Elements
// create new div element
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";

// append new element as the last child of body
document.body.appendChild(newDiv);

// remove an existing element
const oldDiv = document.getElementById("oldDiv");
if (oldDiv) {
  oldDiv.parentNode.removeChild(oldDiv);
}

// !
//? Adding Event Listeners
// click event
element.addEventListener("click", function (event) {
  console.log("event clicked");
});

// form submission event
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent default form submission
  console.log("form submitted");
});

// keyup event
document.addEventListener("keyup", function (event) {
  console.log(`key released: ${event.key}`);
});
