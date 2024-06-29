const { getLiveMatches, getNewsFeed } = require('../services/sportsService');

const fetchLiveMatches = async (req, res) => {
    try {
        const data = await getLiveMatches();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const fetchNewsFeed = async (req, res) => {
    try {
        const data = await getNewsFeed();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { fetchLiveMatches, fetchNewsFeed };
