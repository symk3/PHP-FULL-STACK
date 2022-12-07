function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const skaicius1 = rand(0, 4);
const skaicius2 = rand(0, 4);
let rezultatas = 0;

if (skaicius1 > skaicius2) {
  if (skaicius2 === 0) {
    rezultatas = "dalyba is nulio negalima";
  } else {
    rezultatas = (skaicius1 / skaicius2).toFixed(2);
  }
} else {
  rezultatas = (skaicius1 / skaicius2).toFixed(2);
}

console.log("Gauti skaičiai:", skaicius1, skaicius2);
console.log("Atsakymas:", rezultatas);

// antra uzduotis

const a = rand(0, 25);
const b = rand(0, 25);
const c = rand(0, 25);

const min = Math.min(a, b, c);
const max = Math.max(a, b, c);

console.log("Gauti skaičiai", a, b, c);
console.log("Mažiausia reikšmė", min);
console.log("Didžiausia reikšmė", max);

console.log("vidurinė reikšmė", a + b + c - (min + max));

//trecia uzduotis

const vardas = "Bradas";
const pavarde = "Pitas";
const inicialai = vardas[0] + pavarde[0];

console.log("Inicialai", inicialai);

// ketvirta uzduotis
//Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
const stringas = "abcdefghijklmnopqrstuvwxyz";
const number1 = rand(0, stringas.length - 1);
const number2 = rand(0, stringas.length - 1);
const number3 = rand(0, stringas.length - 1);
console.log(stringas[number1] + stringas[number2] + stringas[number3]);
