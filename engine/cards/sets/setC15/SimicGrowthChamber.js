"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimicGrowthChamber extends UnimplementedCard {
  constructor(game) {
    super(game, "Simic Growth Chamber", "Commander 2015", "C15");
  }
}

module.exports = SimicGrowthChamber;
