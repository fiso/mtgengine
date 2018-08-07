'use strict';
const Constants = require('../../../Constants');
const CrusadeBase = require('../setDDF/Crusade');

class Crusade extends CrusadeBase {
  constructor (game) {
    super(game, 'Crusade', 'Fourth Edition', '4ED');
  }
}

module.exports = Crusade;
