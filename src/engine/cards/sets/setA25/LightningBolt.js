'use strict';
const assert = require('assert');
const Card = require('../../../objects/Card');

class LightningBolt extends Card {
  constructor (game) {
    super(game, 'Lightning Bolt', 'Masters 25', 'A25');
  }

  resolve (_, targets) {
    assert(targets.length === 1);
    targets[0].damage(3, this._guid, false);
  }
}

module.exports = LightningBolt;
