const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

//app.use

const express = require('express')




const router = express.Router()

//GET all 


//GET single 
router.get('/:id',)

//POST 
router.post('/',)

//DELETE 
router.delete('/:id',)

//UPDATE 
router.patch('/:id',)

module.exports = router


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on PORT', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

//app.get
app.get('/test', (req,res) =>{
res.json('test ok');
});

