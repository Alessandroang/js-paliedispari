// // Palidroma
// // Chiedere all'utente di inserire una parola
// // Creare una funzione per capire se la parola inserita è palindroma

const userParola = prompt("Dimmi una parola");

if (isPalindroma(userParola)) {
  console.log("La parola inserita è un palindromo: " + userParola);
} else {
  console.log("La parola inserita non è un palindromo.");
}

function isPalindroma(parola) {
  const parolaPulita = parola.trim().toLowerCase();
  let parolaInvertita = "";

  for (let i = 0; i < parolaPulita.length; i = i + 1) {
    parolaInvertita = parolaPulita[i] + parolaInvertita;
  }

  return parolaPulita === parolaInvertita;
}

// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.

let sceltaUtente = prompt("Scegli pari o dispari:");
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function generaNumeroCasuale() {
  return Math.floor(Math.random() * 5) + 1;
}

// Sommiamo i due numeri

let numeroComputer = generaNumeroCasuale();
let somma = numeroUtente + numeroComputer;

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function isPari(numero) {
  return numero % 2 === 0;
}

console.log("Numero scelto dall'utente:", numeroUtente);
console.log("Numero scelto dal computer:", numeroComputer);
console.log("Somma dei numeri:", somma);

// Dichiariamo chi ha vinto.

function giocaPariDispari(scelta, numeroUtente, numeroComputer) {
  let somma = numeroUtente + numeroComputer;
  let risultato = isPari(somma) ? "pari" : "dispari";

  if (risultato === scelta) {
    console.log("Hai vinto!");
  } else {
    console.log("Hai perso!");
  }
}

giocaPariDispari(sceltaUtente, numeroUtente, numeroComputer);
