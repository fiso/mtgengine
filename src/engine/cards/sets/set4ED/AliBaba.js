'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class AliBaba extends UnimplementedCard {
  constructor (game) {
    super(game, 'Ali Baba', 'Fourth Edition', '4ED');
  }
}

module.exports = AliBaba;
