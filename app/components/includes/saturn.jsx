import React from 'react';
import {Entity} from 'aframe-react';

export default props => (
	<Entity {...props}>
		<Entity geometry={{ primitive: 'circle', radius: '12.3', segments: '50' }} material="src: #saturn; opacity:0.9;" position="1.5 -2 -1" />
		<Entity rotation='-40 -60 0' scale='0.6 1.7 1' position='1.3 1.6 -2.7'>
			<Entity geometry={{ primitive: 'ring', radiusInner: '10', radiusOuter: '11.2', segmentsTheta: '50' }} material='color: #e87e2f; opacity:0.8' />
			<Entity geometry={{ primitive: 'ring', radiusInner: '11.2', radiusOuter: '12.2', segmentsTheta: '50' }} material='color: #612448' />
			<Entity geometry={{ primitive: 'ring', radiusInner: '12.2', radiusOuter: '13', segmentsTheta: '50' }} material='color: #ad2936' />
		</Entity>
	</Entity>
);
