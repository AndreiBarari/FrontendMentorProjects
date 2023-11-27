const cardNumber = document.getElementById("card-num");
const cardName = document.getElementById("cardholder-name");
const cardMonth = document.getElementById("exp-month");
const cardYear = document.getElementById("exp-year");
const cardCvc = document.getElementById("cvc");
const content = document.querySelector(".card-form");

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  var inputs = document.querySelectorAll("input");
  var hasErrors = false; // Flag to track whether there are errors

  inputs.forEach(function (input) {
    var errorSpan = input.nextElementSibling;

    // Reset error state when user starts typing or input becomes non-empty
    input.addEventListener("input", function () {
      input.style.borderColor = ""; // Reset border color
      if (errorSpan && errorSpan.classList.contains("error")) {
        errorSpan.classList.add("hidden");
        errorSpan.textContent = "";
      }
    });

    if (input.value.trim() === "") {
      // Blank input error
      input.style.borderColor = "#ff5282";

      if (errorSpan && errorSpan.classList.contains("error")) {
        errorSpan.classList.remove("hidden");
        errorSpan.textContent = "Can't be blank";
        hasErrors = true;
      }
    } else if (input.id === "card-num" && !/^\d+$/.test(input.value.trim())) {
      // Incorrect format error
      input.style.borderColor = "#ff5282";

      if (errorSpan && errorSpan.classList.contains("error")) {
        errorSpan.classList.remove("hidden");
        errorSpan.textContent = "Wrong format, numbers only";
        hasErrors = true;
      }
    }
  });

  // Check if there are errors before updating content
  if (!hasErrors) {
    // Update the content div with the new HTML
    content.innerHTML = `
      <img src="./images/icon-complete.svg" alt="complete">
      <h3>THANK YOU!</h3>
      <p>We've added your card details</p>
      <button onClick=refresh()>Continue</button>
    `;
  }
});

// Refresh for success component
function refresh() {
  window.location.reload();
}

const cardNumOutput = document.getElementById("card-front-number");
const cardNameOutput = document.getElementById("card-front-name");
const cardMonthOutput = document.getElementById("card-date-month");
const cardYearOutput = document.getElementById("card-date-year");
const cardCvcOutput = document.getElementById("card-back-cvc");

//  Update number display
cardNumber.addEventListener("input", () => {
  let inputValue = cardNumber.value.replace(/\D/g, ""); // Remove non-digits
  inputValue = inputValue.slice(0, 16); // Limit to a maximum of 16 digits

  let formattedValue = "";

  for (let i = 0; i < inputValue.length; i++) {
    if (i % 4 == 0 && i > 0) {
      formattedValue += " ";
    }
    formattedValue += inputValue[i];
  }

  // Update number display
  cardNumOutput.textContent = formattedValue;

  // Update the input value without white spaces
  cardNumber.value = inputValue;

  // If the input is empty, display default value
  if (!inputValue) {
    cardNumOutput.textContent = "0000 0000 0000 0000";
  }
});

//   Update Name display
cardName.addEventListener("input", () => {
  cardNameOutput.textContent = cardName.value;
});

//   Update month display
cardMonth.addEventListener("input", () => {
  var inputValue = cardMonth.value;
  inputValue = inputValue.slice(0, 2);
  if (inputValue > 12) {
    inputValue = "12";
  }
  cardMonthOutput.textContent = inputValue;

  if (!inputValue) {
    cardMonthOutput.textContent = "00";
  }
});
//   Update year display
cardYear.addEventListener("input", () => {
  var inputValue = cardYear.value;
  inputValue = inputValue.slice(0, 2);
  if (inputValue > 99) {
    inputValue = "99";
  }
  cardYearOutput.textContent = inputValue;

  if (!inputValue) {
    cardYearOutput.textContent = "00";
  }
});
//   Update cvc display
cardCvc.addEventListener("input", () => {
  var inputValue = cardCvc.value;
  inputValue = inputValue.slice(0, 3);

  cardCvcOutput.textContent = inputValue;

  if (!inputValue) {
    cardCvcOutput.textContent = "000";
  }
});
