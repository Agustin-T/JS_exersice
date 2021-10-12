 'use strick'

 
console.log('hola');
//-----------------------------------------------------------
// expresion regular

// var regEx = 
//objeto que permite realiza varias operacion, como robar un patron y como ejecutarlo
//usar con expresiones grandes
var expresion1 = new RegExp('abc');

//ahce lo mismo
//
var expresion2 = /abc/;

//usar con expresiones cortas
var parrafo = /text1\/n text2/;
//-----------------------------------------------------------
// Evaluacion de primeras expresiones
// ejemplo 1

var expresion1 = new RegExp('abc');
// test() retorna true si encuentra lo que esta entre parentesis, (patron)
console.log(expresion1.test('abcdef'));


// ejemplo 2
var expresion2 = /hola mundo/;
console.log(expresion2.test('El primer programa es hola mundo'));
//-----------------------------------------------------------