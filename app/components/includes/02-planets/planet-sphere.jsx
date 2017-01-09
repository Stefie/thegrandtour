import React from 'react';
import {Entity} from 'aframe-react';

export default props => (
	<Entity geometry={{ primitive: 'sphere', radius: '3' }}  { ...props } />
);
