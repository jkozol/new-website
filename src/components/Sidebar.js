import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setColorActive, setColorText, setColorHover } from '../modules/actions/colors';


class Sidebar extends React.Component {

  render() {
    const { links } = this.props;
    let navStyle = {outlineColor: this.props.colorActive};
    let linkStyle = {color: this.props.colorText};
    // if (this.state.hover) {
    //  linkStyle = {backgroundColor: 'red'}
    // } else {
    //  linkStyle = {backgroundColor: 'blue'}
    // }
    return (
      <div id="sidebar" style={navStyle}>
        <ul className="nav flex-column text-center">
          {links.map((link) =>
            <li className="nav-item" key={link.name}>
              <NavLink className="nav-link navStyle" to={link.path} onMouseOver={() => this.props.setColorHover(link.color)}  onMouseLeave={() => {this.props.setColorText(this.props.colorActive); this.props.setColorHover('black');}}  onClick={() => this.props.setColorActive(link.color)} activeStyle={linkStyle}>{link.name}</NavLink>
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
      colorText: state.colors.colorText,
      colorActive: state.colors.colorActive,
      colorHover: state.colors.colorHover,
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
  setColorHover: color => {
    dispatch(setColorHover(color));
  },
});

export default connect(makeMapStateToProps, mapDispatchToProps)(Sidebar);
