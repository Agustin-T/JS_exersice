'use strick'

// + es uno a mas repeticiones
//() subexpresiones
var expresion1 = /Woo+(hoo+)+/i;

// Woohooooooooo!
console.log(expresion1.test('Woohooooohooooohooooohooooo'));