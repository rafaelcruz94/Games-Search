import { createSlice } from '@reduxjs/toolkit';

export const detailSlice = createSlice({
	name: 'detail',
	initialState: {
		game: { parent_platforms: [] },
		screen: { results: [] },
		isLoading: true,
	},
	reducers: {
		GET_DETAIL: (state, action) => {
			state.game = action.payload.game;
			state.screen = action.payload.screen;
			state.isLoading = false;
		},
		LOADING_DETAIL: (state) => {
			state.isLoading = true;
		},
	},
});

export const { GET_DETAIL, LOADING_DETAIL } = detailSlice.actions;
export default detailSlice.reducer;
