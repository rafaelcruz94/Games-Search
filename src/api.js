import { format, setYear } from 'date-fns';
import logo from './img/controller.svg'

const apiKey='08849b9b5be343d1954b8ecdb07754ae'
const apiUrl = 'https://api.rawg.io/api/';

//Current Date Today, Last Year Date and Next Year Date
const date = new Date();
const currentDate = format(date, `yyyy-MM-dd`);
const lastYear = format(
	setYear(date, new Date().getFullYear() - 1),
	`yyyy-MM-dd`,
);
const nextYear = format(
	setYear(date, new Date().getFullYear() + 1),
	`yyyy-MM-dd`,
);

//Resize images
export const resize = (imagePath, size) => {
	let image;

	if (imagePath) {
	  image = imagePath.match(/media\/screenshots/)
		? imagePath.replace(
			"media/screenshots",
			`media/resize/${size}/-/screenshots`
		  )
		: imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
	} else {
	  image = logo;
	}
  
	return image;
};

//Links to get data of the G Fames
const popular_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=8`;
const upcoming_games = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=8`;
const newGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=8`;

export const popularGamesURL = () => `${apiUrl}${popular_games}`;
export const upcomingGamesURL = () => `${apiUrl}${upcoming_games}`;
export const newGamesURL = () => `${apiUrl}${newGames}`;
export const gameDetailsURL = (game_id) =>
	`${apiUrl}games/${game_id}?key=${apiKey}`;
export const gameScreenshotURL = (game_id) =>
	`${apiUrl}games/${game_id}/screenshots?key=${apiKey}`;
export const searchGameURL = (game_name) =>
	`${apiUrl}games?key=${apiKey}&search=${game_name}&page_size=8`;
