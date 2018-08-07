"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MechanizedProduction extends UnimplementedCard {
  constructor (game) {
    super(game, "Mechanized Production", "Aether Revolt", "AER");
  }
}

module.exports = MechanizedProduction;
