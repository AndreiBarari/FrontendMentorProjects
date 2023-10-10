const btn = document.querySelector(".share-btn");
const share = document.querySelector(".icons");

share.style.visibility = "hidden"; // Set the initial state to "hidden"

btn.addEventListener("click", () => {
  if (share.style.visibility === "hidden") {
    share.style.visibility = "visible";
    btn.style.backgroundColor = "var(--desaturated-dark-blue)";
    // btn.style.fill = "#fff";
  } else {
    share.style.visibility = "hidden";
    btn.style.backgroundColor = "var(--light-gray-blue)";
  }
});
