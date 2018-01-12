import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { history } from '../modules/store';

import Home from './Home';
import About from './About';
import Work from './Work';
import Test from './Test';

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={ Home }/>
          <Route path="/about" component={ About } />
          <Route path="/work" component={ Work } />
          <Route path="/test" component={ Test } />
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
