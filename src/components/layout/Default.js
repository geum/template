import React from 'react';
import { Common } from '@components';

class Default extends React.Component {
  render() {
    return (
      <div className="layout-default d-flex">
        <div className="sidebar-container">
          <Common.Sidebar />
        </div>
        <div className="content-container">
          <Common.Header />

          <div className="content container-fluid">
            <h1>Content Here</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Default;
