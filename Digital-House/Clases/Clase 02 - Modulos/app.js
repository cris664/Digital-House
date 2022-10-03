//Requiero el módulo zodiac-signs.js
//Recordar que para instalarlo en el proyecto, se debe hacer en la consola:
//npm install zodiac-signs o npm i zodiac-signs
//Tal como indica en la documentación, al requerir el módulo, se debe indicar el idioma en el que se quiere que se muestre la información
//Por ejemplo, si se quiere que se muestre en inglés, se debe hacer:
const zodiac = require('zodiac-signs')('en')
//Ahora, se debe acceder al array que contiene los datos de la persona
//Para eso debo requerir el módulo persona.js que se encuentra en la misma carpeta
//Por eso se indica la ruta relativa con un punto y barra
let persona = require('./persona')

//Sabiendo que en el array persona, el orden de los datos es: nombre, pasatiempo, ciudad, día, mes
//Usamos la posición 3 y 4 para obtener el día y el mes de nacimiento
//Tal como indica la documentación de zodiac-signs, nos provee un método para obtener el signo zodiacal
//Lo único que tenemos que hacer es llamar al método getSignByDate() y pasarle como parámetro el día y el mes en formato de objeto
//Guardamos el resultado en una variable, en este caso llamada zodiaco
let zodiaco = zodiac.getSignByDate({
    day : persona[3],
    month : persona[4]
})

//Si queremos saber el resultado de la función, podemos imprimirlo en la consola descomentando la siguiente línea
//console.log(zodiaco)
//Notemos que el resultado es un objeto con muchas propiedades, pero en este caso, solo nos interesa la propiedad name
//Para acceder a la propiedad name, se debe usar la sintaxis: zodiaco.name

//Ahora concatenamos todos los datos para formar una frase coherente
console.log("Hola, mi nombre es " + persona[0] + ", me gusta " + persona[1] + ", vivo en " + persona[2] + " y mi signo zodiacal es " + zodiaco.name)