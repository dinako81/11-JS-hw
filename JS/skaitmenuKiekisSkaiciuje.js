console.clear()

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

