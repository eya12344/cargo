const express = require('express');
const Medical = require('../models/medical');
const conn = require('../config/connection'); 


const router = express.Router();
router.post('/addMedical', async (req, res) => {
    const {medical } = req.body;
    try {
        
        if (!medical) {
            return res.status(400).json({ message: 'Please provide medical data ' });
        }

        const newMedicalRecord = await Medical.create({medical});

        res.status(201).json({ message: 'Medical record added successfully', medicalRecord: newMedicalRecord });
    } catch (error) {
        console.error('Error adding medical record:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
router.get('/getAllMedicals', async (req, res) => {
    try {
        const allMedicals = await Medical.find(); 
        if (!allMedicals || allMedicals.length === 0) {
            return res.status(404).json({ message: 'No medical records found' });
        }

        res.status(200).json(allMedicals);
    } catch (error) {
        console.error('Error fetching medical records:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;