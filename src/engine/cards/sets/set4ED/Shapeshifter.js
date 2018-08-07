'use strict';
const Constants = require('../../../Constants');
const ShapeshifterBase = require('../setTC18/Shapeshifter');

class Shapeshifter extends ShapeshifterBase {
  constructor (game) {
    super(game, 'Shapeshifter', 'Fourth Edition', '4ED');
  }
}

module.exports = Shapeshifter;
