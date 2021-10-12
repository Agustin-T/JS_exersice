'use strick'

// ejemplo 1

var expresion1 = new RegExp('abc');
// test() retorna true si encuentra lo que esta entre parentesis, (patron)
console.log(expresion1.test('abcdef'));


// ejemplo 2
var expresion2 = /hola mundo/;
console.log(expresion2.test('El primer programa es hola mundo'));
