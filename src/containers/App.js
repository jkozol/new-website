import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { history } from '../configureStore';

import Home from './Home';
import About from './About';
// import Header from './Header';
import Sidebar from './Sidebar';

class App extends React.Component {
  render() {
    const links = [
      {
        name: 'Home',
        path: '/home',
        color: 'red',
      },
      {
        name: 'About',
        path: '/about',
        color: 'green',
      },
      {
        name: 'HomeAlt',
        path: '/home',
        color: 'blue',
      },
    ]
    return (
      <ConnectedRouter history={history}>
        <div>
          <div className="row">
            <div className="col-12">
              space
            </div>
          </div>

          <Sidebar links={links} />

          <div className="container">
            <Route exact path="/home" component={ Home }/>
            <Route path="/about" component={ About } />
          </div>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
