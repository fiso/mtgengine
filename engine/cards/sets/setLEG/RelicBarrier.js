"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RelicBarrierBase = require("../set5DN/RelicBarrier.js");

class RelicBarrier extends RelicBarrierBase {
  constructor(game) {
    super(game, "Relic Barrier", "Legends", "LEG");
  }
}

module.exports = RelicBarrier;
