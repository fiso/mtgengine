'use strict';
const Constants = require('../../../Constants');
const AetherStormBase = require('../setME2/AetherStorm');

class AetherStorm extends AetherStormBase {
  constructor (game) {
    super(game, 'Aether Storm', 'Fifth Edition', '5ED');
  }
}

module.exports = AetherStorm;
