import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Common from '@components/common';
import Schema from '@components/schema';

/**
 * Schema Routes
 *
 * @extends Component
 */
class Routes extends Component {
  /**
   * Renders the component
   *
   * @return {Component}
   */
  render() {
    return (
      <Common.Layout.Default>
        <Switch>
          <Route
            exact
            path="/admin/schema/search"
            component={Schema.Search}
          />

          <Route
            exact
            path="/admin/schema/create"
            render={props => <Schema.Form {...props} action="create" />}
          />

          <Route
            exact
            path="/admin/schema/update/:schema"
            render={props => <Schema.Form {...props} action="update" />}
          />
        </Switch>
      </Common.Layout.Default>
    )
  }
}

export default Routes;
