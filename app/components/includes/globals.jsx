import React from 'react';
import {Entity} from 'aframe-react';
import {ObjModel} from 'aframe-react-components';

export class SpaceCubeMap extends React.Component {
	render(){
		return(
			<a-entity cubemap="folder: ./app/assets/images/nasa_cubemap/"></a-entity>
		);
	}
}

export class Camera extends React.Component {
	render(){
		return(
			<Entity>
				<Entity id="visitor" camera look-controls wasd-controls {...this.props} />
			</Entity>
		);
	}
}

export class PosterText extends React.Component {
	render(){
		return(
			<Entity id='posterinfo' {...this.props}>
				<Entity bmfont-text={{ text: 'A ONCE IN A LIFETIME GETAWAY', color: '#f56a3b', align: 'left', width: '800', fnt: './app/assets/fonts/MBEmpire.fnt', fntImage: './app/assets/fonts/MBEmpire.png' }} rotation='-10 0 0' position='0.8 0 0' scale='0.4 0.4 1' />
				<Entity bmfont-text={{ text: 'THE GRAND TOUR', color: '#302f31', align: 'left', width: '1200',  fnt: './app/assets/fonts/DharmaGothicBold.fnt', fntImage: './app/assets/fonts/DharmaGothicBold.png' }} rotation='-10 0 0' position='0 -0.43 0' scale='2.7 2 1' />
				<Entity geometry={{primitive: 'plane', width: '2.87', height: '0.013' }} material='color:#d8232a' position='1.44 -0.48 0' />
				<Entity bmfont-text={{ text: 'JUPITER   SATURN   URANUS   NEPTUNE', color: '#41a0a8', align: 'left', width: '800', fnt: './app/assets/fonts/MBEmpire.fnt', fntImage: './app/assets/fonts/MBEmpire.png' }} position='0 -0.6 0' scale='0.36 0.36 1' />
				<Entity geometry={{primitive: 'plane', width: '0.007', height: '0.058' }} rotation='0 0 -25' material='color:#82b240; shader: flat;' position='0.305 -0.575 0' />
				<Entity geometry={{primitive: 'plane', width: '0.007', height: '0.058' }} rotation='0 0 -25' material='color:#82b240; shader: flat;' position='0.657 -0.575 0' />
				<Entity geometry={{primitive: 'plane', width: '0.007', height: '0.058' }} rotation='0 0 -25' material='color:#82b240; shader: flat;' position='1.018 -0.575 0' />
				<ObjModel obj-model='obj: #posterText-obj; mtl: #posterText-mtl' position='1.3 -0.5 0' scale='0.8 0.8 0.8' rotation='90 0 0' />
			</Entity>
		);
	}
}
