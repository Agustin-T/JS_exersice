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