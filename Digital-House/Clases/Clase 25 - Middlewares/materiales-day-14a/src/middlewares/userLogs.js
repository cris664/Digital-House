const fs = require('fs')
const path = require('path')

function userLogs(req,res,next){
    //console.log('User logged')
    fs.appendFileSync(path.join(__dirname,'../logs/userLogs.txt'),
    'El usuario ingreso a la ruta: ' + req.url + '\n')
    next()
}
module.exports = userLogs