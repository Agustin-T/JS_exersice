"use stric";

// string: puede ser "" o ''
var bebida = "agua";
var comida = "ceviche";

//mismas reglas de python

function name(){
    var variable1 = "soy mutable y global";
    let variable2 = "Soy mutable y local";
    const variable3 = "soy inmutable";
}


// alert("Star code");
/*
console.log("Hola ", nameData);
const pi = 3.1416
console.log(pi)
*/

var nameData = "Agustin";
var edad = 35;
var flotante = 35.7;
var cantidad = "1000";

//variable boolean,(JS: valor, Python: Valor)
var activo = true;

// boolean(condition
var estado  = Boolean(10 < 9);
//vuele de string a valor numerico
var nuevaCantidad = Number(cantidad);
//vuelve de number a string
var otraCantidad = String(cantidad);
//input an date that is la fecha del dia
//convierte a entero
parseInt();
//convierte a punto flotante
parseFloat();


//--------------------------------------------------------
var fecha = new Date();
//      >> 'en la constola'
//>> ej: fecha.getDate() retorna el mes en el que estamos
//>>     fecha.getHOurs() retorna la hora

// get --> obtener
// set --> colocar

//--------------------------------------------------------
//simbolos
var simbolo1 = Symbol();
var simbolo2 = Symbol();
// var simbolo = new Symbol(); --> ERROR
// El simbolo no es un constructor
var ambiente = Symbol('ME encuentro en un ambiente');

//  >> simbolo1 === simbolo2 --> False
// Symbol() genera un caractar unico para cada variable

//--------------------------------------------------------
//OOP / objetos --> JSON(JavasScript Objetc Notation)

var personas = [{nombre: 'Sergio', twitter: 'yacafx'},
                {nombre: 'Hugo', twitter: 'dePaco'},
                {nombre: 'SLuis', twitter: 'DeLuis'}
            ];

// enviar al servidor para almacenar a 'personas'
// Utilizar JSON. Metodo stringify: Convierte todo en un texto

var personasJSON = JSON.stringify(personas);

//  >> personasJSON --> crea un resgistro
//  >> personasJSON.nombre  --> indefinido: no esta estructurado porque es una cadena de texto

// recuperar el valor de personasJSON de un servidor o lugar de almacenamiento

var nuevaPersona = JSON.parse(personasJSON);

//--------------------------------------------------------
//  Operadores
//--------------------------------------------------------
// Operadores aritméticos

var datoA = 10;
var datoB = 20;
/*
// SUMA +
var suma = datoA + datoB;
console.log('la suma de '+ datoA +'+'+ datoB +' esigual a: ', suma);

// RESTA -
var resta = datoA - datoB;
console.log('la resta de '+ datoA +'-'+ datoB +' esigual a: ', resta);

// MULTIPLICACION *
var multiplicacion = datoA * datoB;
console.log('la multiplicacion de '+ datoA +'*'+ datoB +'es igual a: ', multiplicacion);

// DIVISIÓN /
var division = datoA / datoB;
console.log('La división de '+ datoA +' / '+ datoB +' es igual a: ', division);

// MODULO O RESIDUO %
var modulo = datoA % datoB;
console.log('El módulo o residuo de '+ datoA +' % '+ datoB +' es igual a: ', modulo);

// INCREMENTO ++
var incremento = datoA;
incremento++;

//incremento = incremento+1
console.log('El incremento ++ de '+ datoA +' es igual a: ', incremento);


// DECREMENTO --
var decremento = datoA;
decremento--;

//decremento = decremento -1
console.log('El decremento -- de '+ datoA +' es igual a: ', decremento);
*/

//--------------------------------------------------------
//  Operadores Relacionales

/*
// MAYOR QUE >
var mayorQue = datoA > datoB;
console.log("Es "+ datoA + " mayor que " + datoB + ": " + mayorQue);

// MENOR QUE <
var menorQue =  datoA < datoB;
console.log("Es "+ datoA + " menor que " + datoB + ": " + menorQue);

// MAYOR O IGUAL QUE >=
var mayorOIgualQue =  datoA >= datoB;
console.log("Es "+ datoA + " mayor o igual que " + datoB + ": " + mayorOIgualQue);

// MENOR O IGUAL QUE <=
var menorOIgualQue =  datoA <= datoB;
console.log("Es "+ datoA + " menor o igual que " + datoB + ": " + menorOIgualQue);

// IGUAL QUE ==
var igualQue =  datoA == datoB;
console.log("Es "+ datoA + " igual que " + datoB + ": " + igualQue);

// NO ES IGUAL QUE O ES DIFERENTE QUE !=
var noEsIgualQue =  datoA != datoB;
console.log("Es "+ datoA + " no es igual o es diferente que " + datoB + ": " + noEsIgualQue);
*/

//--------------------------------------------------------
//  Operadores Lógicos

