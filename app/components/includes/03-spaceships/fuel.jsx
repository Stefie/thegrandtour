import React from 'react';
import {Entity} from 'aframe-react';
import {ObjModel, Image} from 'aframe-react-components';

export default props => (
	<Image geometry="width: 1.2; height: 1.2" {...props}>
		<ObjModel obj-model='obj: #fuel-obj; mtl: #fuel-mtl' position='0.9 0.07 0' scale='1 1 1' rotation='90 0 0' />
	</Image>
);
