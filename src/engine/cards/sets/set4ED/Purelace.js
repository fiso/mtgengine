'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class Purelace extends UnimplementedCard {
  constructor (game) {
    super(game, 'Purelace', 'Fourth Edition', '4ED');
  }
}

module.exports = Purelace;