/*
// OPERADOR Y o AND - &&
var and = (datoA > 10 && dato > 10);
console.log('El resultado de la ecaluacion AND es: '+ and);

// OPERADOR O u OR - ||
var or = (datoA > 10 || datoB > 10);
console.log('El resultado de la ecaluacion or es: '+ or);

// OPERADOR DE NEGACION o NOT - !
var not = !(datoA < 10);
console.log('El resultado de la evaluacion NOT es: '+ not);
*/

//--------------------------------------------------------
// Operadores de asignación

/*
// ASIGNACIÓN SIMPLE
var igual = datoA;
console.log("El resultado de la asignación simple es: "+ igual);

// SUMAR Y ASIGNAR
var masIgual = 10;

masIgual += datoA;
//masIgual = masIgual + datoA;
console.log("El resultado de la asignación += es: "+ masIgual)

// RESTAR Y ASIGNAR
var menosIgual = 10;
menosIgual -= datoA;
console.log("El resultado de la asignación -= es: "+ menosIgual)

// MULTIPLICAR Y ASIGNAR
var porIgual = 10;
porIgual *= datoA;
console.log("El resultado de la asignación *= es: "+ porIgual)

// DIVIDIR Y ASIGNAR
var entreIgual = 20;

entreIgual /= datoA;

console.log("El resultado de la asignación /= es: "+ entreIgual)
*/

//--------------------------------------------------------
// Operador negativo

var datoBNegativo = -datoA

// console.log('El valor de datoA es '+ datoA + ", despues del operado negativo datoB: "+ datoB);

//--------------------------------------------------------
// Operacion de concatenacion

var nombre = "susana";
var apellido = "Trimarchi";

// CONCATENACION DE NUMEROS
var concatNumeros = datoA + datoB;
//console.log("Los números"+ datoA +" y "+ datoB +" usados como números concatenados hacemos"+ concatNumeros);

//  CONCATENAACION DE CADENA DE TEXTO
var concatTexto = nombre + " " + apellido
//console.log("Los textos "+ nombre + " y "+ apellido +"se unen para formar: "+ concatTexto);

// CONCATENACIÓN DE NÚMEROS COMO TEXTO
var concatNumComoTxt  = "2"+"8" ;
//console.log("Los números 2 y 8 usados como texto se unen para formar: ", concatNumComoTxt);

// CONCATENACIÓN DE TEXTO Y NUMERO
var concatTxtNum = datoA + "8" ;
//console.log("El número "+ datoA +" usado como número y 8 como texto se unen para formar: ", concatTxtNum);

//--------------------------------------------------------
// Operador Ternario o condicional

// codicion ? TRUE : FALSE
var resultado = datoA > datoB ? "Si es mayor" : "NO es mayor" ;
//console.log("El resulatdo con el operador ternario u operador condicional es: ", resultado);

//--------------------------------------------------------
// Operador de tipo de dato
// typeof: Retorna el tipo de dato de una variable


var personas2 = {
    edad : 34,
    deporte : 'Correr'
    
}// objeto

//console.log(typeof datoA); 
//console.log(typeof nombre);
//console.log(typeof activo);
//console.log(typeof personas2);
//console.log(typeof personas2.edad);
//console.log(typeof personas2.deporte);

//  >>number
//  >>string
//  >>bolean
//  >>object
//  >>number
//  >>string

//--------------------------------------------------------
//      Condiciones
//--------------------------------------------------------
//  IF/ Else / if else

var datoA = 10;
var datoB = 20;
var datoC = 5;
resultado = 'SIn datos';

if (datoA < datoB){
    resultado = 'La condicion se cumplio';
    
}else if (datoB == datoA){
    resultado = "resultado evaluacion verdadero";
}else{
    resultado = "la condicion no se cumplio";
}
console.log(" El resultado es ", resultado);

// Condiciones ANIDADAS

if (datoA > datoB){
    resultado = 'LA condicion se cumplio';
    if (datoC < datoB){
        resultado = "Evaluacion anidada cerdadera";
    }
}else{
    resultado = 'No se cumplio la evaluacion';
}

console.log("El resultado de la evalcion anidad es: ", resultado)
// SWITCH
var edad = 30;
var resultado = '';

switch (edad) {
    case 10:
        resultado = "la edad es 10";
        break;
    case 20:
        resultado = "La edad es de 20";
        break;
    default:
        resultado = 'Ningun caso coicide';
        break;
}

var producto = 'TV';
switch (producto) {
    case "TV":
        resultado = "Se eñogop eñ Radio";
        break;
    case "Radio":
        resultado = "Se eligio la TV";
        break;
    default:
        resultado = 'Ningun caso coicide';
        break;
}

//--------------------------------------------------------
//      Ciclios / LOOP / TERACIONES
//--------------------------------------------------------

// 2 Tipos: Definidos e indefinidos
// Definidos: FOR
// Indefinidos: Ciclo WHILE y CIclo FOR

var productos = 5;

