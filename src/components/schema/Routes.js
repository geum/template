import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Schema } from '@components';

/**
 * Schema Routes
 *
 * @extends React.Component
 */
class Routes extends React.Component {
  /**
   * Renders the component
   *
   * @return {Object}
   */
  render() {
    return (
      <Layout.Default>
        <Switch>
          <Route exact path="/admin/schema/search" component={Schema.Search} />
        </Switch>
      </Layout.Default>
    )
  }
}

export default Routes;
