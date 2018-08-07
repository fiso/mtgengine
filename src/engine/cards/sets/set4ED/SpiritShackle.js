'use strict';
const Constants = require('../../../Constants');
const SpiritShackleBase = require('../setME3/SpiritShackle');

class SpiritShackle extends SpiritShackleBase {
  constructor (game) {
    super(game, 'Spirit Shackle', 'Fourth Edition', '4ED');
  }
}

module.exports = SpiritShackle;
