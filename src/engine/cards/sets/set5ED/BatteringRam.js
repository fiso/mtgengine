'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class BatteringRam extends UnimplementedCard {
  constructor (game) {
    super(game, 'Battering Ram', 'Fifth Edition', '5ED');
  }
}

module.exports = BatteringRam;
