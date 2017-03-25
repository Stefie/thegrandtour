import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';
import {Entity} from 'aframe-react';

export default class PosterText extends React.Component {
  render(){
    return(
      <Entity id='posterinfo' {...this.props}>

        <Entity text="value:A ONCE IN A LIFETIME GETAWAY; color: #f56a3b; font: ./app/assets/fonts/MBEmpire.fnt; fontImage: ./app/assets/fonts/MBEmpire.png; align: right;  width: 2;" rotation='-10 0 0' position='1.15 0.15 0' />

        <Entity text="value:THE GRAND TOUR; color: #302f31; font: ./app/assets/fonts/DharmaGothicBold.fnt; fontImage: ./app/assets/fonts/DharmaGothicBold.png; align: right;  width: 8.2;" rotation='-10 0 0' position='-1.23 -0.14 0' />

        <Entity geometry={{primitive: 'plane', width: '2.87', height: '0.013' }} material='color:#d8232a' position='1.44 -0.48 0' />

        <Entity text="value:JUPITER   SATURN   URANUS   NEPTUNE; color: #41a0a8; font: ./app/assets/fonts/MBEmpire.fnt; fontImage: ./app/assets/fonts/MBEmpire.png; align: right;  width: 4.73;" rotation='-10 0 0' position='0.57 -0.56 0' scale='0.35 0.35 1' />

        <Entity geometry={{primitive: 'plane', width: '0.01', height: '0.065' }} rotation='0 0 -25' material='color:#82b240; shader: flat;' position='0.315 -0.572 0' />
        <Entity geometry={{primitive: 'plane', width: '0.01', height: '0.065' }} rotation='0 0 -25' material='color:#82b240; shader: flat;' position='0.668 -0.572 0' />
        <Entity geometry={{primitive: 'plane', width: '0.01', height: '0.065' }} rotation='0 0 -25' material='color:#82b240; shader: flat;' position='1.028 -0.572 0' />
        <Entity primitive="a-obj-model" obj-model='obj: #posterText-obj; mtl: #posterText-mtl' position='1.3 -0.5 0' scale='0.8 0.8 0.8' rotation='90 0 0' />
      </Entity>
    );
  }
}
