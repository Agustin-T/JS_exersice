'use strick'

var mensaje = 'Llegaban por montones, primero 10, despues 20, despues 35 y se duplicaban hasta llegar a 1000';

//encontrar un patron un numero repetitivo de manera global
var patron = /\b(\d+)\b/g;

// donde guardaremos le evaluacion
var match;

while(match = patron.exec(mensaje)){
    console.log(match);
    console.log('Se encontro',match[1], ' en ', match.index);
}