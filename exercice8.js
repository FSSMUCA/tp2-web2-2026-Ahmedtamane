let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

// pour la suppression des espaces
let nomCorrige = nom.trim();
if (nomCorrige === "") nomCorrige = "Inconnu";

// conversion en nombre à l'aide du parseInt()
let ageNum = parseInt(age);
let ageStatut = (isNaN(ageNum) || ageNum <= 0) ? "valeur invalide" : `${ageNum} (valide)`;

// - `email` : doit contenir `"@"` ET un `"."` après le `"@"`. Valide ou invalide
let index = email.indexOf("@")
let emailValide = email.includes("@") && email.slice(index).includes(".");
let emailStatut = emailValide ? `"${email}"` : `"${email}" (invalide : pas de point après @)`;

// - `scoreJeu` : extraire uniquement la partie numérique avec `parseInt()`. Si `NaN` → 0
let scoreNum = parseInt(scoreJeu)
if(isNaN(scoreNum))  scoreNum = 0;

// - `estAdmin` : la chaîne `"false"` doit devenir le booléen `false`, `"true"` → `true`. 
// (Attention : `Boolean("false")` vaut `true` !)
let estAdminBoolean = (estAdmin === "true");

// - `derniereConnexion` : utiliser `??` pour donner la valeur par défaut `"Jamais connecté"`
let connexionStatus = derniereConnexion ?? "Jamais connecté";

// - `nombreConnexions` : convertir en nombre. Si c'est `0` après conversion → afficher `"Aucune connexion"`, 
// sinon le nombre
let nbConnexionsNum = Number(nombreConnexions);
let nbConnexionsStatus = (nbConnexionsNum === 0) ? "Aucune connexion" : nbConnexionsNum;

// c'est l'affichage du rapport
console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom               : "${nomCorrige}" (corrigé : espaces supprimés)`);
console.log(`age               : ${ageStatut}`);
console.log(`email             : ${emailStatut}`);
console.log(`scoreJeu          : ${scoreNum} (extrait depuis "${scoreJeu}")`);
console.log(`estAdmin          : ${estAdminBoolean} (attention : conversion manuelle requise)`);
console.log(`derniereConnexion : "${connexionStatus}" (valeur par défaut via ??)`);
console.log(`nombreConnexions  : "${nbConnexionsStatus}" (${nbConnexionsNum} après conversion)`);
console.log("===============================");