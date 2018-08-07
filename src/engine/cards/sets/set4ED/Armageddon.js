'use strict';
const Constants = require('../../../Constants');
const ArmageddonBase = require('../setA25/Armageddon');

class Armageddon extends ArmageddonBase {
  constructor (game) {
    super(game, 'Armageddon', 'Fourth Edition', '4ED');
  }
}

module.exports = Armageddon;
