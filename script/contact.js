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

function toggleDropdown(element) {
  const submenu = element.querySelector('.submenu, .submenufilms');
  if (submenu.style.display === "block") {
      submenu.style.display = "none";
  } else {
      submenu.style.display = "block";
  }
}

function sendEmail(event) {
  event.preventDefault(); // contre l'envoi du formulaire sans rien basique ( on aime pas ça nous )

  // Pick toutes les valeurs des champs du form
  const prenom = document.getElementById('textprenom').value;
  const nom = document.getElementById('textnom').value;
  const email = document.getElementById('textemail').value;
  const note = document.getElementById('note').value;
  const commentaires = document.getElementById('commentaires').value;

  // creation du contenu de l'email
  const subject = `Avis sur le site Dune - Par ${prenom} ${nom}`;
  const body = `Prénom: ${prenom}\nNom: ${nom}\nEmail: ${email}\nNote: ${note}\nAvis:\n${commentaires}`;
  
  // encodage des valeurs afin de pas créer d'erreur au moment de l'envoi
  const mailtoLink = `mailto:jules.fuselier@etu.univ-amu.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
/*      AIDE ( PENSE BETE ) :
encodeURIComponent() est une fonction JavaScript qui transforme une chaîne de caractères en une version sécurisée pour une URL. 
Elle remplace les caractères spéciaux (comme espaces, accents, &, ?, etc.) par leur équivalent encodé en pourcentage. 
Cela garantit que ces caractères ne perturbent pas la structure de l'URL.
*/

  // client mail
  window.location.href = mailtoLink;
}