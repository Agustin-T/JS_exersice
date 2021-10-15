'use strick'

//\b sirve para poner un limite

var expresion1 = /\bcat\b/;
var expresion2 = /\bcat\b/;

console.log(expresion1.test('cat'));// True
console.log(expresion2.test('categoria'));// False