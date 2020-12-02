import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Navigation = ({ page }) => {
  return (
    <Navbar expand="lg" bg='light' fixed='top' className='px-5-l shadow-2'>
      <Navbar.Brand className='font-weight-bold text-brand'>PRODMNG</Navbar.Brand>
      { page.toLowerCase() === 'home' ?
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className='text-brand'>
              <NavDropdown title={
                <span className='text-brand'>Login</span>
              } id="login-dropdown">
                <Form className='p-3 form-home bg-light'>
                  <FormControl type="text" placeholder="Email" className="mr-sm-2 mt-2" />
                  <FormControl type="password" placeholder="Password" className="mr-sm-2 mt-2" />
                  <Button variant="success" className='btn-block mt-2'>Login</Button>
                </Form>
              </NavDropdown>
              <NavDropdown title={
                <span className='text-brand'>Register</span>
              } id="register-dropdown">
                <Form className='p-3 form-home bg-light'>
                  <FormControl type="text" placeholder="First Name" className="mr-sm-2 mt-2" />
                  <FormControl type="text" placeholder="Last Name" className="mr-sm-2 mt-2" />
                  <FormControl type="text" placeholder="Email" className="mr-sm-2 mt-2" />
                  <FormControl type="password" placeholder="Password" className="mr-sm-2 mt-2" />
                  <FormControl type="password" placeholder="Confirm Password" className="mr-sm-2 mt-2" />
                  <Button variant="success" className='btn-block mt-2'>Register</Button>
                </Form>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className='text-brand font-weight-bold ml-lg-4' href="#home">Home</Nav.Link>
              <Nav.Link className='text-brand font-weight-bold ml-lg-4' href="#about">About</Nav.Link>
              <Nav.Link className='text-brand font-weight-bold ml-lg-4' href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </>
        : ''}
    </Navbar>
  )
}

export default Navigation;
