'use strict';
const Constants = require('../../../Constants');
const BogRatsBase = require('../set6ED/BogRats');

class BogRats extends BogRatsBase {
  constructor (game) {
    super(game, 'Bog Rats', 'Fifth Edition', '5ED');
  }
}

module.exports = BogRats;
