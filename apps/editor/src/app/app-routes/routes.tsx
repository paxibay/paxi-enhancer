import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {  Template } from '../index';

const Routes: React.FC = () => {
  return (
    <Router basename="/template">
      <Switch>
        <Route path="/" component={Template} />

        {/* <Route exact={true} path="/" component={withTemplatesEntry(TemplateLibrary)} />
        <Route exact={true} path="/library" component={withTemplatesEntry(TemplateLibrary)} />
        <Route path="/precedent-list" component={PrecedentList} />
        <Route component={NotFound} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
