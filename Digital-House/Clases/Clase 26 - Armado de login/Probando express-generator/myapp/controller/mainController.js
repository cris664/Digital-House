
const mainController = {
    index:function(req,res)
    {
        res.render('index')
    },
    saludo: function(req,res)
    {
         
        req.session.name = req.body.name
        req.session.email= req.body.email
        req.session.apellido = req.body.apellido
        req.session.color = req.body.color
        req.session.age = req.body.age
        
        res.render('index',{datos: req.session})
    }
}
module.exports = mainController