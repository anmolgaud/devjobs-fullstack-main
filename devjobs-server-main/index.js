const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());


const PORT = process.env.PORT || 3001;
const connectDB = (url) =>{
    return mongoose.connect(url, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    }).then(()=>console.log('connected to DB')) 
      .catch((error)=>console.log(error));
}

const start = async () => {
    try {
        await connectDB(process.env.URI);
        app.listen(() => console.log(`Server on port : ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start();