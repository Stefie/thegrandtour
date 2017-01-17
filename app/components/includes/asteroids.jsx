import React from 'react';
import {Entity} from 'aframe-react';

export default class Saturn extends React.Component {
	render(){
		return(
			<Entity position="-9 -1 0", rotation="0 100 0">
				<Entity geometry={{primitive: 'plane', width: '4', height: '0.02' }} material='color:#f1a948; shader: flat; opacity: 0.5' position="4.79 0.09 -0.1" />
				<Entity geometry={{primitive: 'plane', width: '9', height: '0.07' }} material='color:#34663e; shader: flat; opacity: 0.7' position="4.89 0.02 -0.1" />
			</Entity>
		);
	}
}
