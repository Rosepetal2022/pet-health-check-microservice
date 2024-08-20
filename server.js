const express = require('express');
const DogTPR = require('./utils/dogTPR');
const CatTPR = require('./utils/catTPR');
const connectDB = require('./db');
const cors = require('cors');
const tprRoutes = require('./routes/tpr');

const app = express();
const port = 3005;

connectDB();

app.use(express.json());
app.use(cors());

// routes to check the tpr stats
app.use('/api', tprRoutes);

// Route for dog data
app.get('/dog', (req, res) => {
    const { temperature, pulse, respiration, size } = req.query;

    if (!temperature || !pulse || !respiration || !size) {
        return res.status(400).json({ error: 'Missing parameters' });
    }

    const dog = new DogTPR(parseFloat(temperature), parseFloat(pulse), parseFloat(respiration), parseFloat(size));

    const result = {
        temperature: dog.checkTemp(),
        pulse: dog.checkPulse(),
        respiration: dog.checkResp()
    };

    console.log('Successfully processed dog data:', result);
    res.json(result);
    
});

// Route for cat data
app.get('/cat', (req, res) => {
    const { temperature, pulse, respiration } = req.query;

    if (!temperature || !pulse || !respiration) {
        return res.status(400).json({ error: 'Missing parameters' });
    }

    const cat = new CatTPR(parseFloat(temperature), parseFloat(pulse), parseFloat(respiration));

    const result = {
        temperature: cat.checkTemp(),
        pulse: cat.checkPulse(),
        respiration: cat.checkResp()
    };

    console.log('Successfully processed cat data:', result);
    res.json(result);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});