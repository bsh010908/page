document.addEventListener("DOMContentLoaded", function () {
  const moreText = document.getElementById("moreText");
  const toggleBtn = document.getElementById("toggleBtn");

  toggleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      toggleBtn.textContent = "read less";
    } else {
      moreText.style.display = "none";
      toggleBtn.textContent = "read more";
    }
  });
});