'use strict';
const Constants = require('../../../Constants');
const MountainGoatBase = require('../set6ED/MountainGoat');

class MountainGoat extends MountainGoatBase {
  constructor (game) {
    super(game, 'Mountain Goat', 'Fifth Edition', '5ED');
  }
}

module.exports = MountainGoat;
