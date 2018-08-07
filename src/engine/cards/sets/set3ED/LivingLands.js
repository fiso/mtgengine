'use strict';
const Constants = require('../../../Constants');
const LivingLandsBase = require('../setME4/LivingLands');

class LivingLands extends LivingLandsBase {
  constructor (game) {
    super(game, 'Living Lands', 'Revised Edition', '3ED');
  }
}

module.exports = LivingLands;
