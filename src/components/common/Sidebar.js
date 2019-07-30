import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [
        {
          icon: 'fas fa-coffee',
          text: 'Admin',
          href: '#',
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

  renderMenu(items) {
    return (
      <ul className="menu-items">
        {this.renderMenuItems(items)}
      </ul>
    )
  }

  renderMenuItems(items) {
    return items.map((item, index) => {
      return (
        <li className={`menu-item ${item.active ? 'active' : ''}`} key={index}>
          <a
            href="#"
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
          </a>

          {Array.isArray(item.menu)
            && item.menu.length
            && this.renderMenu(item.menu)
          }
        </li>
      )
    });
  }

  render() {
    return (
      <div className="sidebar">
        <div className="branding d-flex align-items-center px-3">
          <div className="title w-100">
            CRADLE
          </div>
          <div className="toggle w-100 text-right">
            <a href="#">
              <i className="fas fa-bars"></i>
            </a>
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
