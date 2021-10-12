'use strick'
/*
\d  Cualquier numero
\w  Cualquier letra o número
\s  CUalquier espacio en blanco incluido tabs, salto de linea o similares
\D  Cualquier caracter que no sea un numero
\W  cualquier caracter que no sea un espacio en blanco
\S  Cualquier caracter que no sea un espacio en blanco
.   Cualquier caracter excepto nuevas lineas
*/

var expresion1 = /\d\d-\d\d-\d\d\d\d/;

console.log(expresion1.test('29-06-2007'));// true
console.log(expresion1.test('29-jun-2007'));// false

//29-06-2007