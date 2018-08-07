'use strict';
const Constants = require('../../../Constants');
const ManabarbsBase = require('../setM12/Manabarbs');

class Manabarbs extends ManabarbsBase {
  constructor (game) {
    super(game, 'Manabarbs', 'Revised Edition', '3ED');
  }
}

module.exports = Manabarbs;
