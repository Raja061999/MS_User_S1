const express = require('express');
const dotenv = require('dotenv');
 const dbConnection = require('./config/db.js');
const productRoutes = require("./routes/productRoutes.js");

dotenv.config();
const app = express();

dbConnection;

//middlewares
app.use(express.json())
//routes
app.use("/api/products", productRoutes);

app.listen(process.env.PORT, (res, err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Server is running on port ${process.env.PORT}`);
    }
})