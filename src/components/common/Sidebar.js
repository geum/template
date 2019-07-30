import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Common Sidebar Component
 *
 * @extends React.Component
 */
class Sidebar extends React.Component {
  /**
   * Sets initial menu state
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      menu: [
        {
          icon: 'fas fa-coffee',
          text: 'Admin',
          href: '',
          menu: [
            {
              icon: 'fas fa-user',
              text: 'Profiles',
              href: '',
            },
            {
              icon: 'fas fa-lock',
              text: 'Auth',
              href: ''
            },
            {
              icon: 'fas fa-key',
              text: 'Roles',
              href: ''
            }
          ]
        },
        {
          icon: 'fas fa-code',
          text: 'API',
          href: '#',
          active: true,
          menu: [
            {
              icon: 'fas fa-mobile-alt',
              text: 'Applications',
              href: '',
              active: true
            },
            {
              icon: 'fas fa-portrait',
              text: 'Sessions',
              href: ''
            },
            {
              icon: 'fas fa-crosshairs',
              text: 'Scopes',
              href: ''
            }
          ]
        }
      ]
    }
  }

  /**
   * Renders the menu container
   *
   * @param  {Array} items
   * @return {Component}
   */
  renderMenu(items) {
    return (
      <ul className="menu-items">
        {this.renderMenuItems(items)}
      </ul>
    )
  }

  /**
   * Renders the menu items
   *
   * @param  {Array} items
   * @return {Component}
   */
  renderMenuItems(items) {
    return items.map((item, index) => {
      return (
        <li className={`menu-item ${item.active ? 'active' : ''}`} key={index}>
          <Link
            to="#"
            className="menu-detail d-flex align-items-center p-3"
          >
            <div className="menu-icon">
              <i className={item.icon}></i>
            </div>
            <div className="menu-text w-100">{item.text}</div>

            {Array.isArray(item.menu)
              && item.menu.length
              && (
                <div className="menu-toggle">
                  <i className="fas fa-angle-down"></i>
                </div>
              )
            }
          </Link>

          {Array.isArray(item.menu)
            && item.menu.length
            && this.renderMenu(item.menu)
          }
        </li>
      )
    });
  }

  /**
   * Renders the component
   *
   * @return {Component}
   */
  render() {
    return (
      <div className="sidebar">
        <div className="branding d-flex align-items-center px-3">
          <div className="title w-100">
            CRADLE
          </div>
          <div className="toggle w-100 text-right">
            <Link to="#">
              <i className="fas fa-bars"></i>
            </Link>
          </div>
        </div>
        <div className="menu">
          {this.renderMenu(this.state.menu)}
        </div>
      </div>
    )
  }
}

export default Sidebar;
