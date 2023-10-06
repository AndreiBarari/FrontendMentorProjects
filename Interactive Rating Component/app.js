const main = document.querySelector("main");

// Set content form main container
const initialHTML = `<span class="icon"></span>
<h2>How did we do?</h2>
<p>
Please let us know how we did with your support request. All feedback is appreciated to help
us improve our offering!
</p>
<div class="ratings">
<span class="rating">1</span>
<span class="rating">2</span>
<span class="rating">3</span>
<span class="rating">4</span>
<span class="rating">5</span>
</div>
<button>SUBMIT</button>`;

main.innerHTML = initialHTML;

const ratings = document.querySelectorAll(".rating");
const submit = document.querySelector("button");
let selectedRating = null;

ratings.forEach(rating => {
  rating.addEventListener("click", () => {
    // Reset styles for unselected ratings
    for (const el of ratings) {
      if (el !== rating) {
        el.style.backgroundColor = "";
        el.style.color = "";
      }
    }

    // Set styles for selected rating
    selectedRating = rating.innerText;
    rating.style.backgroundColor = "#7c8798";
    rating.style.color = "#ffffff";
  });
});

submit.addEventListener("click", () => {
  main.innerHTML = `<div class="post-screen">
        <img src="./images/illustration-thank-you.svg" alt="" />
        <div class="rating-result">You selected ${selectedRating} out of 5</div>
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need more support, don’t
          hesitate to get in touch!
        </p>
      </div>`;

  //   Refresh Content
  setTimeout(() => {
    location.reload();
  }, 5000);
});
