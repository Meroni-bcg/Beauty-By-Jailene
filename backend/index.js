require('dotenv').config

const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.json({mssg: 'Welcome to the app'})
});
app.listen(3000,() => {
    console.log('listening on PORT 3000')
})

process.env
