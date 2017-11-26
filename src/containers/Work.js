import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { setColorActive, setColorText, setColorHover } from '../modules/actions/colors';


class Work extends React.Component {

  render() {
    // var container = document.getElementById('container');
    // var containerWidth = container.clientWidth;
    // var containerHeight = container.clientHeight;
    //
    // var shapeDiameter = 15;
    // var containerPadding = 2.5;
    //
    // var shapes = ["square", "circle", "triangle"];
    // var allShapes;
    //
    // var amount = 200;
    // var escape = amount * 100;
    // var k = 0;
    // for (var i = 0; i < amount; i++) {
    //   k++;
    //   var shapePositionX = Math.floor(Math.random() * (containerWidth - shapeDiameter)) + containerPadding;
    //   var shapePositionY = Math.floor(Math.random() * (containerHeight - shapeDiameter)) + containerPadding;
    //   var shapeRotation = Math.floor(Math.random() * 360);
    //
    //   var shape = document.createElement('div');
    //   shape.className = shapes[i % 3];
    //   shape.innerHTML = '';
    //   shape.style.top = shapePositionY + 'px';
    //   shape.style.left = shapePositionX + 'px';
    //   shape.style.transform = "rotate(" + shapeRotation + "deg)";
    //   container.appendChild(shape);
    //
    //   allShapes = container.children;
    //   if (i > 0) {
    //     for (var j = 0; j < allShapes.length - 1; j++) {
    //       if (collide(allShapes[j], allShapes[allShapes.length - 1])) {
    //         container.removeChild(container.lastChild);
    //         i--;
    //       }
    //     }
    //   }
    //   if (k >= escape) {
    //     alert("capped at " + i);
    //     i = amount;
    //   }
    // }
    //
    //
    // function collide(obj1, obj2) {
    //   var shapeDiameter1, shapeDiameter2;
    //   if(obj1.className == "square"){
    //     shapeDiameter1 = 15;
    //   }else if(obj1.className == "circle"){
    //     shapeDiameter1 = 10.5;
    //   }else if(obj1.className == "triangle"){
    //     shapeDiameter1 = 11.5;
    //   }
    //   if(obj2.className == "square"){
    //     shapeDiameter2 = 16;
    //   }else if(obj2.className == "circle"){
    //     shapeDiameter2 = 11;
    //   }else if(obj2.className == "triangle"){
    //     shapeDiameter2 = 12;
    //   }
    //
    //
    //   var myleft = parseInt(obj1.style.left, 10);
    //   var myright = myleft + shapeDiameter1;
    //   var mytop = parseInt(obj1.style.top, 10);
    //   var mybottom = mytop + shapeDiameter1;
    //   var otherleft = parseInt(obj2.style.left, 10);
    //   var otherright = otherleft + shapeDiameter2;
    //   var othertop = parseInt(obj2.style.top, 10);
    //   var otherbottom = othertop + shapeDiameter2;
    //   var collide = true;
    //   if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
    //     collide = false;
    //   }
    //   return collide;
    // }
    //
    //
    // #container {
    //   width: 300px;
    //   height: 300px;
    //   background-color: gray;
    //   position: relative;
    // }
    //
    // .square {
    //   box-sizing: border-box;
    //   border: 1px solid Gainsboro;
    //   position: absolute;
    //   width: 10px;
    //   height: 10px;
    //   z-index: 5;
    // }
    //
    // .circle {
    //   box-sizing: border-box;
    //   border: 1px solid Gainsboro;
    //   border-radius: 100%;
    //   position: absolute;
    //   width: 10px;
    //   height: 10px;
    // }
    //
    // .triangle {
    //   width: 0;
    //   height: 0;
    //   border-style: solid;
    //   border-width: 0 5px 8.7px 5px;
    //   border-color: transparent transparent Gainsboro transparent;
    //   position: absolute;
    // }



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
    ];

    const StyledDiv = styled.div`
      outline-style: solid;
      outline-color: ${props => props.colorActive};
      background-color: white;
      box-shadow: 5px 5px 7px #888888;
    `;


    return (
      <div className="container-fluid">
        <Header />
        <div className="row mt-5" id="pageBody">
          <div className="col-2 ml-5">
            <Sidebar links={links}/>
          </div>
          <StyledDiv className="col-8 offset-1" colorActive={this.props.colorActive}>
            <h1>Work</h1>
            <p>Welcome to work!</p>
          </StyledDiv>
        </div>
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

export default connect(makeMapStateToProps, mapDispatchToProps)(Work);
