import React, { Component } from 'react';

/**
 * Common Layout Blank
 *
 * @extends Component
 */
class Blank extends Component {
  /**
   * Renders the component
   *
   * @return {Component}
   */
  render() {
    return (
      <div className="admin-layout-blank">
        {this.props.children}
      </div>
    )
  }
}

/**
 * Common Layout Default
 *
 * @extends Component
 */
class Default extends Component {
  /**
   * Renders the component
   *
   * @return {Component}
   */
  render() {
    return (
      <div className="admin-layout-default">
        {this.props.children}
      </div>
    )
  }
}

const Layout = {
  Blank,
  Default
}

export default Layout;
