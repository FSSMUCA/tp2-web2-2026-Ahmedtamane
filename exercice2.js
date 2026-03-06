let valeurs = [0, 1, "", "0", null, undefined, NaN , false, [], {}];

for (let i = 0; i < valeurs.length; i = i+1)
{
    if (valeurs[i] === "")
        console.log(`(chaine vide) -> ${Boolean(valeurs[i])}`);
    else
        console.log(`${ String(valeurs[i])} -> ${ Boolean(valeurs[i]) ? "truthy" : "falsy"}`);
}
