document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll("#challengeList li");

  listItems.forEach(item => {
    const difficulty = item.getAttribute("data-difficulty");
    item.classList.add(difficulty);
  });
});
