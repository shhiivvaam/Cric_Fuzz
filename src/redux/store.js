import { configureStore } from '@reduxjs/toolkit';
import matchSlice from './slices/matchSlice';
import playerSlice from './slices/playerSlice';
import teamSlice from './slices/teamSlice';
import userSlice from './slices/userSlice';
import newsSlice from './slices/newsSlice';

const store = configureStore({
    reducer: {
        matches: matchSlice,
        players: playerSlice,
        teams: teamSlice,
        users: userSlice,
        news: newsSlice
    },
});

export default store;
