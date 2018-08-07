'use strict';
const Constants = require('../../../Constants');
const BogWraithBase = require('../setM10/BogWraith');

class BogWraith extends BogWraithBase {
  constructor (game) {
    super(game, 'Bog Wraith', 'Unlimited Edition', '2ED');
  }
}

module.exports = BogWraith;
