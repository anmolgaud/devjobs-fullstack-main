const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../Models/Users');

const register = async (req, res) =>{
    try {
        const {firstname, lastname, email, password, policy} = req.body;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        await Users.create({
            firstname,
            lastname,
            email,
            password : passwordHash,
            policy,
        })
        const token = jwt.sign({email, passwordHash}, process.env.JWTSECRET, {expiresIn : '2h'});
        res.status(201).json({'message' : 'Sign up successful', 'token' : token});
    } catch (error) {
        console.log(error);
        res.status(500).json({'message' : 'Something went wrong'})
    }
};

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await Users.findOne({email : email}).exec();
        if(!user){
            res.status(404).json({'message' : 'Email not found!'})
            return;
        }
        const passwordCorrect = await bcrypt.compare(password, user.password);
        if(!passwordCorrect){
            res.status(404).json({'message' : 'Password incorrect!'})
            return;
        }
        const token = jwt.sign(
            {'email' : email, 'password' : user.password },
             process.env.JWTSECRET,
             {expiresIn : '2h'});

        res.status(200).json({'message' : 'Successful', 'token' : token});
    } catch (error) {
        console.log(error);
        res.status(500).json({'message' : 'Login unsuccessful'})
    }
}


module.exports = {register, login};