'use strict';
const Constants = require('../../../Constants');
const DisintegrateBase = require('../setTSB/Disintegrate');

class Disintegrate extends DisintegrateBase {
  constructor (game) {
    super(game, 'Disintegrate', 'Fifth Edition', '5ED');
  }
}

module.exports = Disintegrate;
