import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Hero = () => {
	return (
		<Container
			id="home"
			style={{ height: '100vh' }}
			className="d-flex justify-content-center align-items-center text-white"
			fluid
		>
			<div className="hero" />
			<div className="text-center px-3">
				<h1 className="w-100 display-1 font-weight-bold">Product Manager</h1>
				<p className="lead py-3">Manage your professional and personal inventory all in one place</p>
				<Nav className="btn-container">
					<a href='#about' className='btn btn-brand-alt text-white py-2 font-weight-bold lead-small btn-block mt-2 form-home'>Learn More</a>
					<a href='#contact' className='btn btn-white text-brand py-2 font-weight-bold lead-small bg-white btn-block mt-2 form-home'>Contact</a>
				</Nav>
			</div>
		</Container >
	);
};

export default Hero;
