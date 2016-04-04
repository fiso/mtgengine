"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RelicBarrier extends Card {
  constructor(game) {
    super(game, "Relic Barrier", "Fifth Dawn", "5DN");
  }
}

module.exports = RelicBarrier;
