const Item = require('../models/item');

//Controller method to GET all  
exports.getAllItems = async (req,res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({error:'Failed to retrieve items'});
    }
};

exports.createItem = async (req,res) => {
    try {
        const newItem = await Item.create(req.body);
        res.status(201).json('Item created', newItem);
    } catch (error) {
        res.status(500).json({error:'Unable to create item'});
    }
};