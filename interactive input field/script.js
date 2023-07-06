const inputField = document.querySelector(".input-field");
const inputLabel = document.querySelector(".input-label");

inputField.addEventListener("focus", function (e) {
  e.currentTarget.style.border = "2px solid green";
  inputLabel.style.top = "20%";
  inputLabel.style.fontSize = "0.8rem";
  inputLabel.style.opacity = 0.5;
});

inputField.addEventListener("blur", function (e) {
  if (e.currentTarget.value === "") {
    inputLabel.style.top = "50%";
    inputLabel.style.fontSize = "1rem";
    inputLabel.style.opacity = 1;
  }
  e.currentTarget.style.border = "none";
});
