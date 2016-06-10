"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpontaneousCombustion extends UnimplementedCard {
  constructor (game) {
    super(game, "Spontaneous Combustion", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SpontaneousCombustion;
