'use strict';
const Constants = require('../../../Constants');
const GiantGrowthBase = require('../setBBD/GiantGrowth');

class GiantGrowth extends GiantGrowthBase {
  constructor (game) {
    super(game, 'Giant Growth', 'Fifth Edition', '5ED');
  }
}

module.exports = GiantGrowth;
