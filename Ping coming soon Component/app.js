const form = document.getElementById("form");
const input = document.getElementById("email");
const error = document.getElementById("error");

const validMail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

form.addEventListener("submit", function (e) {
  error.style.display = "none";
  const email = input.value.trim();

  if (email === "") {
    e.preventDefault();
    error.style.display = "block";
    error.innerText = "Please provide your email address.";
    input.style.borderColor = "var(--light-red)";
  } else if (!validMail.test(email)) {
    e.preventDefault();
    error.style.display = "block";
    input.style.borderColor = "var(--light-red)";
    error.innerText = "Please provide a valid email address.";
  }
});
