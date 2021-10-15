'use strick'


// .replace() remplaza caracter o strings en una variable
var mensaje = 'EL cliente pidio sushi y comio su sushi';

console.log(mensaje);
// /g busca globalmente| /g seach globaly
console.log(mensaje.replace(/sushi/g, 'tacos'));

var mensaje2 = 'EL cliente pidio sushi y comio su sushi,sushi, sushi, sushi';
console.log(mensaje2.replace(/i/g, 'o'));

// se pude boundaries, subexpresiones, univerosos o bloques de texto