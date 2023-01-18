// 1.	Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// a.	0 … 0
// b.	0 … 4
// c.	0 … 100
// d.	574 … 815
// e.	-50 … 50
// f.	-70 … 30

console.log('-------0...0-------')
// a.	0 … 0
let sumA = 0;

for (let i = 0; i <= 0; i++) {
    sumA += i; 
}
console.log('Suma: ', sumA);

console.log('-------0...4-------');

// b.	0 … 4
let sumB = 0;

for (let i = 0; i <= 4; i++) {
    sumB += i;
}
console.log('suma:', sumB);

console.log('-------0...100-------');
// c.	0 … 100

let sumC = 0;

for (let i = 0; i <= 100; i++) {
    sumC += i;
}
console.log('suma:', sumC);

console.log('-------574...815-------');
// d.	574 … 815
let sumD = 0;

for (let i = 574; i <= 815; i++) {
    sumD += i;
}
console.log('suma:', sumD)

console.log('--------(-50)...50-------');
// e.	-50 … 50
let sumE = 0;

for (let i = -50; i <= 50; i++) {
    sumE += i;
}
console.log('suma:', sumE)

console.log('--------(-70)...30-------');
// f.	-50 … 50
let sumF = 0;

for (let i = -70; i <= 30; i++) {
    sumF += i;
}
console.log('suma:', sumF)