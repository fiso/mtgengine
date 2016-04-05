"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HalcyonGlaze extends UnimplementedCard {
  constructor(game) {
    super(game, "Halcyon Glaze", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = HalcyonGlaze;
