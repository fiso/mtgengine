'use strict';
const Constants = require('../../../Constants');
const SengirVampireBase = require('../setW17/SengirVampire');

class SengirVampire extends SengirVampireBase {
  constructor (game) {
    super(game, 'Sengir Vampire', 'Revised Edition', '3ED');
  }
}

module.exports = SengirVampire;
