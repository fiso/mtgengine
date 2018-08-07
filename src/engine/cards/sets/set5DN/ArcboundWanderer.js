'use strict';
const Constants = require('../../../Constants');
const ArcboundWandererBase = require('../setMMA/ArcboundWanderer');

class ArcboundWanderer extends ArcboundWandererBase {
  constructor (game) {
    super(game, 'Arcbound Wanderer', 'Fifth Dawn', '5DN');
  }
}

module.exports = ArcboundWanderer;
