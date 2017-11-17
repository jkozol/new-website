import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

class NavBarTop extends React.Component {
  render() {
    const activeClassName = 'nav-item-active'

    const StyledNavBar = styled.ul`
      border-bottom: 2px solid ${props => props.colorActive};
    `;

    const StyledNavLink = styled(NavLink).attrs({
       activeClassName
     })`
      &.${activeClassName} {
        border: 2px solid ${props => props.colorActive};
        border-bottom: 2px solid white !important;
        position: relative;
        top: 1px;
      };
      &.${activeClassName}:hover {
        border: 2px solid ${props => props.colorActive};
        border-bottom: 2px solid white !important;
        position: relative;
        top: 1px;
      };
    `;

    return (
      <StyledNavBar className="nav nav-tabs" colorActive={this.props.colorActive}>
        <div className="nav-item mx-3">
          <StyledNavLink className="nav-link" to="/about" activeClassName={activeClassName} colorActive={this.props.colorActive}>About</StyledNavLink>
        </div>
        <div className="nav-item mx-3">
          <StyledNavLink className="nav-link" to="/work" activeClassName={activeClassName} colorActive={this.props.colorActive}>Work</StyledNavLink>
        </div>
      </StyledNavBar>
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


export default connect(makeMapStateToProps)(NavBarTop);
