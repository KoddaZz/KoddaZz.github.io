// Sélection du bouton et du lien CSS
const changeThemeBoutton = document.getElementById('changeTheme');
const styleLink = document.getElementById('style-link');

// Gestion de l'événement lors du clic
changeThemeBoutton.addEventListener('click', () => {
  // Vérification du CSS actuel
  if (styleLink.getAttribute('href') === 'css/contact.css') {
    styleLink.setAttribute('href', 'css/BRIGHT_contact.css'); // Basculer vers le thème clair
  } else {
    styleLink.setAttribute('href', 'css/contact.css'); // Revenir au thème sombre
  }
});