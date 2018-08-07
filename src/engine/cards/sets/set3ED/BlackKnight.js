'use strict';
const Constants = require('../../../Constants');
const BlackKnightBase = require('../setME4/BlackKnight');

class BlackKnight extends BlackKnightBase {
  constructor (game) {
    super(game, 'Black Knight', 'Revised Edition', '3ED');
  }
}

module.exports = BlackKnight;
