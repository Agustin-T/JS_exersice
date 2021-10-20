$(function testEmail(){
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
});