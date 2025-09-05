document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggleBtn");

  toggleButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const post = btn.closest(".post-modern");
      if (!post) return;

      const moreText = post.querySelector(".moreText");
      if (!moreText) return;

      if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        btn.textContent = "read less";
      } else {
        moreText.style.display = "none";
        btn.textContent = "read more";
      }
    });
  });
});
