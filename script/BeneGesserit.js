const personnages = [
    {
        nom: "Révérende Mère Gaius Helen",
        image: "./reverende_mere.jpg",
        appartenance: "Sœurs Bene Gesserit",
        parents: "Inconnus",
        acteurs: "Siân Phillips (1984), Charlotte Rampling (2021)",
        date: "Avant 10100 AG",
        lieu: "Wallach IX",
        texte: "Une Révérende Mère influente, conseillère politique et gardienne des secrets du Bene Gesserit.",
    },
    {
        nom: "Jessica Harkonnen",
        image: "./jessica_harkonnen.jpg",
        appartenance: "Sœurs Bene Gesserit, Clan Atréides",
        parents: "Baron Vladimir Harkonnen (secret)",
        acteurs: "Francesca Annis (1984), Rebecca Ferguson (2021)",
        date: "10154 AG",
        lieu: "Wallach IX",
        texte: "Une Bene Gesserit formée, qui a choisi l'amour pour le Duc Leto plutôt que la mission de son ordre.",
    },
    {
        nom: "Alia Atréides",
        image: "./alia_atreides.jpg",
        appartenance: "Sœurs Bene Gesserit, Clan Atréides",
        parents: "Jessica Harkonnen, Leto Atréides",
        acteurs: "Alicia Witt (1984), Anya Taylor Joy (2023)",
        date: "10191 AG",
        lieu: "Arrakis",
        texte: "Soeur de Paul Atréides et enfant prodige Bene Gesserit, marquée par des capacités mentales surhumaines dès sa naissance.",
    },
    {
        nom: "Princesse Irulan",
        image: "./princesse_irulan.png",
        appartenance: "Sœurs Bene Gesserit, Maison Corrino",
        parents: "Shaddam IV, Anirul Corrino",
        acteurs: "Virginia Madsen (1984), Florence Pugh (2023)",
        date: "10178 AG",
        lieu: "Kaitain",
        texte: "Fille de l'Empereur Shaddam IV, Bene Gesserit et épouse politique de Paul Atréides.",
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

