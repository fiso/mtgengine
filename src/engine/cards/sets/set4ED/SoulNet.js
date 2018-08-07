'use strict';
const Constants = require('../../../Constants');
const SoulNetBase = require('../set7ED/SoulNet');

class SoulNet extends SoulNetBase {
  constructor (game) {
    super(game, 'Soul Net', 'Fourth Edition', '4ED');
  }
}

module.exports = SoulNet;
