const fs = require('fs')
const path = require('path')
const adminController ={
    admin: function(req,res){
        res.send('Hola admin: '+ req.query.user)
    }
}
module.exports = adminController