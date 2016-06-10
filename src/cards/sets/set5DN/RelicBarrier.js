"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RelicBarrier extends UnimplementedCard {
  constructor (game) {
    super(game, "Relic Barrier", "Fifth Dawn", "5DN");
  }
}

module.exports = RelicBarrier;
