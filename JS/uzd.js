console.clear()

//random arr from 1-10





function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

let arr = [];

for (let i = 1; i < 10; i ++) {
    arr.push(getRandomIntInclusive(1, 15));
}




let arr2 = [...Array(10)].map(_ => Math.floor(Math.random() * 11 + 1));

console.log(arr2)

//Namu darbai