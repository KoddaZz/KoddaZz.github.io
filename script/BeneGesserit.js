const personnages = [
    {
        nom: "Révérende Mère Gaius Helen",
        image: "../css/media/personnages/reverende_mere.webp",
        appartenance: "Sœurs Bene Gesserit",
        parents: "Inconnus",
        acteurs: "Siân Phillips (1984), Charlotte Rampling (2021)",
        date: "Avant 10100 AG",
        lieu: "Wallach IX",
        texte: "La Révérende Mère Gaius Helen est une figure énigmatique de l'univers de Dune. C'est une membre influente de l'ordre Bene Gesserit, elle est à la fois une manipulatrice politique et une détentrice de pouvoirs mentaux impressionnants. Son rôle est crucial dans les intrigues qui lient les grandes maisons et les plans des soeurs Bene Gesserit. Elle est la mentore de Lady Jessica et c'est elle qui met à l'épreuve Paul,  pour déterminer son potentiel. La Révérende Mère est un personnage complexe, elle est à la fois gardienne des traditions et actrice des grandes manœuvres du destin. ",
    },
    {
        nom: "Lady jessica",
        image: "../css/media/personnages/jessica_harkonnen.webp",
        appartenance: "Sœurs Bene Gesserit, Clan Atréides",
        parents: "Baron Vladimir Harkonnen (secret)",
        acteurs: "Francesca Annis (1984), Rebecca Ferguson (2021)",
        date: "10154 AG",
        lieu: "Wallach IX",
        texte: "Lady Jessica, membre de l'ordre Bene Gesserit, est la compagne du Duc Leto Atréides et la mère de Paul. Bien qu’elle ait été envoyée auprès de Leto pour servir les plans des Bene Gesserit, elle tombe réellement amoureuse de lui, bravant ainsi les règles de son ordre. Jessica est une femme d'une grande force intérieure et dotée d'incroyables capacités mentales et physiques, héritées de son entraînement. Après la chute du clan Atréides, elle fuit avec son fils Paul sur Arrakis. Ensemble, ils trouvent refuge parmi les Fremen, où elle gagne leur respect en devenant une Révérende Mère, une figure spirituelle vénérée.  Jessica soutient Paul dans son parcours, l’aidant à accepter son destin et à guider leur famille dans ces temps troublés.",
    },

    {
        nom: "Princesse Irulan",
        image: "../css/media/personnages/princesse_irulan.webp",
        appartenance: "Sœurs Bene Gesserit, Maison Corrino",
        parents: "Shaddam IV, Anirul Corrino",
        acteurs: "Virginia Madsen (1984), Florence Pugh (2023)",
        date: "10178 AG",
        lieu: "Kaitain",
        texte: "La princesse Irulan, fille de l'empereur Shaddam IV, est une femme intelligente et cultivée, mais souvent utilisée comme un pion dans les jeux de pouvoir de son père. Formée par les Bene Gesserit, elle maîtrise leurs arts. Elle est mariée à Paul Atréides dans un mariage purement politique et se retrouve prise entre son allégeance à sa famille et son rôle dans les plans des Bene Gesserit. Malgré tout, Irulan reste une figure digne et réfléchie, cherchant sa place dans un univers dominé par les luttes de pouvoir.",
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

    index--; 
    
    if (index < 0) {
        index = personnages.length - 1; 
    }
}
