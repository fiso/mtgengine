'use strict';
const Constants = require('../../../Constants');
const UnholyStrengthBase = require('../setDVD/UnholyStrength');

class UnholyStrength extends UnholyStrengthBase {
  constructor (game) {
    super(game, 'Unholy Strength', 'Fifth Edition', '5ED');
  }
}

module.exports = UnholyStrength;
