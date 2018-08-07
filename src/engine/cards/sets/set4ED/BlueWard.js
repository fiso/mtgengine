'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class BlueWard extends UnimplementedCard {
  constructor (game) {
    super(game, 'Blue Ward', 'Fourth Edition', '4ED');
  }
}

module.exports = BlueWard;
