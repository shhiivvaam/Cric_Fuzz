import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk('users/register', async (userData) => {
    const response = await axios.post('/api/users/register', userData);
    return response.data;
});

export const loginUser = createAsyncThunk('users/login', async (userData) => {
    const response = await axios.post('/api/users/login', userData);
    return response.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState: { user: null, status: null },
    extraReducers: {
        [registerUser.pending]: (state) => { state.status = 'loading'; },
        [registerUser.fulfilled]: (state, action) => { state.user = action.payload; state.status = 'success'; },
        [registerUser.rejected]: (state) => { state.status = 'failed'; },
        [loginUser.pending]: (state) => { state.status = 'loading'; },
        [loginUser.fulfilled]: (state, action) => { state.user = action.payload; state.status = 'success'; },
        [loginUser.rejected]: (state) => { state.status = 'failed'; },
    },
});

export default userSlice.reducer;
