"use strict"
//TP -> décocher ligne en dessous
const leChiffre = prompt("Entrer un chiffre entre 1 & 10")
if (leChiffre < 1 || leChiffre > 10) {
    console.log(`Le chiffre ${leChiffre} ne se trouve entre 1 & 10`)
} else {
    console.log(`Le chiffre ${leChiffre} se trouve entre 1 & 10`)
    for (i = leChiffre; i >= 0 ; i--){
        console.log(i)
    }
}