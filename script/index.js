const retourneHautBoutton = document.getElementById('retourneHaut'); 

// on va afficher le bouton après un défilement de 100px
window.onscroll = function() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        retourneHautBoutton.style.display = "block"; // si le défilement = 100px alors on montre le bouton pour remonter en haut
    } else {
        retourneHautBoutton.style.display = "none"; // sinon on cache le bouton
    }
};

// fonct qui permet de remonter en haut de la page
function retournerHaut() {
    window.scrollTo({
        top: 0,               //  remonte à la position 0 verticale ( = tout en haut )
        behavior: "smooth"    // effet moins brutal
    });
}

// Sélection du bouton et du lien CSS
const changeThemeBoutton = document.getElementById('changeTheme');
const styleLink = document.getElementById('style-link');

// Gestion de l'événement lors du clic
changeThemeBoutton.addEventListener('click', () => {
  // Vérification du CSS actuel
  if (styleLink.getAttribute('href') === 'css/index.css') {
    styleLink.setAttribute('href', 'css/BRIGHT_index.css'); // Basculer vers le thème clair
  } else {
    styleLink.setAttribute('href', 'css/index.css'); // Revenir au thème sombre
  }
});


