const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require("./routes/userRoutes.js");

dotenv.config();
const app = express();


//middlewares
app.use(express.json())

//routes
app.use("/api/users", userRoutes);

app.listen(process.env.PORT, (res, err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Server is running on port ${process.env.PORT}`);
    }
})