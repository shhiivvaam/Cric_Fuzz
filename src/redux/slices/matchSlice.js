import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/api';

const BASE_URL = "http://localhost:5000"
export const fetchMatches = createAsyncThunk('matches/fetchMatches', async () => {
    const response = await axios.get(`${BASE_URL}/api/matches`);
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
