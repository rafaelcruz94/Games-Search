import React from 'react';
import logo from '../img/controller.svg';

function Footer() {
	return (
		<footer className='text-gray-600 body-font bg-gray-100'>
			<div className='container px-5 py-8 mx-auto sm:flex-row flex-col flex items-center justify-center'>
				<p className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
					<img className='w-10 h-10' src={logo} alt={logo}/>
					<span className='ml-3 text-xl'>Games Search</span>
				</p>
				<p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
					© 2021 Rafael Cruz
				</p>
			</div>
		</footer>
	);
}

export default Footer;
