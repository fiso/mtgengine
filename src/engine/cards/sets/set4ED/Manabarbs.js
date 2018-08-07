'use strict';
const Constants = require('../../../Constants');
const ManabarbsBase = require('../setM12/Manabarbs');

class Manabarbs extends ManabarbsBase {
  constructor (game) {
    super(game, 'Manabarbs', 'Fourth Edition', '4ED');
  }
}

module.exports = Manabarbs;
