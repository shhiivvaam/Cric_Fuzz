import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/api';

export const fetchTeams = createAsyncThunk('teams/fetchTeams', async () => {
    const response = await axios.get('/api/teams');
    return response.data;
});

const teamSlice = createSlice({
    name: 'teams',
    initialState: { teams: [], status: null },
    reducers: {
        [fetchTeams.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchTeams.fulfilled]: (state, action) => {
            state.teams = action.payload;
            state.status = 'success';
        },
        [fetchTeams.rejected]: (state) => {
            state.status = 'failed';
        },
    },
});

export default teamSlice.reducer;