for (let contador = 0; contador > productos; contador++){
    console.log("Producto #"+ contador);
    debugger; // Trabajar directamente en el navegador, para revisar cada paso
}

while (producto > 0) {
    console.log('Producto vendido');
    productos--;
    debugger;
}
var productos = 5;

do {
    console.log("Producto vendido");
    productos--;
    debugger;
} while (productos >= 1)
//break | continue

var contador = 5;
var cuenta  = 0;

for(contador = 0; contador <= 20; contador++){
    if (contador == 5){
        break;
    }
    if (contador % 2 == 0){
        continue;
    }
    cuenta++;
    debugger
}

console.log("Hay"+ cuenta +" Numeros impares");
//--------------------------------------------------------
//      Funciones
//--------------------------------------------------------
// Estructura básica de una función / Metodo

function saludar(){
    var saludo = "hola mundo";
    //console.log(saludo)
    return saludo;
    
}

saludar();

// Parametros de una funcion

function saludar(nombre, edad){
    console.log("Hola:", nombre);
    console.log("edad:", edad);
    var resultado = nombre + " tiene "+ edad + " años";
    return resultado;
   
}

var mensaje = saludar("yacafx", 34);

console.log(mensaje);
// Iniciacion de parametros

function contar(cantidad = 20){
    console.log("Total: ", cantidad);

}
contar(100);

// JS: parametros preinicializados < parametros de entrada

// Parametros REST
// Viene del El RESTO DE 
// ...VARIABLE(almacena las variables que se valln agregando posteriormente[arroz, tomarte ...])

function cocinar(ingrediente1, ingrediente2,...masIngredientes){
    console.log('Ingrediente1: ', ingrediente1);
    console.log('Ingrediente2', ingrediente2); 
    console.log('masIngrediemtes', masIngredientes); 
}
function cocinar1(...masIngredientes){
    console.log('masIngredientes', masIngredientes);
}

cocinar('pollo', 'tomate', 'arroz', 'frijoles',' pescado');
cocinar1('pollo', 'tomate', 'arroz', 'frijoles',' pescado');

//Parametros SPREAD
//No se necesita declararlos [...IngredientesBASE], envia n cantidad de parametros
// ...otros > rest

function cocinar3(ingredientes1, ingredientes2, ingredientes3, ...otros){
    console.log('Ingredientes1', ingredientes1);
    console.log('Ingredientes2', ingredientes2);
    console.log('Ingredientes3', ingredientes3);
    console.log('Otros', otros);


}
var ingredientesBase = ["Pollo", "Tomate"];
cocinar3(...ingredientesBase, "Arroz");
//"use strict" no use

//Funcion ANONIMA

//Forma 1
(
    // NO LLEVA NOMBRE      
    function(){
        var mensaje = 'Hola de nuevo';
        console.log(mensaje);
    }
)()

//Forma 2
var saludar2 = function(nombre){
    var mensaje = 'Hola de nuevo' + nombre;
    return mensaje;
}
// callbacks
//se utiliza mucho en jquery

function calculador(datoA, datoB, sumarCB, restarCB){
    var suma = datoA + datoB;
    var resta = datoA - datoB;

    sumarCB(suma);
    restarCB(resta);
}

// calculador(d1, d2,function1, function2)

calculador(2, 3, /*MATCH*/function(resultado){
    console.log('Suma', resultado);
},function (resultado){
    console.log('Resta', resultado)
})

// Funcion ARROW | fat Arrow | Lambda | funciones flechas
// Otras formas de hacer Funciones anonimas '=>'

// forma 1
var saludar5 = nombre => "Hola "  + nombre;
console.log(saludar5("susana"));

// forma 2
var sumar = cantidad => cantidad+10;
console.log(sumar(10));

// forma 3
var calcular = (datoA, datoB) => datoA+datoB;
console.log(calcular(10, 15));

// forma 4
var generar = (datoA, datoB) => {
    var datoC = 5
    return datoA+datoB+datoC;
}

// forma 5
var validar = () => {
    return 'Validacion correcta';
}
console.log(validar());

// objeto de referencia operador THIS   
//  IMPORTANTE: simpre poner el <script> al final para saber que todos los elementos que existen en html


// DICIDIR SI USAR DUNCIONES ANONIMAS TRADICIONALES O DE TIPO ARROW FUNCTION
const boton = document.querySelector('.boton'); // ligar con el boton

//TIPO TRADICIONAL
/*
boton.addEventListener('click', function(){ // escuchar el boton
    console.log(this.innerHTML);    //this te trae el elemento div... 
                                    //innerHTML trae su contenido
})
*/

// TIPO ARROW
//acceso a la ventana completa
boton.addEventListener('click', () => {
    console.log(this)
    this.location = "http://www.google.com"; // la ventaja es que podemos aceder desde cualquier punto ej: google
}) 
 
// Eventos mouse
//click: click en el elemento
var boton = document.querySelector('.boton'); 

