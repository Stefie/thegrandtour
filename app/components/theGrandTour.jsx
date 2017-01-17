import 'aframe';
import {Entity, Scene} from 'aframe-react';
import {Light, Image} from 'aframe-react-components';
import React from 'react';
import ReactDOM from 'react-dom';
import Assets from './includes/assets';
import {SpaceCubeMap, Camera, PosterText} from './includes/globals';
import {Planets, Saturn, Neptune, Earth} from './includes/planets';
import Spaceships from './includes/spaceships';
import Fireworks from './includes/animated-extras';

class TheGrandTour extends React.Component {
	constructor(){
		super();
		this.state = {
			launch: false,
			intro: false,
			finalScene: false
		}
	}
	_launchRockets(){
		console.log(this);
		this.setState({
			launch: true
		 })
		if(this.state.launch) {

			this.setState({
				launch: false,
				intro: true
			})
		}
	}
	_playIntro(){
		const visitor = document.querySelector('#visitor');
		this.setState({intro: false})
	}
	render() {
		if(this.state.finalScene){
			const spaceships = document.querySelector('#spaceships');
		}
		return (
			<Scene>
				<Entity id="start-tour" start-animation bmfont-text={{ text: 'Look here to launch THE GRAND TOUR', color: '#41a0a8', align: 'left', width: '550', fnt: './app/assets/fonts/DharmaGothicBold.fnt', fntImage: './app/assets/fonts/DharmaGothicBold.png' }} rotation='-180 0 0' position='-1 7 1' />

				<Assets />
				<Planets />
				<Earth />
				<Fireworks position="0 0 20"/>
				<Saturn position="-0.5 6.5 -20.5" />
				<Neptune position="25 3 -18.2" />
				<Spaceships id="spaceships" rotation="0 0 0" />
				<SpaceCubeMap />

				<Camera />

				<Light light={{ color: '#fff', type: 'ambient', intensity: '1', angle:'0' }} position="0 0 0" />
				<Light light={{ color: '#fff', type: 'directional', intensity: '0.3', angle:'0' }} position="13 -23 8" />

			</Scene>
		);
	}
}
ReactDOM.render(<TheGrandTour/>, document.getElementById('thegrandtour'));
