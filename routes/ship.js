const express = require('express');
const Ship = require('../models/ship');
const conn = require('../config/connection'); 

const router = express.Router();
router.post('/addShip', async (req, res) => {
    const {ship } = req.body;
    try {
        
        if (!ship) {
            return res.status(400).json({ message: 'Please provide ship data ' });
        }

        const newShipRecord = await Ship.create({ship});

        res.status(201).json({ message: 'Ship record added successfully', shipRecord: newShipRecord });
    } catch (error) {
        console.error('Error adding ship record:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
router.get('/getAllShips', async (req, res) => {
    try {
        const allShips = await Ship.find(); 
        if (!allShips || allShips.length === 0) {
            return res.status(404).json({ message: 'No ship records found' });
        }

        res.status(200).json(allShips);
    } catch (error) {
        console.error('Error fetching ship records:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;