boton.addEventListener('click', () => {
    console.log('El boton se ha pulsado')
}) 

//mouseover: encima del elemento
boton.addEventListener('mouseover', function(){
    console.log('El mouse esta sobre el boton');
})

//mouseout : fuera del elemento
boton.addEventListener('mouseout', function(){
    console.log('El mouse esat fuer del boton')
})
 

// Eventos teclado
//  keydown 
//  keypress
//  keyup

//windows es cualquier elemento del sistemas
window.addEventListener('keydown', function(event){
    console.log('Pulsando tecla');
    console.log(String.fromCharCode(event.keyCode));
    // event.keycoode retorna el codigo de la tecle
    // String.formChatCode() retorna el valor String de ese codigo
})

window.addEventListener('keypress', function(event){
    console.log('tecla pulsada');
})

window.addEventListener('keyup', function(event){
    console.log('tecla liberada');
})

// carga de Documento
// primero cargar y luego interactuar

window.addEventListener('load', function(event){ // escuchar cuando los elementos los elementos sean cargados 'load'
    console.log('EL contenido de la venta se ha cargado');

    
});

// Eventos multimedia
// play
// seeking
// ended
const video = document.querySelector('.bostonVideo');

video.addEventListener("play", function(){
    console.log('El video ha iniciado');
});

video.addEventListener("seeking", function(){
    console.log('Se esta buscando en el video',this.currentTime/*Retornar el tiempo donde se esta desplazando en el video*/);
});

video.addEventListener("ended", function(){
    console.log('El video a terminado');
});


// Temporizadores o timers
// 2 tipos
// serInterval: realiza una tarea cada sierto tiempo para simpre, hasta que yo lo detenga
// setTimeout: ejecuta una accion que resalizara una sola vez

// var temporizador = setInterval(function(){
//     setColor();
// }, 2000/*en miliseconds*/ );


setTimeout(function(){
    setColor();
}, 3000/*en miliseconds*/ );

// setInterval(function(){
//     setColor();
// }, 3000/*en miliseconds*/ );

function setColor(){
    var pagina = document.body
    pagina.style.background = pagina.style.background == "blue" ? "green" : "blue"
}

function stopChangeColor(){
    clearInterval(temporizador)
}

// ventana de alerta
// SOlo usarlo en casos muy urgentes alert()

const video = document.querySelector('.bostonVideo');

video.addEventListener("ended", function(){
    alert('Message\nEl video a terminado')// puedes usar saltos de lineas \n
   
});


// ventana de confirmacion
// otro tipo de alerta

const video = document.querySelector('.bostonVideo');

video.addEventListener("ended", function(){
   let resultado = confirm("¿Desea ver el video nuevamente?");
   console.log(resultado);
    // podemos almacenar del valor booleano de resultado para hacer acciones
   if(resultado){
       video.play();
   }else{
       window.location = "http://www.google.com"
   }
});

// ventana para ingreso de datos

const video = document.querySelector('.bostonVideo');

video.addEventListener("ended", function(){
   let email = prompt("Escribe tu correo para ver mas videos", "name@mail.com")// text / 
   if (email == null || email == ""){
       console.log("Sin datos"); // email = null
   }else{
       console.log(email);// email =! null
   }
});
//--------------------------------------------------------
//      Propiedades Numericas
//--------------------------------------------------------
// propiedades Numericas
// NUMBER (ramas)
console.log("MAX_VALUE: ", Number.MAX_VALUE);

console.log("MIN_VALUE: ", Number.MIN_VALUE);

console.log("NEGATIVE_INFINITY: ", Number.NEGATIVE_INFINITY)

console.log("POSITIVE_INFINITY ", Number.POSITIVE_INFINITY)

console.log("NaN: ", Number.NaN);// Not a Number, sirve para saber si es un numero

//  Metodos Numericos
var numero = "10.30";
// a todos les puedes poner Number.name()

//console.log('Number: ',typeof numero, Number(numero)); // saber que tipo
console.log('Number: ',typeof numero, typeof Number(numero)); // convertir el "Tipo" de variable
console.log('parseInt: ', parseInt(numero));
console.log('parseFloat: ', parseFloat(numero));
console.log('isNaN: ', isNaN(numero));
console.log('isInteger: ', Number.isInteger(numero)); // es entero

// Propiedades numericos de instancias
var numero = 2.5;

console.log('toExponential: ', numero.toExponential(4)); // retorno n exponencial con (4) digitos despues de la coma

console.log('toFixed: ', numero.toFixed());// redondea

console.log('toPrecision: ', numero.toPrecision()); // valor exacto

console.log('toString: ', numero.toString()); // transforma string
//console.log('toString: ', numero.toString()); // retorna que tipo de valor es

//--------------------------------------------------------
//      Cadenas de Texto
//--------------------------------------------------------
//Creacion de cadenas de texto

var pais = 'Mexico';

var comida = new String('Ceviche');

