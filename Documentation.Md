# Documentation — Outils JavaScript utilisés dans le TP N° 2

Ce fichier explique chaque notion JavaScript dont vous avez besoin pour réaliser les exercices.
Pour chaque outil : une explication simple, la syntaxe, et des exemples concrets.

---

## Sommaire

| Outil | Utilisé dans |
|---|---|
| `String()` | Exercice 1, 2 |
| `JSON.stringify()` | Exercice 4 |
| `String.padEnd()` | Exercice 4 |
| `Number.isNaN()` | Exercice 5, 8 |
| `Number.isInteger()` | Exercice 5 |
| `Math.abs()` | Exercice 5 |
| `Number.MAX_SAFE_INTEGER` | Exercice 5 |
| `parseInt()` | Exercice 8 |
| `Number()` | Exercice 8 |
| `String.trim()` | Exercice 8 |
| `String.indexOf()` | Exercice 8 |

---

## `String()` — Convertir n'importe quelle valeur en texte

### À quoi ça sert ?
`String()` convertit **n'importe quelle valeur** JavaScript en chaîne de caractères.
C'est utile pour afficher des valeurs dans `console.log` ou pour les comparer sous forme de texte.

### Syntaxe
```js
String(valeur)
```

### Exemples
```js
String(42)          // "42"
String(true)        // "true"
String(false)       // "false"
String(null)        // "null"
String(undefined)   // "undefined"
String(NaN)         // "NaN"
String([1, 2, 3])   // "1,2,3"
String({ a: 1 })    // "[object Object]"
```

### Piège à éviter
```js
// Ne pas faire :
console.log(null + " est nul")      // "null est nul" (conversion implicite, peut surprendre)

// Faire plutôt :
console.log(String(null) + " est nul")  // "null est nul" (intention claire)
```

### Dans le TP
Dans l'exercice 2, pour afficher chaque valeur du tableau proprement :
```js
let val = null
let affichage = String(val)   // "null"
console.log(affichage + " -> falsy")
```

---

## `JSON.stringify()` — Convertir une valeur en texte JSON lisible

### À quoi ça sert ?
`JSON.stringify()` convertit une valeur en sa représentation **JSON** (texte).
Contrairement à `String()`, il ajoute des **guillemets** autour des chaînes et gère mieux les tableaux et objets.

### Syntaxe
```js
JSON.stringify(valeur)
```

### Comparaison avec `String()`
```js
let texte = "bonjour"

String(texte)           // bonjour       (sans guillemets)
JSON.stringify(texte)   // "bonjour"     (avec guillemets)

let nombre = 42
String(nombre)          // 42
JSON.stringify(nombre)  // 42            (pareil pour les nombres)

let tableau = [1, 2, 3]
String(tableau)         // 1,2,3
JSON.stringify(tableau) // [1,2,3]       (format JSON complet)
```

### Cas particuliers importants
```js
JSON.stringify(null)       // "null"
JSON.stringify(undefined)  // undefined   (attention : retourne undefined, pas une string !)
JSON.stringify(NaN)        // "null"      (NaN devient null en JSON)
JSON.stringify(Infinity)   // "null"      (Infinity devient null en JSON)
```

### Dans le TP
Dans l'exercice 4, pour afficher les valeurs des paires avec leurs guillemets si ce sont des strings :
```js
let a = "0"
let b = false

JSON.stringify(a)   // "\"0\""  → affichera "0" dans le terminal (avec guillemets)
JSON.stringify(b)   // "false"  → affichera false (sans guillemets, c'est un booléen)
```

---

## `String.padEnd()` — Aligner du texte à gauche

### À quoi ça sert ?
`.padEnd(longueur)` complète une chaîne avec des espaces à droite pour qu'elle atteigne une **longueur fixe**.
Utile pour aligner des colonnes dans le terminal.

### Syntaxe
```js
chaîne.padEnd(longueurTotale)
chaîne.padEnd(longueurTotale, caractèreDeRemplissage)
```

### Exemples
```js
"bonjour".padEnd(10)        // "bonjour   "  (3 espaces ajoutés)
"bonjour".padEnd(10, ".")   // "bonjour..."  (3 points ajoutés)
"bonjour".padEnd(4)         // "bonjour"     (déjà plus long, rien n'est changé)
```

