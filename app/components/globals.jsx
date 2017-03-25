import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';
import {Entity} from 'aframe-react';


export default class Sky extends React.Component {
  render(){
    return(
      <Entity id="sky" geometry={{primitive: 'sphere', radius: 1000}} material={{shader: 'flat', src: '#sky'}}  scale="1 1 -1">
          <a-animation attribute="rotation"
             dur="1000000"
             easing="linear"
             from="0 0 0"
             to="0 360 0"
             repeat="indefinite"></a-animation>
         </Entity>
    );
  }
}
