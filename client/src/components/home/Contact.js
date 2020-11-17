import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container'
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


const Contact = () => {
  return (
    <Fragment>
      <Container id='contact' style={{ height: 'fit-content' }} className='py-5 px-lg-5 bg-brand' fluid>
        <h2 className="text-center pt-lg-4 pb-2 border-bottom-alt font-weight-bold text-white display-2">Contact</h2>
        <Row>
          <Col>
            <Form className='mt-3 mr-lg-5'>
              <FormGroup controlId="name">
                <FormLabel className='text-white font-weight-bold mt-2'>Name</FormLabel>
                <FormControl type="text" placeholder="Enter Full Name" />
              </FormGroup>

              <FormGroup controlId="email">
                <FormLabel className='text-white font-weight-bold mt-2'>Email</FormLabel>
                <FormControl type="email" placeholder="Email" />
              </FormGroup>

              <FormGroup controlId="message">
                <FormLabel className='text-white font-weight-bold mt-2'>Message</FormLabel>
                <FormControl placeholder='Enter Your Message' as="textarea" rows={10} />
              </FormGroup>
              <Button type='submit' className='bg-brand-alt text-white font-weight-bold btn-block btn'>Send Message</Button>
            </Form>
          </Col>
          <Col className='d-none d-lg-inline-flex align-items-center justify-content-center'>
            <div className='ml-xl-5'>
              <a className='d-block mb-5 text-white font-weight-bold' href='https://github.com/connorskorburg/ProductManagement' target='_blank' rel='noreferrer'>
                <img src={githubWhite} alt="" />
                  github.com/connorskorburg/ProductManagement</a>
              <a className='d-block mb-5 text-white font-weight-bold' href='https://linkedin.com/in/connor-skorburg' target='_blank' rel='noreferrer'>
                <img src={linkedinWhite} alt="" />
                  linkedin.com/in/connor-skorburg</a>
            </div>
          </Col>
        </Row>
      </Container>

      <Row className='d-lg-none bg-white py-2 justify-content-around text-center'>
        <Col>
          <a href='https://github.com/connorskorburg/ProductManagement' target='_blank' rel='noreferrer'>
            <img src={githubDark} alt="" />
          </a>
        </Col>
        <Col>
          <a href='https://linkedin.com/in/connor-skorburg' target='_blank' rel='noreferrer'>
            <img src={linkedinDark} alt="" />
          </a>
        </Col>
      </Row>

    </Fragment>
  )
}

export default Contact;