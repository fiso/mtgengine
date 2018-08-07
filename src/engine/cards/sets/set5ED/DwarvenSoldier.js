'use strict';
const Constants = require('../../../Constants');
const DwarvenSoldierBase = require('../setMED/DwarvenSoldier');

class DwarvenSoldier extends DwarvenSoldierBase {
  constructor (game) {
    super(game, 'Dwarven Soldier', 'Fifth Edition', '5ED');
  }
}

module.exports = DwarvenSoldier;