var cena = new String("Asado");

//medir una cadena de texto
var mensaje = "A";
//.length sirve para retonar valor del contenido == len()
console.log('La cadena de tezto tiene: '+ mensaje.length +' letras');


//  Metodos de busqueda | Parte 1

var mensaje = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";

var resultado, resultado2, resultado3, resultado4;
// si cualquiera retorna un -1 es porque no la encontro

//indexOf (busca la primera posicion en la que se encuentra la palabra)
resultado = mensaje.indexOf("aprendiendo");

//lastIndexOf (retorna la ultima siliba)
resultado2 = mensaje.lastIndexOf('aprendiendo');

//search
resultado3 = mensaje.search('aprendiendo');

//search | Expresion regular(buscar una parte del texto);
// 'i' es in case insencitive
resultado4 = mensaje.search(/ja/i);

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);

var mensaje = "Estoy aprendiendo JavaScript y estoy Aprendiendo mucho";

var resultado, resultado2, resultado3, resultado4;


//  match
// 'g' es gloaabal: busca en todo el texto
resultado = mensaje.match(/aprendiendo/gi);

//substr: retorna el pedazo de texto introduciendo su index and last index
resultado2 = mensaje.substr(6, 11);

//  substring: mismo que substr. la diferencia es que la ultima lastIndex se cuenta desde el principio
resultado3 = mensaje.substring(6, 17);

//  chatAt: cuenta sus indices
resultado4 = mensaje.charAt(0);

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);


//  Busquedas especifivas de texto

var mensaje = "Estoy aprendiendo JavaScript";

var resultado, resultado2, resultado3;


//  startwith (comienza con) la cadena de texto
//buscar desde el principio
//resultado = mensaje.startsWith('Es');

//buscar desde un index especifico
var textoEn = mensaje.indexOf('JavaScript')
resultado = mensaje.startsWith('Ja', textoEn)

//  endWith
resultado2 = mensaje.endsWith('JavaScript');

//  includes(palabra, buscar a partir de index n)
resultado3 = mensaje.includes('Estoy', 7);


console.log(resultado);
console.log(resultado2);
console.log(resultado3);

//  Metodos de generacion, reemplazo y separacion
var mensaje = "Estoy aprendiendo JavaScript";
var mensajeTrim = "                 Estoy aprendiendo JavaScript       ";

var resultado, resultado2, resultado3, resultado4, resultado5;

//  repeat()
resultado = mensaje.repeat(4);

//  replace(actual word, new word)
resultado2 = mensaje.replace("JavaScript", "a programar");

//  slice() empieza a leer desde el n indice
// resultado3 = mensaje.slice(6);
// retorna el INTERVALO entre sus 2 valores
resultado3 = mensaje.slice(6, mensaje.length-6)

//  split() genera un arreglo con el valor de mensaje
resultado4 = mensaje.split();

//  trim() busqueda de texto con entorno modificado
resultado5 = mensajeTrim.trim();

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);

//  Metodos de Transformacion

var mensaje = "Estoy aprendiendo JavaScript";
var mensaje2= "y programacion ";
var total = 123456;
var resultado, resultado2, resultado3, resultado4, resultado5;


// a string
resultado = total.toString();

//  toLoweCase() a minuscula
resultado2 = mensaje.toLowerCase();

//  toUpperCase() a mayuscula
resultado3 = mensaje.toUpperCase()

//   concat() concatena con (valor, ...., ....[n])
resultado4 = mensaje.concat(mensaje2, mensaje2, ' 123', ' 123', ' 123', ' 123');
console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);

//  Plantillas y literales
//`` backflips(comillas fuertes)
var lenguaje = 'JavaScript';
var lenguaje2 = 'HTML';
var mensaje = `Me gusta ${lenguaje} y su integracion con ${lenguaje2}`;

console.log(mensaje);

var mensajeMultilinea = `
    Hola mundo, estoy aprendiendo
    ${lenguaje} y me gusta
    fomo se integra con HTML y CSS
`;

console.log(mensajeMultilinea);

//--------------------------------------------------------
//      Arreglos
//--------------------------------------------------------
//  Arreglos
var platillos = ["ceviche", 'tacos', 'pasta'];

var bebidas = new Array('jamaica', 'chicha morada', 'pozol');

// retorna que tipo de variable es
console.log(typeof platillos, bebidas)
//retorna si es un Array o no
console.log(Array.isArray(platillos), bebidas)

// Meidr Arreglo

var platillos = ["ceviche", 'tacos', 'pasta', 'tostadas'];
console.log('Hay '+ platillos.length +' platillos en el menu');

var platillo = platillos[1];
console.log('El platillos selecciona es: ', platillo);

var platillo = platillos[platillos.length - 1];
console.log('El platillos selecciona es: ', platillo);

//  Arreglo multidimencionales
var platillos = ["ceviche", 'tacos', 'pasta', 'tostadas'];
var paises = ['peru', 'mexico', 'italia']

