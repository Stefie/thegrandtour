import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Assets from './components/assets';
import Sky from './components/globals';
import Planets from './components/planets';
import Spaceships from './components/spaceships';
import Camera from './components/camera';
import PosterText from './components/posterText';
import AsteroidBelt from './components/asteroid-belt';
import Comets from './components/comets';

const CSS = require('./assets/styles/style.styl');

class TheGrandTour extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <Scene>
        <Assets />
        <Sky />
        <Planets />
        <Comets />
        <AsteroidBelt />

        <Entity entity-generator="mixin: comet; num: 20;" />

        <Spaceships id="spaceships" scale="1.5 1.5 1"/>
        <Camera>
          <PosterText position='-1.43 -1.4 -2.8' rotation='-10 0 0' />
        </Camera>

        <Entity primitive="a-light" light={{ color: '#fff', type: 'ambient', intensity: '1', angle:'0' }} position="0 0 0" />
        <Entity primitive="a-light" light={{ color: '#fff', type: 'directional', intensity: '0.3', angle:'0' }} position="11.5 -15 8" />

      </Scene>
    );
  }
}
ReactDOM.render(<TheGrandTour/>, document.getElementById('grand-tour'));
