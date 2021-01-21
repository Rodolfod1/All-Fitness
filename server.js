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
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false })

// routes 
app.use(require("./routes/apiRoutes"))
app.use(require("./routes/htmlRoutes"))

app.listen(PORT, ()=>{
    console.log(`app is running on http://localhost:${PORT}`);
})


