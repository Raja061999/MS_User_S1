const Product = require('../models/Product.js');


const index = async (req, res)=> {
    try {
        res.status(200).json({data: await Product.find({})});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const create = async (req, res)=> {
    try {
        console.log(req.body);
        const data = await Product.create(req.body);
        res.status(200).json({data});
    } catch (error) {
        res.status(500).json({error: error.message});  
    }
}

module.exports = {
    index,
    create
}