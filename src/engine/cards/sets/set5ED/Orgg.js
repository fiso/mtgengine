'use strict';
const Constants = require('../../../Constants');
const OrggBase = require('../setTSB/Orgg');

class Orgg extends OrggBase {
  constructor (game) {
    super(game, 'Orgg', 'Fifth Edition', '5ED');
  }
}

module.exports = Orgg;
