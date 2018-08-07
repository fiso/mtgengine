'use strict';
const Constants = require('../../../Constants');
const RelicBarrierBase = require('../setWC04/RelicBarrier');

class RelicBarrier extends RelicBarrierBase {
  constructor (game) {
    super(game, 'Relic Barrier', 'Fifth Dawn', '5DN');
  }
}

module.exports = RelicBarrier;
