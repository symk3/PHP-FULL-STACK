function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// let y;
// let x;

// y = 4;
// x = 5;

// console.log("obuoliai:", y, "kriaušės:", x);

// y += x;

// console.log("prie kriaušiu pridėti obuolius", y);

// y *= x;

// console.log("obuolius padauginti iš kriaušių", y);

// y /= x;

// console.log("gautus obuolius padalinti iš kriaušių", y);

// //pirma uzduotis
// let vardas;
// let pavarde;

// vardas = 1;
// pavarde = 0;

// console.log("Jonas", "Jonaitis");

// if (vardas > pavarde) {
//   console.log("Jonas");
// } else {
//   vardas < pavarde;
//   console.log("Jonaitis");
// }

// antra uzduotis
// let vardas;
// let pavarde;
// let dabartis;
// let seniejiMetai;
// dabartis = 2022;
// seniejiMetai = 2000;
// vardas = "Simonas";
// pavarde = "Lukšys";
// dabartis -= seniejiMetai;
// console.log("Aš esu", vardas, pavarde, "Man yra", dabartis, "metai");

// trecia uzduotis

// let vardas;
// let pavarde;
// let paskutinesTrys;

// vardas = "Simonas";
// console.log(vardas);
// pavarde = "Lukšys";
// console.log(pavarde);

// paskutinesTrys =
//   vardas[vardas.length - 3] +
//   vardas[vardas.length - 2] +
//   vardas[vardas.length - 1] +
//   pavarde[pavarde.length - 3] +
//   pavarde[pavarde.length - 2] +
//   pavarde[pavarde.length - 1];

// console.log(paskutinesTrys);

//ketvirta uzduotis
// let pavadinimas = "Once upon a time in hollywood";
// let naujasPavadinimas = pavadinimas;

// naujasPavadinimas = naujasPavadinimas.replaceAll("o", "*");
// naujasPavadinimas = naujasPavadinimas.replaceAll("O", "*");

// console.log(naujasPavadinimas);

//penkta uzduotis
const skaicius1 = rand(0, 2);
const skaicius2 = rand(0, 2);
const skaicius3 = rand(0, 2);
const skaicius4 = rand(0, 2);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;

console.log(skaicius1, skaicius2, skaicius3, skaicius4);

if (skaicius1 === 0) nuliai++;
if (skaicius2 === 0) nuliai++;
if (skaicius3 === 0) nuliai++;
if (skaicius4 === 0) nuliai++;

if (skaicius1 === 1) vienetai++;
if (skaicius2 === 1) vienetai++;
if (skaicius3 === 1) vienetai++;
if (skaicius4 === 1) vienetai++;

if (skaicius1 === 2) dvejetai++;
if (skaicius2 === 2) dvejetai++;
if (skaicius3 === 2) dvejetai++;
if (skaicius4 === 2) dvejetai++;

console.log("Nuliai:", nuliai);
console.log("Vienetai:", vienetai);
console.log("Dvejetai:", dvejetai);
