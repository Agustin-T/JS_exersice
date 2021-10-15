'use strick'

// "|" significa alternativa (OR)

var expresion1 = /pollo/;
var expresion2 = /pollo|res|pescado/;
var expresion3 = /pollo|res|pescado/;
console.log(expresion1);
console.log(expresion2);
console.log(expresion3);

console.log(expresion1.test('El cliente pidio pollo'));// True
console.log(expresion2.test('El cliente pidio pescado'));// True
console.log(expresion2.test('El cliente pidio tacos'));//False