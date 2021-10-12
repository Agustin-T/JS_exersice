 'use strick'
//Test of server
console.log('hola');
//-----------------------------------------------------------
//  Conceptos Basicos de las expresiones Regulares
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
// Evaluar un conjunto de caracteres con expresiones regulares;
var expresion1 = /[0123456789]/;

// busca si almenos existe en expresion true
//no hace falta que sea exacto
console.log(expresion1.test('Sucesio en 1996'));

var expresion2 = /[0-9a-zA-Z]/;// 0 hasta el 9, a hasta z y A hasta Z
console.log(expresion2.test('Sucesio en 1996'));

var expresion3 = /@/;
console.log(expresion3.test('Error'));// False
console.log(expresion3.test('name@mail.com'));// True
//-----------------------------------------------------------
//  Uso de ayajos para grupos de caracteres

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

//-----------------------------------------------------------
// Coincidencias y negaciones de expresiones
// var expresion1 = /[\d]/;

// console.log(expresion1.test('20-jun-2007'));

// ^ = alt +94
// ^ signigica negacion
var expresion2 = /[^01]/;

console.log(expresion2.test('10101001100110001'));// false
console.log(expresion2.test('10101001200110001'));// True

//-----------------------------------------------------------
//  Trabajar con caracteres especiales para repetir patrones

var expresion1 = /\d/;

console.log(expresion1.test('1997'));

// + (1 o mas veces),* (1 o mas veces sin importar si existe)

var expresion2 = /\d+/;

console.log(expresion2.test('')); // false:porque por lo menos no hay una repeticion
var expresion3 = /\d*/;

console.log(expresion3.test('')); //True

//-----------------------------------------------------------
//  Patrones opcionales en la expresiones regulares

//-----------------------------------------------------------
//  Conteo de patrones de expresiones regulares


//-----------------------------------------------------------
//  Saber y Agrupar los patrones segun tipos y funciones
//-----------------------------------------------------------

//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------

//-----------------------------------------------------------
//  Estructura y orden de expresiones regulares
//-----------------------------------------------------------

//-----------------------------------------------------------
//-----------------------------------------------------------

//-----------------------------------------------------------
//  Mayor provecho a tus expresiones regulares
//-----------------------------------------------------------

//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------

//-----------------------------------------------------------
//  Usos comunes
//-----------------------------------------------------------

//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------