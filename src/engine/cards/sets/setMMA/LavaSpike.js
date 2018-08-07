"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavaSpike extends UnimplementedCard {
  constructor (game) {
    super(game, "Lava Spike", "Modern Masters", "MMA");
  }
}

module.exports = LavaSpike;
