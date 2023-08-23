/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo).*/

/* 
Tools 
    - prompt for km
    - prompt for age
    - add Number
    - Multiply 0.21 * inserted km 
    - log
    - Conditionals by age (if age < 18 then -20%; if age > 65 then -40%; if age 18<x<65 then full price)
    - Output in human price (0.01 €)
*/

//Chiedo all'utente km da percorrere e trasformo in numero
const kmToRun = Number(prompt('Insert the travel distance in km'));

//Chiedo all'utente l'età del passeggero e trasformo in numero
const passengerAge = Number(prompt("Insert the passenger's age"));

//Calcolo il prezzo del biglietto senza esenzioni 
let fullPrice = 0.21 * kmToRun;

//Salvo in console
console.log(
    `
    ${kmToRun} ${passengerAge} ${fullPrice}
    `
);

//Aggiungo if/else if/if per esenzioni 
if (passengerAge < 18) {
    var total_1 = fullPrice - (fullPrice * 0.20);
    total_1 = total_1.toFixed(2);
    console.log(total_1);   
    document.getElementById("price").innerHTML = total_1;
} else if (passengerAge > 65) {
    var total_2 = fullPrice - (fullPrice * 0.40);
    total_2 = total_2.toFixed(2);
    console.log(total_2); 
    document.getElementById("price").innerHTML = total_2;
} else {
    console.log(fullPrice);
    document.getElementById("price").innerHTML = fullPrice;
}