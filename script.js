document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggleButton");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;

      this.classList.toggle("active");

      if (content.style.display === "flex") {
        content.style.display = "none";
      } else {
        content.style.display = "flex";
      }
    });
  });
});

