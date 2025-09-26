let input = document.querySelector("#passess");
let showHide = document.querySelector("#show-hide");

showHide.addEventListener("click", function () {
  if (input.type === "password") {
    input.type = "text";
    showHide.textContent = "Hide";
  } else {
    input.type = "password";
    showHide.textContent = "Show";
  }
});
