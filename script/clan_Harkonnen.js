const personnages = [
    {
        nom: "Baron Vladimir Harkonnen",
        image: "./vladimir_harkonnen.jpeg",
        appartenance: "Clan Harkonnen",
        parents: "Inconnus",
        acteurs: "Kenneth McMillan (1984), Stellan Skarsgård (2021)",
        date: "10100 AG",
        lieu: "Giedi Prime",
        texte: "Un tyran manipulateur, connu pour sa cruauté et sa soif de pouvoir.",
    },
    {
        nom: "Feyd-Rautha Harkonnen",
        image: "./feyd_rautha.webp",
        appartenance: "Clan Harkonnen",
        parents: "Abulurd Harkonnen",
        acteurs: "Sting (1984), Austin Butler (2023)",
        date: "10176 AG",
        lieu: "Giedi Prime",
        texte: "Le neveu du Baron, ambitieux et impitoyable.",
    },
    {
        nom: "Glossu Rabban Harkonnen",
        image: "./rabban.webp",
        appartenance: "Clan Harkonnen",
        parents: "Abulurd Harkonnen",
        acteurs: "Paul L. Smith (1984), Dave Bautista (2021)",
        date: "10156 AG",
        lieu: "Giedi Prime",
        texte: "Surnommé 'la Bête', connu pour sa brutalité et son absence de pitié.",
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
    index = (index - 1 + personnages.length) % personnages.length;
    //personnages.lenght = longueur du tableau l'ajouter permet d'éviter un index négatif
    // utiliser le modulo permet ici de revenir à la fin du tableau si on à un index négatif
}

