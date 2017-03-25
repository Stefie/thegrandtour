/**
AFRAME.registerComponent('laser', {
  schema: {
    speed: { default: 1 }
  },

  init: function () {
    var el = this.el;
    var geometry = 'primitive: box; height: 2; width: 0.1; depth: 0.1';
    var material = 'color: yellow';
    el.setAttribute('geometry', geometry);
    el.setAttribute('material', material);
  },

  tick: function () {
    var el = this.el;
    var position = el.getAttribute('position');
    position.y += this.data.speed;
    el.setAttribute('position', position);
  }
});
**/
AFRAME.registerComponent('random-comet', {
  schema: {
    position:{default: {
      x: 0,
      y: 0,
      z: 20
    }},
    rotation:{default: '0 0 -90'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    var getRandomArbitrary = function(min, max) {
        return Math.random() * (max - min) + min;
    }
    var headColors = ['#FAB14B', '#ED3242', '#82B240', '#41A0A8', '#873562'],
        tailColors = ['#FAB14B', '#F58A37', '#EF5237', '#ED3242', '#C9B99D', '#F1A948'],
        radius = getRandomArbitrary(0.05, 0.12),
        tailLength = getRandomArbitrary(20, 30);

    /** Wrapper entity **/
    this.el.setAttribute('position', {
      x: getRandomArbitrary(-40, 40),
      y: getRandomArbitrary(-6, 10),
      z: getRandomArbitrary(-19, -21.5)
    });
    this.el.setAttribute('rotation', {
      x: 0,
      y: 0,
      z: -90
    });

    /** Head **/
    var head = document.createElement('a-entity');
    head.setAttribute('material', {
      color: headColors[Math.floor(Math.random() * headColors.length)],
      shader: 'flat'
    });
    head.setAttribute('geometry', {
       primitive: 'sphere',
       radius: radius
    });
    this.el.appendChild(head);

    /** Tail **/
    var tail = document.createElement('a-entity');
    tail.setAttribute('material', {
      color: tailColors[Math.floor(Math.random() * tailColors.length)],
      shader: 'flat',
      opacity: getRandomArbitrary(0.2, 0.8)
    });
    tail.setAttribute('geometry', {
       primitive: 'plane',
       width: (radius * 2),
       height: tailLength
    });
    tail.setAttribute('position', {
      x: 0,
      y: (tailLength / 2),
      z: 0
    });
    this.el.appendChild(tail);
  }
});
