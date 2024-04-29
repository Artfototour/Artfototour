import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Nav className="me-auto">
          <Navbar.Brand><Link to={'/'}>Art-Fototour</Link></Navbar.Brand>
          <a href="https://mega.nz/folder/Eq0zHKIa#MsKsl3PnhQHNvOxBBv_f_Q" class="btn btn-primary">FotoFree</a>
          </Nav>

          <Nav className="auto"> 
          <NavDropdown title="Туры">
            <Nav.Link><Link to={'/Slider1'}>Чегемские водопады</Link></Nav.Link>
            <Nav.Link><Link to={'/Slider2'}>Голубые озера</Link></Nav.Link>
            <Nav.Link><Link to={'/Slider3'}>Село Бабугент</Link></Nav.Link> 
            </NavDropdown>
            </Nav>
          
          <Nav className="ms-auto">
          <Nav.Link><Link to={'/slider5'}>Контакты</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header