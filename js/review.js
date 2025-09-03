let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
let selectedRating = 0;

// 별점 마우스 오버
const stars = document.querySelectorAll("#starRating span");
stars.forEach(star => {
  star.addEventListener("mouseover", function() {
    const val = parseInt(this.dataset.value);
    stars.forEach(s => s.classList.remove("hovered"));
    stars.forEach(s => { if(parseInt(s.dataset.value) <= val) s.classList.add("hovered"); });
  });
  star.addEventListener("mouseout", function() {
    stars.forEach(s => s.classList.remove("hovered"));
  });
  star.addEventListener("click", function() {
    selectedRating = parseInt(this.dataset.value);
    highlightStars(selectedRating);
  });
});

function highlightStars(rating) {
  stars.forEach(star => star.classList.remove("selected"));
  stars.forEach(star => { if(parseInt(star.dataset.value) <= rating) star.classList.add("selected"); });
}

function renderReviews() {
  const reviewList = document.getElementById("reviewList");
  reviewList.innerHTML = "";

  reviews.forEach((review, index) => {
    const div = document.createElement("div");
    div.className = "review";
    let starsDisplay = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
    div.innerHTML = `
      <strong>${review.name}</strong> ${starsDisplay}<br>
      ${review.message}<br>
      <span class="heart ${review.liked ? 'liked' : ''}" data-index="${index}">
        ❤️ ${review.likes}
      </span>
    `;
    reviewList.appendChild(div);
  });

  document.querySelectorAll(".heart").forEach(heart => {
    heart.addEventListener("click", (e) => {
      const idx = e.target.dataset.index;
      if(reviews[idx].liked){
        reviews[idx].likes -= 1;
        reviews[idx].liked = false;
      } else {
        reviews[idx].likes += 1;
        reviews[idx].liked = true;
      }
      localStorage.setItem("reviews", JSON.stringify(reviews));
      renderReviews();
    });
  });
}

document.getElementById("reviewForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("contact-name").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  if(name && message && selectedRating > 0){
    reviews.push({ name, message, rating: selectedRating, likes: 0, liked: false });
    localStorage.setItem("reviews", JSON.stringify(reviews));
    renderReviews();
    this.reset();
    selectedRating = 0;
    highlightStars(0);
  } else if(selectedRating === 0){
    alert("별점을 선택해주세요!");
  }
});

renderReviews();
