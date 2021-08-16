import axios from 'axios';
import { FETCH_GAMES, FETCH_SEARCHED } from './gamesSlice';
import { LOADING_DETAIL, GET_DETAIL } from './detailSlice';
import {
	popularGamesURL,
	upcomingGamesURL,
	newGamesURL,
	gameDetailsURL,
	gameScreenshotURL,
	searchGameURL,
} from '../api';

export const loadGames = async (dispatch) => {
	try {
		const popularData = await axios.get(popularGamesURL());
		const newGamesData = await axios.get(newGamesURL());
		const upcomingData = await axios.get(upcomingGamesURL());
		dispatch(
			FETCH_GAMES({
				popular: popularData.data.results,
				upcoming: upcomingData.data.results,
				newGames: newGamesData.data.results,
			}),
		);
	} catch (error) {
		console.log(
			'error: cannot fetch the data of the popular, upcoming and new games',
		);
	}
};

export const loadDetail = (id) => async (dispatch) => {
	try {
		dispatch(LOADING_DETAIL());
		const detailData = await axios.get(gameDetailsURL(id));
		const screenShotData = await axios.get(gameScreenshotURL(id));
		dispatch(
			GET_DETAIL({
				game: detailData.data,
				screen: screenShotData.data,
			}),
		);
	} catch (error) {
		console.log('error: cannot fetch the data of the game');
	}
};

export const fetchSearch = (game_name) => async (dispatch) => {
	try {
		const searchGames = await axios.get(searchGameURL(game_name));
		dispatch(
			FETCH_SEARCHED({
				searched: searchGames.data.results,
			}),
		);
	} catch (error) {
		console.log('error: cannot fetch the data of the search');
	}
};
