'use strict';
const assert = require('assert');
const Card = require('../../object/Card');

class LightningStrike extends Card {
  constructor (game) {
    super(game, 'Lightning Strike', 'Core Set 2019', 'M19');
  }

  resolve (_, targets) {
    assert(targets.length === 1);
    targets[0].damage(3, this._guid, false);
  }
}

module.exports = LightningStrike;
