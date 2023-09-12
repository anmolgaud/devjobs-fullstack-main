const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        require : true,
        min : 1,
        max : 20,
    },
    lastname : {
        type : String,
        require : true,
        min : 1,
        max : 20,
    },
    email : {
        type : String,
        require : true,
        unique : true,
        min : 10,
        max : 50,
    },
    password : {
        type : String,
        require : true,
    },
    policy : {
        type : String,
        require : true,
    },

    timestamp : {
        type : Date,
        default : Date.now()
    },
    appliedto : [],
});

const Users = new mongoose.model('Users', userSchema);

module.exports = Users;