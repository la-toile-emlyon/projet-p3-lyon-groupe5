// const toggleButton = document.querySelector("toggleButton");

// toggleButton.addEventListener("click", function () {
//   if (cercle.style.display == "none") {
//     cercle.style.display == "block";
//     toggleButton.textContent =
//       'Première Fonctionnalité <span class="texture">-</span>';
//   } else {
//     cercle.style.display == "none";
//     toggleButton.textContent = "Première Fonctionnalité +";
//   }
// });

$("toggleFonction").ready(function () {
  $("#toggleButton").on("click", function (e) {
    $("#cercle").toggle();
  });
});
