const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    position: String,
    stats: {
        matches: Number,
        goals: Number,
        assists: Number,
        points: Number,
    },
}, { timestamps: true });

module.exports = mongoose.model('Player', playerSchema);
