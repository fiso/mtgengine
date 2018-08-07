'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class HurrJackal extends UnimplementedCard {
  constructor (game) {
    super(game, 'Hurr Jackal', 'Fourth Edition', '4ED');
  }
}

module.exports = HurrJackal;
