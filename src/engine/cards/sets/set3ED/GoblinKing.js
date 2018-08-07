'use strict';
const Constants = require('../../../Constants');
const GoblinKingBase = require('../set10E/GoblinKing');

class GoblinKing extends GoblinKingBase {
  constructor (game) {
    super(game, 'Goblin King', 'Revised Edition', '3ED');
  }
}

module.exports = GoblinKing;
