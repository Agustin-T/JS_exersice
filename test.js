'use strick'

// {minimo, maximo} de 1 a dos digitos
var expresion1 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;

console.log(expresion1.test('27-6-2007 11:45'))// true