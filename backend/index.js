require('dotenv').config

const express = require('express')
const mongoose = require('mongoose')

//Runs Express
const app = express()

//Route
app.get('/', (req,res) => {
    res.json({mssg: 'Welcome to the app'})
});

//Middleware
app.use(() => {
    console.log(req.path, req.method)
    next()
})

//Listens To Port
app.listen(3000,() => {
    console.log('listening on PORT 3000')
})

process.env
