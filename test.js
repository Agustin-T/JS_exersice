'use strick'

var expresion1 = /\d/;

console.log(expresion1.test('1997'));

// + (1 o mas veces),* (1 o mas veces sin importar si existe)

var expresion2 = /\d+/;

console.log(expresion2.test('')); // false:porque por lo menos no hay una repeticion
var expresion3 = /\d*/;

console.log(expresion3.test('')); //True