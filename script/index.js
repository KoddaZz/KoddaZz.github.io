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