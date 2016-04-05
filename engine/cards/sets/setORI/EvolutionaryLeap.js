"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EvolutionaryLeap extends UnimplementedCard {
  constructor(game) {
    super(game, "Evolutionary Leap", "Magic Origins", "ORI");
  }
}

module.exports = EvolutionaryLeap;
