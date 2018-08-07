'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class HollowTrees extends UnimplementedCard {
  constructor (game) {
    super(game, 'Hollow Trees', 'Fifth Edition', '5ED');
  }
}

module.exports = HollowTrees;
