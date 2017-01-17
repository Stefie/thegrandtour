import React from 'react';
import {Entity} from 'aframe-react';
import {Image} from 'aframe-react-components';
import {Fireworks} from '../includes/animated-extras';
import 'aframe-alongpath-component';
import 'aframe-look-at-component';

export class Saturn extends React.Component {
	render(){
		return(
			<Entity id="saturn" { ...this.props }>
				<Entity geometry={{ primitive: 'circle', radius: '12.3', segments: '50' }} material="src: #saturn; opacity:0.9;" position="1.5 -2 -0.5" />
				<Entity rotation='-35 -60 0' scale='0.6 1.7 1' position='2 1.6 -2.7'>
					<Entity geometry={{ primitive: 'ring', radiusInner: '10', radiusOuter: '11.2', segmentsTheta: '50' }} material='color: #e87e2f; opacity:0.8; transparent: true' />
					<Entity geometry={{ primitive: 'ring', radiusInner: '11.2', radiusOuter: '12.2', segmentsTheta: '50' }} material='color: #612448' />
					<Entity geometry={{ primitive: 'ring', radiusInner: '12.2', radiusOuter: '13', segmentsTheta: '50' }} material='color: #ad2936' />
				</Entity>
			</Entity>
		);
	}
}

export class Neptune extends React.Component {
	render(){
		return(
			<Image id="neptune" material="src: #neptune" geometry="width: 56; height: 28" { ...this.props }/>
		);
	}
}

export class Earth extends React.Component {
	render(){
		return(
			<Entity id="earth" geometry={{ primitive: 'circle', segments: '50', radius: '5'}} material="src: #earth" rotation="0 180 0" position="0 0 30" animation="property: rotation; dur: 90000000; easing: linear; loop: true; to: 0 180 -360" >
			</Entity>
		);
	}
}

export class Planets extends React.Component {
	_generatePlanetsSphere(){
		return(
			<Entity geometry={{ primitive: 'sphere', radius: '3' }} id="sun" material="src: #sun; opacity: 1" position="25 -8.5 65" rotation="0 -90 -80" />
		);
	}
	_generatePlanetsCircle(){
		{/* animation: 'property: rotation; dur: 60000; easing: linear; loop: true; to: -360 180 0', */}
		const planetsFlat = [
			{
				key: '1',
				id: 'mars',
				radius: '2.2',
				material: 'src: #mars-plane; transparent: true; opacity: 0.95',
				rotation: '0 0 0',
				animation: '',
				position: '-6.5 2.5 -11.5'
			},
			{
				key: '2',
				id: 'jupiter',
				radius: '5',
				material: 'src: #stripes-yellow',
				rotation: '0 0 0',
				animation: '',
				position: '-13.5 3 -14'
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
				key: '4',
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
	render(){
		const planetsSphere = this._generatePlanetsSphere();
		const planetsCircle = this._generatePlanetsCircle();
		return(
			<Entity id="planets">
				{planetsSphere}
				{planetsCircle}
			</Entity>
		)
	}
}
