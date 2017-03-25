AFRAME.registerComponent('random-asteroid', {
  schema: {
    radius: {default: 22},
    orbitDepth: {default: 1},
  },

  update: function () {
    var data = this.data;
    var getRandomArbitrary = function(min, max) {
        return Math.random() * (max - min) + min;
    }
    var colors = ['#FAB14B', '#ED3242', '#82B240', '#41A0A8', '#873562'],
        asteroidOrbitStart = (data.radius - data.orbitDepth/2),
        asteroidOrbitEnd = (data.radius + data.orbitDepth/2),
        asteroidOrbit = getRandomArbitrary(asteroidOrbitStart, asteroidOrbitEnd),
        radians = getRandomArbitrary(0, 360) * Math.PI / 180;

    this.el.setAttribute('position', {
      x: Math.cos(radians) * asteroidOrbit,
      y: getRandomArbitrary(-1, 1),
      z: Math.sin(radians) * asteroidOrbit
    });
    this.el.setAttribute('material', {
      color: colors[Math.floor(Math.random() * colors.length)]
    });
    this.el.setAttribute('geometry', {
       primitive: 'sphere',
       radius: getRandomArbitrary(0.05, 0.15)
    });
  }

});
