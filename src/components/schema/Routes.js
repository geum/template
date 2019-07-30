import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Schema } from '@components';

class Routes extends React.Component {
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
