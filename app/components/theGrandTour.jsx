import 'aframe';
import 'aframe-bmfont-text-component';
import 'aframe-animation-component';
import {Entity, Scene} from 'aframe-react';
import {Light, Image} from 'aframe-react-components';
import React from 'react';
import ReactDOM from 'react-dom';
import Assets from './includes/assets';
import {SpaceCubeMap, Camera, PosterText} from './includes/globals';
import Saturn from './includes/saturn';
import PlanetSphere from './includes/02-planets/planet-sphere';
import Spaceships from './includes/03-spaceships/spaceships';

class TheGrandTour extends React.Component {
	_generateFlatPlanets(){
		const planetsFlat = [
			{
				key: '1',
				id: 'earth',
				radius: '5',
				material: 'src: #earth',
				rotation: '-90 0 0',
				animation: 'property: rotation; dur: 60000; easing: linear; loop: true; to: -90 360 0',
				position: '0 -30 0'
			},
			{
				key: '2',
				id: 'jupiter',
				radius: '5',
				material: 'src: #stripes-yellow',
				rotation: '0 0 0',
				animation: '',
				position: '-14.5.5 3 -14'
			},
			{
				key: '3',
				id: 'pluto',
				radius: '2',
				material: 'src: #stripes-orange',
				rotation: '0 0 0',
				animation: '',
				position: '-10 10.2 -16'
			},
			{
				key: '5',
				id: 'striped-2',
				radius: '1',
				material: 'src: #stripes-purple',
				rotation: '0 0 0',
				animation: '',
				position: '0 -8.5 -10'
			}
		];
		return planetsFlat.map( (planet) => {
			return(<Entity id={planet.id} key={planet.key} geometry={{ primitive: 'circle', segments: '50', radius: planet.radius }} material={planet.material} rotation={planet.rotation} position={planet.position} animation={planet.animation} />);
		});
	}
	render() {
		const planetsFlat = this._generateFlatPlanets();
		return (
			<Scene>
				<Assets />
				{ planetsFlat }
				<Saturn id="saturn" position="-0.5 6.5 -20.5" />
				<Image material="src: #neptune" position="25 3 -18.2" geometry="width: 56; height: 28" />

				<PlanetSphere id="mars" material="src: #mars; opacity:0.9" position="-9 3 -15" rotation="-80 0 20" />
				<PlanetSphere id="sun" material="src: #sun; opacity: 1" position="48 -70 15" rotation="0 0 -170" scale="8 8 8"/>

				<Spaceships id="spaceships" position="-0.5 1.3 -6.5" rotation="0 0 0" />
				<SpaceCubeMap />
				<Camera position="0 0 0">
					<PosterText position='-1.43 -1.2 -2.8' rotation='-10 0 0' />
				</Camera>

				<Light light={{ color: '#fff', type: 'ambient', intensity: '1', angle:'0' }} position="0 0 0" />
				<Light light={{ color: '#fff', type: 'directional', intensity: '0.3', angle:'0' }} position="13 -23 8" />

			</Scene>
		);
	}
}
ReactDOM.render(<TheGrandTour/>, document.getElementById('thegrandtour'));
