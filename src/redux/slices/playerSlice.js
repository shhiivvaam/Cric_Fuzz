import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/api';

export const fetchPlayers = createAsyncThunk('players/fetchPlayers', async () => {
    const response = await axios.get('/api/players');
    return response.data;
});

const playerSlice = createSlice({
    name: 'players',
    initialState: { players: [], status: null },
    reducers: {
        [fetchPlayers.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchPlayers.fulfilled]: (state, action) => {
            state.players = action.payload;
            state.status = 'success';
        },
        [fetchPlayers.rejected]: (state) => {
            state.status = 'failed';
        },
    },
});

export default playerSlice.reducer;
