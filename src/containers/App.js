import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { history } from '../configureStore';

import Home from './Home';
import About from './About';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Header />

          <div className="container">
            <Route exact path="/" component={ Home }/>
            <Route path="/about" component={ About } />
          </div>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
