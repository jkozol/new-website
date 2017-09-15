import React from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends React.Component {
  state = {
    color: 'black',
  }

  componentWillMount() {
    this.setColor(this.props.links[0].color);
  }

  setColor = (color) => {
    this.setState({color: color});
  }

  render() {
    const { links } = this.props;
    const navStyle = {outlineColor: this.state.color};
    const linkStyle = {color: this.state.color};
    return (
      <div className="row vertical-center">
        <div className="col-4 my-auto">
          <div id="sideNav" style={navStyle}>
            <ul className="nav flex-column text-center">
              {links.map((link) =>
                <li className="nav-item" key={link.name}>
                  <NavLink className="nav-link" to={link.path} onMouseOver={() => this.setColor(link.color)}  onMouseLeave={() => this.setColor('black')}  onClick={() => this.setColor(link.color)} activeStyle={linkStyle}>{link.name}</NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Sidebar;
