import React from 'react';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

class About extends React.Component {
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
      <div className="full-height">
        <div className="container">
          <div>
            <Header />
          </div>
        </div>
        <div className="mx-0 px-0" id="topNavLine"></div>
        <div className="container full-height" id="pageBody">
          <div className="row full-height">
            <div className="col-4 my-auto">
              <Sidebar links={links}/>
            </div>
            <div className="col-8" id="contents">
              <h1>About</h1>
              <p>Welcome home!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default About;
