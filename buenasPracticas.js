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

//USing JSON 
// obtine el archivo productos.json ejecutando jquery
$.getJSON('productos.json', function(productos){
    console.log(productos);

    var totalProductos = productos.length;

    for(var i = 0; i < totalProductos; i++){
        console.log(productos[i].nombre)
    }
})

// coneccion con una conection url para acceder(no funciona el ejemplo url)

// var url = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='são paulo, sp')&format=json&callback=callbackFunction";
// $.getJSON(url, function(productos){
//     console.log(productos);


// })

//-----------------------------------------------------------
// join vs concat

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

//-----------------------------------------------------------
// test of rendimiento de JS

// cosole.time(name) retorna cuanto tarda ejecutar todo el codigo hasta cosole.timeEnd(name)
console.time('myCode')
var animales = ['perro', 'gato','pez'];
var l = animales.length;

for (var i = 0; i < 10000; i++){
    animales[i] = i
}

//analiza el timepo hasta here (tener same name for work it)
console.timeEnd('myCode')


// el testeo de rendimiento da distinto resultado en cada browcer ya que tiene distinta fprma de trabajo
//-----------------------------------------------------------

// minificar el codigo
// permite un ocdigo optimizado y mejor ejecucion
// ventaja: menor tiempo de ejecucion
// Tool: jscompress.com
// using fremework tienen minimizadores de codigo

// var tienda = {
//     nombre: "Tienda las 4 esquinas",
//     calcular: function(costo1, costo2) {
//         return costo1 + costo2;
//     },
//     saludar: function() {
//         var mensaje = "Hola ";
//         return mensaje;
//     }
// };

// var btnSaludar = document.getElementById("btnSaludar");

// btnSaludar.addEventListener('click', function() {
//     console.log(tienda.saludar());
// });

// with jscompress.com
var tienda={nombre:"Tienda las 4 esquinas",calcular:function(n,a){return n+a},saludar:function(){return"Hola "}},btnSaludar=document.getElementById("btnSaludar");btnSaludar.addEventListener("click",function(){console.log(tienda.saludar())});
//si es SENCIBLE EL CODIGO DESCARGAR UN MINIFICADOR, SI NO USA jscompress.com

//  Osfucacion: volver ilegible para el programador
//  Usando javascriptobfuscator.com/Javascript-Obfuscator.aspx


var _0x57fd=["\x54\x69\x65\x6E\x64\x61\x20\x6C\x61\x73\x20\x34\x20\x65\x73\x71\x75\x69\x6E\x61\x73","\x48\x6F\x6C\x61\x20","\x62\x74\x6E\x53\x61\x6C\x75\x64\x61\x72","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x63\x6C\x69\x63\x6B","\x73\x61\x6C\x75\x64\x61\x72","\x6C\x6F\x67","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72"];var tienda={nombre:_0x57fd[0],calcular:function(_0xc437x2,_0xc437x3){return _0xc437x2+ _0xc437x3},saludar:function(){var _0xc437x4=_0x57fd[1];return _0xc437x4}};var btnSaludar=document[_0x57fd[3]](_0x57fd[2]);btnSaludar[_0x57fd[7]](_0x57fd[4],function(){console[_0x57fd[6]](tienda[_0x57fd[5]]())})

console.log("Nuestro codigo ha sigo ofuscado")
console.log(tienda.nombre);
console.log(tienda.calcular(20, 32));
console.log(tienda.saludar());