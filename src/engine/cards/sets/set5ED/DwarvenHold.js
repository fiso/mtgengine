'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class DwarvenHold extends UnimplementedCard {
  constructor (game) {
    super(game, 'Dwarven Hold', 'Fifth Edition', '5ED');
  }
}

module.exports = DwarvenHold;
