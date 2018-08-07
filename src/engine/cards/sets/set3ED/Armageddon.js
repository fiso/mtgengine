'use strict';
const Constants = require('../../../Constants');
const ArmageddonBase = require('../setA25/Armageddon');

class Armageddon extends ArmageddonBase {
  constructor (game) {
    super(game, 'Armageddon', 'Revised Edition', '3ED');
  }
}

module.exports = Armageddon;
