"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpikeFeeder extends UnimplementedCard {
  constructor(game) {
    super(game, "Spike Feeder", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SpikeFeeder;
