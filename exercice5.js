// **Sortie attendue :**
// ```
// 0 -> ENTIER SUR
// NaN -> INVALIDE
// Infinity -> INFINI
// -Infinity -> INFINI
// 42 -> ENTIER SUR
// 3.14 -> DECIMAL
// 9007199254740992 -> ENTIER HORS LIMITES
// 0 -> ZERO NEGATIF
// ```

const nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];
for (let i = 0; i < nombres.length; ++i)
{
    let n = nombres[i];
    let message = "";

    switch (true) {
        case Number.isNaN(n):
            message = "INVALIDE";
            break;
        
        case (n === Infinity || n === -Infinity):
            message = "INFINI";
            break;

        case (n === -0):
            message = "ZERO NEGATIF";
            break;

        case Number.isSafeInteger(n):
            message = "ENTIER SUR";
            break;

        case Number.isInteger(n):
            message = "ENTIER HORS LIMITES";
            break;
    
        default:
            message = "DECIMAL"
            break;
    }
    console.log(`Valeur : ${n} -> ${message}`);
}