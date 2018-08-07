'use strict';
const Constants = require('../../../Constants');
const FloodBase = require('../setPZ2/Flood');

class Flood extends FloodBase {
  constructor (game) {
    super(game, 'Flood', 'Fifth Edition', '5ED');
  }
}

module.exports = Flood;
