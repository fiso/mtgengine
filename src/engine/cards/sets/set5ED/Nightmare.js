'use strict';
const Constants = require('../../../Constants');
const NightmareBase = require('../setW17/Nightmare');

class Nightmare extends NightmareBase {
  constructor (game) {
    super(game, 'Nightmare', 'Fifth Edition', '5ED');
  }
}

module.exports = Nightmare;
