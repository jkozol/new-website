import React from 'react';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

class Work extends React.Component {
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
    ]

    return (
      <div className="container-fluid">
        <Header />
        <div className="row mt-5" id="pageBody">
          <div className="col-2 offset-1">
            <Sidebar links={links}/>
          </div>
          <div className="col-8 offset-1">
            <h1>Work</h1>
            <p>Welcome to work!</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Work;
