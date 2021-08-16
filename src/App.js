import React from 'react';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer'
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Route path={['/game/:id', '/']} exact>
				<Home />
			</Route>
			<Footer />
		</div>
	);
}

export default App;
