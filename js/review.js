// LocalStorage에 저장된 후기 불러오기
let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

// 후기 렌더링
function renderReviews() {
  const reviewList = document.getElementById("reviewList");
  reviewList.innerHTML = "";

  reviews.forEach((review, index) => {
    const div = document.createElement("div");
    div.className = "review";
    div.innerHTML = `
      <strong>${review.name}</strong><br>
      ${review.message}<br>
      <span class="heart ${review.liked ? 'liked' : ''}" data-index="${index}">
        ❤️ ${review.likes}
      </span>
    `;
    reviewList.appendChild(div);
  });

  // 하트 클릭 이벤트
  document.querySelectorAll(".heart").forEach(heart => {
    heart.addEventListener("click", (e) => {
      const idx = e.target.dataset.index;
      if(reviews[idx].liked) {
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

// 폼 제출 이벤트
document.getElementById("reviewForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("contact-name").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  if(name && message) {
    reviews.push({ name, message, likes: 0, liked: false });
    localStorage.setItem("reviews", JSON.stringify(reviews));
    renderReviews();
    this.reset();
  }
});

renderReviews();
