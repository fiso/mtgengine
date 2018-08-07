'use strict';
const Constants = require('../../../Constants');
const AcquireBase = require('../setPI14/Acquire');

class Acquire extends AcquireBase {
  constructor (game) {
    super(game, 'Acquire', 'Fifth Dawn', '5DN');
  }
}

module.exports = Acquire;
