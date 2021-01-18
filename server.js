const express = require ("express");
const mongoose = require ("mongoose"); 
require ("dotenv").config()
const app= express()
const PORT= process.env.PORT || 8080; 

//middleware 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

//connection 
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true,
    useFindAndModify: false}  )

//models    

// routes 




app.listen(PORT, ()=>{
    console.log(`app is running on http://localhost:${PORT}`);
})


