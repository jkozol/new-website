import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { history } from '../modules/store';

import Home from './Home';
import About from './About';
import Work from './Work';

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className='full-height'>
          <Route exact path="/home" component={ Home }/>
          <Route path="/about" component={ About } />
          <Route path="/work" component={ Work } />
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
