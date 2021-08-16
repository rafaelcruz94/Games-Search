import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './gamesSlice';
import detailReducer from './detailSlice';

export default configureStore({
	reducer: {
		games: gamesReducer,
		detail: detailReducer,
	},
});
