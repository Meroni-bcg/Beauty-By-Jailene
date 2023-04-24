const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

//app.use



mongoose.connect('mongodb+srv://cluster0.swofsfc.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority');



//app.get




app.get('/test', (req,res) =>{
res.json('test ok');

});

app.listen(3000);