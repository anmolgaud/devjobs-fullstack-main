const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors");
const multer = require('multer');


//Route handlers
const authRoutes = require('./Routes/auth');
const jobRoutes  = require('./Routes/jobs');
const adminRoutes = require('./Routes/admin')

require("dotenv").config();
const app = express();

//multer configuration
const storage = multer.diskStorage({
    destination : (req, res, cb) => {
        cb(null, './public/logos');
    },
    filename : (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({storage});

//middlewares
app.use(cors())
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.json());


//routes
app.use('/auth', authRoutes);
app.use('/jobs', jobRoutes);
app.use('/admin', upload.single('file'), adminRoutes);

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

