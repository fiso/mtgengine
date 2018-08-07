'use strict';
const Constants = require('../../../Constants');
const RockHydraBase = require('../setME4/RockHydra');

class RockHydra extends RockHydraBase {
  constructor (game) {
    super(game, 'Rock Hydra', 'Unlimited Edition', '2ED');
  }
}

module.exports = RockHydra;
