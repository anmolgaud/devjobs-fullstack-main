const express = require('express')
const fileupload = require('express-fileupload')
const cors = require('cors');
const multer = require('multer');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination : (req, res, cb) => {
        cb(null, './public/logos');
    },
    filename : (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({storage});

app.post('/upload-file',upload.single('file'), (req, res) => {
    try {
        console.log(req.body);
        if(!req.file){
            res.status(400).json({'message' : 'No file upload'})
            return;
        }
        res.status(200).json({'message' : "File uploaded"});
    } catch (error) {
        console.log(error);
        res.status(500).json({'message' : "Internal server error"});
    }
})



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));