"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToweringIndrik extends UnimplementedCard {
  constructor(game) {
    super(game, "Towering Indrik", "Return to Ravnica", "RTR");
  }
}

module.exports = ToweringIndrik;
