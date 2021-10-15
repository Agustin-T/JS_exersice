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

var expresion1 = /Hola mundo/;

console.log(expresion1.test('Hola mundo'))
var expresion2 = /Hola mun?do/;

console.log(expresion2.test('Hola mundo'))

var expresion3 = /Hola mun?do/;

console.log(expresion3.test('Hola mudo'))

// en todas dan true ya que da la posibilidad que exista o no, por lo cual "perdona" esos sucesos.


//-----------------------------------------------------------
//  Conteo de patrones de expresiones regulares


// {minimo, maximo} de 1 a dos digitos
var expresion1 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;

console.log(expresion1.test('27-6-2007 11:45'))// true

//-----------------------------------------------------------
//  Saber y Agrupar los patrones segun tipos y funciones
//-----------------------------------------------------------
// Patrones no sensibles a mayusculas y minusculas
// incencible a mayusculas
var expresion1 = /Hola Mundo/i;

// ocupar un identificador para que no tenga 

console.log(expresion1.test('Hola mundo'));

//-----------------------------------------------------------
//patrones en subexpresiones

// + es uno a mas repeticiones
//() subexpresiones
var expresion1 = /Woo+(hoo+)+/i;

// Woohooooooooo!
console.log(expresion1.test('Woohooooohooooohooooohooooo'));

//-----------------------------------------------------------
//  exec y match
// both them work with the same objetive: return a object about what index makes what is demanded 
// desde la variable
var expresion1 = /\d+/.exec('Del año 1984');
console.log(expresion1);

// in console.log
console.log('Hasta 1994'.match(/\d+/))

//-----------------------------------------------------------
//  Estructura y orden de expresiones regulares
//-----------------------------------------------------------
//  Limitar palabras y cadenas de texto en una expresion regular

//\b sirve para poner un limite

var expresion1 = /\bcat\b/;
var expresion2 = /\bcat\b/;

console.log(expresion1.test('cat'));// True
console.log(expresion2.test('categoria'));// False


//-----------------------------------------------------------   
//  Uso de patrones opcionales en tue expresiones regulares 
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


//-----------------------------------------------------------
//  Patrones al incio y al final de una expresion

//Poder analizar las primeras palabras al inicio y final
// ^ Inicio (alt + 94)
// $ Fin
var expresionInicio = /^Any/;
var expresionFin = /JavaScript$/;
var expresionInicioFin = /^[^Any]|JavaScript$/;


console.log(expresionInicio.test('Any app that can be imagined can be made in JavaScript'));
console.log(expresionFin.test('Any app that can be imagined can be made in JavaScript'));
console.log(expresionInicioFin.test('Any app that can be imagined can be made in JavaScript'));
console.log(expresionInicioFin.test('Any app that can be imagined can be made in Python'));


//-----------------------------------------------------------
//  Mayor provecho a tus expresiones regulares
//-----------------------------------------------------------
//  Conoce y usar el metodo Replace en las cadenas de texto



//-----------------------------------------------------------
//  Metodo de busqueda en las cadenas de texto


//-----------------------------------------------------------
//  La propiedad LasrIndex en expresiones regulares



//-----------------------------------------------------------
//  ciclos  y evaluaciones en la expresiones regulares



//-----------------------------------------------------------
//  Usos comunes
//-----------------------------------------------------------
//  Patrones de correo electronico



//-----------------------------------------------------------
//  Validacion de Twitter user



//-----------------------------------------------------------
//  Expresiones Regulares



//-----------------------------------------------------------
//  Consideraciones Finales