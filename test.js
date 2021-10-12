'use strick'
var expresion1 = /[0123456789]/;

// busca si almenos existe en expresion true
//no hace falta que sea exacto
console.log(expresion1.test('Sucesio en 1996'));

var expresion2 = /[0-9a-zA-Z]/;
console.log(expresion2.test('Sucesio en 1996'));