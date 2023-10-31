const input = document.querySelector("#email");
const main = document.querySelector("main");
const form = document.querySelector("form");
const error = document.querySelector(".error");
const dismiss = document.querySelector(".dismiss");
const validMail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function refresh() {
  location.reload();
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const email = input.value.trim(); // Move this line inside the event handler

  if (email === "" || !validMail.test(email)) {
    error.style.display = "block";
    input.style.backgroundColor = "#FFE8E6";
    input.style.color = "var(--primary)";
    input.style.borderColor = "var(--primary)";
  } else {
    // Only update main.innerHTML if email is valid and not empty
    main.innerHTML = `<div class="success-card">
      <div class="valid-icon"></div>
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to
        <span class="company-mail">${email}</span>
        . Please open it and click the button inside to confirm your subscription.
      </p>
      <button class="dismiss" onClick=refresh()>Dismiss message</button>
    </div>`;
  }
});
