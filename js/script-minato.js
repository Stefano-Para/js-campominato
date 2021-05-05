// il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

// le mie VARIABILI 
var bombs = [];
var attempts = [];
var maxAttempts = 84;
var finalScore;

// le mie FUNZIONI 
// Funzione che serve a generare un numero random che utilizzerò per la creazione delle bombe
function getRandomNumber (min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}
// var prova = getRandomNumber(1, maxAttempts);
// console.log("Console log di prova per function getRandomNumber(1, maxAttemps) = " + prova)

// funzione che serve a verificare se un elemento è presente in un array 
var x = 0;

function isInArray (x, y) {
    x = y.includes(element);
    y = array;
}

var array = [1, 3, 4, 5];
console.log("Array è composto da " + array)
var prova = isInArray (3, array);
console.log("Questo è il log di isInArray (3, array)");
