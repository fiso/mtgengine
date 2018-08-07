'use strict';
const Constants = require('../../../Constants');
const DesertTwisterBase = require('../setCMA/DesertTwister');

class DesertTwister extends DesertTwisterBase {
  constructor (game) {
    super(game, 'Desert Twister', 'Fifth Edition', '5ED');
  }
}

module.exports = DesertTwister;
