document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggleButton");

  toggleButtons.forEach((button) => {
    const content = button.nextElementSibling;


    content.style.display = "none";

    button.addEventListener("click", function () {
      const isVisible = content.style.display === "flex";

     
      content.style.display = isVisible ? "none" : "flex";
      button.classList.toggle("active", !isVisible);
    });
  });
});

