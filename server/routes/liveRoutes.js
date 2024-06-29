const express = require('express');
const router = express.Router();
const { fetchLiveMatches, fetchNewsFeed } = require('../controllers/sportsController');

router.get('/matches', fetchLiveMatches);
router.get('/news', fetchNewsFeed);

module.exports = router;
