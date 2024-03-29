const express = require('express');
const router = express.Router();

const {register, login} = require('../Controllers/auth');

router.post('/login', login);
router.post('/signup', register);


module.exports = router;