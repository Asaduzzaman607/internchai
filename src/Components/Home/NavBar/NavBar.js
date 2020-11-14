import React from 'react';
import './NavBar.css';
import Logo from '../../../images/Logo.svg';
import { Nav, Navbar} from 'react-bootstrap';
const NavBar = () => {
  // <nav className="pt-4 container nav-text" >
  //       <Navbar bg="transparent" expand="lg">
  //           <Navbar.Brand href="#home">
  //            <img src={Logo} className="logo" alt=""/>
  //           </Navbar.Brand>
  //           <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //           <Navbar.Collapse id="basic-navbar-nav">
  //               <Nav className="ml-auto font-weight-bold">
  //               <Nav.Link className="mr-3">Find an Internship</Nav.Link>
  //               <Nav.Link className="mr-3" >Contributors</Nav.Link>
  //               <Nav.Link className="mr-3">Contact Us</Nav.Link>
  //               <Nav.Link className="mr-3" >Post an Internship</Nav.Link> 
  //               </Nav>
  //           </Navbar.Collapse>
  //           </Navbar>
  //       </nav>
  return (
    
      <div className="d-flex navbar">
        
         
            <div className="logo">
              <img src={Logo} alt=""/>
            </div>
          <ul className="nav-links">
            <li>Find an Internship</li>
            <li>Contributors</li>
            <li>Contact Us</li>
            <li>Post an Internship</li>
          </ul>
        
      </div>









  );  
};

export default NavBar;