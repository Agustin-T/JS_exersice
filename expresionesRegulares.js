 'use strick'
//Test of server
console.log('hola');
//-----------------------------------------------------------
//  Conceptos Basicos de las expresiones Regulares
//-----------------------------------------------------------
// expresion regular

// var regEx = 
//objeto que permite realiza varias operacion, como robar un patron y como ejecutarlo
//usar con expresiones grandes
var expresion1 = new RegExp('abc');

//ahce lo mismo
//
var expresion2 = /abc/;

//usar con expresiones cortas
var parrafo = /text1\/n text2/;
//-----------------------------------------------------------
// Evaluacion de primeras expresiones
// ejemplo 1

var expresion1 = new RegExp('abc');
// test() retorna true si encuentra lo que esta entre parentesis, (patron)
console.log(expresion1.test('abcdef'));


// ejemplo 2
var expresion2 = /hola mundo/;
console.log(expresion2.test('El primer programa es hola mundo'));
//-----------------------------------------------------------
// Evaluar un conjunto de caracteres con expresiones regulares;
var expresion1 = /[0123456789]/;

// busca si almenos existe en expresion true
//no hace falta que sea exacto
console.log(expresion1.test('Sucesio en 1996'));

var expresion2 = /[0-9a-zA-Z]/;// 0 hasta el 9, a hasta z y A hasta Z
console.log(expresion2.test('Sucesio en 1996'));

var expresion3 = /@/;
console.log(expresion3.test('Error'));// False
console.log(expresion3.test('name@mail.com'));// True
//-----------------------------------------------------------
//  Uso de ayajos para grupos de caracteres

/*
\d  Cualquier numero
\w  Cualquier letra o número
\s  CUalquier espacio en blanco incluido tabs, salto de linea o similares
\D  Cualquier caracter que no sea un numero
\W  cualquier caracter que no sea un espacio en blanco
\S  Cualquier caracter que no sea un espacio en blanco
.   Cualquier caracter excepto nuevas lineas
*/

var expresion1 = /\d\d-\d\d-\d\d\d\d/;

console.log(expresion1.test('29-06-2007'));// true
console.log(expresion1.test('29-jun-2007'));// false

//29-06-2007

//-----------------------------------------------------------
// Coincidencias y negaciones de expresiones
// var expresion1 = /[\d]/;

// console.log(expresion1.test('20-jun-2007'));

// ^ = alt +94
// ^ signigica negacion
var expresion2 = /[^01]/;

console.log(expresion2.test('10101001100110001'));// false
console.log(expresion2.test('10101001200110001'));// True

//-----------------------------------------------------------
//  Trabajar con caracteres especiales para repetir patrones

var expresion1 = /\d/;

console.log(expresion1.test('1997'));

// + (1 o mas veces),* (1 o mas veces sin importar si existe)

var expresion2 = /\d+/;

console.log(expresion2.test('')); // false:porque por lo menos no hay una repeticion
var expresion3 = /\d*/;

console.log(expresion3.test('')); //True

//-----------------------------------------------------------
//  Patrones opcionales en la expresiones regulares

var expresion1 = /Hola mundo/;

console.log(expresion1.test('Hola mundo'))
var expresion2 = /Hola mun?do/;

console.log(expresion2.test('Hola mundo'))

var expresion3 = /Hola mun?do/;

console.log(expresion3.test('Hola mudo'))

// en todas dan true ya que da la posibilidad que exista o no, por lo cual "perdona" esos sucesos.


//-----------------------------------------------------------
//  Conteo de patrones de expresiones regulares


// {minimo, maximo} de 1 a dos digitos
var expresion1 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;

console.log(expresion1.test('27-6-2007 11:45'))// true

//-----------------------------------------------------------
//  Saber y Agrupar los patrones segun tipos y funciones
//-----------------------------------------------------------
// Patrones no sensibles a mayusculas y minusculas
// incencible a mayusculas
var expresion1 = /Hola Mundo/i;

// ocupar un identificador para que no tenga 

console.log(expresion1.test('Hola mundo'));

//-----------------------------------------------------------
//patrones en subexpresiones

// + es uno a mas repeticiones
//() subexpresiones
var expresion1 = /Woo+(hoo+)+/i;

// Woohooooooooo!
console.log(expresion1.test('Woohooooohooooohooooohooooo'));

//-----------------------------------------------------------
//  exec y match
// both them work with the same objetive: return a object about what index makes what is demanded 
// desde la variable
var expresion1 = /\d+/.exec('Del año 1984');
console.log(expresion1);

// in console.log
console.log('Hasta 1994'.match(/\d+/))

//-----------------------------------------------------------
//  Estructura y orden de expresiones regulares
//-----------------------------------------------------------
//  Limitar palabras y cadenas de texto en una expresion regular

//\b sirve para poner un limite

var expresion1 = /\bcat\b/;
var expresion2 = /\bcat\b/;

console.log(expresion1.test('cat'));// True
console.log(expresion2.test('categoria'));// False


//-----------------------------------------------------------   
//  Uso de patrones opcionales en tue expresiones regulares 
// "|" significa alternativa (OR)

