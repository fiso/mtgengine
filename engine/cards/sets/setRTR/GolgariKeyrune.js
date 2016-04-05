"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GolgariKeyrune extends UnimplementedCard {
  constructor(game) {
    super(game, "Golgari Keyrune", "Return to Ravnica", "RTR");
  }
}

module.exports = GolgariKeyrune;
