import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Navigation = () => {
  return (
    <Navbar fixed='top' expand="lg" className='px-5'>
      <Navbar.Brand>PRODMNG</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <NavDropdown title="Login" id="basic-nav-dropdown">
            <Form className='p-3 form-home'>
              <FormControl type="text" placeholder="Email" className="mr-sm-2 mt-2" />
              <FormControl type="password" placeholder="Password" className="mr-sm-2 mt-2" />
              <Button variant="success" className='btn-block mt-2'>Login</Button>
            </Form>
          </NavDropdown>
          <NavDropdown title="Register" id="basic-nav-dropdown">
            <Form className='p-3 form-home'>
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
    </Navbar>
  )
}

export default Navigation;
