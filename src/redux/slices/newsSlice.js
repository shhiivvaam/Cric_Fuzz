import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
    name: 'news',
    initialState: { news: [], status: null },
    reducers: {
        newsFetched(state, action) {
            state.news = action.payload;
            state.status = 'success';
        },
        newsLoading(state) {
            state.status = 'loading';
        },
        newsFailed(state) {
            state.status = 'failed';
        },
    },
});

export const { newsFetched, newsLoading, newsFailed } = newsSlice.actions;
export default newsSlice.reducer;
