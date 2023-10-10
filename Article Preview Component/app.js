const btn = document.querySelector(".share-btn");
const share = document.querySelector(".icons");

share.style.visibility = "hidden"; // Set the initial state to "hidden"
console.log(btn);
btn.addEventListener("click", () => {
  if (share.style.visibility === "hidden") {
    share.style.visibility = "visible";
  } else {
    share.style.visibility = "hidden";
  }
});
