if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Entity Generator component for A-Frame.
 * Create number of entities given a mixin.
 */
AFRAME.registerComponent('asteroid-belt', {
  schema: {
    num: {default: 400},
    radius: {default: 22},
    orbitDepth: {default: 1}
  },

  init: function () {
    var data = this.data;

    // Create entities with supplied mixin.
    for (var i = 0; i < data.num; i++) {
      var entity = document.createElement('a-entity');
      entity.setAttribute('mixin', data.mixin);
      this.el.appendChild(entity);
    }
  }
});
