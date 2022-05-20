import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" id='NavbarApp' >
        <Container fluid>
          <Navbar.Brand href="#"><Link to='/'>Anime APP</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
            <Nav
              className="my-2 my-lg-0 justify-content-end"
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link href="#"><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link href="#"><Link to='/search'>Search</Link></Nav.Link>
            </Nav>
            
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
