const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    username:
    {
        type:String,
        required: true
    },
    description:
    {
        type:String,
        required: true
    },
    duration:
    {
        type:Number,
        required: true
    },
    date:
    {
        type:Date,
        required: true
    },
},
    {
        timestamp:true
    }
);

const ITEM = mongoose.model('item' , itemSchema);

module.exports = ITEM;