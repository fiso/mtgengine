'use strict';
const Constants = require('../../../Constants');
const ManaGeyserBase = require('../setCNS/ManaGeyser');

class ManaGeyser extends ManaGeyserBase {
  constructor (game) {
    super(game, 'Mana Geyser', 'Fifth Dawn', '5DN');
  }
}

module.exports = ManaGeyser;
