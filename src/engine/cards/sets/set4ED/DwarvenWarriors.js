'use strict';
const Constants = require('../../../Constants');
const DwarvenWarriorsBase = require('../set5ED/DwarvenWarriors');

class DwarvenWarriors extends DwarvenWarriorsBase {
  constructor (game) {
    super(game, 'Dwarven Warriors', 'Fourth Edition', '4ED');
  }
}

module.exports = DwarvenWarriors;
