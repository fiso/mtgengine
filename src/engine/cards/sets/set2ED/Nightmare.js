'use strict';
const Constants = require('../../../Constants');
const NightmareBase = require('../setW17/Nightmare');

class Nightmare extends NightmareBase {
  constructor (game) {
    super(game, 'Nightmare', 'Unlimited Edition', '2ED');
  }
}

module.exports = Nightmare;
