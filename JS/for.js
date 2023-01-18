// 1.	Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// a.	0 … 0
// b.	0 … 4
// c.	0 … 100
// d.	574 … 815
// e.	-50 … 50
// f.	-70 … 30


// a.	0 … 0

const skaiciaiA = [0]
let sum = 0;

for (let i = 0; i < skaiciaiA.length; i++) {
    console.log(skaiciaiA[i])
}


// b.	0 … 4

const skaiciaiB = [0, 1, 2, 3, 4]

let sumB = 0;

for (let i = 0; i <= 4; i++) {
    sumB += i;
}
console.log('suma:', sumB)

// c.	0 … 100

let sumC = 0;

for (let i = 0; i <= 100; i++) {
    sumC += i;
}
console.log('suma:', sumC)