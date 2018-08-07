'use strict';
const Constants = require('../../../Constants');
const AnimateWallBase = require('../setMED/AnimateWall');

class AnimateWall extends AnimateWallBase {
  constructor (game) {
    super(game, 'Animate Wall', 'Unlimited Edition', '2ED');
  }
}

module.exports = AnimateWall;
