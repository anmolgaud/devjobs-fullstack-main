const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    company : {
        type : String,
        min : 1,
        max : 100,
        require : true
    },
    logo : {
        type : String,
        default : '/logo/notFoundLogo.jpg',
    },
    position : {
        type : String,
        require : true,
        min : 3,
    },
    postedAt : {
        type : Date,
        default : Date.now(),
        require : true,
    },
    contract : {
        type : String,
        require : true,
    },
    location : {
        type : String,
        require : true,
    },
    website :{
        type : String,
        require : true,
    },
    apply : {
        type : String,
        require : true,
    },
    description : {
        type : String,
        require : true,
    },
    requirements : {
        content : {
            type : String,
            require : true,
        },
        items : [],
    },
    role : {
        content : {
            type : String,
            require : true,
        },
        items : []
    },
    timeStamp : {
        type : Date,
        default : Date.now
    },
})

const Jobs = mongoose.model('jobs', jobSchema);

module.exports = Jobs;