'use strict';
const Constants = require('../../../Constants');
const DeathgripBase = require('../setME4/Deathgrip');

class Deathgrip extends DeathgripBase {
  constructor (game) {
    super(game, 'Deathgrip', 'Fourth Edition', '4ED');
  }
}

module.exports = Deathgrip;
