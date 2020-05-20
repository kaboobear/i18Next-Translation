const express = require('express');
const router = express.Router();
const Item = require('../models/item_model')


router.get('/',(req,res)=>{
    Item.find().then(data => {
        res.json(data);
    })
})

router.post('/addItem',(req,res)=>{
    const newItem = new Item({title:req.body.title})
    newItem.save().then(newItem => {
        res.json(newItem);
    })
})

router.post('/deleteItem',(req,res)=>{
    Item.findByIdAndDelete(req.body.id).then(deletedElem =>{
        res.json(deletedElem);
    })
})

module.exports = router;




