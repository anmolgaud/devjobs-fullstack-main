const mongoose = require('mongoose');
const Jobs = require('../Models/Jobs');

const addJob = async (req, res) => {
    try {
        const data = req.body;
        const jobData = {};
        Object.keys(data).map((item) => {
            if(item === 'requirements' || item === 'role'){
                jobData[item] = JSON.parse(data[item]);
            }
            else if(item === 'logo'){
                jobData[item] = '/logos/' + data[item];
            }
            else{
                jobData[item] = data[item];
            }
        })
        const newJob = await Jobs.create(jobData);
        if(!newJob){
            res.status(400).json({'message' : 'Database Error'});
            return;
        }
        res.status(201).json({'message' : 'Job created successfully!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({'message' : 'Server Error'});
    }
}

const getAllJobs = async (req, res) =>{
    try {
        const data = await Jobs.find({}).exec();
        if(!data){
            res.status(404).json({'message' : 'No jobs found'});
            return;
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({'message' : 'Server Error'});
    }
}

const getJobById = async (req, res) => {
    try {
        const data = await Jobs.find({_id : req.body.id}).exec();
        if(!data){
            res.status(404).json({'message' : 'Job not found'});
        }
        res.status(200).json(data);
    } catch(error){
        res.status(500).json({'message' : 'Server Error'});
    }
}
module.exports = {addJob, getAllJobs, getJobById};