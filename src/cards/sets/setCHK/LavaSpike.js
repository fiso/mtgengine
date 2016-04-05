"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavaSpike extends UnimplementedCard {
  constructor(game) {
    super(game, "Lava Spike", "Champions of Kamigawa", "CHK");
  }
}

module.exports = LavaSpike;
