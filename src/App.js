import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Schema } from '@components';

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
      <Switch>
        <Route path="/admin/schema" component={Schema.Routes} />
      </Switch>
    )
  }
}

export default App;
