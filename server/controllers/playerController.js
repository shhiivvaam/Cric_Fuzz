const Player = require('../models/Player');

exports.getPlayers = async (req, res) => {
    try {
        const players = await Player.find().populate('team');
        res.json(players);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
