import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';
import {Entity} from 'aframe-react';
import 'aframe-look-at-component';

export default class Planets extends React.Component {
  _generateSaturn(){
    return(
       <Entity id="saturn" position='-2 6.5 -28'>
        <Entity geometry={{ primitive: 'circle', radius: '12.3', segments: '50' }} material="src: #saturn; opacity:0.9; side: double;" position="1.5 -2 -0.5" />
        <Entity rotation='-35 -60 0' scale='0.6 1.7 1' position='2 1.6 -2.7'>
          <Entity geometry={{ primitive: 'ring', radiusInner: '10', radiusOuter: '11.2', segmentsTheta: '50' }} material='color: #e87e2f; opacity:0.8; transparent: true' />
          <Entity geometry={{ primitive: 'ring', radiusInner: '11.2', radiusOuter: '12.2', segmentsTheta: '50' }} material='color: #612448' />
          <Entity geometry={{ primitive: 'ring', radiusInner: '12.2', radiusOuter: '13', segmentsTheta: '50' }} material='color: #ad2936' />
        </Entity>
      </Entity>
    );
  }
  _generateJupiter(){
    return(
         <Entity primitive="a-image" position='15 3 -22' id="jupiter" material="side: double; transparent: true; src: #jupiter;  opacity: 0.9;" geometry="width: 20; height: 20;" />
    );
  }
  _generateEarth(){
    return(
      <Entity position="0 0 0">
          <a-animation attribute="rotation"
             dur="182600"
             easing="linear"
             from="0 0 0"
             to="0 360 0"
             repeat="indefinite"></a-animation>
           <Entity id="earth" geometry={{ primitive: 'circle', segments: '50', radius: '0.3'}} material="src: #earth; side: double;" rotation="0 0 0" scale="-1 1 1" position="0 0 -8">
            <a-animation attribute="rotation"
               dur="182600"
               easing="linear"
               from="0 0 0"
               to="0 -360 0"
               repeat="indefinite"></a-animation>
          </Entity>
      </Entity>
    );
  }
  _generateSun(){
    return(
      <Entity geometry={{ primitive: 'sphere', radius: '2' }} id="sun" material="src: #sun; opacity: 0.9" position="0 0 0" rotation="0 -90 -80" />
    );
  }
  _generatePlanetsCircle(){
    const planetsFlat = [
      {
        key: '1',
        id: 'mars',
        radius: '0.9',
        material: 'src: #mars-plane; transparent: true; opacity: 0.95',
        orbitTime: '',
        position: '-2.5 1 -13'
      },
      {
        key: '2',
        id: 'uranus',
        radius: '10',
        material: 'src: #stripes-yellow',
        orbitTime: '',
        position: '-33 5 -39'
      },
      {
        key: '3',
        id: 'neptune',
        radius: '4',
        material: 'src: #stripes-orange',
        orbitTime: '',
        position: '-18 19.2 -42'
      },
      {
        key: '4',
        id: 'mercury',
        radius: '0.2',
        material: 'src: #stripes-mercury',
        orbitTime: '44000',
        position: '0 0 -4'
      },
      {
        key: '5',
        id: 'venus',
        radius: '0.2',
        material: 'src: #stripes-venus',
        orbitTime: '112350',
        position: '0 0 -6'
      },
      {
        key: '6',
        id: 'comet',
        radius: '2',
        material: 'src: #stripes-purple',
        orbitTime: '8000000',
        position: '0 -8.5 -22'
      },
      {
        key: '7',
        id: 'pluto',
        radius: '4',
        material: 'src: #pluto',
        orbitTime: '',
        position: '0 0 -44'
      }
    ];
    return planetsFlat.map( (planet) => {
      const orbitTime = planet.orbitTime ? planet.orbitTime : false;
      return(
        <Entity position="0 0 0" key={planet.key}>
          {orbitTime &&
            <a-animation attribute="rotation"
             dur={planet.orbitTime}
             easing="linear"
             from="0 0 0"
             to="0 360 0"
             repeat="indefinite"></a-animation>
         }
          <Entity id={planet.id} geometry={{ primitive: 'circle', segments: '50', radius: planet.radius }} material={'side: double;' + planet.material} position={planet.position}>
            {orbitTime &&
              <a-animation attribute="rotation"
               dur={planet.orbitTime}
               easing="linear"
               from="0 0 0"
               to="0 -360 0"
               repeat="indefinite"></a-animation>
           }
           </Entity>
        </Entity>
      );
    });
  }
  render(){
    const sun = this._generateSun(),
          saturn = this._generateSaturn(),
          earth = this._generateEarth(),
          jupiter = this._generateJupiter(),
          planetsCircle = this._generatePlanetsCircle();
    return(
      <Entity id="planets"  { ...this.props }>
        {sun}
        {earth}
        {saturn}
        {planetsCircle}
        {jupiter}
      </Entity>
    )
  }
}
