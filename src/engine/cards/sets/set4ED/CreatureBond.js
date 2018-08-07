'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class CreatureBond extends UnimplementedCard {
  constructor (game) {
    super(game, 'Creature Bond', 'Fourth Edition', '4ED');
  }
}

module.exports = CreatureBond;
