const usuariosPermitidos = ['ada','greta','vim','tim']
const checkUser = function(req,res,next){
    if(usuariosPermitidos.includes(req.query.user.toLowerCase())){
        next()
    }else{
        res.send('NO tienes los permisos para ingresar')
    }
}
module.exports = checkUser