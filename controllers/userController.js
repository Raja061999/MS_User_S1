const {User} = require("../models");


const index = async (req, res)=> {
    try {
        const user = await User.findAll();
        res.status(200).json({data: user});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const create = async (req, res)=> {
    try {
        console.log(req.body);
        const data = await User.create(req.body);
        res.status(200).json({data});
    } catch (error) {
        res.status(500).json({error: error.message});  
    }
}

module.exports = {
    index,
    create
}