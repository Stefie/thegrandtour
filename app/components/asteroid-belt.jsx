import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';
import {Entity} from 'aframe-react';
import 'aframe-entity-generator-component';
import '../js/random-asteroid.js';

export default class AsteroidBelt extends React.Component {
  render(){
    return(
      <Entity id="asteroid-belt-wrapper" material="side: double;" position="0 -2 0" rotation="-20 0 0 ">
        <Entity id="asteroid-belt" position="0 0 0" entity-generator="mixin: asteroid-circle; num: 400;">
          <a-animation attribute="rotation"
             dur="103560"
             easing="linear"
             from="0 0 0"
             to="0 360 0"
             repeat="indefinite"></a-animation>
        </Entity>
      </Entity>
    );
  }
}
