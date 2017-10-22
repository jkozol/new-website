import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setColorActive, setColorText } from '../modules/actions/colors';


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

  setActiveColor = (color) => {
    this.setState({color: color})
  }

  render() {
    const { links } = this.props;
    const navStyle = {outlineColor: this.props.colorActive};
    const linkStyle = {color: this.props.colorText};

    return (
      <div id="sidebar">
        <ul className="nav flex-column text-center">
          {links.map((link) =>
            <li className="nav-item" key={link.name}>
              <NavLink className="nav-link navStyle" to={link.path} onMouseOver={() => this.props.setColorText(link.color)}  onMouseLeave={() => this.props.setColorText('black')}  onClick={() => this.props.setColorActive(link.color)} activeStyle={linkStyle}>{link.name}</NavLink>
            </li>
          )}
        </ul>
      </div>
    );
  }
};

const makeMapStateToProps = (state, props) => {
  const mapStateToProps = (state, props) => {
    return {
      colorHover: state.colorHover,
      colorActive: state.colorActive,
    }
  };
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch) => ({
  setColorActive: color => {
    dispatch(setColorActive(color));
  },
  setColorText: color => {
    dispatch(setColorText(color));
  },
});

export default connect(makeMapStateToProps, mapDispatchToProps)(Sidebar);
