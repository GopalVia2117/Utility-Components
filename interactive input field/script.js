const inputField = document.querySelector(".input-field");
const inputLabel = document.querySelector(".input-label");

inputField.addEventListener("focus", function (e) {
  console.log("event focus");
  e.currentTarget.style.border = "2px solid green";
  inputLabel.style.top = "20%";
  inputLabel.style.fontSize = "0.8rem";
  inputLabel.style.opacity = 0.5;
});

inputField.addEventListener("blur", function (e) {
  console.log("event blur");
  if (e.currentTarget.value === "") {
    inputLabel.style.top = "50%";
    inputLabel.style.fontSize = "1rem";
    inputLabel.style.opacity = 1;
  }
});
