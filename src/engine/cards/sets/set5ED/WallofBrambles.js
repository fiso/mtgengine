'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class WallofBrambles extends UnimplementedCard {
  constructor (game) {
    super(game, 'Wall of Brambles', 'Fifth Edition', '5ED');
  }
}

module.exports = WallofBrambles;
