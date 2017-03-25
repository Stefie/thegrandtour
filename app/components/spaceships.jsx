import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';
import {Entity} from 'aframe-react';

export default class Spaceships extends React.Component {
	render(){
		return(
			<Entity position="-1.5 1.5 -18" {...this.props}>
				<Entity primitive="a-image" material="src: #spaceship-1" position="0 0 0" geometry="width: 2; height: 2">
					<Entity primitive="a-obj-model" obj-model='obj: #rocket-tail-obj; mtl: #rocket-tail-mtl' position='0.55 0 -0.2' scale='2 2 2' rotation='90 0 0' />
				</Entity>
				<Entity primitive="a-image" material="src: #spaceship-2" position="1.64 -0.64 0" geometry="width: 2; height: 1">
					<Entity geometry={{primitive: 'plane', width: '9', height: '0.11' }} material='color:#9a2939; opacity: 0.8' position="4.8 0 -0.1" />
				</Entity>
				<Entity primitive="a-image" material="src: #spaceship-3" position="1.6 0.59 0" geometry="width: 2; height: 1">
					<Entity geometry={{primitive: 'plane', width: '9', height: '0.07' }} material='color:#f1a948; shader: flat; opacity: 0.5' position="4.79 0.09 -0.1" />
					<Entity geometry={{primitive: 'plane', width: '9', height: '0.07' }} material='color:#34663e; shader: flat; opacity: 0.7' position="4.89 0.02 -0.1" />
					<Entity geometry={{primitive: 'plane', width: '9', height: '0.07' }} material='color:#f1a948; shader: flat; opacity: 0.5' position="4.79 -0.05 -0.1" />
				</Entity>
				<Entity primitive="a-image" material="src: #spaceship-4" position="2.74 -1.21 0" geometry="width: 1; height: 1">
					<Entity primitive="a-obj-model" obj-model='obj: #rocket-tail-obj; mtl: #rocket-tail-purple-mtl' position='0.46 -0.05 -0.02' scale='1 1 1' rotation='90 0 0' />
				</Entity>
				<Entity primitive="a-image" material="src: #spaceship-5" position="2.31 1.33 0" geometry="width: 2; height: 1">
					<Entity primitive="a-obj-model" obj-model='obj: #rocket-tail-obj; mtl: #rocket-tail-purple-mtl' position='0.52 0 -0.1' scale='1.7 1.3 1.3' rotation='90 0 0' />
				</Entity>
			</Entity>
		);
	}
}