var expresion1 = /pollo/;
var expresion2 = /pollo|res|pescado/;
var expresion3 = /pollo|res|pescado/;
console.log(expresion1);
console.log(expresion2);
console.log(expresion3);

console.log(expresion1.test('El cliente pidio pollo'));// True
console.log(expresion2.test('El cliente pidio pescado'));// True
console.log(expresion2.test('El cliente pidio tacos'));//False


//-----------------------------------------------------------
//  Patrones al incio y al final de una expresion

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


//-----------------------------------------------------------
//  Mayor provecho a tus expresiones regulares
//-----------------------------------------------------------
//  Conoce y usar el metodo Replace en las cadenas de texto

// .replace() remplaza caracter o strings en una variable
var mensaje = 'EL cliente pidio sushi y comio su sushi';

console.log(mensaje);
// /g busca globalmente| /g seach globaly
console.log(mensaje.replace(/sushi/g, 'tacos'));

var mensaje2 = 'EL cliente pidio sushi y comio su sushi,sushi, sushi, sushi';
console.log(mensaje2.replace(/i/g, 'o'));

// se pude boundaries, subexpresiones, univerosos o bloques de texto

//-----------------------------------------------------------
//  Metodo de busqueda en las cadenas de texto

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

//-----------------------------------------------------------
//  La propiedad LastIndex en expresiones regulares

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

//-----------------------------------------------------------
//  ciclos  y evaluaciones en la expresiones regulares

var mensaje = 'Llegaban por montones, primero 10, despues 20, despues 35 y se duplicaban hasta llegar a 1000';

//encontrar un patron un numero repetitivo de manera global
var patron = /\b(\d+)\b/g;

// donde guardaremos le evaluacion
var match;

while(match = patron.exec(mensaje)){
    console.log(match);
    console.log('Se encontro',match[1], ' en ', match.index);
}

//-----------------------------------------------------------
//  Usos comunes
//-----------------------------------------------------------
//  Patrones de correo electronico

// tools.left.org/html/rfc5322
// www.regular-expressions.ingo/email.htmls

// not work, see later
/*
$(function (){
    
})
*/

function testEmail(){
    var contacForm = document.getElementById('contactForm');

    contacForm.onsubmit = function(e){
        e.preventDefault();

        //console.log('El boton ha sido pulsado');
        console.log('El correo es valido?', isValidEmail());
    }

    var isValidEmail = function(){
        var email = document.getElementById('email');
        // ^ al inicio
        // W cualquier tipo de letra
        // + uno o mas repeticiones
        
        // \.\+\-] si hay un simbolo
        // \? puede o no existir
        // ()* puede estar una o mas veces
        return /^\w+([\.\+\-]?\w+)*@([\.-]?w+)*(\.\w{2,4})+$/.test(email.value);
    }
};

//-----------------------------------------------------------
//  Validacion de Twitter user

function testEmail(){
    var contacForm = document.getElementById('contactForm');

    contacForm.onsubmit = function(e){
        e.preventDefault();

        console.log('El correo es valido?', isValidEmail());
    }

    var isValidEmail = function(){
        var twitter = document.getElementById('email');
        // in the input: @tomas / tomas
        return /^@?(\w+)$/.test(twitter.value);
    }
};

//-----------------------------------------------------------
//  Expresiones Regulares

function otherCases(){
    var contactForm = document.getElementById('contactForm');

    contactForm.onsubmit = function (e) {
        e.preventDefault();

        console.log('¿La URL es válida?', isValidUrl());
    }

    /**
     * URL/Dirección web válida
     */
    var isValidUrl = function () {
        var url = document.getElementById('url');
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?$/.test(url.value)
    }

    /**
     * Contraseña segura
     * Contraseñas con al menos una letra mayúscula.
     * Contraseñas con al menos una letra minúscula.
     * Contraseñas con al menos un número o caracter especial.
     * Contraseñas con mínimo 8 caracteres.
     **/
    var isValidPass = function () {
        var pass = document.getElementById('pass');
        return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(pass.value)
    }

    /**
     * Teléfonos en el mundo
     * https://en.wikipedia.org/wiki/List_of_country_calling_codes
     */
    var isValidPhone = function () {
        var phone = document.getElementById('phone');
        return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(phone.value)
    }

    /**
     * Tarjetas de credito
     */
    var isValidCreditCard = function () {
        var phone = document.getElementById('phone');
        return /^((67\d{2})|(4\d{3})|(5[1-5]\d{2})|(6011))(-?\s?\d{4}){3}|(3[4,7])\ d{2}-?\s?\d{6}-?\s?\d{5}$/.test(phone.value)
    }

    /**
     * Código postal
     */
    var isValidPostalCode = function () {
        var phone = document.getElementById('phone');
        return /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/.test(phone.value)
    }

    /**
     * Nombres de usuario
     * Mínimo 6 caracteres
     * Máximo 30 caracteres
     */
    var isValidUserName = function () {
        var phone = document.getElementById('phone');
        return /^[a-z\d_]{6,30}$/i.test(phone.value)
    }

};

//-----------------------------------------------------------
//  Consideraciones Finales