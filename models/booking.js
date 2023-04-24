const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({

    user: {type: String, required:true },
    name: { type: String, required:true },
    email: { type: String, required:true },
    phone: { type: Number, required:true },
    date: { type: Date, default: Date.now },
    //can't figure out how to input time
    time: { },
    price: { type: Number, required:true }
    },
);



module.exports = mongoose.model('Book', BookSchema);