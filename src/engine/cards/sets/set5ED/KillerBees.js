'use strict';
const Constants = require('../../../Constants');
const KillerBeesBase = require('../setME3/KillerBees');

class KillerBees extends KillerBeesBase {
  constructor (game) {
    super(game, 'Killer Bees', 'Fifth Edition', '5ED');
  }
}

module.exports = KillerBees;
