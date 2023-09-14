const express = require('express');
const router = express.Router();
const {addJob, getAllJobs, getJobById} = require('../Controllers/jobs');

router.post('/addJob', addJob);

router.get('/getAllJobs', getAllJobs);
router.post('/getJobById', getJobById);

module.exports = router;