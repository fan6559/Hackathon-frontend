import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';
  import '../Css/Navbar.scss'
  
const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
      <Navbar color="light" light expand="md" className="tash">
        <NavbarBrand href="/">Halloween Horror Movies</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

  );
}

export default MyNavbar;