'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class Chaoslace extends UnimplementedCard {
  constructor (game) {
    super(game, 'Chaoslace', 'Fourth Edition', '4ED');
  }
}

module.exports = Chaoslace;
