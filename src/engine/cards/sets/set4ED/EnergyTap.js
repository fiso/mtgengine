'use strict';
const Constants = require('../../../Constants');
const EnergyTapBase = require('../setPZ2/EnergyTap');

class EnergyTap extends EnergyTapBase {
  constructor (game) {
    super(game, 'Energy Tap', 'Fourth Edition', '4ED');
  }
}

module.exports = EnergyTap;
