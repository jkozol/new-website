import React from 'react';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

class Home extends React.Component {
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
          <div className="col-2 ml-5">
            <Sidebar links={links}/>
          </div>
          <div className="col-8 offset-1" id="content">
            <h1>Home</h1>
            <p>Welcome home!</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
