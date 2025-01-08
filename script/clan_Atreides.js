//tableau qui contient les informations de chaque personnages
const personnages = [
    {
        nom: "Paul (Muad’dib) Atréides",
        image: "../css/media/personnages/paul_atreides.webp",
        appartenance: "Clan Atréides, Fremen",
        parents: "Leto Atréides, Jessica Harkonnen",
        acteurs: "Kyle MacLachlan (1984), Timothée Chalamet (2021)",
        date: "10175 AG",
        lieu: "Caladan",
        texte: "Paul Atréides, héritier du noble clan Atréides, est le protagoniste de l'univers de Dune. Il est le fils du Duc Leto et de Lady Jessica. De plus, il possède des capacités physiques et mentales extraordinaires, héritées de son entraînement Bene Gesserit. Envoyé sur la planète désertique Arrakis avec le reste de son clan, Paul, avec sa mère, est l'un des derniers survivants du clan Atréides à la suite d'une trahison orchestrée par l'Empereur et le clan Harkonnen. Après la chute de sa maison, il trouve refuge parmi les Fremen, le peuple indigène d’Arrakis. Guidé par des visions prophétiques et son rôle de Lisan al-Gaib (le Messie) du peuple Fremen, Paul gagne progressivement le respect des Fremen et s'impose comme leader charismatique. Il commence à unifier les Fremen dans leur lutte contre leurs oppresseurs. Suite à la bataille finale de <i>Dune Part Two</i>, Paul s'impose comme dirigeant de la planète Arrakis et aspire à devenir l'Empereur de la galaxie.",
    },
    
    {
        nom: "Leto Atréides",
        image: "../css/media/personnages/leto_atreides.webp",
        appartenance: "Clan Atréides",
        parents: "Inconnus",
        acteurs: "Jürgen Prochnow (1984), Oscar Isaac (2021)",
        date: "10130 AG",
        lieu: "Caladan",
        texte: "Leto Atréides, Duc du clan Atréides, est connu pour sa sagesse, son sens de l’honneur et son profond dévouement envers son peuple. Mari de Lady Jessica et père de Paul Atréides, il est envoyé par l'Empereur Padishah pour gouverner la planète Arrakis. Mais cette mission se révèle être un piège tendu par l’Empereur et le clan Harkonnen. Malgré ses efforts pour créer une alliance avec les Fremen, le peuple indigène d’Arrakis, Leto est trahi par son médecin, le Dr Yueh. Capturé par les Harkonnen, il tente un dernier acte héroïque en essayant d’assassiner le Baron Vladimir Harkonnen avec une capsule empoisonnée, acte qui se solde par un échec. Il sacrifie sa vie pour protéger son fils et donner une chance à son clan de survivre.",
    },
    {
        nom: "Lady Jessica",
        image: "../css/media/personnages/jessica_harkonnen.webp",
        appartenance: "Soeur Bene Gesserit, Clan Atréides",
        parents: "Baron Harkonnen (secret)",
        acteurs: "Francesca Annis (1984), Rebecca Ferguson (2021)",
        date: "10154 AG",
        lieu: "Wallach IX",
        texte: "Lady Jessica, membre de l'ordre Bene Gesserit, est la compagne du Duc Leto Atréides et la mère de Paul. Bien qu’elle ait été envoyée auprès de Leto pour servir les plans des Bene Gesserit, elle tombe réellement amoureuse de lui, bravant ainsi les règles de son ordre. Jessica est une femme d'une grande force intérieure et dotée d'incroyables capacités mentales et physiques, héritées de son entraînement. Après la chute du clan Atréides, elle fuit avec son fils Paul sur Arrakis. Ensemble, ils trouvent refuge parmi les Fremen, où elle gagne leur respect en devenant une Révérende Mère, une figure spirituelle vénérée.  Jessica soutient Paul dans son parcours, l’aidant à accepter son destin et à guider leur famille dans ces temps troublés.",
    },
    {
        nom: "Duncan Idaho",
        image: "../css/media/personnages/duncan_idaho.webp",
        appartenance: "Clan Atréides",
        parents: "Inconnus",
        acteurs: "Richard Jordan (1984), Jason Momoa (2021)",
        date: "10123 AG",
        lieu: "Giedi Prime",
        texte: "Duncan Idaho est l’un des plus fidèles alliés du clan Atréides, connu pour ses talents de maître d’armes et son incroyable loyauté envers le Duc Leto et Paul. Charismatique et courageux, il est autant respecté pour sa bravoure que pour sa capacité à créer des liens de confiance. Il est envoyé auprès des Fremen pour préparer une alliance avant l'arrivée des aAtréides sur Arrakis, Duncan réussit à gagner leur respect, ce qui s’avère crucial pour l’avenir du clan. Lors de l’attaque qui détruit les Atréides, il se bat jusqu’au bout pour protéger Paul et Jessica, sacrifiant sa vie pour leur permettre de fuir. Son courage et son dévouement font de lui un héros inoubliable du clan Atréides.",
    },
    {
        nom: "Gurney Halleck",
        image: "../css/media/personnages/gurney_halleck.webp",
        appartenance: "Clan Atréides",
        parents: "Inconnus",
        acteurs: "Patrick Stewart (1984), Josh Brolin (2021)",
        date: "10120",
        lieu: "Giedi Prime",
        texte: "Gurney Halleck est un pilier du clan Atréides, un guerrier redoutable. Avec son humour si spécial et son côté protecteur, il est bien plus qu’un soldat : c’est un mentor et un véritable guide pour Paul. Fidèle au Duc Leto, il se bat sans relâche pour défendre les Atréides, même après leur chute. Gurney reste aux côtés de Paul, apportant son expérience, sa loyauté et sa force, prêt à tout pour honorer la mémoire de son clan et combattre leurs ennemis."
    }
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
    index = (index - 1 + personnages.length) % personnages.length;
    //personnages.lenght = longueur du tableau l'ajouter permet d'éviter un index négatif
    // utiliser le modulo permet ici de revenir à la fin du tableau si on à un index négatif
}

// Sélection du bouton et du lien CSS
const changeThemeBoutton = document.getElementById('changeTheme');
const styleLink = document.getElementById('style-link');

// Gestion de l'événement lors du clic
changeThemeBoutton.addEventListener('click', () => {
  // Vérification du CSS actuel
  if (styleLink.getAttribute('href') === 'css/clan_Atreides.css') {
    styleLink.setAttribute('href', 'css/BRIGHT_clan_Atreides.css'); // Basculer vers le thème clair
  } else {
    styleLink.setAttribute('href', 'css/clan_Atreides.css'); // Revenir au thème sombre
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
  