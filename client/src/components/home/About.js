import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../../assets/about.svg';

const About = () => {
	return (
		<Container id="about" className="pt-4 px-4 px-lg-5 bg-light" fluid>
			<h2 className="text-center pt-lg-4 pb-2 border-bottom-alt font-weight-bold text-brand display-2">About</h2>
			<Row
				style={{ height: '85vh' }}
				className="bg-light flex-row-reverse justify-content-center align-items-center"
			>
				<Col xs={12} lg={6} className="w-100">
					<img src={about} className="w-100 ml-xl-5" />
				</Col>
				<Col xs={12} lg={6} className="mt-2">
					<p className="lead-alt text-brand mr-xl-5">
						Keep track of your inventory in on place. Create professional and personal categories to keep
						them separate from each other. Add your items, update them and delete them at any time. Never
						lose track of what you or company may own!
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
