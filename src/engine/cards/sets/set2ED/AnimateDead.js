'use strict';
const Constants = require('../../../Constants');
const AnimateDeadBase = require('../setEMA/AnimateDead');

class AnimateDead extends AnimateDeadBase {
  constructor (game) {
    super(game, 'Animate Dead', 'Unlimited Edition', '2ED');
  }
}

module.exports = AnimateDead;
