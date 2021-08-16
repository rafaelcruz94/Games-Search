import React from 'react';
import './GameModal.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resize } from '../api';

//GET PLATFORM IMAGES
import playstation from '../img/playstation.svg';
import steam from '../img/windows.png';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.png';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import linux from '../img/linux-256.png';

const getPlatform = (platform) => {
	switch (platform) {
		case 'PlayStation 5':
		case 'PlayStation 4':
		case 'PlayStation':
			return playstation;
		case 'Xbox One':
		case 'Xbox':
			return xbox;
		case 'PC':
			return steam;
		case 'Linux':
			return linux;
		case 'Nintendo':
		case 'Nintendo Switch':
			return nintendo;
		case 'iOS':
		case 'Apple Macintosh':
			return apple;
		default:
			return gamepad;
	}
};

function GameModal() {
	//Exit from GameModal
	const history = useHistory();
	const exitDetailHandler = (e) => {
		if (e.target.classList.contains('shadow')) {
			document.body.style.overflow = 'auto';
			history.push('/');
		}
	};

	const { game, screen, isLoading } = useSelector((state) => state.detail);
	return (
		<>
			{!isLoading && (
				<div
					className='cardShadow shadow'
					onClick={exitDetailHandler}
				>
					<div className='detail'>
						<div className='flex align-center justify-center text-center'>
							<h1 className='mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 sm:text-5xl title-font'>
								{game.name}
							</h1>
						</div>
						<div className='rating flex align-center justify-center'>
							<p className='text-2xl'>
								⭐<strong className='text-2xl font-black'>{game.rating}</strong>
								<small className='text-xl text-gray-900'>/5</small>
							</p>
						</div>
						<div className='flex align-center justify-center'>
							<div className='info'>
								<h3 className='text-xl mt-10 font-black'>Platforms:</h3>
								<div className='platforms mt-4 fixCenter'>
									{game.parent_platforms.map((data) => (
										<div
											key={data.platform.id}
											className='text-center justify-center flex align-center m-2 w-6 h-auto sm:w-10 h-10'
										>
											<img
												alt={data.platform.name}
												key={data.platform.id}
												src={getPlatform(data.platform.name)}
											></img>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className='media'>
							<img
								src={resize(game.background_image, 1280)}
								alt={game.background_image}
							/>
						</div>
						<div className='description'>
							<p>{game.description_raw}</p>
						</div>
						<div className='gallery'>
							{screen.results.map((screen) => (
								<img
									className='mt-6'
									src={resize(screen.image, 1280)}
									key={screen.id}
									alt={screen.image}
								/>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default GameModal;
