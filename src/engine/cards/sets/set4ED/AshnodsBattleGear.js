'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class AshnodsBattleGear extends UnimplementedCard {
  constructor (game) {
    super(game, "Ashnod's Battle Gear", 'Fourth Edition', '4ED');
  }
}

module.exports = AshnodsBattleGear;
