import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Navigation from '../reusables/Navigation';

const Home = () => {
	return (
		<Fragment>
			<Navigation page="home" />
			<Container
				style={{ height: '100vh' }}
				className="d-flex justify-content-center align-items-center hero text-white"
				fluid
			>
				<div className="text-center px-3">
					<h1 className="w-100 display-1 font-weight-bold">Product Manager</h1>
					<p className="lead py-3">Manage your professional and personal inventory all in one place</p>
					<Nav className="btn-container">
						<NavDropdown
							className="btn bg-light"
							title={<span className="text-brand font-weight-bold">Login</span>}
							id="login-dropdown-hero"
						>
							<Form className="p-3 form-home">
								<FormControl type="text" placeholder="Email" className="mr-sm-2 mt-2" />
								<FormControl type="password" placeholder="Password" className="mr-sm-2 mt-2" />
								<Button variant="success" className="btn-block mt-2">
									Login
								</Button>
							</Form>
						</NavDropdown>
						<NavDropdown
							className="btn bg-brand-alt"
							title={<span className="text-white font-weight-bold">Get Started</span>}
							id="register-dropdown-hero"
						>
							<Form className="p-3 form-home">
								<FormControl type="text" placeholder="First Name" className="mr-sm-2 mt-2" />
								<FormControl type="text" placeholder="Last Name" className="mr-sm-2 mt-2" />
								<FormControl type="text" placeholder="Email" className="mr-sm-2 mt-2" />
								<FormControl type="password" placeholder="Password" className="mr-sm-2 mt-2" />
								<FormControl type="password" placeholder="Confirm Password" className="mr-sm-2 mt-2" />
								<Button variant="success" className="btn-block mt-2">
									Register
								</Button>
							</Form>
						</NavDropdown>
					</Nav>
				</div>
			</Container>
		</Fragment>
	);
};

export default Home;
