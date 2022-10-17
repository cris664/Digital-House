const path = require('path')
let mainControllers = {
    index: (req,res) =>{
        res.sendFile(path.join(__dirname,'../views/home.html'))
    }
}
module.exports = mainControllers