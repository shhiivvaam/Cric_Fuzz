import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/api';

export const fetchMatches = createAsyncThunk('matches/fetchMatches', async () => {
    const response = await axios.get('/api/matches');
    return response.data;
});

const matchSlice = createSlice({
    name: 'matches',
    initialState: { matches: [], status: null },
    reducers: {
        [fetchMatches.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchMatches.fulfilled]: (state, action) => {
            state.matches = action.payload;
            state.status = 'success';
        },
        [fetchMatches.rejected]: (state) => {
            state.status = 'failed';
        },
    },
});

export default matchSlice.reducer;
