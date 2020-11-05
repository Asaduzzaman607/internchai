import React from 'react';
import './NavBar.css'
import { Nav, Navbar} from 'react-bootstrap';
const NavBar = () => {
  return (
    <nav className="pt-4 container nav-text" >
        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="#home">
            InternChai
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link className="mr-3">Find an Internship</Nav.Link>
                <Nav.Link className="mr-3" >Contributors</Nav.Link>
                <Nav.Link className="mr-3">Contact Us</Nav.Link>
                <Nav.Link className="mr-3" >Paid Internship</Nav.Link> 
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </nav>










  );  
};

export default NavBar;