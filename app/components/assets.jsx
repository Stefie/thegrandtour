import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';
import {Entity} from 'aframe-react';

module.exports = function(props) {
  return (
    <a-assets>
      <img src="./app/assets/images/sky-space.png" id="sky" />
      {/* Planets */}
      <img src="./app/assets/images/earth.png" id="earth" />
      <img src="./app/assets/images/saturn.png" id="saturn" />
      <img src="./app/assets/images/mars-sphere.png" id="mars" />
      <img src="./app/assets/images/mars-plane.png" id="mars-plane" />
      <img src="./app/assets/images/jupiter.png" id="jupiter" />
      <img src="./app/assets/images/jupiter-asteroids.png" id="jupiter-asteroids" />
      <img src="./app/assets/images/sun-sphere.png" id="sun" />
      <img src="./app/assets/images/pluto.png" id="pluto" />
      <img src="./app/assets/images/stripes-mercury.png" id="stripes-mercury" />
      <img src="./app/assets/images/stripes-venus.png" id="stripes-venus" />
      <img src="./app/assets/images/stripes-yellow.png" id="stripes-yellow" />
      <img src="./app/assets/images/stripes-orange.png" id="stripes-orange" />
      <img src="./app/assets/images/stripes-purple.png" id="stripes-purple" />
      {/* Spaceships */}
      <img src="./app/assets/images/spaceship-1.png" id="spaceship-1" />
      <img src="./app/assets/images/spaceship-2.png" id="spaceship-2" />
      <img src="./app/assets/images/spaceship-3.png" id="spaceship-3" />
      <img src="./app/assets/images/spaceship-4.png" id="spaceship-4" />
      <img src="./app/assets/images/spaceship-5.png" id="spaceship-5" />
      {/* 3d objects */}
      <a-asset-item id="rocket-tail-obj" src="./app/assets/3dObjects/rocket-tail.obj"></a-asset-item>
      <a-asset-item id="rocket-tail-mtl" src="./app/assets/3dObjects/rocket-tail.mtl"></a-asset-item>
      <a-asset-item id="rocket-tail-purple-mtl" src="./app/assets/3dObjects/rocket-tail-purple.mtl"></a-asset-item>
      <a-asset-item id="posterText-obj" src="./app/assets/3dObjects/every175years-min.obj"></a-asset-item>
      <a-asset-item id="posterText-mtl" src="./app/assets/3dObjects/every175years-min.mtl"></a-asset-item>

      {/* MIXINS */}
      {/* Asteroids */}
      <a-mixin id="asteroid-circle" random-asteroid="radius: 22;"></a-mixin>
      <a-mixin id="comet" random-comet=""></a-mixin>
    </a-assets>
  );
}
