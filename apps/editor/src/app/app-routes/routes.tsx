import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {  Template } from '../index';
// export { default as Routes } from '../app-containers/Template';


// const Routes: React.FC = () => {
//   return (
//     <Router basename="/template">
//       <Switch>
//         <Route exact={true} path="/" component={withTemplatesEntry(TemplateLibrary)} />
//         <Route exact={true} path="/library" component={withTemplatesEntry(TemplateLibrary)} />
//         <Route path="/library/:id" component={withTemplateEntry(Template)} />
//         <Route path="/precedent-list" component={PrecedentList} />
//         {/* <Route component={NotFound} /> */}
//       </Switch>
//     </Router>
//   );
// };

// export default Routes;



function Routes() {
  return (
    <Template /> 
  );
}

export default Routes;