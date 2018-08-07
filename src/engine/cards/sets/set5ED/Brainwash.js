'use strict';
const Constants = require('../../../Constants');
const BrainwashBase = require('../setPZ2/Brainwash');

class Brainwash extends BrainwashBase {
  constructor (game) {
    super(game, 'Brainwash', 'Fifth Edition', '5ED');
  }
}

module.exports = Brainwash;
