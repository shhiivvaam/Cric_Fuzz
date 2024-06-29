import { configureStore } from '@reduxjs/toolkit';
import matchReducer from './slices/matchSlice';
import playerReducer from './slices/playerSlice';
import teamReducer from './slices/teamSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
    reducer: {
        matches: matchReducer,
        players: playerReducer,
        teams: teamReducer,
        users: userReducer,
    },
});

export default store;
