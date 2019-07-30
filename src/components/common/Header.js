import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

/**
 * Common Header Component
 *
 * @extends React.Component
 */
class Header extends React.Component {
  /**
   * Renders the component
   *
   * @return {Component}
   */
  render() {
    return (
      <Navbar className="header" bg="white" expand="lg">
        <Navbar.Collapse>
          <Nav className="ml-auto align-items-center">
            <Nav.Link>
              <i className="fas fa-bell"></i>
            </Nav.Link>

            <Nav.Link className="nav-divider"></Nav.Link>

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
