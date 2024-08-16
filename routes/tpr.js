// routes/tpr.js
const express = require('express');
const TPRData = require('../models/TPRData');

const router = express.Router();

router.post('/save-tpr', async (req, res) => {
    const { petId, temperature, pulse, respiration, size } = req.body;

    try {
        const tprData = new TPRData({ petId, temperature, pulse, respiration, size });
        await tprData.save();
        res.status(200).json({ message: 'TPR data saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
})

router.get('/get-tpr/:petId', async (req, res) => {
    const { petId } = req.params;

    try {
        const tprData = await TPRData.find({ petId }).sort({ date: -1 });
        if (!tprData.length) {
            return res.status(404).json({ message: 'No TPR data found for this pet' });
        }
        res.status(200).json(tprData);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


module.exports = router;