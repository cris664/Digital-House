let fs = require('fs');
let moment =require('moment');
let datos = fs.readFileSync(__dirname + "/probando.txt","utf-8");
console.log(datos);
console.log(moment().format('MMM do YYYY'));
