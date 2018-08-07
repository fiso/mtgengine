'use strict';
const Constants = require('../../../Constants');
const ManabarbsBase = require('../setM12/Manabarbs');

class Manabarbs extends ManabarbsBase {
  constructor (game) {
    super(game, 'Manabarbs', 'Unlimited Edition', '2ED');
  }
}

module.exports = Manabarbs;
