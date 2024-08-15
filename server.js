const express = require('express');
const DogTPR = require('./utils/dogTPR');
const CatTPR = require('./utils/catTPR');

const app = express();
const port = 5000;

app.use(express.json());

// Route for dog data
app.get('/dog', (req, res) => {
    const { temperature, pulse, respiration, size } = req.query;

    if (!temperature || !pulse || !respiration || !size) {
        return res.status(400).json({ error: 'Missing parameters' });
    }

    const dog = new DogTPR(parseFloat(temperature), parseFloat(pulse), parseFloat(respiration), parseFloat(size));

    res.json({
       temperature: dog.checkTemp(),
       pulse: dog.checkPulse(),
       respiration: dog.checkResp()
    });
});

// Route for cat data
app.get('/cat', (req, res) => {
    const { temperature, pulse, respiration } = req.query;

    if (!temperature || !pulse || !respiration) {
        return res.status(400).json({ error: 'Missing parameters' });
    }

    const cat = new CatTPR(parseFloat(temperature), parseFloat(pulse), parseFloat(respiration));

    res.json({
        temperature: cat.checkTemp(),
        pulse: cat.pulse(),
        respiration: dog.checkResp()
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});