### Visualisation de l'alignement
```js
console.log("nom".padEnd(15)    + ": Ali")
console.log("age".padEnd(15)    + ": 25")
console.log("email".padEnd(15)  + ": ali@example.com")

// Affiche :
// nom            : Ali
// age            : 25
// email          : ali@example.com
```

### Dans le TP
Dans l'exercice 4, pour aligner les colonnes des comparaisons `==` et `===` :
```js
let colonne = "0 == \"\""
console.log(colonne.padEnd(20) + " -> true")
// Affiche : "0 == ""             -> true"
```

---

## `Number.isNaN()` — Détecter si une valeur est NaN

### À quoi ça sert ?
`Number.isNaN()` retourne `true` **uniquement** si la valeur est exactement `NaN`.
C'est la façon fiable de tester NaN, car `NaN === NaN` vaut `false` en JavaScript.

### Syntaxe
```js
Number.isNaN(valeur)
```

### Pourquoi pas `isNaN()` tout seul ?
Il existe aussi `isNaN()` (sans `Number.`) mais il est **piégeux** : il convertit d'abord la valeur en nombre avant de tester.

```js
// isNaN() global — dangereux
isNaN("bonjour")   // true  ← "bonjour" est converti en NaN, puis testé
isNaN(undefined)   // true  ← undefined est converti en NaN
isNaN(null)        // false ← null est converti en 0

// Number.isNaN() — fiable
Number.isNaN("bonjour")   // false ← "bonjour" n'est pas NaN, c'est une string
Number.isNaN(undefined)   // false ← undefined n'est pas NaN
Number.isNaN(NaN)         // true  ← seul cas où c'est true
Number.isNaN(0 / 0)       // true  ← 0/0 produit NaN
```

### Exemples pratiques
```js
let resultat = parseInt("abc")   // NaN

if (Number.isNaN(resultat)) {
  console.log("La conversion a échoué")   // s'affiche
}

// NaN est la seule valeur non égale à elle-même
console.log(NaN === NaN)          // false
console.log(Number.isNaN(NaN))    // true  ← utiliser toujours cette méthode
```

### Dans le TP
Dans l'exercice 5, pour identifier les valeurs invalides dans le tableau :
```js
let n = NaN

if (Number.isNaN(n)) {
  console.log(n + " -> INVALIDE")
}
```

---

## `Number.isInteger()` — Vérifier si un nombre est entier

### À quoi ça sert ?
`Number.isInteger()` retourne `true` si la valeur est un nombre **sans partie décimale**.

### Syntaxe
```js
Number.isInteger(valeur)
```

### Exemples
```js
Number.isInteger(42)       // true
Number.isInteger(42.0)     // true   (42.0 est considéré entier)
Number.isInteger(42.5)     // false
Number.isInteger("42")     // false  (c'est une string, pas un number)
Number.isInteger(NaN)      // false
Number.isInteger(Infinity) // false
Number.isInteger(-7)       // true
```

### Attention : entier ≠ entier sûr
Un nombre peut être entier mais trop grand pour être représenté précisément :
```js
Number.isInteger(9007199254740993)    // true  (c'est un entier...)
9007199254740992 === 9007199254740993 // true  (... mais JavaScript ne les distingue plus !)
```
C'est pourquoi on utilise `Number.MAX_SAFE_INTEGER` pour vérifier les limites.

### Dans le TP
Dans l'exercice 5, pour distinguer les entiers des décimaux :
```js
let n = 3.14

if (Number.isInteger(n)) {
  console.log(n + " -> ENTIER")
} else {
  console.log(n + " -> DECIMAL")
}
// Affiche : 3.14 -> DECIMAL
```

---

## `Math.abs()` — Obtenir la valeur absolue

### À quoi ça sert ?
`Math.abs()` retourne la valeur **absolue** d'un nombre, c'est-à-dire sa valeur sans signe (toujours positive ou nulle).

### Syntaxe
```js
Math.abs(nombre)
```

### Exemples
```js
Math.abs(5)     // 5
Math.abs(-5)    // 5
Math.abs(-3.7)  // 3.7
Math.abs(0)     // 0
Math.abs(-0)    // 0
```

