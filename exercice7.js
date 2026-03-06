let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250


// 1.
let sousTotal = prix * quantite;
console.log(`sous-total : ${sousTotal} MAD`);

// 2.
let montantRed = 0;
if (codePromo !== null && estMembre === true) {
    montantRed = (sousTotal * reductionPourcentage) / 100;
}
console.log(`montant de réduction : ${montantRed} MAD`);

// 3.
let totalFinal = sousTotal - montantRed;
console.log(`Total final : ${totalFinal} MAD`);

// 4.
let statutPaiement = "";
let newSolde = soldeCompte;
if (soldeCompte >= totalFinal) {
    statutPaiement = "paiement accepté";
// 5.
    newSolde = soldeCompte - totalFinal;
    console.log(statutPaiement)
}
else{
    statutPaiement = "solde insuffisant"
    console.log(statutPaiement)
}

// 6.
console.log(`
===== RÉCAPITULATIF =====
Produit    : ${nomProduit}
Quantité   : ${quantite}
Prix unit. : ${prix} MAD
Sous-total : ${sousTotal} MAD
Réduction  : ${montantRed} MAD
Total      : ${totalFinal} MAD
Statut     : ${statutPaiement}
Solde      : ${newSolde} MAD
=========================
`);