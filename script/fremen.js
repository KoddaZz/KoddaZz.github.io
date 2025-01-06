const personnages = [
    {
        nom: "Stilgar",
        image: "../css/media/personnages/stilgar.webp",
        appartenance: "Fremen",
        parents: "Inconnus",
        acteurs: "Everett McGill (1984), Javier Bardem (2021)",
        date: "Vers 10140 AG",
        lieu: "Sietch Tabr, Arrakis",
        texte: "Stilgar est le chef des Fremen de Sietch Tabr sur Arrakis. Loyal et profondément dévoué à son peuple, il incarne l'esprit de résistance des Fremen face à l'oppression. Lorsqu’il rencontre Paul Atréides et sa mère Jessica, Stilgar reconnaît leur potentiel et leur offre refuge. Avec le temps, il devient l’un des alliés les plus fidèles de Paul, jouant un rôle clé dans son ascension au pouvoir. En tant que guerrier expérimenté et stratège, Stilgar guide Paul dans les traditions fremen, aidant à unir les tribus dans leur lutte pour libérer Arrakis. Stilgar est également profondément influencé par les croyances des Fremen concernant le Lisan al-Gaib (le Messie), une figure prophétique censée venir d'un autre monde pour les guider. Lorsqu'il constate les pouvoirs et les visions de Paul, il commence à croire que Paul pourrait être cette figure mythique, accomplissant la prophétie. Il devient alors un fervant croyant à cette destinée et fait tout pour qu'elle se rélise.",
    },
    {
        nom: "Chani",
        image: "../css/media/personnages/chani.webp",
        appartenance: "Fremen",
        parents: "Liet Kynes, Inara",
        acteurs: "Sean Young (1984), Zendaya (2021)",
        date: "vers 10177",
        lieu: "Sietch Tabr, Arrakis",
        texte: "Chani est une jeune Fremen, elle est une combattante habile et respectée, et joue un rôle crucial dans la résistance contre les oppresseurs d'Arrakis. Elle rencontre Paul Atréides lorsque lui et sa mère trouvent refuge parmi les Fremen. Rapidement, Chani devient une alliée essentielle pour Paul, l'aidant à découvrir les traditions du peuple Fremen.  Au fil de l’histoire, Chani et Paul se rapprochent, et tombent. Contrairement à de nombreux autres Fremen, Chani n'a jamais vraiment cru en la prophétie du Lisan al-Gaib (le Messie), une figure mythique censée venir sauver son peuple. Pour elle, la réalité de la survie des Fremen sur Arrakis est bien plus importante que les visions prophétiques. Cependant, au fur et à mesure qu'ell aprend à connaitre Paul, elle commence à voir en lui un leader capable de changer le destin de son peuple. Bien qu’elle ne voie pas Paul comme le Messie, elle reste profondément fidèle à lui, apportant son soutien sans dans sa quête pour unifier les Fremen et résister à leurs oppresseurs.",
    },
    {
        nom: "Jamis",
        image: "../css/media/personnages/jamis.webp",
        appartenance: "Fremen",
        parents: "Inconnus",
        acteurs: "Judith Anderson (1984), Babs Olusanmokun (2021)",
        date: "Inconnue",
        lieu: "Sietch Tabr, Arrakis",
        texte: "Jamis est un guerrier Fremen fier et respecté, mais également marqué par sa méfiance envers les étrangers. Lorsque Paul Atréides décide de rejoindre les Fremen, Jamis le défie en combat, voyant en lui un intrus. Leur duel aboutit à la mort de Jamis. Sa rencontre avec Paul est un moment clé, révélant les tensions entre Paul et le peuple Fremen, que ce dernier devra surmonter pour gagner leur respect.",
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
