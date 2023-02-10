console.clear()

// 3. Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// a.	priima vieną kintamąjį
// b.	jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// c.	priešingu atveju, funkcija tęsia darbą
// d.	į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// e.	gražina skaitmenų kiekį
// f.	TESTAI:
// i.	console.log( skaitmenuKiekisSkaiciuje( 5 ) );
// 1.	rezultatas: 1
// ii.	console.log( skaitmenuKiekisSkaiciuje( 781 ) );
// 1.	rezultatas: 3
// iii.	console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// 1.	rezultatas: 11
// iv.	console.log( skaitmenuKiekisSkaiciuje( true ) );
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
// v.	console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
// vi.	console.log( skaitmenuKiekisSkaiciuje( NaN ) );
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”


function numSize(num) {
    if (typeof num !== 'number' || '' + NaN == 'NaN' || isNaN(num)) {
        return 'Pateikta netinkamo tipo reikšmė.'
    }
    
    const numAsTekst = '' + num;
    let size = 0;
    size = numAsTekst.length;
 return size;
}


console.log(numSize(5), '-->', 1);
console.log(numSize(781), '-->', 3);
console.log(numSize(37060123456), '-->', 11);

console.log(numSize('abrakadabra'));
console.log(numSize(true));
console.log(numSize('asd'));
console.log(numSize(NaN));

