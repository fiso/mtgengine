"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernoTrap extends UnimplementedCard {
  constructor(game) {
    super(game, "Inferno Trap", "Archenemy", "ARC");
  }
}

module.exports = InfernoTrap;
