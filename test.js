// concatenzar valiables 
var animales = ['perro', 'gato','pez']

// retorna como una cadena te texto
// es mas simple
var listaAnimales = animales.join(", ");
// retorna un arreglo sumando la ','
// es mas complejo, pero si quiero trabajar con cada uno de los elementos uso concat
var nuevaLista = animales.concat(",");


console.log(listaAnimales);
console.log(typeof listaAnimales);
console.log(nuevaLista);
console.log(typeof nuevaLista);