const personnages = [
    {
        nom: "Baron Vladimir Harkonnen",
        image: "../css/media/personnages/vladimir_harkonnen.webp",
        appartenance: "Clan Harkonnen",
        parents: "Inconnus",
        acteurs: "Kenneth McMillan (1984), Stellan Skarsgård (2021)",
        date: "10100 AG",
        lieu: "Giedi Prime",
        texte: "Le Baron Vladimir Harkonnen est le chef du clan Harkonnen. Ennemi juré des Atréides, il orchestre leur chute avec l'aide de l'empereur padishah. Atteint d’une maladie dégénérative qui le rend obèse et dépendant de suspensions gravitationnelles pour se déplacer, sa condition physique est le résultat d’un poison transmis par la révérende MèreGaius Helen lors du viol de cette dernière. Ce poison a été spécifiquement conçu pour provoquer une obésité progressive et lente, détruisant ainsi la beauté physique du baron, qui était pour lui une grande fierté. Sa cruauté et son obsession pour le pouvoir en font l’un des personnages les plus redoutables de l’univers de Dune.",
    },
    {
        nom: "Feyd-Rautha Harkonnen",
        image: "../css/media/personnages/feyd_rautha.webp",
        appartenance: "Clan Harkonnen",
        parents: "Abulurd Harkonnen",
        acteurs: "Sting (1984), Austin Butler (2023)",
        date: "10176 AG",
        lieu: "Giedi Prime",
        texte: "Feyd-Rautha Harkonnen est le neveu du Baron Vladimir Harkonnen et son héritier préféré. Jeune, charismatique et ambitieux, il est élevé pour devenir l’instrument des plans du baron, qui rêve de placer Feyd sur le trône impérial. Contrairement à son frère Rabban, Feyd est plus intelligent, manipulateur et calculateur. Cependant, sous son apparence se cache une cruauté glaciale, héritée de sa famille. Il est le produit des intrigues du clan Harkonnen, et l’un des adversaires les plus redoutables pour Paul Atréides, incarnant à la fois la ruse et la cruanté.",
    },
    {
        nom: "Glossu Rabban Harkonnen",
        image: "../css/media/personnages/rabban.webp",
        appartenance: "Clan Harkonnen",
        parents: "Abulurd Harkonnen",
        acteurs: "Paul L. Smith (1984), Dave Bautista (2021)",
        date: "10156 AG",
        lieu: "Giedi Prime",
        texte: "Rabban Harkonnen, surnommé la Bête, est le neveu du Baron Vladimir Harkonnen. Brutal, cruel et sans finesse, il est utilisé par le Baron comme un instrument de terreur pour gouverner Arrakis d'une main de fer. Contrairement à son frère Feyd-Rautha, qui incarne la ruse et le charme, Rabban est un tyran impulsif, connu pour sa soif de violence et son absence totale de pitié. Son règne impitoyable sur Arrakis provoque la colère et la rébellion des Fremen. Rabban est le reflet de la sauvagerie du clan Harkonnen.",
    },
];

let index = 0;

function changer_vers_lavant() {
    //récupère les éléments de la page HTML
    const titre = document.getElementById("titre");
    const image = document.getElementById("image");
    const appartenance = document.getElementById("Appartenance");
    const parents = document.getElementById("Parents");
    const acteurs = document.getElementById("Acteurs");
    const date = document.getElementById("date");
    const lieu = document.getElementById("lieu");
    const texte = document.getElementById("texte");

    //modifie le contenue des éléments avec le personnages de l'indice adéquat
    titre.innerHTML = personnages[index].nom;
    image.src = personnages[index].image;
    image.alt = personnages[index].nom;
    appartenance.innerHTML = "<b>Appartenance :</b>" + personnages[index].appartenance; //notation différente car on incrémente des paragraphes avec des parties en gras 
    parents.innerHTML = "<b>Parents :</b>" + personnages[index].parents;
    acteurs.innerHTML = "<b>Acteurs :</b>" + personnages[index].acteurs;
    date.innerHTML = "<b>Date de naissance :</b>" + personnages[index].date;
    lieu.innerHTML = "<b>Lieu de naissance :</b>" + personnages[index].lieu;
    texte.innerHTML = personnages[index].texte;

    //passe au personnages suivant
    index++;

    //permet de revenir au début si l'on dépasse le nombre de personnages
    if (index >= personnages.length) {
        index = 0;
    }
}
// même fonction mais vers l'autre sens
function changer_vers_larriere() {
    const titre = document.getElementById("titre");
    const image = document.getElementById("image");
    const appartenance = document.getElementById("Appartenance");
    const parents = document.getElementById("Parents");
    const acteurs = document.getElementById("Acteurs");
    const date = document.getElementById("date");
    const lieu = document.getElementById("lieu");
    const texte = document.getElementById("texte");
    titre.innerHTML = personnages[index].nom;
    image.src = personnages[index].image;
    image.alt = personnages[index].nom;
    appartenance.innerHTML = "<b>Appartenance :</b>" + personnages[index].appartenance;
    parents.innerHTML = "<b>Parents :</b>" + personnages[index].parents;
    acteurs.innerHTML = "<b>Acteurs :</b>" + personnages[index].acteurs;
    date.innerHTML = "<b>Date de naissance :</b>" + personnages[index].date;
    lieu.innerHTML = "<b>Lieu de naissance :</b>" + personnages[index].lieu;
    texte.innerHTML = personnages[index].texte;
    
    index--; 
    
    if (index < 0) {
        index = personnages.length - 1; 
    }
}

// Sélection du bouton et du lien CSS
const changeThemeBoutton = document.getElementById('changeTheme');
const styleLink = document.getElementById('style-link');

// Gestion de l'événement lors du clic
changeThemeBoutton.addEventListener('click', () => {
  // Vérification du CSS actuel
  if (styleLink.getAttribute('href') === 'css/clan_Harkonnen.css') {
    styleLink.setAttribute('href', 'css/BRIGHT_clan_Harkonnen.css'); // Basculer vers le thème clair
  } else {
    styleLink.setAttribute('href', 'css/clan_Harkonnen.css'); // Revenir au thème sombre
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
  