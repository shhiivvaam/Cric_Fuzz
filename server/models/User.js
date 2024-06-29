const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    favoriteTeams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
    favoritePlayers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
