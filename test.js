'use strick'

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