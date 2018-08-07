'use strict';
const Constants = require('../../../Constants');
const RelentlessRatsBase = require('../setA25/RelentlessRats');

class RelentlessRats extends RelentlessRatsBase {
  constructor (game) {
    super(game, 'Relentless Rats', 'Fifth Dawn', '5DN');
  }
}

module.exports = RelentlessRats;
