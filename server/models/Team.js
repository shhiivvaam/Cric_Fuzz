const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    logo: String,
    stats: {
        wins: Number,
        losses: Number,
        draws: Number,
    },
}, { timestamps: true });

module.exports = mongoose.model('Team', teamSchema);
