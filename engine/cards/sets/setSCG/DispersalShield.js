"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DispersalShield extends UnimplementedCard {
  constructor(game) {
    super(game, "Dispersal Shield", "Scourge", "SCG");
  }
}

module.exports = DispersalShield;
