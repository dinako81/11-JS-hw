console.clear()

// 5.	Funkcija pavadinimu “isrinktiRaides”:
// a.	priima du kintamuosius:
// i.	pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
// ii.	antrasis nurodo kas kelintą raidę išrinkti
// b.	patikrinti, ar pirmasis kintamasis yra teksto tipo:
// i.	jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
// ii.	priešingu atveju tęsiame darbą
// c.	patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
// i.	jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
// ii.	priešingu atveju tęsiame darbą
// d.	patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
// i.	jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
// ii.	priešingu atveju tęsiame darbą
// e.	patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
// i.	jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
// ii.	priešingu atveju tęsiame darbą
// f.	patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
// i.	jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// ii.	priešingu atveju tęsiame darbą
// g.	išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
// h.	išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
// i.	gražina rezultatą
// j.	TESTAI:
// i.	console.log( isrinktiRaides( “abcdefg”, 2 ) );
// 1.	rezultatas: “bdf”
// ii.	console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
// 1.	rezultatas: “cfil”
// iii.	console.log( isrinktiRaides( “abc”, 0 ) );
// 1.	rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
// iv.	console.log( isrinktiRaides( “abc”, 4 ) );
// 1.	rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// v.	console.log( isrinktiRaides( 1561, 2 ) );
// 1.	rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”


function isrankiotiRaides(str, step) {
    if (typeof str !== 'string' || str === '') {
        return 'error: pirmasis parametras turi buti ne tuscias stringas'
    }

    // if (typeof step !== 'number' || !isFinite(step)) {
    //     return 'error: antrasis parametras turi buti normalus skaicius'
    // }

    if (!Number.isInteger(step)){
    return 'error: antrasis parametras turi buti normalus skaicius'
    } //stepas turi buti sveikasis skaicius

    if (str.length < step) {
    return 'error: zingsnis turi buti mazesnis uz stringa'
    }
    if (step === 0) {
        return 'error: zingsnis negali buti lygus nuliui (0)'
        }

    let text = '';
    for(i = step - 1 ; i < str.length; i += step){
        const letter = str[i];
        text += letter;
    }
    return  text;
}

//pirmas parametras netinkamas
console.log(isrankiotiRaides()); //nera nei vieno nei kito parametro
console.log(isrankiotiRaides(1561, 2));
console.log(isrankiotiRaides(true, 2));
console.log(isrankiotiRaides([], 2));
console.log(isrankiotiRaides((''), 2)); //tekstas per trumpas uz norima paimti zingsni
console.log(isrankiotiRaides('abc', 4));
console.log(isrankiotiRaides('abc', 4));


//asntras parametras yr netinkamas
console.log(isrankiotiRaides('abc')); //nera antro parametro
console.log(isrankiotiRaides('ajahhgds', Infinity));
console.log(isrankiotiRaides('ajahhgds', NaN));
console.log(isrankiotiRaides('ajahhgds', false));
console.log(isrankiotiRaides('ajahhgds', 3.14)); //stepas negali buti nesveikas skaicius
console.log(isrankiotiRaides('abc', 0));// stepas negali buti nulis


console.log('------------------------')

console.log(isrankiotiRaides('abcdefg', 2 ), '-->', 'bdf');
console.log(isrankiotiRaides('abcdefghijkl', 3), '-->', 'cfil');





