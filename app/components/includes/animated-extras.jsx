import React from 'react';
import {Entity} from 'aframe-react';
import 'aframe-animation-component';
import 'aframe-alongpath-component';

export default class Fireworks extends React.Component {
	render(){
		return(
			<Entity id="firework" { ...this.props }>

			</Entity>
		);
	}
}
