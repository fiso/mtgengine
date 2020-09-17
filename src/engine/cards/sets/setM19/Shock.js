'use strict';
const assert = require('assert');
const Card = require('../../UnimplementedCard');

class Shock extends Card {
  constructor (game) {
    super(game, 'Shock', 'Core Set 2019', 'M19');
  }

  resolve (_, targets) {
    assert(targets.length === 1);
    targets[0].damage(2, this._guid, false);
  }
}

module.exports = Shock;