### Dans le TP
Dans l'exercice 5, pour vérifier si un entier dépasse les limites sûres (qu'il soit positif ou négatif) :
```js
let n = -9007199254740993   // entier négatif hors limites

if (Number.isInteger(n) && Math.abs(n) > Number.MAX_SAFE_INTEGER) {
  console.log(n + " -> ENTIER HORS LIMITES")
}
// Sans Math.abs(), on devrait écrire : n > MAX || n < -MAX
// Avec Math.abs(), une seule condition suffit
```

---

## `Number.MAX_SAFE_INTEGER` — La limite des entiers fiables

### À quoi ça sert ?
`Number.MAX_SAFE_INTEGER` est une **constante** qui vaut `9007199254740991` (soit 2⁵³ - 1).
C'est le plus grand entier que JavaScript peut représenter avec une précision garantie.

### Valeur
```js
console.log(Number.MAX_SAFE_INTEGER)    // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER)    // -9007199254740991
```

### Pourquoi cette limite ?
JavaScript stocke tous les nombres en virgule flottante 64 bits (IEEE 754).
Au-delà de cette limite, les entiers ne sont plus représentés exactement :
```js
9007199254740991 + 1   // 9007199254740992   correct
9007199254740991 + 2   // 9007199254740992   incorrect ! (devrait être 9007199254740993)
```

### Dans le TP
Dans l'exercice 5, la valeur `Number.MAX_SAFE_INTEGER + 1` est utilisée pour tester ce cas :
```js
let nombres = [42, Number.MAX_SAFE_INTEGER + 1]

for (let i = 0; i < nombres.length; i++) {
  let n = nombres[i]

  if (Number.isInteger(n) && Math.abs(n) > Number.MAX_SAFE_INTEGER) {
    console.log(n + " -> ENTIER HORS LIMITES")
  } else if (Number.isInteger(n)) {
    console.log(n + " -> ENTIER SUR")
  }
}
// 42                -> ENTIER SUR
// 9007199254740992  -> ENTIER HORS LIMITES
```

---

## `parseInt()` — Extraire un entier depuis une chaîne

### À quoi ça sert ?
`parseInt()` lit une chaîne de caractères et extrait le **premier nombre entier** qu'elle trouve.
Elle s'arrête dès qu'elle rencontre un caractère qui n'est pas un chiffre.

### Syntaxe
```js
parseInt(chaîne)
parseInt(chaîne, base)   // base = système de numération (10 pour décimal)
```

### Exemples
```js
parseInt("42")        // 42
parseInt("42.9")      // 42    (partie décimale ignorée)
parseInt("42abc")     // 42    (s'arrête au premier non-chiffre)
parseInt("abc42")     // NaN   (commence par des lettres → impossible)
parseInt("  10  ")    // 10    (les espaces sont ignorés au début)
parseInt("")          // NaN   (chaîne vide → NaN)
parseInt("0xFF", 16)  // 255   (lecture en base hexadécimale)
```

### Différence avec `Number()`
```js
parseInt("42.9")    // 42     (coupe la partie décimale)
Number("42.9")      // 42.9   (conserve la partie décimale)

parseInt("42abc")   // 42     (extraction partielle)
Number("42abc")     // NaN    (la chaîne entière doit être un nombre)
```

### Dans le TP
Dans l'exercice 8, pour extraire le score depuis `"150pts"` :
```js
let scoreJeu = "150pts"
let scoreNombre = parseInt(scoreJeu)   // 150

if (Number.isNaN(scoreNombre)) {
  scoreNombre = 0
}

console.log("scoreJeu : " + scoreNombre)   // scoreJeu : 150
```

---

## `Number()` — Convertir une valeur en nombre

### À quoi ça sert ?
`Number()` tente de convertir **n'importe quelle valeur** en nombre.
Contrairement à `parseInt()`, elle considère la valeur **entière** et retourne `NaN` si la conversion est impossible.

### Syntaxe
```js
Number(valeur)
```

### Exemples
```js
Number("42")        // 42
Number("42.5")      // 42.5
Number("42abc")     // NaN    (la chaîne entière doit être un nombre valide)
Number("")          // 0      (chaîne vide → 0)
Number("  ")        // 0      (espaces seuls → 0)
Number(true)        // 1
Number(false)       // 0
Number(null)        // 0
Number(undefined)   // NaN
Number(NaN)         // NaN
```

