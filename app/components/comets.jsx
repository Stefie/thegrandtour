import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';
import {Entity} from 'aframe-react';
import '../js/random-comet.js';

export default class Comets extends React.Component {
  _generateComet1(){
    return(
      <Entity id="comet-1"position="0 -1 -14" rotation="0 0 -90">
        <Entity geometry="primitive: sphere; radius: 0.1;" material="color: #ED3242;" />
        <Entity geometry="primitive: plane; width: 0.2; height: 8;" material="opacity: 0.5; color: #C9B99D;" position="0 4 0" />
        <Entity geometry="primitive: plane; width: 0.04; height: 8;" material="color: #3F8C85; shader: flat;" position="0 4 0.001" />
      </Entity>
    )
  }
  _generateComet2(){
    return(
      <Entity id="comet-2"position="0 -3 -14" rotation="0 0 -90">
        <Entity geometry="primitive: sphere; radius: 0.1;" material="color: #ED3242;" />
        <Entity geometry="primitive: plane; width: 0.2; height: 8;" material="opacity: 0.5; color: #C9B99D;" position="0 4 0" />
        <Entity geometry="primitive: plane; width: 0.04; height: 8;" material="color: #3F8C85; shader: flat;" position="0 4 0.001" />
      </Entity>
    )
  }
  _generateComet3(){
    return(
      <Entity id="comet-3"position="0 5 -17" rotation="0 0 -90">
        <Entity geometry="primitive: sphere; radius: 0.1;" material="color: #ED3242;" />
        <Entity geometry="primitive: plane; width: 0.2; height: 8;" material="opacity: 0.5; color: #C9B99D;" position="0 4 0" />
        <Entity geometry="primitive: plane; width: 0.04; height: 8;" material="color: #3F8C85; shader: flat;" position="0 4 0.001" />
      </Entity>
    )
  }
  render(){
    const comet1 = this._generateComet1();
    return(
      <Entity id="comets">
        {comet1}
      </Entity>
    );
  }
}
