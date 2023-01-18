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
console.log(irankis)

const virtuve = ['kranas', 'keptuve', 'puodas', 'virdulys', 'saukstas']
console.log(virtuve)

const gyvunas = ['katinas', 'suo', 'ozka', 'karve', 'arklys']
console.log(gyvunas)

// 4.	Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas


let sakinys = 'Visi irankiai: ';
let index = 0;

sakinys += irankis [index];
index += 1;
sakinys += ', ';

sakinys += irankis [index];
index += 1;
sakinys += ', ';

sakinys += irankis [index];
index += 1;
sakinys += ', ';

sakinys += irankis [index];
index += 1;
sakinys += ', ';

sakinys += irankis [index];
index += 1;
sakinys += ', ';

console.log(sakinys)

let sakinys2 = 'Visi irankiai: ' + irankis.join(' ');
console.log(sakinys2);

let sakinys5 = `Visi irankiai: ${irankis.join(' ')}`;
console.log(sakinys5)

// let reversed = irankis.reverse();
// console.log(reversed);

let sakinys3 = 'Visi virtuveje: ' + virtuve.join(' ');
console.log(sakinys3)

let sakinys4 = 'Visi gyvunai: ' + gyvunas.join(' ');
console.log(sakinys4)




