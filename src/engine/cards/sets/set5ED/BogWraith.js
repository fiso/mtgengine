'use strict';
const Constants = require('../../../Constants');
const BogWraithBase = require('../setM10/BogWraith');

class BogWraith extends BogWraithBase {
  constructor (game) {
    super(game, 'Bog Wraith', 'Fifth Edition', '5ED');
  }
}

module.exports = BogWraith;
