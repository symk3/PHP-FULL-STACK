function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// pirma uzduotis

// const vardas = "Ryan";
// const pavarde = "Reinolds";

// console.log(vardas, pavarde);

// antra uzduotis

// const vardas1 = "Simonas";
// const pavarde2 = " Lukšys";
// const dabar = 2022;
// const gimimas = 2000;

// let dabartis = dabar - gimimas;

// console.log(
//   "Aš esu " + vardas1 + pavarde2 + ", man yra " + dabartis + " metai"
// );

// trecia uzduotis

// const vardas = "Jason";
// const pavarde = "Statham";

// result =
//   vardas[vardas.length - 3] +
//   vardas[vardas.length - 2] +
//   vardas[vardas.length - 1] +
//   pavarde[pavarde.length - 3] +
//   pavarde[pavarde.length - 2] +
//   pavarde[pavarde.length - 1];
// console.log(result);

// ketvirta uzduotis

// const p = "Once upon a time in hollywood";

// let modifikuotasStringas = p;
// modifikuotasStringas = modifikuotasStringas.replaceAll("o", "*");
// modifikuotasStringas = modifikuotasStringas.replaceAll("O", "*");

// console.log(modifikuotasStringas);

// penkta uzduotis

// function rand(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const skaicius1 = rand(0, 2);
// const skaicius2 = rand(0, 2);
// const skaicius3 = rand(0, 2);
// const skaicius4 = rand(0, 2);

// let nuliai = 0;
// let vienetai = 0;
// let dvejetai = 0;

// if (skaicius1 === 0) nuliai++;

// if (skaicius2 === 0) nuliai++;

// if (skaicius3 === 0) nuliai++;

// if (skaicius4 === 0) nuliai++;

// if (skaicius1 === 1) vienetai++;

// if (skaicius2 === 1) vienetai++;

// if (skaicius3 === 1) vienetai++;

// if (skaicius4 === 1) vienetai++;

// if (skaicius1 === 2) dvejetai++;

// if (skaicius2 === 2) dvejetai++;

// if (skaicius3 === 2) dvejetai++;

// if (skaicius4 === 2) dvejetai++;

// console.log("Gauti skaičiai:", skaicius1, skaicius2, skaicius3, skaicius4);
// console.log("Gauti rezultatai:", nuliai, vienetai, dvejetai);
