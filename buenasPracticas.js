var mensaje, 
    estado;

//-----------------------------------------------------------
// var mensaje = "Mensaje local",
//     resultado = 2;

// var datos = {};
// datos.mensje = "mensaje local del objeto"
// datos.resultado = 120;

// function saliudar(){
//     console.log(mensaje);
//     console.log(resultado);

//     console.log(datos.mensje);
//     console.log(datos.resultado)
// }

// saliudar();
//-----------------------------------------------------------
var animales = ["perro", 'gato', 'pez']

var totalAnimales = animales.length;

// evitar esto
// for (...;i < animales.lenght;...)
// modo correcto
for(var i=0; i < totalAnimales; i++){
    console.log(animales[i]);
}
//-----------------------------------------------------------
var tienda = {
    nombre = "Tienda las 4 esquinas",
    calcular: function(costo1, costo2){
        return costo1, costo2;
    },
    saludar: function(){
        var mensaje = "Hoola";
        return mensaje;
    },
};

console.log(tienda.nombre);
console.log(tienda.calcular(20, 32));
console.log(tienda.saludar());

// bar btnSaludar = document.getElementById('btnSaludar');

// btnSaludar.addEvenetListener('click', function(){
//     console.log(tienda.saliudar);
// });
//-----------------------------------------------------------

var persona = {
    nombre = 'sargio',
    email = 'nombre@mail.com',
    twitter = 'asdfasdf',
    saludar = function(){
        return 'hola mundo';
    }
}
var dato = '';

for (dato in persona){
    console.logdato, persona[dato];
}
//-----------------------------------------------------------
var persona = {}

console.log(persona);

if(persona){
    console.log('existe')
}
//-----------------------------------------------------------
var estado = true,
    resultado = '';

if(estado){
    console.log('continuar')
}else(
    console.log(Deterce)
)

if(resultado){
    console.log('continuar')
}else(
    console.log('Deterce')
)
//-----------------------------------------------------------
//  Operador Tenario

var estado = true


// if(estado){
//     console.log('continuar')
// }else(
//     console.log(Deterce)
// )
var accion = estado ? 'continuar' : 'detererse'

//-----------------------------------------------------------

console.log(1 === '1');
console.log(1 == '1')
//-----------------------------------------------------------
//  Costructores

function Persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;


}

var persona = new Persona('sergio','brito');
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);

//-----------------------------------------------------------
//Try and catch

var animañes = ['perro', 'gato', 'pez'];

var totalAnimales = animales.length

try {
    for (var i = 0; i< totalAnimales; i++){
    
        //Acciones a realizar por la excepcion
    } 
}catch (error) {
    //Mensaje de errores
    
}
//-----------------------------------------------------------
//Literales

// para pocos valores
var persona = {};
persona.nombre = 'Sergio'

//Para muchos valores
//Se genera un instancia detras de new
var otraPersona = new Object();

// SI es mucho
var lista = new Array();
//si son poco
lista[0] = 'MAnzana'
lista[1] = 'Pera'

var listaNueva = ['manzana', 'pera '];

//-----------------------------------------------------------
// estilo de JS
//-----------------------------------------------------------

// CamelCases
var nombreCompleto = 'sergio Brito';

//Snakecase
var nombre_completo = 'segio brbito';
//-----------------------------------------------------------
//COnstantes
var LIMITE = '30'; 

var LIMITE_TOTAL = 30;

//-----------------------------------------------------------
//Comentarios
//Dobre asterisco

/** 
*   [nombre descriptionn]
*   @type {string}
*/

var nombre = 'Agustin',
    email = 'asdf@asdfas.com'

/**
 * funcion para enviar saludos
 * @param {string} nombre - Nombre de lap ersona a saludar
 */
function saludar(nombre){
    //se retorna el mensaje formado
    return 'hola'+ nombre;
}

//-----------------------------------------------------------
var mensaje = 'hola esun "programa"'

//-----------------------------------------------------------
//Organized you code in JS
//-----------------------------------------------------------
// Delete innecessary commments


// window.onload = function(){
//     var btnSaludar = document.getElementById('btnsaludar')

//     btnSaludar.addEventListener('click', function(){
//         console.log('HI world')
//     });
// }

var btnSaludar = document.getElementById('btnsaludar')

btnSaludar.addEventListener('click', function(){
    console.log('HI world')
});
//-----------------------------------------------------------
// avoid duplication
// badly done
var cuenta = 2 + 3;

var cuentaNueva = 20 + 45;

var totalFinal = cuenta + cuentaNueva;

console.log(totalFinal)

// well done

function suma(datoA, datoB){
    var resultado = datoA + datoB;
    return resultado
}

var cuentaFinal = suma(suma(2,3), suma(20, 45));
//-----------------------------------------------------------
// explicit funtions blocks

var estado = true

if(estado)
    console.log('go');
    var resultado = 2+2;
    // error: this type of statement only work it with one code line

// is iqual tat the next
if (estado){
    console.log('go')
}
var resultado = 2+2
//-----------------------------------------------------------
// Performance in JS
//-----------------------------------------------------------