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