const form = document.querySelector("form");
const inputElements = document.querySelectorAll("input");
const errorElements = document.querySelectorAll(".error");
const labelElements = document.querySelectorAll("label");
const displayResultElements = document.querySelectorAll(".result");

form.addEventListener("submit", e => {
  e.preventDefault();

  // Reset all error messages and styles
  errorElements.forEach(error => {
    error.textContent = "";
  });
  inputElements.forEach(input => {
    input.style.borderColor = "var(--light-grey)";
  });
  labelElements.forEach(label => {
    label.style.color = "var(--smoke-grey)";
  });

  const dayInput = inputElements[0];
  const monthInput = inputElements[1];
  const yearInput = inputElements[2];

  // Check if any input field is empty
  if (
    dayInput.value.trim() === "" ||
    monthInput.value.trim() === "" ||
    yearInput.value.trim() === ""
  ) {
    inputElements.forEach((input, index) => {
      if (input.value.trim() === "") {
        errorElements[index].textContent = "This field is required";
        input.style.borderColor = "var(--light-red)";
        labelElements[index].style.color = "var(--light-red)";
      }
    });
  } else {
    // Get current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    // Parse values
    const dayValue = parseInt(dayInput.value, 10);
    const monthValue = parseInt(monthInput.value, 10);
    const yearValue = parseInt(yearInput.value, 10);

    // Day validation
    if (dayValue < 1 || dayValue > 31) {
      errorElements[0].textContent = "Must be a valid day";
      dayInput.style.borderColor = "var(--light-red)";
      labelElements[0].style.color = "var(--light-red)";
    } else if (
      (monthValue === 2 && dayValue > 28) ||
      ((monthValue === 4 || monthValue === 6 || monthValue === 9 || monthValue === 11) &&
        dayValue > 30)
    ) {
      errorElements[0].textContent = "Must be a valid date";
      dayInput.style.borderColor = "var(--light-red)";
      labelElements[0].style.color = "var(--light-red)";
    }

    // Month validation
    if (monthValue < 1 || monthValue > 12) {
      errorElements[1].textContent = "Must be a valid month";
      monthInput.style.borderColor = "var(--light-red)";
      labelElements[1].style.color = "var(--light-red)";
    }

    // Year validation
    if (yearValue < 1 || yearValue > currentYear) {
      errorElements[2].textContent = "Must be in the past";
      yearInput.style.borderColor = "var(--light-red)";
      labelElements[2].style.color = "var(--light-red)";
    }

    if (
      !errorElements[0].textContent &&
      !errorElements[1].textContent &&
      !errorElements[2].textContent
    ) {
      // Calculate the difference in milliseconds
      const inputDate = new Date(yearValue, monthValue - 1, dayValue);
      const diff = currentDate - inputDate;

      // Calculate dates
      const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
      const months = Math.floor(
        (diff % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000)
      );
      const days = Math.floor((diff % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

      // Display age
      displayResultElements[0].textContent = days;
      displayResultElements[1].textContent = months;
      displayResultElements[2].textContent = years;
    }
  }
});
