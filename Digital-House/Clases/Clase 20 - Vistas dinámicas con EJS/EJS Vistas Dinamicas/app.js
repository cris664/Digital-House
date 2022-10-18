const express = require('express')
const app = express()

const mainRoutes = require('./src/routes/main')


app.listen(3000,()=>{
    console.log('Servidor funcionando')
})
app.use('/',mainRoutes)

app.set('view engine','ejs')