"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GolgariDecoy extends UnimplementedCard {
  constructor(game) {
    super(game, "Golgari Decoy", "Return to Ravnica", "RTR");
  }
}

module.exports = GolgariDecoy;
