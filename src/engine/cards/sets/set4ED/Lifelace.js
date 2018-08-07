'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class Lifelace extends UnimplementedCard {
  constructor (game) {
    super(game, 'Lifelace', 'Fourth Edition', '4ED');
  }
}

module.exports = Lifelace;
