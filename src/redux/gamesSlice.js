import { createSlice } from '@reduxjs/toolkit';

export const gamesSlice = createSlice({
	name: 'games',
	initialState: {
		popular: [],
		newGames: [],
		upcoming: [],
		searched: [],
	},
	reducers: {
		FETCH_GAMES: (state, action) => {
			state.popular = action.payload.popular;
			state.upcoming = action.payload.upcoming;
			state.newGames = action.payload.newGames;
		},
		FETCH_SEARCHED: (state, action) => {
			state.searched = action.payload.searched;
		},
		CLEAR_SEARCHED: (state) => {
			state.searched = [];
		},
	},
});

export const { FETCH_GAMES, FETCH_SEARCHED, CLEAR_SEARCHED } =
	gamesSlice.actions;
export default gamesSlice.reducer;
