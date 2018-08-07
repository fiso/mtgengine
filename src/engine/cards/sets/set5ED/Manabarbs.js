'use strict';
const Constants = require('../../../Constants');
const ManabarbsBase = require('../setM12/Manabarbs');

class Manabarbs extends ManabarbsBase {
  constructor (game) {
    super(game, 'Manabarbs', 'Fifth Edition', '5ED');
  }
}

module.exports = Manabarbs;
