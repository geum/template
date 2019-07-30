import React from 'react';
import { Common } from '@components';

/**
 * Layout Default Component
 *
 * @extends React.Component
 */
class Default extends React.Component {
  /**
   * Renders the component
   *
   * @return {Component}
   */
  render() {
    return (
      <div className="layout-default d-flex">
        <div className="sidebar-container">
          <Common.Sidebar />
        </div>
        <div className="content-container">
          <Common.Header />

          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Default;
