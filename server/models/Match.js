const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
    score: String,
    date: Date,
    venue: String,
    details: String,
}, { timestamps: true });

module.exports = mongoose.model('Match', matchSchema);
