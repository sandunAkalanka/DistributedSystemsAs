const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    order_id:{
        type: Number,
        required: true,
        unique: true
    },
    order_name:{
        type: String,
        required: true
    },
    order_deliveryAddress:{
        type: String
        //required: true
    },
    order_deliveryOption:{
        type: String
        //required: true
    },
    order_postalCode:{
        //CHECK if postalCode is Str or Num 
        type: String
        //required: true
    },
    order_phoneNumber:{
        //CHECK if postalCode is Str or Num 
        type: String
        //required: true
    },
    order_email:{
        type: String
        //required: true
    },
    order_status:{
        type: String
        //required: true
    },
    order_transaction_id:{
        type: String
        //required: true
    },
    order_delivery_charge:{
        type: Number
        //required: true
    },
    order_commission:{
        type: Number
        //required: true
    },
    //Refer the item model
    order_items: [{
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        },
        amount: Number, 
        noOfItems: Number
    }]
});

module.exports = mongoose.model('Order',orderSchema);