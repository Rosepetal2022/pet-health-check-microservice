const mongoose = require('mongoose');

const TPRSchema = new mongoose.Schema({
    petId: { type: String, required: true },
    temperature: { type: Number, required: true },
    pulse: { type: Number, required: true },
    respiration: { type: Number, required: true },
    size: { type: Number, required: true }, // only applicable to dogs
    date: { type: Date, default: Date.now }
});

const TPRData = mongoose.model('TPRData', TPRSchema);

module.exports = TPRData;