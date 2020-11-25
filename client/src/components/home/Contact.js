import React, { Fragment, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import linkedinDark from '../../assets/linkedinDark.svg';
import linkedinWhite from '../../assets/linkedinWhite.svg';
import githubDark from '../../assets/githubDark.svg';
import githubWhite from '../../assets/githubWhite.svg';
import axios from 'axios';

const Contact = () => {
	const [ input, setInput ] = useState({
		name: '',
		email: '',
		message: ''
	});

	const [ alert, setAlert ] = useState({
		text: '',
		color: '',
		display: 'd-none'
	});

	const handleChange = (e) => {
		e.preventDefault();
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input.message === '' || input.email === '' || input.name === '') {
			setAlert({ text: 'Please Enter All Fields!', color: 'danger', display: 'd-block' });
		} else {
			axios.post('http://localhost:3001/contact', input);
			setInput({ name: '', email: '', message: '' });
			setAlert({ text: 'Message Successfully Sent!', color: 'success', display: 'd-block' });
		}
	};

	const { message, name, email } = input;
	const { text, color, display } = alert;

	return (
		<Fragment>
			<Container id="contact" style={{ height: 'fit-content' }} className="py-5 px-lg-5 bg-brand" fluid>
				<h2 className="text-center pt-lg-4 pb-2 border-bottom-alt font-weight-bold text-white display-2">
					Contact
				</h2>
				<p
					className={`lead-sm py-2 text-white font-weight-bolds btn text-center ${display} bg-${color}`}
					onClick={() => setAlert({ ...alert, display: 'd-none' })}
				>
					{text}
				</p>
				<Row>
					<Col>
						{/* Contact Form */}
						<Form className="mt-3 mr-lg-5" onSubmit={(e) => handleSubmit(e)}>
							{/* Full name */}
							<FormGroup controlId="name">
								<FormLabel className="text-white font-weight-bold mt-2">Name</FormLabel>
								<FormControl
									name="name"
									onChange={(e) => handleChange(e)}
									value={name}
									type="text"
									placeholder="Enter Full Name"
								/>
							</FormGroup>
							{/* Email */}
							<FormGroup controlId="email">
								<FormLabel className="text-white font-weight-bold mt-2">Email</FormLabel>
								<FormControl
									name="email"
									onChange={(e) => handleChange(e)}
									value={email}
									type="email"
									placeholder="Email"
								/>
							</FormGroup>
							{/* Message */}
							<FormGroup controlId="message">
								<FormLabel className="text-white font-weight-bold mt-2">Message</FormLabel>
								<FormControl
									name="message"
									onChange={(e) => handleChange(e)}
									value={message}
									placeholder="Enter Your Message"
									as="textarea"
									rows={10}
								/>
							</FormGroup>
							<Button type="submit" className="bg-brand-alt text-white font-weight-bold btn-block btn">
								Send Message
							</Button>
						</Form>
					</Col>
					{/* Contact Links */}
					<Col className="d-none d-lg-inline-flex align-items-center justify-content-center">
						<div className="ml-xl-5">
							<a
								className="d-block mb-5 text-white font-weight-bold"
								href="https://github.com/connorskorburg/ProductManagement"
								target="_blank"
								rel="noreferrer"
							>
								<img src={githubWhite} alt="Github Icon" />
								github.com/connorskorburg/ProductManagement
							</a>
							<a
								className="d-block mb-5 text-white font-weight-bold"
								href="https://linkedin.com/in/connor-skorburg"
								target="_blank"
								rel="noreferrer"
							>
								<img src={linkedinWhite} alt="Linkedin Icon" />
								linkedin.com/in/connor-skorburg
							</a>
						</div>
					</Col>
				</Row>
			</Container>
			{/* Footer shown on small screen size */}
			<Row className="d-lg-none bg-white py-2 justify-content-around text-center">
				<Col>
					<a href="https://github.com/connorskorburg/ProductManagement" target="_blank" rel="noreferrer">
						<img src={githubDark} alt="Github Icon" />
					</a>
				</Col>
				<Col>
					<a href="https://linkedin.com/in/connor-skorburg" target="_blank" rel="noreferrer">
						<img src={linkedinDark} alt="Linkedin Icon" />
					</a>
				</Col>
			</Row>
		</Fragment>
	);
};

export default Contact;
