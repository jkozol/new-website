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
      <div className="container">
        <div className="sticky-top">
          <Header />
        </div>
        <div>
          <Sidebar links={links}/>
        </div>
        <div>
          <h1>Work</h1>
          <p>Welcome Work!</p>
        </div>
      </div>
    );
  }
};

export default Work;
