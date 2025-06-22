



// Récupérer les éléments
const clickableText = document.getElementById("clickableText");
const hiddenText = document.getElementById("hiddenText");

// Ajouter un écouteur d'événement pour le clic
clickableText.addEventListener("click", function () {
  // Basculer l'affichage du texte caché
  if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
    hiddenText.style.display = "block";
  } else {
    hiddenText.style.display = "none";
  }
});
