//tableau qui contient les informations de chaque personnages
const personnages = [
    {
        nom: "Paul (Muad’dib) Atréides",
        image: "./paul_atreides.jpg",
        appartenance: "Clan Atréides, Fremen",
        parents: "Leto Atréides, Jessica Harkonnen",
        acteurs: "Kyle MacLachlan (1984), Timothée Chalamet (2021)",
        date: "10175 AG",
        lieu: "Caladan",
        texte: "Ravus la poutrelle machine de guerre",
    },
    
    {
        nom: "Leto Atréides",
        image: "./leto_atreides.jpg",
        appartenance: "Clan Atréides",
        parents: "Inconnus",
        acteurs: "Jürgen Prochnow (1984), Oscar Isaac (2021)",
        date: "10130 AG",
        lieu: "Caladan",
        texte: "Le Duc Atréides, père de Paul et leader respecté.",
    },
    {
        nom: "Jessica Harkonnen",
        image: "./jessica_harkonnen.jpg",
        appartenance: "Soeur Bene Gesserit, Clan Atréides",
        parents: "Baron Harkonnen (secret)",
        acteurs: "Francesca Annis (1984), Rebecca Ferguson (2021)",
        date: "10110 AG",
        lieu: "Wallach IX",
        texte: "Une femme forte et loyale, mère de Paul.",
    },
    {
        nom: "Duncan Idaho",
        image: "./duncan_idaho.jpg",
        appartenance: "Clan Atréides",
        parents: "Inconnus",
        acteurs: "Richard Jordan (1984), Jason Momoa (2021)",
        date: "10123 AG",
        lieu: "Giedi Prime",
        texte: "Le meilleur combattant des Atréides, loyal et brave.",
    },
    {
        nom: "Gurney Halleck",
        image: "./gurney_halleck.jpg",
        appartenance: "Clan Atréides",
        parents: "Inconnus",
        acteurs: "Patrick Stewart (1984), Josh Brolin (2021)",
        date: "10120",
        lieu: "Giedi Prime",
        texte: "Le guerrier-poète et conseiller fidèle"
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
    appartenance.innerHTML = `<b>Appartenance :</b> ${personnages[index].appartenance}`;
    parents.innerHTML = `<b>Parents :</b> ${personnages[index].parents}`;
    acteurs.innerHTML = `<b>Acteurs :</b> ${personnages[index].acteurs}`;
    date.innerHTML = `<b>Date de naissance :</b> ${personnages[index].date}`;
    lieu.innerHTML = `<b>Lieu de naissance :</b> ${personnages[index].lieu}`;
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
    appartenance.innerHTML = `<b>Appartenance :</b> ${personnages[index].appartenance}`;
    parents.innerHTML = `<b>Parents :</b> ${personnages[index].parents}`;
    acteurs.innerHTML = `<b>Acteurs :</b> ${personnages[index].acteurs}`;
    date.innerHTML = `<b>Date de naissance :</b> ${personnages[index].date}`;
    lieu.innerHTML = `<b>Lieu de naissance :</b> ${personnages[index].lieu}`;
    texte.innerHTML = personnages[index].texte;
    index = (index - 1 + personnages.length) % personnages.length;
}

