const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors");


//Route handlers
const authRoutes = require('./Routes/auth');
const jobRoutes  = require('./Routes/jobs');

require("dotenv").config();
const app = express();


//middlewares
app.use(cors())
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.json());


//routes
app.use('/auth', authRoutes);;
app.use('/jobs', jobRoutes);

const PORT = process.env.PORT || 3001;
const connectDB = (url) =>{
    return mongoose.connect(url, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    }).then(()=>console.log('connected to DB')) 
      .catch((error)=>console.log(error))
}



const start = async ()=>{
    try {
        await connectDB(process.env.URI);
        app.listen(PORT, () => console.log(`Server Port : ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();

