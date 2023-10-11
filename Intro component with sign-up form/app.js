const form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const requiredInputs = document.querySelectorAll(".required-input");

  requiredInputs.forEach(input => {
    const value = input.value.trim();
    const inputId = input.getAttribute("id");
    const errorId = inputId + "Error";
    const errorElement = document.getElementById(errorId);
    const iconElement = input.previousElementSibling;

    errorElement.textContent = "";

    if (value === "") {
      errorElement.textContent = `${input.placeholder} cannot be empty`;

      iconElement.style.display = "inline";
    } else if (input.getAttribute("data-type") === "email" && !isValidEmail(value)) {
      errorElement.textContent = "Looks like this is not an email";
      input.style.color = "red";
      iconElement.style.display = "inline";
    }
  });
});

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}
