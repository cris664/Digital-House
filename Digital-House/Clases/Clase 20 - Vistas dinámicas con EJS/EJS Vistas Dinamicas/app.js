const express = require('express')
const app = express()
const path = require('path')
const mainRoutes = require('./src/routes/main')


app.listen(3000,()=>{
    console.log('Servidor funcionando')
})
app.use('/',mainRoutes)
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')