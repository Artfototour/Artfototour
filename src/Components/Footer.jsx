import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
          <Link exact to={'/map'}><Button variant='white'>Карта</Button></Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link><Link to={'/slider1'}>Чегемские водопады</Link></Nav.Link>
            <Nav.Link><Link to={'/slider2'}>Голубые озера</Link></Nav.Link>
            <Nav.Link><Link to={'/slider3'}>Село Бабугент</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer