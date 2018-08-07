'use strict';
const Constants = require('../../../Constants');
const HealBase = require('../setME3/Heal');

class Heal extends HealBase {
  constructor (game) {
    super(game, 'Heal', 'Fifth Edition', '5ED');
  }
}

module.exports = Heal;
