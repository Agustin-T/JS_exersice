'use strick'

var mensaje = 'Esta historia continuará...';
var mensaje2 = '      Esta historia continuará...';
var mensaje3 = 'Estahistoriacontinuará...';
var mensaje4 = 'Estahistoriacontinuara';

// \W  Cualquier caracter que no sea alfanumerico (espacio)
// \S cualquier caracter que no sea un espaci en Blanco (o busca caracteres especiales)

console.log(mensaje.search(/\W/));
console.log(mensaje.search(/\W/g));
// retorna la primera incidencia, sin importar si agregar /g

console.log(mensaje3.search(/\S/));
console.log(mensaje4.search(/\W/));