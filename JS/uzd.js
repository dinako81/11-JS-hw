console.clear();

//random arr from 1-10

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

let arr = [];

for (let i = 1; i < 10; i++) {
  arr.push(getRandomIntInclusive(1, 15));
}

let arr2 = [...Array(10)].map((_) => Math.floor(Math.random() * 11 + 1));

console.log(arr2);
console.log("***************************");

// Tarpinis žinių patikrinimas #1
// 1. Programiškai ridenkite du žaidimo kauliukus- sugeneruokite du atsitiktinius skaičius nuo 1 iki 6 Jeigu kauliukų suma didesnė nei 8 jūs laimėjote, priešingu atveju pralošėte. Išveskite atsakymą, kuriame būtų abiejų kauliukų reikšmės ir išvada laimėjote ar pralošėte.
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 1; i < 6; i++) {
  arr.push(getRandomIntInclusive(1, 6));
}

let arr3 = [...Array(1)].map((_) => Math.floor(Math.random() * 6 + 1));
let arr4 = [...Array(1)].map((_) => Math.floor(Math.random() * 6 + 1));

console.log(arr3);
console.log(arr4);

arr3 = +arr3;
arr4 = +arr4;

const sum = arr3 + arr4;
// console.log("Suma: " + sum);

if (sum > 8) {
  console.log(arr3, arr4, "- laimėjote");
}
console.log(arr3, arr4, "- pralošėte");

console.log("***************************");
// 2. Gyveno du katinukai, Pilkis ir Murklys. Jų svoriai kilogramais buvo atsitiktiniai dydžiai nuo 3 iki 6. Parašyti programą, kuri išvestų katinukų svorius ir apskaičiuotų, kuris katinukas yra lengvesnis. Atsakymas turi būti katinukų vardai su jų svoriais ir lengvesnio katinuko vardas. Jeigu katinukai sveria vienodai, vietoj katinuko vardo parašykite, kad “katinukų svoriai vienodi”.

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 3; i < 6; i++) {
  arr.push(getRandomIntInclusive(3, 6));
}

let pilkioSvoris = [...Array(1)].map((_) => Math.floor(Math.random() * 4 + 1));
let murklioSvoris = [...Array(1)].map((_) => Math.floor(Math.random() * 4 + 1));

console.log("Pilkio svorys: " + pilkioSvoris);
console.log("Murklio svorys: " + murklioSvoris);

pilkioSvoris = +pilkioSvoris;
murklioSvoris = +murklioSvoris;

if (pilkioSvoris < murklioSvoris) {
  console.log("Pilkis lengvesnis, " + pilkioSvoris + "kg.");
} else if (pilkioSvoris > murklioSvoris) {
  console.log("Murklis lengvesnis, " + murklioSvoris + "kg.");
} else if (pilkioSvoris == murklioSvoris) {
  console.log("Katinukų svoriai vienodi");
}

console.log("***************************");
// Nojus pasiruošė potvyniui ir nusipirko dvi valtis. Vienoje telpa 15 katinukų, kitoje 15 karvių (katinukus galima sodinti tik į katinukų valtis, o karves tik į karvių, maišyti negalima) Prasidėjus liūčiai pas Nojų atėjo atsitiktinis skaičius nuo 0 iki 30 katinukų ir toks pats atsitiktinis skaičius karvių. Išveskite atėjusių katinukų ir karvių skaičių ir ar Nojus galės juos sutalpinti į valtis. Jeigu netelpa tik katinukai arba tik karvės vistiek išveskite “Netelpa”. Kas konkrečiai netelpa išvedinėti nereikia. “Telpa” išveskite tik tuo atveju jeigu ir katinukai ir karvės telpa.


console.log("***************************");
// Antanas nusipirko naują butą ir pinigų jam liko nedaug. Dabar jis niekaip negali apsispręsti ką pirmiausiai pirkti: televizorių, skalbimo mašiną ar šaldytuvą. Todėl nusprendžia ridenti kauliuką (atsitiktinis skaičius nuo 1 iki 6) ir jeigu iškris 1 arba 5 pirkti televizorių, jeigu 3 arba 4 pirkti skalbimo mašiną ir jeigu 2 arba 6 - šaldytuvą. Padėkite Antanui apsispręsti. Ridenkite kauliuką ir parašykite atsakymą kokį daiktą jam pirkti.
console.log("***************************");
// (BOSO lygis) Sugeneruokite tris atsitiktinius skaičius nuo 1 iki 7. Skaičius atspausdinkite nuo mažiausio iki didžiausio. Pavyzdžiui: sugeneravus 4, 2, 4 juos reikia atspausdinti tokia tvarka: 2 4 4;
