// minificar el codigo
// permite un ocdigo optimizado y mejor ejecucion
// ventaja: menor tiempo de ejecucion
// Tool: jscompress.com
// using fremework tienen minimizadores de codigo

var tienda = {
    nombre: "Tienda las 4 esquinas",
    calcular: function(costo1, costo2) {
        return costo1 + costo2;
    },
    saludar: function() {
        var mensaje = "Hola ";
        return mensaje;
    }
};

var btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener('click', function() {
    console.log(tienda.saludar());
});