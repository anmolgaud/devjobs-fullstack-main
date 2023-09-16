const express = require('express');
const router = express.Router();

const {addJob} = require('../Controllers/jobs')

router.post('/addJob', addJob)
module.exports = router;