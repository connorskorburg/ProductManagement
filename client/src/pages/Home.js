import React, { Fragment } from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Contact from '../components/home/Contact';
import Navigation from '../reusables/Navigation';

const Home = () => {
	return (
		<Fragment>
			<Navigation page="home" />
			<Hero />
			<About />
			<Contact />
		</Fragment>
	);
};

export default Home;
