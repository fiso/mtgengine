"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpikeCannibal extends UnimplementedCard {
  constructor (game) {
    super(game, "Spike Cannibal", "Exodus", "EXO");
  }
}

module.exports = SpikeCannibal;
