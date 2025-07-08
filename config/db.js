const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbConnection = mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DATABASE}`).then(
    (res)=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log(err);
})

exports.connection = dbConnection;