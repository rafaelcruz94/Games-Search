import React from 'react';
import { useDispatch } from 'react-redux';
import { loadDetail } from '../redux/apiCalls';
import { Link } from 'react-router-dom';
import { resize } from '../api';

import './GameCard.css';

function GameCard({ name, released, image, id }) {
	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		document.body.style.overflow = 'hidden';
		dispatch(loadDetail(id));
	};
	return (
		<div
			className='xl:w-1/4 md:w-1/2 p-4 flex items-stretch justify-center transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110'
			id='fixMobile'
		>
			<div className='bg-gray-100 p-6 rounded-lg' onClick={loadDetailHandler}>
				<Link to={`/game/${id}`}>
					<img
						className='h-40 w-full object-contain object-center mb-6'
						src={resize(image, 640)}
						alt={name}
					/>
					<h3 className='tracking-widest text-purple-500 text-xs font-medium title-font text-center'>
						{released}
					</h3>
					<h2 className='text-lg text-gray-900 font-medium title-font mb-4 text-center'>
						{name}
					</h2>
				</Link>
			</div>
		</div>
	);
}

export default GameCard;
