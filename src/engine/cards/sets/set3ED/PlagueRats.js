'use strict';
const Constants = require('../../../Constants');
const PlagueRatsBase = require('../set5ED/PlagueRats');

class PlagueRats extends PlagueRatsBase {
  constructor (game) {
    super(game, 'Plague Rats', 'Revised Edition', '3ED');
  }
}

module.exports = PlagueRats;