### Dans le TP
Dans l'exercice 8, pour convertir `nombreConnexions` en nombre :
```js
let nombreConnexions = "0"
let connexionsNombre = Number(nombreConnexions)   // 0

if (connexionsNombre === 0) {
  console.log("Aucune connexion")
} else {
  console.log(connexionsNombre)
}
// Affiche : Aucune connexion
```

---

## `String.trim()` — Supprimer les espaces aux extrémités

### À quoi ça sert ?
`.trim()` supprime tous les **espaces, tabulations et retours à la ligne** au début et à la fin d'une chaîne.
Le contenu au milieu n'est pas touché.

### Syntaxe
```js
chaîne.trim()
```

### Exemples
```js
"  bonjour  ".trim()       // "bonjour"
"  bonjour  monde  ".trim() // "bonjour  monde"  (espaces du milieu conservés)
"\t texte \n".trim()       // "texte"            (tabulations et sauts de ligne supprimés)
"   ".trim()               // ""                 (que des espaces → chaîne vide)
"rien".trim()              // "rien"             (rien à supprimer)
```

### Dans le TP
Dans l'exercice 8, pour nettoyer le nom saisi par l'utilisateur :
```js
let nom = "   Fatima   "
let nomCorrige = nom.trim()   // "Fatima"

if (nomCorrige === "") {
  nomCorrige = "Inconnu"
}

console.log("nom : \"" + nomCorrige + "\"")
// Affiche : nom : "Fatima"
```

---

## `String.indexOf()` — Trouver la position d'un texte dans une chaîne

### À quoi ça sert ?
`.indexOf(recherche)` cherche la première occurrence d'une sous-chaîne et retourne sa **position** (index).
Si la sous-chaîne n'est pas trouvée, elle retourne `-1`.

### Syntaxe
```js
chaîne.indexOf(sousChaine)
chaîne.indexOf(sousChaine, positionDeDepart)   // commence la recherche à partir de positionDeDepart
```

### Exemples
```js
"bonjour".indexOf("o")        // 1   (première occurrence de "o" est à l'index 1)
"bonjour".indexOf("jour")     // 3   ("jour" commence à l'index 3)
"bonjour".indexOf("x")        // -1  ("x" n'existe pas dans la chaîne)
"bonjour".indexOf("o", 2)     // 4   (cherche "o" à partir de l'index 2)

// Tester si une sous-chaîne est présente
let email = "ali@example.com"
email.indexOf("@")            // 3   (trouvé à la position 3)
email.indexOf("@") !== -1     // true (le @ est présent)
```

### Schéma visuel
```
"fatima@example"
  0123456789...

indexOf("@")  → 6
indexOf(".")  → -1  (pas de point dans cette chaîne)
```

### Dans le TP
Dans l'exercice 8, pour valider un email (doit contenir `@` et un `.` après le `@`) :
```js
let email = "fatima@example"

let indexArobase = email.indexOf("@")       // 6

if (indexArobase === -1) {
  console.log("invalide : pas de @")
} else {
  // Cherche un point APRÈS le @
  let indexPoint = email.indexOf(".", indexArobase)   // -1 (pas de point après le @)

  if (indexPoint === -1) {
    console.log("invalide : pas de point après @")
  } else {
    console.log("valide")
  }
}
// Affiche : invalide : pas de point après @
```

---

## Récapitulatif rapide

| Outil | Ce qu'il fait | Retourne |
|---|---|---|
| `String(val)` | Convertit en texte | `string` |
| `JSON.stringify(val)` | Convertit en texte JSON (avec guillemets pour les strings) | `string` |
| `"texte".padEnd(n)` | Complète avec des espaces jusqu'à la longueur `n` | `string` |
| `Number.isNaN(val)` | Teste si la valeur est exactement `NaN` | `boolean` |
| `Number.isInteger(val)` | Teste si la valeur est un entier | `boolean` |
| `Math.abs(n)` | Valeur absolue (supprime le signe) | `number` |
| `Number.MAX_SAFE_INTEGER` | Constante : 9007199254740991 | `number` |
| `parseInt(str)` | Extrait un entier depuis une chaîne | `number` ou `NaN` |
| `Number(val)` | Convertit en nombre (toute la valeur) | `number` ou `NaN` |
| `"texte".trim()` | Supprime espaces au début et à la fin | `string` |
| `"texte".indexOf(s)` | Trouve la position d'une sous-chaîne | `number` (-1 si absent) |
