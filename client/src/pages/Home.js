import React, { Fragment } from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Navigation from '../reusables/Navigation';

const Home = () => {
	return (
		<Fragment>
			<Navigation page="home" />
			<Hero />
			<About />
		</Fragment>
	);
};

export default Home;
