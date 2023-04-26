const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

//app.use



mongoose.connect('');



//app.get




app.get('/test', (req,res) =>{
res.json('test ok');

});

app.listen(3000);