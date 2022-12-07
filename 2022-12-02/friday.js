function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite rand() funkcija nuo 5 iki 3000.

const zvakes = rand(5, 3000);
let discount = 0;

if (zvakes > 1000) discount = zvakes * (0.03).toFixed(2);
if (zvakes > 2000) discount = zvakes * (0.04).toFixed(2);

console.log("Užsakymo suma:", zvakes);
console.log("Nuolaida:", discount);
console.log("Galutine Suma:", zvakes - discount, "EUR");
