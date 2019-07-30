import React from 'react';
import { Layout } from '@components';

/**
 * Main App Component
 *
 * @extends Component
 */
class App extends React.Component {
  /**
   * Renders the component
   *
   * @return {Component}
   */
  render() {
    return (
      <Layout.Default>
        <h1>Content Here</h1>
      </Layout.Default>
    )
  }
}

export default App;
