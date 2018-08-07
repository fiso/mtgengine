'use strict';
const Constants = require('../../../Constants');
const WildGrowthBase = require('../setC18/WildGrowth');

class WildGrowth extends WildGrowthBase {
  constructor (game) {
    super(game, 'Wild Growth', 'Fifth Edition', '5ED');
  }
}

module.exports = WildGrowth;
