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