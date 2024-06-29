const axios = require('axios');

// const RAPIDAPI_HOST = 'your-rapidapi-host';
const RAPIDAPI_HOST = 'cricket-live-data.p.rapidapi.com';
// const RAPIDAPI_KEY = 'your-rapidapi-key';
const RAPIDAPI_KEY = 'db17589201mshdb6ce072c7283cdp114528jsn317ccb9b2d84';


const apiService = axios.create({
    baseURL: 'https://api.sportsdata.io/v3',
    headers: {
        'Ocp-Apim-Subscription-Key': process.env.SPORTS_API_KEY,
    },
});

const getLiveMatches = async () => {
    try {
        const response = await axios.get('https://cricket-live-data.p.rapidapi.com/series', {
            headers: {
                'x-rapidapi-host': RAPIDAPI_HOST,
                'x-rapidapi-key': RAPIDAPI_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch live matches');
    }
};

const getNewsFeed = async () => {
    try {
        const response = await axios.get('https://cricket-live-data.p.rapidapi.com/series', {
            headers: {
                'x-rapidapi-host': RAPIDAPI_HOST,
                'x-rapidapi-key': RAPIDAPI_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch news feed');
    }
};

const getLiveScores = async (sport) => {
    try {
        const response = await apiService.get(`/${sport}/scores/json/series`);
        return response.data;
    } catch (error) {
        console.error('Error fetching live scores:', error);
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

const getPlayerStats = async (playerId) => {
    try {
        const response = await apiService.get(`/players/${playerId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching player stats:', error);
        throw error;
    }
};

module.exports = { getLiveMatches, getNewsFeed, getLiveScores, getTeamStats, getPlayerStats };
