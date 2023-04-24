require('dotenv').config

const express = require('express')
const mongoose = require('mongoose')

//Runs Express
const app = express()

//Middleware
app.use(() => {
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/',(req,res) => {
    res.json({message: 'Welcome to the app'})
})

//connect to db
mongoose.connect((process.env.MONGO_URI))
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on PORT', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

process.env

/*Listens To Port
app.listen(3000,() => {
    console.log('listening on PORT 3000')
})*/