var menu = [platillos, paises];

console.log(menu[0][0]);

//  Operaciones básica de un arreglo

var platillos = ["ceviche", 'tacos', 'pasta', 'tostadas'];
console.log('Antes: ', platillos);

// push agrega
platillos.push("Milanesa");
console.log("Despues de puch: ", platillos);

// pop saca el ultimo elemento 
platillos.pop();
console.log("Despues de pop: ", platillos);

// join une 
var mensaje = platillos.join();
console.log(mensaje);


// Generacion de arreglo ocn split() from() y of()

// split()
var mensaje = "ceviche, tacos, pasta";
var platillos = mensaje.split(', ');
console.log(platillos);

// Array.from()
// Retorna todo el documento
//var platillosHTML = document.querySelectorAll('.platillos p');
// Retorna 
var platillosHTML = Array.from(document.querySelectorAll('.platillos p'));
var platillos2 = platillosHTML.map(platillo => platillo.textContent)
console.log(platillos2);


// Arrar.of()
var platillos3 = Array.of("ceviche, tacos, pasta")
console.log(platillos3)

// Ordenado un arreglo

var platillos = ['Ceviche','Tacos','Pasta'];
console.log('Antes: ', platillos);

// Ordena
platillos.sort();
console.log('Despues de .sort(): ', platillos)

//reverse() invierte la posicion del arreglos
platillos.reverse();
console.log('Despues de .reverse(): ', platillos)

// Ordenado un arreglo

var platillos = ['Ceviche','Tacos','Pasta', 'tostadas'];

// var platillo1 = platillos[0];
// var platillo2 = platillos[1];
// var platillo3 = platillos[2];

// estructurar cada una
// var platillo1 = null;
// var platillo2 = null;
// var platillo3 = null;
// var platillo4 = null;

//
var [platillo1, platillo2, platillo3, platillo4] = platillos
console.log(platillo1, platillo2, platillo3, platillo4);

//--------------------------------------------------------
//      Busquedas de Arreglos
//--------------------------------------------------------
// for....in

// Iterando arreglos
// iterando como si fuera python

var platillos = ['Ceviche','Tacos','Pasta', 'tostadas'];

for (let platillo in platillos) {
    console.log(platillos[platillo]);
    
}

// Iterando arreglos con forEach
// iterando como si fuera python

var platillos = ['Ceviche','Tacos','Pasta', 'tostadas'];


// platillos.forEach(platillo => console.log(platillo));

// /primero el dato, despues el indice
platillos.forEach((platillo, index) => console.log(index, platillo));

// Buscando en un Arreglo
// Metodo Find: Iterar sobreun arreglo sin necesidad de utilizar un ciclo Y recuperar informacion

// Ej.1
var platillos = ['Ceviche','Tacos','Pasta', 'tostadas'];
var pElegido1 = platillos.find(platillo => platillo == "Pasta");

// Ej.2
var menu = [
    {nombre: 'ceviche', presio: 20, pais: 'Peru'},
    {nombre: 'Tacos', presio: 10, pais: 'Mexico'},
    {nombre: 'Pasta', presio: 50, pais: 'Italia'}
];

var pElegido2 = menu.find(platillo => platillo.nombre == 'Tacos');

console.log(pElegido1);
console.log(pElegido2);

// Busqueda de indice de elementos
//findIndex()
var platillos = ['Ceviche','Tacos','Pasta', 'tostadas'];
var menu = [{
        nombre: 'ceviche',
        presio: 20,
        pais: 'Peru'
    },
    {
        nombre: 'Tacos',
        presio: 10, 
        pais: 'Mexico'
    },
    {
        nombre: 'Pasta', 
        presio: 50, 
        pais: 'Italia'
    }
];

// var numPlatillo = platillos.findIndex( platillo => platillo == 'tacos');

var numPlatillo = platillos.findIndex( platillo => platillo == 'Pasta');

console.log("Platillo número: ", numPlatillo);

// Busqueda de indice de elementos
//.filter() busca en caso de que alla mas de una opcion
var platillos = ['Ceviche','Tacos','Pasta', 'tostadas'];
var menu = [{
        nombre: 'ceviche',
        presio: 20,
        pais: 'Peru'
    },
    {
        nombre: 'Tacos',
        presio: 10, 
        pais: 'Mexico'
    },
    {
        nombre: 'Pasta', 
        presio: 50, 
        pais: 'Italia'
    },
    {
        nombre: 'Quesadillas',
        presio: 10, 
        pais: 'Mexico'
    }
];

// var numPlatillo = platillos.findIndex( platillo => platillo == 'tacos');

var resultado = menu.filter( platillo => platillo.pais == 'Mexico');

console.log("Platillo número: ", resultado);

//  Validacion de elementos de un arreglo

