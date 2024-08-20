// routes/tpr.js
const express = require('express');
const TPRData = require('../models/TPRData');

const router = express.Router();


// route to save dog tpr data
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


// route to save cat tpr since cat has no size attribute
router.post('/save-tpr/cat', async (req, res) => {
    const { petId, temperature, pulse, respiration } = req.body;

    try {
        const tprData = new TPRData({ petId, temperature, pulse, respiration });
        await tprData.save();
        res.status(200).json({ message: 'TPR data saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
})


// Get just tpr data for one pet by petId
router.get('/get-tpr/:petId', async (req, res) => {
    const { petId } = req.params;
    console.log("fetching TPR data for petID:", petId)

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