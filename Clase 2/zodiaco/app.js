let persona = require("./persona");
const zodiac = require('zodiac-signs')('en');
console.log(persona[0]);
//console.log(persona+zodiac.getSignByDate({day:2,month:2}));
console.log(zodiac.getSignByDate({day:2,month:2}));