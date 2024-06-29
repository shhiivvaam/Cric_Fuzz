const Match = require('../models/Match');

exports.getMatches = async (req, res) => {
    try {
        const matches = await Match.find().populate('teams');
        res.json(matches);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
