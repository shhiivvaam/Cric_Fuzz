const axios = require('axios');

const apiService = axios.create({
    baseURL: 'https://api.sportsdata.io/v3',
    headers: {
        'Ocp-Apim-Subscription-Key': process.env.SPORTS_API_KEY,
    },
});

const getLiveScores = async (sport) => {
    try {
        const response = await apiService.get(`/${sport}/scores/json/Games`);
        return response.data;
    } catch (error) {
        console.error('Error fetching live scores:', error);
        throw error;
    }
};

const getPlayerStats = async (playerId) => {
    try {
        const response = await apiService.get(`/players/${playerId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching player stats:', error);
        throw error;
    }
};

const getTeamStats = async (teamId) => {
    try {
        const response = await apiService.get(`/teams/${teamId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching team stats:', error);
        throw error;
    }
};

module.exports = { getLiveScores, getPlayerStats, getTeamStats };
