'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class ElHajjaj extends UnimplementedCard {
  constructor (game) {
    super(game, 'El-Hajjâj', 'Fourth Edition', '4ED');
  }
}

module.exports = ElHajjaj;
