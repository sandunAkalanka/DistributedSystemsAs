const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    item_id:{
        type: Number,
        required: true,
        unique: true
    },
    item_name:{
        type: String,
        required: true
    },
    item_code:{
        type: String
        //required:true
    },
    item_description:{
        type: String
        //required:true
    },
    item_unitPrice:{
        type: Number
        //required:true
    }
});

module.exports = mongoose.model('Item',itemSchema);

/* //Alternative export    
const Item = mongoose.model('Item',itemSchema);
module.exports = Item; */