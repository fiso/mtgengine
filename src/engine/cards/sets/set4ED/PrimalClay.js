'use strict';
const Constants = require('../../../Constants');
const PrimalClayBase = require('../setA25/PrimalClay');

class PrimalClay extends PrimalClayBase {
  constructor (game) {
    super(game, 'Primal Clay', 'Fourth Edition', '4ED');
  }
}

module.exports = PrimalClay;
