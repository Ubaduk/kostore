import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">K.O Store</Navbar.Brand>
         
          <Nav className="me-auto">
         
            <Nav.Link href="#Gloves">Gloves</Nav.Link>
            <Nav.Link href="#Clothes">Clothes</Nav.Link>
            <Nav.Link id='cartwidget' href="#CartWidgett"> <CartWidget/> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </div>
  )
}

export default NavBar