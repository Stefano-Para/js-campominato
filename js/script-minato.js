// LE MIE ______________ VARIABILI _______________
var bombs = [];
var attempts = [];
var maxAttempts = 84;
var finalScore = 0;

// LE MIE ______________ FUNZIONI _______________
// Funzione che serve a generare un numero random che utilizzerò per la creazione delle bombe
function getRandomNumber (min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}
// funzione che serve a VERIFICA se un elemento è presente in un array. Ritornerà TRUE se è contenuto, FALSE se non è contenuto.
function isInArray (element, array) {
    var inArray = array.includes(element);
    return inArray;
}
// TEST FUNZIONE IsInArray + IF
// var x = [1,2,3,4,5];
// var y = 2;
// var check = isInArray(0, x);
// console.log(check)
//      if (check == true) {
//      alert("Si è contenuto!")
//      } else {
//     alert("Non è contenuto.")
//      }

//\\  CONSEGNA //\\

// 1) Il computer deve generare 16 numeri NON DUPLICATI tra 1 e 100.
// while non si ferma fino a che non ci sono 16 elementi all'interno dell'array BOMBS 

while (bombs.length < 16)  {
    createdBomb = getRandomNumber(1, 100);
    // condizione tramite la quale finchè si genera un numero già presente nell'array (già generato) continuerà a generare numeri (fino a 16 - bombe)
    if (!isInArray(createdBomb, bombs)) {
        bombs.push(createdBomb);
    }
} 
console.log("Queste sono le bombe:");
console.log(bombs); 

// 2) Il pc deve chiedere all'utente (100-16) volte di inserire un numero alla volta sempre compreso tra 1 e 100 e anche in questo caso NON DOPPIO (finchè l'utente inserisce un numero già inserito, continua a chiedere = DO WHILE).


// 3) Se il numero inserito è presente nella lista dei numeri generati (check in array) la partita termina sennò si continuano a chiedere numeri fino a "completarli" .

// 4) la partita termina quando l'user inserisce un numero vietato oppure raggiunge il maxAttempts. 

// 5) stampare in console o pagina o con alert quanti tentativi ha effettutato l'utente prima di raggiungere il game over 





