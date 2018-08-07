'use strict';
const Constants = require('../../../Constants');
const ManaClashBase = require('../set9ED/ManaClash');

class ManaClash extends ManaClashBase {
  constructor (game) {
    super(game, 'Mana Clash', 'Fourth Edition', '4ED');
  }
}

module.exports = ManaClash;
