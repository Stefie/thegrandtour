import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';
import {Entity} from 'aframe-react';

export default class Camera extends React.Component {
  render(){
    return(
      <Entity id="visitor" camera look-controls rotation="0 0 0" position="0 0.5 -9.5" {...this.props} >
      </Entity>
    );
  }
}
