const form = document.querySelector("form");
const error = document.querySelectorAll(".error");
const input = document.querySelectorAll("input");
const label = document.querySelectorAll("label");

form.addEventListener("submit", e => {
  e.preventDefault();

  for (let i = 0; i < input.length; i++) {
    input[i].style.borderColor = "var(--smoke-grey)";
    label[i].style.color = "var(--smoke-grey)";
    error[i].style.display = "none";

    if (input[i].value === "") {
      error[i].style.display = "block";
      label[i].style.color = "var(--light-red)";
      error[i].textContent = "This field is required";
      input[i].style.borderColor = "var(--light-red)";
    }
  }
});
