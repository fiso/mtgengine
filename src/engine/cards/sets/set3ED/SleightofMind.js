'use strict';
const Constants = require('../../../Constants');
const SleightofMindBase = require('../set5ED/SleightofMind');

class SleightofMind extends SleightofMindBase {
  constructor (game) {
    super(game, 'Sleight of Mind', 'Revised Edition', '3ED');
  }
}

module.exports = SleightofMind;
