
let cristian = require("./cristian_liu");
const zodiac = require('zodiac-signs')('es-US');
let zodiaco = zodiac.getSignByDate({ 
    day: cristian[3],
    month: cristian[4]
});

console.log("Hola, soy "+ cristian[0] +", disfruto " + cristian[1] + "  ,soy de " + cristian[2]+ " y mi signo es " + zodiaco.name);
