'use strick'

// var expresion1 = /[\d]/;

// console.log(expresion1.test('20-jun-2007'));

// ^ = alt +94
// ^ signigica negacion
var expresion2 = /[^01]/;

console.log(expresion2.test('10101001100110001'));// false
console.log(expresion2.test('10101001200110001'));// True