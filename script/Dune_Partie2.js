// Sélection du bouton et du lien CSS
const changeThemeBoutton = document.getElementById('changeTheme');
const styleLink = document.getElementById('style-link');

// Gestion de l'événement lors du clic
changeThemeBoutton.addEventListener('click', () => {
  // Vérification du CSS actuel
  if (styleLink.getAttribute('href') === 'css/Dune_Partie2.css') {
    styleLink.setAttribute('href', 'css/BRIGHT_Dune_Partie2.css'); // Basculer vers le thème clair
  } else {
    styleLink.setAttribute('href', 'css/Dune_Partie2.css'); // Revenir au thème sombre
  }
});

function toggleDropdown(element) {
  const submenu = element.querySelector('.submenu, .submenufilms');
  if (submenu.style.display === "block") {
      submenu.style.display = "none";
  } else {
      submenu.style.display = "block";
  }
}
