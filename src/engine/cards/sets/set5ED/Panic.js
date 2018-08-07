'use strict';
const Constants = require('../../../Constants');
const PanicBase = require('../setME2/Panic');

class Panic extends PanicBase {
  constructor (game) {
    super(game, 'Panic', 'Fifth Edition', '5ED');
  }
}

module.exports = Panic;
