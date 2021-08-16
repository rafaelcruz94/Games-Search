import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import GameCard from '../components/GameCard';
import GameModal from '../components/GameModal';
import { loadGames } from '../redux/apiCalls';

import './Home.css';

function Home() {
	//Get the current location and split it into an array and get the index of the id
	const location = useLocation();
	const pathId = location.pathname.split('/')[2];

	//Fetch games data from api
	const dispatch = useDispatch();
	useEffect(() => {
		loadGames(dispatch);
	}, [dispatch]);

	//Get data from redux
	const { upcoming, popular, newGames, searched } = useSelector(
		(state) => state.games,
	);

	return (
		<div className='gamesContainer'>
			{/* If the pathId is available it will print out the GameModal, otherwise don't print it.*/}
			{pathId && <GameModal />}

			{/* Searched is an array, it will return []= true. So for i get a false value, i need to use length (it will return 0 and 0 = false)*/}
			{searched.length ? (
				<section className='text-gray-600 body-font'>
					<div className='container px-5 py-24 mx-auto'>
						<div className='flex flex-wrap w-full mb-20'>
							<div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
								<h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
									Searched Games
								</h1>
								<div className='h-1 w-20 bg-purple-500 rounded'></div>
							</div>
						</div>
						<div className='flex flex-wrap -m-4'>
							{searched.map((game) => (
								<GameCard
									name={game.name}
									released={game.released}
									id={game.id}
									key={game.id}
									image={game.background_image}
								/>
							))}
						</div>
					</div>
				</section>
			) : (
				''
			)}

			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-wrap w-full mb-20'>
						<div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
							<h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
								Upcoming Games
							</h1>
							<div className='h-1 w-20 bg-purple-500 rounded'></div>
						</div>
					</div>
					<div className='flex flex-wrap -m-4'>
						{upcoming.map((game) => (
							<GameCard
								name={game.name}
								released={game.released}
								id={game.id}
								key={game.id}
								image={game.background_image}
							/>
						))}
					</div>
				</div>
			</section>

			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-wrap w-full mb-20'>
						<div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
							<h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
								Popular Games
							</h1>
							<div className='h-1 w-20 bg-purple-500 rounded'></div>
						</div>
					</div>
					<div className='flex flex-wrap -m-4'>
						{popular.map((game) => (
							<GameCard
								name={game.name}
								released={game.released}
								id={game.id}
								key={game.id}
								image={game.background_image}
							/>
						))}
					</div>
				</div>
			</section>

			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-wrap w-full mb-20'>
						<div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
							<h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
								New Games
							</h1>
							<div className='h-1 w-20 bg-purple-500 rounded'></div>
						</div>
					</div>
					<div className='flex flex-wrap -m-4'>
						{newGames.map((game) => (
							<GameCard
								name={game.name}
								released={game.released}
								id={game.id}
								key={game.id}
								image={game.background_image}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
