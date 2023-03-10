/* Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”
per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo usato un operatore  nei giorni scorsi che possiamo riusare in questi esercizio?
Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano o inglese per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
3. Facciamo attenzione all'ordine delle condizioni che usiamo

BONUS 1:
Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
Potete usare vari strumenti per farlo:
`append()` oppure
`.innerHTML`
`.insertAdjacentHTML()`

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. */

// for loop
// switch.case
// Modular Operator %x
// Equality Operator ==

const ulElement = document.querySelector("#list");

// loop for per la console.log dei numeri

for (let i = 1; i <= 100; i++) {
  // switch.case per calcolare quando un numero è divisibile per un altro

  switch (true) {
    // console.log di tutti i numeri divisibili per 3 && 5

    case i % 3 == 0 && i % 5 === 0:
      console.log(i, "FizzBuzz");
      ulElement.innerHTML += `<li>FizzBuzz</li>`;
      break;

    // console.log di tutti i numeri divisibili per 3

    case i % 3 == 0:
      console.log(i, "Fizz");
      ulElement.innerHTML += `<li>Fizz</li>`;
      break;

    // console.log di tutti i numeri divisibili per 5

    case i % 5 == 0:
      console.log(i, "Buzz");
      ulElement.innerHTML += `<li>Buzz</li>`;
      break;

    // console.log di tutti i numeri da 1 a 100

    default:
      console.log("Default", i);
      ulElement.innerHTML += `<li>${i}</li>`;
      break;
  }
}
