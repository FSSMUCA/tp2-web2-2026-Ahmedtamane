let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

const defaut = "valeur par defaut";

const tests = [
    { label: "nom  ", valeur: nom },
    { label: "age  ", valeur: age },
    { label: "ville", valeur: ville },
    { label: "score", valeur: score },
    { label: "actif", valeur: actif }
];

for (let i = 0; i < tests.length; i++)
{
    let truc = tests[i];

    let resultatA = truc.valeur ?? defaut;
    let resultatB = truc.valeur || defaut;
    let memeResultat = (resultatA === resultatB) ? "meme resultat" : "resultat different";

    console.log(`${truc.nom} ?? "${defaut}"  -> ${resultatA}`);
    console.log(`${truc.nom} ?? "${defaut}"  -> ${resultatB}`);
    console.log(`${truc.nom} ?? "${defaut}"  -> ${memeResultat}`);
}

