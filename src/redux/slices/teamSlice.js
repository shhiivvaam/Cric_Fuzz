import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/api';


const BASE_URL = "http://localhost:5000"
export const fetchTeams = createAsyncThunk('teams/fetchTeams', async () => {
    const response = await axios.get(`${BASE_URL}/api/teams`);
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
