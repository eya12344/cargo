const express = require('express');
const Command = require('../models/command');
const conn = require('../config/connection'); 
const router = express.Router();

router.post('/passCommand', async (req, res) => {
    try {
        const { command } = req.body;

        if (!command) {
            return res.status(400).json({ message: 'Please provide a command' });
        }

        const savedCommand = await Command.create({ command });
        res.status(200).json({ message: 'Command received and saved successfully', command: savedCommand });
    } catch (error) {
        console.error('Error processing command:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
router.get('/getAllCommands', async (req, res) => {
    try {
        const allCommands = await Command.find();

        if (!allCommands || allCommands.length === 0) {
            return res.status(404).json({ message: 'No commands found' });
        }

        res.status(200).json(allCommands);
    } catch (error) {
        console.error('Error fetching commands:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;