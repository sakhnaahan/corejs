const check = document.querySelector("#check");
check.addEventListener("click", function () {
  const input = document.querySelector("#input").value.trim();
  const result = document.querySelector("#result");

  if (input) {
    const normal = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reverse = normal.split("").reverse().join("");

    if (normal === reverse) {
      result.textContent = `"${input}" is a palindrome`;
      result.style.color = "green";
    } else {
      result.textContent = `"${input}" is not a palindrome`;
      result.style.color = "red";
    }
  } else {
    result.textContent = "Please add a text...";
    result.style.color = "orange";
  }
});
