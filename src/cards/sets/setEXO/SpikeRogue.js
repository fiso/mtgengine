"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpikeRogue extends UnimplementedCard {
  constructor (game) {
    super(game, "Spike Rogue", "Exodus", "EXO");
  }
}

module.exports = SpikeRogue;