var platillos = ['Ceviche','Tacos','Pasta', 'tostadas'];
var menu = [{
        nombre: 'ceviche',
        presio: 20,
        pais: 'Peru'
    },
    {
        nombre: 'Tacos',
        presio: 10, 
        pais: 'Mexico'
    },
    {
        nombre: 'Pasta', 
        presio: 50, 
        pais: 'Italia'
    },
    {
        nombre: 'Quesadillas',
        presio: 10, 
        pais: 'Mexico'
    }
];

//Usar.some() para retornar true/false 
//var resultado = menu.some(platillo => platillo.presio < 3);
console.log("Hay Platillo abajo de 20 ", resultado);

//Usar .every() para todos los elementos de un arreglo
var resultado = menu.every(platillo => platillo.presio < 10);

console.log("Todos los platillos valen menos de 10 ", resultado);
//--------------------------------------------------------
//      Conociendo el DOM y BOM
//--------------------------------------------------------

// DOM:Documento Object Model
//Interaccion con otros elementos

//BOM: Browser Objtect Model
//Contonedeor

var boton = document.getElementById("boton");
boton.addEventListener('click', function(){
    //BOM
    console.log(window.location.href);
    window.location.href = "https://github.com/DrKLO/Telegram"

});


//  DOM 
var boton = document.getElementById('boton');

//llamar por su nombre de etiqueta
var todosLosParrafos = document.getElementsByTagName('p');
//lamar por su clase y [n] posicion
var parrafoPorClase = document.getElementsByClassName('principal')[0].textContent;
boton.addEventListener('click', function(){
    boton.style.backgroundColor = "green";
    boton.style.color = 'white';
    boton.style.width = '200px';
});

//Crea un elemento HTML
var foto = document.createElement('img');
foto.src = 'https://www.planetacurioso.com/wp-content/uploads/2016/03/fotos-extremas-2.jpg';
foto.name = 'foto1';
foto.width = 400;
document.body.appendChild(foto);

foto.addEventListener('click', function(){
    if (this.name == 'foto1'){
        this.src = 'https://2.bp.blogspot.com/-3d92ta4_JEc/TvmzTTgNBKI/AAAAAAAACJ4/GFC9bCwM5vQ/s1600/imagenes-jpg-712861.jpg';
        this.name = 'foto2';
    }else{
        this.src = 'https://www.planetacurioso.com/wp-content/uploads/2016/03/fotos-extremas-2.jpg';
        this.name = 'foto1';
    }      
});

//  BOM 
var boton = document.getElementById('boton');
var principal = document.getElementsByClassName('principal')[0];

console.log('InnerHeight: ', window.innerHeight); 
console.log('InnerWidth: ', window.innerWidth);
// se puede usar sin windows., but usalo para tener certeza

//  >> Aplication >> Local Storaje (almacenar valores en el navegador)
//  .setItem('campo', 'contenido')
localStorage.setItem('contenido', 'codigo y cafe son una buena combiancion');

boton.addEventListener('click', function(){
    var contenido = localStorage.getItem('contenido');
    principal.innerHTML = contenido;

    //recorrer en el historial de navegacion
    window.history.forward();
    window.history.back();
    window.history.go();

});

//--------------------------------------------------------
//     Datos Remotos y externos
//--------------------------------------------------------
// obteniedo datos remotos con fetch


//API mecanismo para consumir sus servicios(spotify, youtube)
var boton = document.getElementById('botonFetch');
var contenedor = document.getElementById('contenedor');
var posts = null;

boton.addEventListener('click', function(){

    // trabaja con promesas
    fetch('http://jsonplaceholder.typicode.com/posts')// retorna la url de todos los datos
    .then(data => data.json())
    .then(data => {
        posts = data;
        mostrarDatos(posts);
    })

});

// muestra en la web los datos del link de fetch
function mostrarDatos(posts){
    posts.map((post, i) => {
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + ' - '+ post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    });
}

// Trabajando con promesas y errores
//API mecanismo para consumir sus servicios(spotify, youtube)
var boton = document.getElementById('botonFetch');
var mensajes = document.getElementById('mensajes');
var contenedor = document.getElementById('contenedor');
var contBanderas = document.getElementById('banderas');

boton.addEventListener('click', function(){
    getPosts().then(data => data.json())// siempre convertirlos en archivos de json
    .then(posts => {
        mostrarDatos(posts);
        return getCountries();
    })
    .then(data => data.json())
    .then(countries => {
        mostrarBanderas(countries);
    })
    // .catch() va a tratar todos los errores 
    .catch(error => {
        //toggle() remueve el atributo .hide
        mensajes.classList.toggle('hide');
        mensajes.innerHTML = error;
        setTimeout(() => mensajes.classList.toggle('hide'),{
            
        }, 6000);

    })

    
    
});

function getPosts(){
    return fetch('http://jsonplaceholder.typicode.com/posts');
}
function getCountries(){
    return fetch('https://restcountries.com');
}

