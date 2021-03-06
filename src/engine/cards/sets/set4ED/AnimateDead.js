'use strict';
const Constants = require('../../../Constants');
const AnimateDeadBase = require('../setEMA/AnimateDead');

class AnimateDead extends AnimateDeadBase {
  constructor (game) {
    super(game, 'Animate Dead', 'Fourth Edition', '4ED');
  }
}

module.exports = AnimateDead;
