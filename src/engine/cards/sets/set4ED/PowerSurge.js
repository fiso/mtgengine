'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class PowerSurge extends UnimplementedCard {
  constructor (game) {
    super(game, 'Power Surge', 'Fourth Edition', '4ED');
  }
}

module.exports = PowerSurge;
