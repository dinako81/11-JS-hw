// 3.	Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console 


// 1.	Susumuoti visus skaičiaus tipo kintamuosius
// a.	Rezultatą išvesti į console


const ugis = [176, 181, 185, 144, 165];
console.log(ugis);

const ugioSuma = ugis[0] + ugis[1] + ugis[2] + ugis[3] + ugis[4] ;
console.log('Ugiu suma: ', ugioSuma);

const svoris = [85, 65, 55, 45, 65];
console.log(svoris)

const svorioSuma = svoris[0] + svoris[1] + svoris[2] + svoris[3] +svoris[4];
console.log ('Svorio suma: ', svorioSuma);

const plotis = [12, 52, 18, 16, 62];
console.log(plotis);

const plocioSuma = plotis[0] + plotis[1] + plotis[2]+ plotis[3]+ plotis[4];
console.log('Plocio suma: ', plocioSuma);

console.log('--------------------')

// 3.	Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// 1-2+3-4+5
// b. Rezultatą išvesti į console kazkodel skaicius ima is pirmo masyvo

const ugioVerte = ugis[1] - ugis[2] + ugis[3] - ugis[4] + ugis[5];
console.log(ugioVerte);

const svorioVerte = svoris[1] - svoris[2] + svoris[3] - svoris[4] + svoris[5];
console.log(svorioVerte)

const plocioVerte = plotis[1] - plotis[2] + plotis[3] - plotis[4] + plotis[5];
console.log(plocioVerte);

//Nan nes 5 naris masyve neekzistuoja

// 4.	Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
// a.	Po kiekvieno jų inicijavimo, išvesti į console


const irankis = ['plaktukas', 'reples', 'pjuklas', 'reples', 'atsuktuvas'];
console.log(irankis);

const virtuve = ['kranas', 'keptuve', 'puodas', 'virdulys', 'saukstas'];
console.log(virtuve);

const gyvunas = ['katinas', 'suo', 'ozka', 'karve', 'arklys'];
console.log(gyvunas);

// VK4.	Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

let reversed = irankis.reverse();
console.log(reversed);

const irankisSuma = `${irankis[4]}, ${irankis[3]}, ${irankis[2]}, ${irankis[1]}, ${irankis[0]}`;
console.log(irankisSuma);

const virtuveSuma = `${virtuve[4]}, ${virtuve[3]}, ${virtuve[2]}, ${virtuve[1]}, ${virtuve[0]}`;
console.log(virtuveSuma);

const gyvunasSuma = `${gyvunas[4]}, ${gyvunas[3]}, ${gyvunas[2]}, ${gyvunas[1]}, ${gyvunas[0]}`;
console.log(gyvunasSuma);


// KP4.	Išvesti sąrašo tipo kintamųjų ilgius


console.log(plotis.length)

//? ar teisingai supratau klausima ?



