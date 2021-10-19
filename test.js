'use strick'
console.log('------------------------------------------');
var expresion1 = /y/g;

console.log(expresion1.lastIndex);

expresion1.lastIndex = 6;
console.log(expresion1.lastIndex);

var coincidencia = expresion1.exec('sirb yfx sibr yfx');

console.log(coincidencia);
console.log(expresion1.lastIndex);

var expresion2 = /\d/g;
console.log('------------------------------------------');
console.log(expresion2.exec('Pedi 4 tacos y 1 agua'));//5
console.log(expresion2.exec('Pedi 4 tacos y 1 agua'));//15
console.log(expresion2.exec('Pedi 4 tacos y 1 agua'));//null

console.log('------------------------------------------');
var expresion3 = /\d/g;
console.log(expresion3.exec('Pedi 4 tacos y 1 agua'));//5
console.log(expresion3.exec('Pedi 4 tacos y 1 agua'));//15
//vuelve al ultimo indice (4)
expresion3.lastIndex = 6;
console.log(expresion3.exec('Pedi 4 tacos y 1 agua'));//15