function mostrarBanderas(countries){
    contBanderas.innerHTML = '';
    countries.map((country, i) => {
        let bandera = document.createElement('img');
        bandera.src = country.flag;
        bandera.width = '20';
        bandera.height = '20';
        contBanderas.appendChild(bandera);
    });
}
function mostrarDatos(posts){
    posts.map((post, i) => {
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + ' - '+ post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    });
}

//--------------------------------------------------------
//     Datos Remotos y externos
//--------------------------------------------------------
//trabajando con Clases

//Forma Pupular
class Pantalla{
    constructor(){

    }
}

// Instancias
const tvSala = new Pantalla('Master', 'Oasis', 55);
const twHabitacion = new Pantalla('Origin', 'Artemis', 80);

// Forma de JS

// function Pantalla(marca, modelo, pulgadas){
//     this.marca = marca;
//     this.modelo = modelo;
//     this.pulgada = pulgadas;

// }

// Pantalla.prototype.encendido = function(){
//     console.log(`La pantalla ${this.marca} se ha encendido`);
// }

// Pantalla.prototype.encendido = function(){
//     console.log(`El volumen se ha modificado`);
// }

// Pantalla.prototype.encendido = function(){
//     console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas}`);
// }

// const tvSala = new Pantalla('Master', 'Oasis', 55);
// const twHabitacion = new Pantalla('Origin', 'Artemis', 80);


// Objetos, sus métodos(cosas puede hacer) y sus propiedades(color de piel, peso)
//Forma Pupular
class Pantalla{
    constructor(marca, modelo, pulgadas){
        //propiedades
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }
    //metodos
    encendido(){
        console.log(`La pantalla ${this.marca} se ha encendido`);
    }
    volumen(){
        console.log(`El volumen se ha modificado`);
    }
    info(){
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas}`);
    }
    // set y ge sirve para generar mas propiedades
    // set define un dato para enviar un dato nuevo
    set peso(value){
        this.kgs = value.trim();
    }
    // get retorn el valor enviado
    get peso(){
        return this.kgs;
    }
}

// Instancias
const tvSala = new Pantalla('Master', 'Oasis', 55);
const tvHabitacion = new Pantalla('Origin', 'Artemis', 80);

// Herencia de metodos y propiedades
// EJ: API que controla los productos de un supermercado

class Producto{
    constructor(numSerie){
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;
        
    }
    //Propiedades Estaticas
    // static permite que infoTienda() este disponible sin importar aunque no iniciemos una instancia o new 
    static get infoTienda(){
        console.log('Productos de la tienda Patito Inc');
    }
    set garantia(value){
        this.tiempoGarantia -= value;
    }
    get garantia(){
        return this.tiempoGarantia;
    }
}

// extendes significa que es una extension de Pantalla (Producto = padre, Pantalla = hijo)
class Pantalla extends Producto{
    constructor(numSerie, marca, modelo, pulgadas){
        // super trae los elementos de padre constructor
        super(numSerie);
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }
    encendido(){
        console.log(`La pantalla ${this.marca} se ha encendido`);
        this.garantia = 1;
    }
    volumen(){
        console.log(`El volumen se ha modificado`);
    }
    info(){
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas}`);
    }

    set peso(value){
        this.kgs = value.trim();
    }

    get peso(){
        return this.kgs;
    }
}

// Instancias
const tvSala = new Pantalla('13579','Master', 'Oasis', 55);
const tvHabitacion = new Pantalla('2468','Origin', 'Artemis', 80);

//--------------------------------------------------------
//     Datos Remotos y externos
//--------------------------------------------------------
//Manejo de errores con JS

// var arrar = new Array(1000000000000000000);

try{
    //Codigo que se ejecuta para saber si funciona
    // var arrar = new Array(1000000000000000000);
    // var x = y;

    // Metodo nativo (decode URIcomponent)
    decodeURIComponent('http://%ominio.com');
}catch(error){
    //SI captura algun error lo captura el catch

    // muestra de forma de texto el error
    // console.log(error);

    //muestra el mensaje directo
    console.log(error.message);

    // nombre del error
    console.log(error.name);
}


//Errores personalizados

// Plaear todos los flujos de datos y errores de mi api

var valor1 = 10;
var valor2 = 20;

try{
    if (valor1 > valor2){
        console.log(`Mensaje de validacion: ${valor1} si es mayor que ${valor2}`)
    }else{
        // throw Detonar algo
        throw new Error(`${valor1} no es mayor que ${valor2 } :(`);
    }
    
}catch(error){
    
    console.log(error);
}
//--------------------------------------------------------
// Depurando/DEbuguear tu codigo


// Analisis del codigo de las clases Producto y Pantalla
// Ir a Sources
// Ver seccion Brackpoint en el buscador
// Breackpoint ejecuta hasta el lugar seleccionado en la seccion de numeros de linea en el browser 
// >>customize and control DevTools( 3 pints)   >>Hight console drawer 
// >>Watch >> input any variable that you want test
//--------------------------------------------------------