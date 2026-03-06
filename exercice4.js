// 0        et  ""
// 0        et  "0"
// 0        et  false
// ""       et  false
// null     et  undefined
// null     et  false
// NaN      et  NaN
// 1        et  "1"
// " \t\n " et  0



const arr1 = [0, 0, 0, "", null, null, NaN, 1, "\t\n"];
const arr2 = ["", "0", false, false, undefined, false, NaN, "1", 0];

let compteur = 0;

for (let i = 0; i < arr1.length; ++i) {
	let A = arr1[i];
    let B = arr2[i];

    let result1 = (A == B);
    let result2 = (A === B);

	console.log(`${A} == ${B} \t 				-> ${result1}  |  ${A} === ${B} \t 			-> ${result2}`);
	if (result1 == true && result2 === false) {
        compteur++;
	}
}

console.log("------------------------------------------------------");
console.log(`${compteur} paire(s) où == et === donnent des résultats différents`);
