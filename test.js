'use strick'

var expresion1 = /Hola mundo/;

console.log(expresion1.test('Hola mundo'))
var expresion2 = /Hola mun?do/;

console.log(expresion2.test('Hola mundo'))

var expresion3 = /Hola mun?do/;

console.log(expresion3.test('Hola mudo'))

// en todas dan true ya que da la posibilidad que exista o no, por lo cual "perdona" esos sucesos.
