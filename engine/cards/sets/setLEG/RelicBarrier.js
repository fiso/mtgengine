"use strict";
const Constants = require ("../../../Constants");
const RelicBarrierBase = require("../set5DN/RelicBarrier");

class RelicBarrier extends RelicBarrierBase {
  constructor(game) {
    super(game, "Relic Barrier", "Legends", "LEG");
  }
}

module.exports = RelicBarrier;
