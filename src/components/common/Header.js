import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar className="header" bg="white" expand="lg">
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link>
              <i className="fas fa-bell"></i>
            </Nav.Link>

            <Nav.Link>|</Nav.Link>

            <NavDropdown className="dropdown-menu-left" title="John Doe">
              <NavDropdown.Item>Account Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
