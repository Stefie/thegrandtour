import React from 'react';
import {Entity} from 'aframe-react';
import {ObjModel, Image} from 'aframe-react-components';

class Spaceships extends React.Component {
	render(){
		return(
			<Entity {...this.props}>
				<Image material="src: #spaceship-1" position="0 0 0" geometry="width: 2; height: 2">
					<ObjModel obj-model='obj: #fuel-obj; mtl: #fuel-mtl' position='0.65 0.485 -0.2' scale='3 1 3' rotation='90 0 0' />
				</Image>
				<Image material="src: #spaceship-2" position="1.59 -0.64 0" geometry="width: 2; height: 1">
					<Entity geometry={{primitive: 'plane', width: '9', height: '0.11' }} material='color:#9c2548; opacity: 0.8' position="4.8 0.02 -0.1" />
				</Image>
				<Image material="src: #spaceship-3" position="1.55 0.59 0" geometry="width: 2; height: 1">
					<Entity geometry={{primitive: 'plane', width: '9', height: '0.07' }} material='color:#82b240; shader: flat; opacity: 0.8' position="4.79 0.09 -0.1" />
					<Entity geometry={{primitive: 'plane', width: '9', height: '0.07' }} material='color:#d85030; shader: flat; opacity: 0.8' position="4.89 0.02 -0.1" />
					<Entity geometry={{primitive: 'plane', width: '9', height: '0.07' }} material='color:#82b240; shader: flat; opacity: 0.8' position="4.79 -0.05 -0.1" />
				</Image>
				<Image material="src: #spaceship-4" position="2.74 -1.21 0" geometry="width: 1; height: 1">
					<ObjModel obj-model='obj: #fuel-obj; mtl: #fuel-mtl' position='0.9 0.07 0' scale='1 1 1' rotation='90 0 0' />
				</Image>
				<Image material="src: #spaceship-5" position="2.31 1.33 0" geometry="width: 2; height: 1">
					<ObjModel obj-model='obj: #fuel-5-obj; mtl: #fuel-5-mtl' position='0.52 0.48 -0.2' scale='2.5 1 2.5' rotation='90 0 0' />
				</Image>
			</Entity>
		);
	}
}


export default Spaceships;
